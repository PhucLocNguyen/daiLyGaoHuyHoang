import React from "react";
import { Route, Routes, Link} from "react-router-dom"
import ReactImageZoom from 'react-image-zoom';
 
// import data from "../data.js"
export default function ProductDetail(paths){
const {path, onAdd, products} = paths;
return products.filter(function(items){
    return items.englishName === path
}).map(function(filterProduct){  
    const props = {width: 350, height: 350, zoomWidth: 100, img:filterProduct.image, scale:1};

return <div itemScope itemType="https://schema.org/Product"  key={filterProduct.englishName}  className="productDetailContainer">
    <div className="productDetailContainer">
        <div className="leftCorner">
            <div className="contentImg" itemProp="image">
        <ReactImageZoom {...props}  alt="web" className="" />
        </div>
        <img itemProp="image" src={filterProduct.image} alt={filterProduct.name} id="imageDetails"/>
        </div>
        <div className="rightCorner">
           <h2 className="productNameFont" itemProp="name">{filterProduct.name}</h2> 
            <p itemProp="price" itemScope itemType="https://schema.org/Offer"  className="priceDetails">{filterProduct.price}</p>
            <p className="productDescription" itemProp="description">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <div >
            <Link to={`/cartList`} className="btnContact buttonContact hoverEffect" onClick={()=>onAdd(filterProduct)}> Đặt Hàng</Link>
             </div>
        </div>

    </div>
</div>
}
)
}
