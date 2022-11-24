import React from 'react';
import './sidebar.css'
import { Sidebardata } from './Sidebardata';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='logo'><h3 className='size'>educore.</h3></div>
        <ul className='sidebarlist'>
            {Sidebardata.map((val, key) => {
                return  <li key = {key} className="row" >
                  {" "}
                  <div className='icon' id={window.location.pathname == val.link ? "active" : ""} onClick={()=> {window.location.pathname = val.link}}>{val.icon}</div>{" "}
                  <div className="title" id={window.location.pathname == val.link ? "active" : ""} onClick={()=> {window.location.pathname = val.link}}>
                    {val.title}
                  </div>
                </li>
            })}
        </ul>
    </div>
  )
}

export default Sidebar