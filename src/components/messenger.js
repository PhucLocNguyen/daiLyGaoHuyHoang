import messengerLogo from "../images/Untitled-1.png"
import React from "react"
export default function MessengerLink(){
    return (
        <a href="https://www.messenger.com/t/103398922515680" target="blank" className="floatIcon"> <img src={messengerLogo} alt="Liên Hệ Mua Bán Gạo Sạch Tại Trang Web Đại Lý Gạo Luân Qua Facebook" /> </a>
    )
}
// import React, { Component} from 'react';
// import FacebookProvider, { MessageUs } from 'react-facebook';

// export default class Message extends Component {
//   render() {
//     return (
//       <FacebookProvider appId="123456789">
//         <MessageUs className="floatIcon" appId="123456789" pageId="123456789"/>
//       </FacebookProvider>    
//     );
//   }
// }
