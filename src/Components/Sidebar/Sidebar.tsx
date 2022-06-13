import { ProSidebar, Menu, MenuItem, SubMenu , SidebarHeader} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import React from 'react';
import { Link } from "react-router-dom";

function Sidebar(props) {
  return (
    <div className='SideBarNav'>
      <ProSidebar style={{height: props.height}}>
        <SidebarHeader>
          <h1 style={{textAlign: 'center'}}>NorthStar</h1>
          <h4 style={{top: 35, left: 85, position: 'fixed'}}>Visualizations</h4>
        </SidebarHeader>
        <Menu iconShape="square">
          <a href='/'><MenuItem>Home</MenuItem></a>
          <SubMenu title="Sorting Algorithms">
            <a href='bubble-sort'><MenuItem>Bubble</MenuItem></a>
            <a href='select-sort'><MenuItem>Select</MenuItem></a>
            <a href='heap-sort'><MenuItem>Heap</MenuItem></a>
            <a href='merge-sort'><MenuItem>Merge</MenuItem></a>
            <a href='quick-sort'><MenuItem>Quick</MenuItem></a>
          </SubMenu>
          <SubMenu title="Searching Algorithms">
            <a href='binary-search'><MenuItem>Binary</MenuItem></a>
            <a href='linear-search'><MenuItem>Linear</MenuItem></a>
          </SubMenu>
        </Menu>
      </ProSidebar>
    </div>
  )
}

export default Sidebar