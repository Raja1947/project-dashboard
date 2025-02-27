import React, { useState, useEffect } from "react";
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
  const [showDropDown, setShowDropDown] = useState(false);
  const [product, setProduct] = useState(data);
  const [loader, setLoader] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  });

  useEffect(() => {
    setTimeout(() => {
      setLoader(true);
    }, 900);
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const dropDown = () => {
    setShowDropDown(!showDropDown);
  };

  const handleSort = (sortType) => {
    let sortedProducts = [...product];
    if (sortType === "lowToHigh") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortType === "highToLow") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (sortType === "aToZ") {
      sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortType === "zToA") {
      sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
    }
    setProduct(sortedProducts);
    setShowDropDown(false);
  };

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setProduct(data);
    } else {
      setProduct(data.filter((item) => item.category === category));
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const handleFavorite = (item) => {
    const updatedFavorites = favorites.find((fav) => fav.id === item.id)
      ? favorites.filter((fav) => fav.id !== item.id)
      : [...favorites, item];

    setFavorites(updatedFavorites);

    toast.success(
      updatedFavorites.find((fav) => fav.id === item.id)
        ? "Added to Favorites!"
        : "Removed from Favorites!",
      { autoClose: 2000 }
    );
  };

  const filteredProducts = product.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {loader ? (
        <>
          <Title
            title="#stayhome"
            subTitle="Save more with coupons up to 70% off!"
            backgroundImage={img}
          />

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

            <div className={style.product}>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((item) => (
                  <div
                    className={style.product_details}
                    key={item.id}
                    onClick={() => handleProductClick(item)}
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
                          {favorites.find((fav) => fav.id === item.id)
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
        <ProductModal product={selectedProduct} onClose={closeModal} />
      )}
      <ToastContainer />
    </>
  );
}

export default Home;
