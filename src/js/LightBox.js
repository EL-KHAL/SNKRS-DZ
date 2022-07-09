import React, { useState } from "react";

import shoeImage1 from "../images/image-product-1.jpg";
import shoeImage2 from "../images/image-product-2.jpg";
import shoeImage3 from "../images/image-product-3.jpg";
import shoeImage4 from "../images/image-product-4.jpg";

import thumbnail1 from "../images/image-product-1-thumbnail.jpg";
import thumbnail2 from "../images/image-product-2-thumbnail.jpg";
import thumbnail3 from "../images/image-product-3-thumbnail.jpg";
import thumbnail4 from "../images/image-product-4-thumbnail.jpg";

import previousIcon from "../images/icon-previous.svg";
import nextIcon from "../images/icon-next.svg";

const Images = [shoeImage1, shoeImage2, shoeImage3, shoeImage4];
console.log(Images.length);

const LightBox = () => {
  const [image, setImage] = useState(shoeImage1);

  // let image1 = document.querySelector(".image1");
  // let image2 = document.querySelector(".image2");
  // let image3 = document.querySelector(".image3");
  // let image4 = document.querySelector(".image4");

  const firstImage = () => {
    setImage(Images[1]);
    document.querySelector(".image2").style.boxShadow = "0 0 0 3px blue";
    document.querySelector(".image1").style.boxShadow = "none";
    document.querySelector(".image3").style.boxShadow = "none";
    document.querySelector(".image4").style.boxShadow = "none";
    document.querySelector(".image1").style.filter = "none";
    document.querySelector(".image2").style.filter = "opacity(50%)";
    document.querySelector(".image3").style.filter = "none";
    document.querySelector(".image4").style.filter = "none";
  };

  const secondImage = () => {
    setImage(Images[2]);
    document.querySelector(".image3").style.boxShadow = "0 0 0 3px blue";
    document.querySelector(".image1").style.boxShadow = "none";
    document.querySelector(".image2").style.boxShadow = "none";
    document.querySelector(".image4").style.boxShadow = "none";
    document.querySelector(".image1").style.filter = "none";
    document.querySelector(".image2").style.filter = "none";
    document.querySelector(".image3").style.filter = "opacity(50%)";
    document.querySelector(".image4").style.filter = "none";
  };

  const thirdImage = () => {
    setImage(Images[3]);
    document.querySelector(".image4").style.boxShadow = "0 0 0 3px blue";
    document.querySelector(".image1").style.boxShadow = "none";
    document.querySelector(".image2").style.boxShadow = "none";
    document.querySelector(".image3").style.boxShadow = "none";
    document.querySelector(".image1").style.filter = "none";
    document.querySelector(".image2").style.filter = "none";
    document.querySelector(".image3").style.filter = "none";
    document.querySelector(".image4").style.filter = "opacity(50%)";
  };

  const fourthImage = () => {
    setImage(Images[0]);
    document.querySelector(".image1").style.boxShadow = "0 0 0 3px blue";
    document.querySelector(".image2").style.boxShadow = "none";
    document.querySelector(".image3").style.boxShadow = "none";
    document.querySelector(".image4").style.boxShadow = "none";
    document.querySelector(".image1").style.filter = "opacity(50%)";
    document.querySelector(".image2").style.filter = "none";
    document.querySelector(".image3").style.filter = "none";
    document.querySelector(".image4").style.filter = "none";
  };

  const changeImage = (e) => {
    if (e.target.className === "icon-next") {
      if (image) {
        firstImage();
      }
      if (image === Images[1]) {
        secondImage();
      }
      if (image === Images[2]) {
        thirdImage();
      }
      if (image === Images[3]) {
        fourthImage();
      }
    }
    if (e.target.className === "icon-previous") {
      if (image) {
        thirdImage();
      }
      if (image === Images[3]) {
        secondImage();
      }
      if (image === Images[2]) {
        firstImage();
      }
      if (image === Images[1]) {
        fourthImage();
      }
    }
    if (e.target.className === "image1") {
      fourthImage();
    } else if (e.target.className === "image2") {
      firstImage();
    } else if (e.target.className === "image3") {
      secondImage();
    } else if (e.target.className === "image4") {
      thirdImage();
    }
  };

  const toggleLightBox = (e) => {
    let lightboxdesktop = document.querySelector(".light-box-desktop");
    let body = document.querySelector("body");

    if (e.target.className === "activate-lightbox") {
      lightboxdesktop.classList.add("active");
      body.classList.add("overlay");
    } else {
      lightboxdesktop.classList.remove("active");
      body.classList.remove("overlay");
    }
  };

  return (
    <div className="light-box">
      <img
        className="activate-lightbox"
        onClick={toggleLightBox}
        src={image}
        alt="product-img"
      />
      <div className="mobile-slider">
        <img
          className="icon-previous"
          onClick={changeImage}
          src={previousIcon}
          alt="icon-previous"
        />
        <img
          className="icon-next"
          onClick={changeImage}
          src={nextIcon}
          alt="icon-next"
        />
      </div>
      <div className="thumbnails">
        <img
          className="image1"
          onClick={changeImage}
          src={thumbnail1}
          alt="thumbnail1"
        />
        <img
          className="image2"
          onClick={changeImage}
          src={thumbnail2}
          alt="thumbnail2"
        />
        <img
          className="image3"
          onClick={changeImage}
          src={thumbnail3}
          alt="thumbnail3"
        />
        <img
          className="image4"
          onClick={changeImage}
          src={thumbnail4}
          alt="thumbnail4"
        />
      </div>
      <div className="light-box-desktop">
        <span onClick={toggleLightBox}>
          <button>
            <i class="fas fa-times"> </i>
          </button>
        </span>
        <img className="light-box-image" src={image} alt="product-img" />
        <div
          style={{
            position: "absolute",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          className="nav-btns"
        >
          <button className="icon-previous" onClick={changeImage}>
            <i
              className="icon-previous"
              onClick={changeImage}
              class="fas fa-chevron-left"
            ></i>
          </button>
          <button className="icon-next" onClick={changeImage}>
            <i
              className="icon-next"
              onClick={changeImage}
              class="fas fa-chevron-right"
            ></i>
          </button>
        </div>
        <div className="thumbnails">
          <img
            className="image1"
            onClick={changeImage}
            src={thumbnail1}
            alt="thumbnail1"
          />
          <img
            className="image2"
            onClick={changeImage}
            src={thumbnail2}
            alt="thumbnail2"
          />
          <img
            className="image3"
            onClick={changeImage}
            src={thumbnail3}
            alt="thumbnail3"
          />
          <img
            className="image4"
            onClick={changeImage}
            src={thumbnail4}
            alt="thumbnail4"
          />
        </div>
      </div>
    </div>
  );
};

export default LightBox;
