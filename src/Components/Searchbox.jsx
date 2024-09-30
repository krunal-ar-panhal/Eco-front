import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CiSearch } from "react-icons/ci";
import { setSearch, setShowSearch } from "../Redux/Shop/ShopSlice";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

const Searchbox = () => {
  const { search, showSearch } = useSelector((state) => state.shop);
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes('collection')  ) {
      setVisible(true)
    } else {
      setVisible(false)
    }
    console.log("search box me location",location);
    
  }, [location]);

  const variants = {
    open: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
    closed: { opacity: 0, height: 0, transition: { duration: 0.3 } },
  };

  return (
    <AnimatePresence>
      {showSearch && visible && (
        <motion.div
          className="border-t border-b bg-[#f4f4f5] text-center overflow-hidden"
          initial="closed"
          animate="open"
          exit="closed"
          variants={variants}
        >
          <div className="inline-flex items-center justify-center border border-gray-400 bg-[#f4f4f5] px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2 ">
            <input
              value={search}
              onChange={(e) => dispatch(setSearch(e.target.value))}
              type="text"
              placeholder="Search Product Here..."
              className="flex-1 outline-none bg-inherit text-sm"
            />
            <CiSearch className="w-4" />
          </div>
          <img
            onClick={() => dispatch(setShowSearch())}
            src="/assets/cross_icon.png"
            alt="cross"
            className="inline w-3 cursor-pointer"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Searchbox;
