import React from "react";
import style from "./SidebarItem.module.css";

function SidebarItem(props) {
  return (
    <div className={style.div_sidebarItem}>
      <span>{props.name}</span> 
      <div className={style.div_sidebarItem_input}>
        <input
          type={props.type}
          className={style.sidebarItem_input}
        ></input>
      </div>
    </div>
  );
}

export default SidebarItem;
