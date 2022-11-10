import Image from "next/image";
import React from "react";
import styles from "../styles/homelander.module.css";
import stars from "../public/image/stars.png";
import group from "../public/image/hero_img.png";

const homelander = () => {
  return (
    <div>
      <div className={styles.flex}>
        <div className={styles.block}>
        <div>
          <h1>Topic Research, simplified.</h1>
          <p>
            Our platform provides tools and analysis features that will help you
            grow your online business.
          </p>
        </div>
        <div>
          <button>Get Started at $10/mo</button>
          <div className={styles.span}>
            <span>Trusted by 19000+ users</span>
            <Image className={styles.spanImg} src={stars} />
          </div>
        </div>
        </div>

        <div>
          <Image src={group} />
        </div>
      </div>
    </div>
  );
};

export default homelander;