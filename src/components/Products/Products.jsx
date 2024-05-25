import React from "react";
import styles from "./Products.css";

const products = [
  {
    id: 1,
    product_name: "Product 1",
    product_img: "one.jpg",
    price: "$100",
  },
  {
    id: 2,
    product_name: "Product 2",
    product_img: "two.jpg",
    price: "$200",
  },
  {
    id: 3,
    product_name: "Product 3",
    product_img: "three.jpg",
    price: "$300",
  },
  {
    id: 4,
    product_name: "Product 4",
    product_img: "four.jpg",
    price: "$400",
  },
];

export default function Products() {
  return (
    <div className={styles.productDetailsContainer}>
      {products.map((product) => (
        <div key={product.id} className={styles.productItem}>
          <div className={styles.productImgContainer}>
            <img
              src={require(`../../assets/images/${product.product_img}`)}
              alt={product.product_name}
              className={styles.productImg}
            />
          </div>
          <div className={styles.productInfo}>
            <h3 className={styles.productTitle}>{product.product_name}</h3>
            <div className={styles.ratingContainer}>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
            <div className={styles.productPrice}>
              MRP: <span className={styles.price}>{product.price}</span>
              <div>Inclusive of All Taxes</div>
            </div>
            <div className={styles.productDescriptionContainer}>
              <span>Some Product Description</span>
            </div>
            <div
              className={styles.cartButton}
              onClick={() => console.log("Add to cart")}
            >
              <div className={styles.cartIconContainer}>
                <i className="fa fa-shopping-cart" />
              </div>
              <div className={styles.cartTextContainer}>
                <p>Add to cart</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
