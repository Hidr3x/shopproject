import React from 'react';
import style from "./SidebarItem.module.css"



function SidebarItem() {
    return (
      <div className={style.div_sidebarItem} >
<div className={style.div_sidebarItem_button}><button className={style.sidebarItem_button}>ETC...</button></div>
      </div>
    );
  }
  
  export default SidebarItem;