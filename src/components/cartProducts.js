import React from "react";
export default function CartProducts(props){
const {cartItems, onAdd, onRemove, modal ,setModal} = props;
const totalPrice = cartItems.reduce((a,c)=> a + c.qty * c.realPrice,0);
return(
    <div className="cartProductsContainer">
        <h1 className="centerAlign inline font-size18px">GIỎ HÀNG</h1>
        <div className="tableTitle">
            <p>Sản Phẩm</p>
            <p>Số Lượng</p>
            <p>Thành Tiền</p>
        </div>
        <ul className="cartProductList">
            {cartItems.map((items)=>(
                <li key={items.id} className="cartProducts">
                    <img itemProp="image" src={items.image} alt="Sản Phẩm Gạo Sạch Chất Lượng Cao đã được kiểm định" className="product_Image shoppingCartImg"/>
                        <div className="product_Info productCart_Info">
                            <p itemProp="name" className="productName ">{items.name}</p>
                            <p  className="price">{items.qty}</p>
                            <div className="quantitySwitchingContainer">
                                <i onClick={()=>onAdd(items)} className="ti-arrow-circle-up"></i>
                                <i onClick={()=>onRemove(items)} className="ti-arrow-circle-down"></i>

                            </div>
                            <p   className="price">{items.price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                        </div>  
                </li>
            ))}
        </ul>
       
            <h1 className="priceDetails  alignRight border  mb-30 fontsize22">Tổng tiền phải trả: {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} VND</h1>

            <div className=" flexRight">
            <button className="buttonContact mb-30 hoverEffect fontsize22" onClick={()=> setModal(!modal)}>Thanh Toán</button>
        </div>
    </div>
)
}