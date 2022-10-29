import React from "react";
import emailjs from '@emailjs/browser';
import deliveryTruck from "../images/deliveryTruck.png"
function ContactGmail(props){
    const {cartItems, modal, setModal} = props;
    const printerProduct = cartItems.reduce((acc,curr)=> acc + `Sản phẩm ${curr.name} x${curr.qty}, `,"")
    function sendEmail(e){
        e.preventDefault();
        const serviceId = "gmail";
        const template ="template";
        const key ="Stq_bZsUmRZOv05J-";
        emailjs.sendForm(serviceId, template, e.target, key)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };
    return (
        <div className="overlay">
        <div className="contactFormModal">
            <div className="introductionModal">
            <button className="btnCloseModal" onClick={()=> setModal(!modal)}>X</button>
          <h1 className="centerAlign inline font-size18px">   <img src={deliveryTruck} className="inline" id="fastdelivery"/>Thanh toán khi giao hàng</h1>
            </div>
           
    <form onSubmit={sendEmail}>
        <div  className="contactContainer"> 
           <div className="twoSide">
           <input type="text" placeholder="Tên" className="inputFormat" required name="Name"></input>
           <input type="tel" placeholder="Số Điện Thoại" pattern="[0-9]{10}" className="inputFormat" required name="PhoneNumber"></input>
           </div>
           <div className="twoSide">
            <input type="text" placeholder="Địa Chỉ" className="inputFormat full" required name="Address" ></input>
            <input type="email" placeholder="Email" className="inputFormat"  name="Email"></input>
            </div>
            <input type="text"  className="inputFormat blockFull" readOnly={true} required name="ItemsRender" value={printerProduct}/>
            <input type="text" placeholder="Ghi chú về thông tin món hàng mà bạn đã chọn" className="inputFormat blockFull" required name="Message"></input>
            <input type="submit" className="inputFormat bgr submitBtn buttonContact mb-30 hoverEffect " value="Gửi Thông Tin"></input>  
            

            </div>
            
            
         </form>
        </div>
        </div>
    )
}
export default ContactGmail