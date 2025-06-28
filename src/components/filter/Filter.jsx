import React, { useEffect, useState } from "react";
import "./Filter.css";
import { axiosClient } from "../../utils/AxiosClient.js";
import Button from "../Ui/Button/Button.jsx";

function Filter({ selected, onSelect }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategory();
  }, []);

  async function getCategory() {
    const response = await axiosClient.get("/products/categories");
    console.log(response);
    setCategories(response.data);
  }

  function clearFilter() {
    onSelect(null);
  }

  return (
    <div className="filters">
      <h4>Select Category</h4>
      <div className="category">
        {categories.map((cat) => (
          <label key={cat}>
            <input
              type="radio"
              name="category"
              value={cat}
              checked={selected === cat}
              onChange={() => onSelect(cat)}
            />
            {cat.charAt(0).toUpperCase() + cat.slice(1).toLowerCase()}
          </label>
        ))}
      </div>

      <div className="filter-buttons">
        <Button type="secondary" onClick={clearFilter} size="small">Clear filter</Button>
      </div>
    </div>
  );
}

export default Filter;
