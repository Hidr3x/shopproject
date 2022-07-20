import React from 'react';
import style from "./Sidebar.module.css"
import SidebarItem from './SidebarItem';




function Sidebar(props) {
  let shops= ['shop1','shop2','shop3','shop4','shop5'];
const sidebarItem = shops.map((item) => (
  <SidebarItem  rerender={props.rerender} name={item} />
));
    return (
      <div className={style.div_sidebar} >
        <h2>Shops:</h2>
{sidebarItem}
      </div>
    );
  }
  
  export default Sidebar;