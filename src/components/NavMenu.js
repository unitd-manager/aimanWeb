import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from "../constants/api";

function Navbar() {
  const [sections, setSections] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  useEffect(() => {
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

    api.get('/subcategory/getSubCategories')
      .then((res) => {
        setSubCategories(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching subcategories:", error);
      });
  }, []);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategoryId(categoryId);
  };

  const getCategoriesForSection = (sectionId) => {
    return categories.filter(category => category.section_id === sectionId);
  };

  const getSubCategoriesForCategory = (categoryId) => {
    return subCategories.filter(subcategory => subcategory.category_id === categoryId);
  };

  return (
    <div className="col-xl-11 col-lg-10 next">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-rauto">
            {sections.map(section => (
              <li className="nav-item dropdown" key={section.section_id}>
                <Link to={`/${section.section_title}`} className="nav-link">
                  {section.section_title}
                </Link>
                {getCategoriesForSection(section.section_id).length > 0 && (
                  <ul className="dropdown-menu" aria-labelledby={`${section.section_id}Dropdown`}>
                    {getCategoriesForSection(section.section_id).map(category => (
                      <li key={category.category_id}>
                        <div className="category">
                          <button className="dropdown-item" onClick={() => handleCategoryClick(category.category_id)}>{category.category_title}</button>
                          {selectedCategoryId === category.category_id && (
                            <ul className="dropdown-menu sub-dropdown-menu">
                              {getSubCategoriesForCategory(category.category_id).map(subcategory => (
                                <li key={subcategory.sub_category_id}>
                                  <Link to={`/${section.section_title}/${category.category_title}/${subcategory.sub_category_title}`} className="dropdown-item">{subcategory.sub_category_title}</Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <style>
        {`
          .sub-dropdown-menu {
            position: absolute;
            top: 0;
            left: 100%;
            z-index: 1000; /* Adjust the z-index as needed */
            background-color: #fff; /* Adjust the background color as needed */
            border: 1px solid #ccc; /* Adjust the border style as needed */
            padding: 0.5rem;
            min-width: 350px; /* Adjust the width as needed */
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Adjust the box shadow as needed */
          }
        `}
      </style>
    </div>
  );
}

export default Navbar;