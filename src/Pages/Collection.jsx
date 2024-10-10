import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Title from "../Components/Title";
import ProductItem from "../Components/ProductItem";
import Motion from "../Components/Motion";
import axios from "axios";
import toast from "react-hot-toast";

const Collection = () => {
  const {  search , showSearch } = useSelector((state) => state.shop);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relavent");
  const [products , setproducts] = useState([])


  const getAllCollection = async () => {
    try {
      const response = await axios.get('/api/product/list')
      console.log("Cellection response",response);
      setproducts(response.data.products)
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  useEffect(()=>{
    getAllCollection();
  },[])

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productCopy = products.slice();

    if (showSearch && search) {
      productCopy = productCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productCopy = productCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (subCategory.length > 0) {
      productCopy = productCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }
    setFilterProducts(productCopy);
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory,search,showSearch,products]);

  const sortProduct = () => {
    const fpCopy = filterProducts.slice();

    switch (sortType) {
      case "low-high":
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;

      case "high-low":
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  useEffect(() => {
    console.log(category);
    console.log(subCategory);
  }, [category, subCategory]);

  return (
    <Motion>
      {" "}
      <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
        <div className="min-w-60">
          <p
            onClick={() => setShowFilter(!showFilter)}
            className="my-2 text-xl flex items-center cursor-pointer gap-2 "
          >
            FILTERS
            <img
              src="/assets/dropdown_icon.png"
              alt=""
              className={`h-3 sm:hidden text-2xl transition-transform duration-500 ease-in-out ${
                showFilter ? "rotate-90" : ""
              }`}
            />
          </p>
          <div
            className={`border border-gray-300 pl-5 py-3 mt-5  overflow-hidden transition-all duration-500 ease-in-out ${
              showFilter ? "max-h-[1000px] opacity-1000" : "max-h-0 opacity-0"
            } sm:max-h-none sm:opacity-100`}
          >
            <p className="mb-3 text-sm font-medium">CATEGORIES</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-3"
                  value={"Men"}
                  onChange={toggleCategory}
                />
                Men
              </p>
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-3"
                  value={"Women"}
                  onChange={toggleCategory}
                />
                Women
              </p>
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-3"
                  value={"Kids"}
                  onChange={toggleCategory}
                />
                Kids
              </p>
            </div>
          </div>

          <div
            className={`border border-gray-300 pl-5 py-3 mt-5  overflow-hidden transition-all duration-500 ease-in-out ${
              showFilter ? "max-h-[1000px] opacity-1000" : "max-h-0 opacity-0"
            } sm:max-h-none sm:opacity-100`}
            style={{ transitionProperty: "max-height, opacity" }}
          >
            <p className="mb-3 text-sm font-medium">TYPE</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-3"
                  value={"Topwear"}
                  onChange={toggleSubCategory}
                />
                Top wear
              </p>
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-3"
                  value={"Bottomwear"}
                  onChange={toggleSubCategory}
                />
                Bottom wear
              </p>
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-3"
                  value={"Winterwear"}
                  onChange={toggleSubCategory}
                />
                Winter wear
              </p>
            </div>
          </div>
        </div>
        {/* RIGHT SIDE */}
        <div className="flex-1">
          <div className="flex justify-between text-base sm:text-2xl mb-4">
            <Title text1={"ALL"} text2={"COLLECTIONS"} />
            <select
              onChange={(e) => setSortType(e.target.value)}
              className="border-2  bg-[#f4f4f5] border-gray-300 text-sm px-2"
            >
              <option value="relavent">Sort by : Relavent</option>
              <option value="low-high">Sort by : Low to High</option>
              <option value="high-low">Sort by : High to Low</option>
            </select>
          </div>

          {/* map products */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
            {filterProducts.map((item, index) => (
              <ProductItem
                key={item._id}
                name={item.name}
                id={item._id}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </div>
    </Motion>
  );
};

export default Collection;
