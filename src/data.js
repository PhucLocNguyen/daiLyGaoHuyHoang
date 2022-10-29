// const data = {
//     products:[
//         {
//             id: 1,
//             name: "Gạo 5kg Thơm",
//             category: "rice",
//             englishName:"Gao5kgThom",
//             price: "100.000 VND",
//             realPrice: 100000,
//             image:"https://simpleweb.cdn.vccloud.vn/wp-content/uploads/2020/08/2-23.jpg"
//         },
//         {
//             id: 2,
//             name: "Gạo 5kg Sóc Trăng",
//             englishName:"Gao5kgSocTrang",
//             category: "rice",
            
//             price: "100.000 VND",
//             realPrice: 100000,
//             image:"https://simpleweb.cdn.vccloud.vn/wp-content/uploads/2020/08/2-23.jpg"
//         },
//         {
//             id: 3,
//             name: "Gạo 5kg Nở",
//             englishName:"Gao5kgNo",
//             category: "rice",
//             price: "100.000 VND",
//             realPrice: 100000,
//             image:"https://simpleweb.cdn.vccloud.vn/wp-content/uploads/2020/08/2-23.jpg"
//         },
//         {
//             id: 4,
//             name: "Gạo 5kg Huế",
//             englishName:"Gao5kgHue",
//             category: "rice",
//             price: "100.000 VND",
//             realPrice: 100000,
//             image:"https://simpleweb.cdn.vccloud.vn/wp-content/uploads/2020/08/2-23.jpg"
//         },
//         {
//             id: 5,
//             name: "Gạo 5kg nứt",
//             englishName:"Gao5kgNut",
//             category: "rice",
//             price: "100.000 VND",
//             realPrice: 100000,
//             image:"https://simpleweb.cdn.vccloud.vn/wp-content/uploads/2020/08/2-23.jpg"
//         },
//         {
//             id: 6,
//             name: "Gạo 5kg dong goi",
//             englishName:"Gao5kgdongoi",

//             category: "rice",
//             price: "100.000 VND",
//             realPrice: 100000,
//             image:"https://simpleweb.cdn.vccloud.vn/wp-content/uploads/2020/08/2-23.jpg"
//         },
//         {
//             id: 7,
//             name: "Gạo 5kg Thái Lan",
//             englishName: "Gao5kgThaiLan",
//             category: "rice",
//             price: "100.000 VND",
//             realPrice: 100000,
//             image:"https://simpleweb.cdn.vccloud.vn/wp-content/uploads/2020/08/2-23.jpg"
//         },
//         {
//             id:8,
//             name: "Dầu Thô ",
//             englishName: "DauTho",
//             category: "oil",
//               price: "100.000 VND",
//               realPrice: 100000,
//             image:"https://simpleweb.cdn.vccloud.vn/wp-content/uploads/2020/08/2-23.jpg"
//         },
//         {
//             id:9,
//             name: "Dầu Tường An",
//             englishName: "DauTuongAn",

//             category: "oil",
//             price: "100.000 VND",
//             realPrice: 100000,
//             image:"https://cf.shopee.vn/file/58aedc1a46c958bbc64e26640387cbe9"
//         },

//         {
//             id:10,
//             name: "Gạo Lứt",
//             englishName: "GaoLut",

//             category: "rice",
//             price: "100.000 VND",
//             realPrice: 100000,
//             image:"https://simpleweb.cdn.vccloud.vn/wp-content/uploads/2020/08/2-23.jpg"
//         },
//         {
//             id:11,
//             name: "Dầu Ăn Giá Rẻ",
//             englishName: "Dauangiare",
//             category: "oil",
//               price: "100.000 VND",
//               realPrice: 100000,
//             image:"https://cf.shopee.vn/file/58aedc1a46c958bbc64e26640387cbe9"
//         },
        
//         {
//             id:12,
//             name: "Dầu dừa",
//             englishName: "Daudua",
//             category: "oil",
//             price: "100.000 VND",
//             realPrice: 100000,
//             image:"https://cf.shopee.vn/file/58aedc1a46c958bbc64e26640387cbe9"
//         },
//     ]

// }
// export default data
// import React, {useState, useEffect} from "react"
// import ReactDOM from "react-dom/client"
// function dataAPI(){
//     const [data, setData] = useState([]);
//     useEffect(()=>{
//         const apiData= fetch("https://633972a866857f698fb62bd6.mockapi.io/gaoAPI/WebAPI").then((res)=> res.json()).then((data)=> setData(data));

//     },[])
//     return data
// }
// export default dataAPI;