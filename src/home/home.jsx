import React, { useEffect, useState } from "react";
import "./home.css";
import { API_URL } from "../service/API_URL.jsx";
import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import banner1 from "../assets/banner1.webp";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.webp";
import banner4 from "../assets/banner4.webp";
import banner5 from "../assets/banner5.jpg";
import banner6 from "../assets/banner6.jpg";
import banner7 from "../assets/banner7.webp";
import banner8 from "../assets/banner8.webp";
import banner9 from "../assets/banner9.webp";
import banner10 from "../assets/banner10.webp";
import banner11 from "../assets/banner11.jpg";
import banner12 from "../assets/banner12.webp";
import titleTL from "../assets/titleTL.webp";
import btnBuy from "../assets/btn-buy.png";
import gifTopSale from "../assets/gif-topsale.gif";
import gifCamNang from "../assets/gif-camnang.gif";
import gifInAn from "../assets/gif-inan.gif";
import gifKokomi from "../assets/gif-kokomi.gif";
import gifKokomi2 from "../assets/gif-kokomi2.gif";
import gifBalo from "../assets/gif-balo.gif";
import gifTracking from "../assets/gif-tracking.gif";
import gifVpp from "../assets/gif-vpp.gif";
import flashSale from "../assets/flashsale.webp";

import { AiOutlineStock } from "react-icons/ai";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
import { FaRegEye } from "react-icons/fa";

