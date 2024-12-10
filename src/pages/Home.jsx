import React from 'react'

const home = () => {
  return (
    <>
       
 

    <section id="billboard" className="overflow-hidden">

      <button className="button-prev">
        <i className="icon icon-chevron-left"></i>
      </button>
      <button className="button-next">
        <i className="icon icon-chevron-right"></i>
      </button>
      <div className="swiper main-swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide" >
            <div className="banner-content">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <h2 className="banner-title">Summer Collection</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.</p>
                    <div className="btn-wrap">
                      <a href="shop" className="btn btn-light btn-medium d-flex align-items-center" tabindex="0">Shop it now <i className="icon icon-arrow-io"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide" >
            <div className="banner-content">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <h2 className="banner-title">Casual Collection</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.</p>
                    <div className="btn-wrap">
                      <a href="shop" className="btn btn-light btn-light-arrow btn-medium d-flex align-items-center" tabindex="0">Shop it now <i className="icon icon-arrow-io"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="featured-products" className="product-store padding-large">
      <div className="container">
        <div className="section-header d-flex flex-wrap align-items-center justify-content-between">
          <h2 className="section-title">Featured Products</h2>            
          <div className="btn-wrap">
            <a href="shop" className="d-flex align-items-center">View all products <i className="icon icon icon-arrow-io"></i></a>
          </div>            
        </div>
        <div className="swiper product-swiper overflow-hidden">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="product-item">
                <div className="image-holder">
                  <img src={"../src/assets/images/product-item1.jpg"} alt="Books" className="product-image"/>
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product">Full sleeve cover shirt</a>
                  </h3>
                  <span className="item-price text-primary">$40.00</span>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="product-item">
                <div className="image-holder">
                  <img src={"../src/assets/images/product-item2.jpg"} alt="Books" className="product-image"/>
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product">Volunteer Half blue</a>
                  </h3>
                  <span className="item-price text-primary">$38.00</span>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="product-item">
                <div className="image-holder">
                  <img src={"../src/assets/images/product-item3.jpg"} alt="Books" className="product-image"/>
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product">Double yellow shirt</a>
                  </h3>
                  <span className="item-price text-primary">$44.00</span>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="product-item">
                <div className="image-holder">
                  <img src={"../src/assets/images/product-item4.jpg"} alt="Books" className="product-image"/>
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">Add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product">Long belly grey pant</a>
                  </h3>
                  <span className="item-price text-primary">$33.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </section>

    <section id="latest-collection">
      <div className="container">
        <div className="product-collection row">
          <div className="col-lg-7 col-md-12 left-content">
            <div className="collection-item">
              <div className="products-thumb">
                <img src={"../src/assets/images/collection-item1.jpg"} alt="collection item" className="large-image image-rounded"/>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 product-entry">
                <div className="categories">casual collection</div>
                <h3 className="item-title">street wear.</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim massa diam elementum.</p>
                <div className="btn-wrap">
                  <a href="shop" className="d-flex align-items-center">shop collection <i className="icon icon-arrow-io"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 right-content flex-wrap">
            <div className="collection-item top-item">
              <div className="products-thumb">
                <img src={"../src/assets/images/collection-item2.jpg"} alt="collection item" className="small-image image-rounded"/>
              </div>
              <div className="col-md-6 product-entry">
                <div className="categories">Basic Collection</div>
                <h3 className="item-title">Basic shoes.</h3>
                <div className="btn-wrap">
                  <a href="shop" className="d-flex align-items-center">shop collection <i className="icon icon-arrow-io"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="collection-item bottom-item">
              <div className="products-thumb">
                <img src={"../src/assets/images/collection-item3.jpg"} alt="collection item" className="small-image image-rounded"/>
              </div>
              <div className="col-md-6 product-entry">
                <div className="categories">Best Selling Product</div>
                <h3 className="item-title">woolen hat.</h3>
                <div className="btn-wrap">
                  <a href="shop" className="d-flex align-items-center">shop collection <i className="icon icon-arrow-io"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="subscribe" className="padding-large">
      <div className="container">
        <div className="row">
          <div className="block-text col-md-6">
            <div className="section-header">
              <h2 className="section-title">Get 25% off Discount Coupons</h2>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictumst amet, metus, sit massa posuere maecenas. At tellus ut nunc amet vel egestas.</p>
          </div>
          <div className="subscribe-content col-md-6">
            <form id="form" className="d-flex justify-content-between">
              <input type="text" name="email" placeholder="Enter your email addresss here"/>
              <button className="btn btn-dark">Subscribe Now</button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <section id="selling-products" className="product-store bg-light-grey padding-large">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Best selling products</h2>
        </div>
        <ul className="tabs list-unstyled">
          <li data-tab-target="#all" className="active tab">All</li>
          <li data-tab-target="#shoes" className="tab">Shoes</li>
          <li data-tab-target="#tshirts" className="tab">Tshirts</li>
          <li data-tab-target="#pants" className="tab">Pants</li>
          <li data-tab-target="#hoodie" className="tab">Hoodie</li>
          <li data-tab-target="#outer" className="tab">Outer</li>
          <li data-tab-target="#jackets" className="tab">Jackets</li>
          <li data-tab-target="#accessories" className="tab">Accessories</li>
        </ul>
        <div className="tab-content">
          <div id="all" data-tab-content className="active">
            <div className="row d-flex flex-wrap">
              <div className="product-item col-lg-3 col-md-6 col-sm-6">
                <div className="image-holder">
                  <img src={"../src/assets/images/selling-products1.jpg"} alt="Books" className="product-image"/>
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product">Half sleeve T-shirt</a>
                  </h3>
                  <div className="item-price text-primary">$40.00</div>
                </div>
              </div>
              <div className="product-item col-lg-3 col-md-6 col-sm-6">
                <div className="image-holder">
                  <img src={"../src/assets/images/selling-products2.jpg"} alt="Books" className="product-image"/>
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product">Stylish Grey T-shirt</a>
                  </h3>
                  <div className="item-price text-primary">$35.00</div>
                </div>
              </div>
              <div className="product-item col-lg-3 col-md-6 col-sm-6">
                <div className="image-holder">
                  <img src={"../src/assets/images/selling-products3.jpg"} alt="Books" className="product-image"/>
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product">Silk White Shirt</a>
                  </h3>
                  <div className="item-price text-primary">$35.00</div>
                </div>
              </div>
              <div className="product-item col-lg-3 col-md-6 col-sm-6">
                <div className="image-holder">
                  <img src={"../src/assets/images/selling-products4.jpg"} alt="Books" className="product-image"/>
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product">Grunge Hoodie</a>
                  </h3>
                  <div className="item-price text-primary">$30.00</div>
                </div>
              </div>
              <div className="product-item col-lg-3 col-md-6 col-sm-6">
                <div className="image-holder">
                  <img src={"../src/assets/images/selling-products5.jpg"} alt="Books" className="product-image"/>
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product">Full sleeve Jeans jacket</a>
                  </h3>
                  <div className="item-price text-primary">$40.00</div>
                </div>
              </div>
              <div className="product-item col-lg-3 col-md-6 col-sm-6">
                <div className="image-holder">
                  <img src={"../src/assets/images/selling-products6.jpg"} alt="Books" className="product-image"/>
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product">Grey Check Coat</a>
                  </h3>
                  <div className="item-price text-primary">$30.00</div>
                </div>
              </div>
              <div className="product-item col-lg-3 col-md-6 col-sm-6">
                <div className="image-holder">
                  <img src={"../src/assets/images/selling-products7.jpg"} alt="Books" className="product-image"/>
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product">Long Sleeve T-shirt</a>
                  </h3>
                  <div className="item-price text-primary">$40.00</div>
                </div>
              </div>
              <div className="product-item col-lg-3 col-md-6 col-sm-6">
                <div className="image-holder">
                  <img src={"../src/assets/images/selling-products8.jpg"} alt="Books" className="product-image"/>
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product">Half Sleeve T-shirt</a>
                  </h3>
                  <div className="item-price text-primary">$35.00</div>
                </div>
              </div>
              <div className="product-item col-lg-3 col-md-6 col-sm-6">
                <div className="image-holder">
                  <img src={"../src/assets/images/selling-products13.jpg"} alt="Books" className="product-image"/>
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product">Orange white Nike</a>
                  </h3>
                  <div className="item-price text-primary">$55.00</div>
                </div>
              </div>
              <div className="product-item col-lg-3 col-md-6 col-sm-6">
                <div className="image-holder">
                  <img src={"../src/assets/images/selling-products14.jpg"} alt="Books" className="product-image"/>
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product">Running Shoe</a>
                  </h3>
                  <div className="item-price text-primary">$65.00</div>
                </div>
              </div>
              <div className="product-item col-lg-3 col-md-6 col-sm-6">
                <div className="image-holder">
                  <img src={"../src/assets/images/selling-products15.jpg"} alt="Books" className="product-image"/>
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product">Tennis Shoe</a>
                  </h3>
                  <div className="item-price text-primary">$80.00</div>
                </div>
              </div>
              <div className="product-item col-lg-3 col-md-6 col-sm-6">
                <div className="image-holder">
                  <img src={"../src/assets/images/selling-products16.jpg"} alt="Books" className="product-image"/>
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product">Nike Brand Shoe</a>
                  </h3>
                  <div className="item-price text-primary">$65.00</div>
                </div>
              </div>
            </div>
          </div>
          <div id="shoes" data-tab-content>
            <div className="row d-flex flex-wrap">
              <div className="product-item col-lg-3 col-md-6 col-sm-6">
                <div className="image-holder">
                  <img src={"../src/assets/images/selling-products13.jpg"} alt="Books" className="product-image"/>
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product">Orange white Nike</a>
                  </h3>
                  <div className="item-price text-primary">$55.00</div>
                </div>
              </div>
              <div className="product-item col-lg-3 col-md-6 col-sm-6">
                <div className="image-holder">
                  <img src={"../src/assets/images/selling-products14.jpg"} alt="Books" className="product-image"/>
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product">Running Shoe</a>
                  </h3>
                  <div className="item-price text-primary">$65.00</div>
                </div>
              </div>
              <div className="product-item col-lg-3 col-md-6 col-sm-6">
                <div className="image-holder">
                  <img src={"../src/assets/images/selling-products15.jpg"} alt="Books" className="product-image"/>
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product">Tennis Shoe</a>
                  </h3>
                  <div className="item-price text-primary">$80.00</div>
                </div>
              </div>
              <div className="product-item col-lg-3 col-md-6 col-sm-6">
                <div className="image-holder">
                  <img src={"../src/assets/images/selling-products16.jpg"} alt="Books" className="product-image"/>
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product">Nike Brand Shoe</a>
                  </h3>
                  <div className="item-price text-primary">$65.00</div>
                </div>
              </div>
            </div>
          </div>
          <div id="tshirts" data-tab-content>
            <div className="row d-flex flex-wrap">
              <div className="product-item col-lg-3 col-md-6 col-sm-6">
                <div className="image-holder">
                  <img src={"../src/assets/images/selling-products3.jpg"} alt="Books" className="product-image"/>
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product">Silk White Shirt</a>
                  </h3>
                  <div className="item-price text-primary">$35.00</div>
                </div>
              </div>
              <div className="product-item col-lg-3 col-md-6 col-sm-6">
                <div className="image-holder">
                  <img src={"../src/assets/images/selling-products8.jpg"} alt="Books" className="product-image"/>
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product">White Half T-shirt</a>
                  </h3>
                  <div className="item-price text-primary">$30.00</div>
                </div>
              </div>
              <div className="product-item col-lg-3 col-md-6 col-sm-6">
                <div className="image-holder">
                  <img src={"../src/assets/images/selling-products5.jpg"} alt="Books" className="product-image"/>
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product">Ghee Half T-shirt</a>
                  </h3>
                  <div className="item-price text-primary">$40.00</div>
                </div>
              </div>
              <div className="product-item col-lg-3 col-md-6 col-sm-6">
                <div className="image-holder">
                  <img src={"../src/assets/images/selling-products7.jpg"} alt="Books" className="product-image"/>
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product">Long Sleeve T-shirt</a>
                  </h3>
                  <div className="item-price text-primary">$40.00</div>
                </div>
              </div>
            </div>
          </div>
          <div id="pants" data-tab-content>
            <div className="row d-flex flex-wrap">
              <div className="product-item col-lg-3 col-md-6 col-sm-6">
                <div className="image-holder">
                  <img src={"../src/assets/images/selling-products1.jpg"} alt="Books" className="product-image"/>
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product">Half sleeve T-shirt</a>
                  </h3>
                  <div className="item-price text-primary">$40.00</div>
                </div>
              </div>
              <div className="product-item col-lg-3 col-md-6 col-sm-6">
                <div className="image-holder">
                  <img src={"../src/assets/images/selling-products4.jpg"} alt="Books" className="product-image"/>
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product">Grunge Hoodie</a>
                  </h3>
                  <div className="item-price text-primary">$30.00</div>
                </div>
              </div>
              <div className="product-item col-lg-3 col-md-6 col-sm-6">
                <div className="image-holder">
                  <img src={"../src/assets/images/selling-products7.jpg"} alt="Books" className="product-image"/>
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product">Long Sleeve T-shirt</a>
                  </h3>
                  <div className="item-price text-primary">$40.00</div>
                </div>
              </div>
              <div className="product-item col-lg-3 col-md-6 col-sm-6">
                <div className="image-holder">
                  <img src={"../src/assets/images/selling-products2.jpg"} alt="Books" className="product-image"/>
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product">Stylish Grey Pant</a>
                  </h3>
                  <div className="item-price text-primary">$40.00</div>
                </div>
              </div>
            </div>
          </div>
          <div id="hoodie" data-tab-content>
            <div className="row d-flex flex-wrap">
              <div className="product-item col-lg-3 col-md-6 col-sm-6">
                <div className="image-holder">
                  <img src={"../src/assets/images/selling-products17.jpg"} alt="Books" className="product-image"/>
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product">White Hoodie</a>
                  </h3>
                  <div className="item-price text-primary">$40.00</div>
                </div>
              </div>
              <div className="product-item col-lg-3 col-md-6 col-sm-6">
                <div className="image-holder">
                  <img src={"../src/assets/images/selling-products4.jpg"} alt="Books" className="product-image"/>
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product">Navy Blue Hoodie</a>
                  </h3>
                  <div className="item-price text-primary">$45.00</div>
                </div>
              </div>
              <div className="product-item col-lg-3 col-md-6 col-sm-6">
                <div className="image-holder">
                  <img src={"../src/assets/images/selling-products18.jpg"} alt="Books" className="product-image"/>
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product">Dark Green Hoodie</a>
                  </h3>
                  <div className="item-price text-primary">$35.00</div>
                </div>
              </div>
            </div>
          </div>
          <div id="outer" data-tab-content>
            <div className="row d-flex flex-wrap">
              <div className="product-item col-lg-3 col-md-6 col-sm-6">
                <div className="image-holder">
                  <img src={"../src/assets/images/selling-products3.jpg"} alt="Books" className="product-image"/>
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product">Silk White Shirt</a>
                  </h3>
                  <div className="item-price text-primary">$ 35.00</div>
                </div>
              </div>
              <div className="product-item col-lg-3 col-md-6 col-sm-6">
                <div className="image-holder">
                  <img src={"../src/assets/images/selling-products4.jpg"} alt="Books" className="product-image"/>
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product">Grunge Hoodie</a>
                  </h3>
                  <div className="item-price text-primary">$ 30.00</div>
                </div>
              </div>
              <div className="product-item col-lg-3 col-md-6 col-sm-6">
                <div className="image-holder">
                  <img src={"../src/assets/images/selling-products6.jpg"} alt="Books" className="product-image"/>
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product">Grey Check Coat</a>
                  </h3>
                  <div className="item-price text-primary">$ 30.00</div>
                </div>
              </div>
              <div className="product-item col-lg-3 col-md-6 col-sm-6">
                <div className="image-holder">
                  <img src={"../src/assets/images/selling-products7.jpg"} alt="Books" className="product-image"/>
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product">Long Sleeve T-shirt</a>
                  </h3>
                  <div className="item-price text-primary">$ 40.00</div>
                </div>
              </div>
            </div>
          </div>
          <div id="jackets" data-tab-content>
            <div className="row d-flex flex-wrap">
              <div className="product-item col-lg-3 col-md-6 col-sm-6">
                <div className="image-holder">
                  <img src={"../src/assets/images/selling-products5.jpg"} alt="Books" className="product-image"/>
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product">Full Sleeve Jeans Jacket</a>
                  </h3>
                  <div className="item-price text-primary">$40.00</div>
                </div>
              </div>
              <div className="product-item col-lg-3 col-md-6 col-sm-6">
                <div className="image-holder">
                  <img src={"../src/assets/images/selling-products2.jpg"} alt="Books" className="product-image"/>
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product">Stylish Grey Coat</a>
                  </h3>
                  <div className="item-price text-primary">$35.00</div>
                </div>
              </div>
              <div className="product-item col-lg-3 col-md-6 col-sm-6">
                <div className="image-holder">
                  <img src={"../src/assets/images/selling-products6.jpg"} alt="Books" className="product-image"/>
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product">Grey Check Coat</a>
                  </h3>
                  <div className="item-price text-primary">$35.00</div>
                </div>
              </div>
            </div>
          </div>
          <div id="accessories" data-tab-content>
            <div className="row d-flex flex-wrap">
              <div className="product-item col-lg-3 col-md-6 col-sm-6">
                <div className="image-holder">
                  <img src={"../src/assets/images/selling-products19.jpg"} alt="Books" className="product-image"/>
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product">Stylish Women Bag</a>
                  </h3>
                  <div className="item-price text-primary">$35.00</div>
                </div>
              </div>
              <div className="product-item col-lg-3 col-md-6 col-sm-6">
                <div className="image-holder">
                  <img src={"../src/assets/images/selling-products20.jpg"} alt="Books" className="product-image"/>
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product">Stylish Gadgets</a>
                  </h3>
                  <div className="item-price text-primary">$30.00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="testimonials" className="padding-large no-padding-bottom">
      <div className="container">
        <div className="reviews-content">
          <div className="row d-flex flex-wrap">
            <div className="col-md-2">
              <div className="review-icon">
                <i className="icon icon-right-quote"></i>
              </div>
            </div>
            <div className="col-md-8">
              <div className="swiper testimonial-swiper overflow-hidden">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="testimonial-detail">
                      <p>“Dignissim massa diam elementum habitant fames. Id nullam pellentesque nisi, eget cursus dictumst pharetra, sit. Pulvinar laoreet id porttitor egestas dui urna. Porttitor nibh magna dolor ultrices iaculis sit iaculis.”</p>
                      <div className="author-detail">
                        <div className="name">By Maggie Rio</div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonial-detail">
                      <p>“Dignissim massa diam elementum habitant fames. Id nullam pellentesque nisi, eget cursus dictumst pharetra, sit. Pulvinar laoreet id porttitor egestas dui urna. Porttitor nibh magna dolor ultrices iaculis sit iaculis.”</p>
                      <div className="author-detail">
                        <div className="name">By John Smith</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-arrows">
                <button className="prev-button">
                  <i className="icon icon-arrow-left"></i>
                </button>
                <button className="next-button">
                  <i className="icon icon-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="flash-sales" className="product-store padding-large">
      
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Flash sales</h2>
        </div>
        <div className="swiper product-swiper flash-sales overflow-hidden">

          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="product-item">
                <img src={"../src/assets/images/selling-products9.jpg"} alt="Books" className="product-image"/>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="discount">10% Off</div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product">Full sleeve cover shirt</a>
                  </h3>
                  <div className="item-price text-primary">
                    <del className="prev-price">$50.00</del>$40.00
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="product-item">
                <img src={"../src/assets/images/selling-products10.jpg"} alt="Books" className="product-image"/>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="discount">10% Off</div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product">Long Sleeve T-shirt</a>
                  </h3>
                  <div className="item-price text-primary">
                    <del className="prev-price">$50.00</del>$40.00
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="product-item">
                <img src={"../src/assets/images/selling-products11.jpg"} alt="Books" className="product-image"/>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="discount">10% Off</div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product">Grey Check Coat</a>
                  </h3>
                  <div className="item-price text-primary">
                    <del className="prev-price">$55.00</del>$45.00
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="product-item">
                <img src={"../src/assets/images/selling-products12.jpg"} alt="Books" className="product-image"/>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="discount">10% Off</div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product">Silk White Shirt</a>
                  </h3>
                  <div className="item-price text-primary">
                    <del className="prev-price">$45.00</del>$35.00
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="product-item">
                <img src={"../src/assets/images/selling-products8.jpg"} alt="Books" className="product-image"/>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="discount">10% Off</div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product">Blue Jeans pant</a>
                  </h3>
                  <div className="item-price text-primary">
                    <del className="prev-price">$45.00</del>$35.00
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-pagination"></div>

        </div>
      </div>
    </section>

    <section className="shoppify-section-banner">
      <div className="container">
        <div className="product-collection">
          <div className="left-content collection-item">
            <div className="products-thumb">
              <img src={"../src/assets/images/model.jpg"} alt="collection item" className="large-image image-rounded"/>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 product-entry">
              <div className="categories">Denim collection</div>
              <h3 className="item-title">The casual selection.</h3>
              <p>Vel non viverra ligula odio ornare turpis mauris. Odio aliquam, tincidunt ut vitae elit risus. Tempor egestas condimentum et ac rutrum dui, odio.</p>
              <div className="btn-wrap">
                <a href="shop.html" className="d-flex align-items-center">shop collection <i className="icon icon-arrow-io"></i>
                </a>
              </div>
            </div>
          </div>
        </div>        
      </div>
    </section>

    <section id="quotation" className="align-center padding-large">
      <div className="inner-content">
        <h2 className="section-title divider">Quote of the day</h2>
        <blockquote>
          <q>It's true, I don't like the whole cutoff-shorts-and-T-shirt look, but I think you can look fantastic in casual clothes.</q>
          <div className="author-name">- Dr. Seuss</div>
        </blockquote>
      </div>
    </section>

    <hr/>
    <section id="latest-blog" className="padding-large">
      <div className="container">
        <div className="section-header d-flex flex-wrap align-items-center justify-content-between">
          <h2 className="section-title">our Journal</h2>
          <div className="btn-wrap align-right">
            <a href="blog" className="d-flex align-items-center">Read All Articles <i className="icon icon icon-arrow-io"></i>
            </a>
          </div>
        </div>
        <div className="row d-flex flex-wrap">
          <article className="col-md-4 post-item">
            <div className="image-holder zoom-effect">
              <a href="single-post">
                <img src={"../src/assets/images/post-img1.jpg"} alt="post" className="post-image"/>
              </a>
            </div>
            <div className="post-content d-flex">
              <div className="meta-date">
                <div className="meta-day text-primary">22</div>
                <div className="meta-month">Aug-2021</div>
              </div>
              <div className="post-header">
                <h3 className="post-title">
                  <a href="single-post">top 10 casual look ideas to dress up your kids</a>
                </h3>
                <a href="blog" className="blog-categories">Fashion</a>
              </div>
            </div>
          </article>
          <article className="col-md-4 post-item">
            <div className="image-holder zoom-effect">
              <a href="single-post">
                <img src={"../src/assets/images/post-img2.jpg"} alt="post" className="post-image"/>
              </a>
            </div>
            <div className="post-content d-flex">
              <div className="meta-date">
                <div className="meta-day text-primary">25</div>
                <div className="meta-month">Aug-2021</div>
              </div>
              <div className="post-header">
                <h3 className="post-title">
                  <a href="single-post">Latest trends of wearing street wears supremely</a>
                </h3>
                <a href="blog" className="blog-categories">Trending</a>
              </div>
            </div>
          </article>
          <article className="col-md-4 post-item">
            <div className="image-holder zoom-effect">
              <a href="single-post">
                <img src={"../src/assets/images/post-img3.jpg"} alt="post" className="post-image"/>
              </a>
            </div>
            <div className="post-content d-flex">
              <div className="meta-date">
                <div className="meta-day text-primary">28</div>
                <div className="meta-month">Aug-2021</div>
              </div>
              <div className="post-header">
                <h3 className="post-title">
                  <a href="single-post">types of comfortable clothes ideas for women</a>
                </h3>
                <a href="blog" className="blog-categories">Inspiration</a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section id="brand-collection" className="padding-medium bg-light-grey">
      <div className="container">
        <div className="d-flex flex-wrap justify-content-between">
          <img src={"../src/assets/images/brand1.png"} alt="phone" className="brand-image"/>
          <img src={"../src/assets/images/brand2.png"} alt="phone" className="brand-image"/>
          <img src={"../src/assets/images/brand3.png"} alt="phone" className="brand-image"/>
          <img src={"../src/assets/images/brand4.png"} alt="phone" className="brand-image"/>
          <img src={"../src/assets/images/brand5.png"} alt="phone" className="brand-image"/>
        </div>
      </div>
    </section>

    <section id="instagram" className="padding-large">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Follow our instagram</h2>
        </div>
        <p>Our official Instagram account <a href="#">@ultras</a> or <a href="#">#ultras_clothing</a>
        </p>
        <div className="row d-flex flex-wrap justify-content-between">
          <div className="col-lg-2 col-md-4 col-sm-6">
            <figure className="zoom-effect">
              <img src={"../src/assets/images/insta-image1.jpg"} alt="instagram" className="insta-image"/>
              <i className="icon icon-instagram"></i>
            </figure>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6">
            <figure className="zoom-effect">
              <img src={"../src/assets/images/insta-image2.jpg"} alt="instagram" className="insta-image"/>
              <i className="icon icon-instagram"></i>
            </figure>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6">
            <figure className="zoom-effect">
              <img src={"../src/assets/images/insta-image3.jpg"} alt="instagram" className="insta-image"/>
              <i className="icon icon-instagram"></i>
            </figure>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6">
            <figure className="zoom-effect">
              <img src={"../src/assets/images/insta-image4.jpg"} alt="instagram" className="insta-image"/>
              <i className="icon icon-instagram"></i>
            </figure>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6">
            <figure className="zoom-effect">
              <img src={"../src/assets/images/insta-image5.jpg"} alt="instagram" className="insta-image"/>
              <i className="icon icon-instagram"></i>
            </figure>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6">
            <figure className="zoom-effect">
              <img src={"../src/assets/images/insta-image6.jpg"} alt="instagram" className="insta-image"/>
              <i className="icon icon-instagram"></i>
            </figure>
          </div>
        </div>          
      </div>
    </section>

    <section id="shipping-information"/>
      <hr/>
      <div className="container">
        <div className="row d-flex flex-wrap align-items-center justify-content-between">
          <div className="col-md-3 col-sm-6">
            <div className="icon-box">
              <i className="icon icon-truck"></i>
              <h4 className="block-title">
                <strong>Free shipping</strong> Over $200
              </h4>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="icon-box">
              <i className="icon icon-return"></i>
              <h4 className="block-title">
                <strong>Money back</strong> Return within 7 days
              </h4>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="icon-box">
              <i className="icon icon-tags1"></i>
              <h4 className="block-title">
                <strong>Buy 4 get 5th</strong> 50% off
              </h4>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="icon-box">
              <i className="icon icon-help_outline"></i>
              <h4 className="block-title">
                <strong>Any questions?</strong> experts are ready
              </h4>
            </div>
          </div>
        </div>
      </div>
    
    {/* </section> */}

    </>
  )
}

export default home