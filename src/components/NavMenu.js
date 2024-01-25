import React, { useState, useEffect } from 'react';
import api from "../constants/api";

function Navbar() {
  // Define state to store section titles and categories
  const [sections, setSections] = useState([]);
  const [subSections, setSubSections] = useState([]);

  // Function to fetch sections and categories
  useEffect(() => {
    // Fetch sections
    api.get('/section/getSectionMenu')
      .then((res) => {
        setSections(res.data.data);
      })
      .catch(() => {
        // Handle error
      });

    // Fetch categories
    api.get('/category/getCategories')
      .then((res) => {
        setSubSections(res.data.data);
      })
      .catch(() => {
        // Handle error
      });
  }, []); 

  // Function to filter categories for a specific section
  const getCategoriesForSection = (sectionId) => {
    return subSections.filter(subsection => subsection.section_id === sectionId);
  };

  return (
    <div className="col-xl-11 col-lg-10 next">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-rauto">
            {/* Map over sections array to generate navbar items */}
            {sections.map(section => (
              <li className="nav-item dropdown" key={section.section_id}>
                <a className="nav-link" href="/" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {section.section_title}
                </a>
                {/* Filter categories for current section */}
                {getCategoriesForSection(section.section_id).length > 0 && (
                  <ul className="dropdown-menu" aria-labelledby={`${section.section_id}Dropdown`}>
                    
                    {getCategoriesForSection(section.section_id).map(submenu => (
                      <li key={submenu.category_id}><a className="dropdown-item" href={submenu.url}>{submenu.category_title}</a></li>
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