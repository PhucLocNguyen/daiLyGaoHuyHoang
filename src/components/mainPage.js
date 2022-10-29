import React from "react"
import { Route, Routes, Link} from "react-router-dom"
import delivery from "../images/deliveryTruck.png"
import star from "../images/star.png"
import pigMoney from "../images/icon-flat-economical.png"
import slideBackground from "../images/backgroundSlide.png"
function MainSlides(props){
    
    const {products} = props;
    return (
           
            <div className="content_Container">
                <div className="containerSlide">
                    <ul className="slideTong">
                        <li className="slide"><img src={slideBackground} alt="" id="introductionImg" />
                        <div className="textSlide"><h1>Gạo Ngon Sóc Trăng Sạch Chất Lượng</h1></div>
                        </li>
                        <li className="slide"><img src={slideBackground} alt="" id="introductionImg" /></li>
                        <li className="slide"><img src={slideBackground} alt="" id="introductionImg" /></li>
                    </ul>
                    <div className="control-buttons">
                        <button id="prevBtn"><i className="ti-arrow-circle-left"></i></button>
                        <button id="nextBtn"><i className="ti-arrow-circle-right"></i></button>
                    </div>
                </div>
                <div className="captionBox">
                    <h3 className="captionTitle">Trang Web bán Gạo Sạch Uy Tín Nhất Việt Nam Thế Kỷ 21</h3>
                </div>
                
                <div itemProp="category" itemScope itemType="https://schema.org/Product" className="productContainer" id="riceSection">
                <Link itemProp="typeOfGood" to="/rice" className="centerAlign mb-30 hoverLine" id="riceList">Gạo Xuất Khẩu</Link>
                <ul className="shoppingItems">
                    {products.filter((item)=> item.category ==="rice").map((items) => 

                     (<li className="product-box" key={items.id}>
                        <img itemProp="image" src={items.image} alt="Sản Phẩm Gạo Sạch Chất Lượng Cao đã được kiểm định" className="product_Image"/>
                        <div className="product_Info">
                            <p itemProp="name" className="productName">{items.name}</p>
                            <p   className="price">{items.price}</p>
                            <div className="buttonContact hoverEffect">
                            <Link to={`/${items.englishName}` }> Chi tiết sản phẩm</Link>
                            </div>
                        
                        </div>  
                    </li>))}

                </ul>
                </div>

                <div itemProp="category" itemScope itemType="https://schema.org/Product"  className="productContainer" id="oilSection">
                <Link  itemProp="typeOfGood" to="/oil" className="centerAlign mb-30 hoverLine" id="oilList">Dầu ăn các loại</Link>
                <ul className="shoppingItems">
                {products.filter((item)=> item.category ==="oil").map((items) => 

                        (<li className="product-box" key={items.id}>
                            <img itemProp="image" src={items.image} alt="Sản Phẩm Dầu ăn sạch Chất Lượng Cao đã được kiểm định" className="product_Image"/>
                            <div className="product_Info">
                                <p itemProp="name" className="productName">{items.name}</p>
                                <p className="price">{items.price}</p>
                                <div className="buttonContact hoverEffect">
                                         <Link to={`/${items.englishName}`}>Chi tiết sản phẩm</Link>
                                </div>
                            </div>
                        </li>))}
                </ul>
                </div>
                    <div className="slogan">
                        <h1 className="centerAlign">Cam Kết </h1>
                <div className="sloganContainer" id="camKet">

                    <div className="sloganBox box2">
                        <img src={delivery} alt="giao hang nhanh chong"/>
                        <h2>Giao Hàng Nhanh</h2>

                    </div>
                    <div className="sloganBox box1">
                        <div className="fiveStarContainer">
                        <img src={star} className="starFormat" alt="5-sao-chat-luong"/>
                        <img src={star} className="starFormat" alt="5-sao-chat-luong"/>
                        <img src={star} className="starFormat" alt="5-sao-chat-luong"/>
                        <img src={star} className="starFormat" alt="5-sao-chat-luong"/>
                        <img src={star} className="starFormat" alt="5-sao-chat-luong"/>
                        </div>
                        
                        <h2>An Toàn</h2>
                        
                    </div>
                    <div className="sloganBox box3">
                        <img src={pigMoney} alt="tiet-kiem-tien-gia-re"/>
                        <h2>Tiết Kiệm</h2>


                    </div>
                </div>

                        
                
            </div>
            <div className="ggmaps">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.047005564822!2d106.62838081530238!3d10.730858062966188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752e759886efd3%3A0x413413ddbde948b6!2zMzgvMTAgTmd1eeG7hW4gTmfhu41jIEN1bmcsIFBoxrDhu51uZyAxNiwgUXXhuq1uIDgsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1662807723463!5m2!1svi!2s" width="100%" height="475px" className="mapFormat"  allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Vị trí của Công Ty"></iframe>
                        </div>
         </div>
         
    )
        
    
}

export default MainSlides