 import React, { useState } from 'react'
 import "./style.css";
 import Menu from "./menuApi";  // comes data
 import MenuCard from './MenuCard';  //it is component which get data from Menu
 import Navbar from './Navbar';
 
 
 const uniqueList=[
    ...new Set(Menu.map((curElem)=>{
      return curElem.category;
    })
    ),
    "All",
 ];
 console.log(uniqueList);
 
 const Resturant = () => {
    // --hooks first data on top  -it is use to getting data from Menu(API)
       const [menuData,setMenuData]=useState(Menu);
       const [menuList,setMenuList]=useState(uniqueList);
       
       const filterItem=(category)=>{
        if(category==="All"){
          setMenuData(Menu);
          return;
        }
        const updateList=Menu.filter((curElem)=>{
          return curElem.category=== category;
        });
          setMenuData(updateList);
       };

   return (
     <>
       <Navbar filterItem={filterItem} menuList={menuList} />
     {/* use props for getting data(menuData) in loop and set it on component (MenuCard)  */}
      <MenuCard menuData={menuData} />
     </>
   );
 };
 
 export default Resturant;
 