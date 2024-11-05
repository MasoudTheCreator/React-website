import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
// import Title from "./title";
import { products } from "../assets/frontend_assets/assets";
import Card from "./card";

const AllProducts = () => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [types, setTypes] = useState([]);
  const [sortBy, setSortBy] = useState("relevant");

  // Load products initially
  useEffect(() => {
    setData(products);
  }, []);

  // Handle category filtering
  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setCategories([...categories, value]);
    } else {
      setCategories(categories.filter((cat) => cat !== value));
    }
  };

  // Handle type filtering
  const handleTypeChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setTypes([...types, value]);
    } else {
      setTypes(types.filter((type) => type !== value));
    }
  };

  // Handle sort change
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  // Filter and sort products
  const filteredProducts = data
    .filter((product) => {
      return true;
    })
    .filter((product) => {
      // Filter by categories
      if (categories.length === 0) return true;
      return categories.includes(product.category);
    })
    .filter((product) => {
      // Filter by types (subCategory)
      if (types.length === 0) return true;
      return types.includes(product.subCategory);
    })
    .sort((a, b) => {
      if (sortBy === "priceLowToHigh") return a.price - b.price;
      if (sortBy === "priceHighToLow") return b.price - a.price;
      return 0; // No sorting for "relevant"
    });

  return (
    <>
      <div className="flex">
        {/* Filters Section */}
        <div className="w-1/6 p-4">
          <h3 className="font-bold">Filters</h3>

          <div className="mt-4 border border-gray-300 p-2 font-thin text-sm">
            <h4 className="font-semibold pb-3">Categories</h4>
            <div className="space-y-2">
              <div>
                <label>
                  <input
                    type="checkbox"
                    value="Men"
                    onChange={handleCategoryChange}
                  />{" "}
                  Men
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="checkbox"
                    value="Women"
                    onChange={handleCategoryChange}
                  />{" "}
                  Women
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="checkbox"
                    value="Kids"
                    onChange={handleCategoryChange}
                  />{" "}
                  Kids
                </label>
              </div>
            </div>
          </div>

          <div className="mt-4 border border-gray-300 p-2 font-thin text-sm">
            <h4 className="font-semibold pb-3">Type</h4>
            <div className="space-y-2">
              <div>
                <label>
                  <input
                    type="checkbox"
                    value="Topwear"
                    onChange={handleTypeChange}
                  />{" "}
                  Topwear
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="checkbox"
                    value="Bottomwear"
                    onChange={handleTypeChange}
                  />{" "}
                  Bottomwear
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="checkbox"
                    value="Winterwear"
                    onChange={handleTypeChange}
                  />{" "}
                  Winterwear
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className="w-5/6 p-4">
          {/* All Collections Header */}
          <div className="flex justify-between items-center py-5">
            <div className="flex items-center gap-2 text-3xl">
              <h1 className="text-gray-500">ALL</h1>
              <h1 className="text-gray-700">COLLECTIONS</h1>
              <p className="bg-gray-700 h-0.5 w-12"></p>
            </div>

            {/* Sort By Dropdown */}
            <div className="inline-flex items-center border border-gray-300 p-2 text-sm">
              <label htmlFor="sortBy" className="mr-2">Sort by:</label>
              <select
                id="sortBy"
                value={sortBy}
                onChange={handleSortChange}
                className="border p-2"
              >
                <option value="relevant">Relevance</option>
                <option value="priceLowToHigh">Price Low to High</option>
                <option value="priceHighToLow">Price High to Low</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 m-1">
            {filteredProducts.map((el) => {
              return <Card key={el.id} el={el} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

AllProducts.propTypes = {
  searchQuery: PropTypes.string,
};

export default AllProducts;