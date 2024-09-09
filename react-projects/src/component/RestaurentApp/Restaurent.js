import React, { useState } from "react";
import "./style.css";
import Menu from "./menuAPI";
import MenueCard from "./MenueCard";
import Navbar from "./Navbar.js";

const uniqueList = [... new Set(Menu.map((currElement)=>{
    return currElement.category;
})),"All"
];            //console.log( uniqueList)

const Restaurent = () => {
  const [menudata, setMenuData] = useState(Menu);   //console.log(menudata)  //.menuAPI ka sara data store ho jayegaa, menudata me..
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category)=>{  //OnClick, All Menue data se category wise filter karega,menudata ko set kr dega, aun fields ke saath.
    
    if (category.currElement ==="All") {
      setMenuData(Menu);
      return;
    }
    const updatedList = Menu.filter((currentElement)=>{
        return currentElement.category === category.currElement
    });
    setMenuData(updatedList);   //menudata will be changed
  }

  return (
    <>
      < Navbar filterItem={filterItem} menuList={menuList} />
      {/* Menu data ki value will be changed.. */}
      <MenueCard menudata={menudata} />
    </>
  );
};

export default Restaurent;

//what they do is- kisi bi data ko get karke yaha raknaa.. Apne pass hold karke rakhna..
// const [menudata , setMenuData = useState(Menu) //React Application me jo state ha,data ha,Ausko manage krne ke liye,We use usestate...
//  State-variable   updated-function     |_ data ko hold karne ke liye,manage krne ke liye
//current data of state-var.= Menu  \__ jab bi eiski value change hogi, vo humara current state variable ki value change kr degaa..
