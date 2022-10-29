import React from "react";
import { Route, Routes, Link} from "react-router-dom"
function RicePage(props){
const {products} = props;
return (
<div className="content_Container">
    <div className="productContainer" id="riceSection">
    <h1 className="centerAlign mb-30" id="riceList">Gạo Xuất Khẩu</h1>
    <ul className="gridList">
        {products.filter((item)=> item.category ==="rice").map((items) => 

        (<li className="product-box" key={items.id}>
            <img src={items.image} alt="Sản Phẩm Gạo Sạch Chất Lượng Cao đã được kiểm định" className="product_Image"/>
            <div className="product_Info">
                <p className="productName">{items.name}</p>
                <p className="price">{items.price}</p>
                <div className="buttonContact mb-30 hoverEffect">
                <Link to={`/${items.englishName}`}> Chi tiết sản phẩm</Link>
                </div>
            </div>
        </li>))}

     </ul>
    </div>
</div>
)
}
export default RicePage;