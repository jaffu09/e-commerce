import React from "react";
import "./FeaturedProducts.scss";
import Card from "../Card/Card";

const FeaturedProducts = ({ type }) => {
  const data = [
    {
      id: 1,
      img:
        "https://cdn.shopify.com/s/files/1/0752/6435/products/IMG_0050_f9751936-9a19-40e1-86e7-f6f711410767_1452x1799.jpg?v=1666187891",
      img2:
        "https://cdn.shopify.com/s/files/1/0752/6435/products/IMG_0053_5c650849-9d9d-4cc3-8863-6a23778cd9a0_765x.jpg?v=1666167085",
      title: "Long T-shirt for Men",
      isNew: true,
      oldPrice: 19,
      price: 12
    },
    {
      id: 2,
      img:
        "https://www.mydesignation.com/wp-content/uploads/2019/08/malayali-tshirt-mydesignation-mockup-image-latest-golden-.jpg",
      img2:
        "https://cdn.shopify.com/s/files/1/1002/7150/products/New-Mockups---no-hanger---TShirt-Yellow.jpg?v=1639657077",
      title: "Long T-shirt for Men",
      isNew: true,
      oldPrice: 19,
      price: 12
    },
    {
      id: 3,
      img:
        "https://cdn.shopify.com/s/files/1/0752/6435/products/IMG_0050_f9751936-9a19-40e1-86e7-f6f711410767_1452x1799.jpg?v=1666187891",

      title: "Long T-shirt for Men",
      isNew: false,
      oldPrice: 19,
      price: 12
    },
    {
      id: 4,
      img:
        "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/15178080/2022/6/30/182eccaf-e124-40e5-8741-a84ee97312c61656569601518-HRX-by-Hrithik-Roshan-Men-Tshirts-8031656569601080-1.jpg",
      img2: "https://m.media-amazon.com/images/I/61W6cNUiN3L._UY550_.jpg",
      title: "Long T-shirt for Men",
      isNew: true,
      oldPrice: 19,
      price: 12
    }
  ];

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maiores
          hic quod asperiores, nisi, architecto expedita, fugit nam dignissimos
          aliquid similique a atque. Ipsam excepturi blanditiis numquam fuga
          voluptatum animi saepe harum rem debitis.
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
