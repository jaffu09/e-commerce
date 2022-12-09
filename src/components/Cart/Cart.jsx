import React from "react";
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {
  const data = [
    {
      id: 1,
      img:
        "https://cdn.shopify.com/s/files/1/0752/6435/products/IMG_0050_f9751936-9a19-40e1-86e7-f6f711410767_1452x1799.jpg?v=1666187891",
      img2:
        "https://cdn.shopify.com/s/files/1/0752/6435/products/IMG_0053_5c650849-9d9d-4cc3-8863-6a23778cd9a0_765x.jpg?v=1666167085",
      title: "Long T-shirt for Men",
      desc:
        "lorem dustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, b",
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
      desc:
        "lorem dustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, b",
      oldPrice: 19,
      price: 12
    }
  ];
  return (
    <div className="cart">
      <h1>Product in your Cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc.substring(0, 100)}</p>
            <div className="price">1x${item.price}</div>
          </div>
          <DeleteOutlinedIcon className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAl</span>
        <span>$134</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  );
};
export default Cart;
