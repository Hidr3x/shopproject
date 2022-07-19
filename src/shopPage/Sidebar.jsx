import React from 'react';
import style from "./Sidebar.module.css"
import SidebarItem from './SidebarItem';



function Sidebar() {
    return (
      <div className={style.div_sidebar} >
        <h2>Shops:</h2>
<SidebarItem />
<SidebarItem />
<SidebarItem />
<SidebarItem />
<SidebarItem />
        
      </div>
    );
  }
  
  export default Sidebar;