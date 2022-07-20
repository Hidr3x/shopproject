import React from "react";
import { rerender } from "..";
import style from "./SidebarItem.module.css";

function SidebarItem(props) {
  return (
    <div className={style.div_sidebarItem}>
      <div className={style.div_sidebarItem_button}>
        <button onClick={()=>rerender()} className={style.sidebarItem_button}>
          {props.name}
        </button>
      </div>
    </div>
  );
}

export default SidebarItem;