const Home = () => {
  const API = API_URL;

  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [imageSource, setImageSource] = useState("color");

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const result = await axios.get(`${API}/products`);
        setProducts(result.data);
      } catch (e) {
        console.log("Load Products: ", e);
      }
    };

    loadProducts();
  }, []);

  const openQuickView = (product) => {
    setSelectedProduct(product);
    setSelectedColorIndex(0);
    setSelectedImageIndex(0);
    setQuantity(1);
    setImageSource("color");
    setIsQuickViewOpen(true);
  };

  const closeQuickView = () => {
    setIsQuickViewOpen(false);
    setSelectedProduct(null);
  };

  //  Calculate Dis %
  const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    let savings = originalPrice - discountedPrice;
    let percentage = (savings / originalPrice) * 100;

    return Math.trunc(percentage);
  };

  //  Rating Star
  const RatingStars = (rating) => {
    // rating: 4.7
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        // Full star
        stars.push(<IoIosStar key={i} color="#ffc107" />);
      } else if (i - 0.5 <= rating) {
        // Half star 4.3 đến 4.7
        stars.push(<IoIosStarHalf key={i} color="#ffc107" />);
      } else {
        // Empty star
        stars.push(<IoIosStarOutline key={i} color="#ffc107" />);
      }
    }
    return stars;
  };

  const getQuickViewImage = () => {
    if (!selectedProduct) return "";

    // Nếu đang ở chế độ thumbnail (click vào thumbnail)
    if (
      imageSource === "thumbnail" &&
      selectedProduct.images &&
      selectedProduct.images.length > 0
    ) {
      const img =
        selectedProduct.images[selectedImageIndex] ?? selectedProduct.images[0];
      if (img) return `${API}${img}`;
    }

    // Nếu đang ở chế độ màu (click vào phân loại màu)
    if (
      imageSource === "color" &&
      selectedProduct.colors &&
      selectedProduct.colors.length > 0
    ) {
      const color =
        selectedProduct.colors[selectedColorIndex] ?? selectedProduct.colors[0];
      if (color && color.image) {
        return `${API}${color.image}`;
      }
    }

    // Fallback: nếu không có màu thì dùng thumbnail
    if (selectedProduct.images && selectedProduct.images.length > 0) {
      const img =
        selectedProduct.images[selectedImageIndex] ?? selectedProduct.images[0];
      if (img) return `${API}${img}`;
    }

    return "";
  };

  const getQuickViewThumbs = () => {
    if (!selectedProduct?.images?.length) return [];
    return selectedProduct.images.map((img) => `${API}${img}`);
  };

  const handleSelectColor = (index) => {
    setSelectedColorIndex(index);
    setImageSource("color"); //  hiển thị theo màu
  };

  const handleSelectThumbnail = (index) => {
    setSelectedImageIndex(index);
    setImageSource("thumbnail"); //  hiển thị theo thumbnail
  };

  const decreaseQty = () => setQuantity((q) => Math.max(1, q - 1));
  const increaseQty = () => setQuantity((q) => q + 1);

  return (
    <div id="home">
      <div className="container">
        {/*  BANNER  */}
        <div className="banner-home">
          <Swiper
            modules={[Autoplay, Navigation, EffectFade]}
            slidesPerView={2.5}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            className="banner-slider"
          >
            <SwiperSlide>
              <a
                className="banner-slider-img"
                href="#"
                title="Viết điều kỳ diệu cho mùa Giáng Sinh"
              >
                <img src={banner1} alt="banner" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a
                className="banner-slider-img"
                href="#"
                title="Bút viết cao cấp"
              >
                <img src={banner2} alt="banner" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a className="banner-slider-img" href="#" title="Giảm đến 50%">
                <img src={banner3} alt="banner" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a
                className="banner-slider-img"
                href="#"
                title="Săn Deal Thiên Long"
              >
                <img src={banner4} alt="banner" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a className="banner-slider-img" href="#" title="Giấy in cao cấp">
                <img src={banner5} alt="banner" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a
                className="banner-slider-img"
                href="#"
                title="Bút viết an lành"
              >
                <img src={banner6} alt="banner" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a className="banner-slider-img" href="#" title="Săn FLEXIO">
                <img src={banner7} alt="banner" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a
                className="banner-slider-img"
                href="#"
                title="Sách hay khai trí thức"
              >
                <img src={banner8} alt="banner" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a
                className="banner-slider-img"
                href="#"
                title="Xả kho giá cực khét"
              >
                <img src={banner9} alt="banner" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a
                className="banner-slider-img"
                href="#"
                title="Viết điều kỳ diệu cho mùa Giáng Sinh"
              >
                <img src={banner10} alt="banner" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a
                className="banner-slider-img"
                href="#"
                title="Bút viết cao cấp"
              >
                <img src={banner11} alt="banner" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a className="banner-slider-img" href="#" title="Giảm đến 50%">
                <img src={banner12} alt="banner" />
              </a>
            </SwiperSlide>
          </Swiper>
        </div>

        {/*  TL Doc Quyen  */}
        <div className="docQuyen">
          <div className="img-docQuyen">
            <img src={titleTL} alt="TL Doc Quyen" />
          </div>

          <div className="product-docQuyen">
            {products.slice(0, 5).map((item) => (
              <div className="container-product">
                <div className="name">
                  <a href="#" title={item.name}>
                    {item.name}
                  </a>
                </div>
                <div className="img">
                  <a href="#" title={item.name}>
                    <img src={`${API}${item.images[0]}`} alt="" />
                  </a>
                </div>
                <div className="price">
                  <p className="price-dis">
                    {item.price} {item.currency}
                  </p>
                  <p className="price-noDis">
                    {item.originalPrice} {item.currency}
                  </p>
                  <div className="dis-per">
                    -
                    {calculateDiscountPercentage(
                      item.originalPrice,
                      item.price
                    )}
                    %
                  </div>
                </div>
                <div className="buy">
                  <img className="btn-buy" src={btnBuy} alt="btn-buy" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/*  Info  */}
        <div className="info">
          <div className="item-sale">
            <a href="#" title="Top sale">
              <img src={gifTopSale} alt="top-sale" />
              <p>Top sale</p>
            </a>
          </div>

          <div className="item-sale">
            <a href="#" title="Văn phòng phẩm">
              <img src={gifVpp} alt="Vpp" />
              <p>Văn phòng phẩm</p>
            </a>
          </div>

          <div className="item-sale">
            <a href="#" title="Giải pháp in ấn">
              <img src={gifInAn} alt="inan" />
              <p>Giải pháp in ấn</p>
            </a>
          </div>

          <div className="item-sale">
            <a href="#" title="Sản phẩm mới">
              <img src={gifBalo} alt="Balo" />
              <p>Sản phẩm mới</p>
            </a>
          </div>

          <div className="item-sale">
            <a href="#" title="Cẩm nang ưu đãi">
              <img src={gifCamNang} alt="CamNang" />
              <p>Cẩm nang ưu đãi</p>
            </a>
          </div>

          <div className="item-sale">
            <a href="#" title="Thư viện Thiên Long">
              <img src={gifKokomi} alt="Kokomi" />
              <p>Thư viện Thiên Long</p>
            </a>
          </div>

          <div className="item-sale">
            <a href="#" title="Thư viện Thiên Long">
              <img src={gifKokomi2} alt="Kokomi2" />
              <p>Thư viện Thiên Long</p>
            </a>
          </div>

          <div className="item-sale">
            <a href="#" title="Kiểm tra đơn hàng">
              <img src={gifTracking} alt="Tracking" />
              <p>Kiểm tra đơn hàng</p>
            </a>
          </div>
        </div>

        {/*  Flash Sale  */}
        <div className="flashSale">
          <img className="img-flashSale" src={flashSale} alt="flash-sale" />
          <div className="list-product">
            {products.slice(0, 5).map((item) => (
              <div className="item" key={item.id}>
                <div className="item-img">
                  <img src={`${API}${item.images[0]}`} alt="item-img" />
                </div>
                <div className="item-stock">
                  <div className="icon">
                    <AiOutlineStock />
                    Số lượng: {item.stock}
                  </div>
                </div>
                <div className="item-name">
                  <p title={item.name}>{item.name}</p>
                </div>
                <div className="item-rating">
                  <div className="icon-star">{RatingStars(item.rating)}</div>
                  <div className="rating-star">({item.rating})</div>
                </div>
                <div className="item-price">
                  <div className="price-dis">
                    {item.price.toLocaleString()} {item.currency}
                  </div>
                  <div className="price-noDis">
                    <div className="price-ori">
                      {item.originalPrice.toLocaleString()} {item.currency}
                    </div>
                    <div className="dis-per">
                      -{" "}
                      {calculateDiscountPercentage(
                        item.originalPrice,
                        item.price
                      )}
                      %
                    </div>
                  </div>
                </div>
                <div className="btn-see">
                  <button
                    className="btn"
                    type="button"
                    title="Xem nhanh"
                    onClick={() => openQuickView(item)}
                  >
                    <i className="icon">
                      <FaRegEye />
                    </i>
                    <span>Xem nhanh</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isQuickViewOpen && selectedProduct && (
        <div className="quick-view-overlay" onClick={closeQuickView}>
          <div
            className="quick-view-product"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="quickview-inner">
              <button
                className="quickview-close"
                type="button"
                onClick={closeQuickView}
              >
                ×
              </button>

              <div className="quickview-content">
                {/* LEFT: Image + thumbs */}
                <div className="quickview-left">
                  <div className="quickview-main-image">
                    <img src={getQuickViewImage()} alt={selectedProduct.name} />
                  </div>
                  <div className="quickview-thumbs">
                    {getQuickViewThumbs()
                      .slice(0, 6)
                      .map((src, idx) => (
                        <button
                          key={src}
                          type="button"
                          className={`quickview-thumb ${
                            idx === selectedImageIndex ? "active" : ""
                          }`}
                          onClick={() => handleSelectThumbnail(idx)}
                        >
                          <img src={src} alt={`thumb-${idx}`} />
                        </button>
                      ))}
                  </div>
                </div>

                {/* RIGHT: Info */}
                <div className="quickview-right">
                  <h3 className="qwp-name">{selectedProduct.name}</h3>

                  <div className="quickview-meta">
                    <span className="label">Thương hiệu:</span>
                    <span className="value link-like">
                      {selectedProduct.brand}
                    </span>
                    <span className="divider">|</span>
                    <span className="label">Mã sản phẩm:</span>
                    <span className="value link-like">
                      {selectedProduct.sku}
                    </span>
                  </div>

                  <div className="quickview-price-box">
                    <div className="price-left">
                      <div className="price-now">
                        {selectedProduct.price.toLocaleString()}đ
                      </div>
                      <div className="price-old">
                        {selectedProduct.originalPrice.toLocaleString()}đ
                      </div>
                    </div>
                    <div className="price-right">
                      <div className="discount-badge">
                        <span>Tiết kiệm</span>
                        <strong>
                          {calculateDiscountPercentage(
                            selectedProduct.originalPrice,
                            selectedProduct.price
                          )}
                          %
                        </strong>
                      </div>
                    </div>
                  </div>

                  {selectedProduct.colors &&
                    selectedProduct.colors.length > 0 && (
                      <div className="quickview-variant">
                        <div className="variant-row">
                          <div className="variant-label">Phân loại:</div>
                          <div className="variant-options">
                            {selectedProduct.colors.map((color, index) => (
                              <button
                                key={color.name}
                                type="radio"
                                className={`variant-btn ${
                                  index === selectedColorIndex ? "active" : ""
                                }`}
                                onClick={() => handleSelectColor(index)}
                              >
                                {color.name}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                  <div className="quickview-qty">
                    <button
                      type="button"
                      className="qty-btn"
                      onClick={decreaseQty}
                    >
                      -
                    </button>
                    <div className="qty-value">{quantity}</div>
                    <button
                      type="button"
                      className="qty-btn"
                      onClick={increaseQty}
                    >
                      +
                    </button>
                  </div>

                  <div className="quickview-actions">
                    <button type="button" className="btn-add-cart">
                      THÊM VÀO GIỎ
                    </button>
                    <button type="button" className="btn-buy-now">
                      MUA NGAY
                    </button>
                  </div>

                  <div className="quickview-link-detail">
                    &gt;&gt; Xem chi tiết sản phẩm
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
