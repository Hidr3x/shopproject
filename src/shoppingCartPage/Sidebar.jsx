import React from 'react';
import style from "./Sidebar.module.css"
import SidebarItem from './SidebarItem';

function Sidebar(props) {
    return (
      <div className={style.div_sidebar} >
<SidebarItem name='Name:' type='text'/>
<SidebarItem name='Email:' type='text'/>
<SidebarItem name='Phone:' type='number'/>
<SidebarItem name='Address:' type='text'/>
      </div>
    );
  }
  
  export default Sidebar;