import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import style from "./Home.module.css";
import data from "./productData";
import { FaAngleDown } from "react-icons/fa";
import Title from "../Title/Title";
import img from "../../assets/b21.jpg";
import Loader from "../Loader/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductModal from "./ProductModel";

function Home() {
  const { searchTerm } = useOutletContext();
  console.log("Search Term from Outlet Context:", searchTerm);
  const [showDropDown, setShowDropDown] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loader, setLoader] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [sortType, setSortType] = useState(null);
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  });

  // Simulate loading effect
  useEffect(() => {
    setTimeout(() => {
      setLoader(true);
    }, 900);
  }, []);

  // Save favorites to localStorage
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Filtering products based on category and search
  useEffect(() => {
    let filtered = data;

    if (selectedCategory !== "All") {
      filtered = filtered.filter((item) => item.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    console.log("Filtered Products:", filtered);
    setFilteredProducts(filtered);
  }, [searchTerm, selectedCategory]);

  // Sorting logic applied after filtering
  const sortedProducts = React.useMemo(() => {
    let sorted = [...filteredProducts];

    if (sortType === "lowToHigh") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortType === "highToLow") {
      sorted.sort((a, b) => b.price - a.price);
    } else if (sortType === "aToZ") {
      sorted.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortType === "zToA") {
      sorted.sort((a, b) => b.title.localeCompare(a.title));
    }

    return sorted;
  }, [filteredProducts, sortType]);

  const dropDown = () => {
    setShowDropDown(!showDropDown);
  };

  const handleSort = (type) => {
    setSortType(type);
    setShowDropDown(false);
  };

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
  };

  const handleFavorite = (item) => {
    const updatedFavorites = favorites.some((fav) => fav.id === item.id)
      ? favorites.filter((fav) => fav.id !== item.id)
      : [...favorites, item];

    setFavorites(updatedFavorites);

    toast.success(
      updatedFavorites.some((fav) => fav.id === item.id)
        ? "Added to Favorites!"
        : "Removed from Favorites!",
      { autoClose: 2000 }
    );
  };

  return (
    <>
      {loader ? (
        <>
          <Title
            title="#stayhome"
            subTitle="Save more with coupons up to 70% off!"
            backgroundImage={img}
          />

          {/* Category Filter */}
          <div className={style.categoryFilter}>
            {["All", "Headphones", "Earphones", "Monitors", "Amplifiers"].map(
              (category) => (
                <button
                  key={category}
                  className={selectedCategory === category ? style.active : ""}
                  onClick={() => handleCategoryFilter(category)}
                >
                  {category}
                </button>
              )
            )}
          </div>

          {/* Product Sorting */}
          <div className={style.product_container}>
            <div className={style.product_heading}>
              <h1>New Segments</h1>
              <div className={style.sortSection}>
                <p onClick={dropDown}>
                  Sort By <FaAngleDown />
                </p>
                {showDropDown && (
                  <div className={style.dropdown}>
                    <ul>
                      <li onClick={() => handleSort("lowToHigh")}>
                        Price: Low to High
                      </li>
                      <li onClick={() => handleSort("highToLow")}>
                        Price: High to Low
                      </li>
                      <li onClick={() => handleSort("aToZ")}>
                        Alphabetically: A to Z
                      </li>
                      <li onClick={() => handleSort("zToA")}>
                        Alphabetically: Z to A
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Product List */}
            <div className={style.product}>
              {sortedProducts.length > 0 ? (
                sortedProducts.map((item) => (
                  <div
                    className={style.product_details}
                    key={item.id}
                    onClick={() => setSelectedProduct(item)}
                  >
                    <img src={item.src} alt={item.title} />
                    <div className={style.details}>
                      <h6>{item.title}</h6>
                      <p>{item.desc}</p>
                      <div className={style.addCart}>
                        <p>₹ {item.price}</p>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleFavorite(item);
                          }}
                        >
                          {favorites.some((fav) => fav.id === item.id)
                            ? "Unfavorite"
                            : "Favorite"}
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className={style.noProduct}>No products found.</p>
              )}
            </div>
          </div>
        </>
      ) : (
        <Loader />
      )}

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
      <ToastContainer />
    </>
  );
}

export default Home;
