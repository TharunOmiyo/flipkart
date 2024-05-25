import React, { useState } from "react";
import "./SideNav.css";

const SideNav = () => {
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "Fashion",
      subcategories: [
        {
          id: 2,
          name: "Men",
          subcategories: [
            {
              id: 3,
              name: "Ethnic Wear",
            },
            {
              id: 4,
              name: "Casual Wear",
            },
          ],
        },
        {
          id: 5,
          name: "Women",
          subcategories: [
            {
              id: 6,
              name: "Western Wear",
            },
            {
              id: 7,
              name: "Traditional Wear",
            },
          ],
        },
      ],
    },
    {
      id: 8,
      name: "Electronics",
      subcategories: [
        {
          id: 9,
          name: "Mobiles",
        },
        {
          id: 10,
          name: "Laptops",
        },
      ],
    },
  ]);

  const [expanded, setExpanded] = useState({});

  const handleHover = (id) => {
    setExpanded((prevExpanded) => ({ ...prevExpanded, [id]: true }));
  };

  const handleLeave = (id) => {
    setExpanded((prevExpanded) => ({ ...prevExpanded, [id]: false }));
  };

  return (
    <div className="side-nav">
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <span
              onMouseEnter={() => handleHover(category.id)}
              onMouseLeave={() => handleLeave(category.id)}
            >
              {category.name}
            </span>
            {expanded[category.id] && (
              <ul>
                {category.subcategories.map((subcategory) => (
                  <li key={subcategory.id}>
                    <span>{subcategory.name}</span>
                    {subcategory.subcategories && (
                      <ul>
                        {subcategory.subcategories.map((subsubcategory) => (
                          <li key={subsubcategory.id}>
                            <span>{subsubcategory.name}</span>
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
  );
};

export default SideNav;
