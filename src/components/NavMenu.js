import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from "../constants/api";

function Navbar() {
  const [sections, setSections] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  useEffect(() => {
    // Fetch sections, categories, and subcategories
    api.get('/section/getSectionMenu')
      .then((res) => {
        setSections(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching sections:", error);
      });

    api.get('/category/getCategories')
      .then((res) => {
        setCategories(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });

    api.get('/subcategory/getSubCategory')
      .then((res) => {
        setSubCategories(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching subcategories:", error);
      });
  }, []);

  // Function to filter categories for a specific section
  const getCategoriesForSection = (sectionId) => {
    return categories.filter(category => category.section_id === sectionId);
  };

  // Function to filter subcategories for a specific category
  const getSubCategoriesForCategory = (categoryId) => {
    return subCategories.filter(subcategory => subcategory.category_id === categoryId);
  };

  // Handle category click event
  const handleCategoryClick = (categoryId) => {
    setSelectedCategoryId(categoryId);
  };

  return (
    <div className="col-xl-11 col-lg-10 next">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-rauto">
            {/* Map over sections array to generate navbar items */}
            {sections.map(section => (
              <li className="nav-item dropdown" key={section.section_id}>
                {/* Replace anchor tag with Link */}
                <Link to={`/${section.section_title}`} className="nav-link">
                  {section.section_title}
                </Link>
                {/* Filter categories for current section */}
                {getCategoriesForSection(section.section_id).length > 0 && (
                  <ul className="dropdown-menu" aria-labelledby={`${section.section_id}Dropdown`}>
                    {getCategoriesForSection(section.section_id).map(category => (
                      <li key={category.category_id}>
                        {/* Handle category click */}
                        <Link to={`/${section.section_title}/${category.category_title}`} className="dropdown-item" onClick={() => handleCategoryClick(category.category_id)}>
                          {category.category_title}
                        </Link>
                        {/* Render subcategories if category is selected */}
                        {selectedCategoryId === category.category_id && (
                          <ul className="dropdown-submenu">
                            {getSubCategoriesForCategory(category.category_id).map(subcategory => (
                              <li key={subcategory.sub_category_id}>
                                {/* Render subcategory links */}
                                <Link to={`/${section.section_title}/${category.category_title}/${subcategory.sub_category_title}`} className="dropdown-item">
                                  {subcategory.sub_category_title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
