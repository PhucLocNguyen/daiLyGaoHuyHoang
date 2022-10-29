import React from "react";
import {useState, useEffect} from "react";
import {AnimatePresence, motion} from "framer-motion"
import { Route, Routes} from "react-router"
import { BrowserRouter } from 'react-router-dom'
import Headers from "./components/header";
import MainSlides from "./components/mainPage";
// import data from "./data";
import RicePage from "./components/riceProduct";
import OilPage from "./components/oilProduct";
import ContactGmail from "./components/contactGmail";
import ProductDetail from "./components/productDetail";
import MessageLink from "./components/messenger.js"
import CartProducts from "./components/cartProducts";
import emptyCart from "./images/emptyCart.png"
import Contact from "./components/Contact";
import LoadingEffect from "./components/LoadingEffect";
function MainPage(){
            const [modal, setModal] = useState(false);
            const [dataAPI, setData] = useState([]);
            const [loading, setLoading] = useState(false); // them hieu ung loading
            useEffect(()=>{
             apiData();
             setTimeout(()=>{
               setLoading(true);
             },500)           
            },[])
            const apiData= () => {
            fetch("https://633972a866857f698fb62bd6.mockapi.io/gaoAPI/WebAPI").then((res)=> res.json()).then((data)=> setData(data))};
    const [cartItems, setCartItems] = useState([]);
    // const {products} = data;
    const products = dataAPI;
    const onAdd = (product) =>
        {
        const exist = cartItems.find((x)=> x.id === product.id);
        if (exist){
            const newCartItems = cartItems.map((x) =>
            x.id ===product.id ?        // xét xem có phải là món hàng vừa chọn có nằm trong giỏ hàng hay không
            {...exist, qty: exist.qty +1} : x );  // 
            setCartItems(newCartItems)
            // console.log(newCartItems)
            }
            else{
                const newCartItems = [...cartItems, {...product, qty:1}];
                setCartItems(newCartItems)
                // console.log(newCartItems)
                // console.log("rengreng")
            }
        }
  const onRemove = (product) =>{
       const exist = cartItems.find((x) => x.id ===product.id);
       if(exist.qty ===1)
       {
        const newCartItems = cartItems.filter((x)=> x.id !== product.id);
        setCartItems(newCartItems)
       }
       else{
        const newCartItems = cartItems.map((x)=> x.id === product.id ? {...exist,qty: exist.qty-1}:x);
        setCartItems(newCartItems)
       }
    }
   
    
    return (
<React.StrictMode>
    <BrowserRouter basename="/daiLyGaoHuyHoang">
        <div className="mainContainer">
            <Headers countingCart = {cartItems.length}/>
            <AnimatePresence>
                {loading ? 
            <Routes>
                <Route path="/daiLyGaoHuyHoang" element={
                     <motion.div initial={{opacity:0}} animate={{opacity:1}}exit={{opacity:0}} className="bodyContainer">
                       <MainSlides products ={products}/>
                    </motion.div>}/>

                <Route path="/rice" element={
                     <div className="bodyContainer">
                        <RicePage products ={products}/>
                    </div>}/>
                    <Route path="/oil" element={
                     <div className="bodyContainer">
                        <OilPage products ={products}/>
                    </div>}/>
                    
                    <Route path="/contact" element={
                        <div className="bodyContainer">
                        <Contact/>
                    </div>
                    }/>
                    
                    <Route path="/cartList" element={
                        cartItems.length !==0 ?
                    <div className="bodyContainer">
                        <CartProducts cartItems ={cartItems} onAdd={onAdd} onRemove={onRemove} setModal={setModal} modal = {modal}/>
                        {
                            modal? <ContactGmail cartItems = {cartItems} setModal={setModal} modal = {modal}/>:<div></div>
                        }

                        
                    </div>:
                     <div className="bodyContainer fullViewHeight emptyCartContainer">
                        <img src={emptyCart} className="formatEmptyCart mb-30" alt="empty Cart"/>
                        <h2 className="centerAlign">Giỏ Hàng Của Bạn Đang Trống</h2>
                    </div>
                    }/>
                    {
        products.map(function (items){
            var paths =`/${items.englishName}`;
            return <Route path={paths} key={items.id} element={
                <div className="bodyContainer">
                    <ProductDetail path = {items.englishName} products ={products}   onAdd={onAdd}/>
                </div>
            }/>
        })
        // Làm router cho từng trang sản phẩm --> working
                    }
                    </Routes>
: <LoadingEffect/>}
                    </AnimatePresence>
                        
                    <MessageLink/>
        </div>
    </BrowserRouter>
</React.StrictMode>

    )
}

export default MainPage;