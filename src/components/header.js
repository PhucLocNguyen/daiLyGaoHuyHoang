import React from "react";
import logoPage from "../images/logoko.png"
import backgroundHeader from "../images/backgroundWebGaoo.jpg"
import zaloIcon from "../images/zalo-logo.png"
import shopeeIcon from "../images/logoShopee.png"
import { Route, Routes, Link as Linked} from "react-router-dom"

import { Link } from "react-scroll";
function Headers(props){
    const {countingCart} =props

    return (
        <div className="headerContainer">
            <div className="info_header">
                <div className="left_InfoHeader">
                     <div className="info-Contact"><i className="ti-home formatIcons"></i> <p>38/10 Nguyễn Ngọc Cung, Quận 6, Tp.HCM</p></div>
                    <div className="info-Contact"><i className="ti-mobile formatIcons"></i> <p>0914175797</p></div>

                </div>

               <div className="right_InfoHeader">
               <a href="https://zalo.me/0914175797" target="blank"><img src={shopeeIcon} className="iconFormat" alt="Mua bán gạo sạch giá rẻ ở shopee"/></a>
                    <a href="https://zalo.me/0914175797" target="blank"><img src={zaloIcon} className="iconFormat" alt="liên hệ mua bán gạo sạch giá rẻ ở zalo"/></a>
                    
               </div>
            </div>
            
            <div className="headerMiddle">
                <Linked to="/">  <img id="logoPage" src={logoPage} alt="Logo Trang Web Đại Lý Gạo Huy Hoàng Gạo Sạch Và Chất Lượng"/> </Linked>
                <span className="headTitle"> <h1>Đại Lý Gạo Huy Hoàng</h1></span>
                <Linked to="/cartList" className="shoppingCartContainer">
                <i className="ti-shopping-cart"></i>
                <p className="notifications">{countingCart}</p>
                </Linked>
            </div>
            <div className="navContainer">
                <ul className="navigationsBar">
                    <div className="leftNav">
                    <li className="navigations"><a href=""><i className="ti-align-justify listIcon"></i> Danh Mục Sản Phẩm</a>
            <div className="subNavBar">

                    <ul className="subNavContainer">
                         <Link to="riceSection" spy={true} smooth={true} offset={50} duration={500}><li className="subNavs">Gạo</li> </Link>
                        <Link to="oilSection" spy={true} smooth={true} offset={50} duration={500}><li className="subNavs">Dầu</li> </Link>
                        

                    </ul>
            </div>
                    </li>
                    
                    </div>
                    <img src={backgroundHeader} id="backgroundHeader"/>
                    <div className="rightNav">

                    <Link to="camKet" spy={true} smooth={true} offset={50} duration={500} className="navigations"><li className="subNavs">Cam Kết</li> </Link>
                    <Linked to="/contact" className="navigations"><li className="subNavs">Liên Hệ</li></Linked>

                    </div>
                </ul>
                </div>
        </div>

    )
}


export default Headers;