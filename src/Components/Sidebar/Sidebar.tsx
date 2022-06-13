import { ProSidebar, Menu, MenuItem, SubMenu , SidebarHeader} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import React from 'react';

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
            <MenuItem><a href='bubble-sort'>Bubble</a></MenuItem>
            <MenuItem><a href='select-sort'>Select</a></MenuItem>
            <MenuItem><a href='heap-sort'>Heap</a></MenuItem>
            <MenuItem><a href='merge-sort'>Merge</a></MenuItem>
            <MenuItem><a href='quick-sort'>Quick</a></MenuItem>
          </SubMenu>
          <SubMenu title="Searching Algorithms">
            <MenuItem><a href='binary-search'>Binary</a></MenuItem>
            <MenuItem><a href='linear-search'>Linear</a></MenuItem>
          </SubMenu>
        </Menu>
      </ProSidebar>
    </div>
  )
}

export default Sidebar