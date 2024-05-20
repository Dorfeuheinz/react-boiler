import { MoonFilled, SunFilled } from "@ant-design/icons";
import { ActionTypes, useGlobalContext } from "contexts/Global";
import React from "react";
import {useNavigate} from "react-router-dom"

export default function Navbar() {
  const { state, dispatch } = useGlobalContext();

  const handleToggle = () => {
      dispatch({ type: ActionTypes.LIGHT_MODE, payload: !state.LightMode });
  }

  const whitelogo = require('../components/tinymeshimg.png');
  const blacklogo = require('../components/tinymeshimg2.png');
  

  const navigate = useNavigate()

  const handlelogout = () =>{
    navigate('/login')
  }
  
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        {!state.LightMode && <img className="" src={String(whitelogo)} alt="logo"/>}
        {state.LightMode && <img className="" src={String(blacklogo)} alt="logo"/>}
        {/* <img src={String(logo)} alt="logo"/> */}
      </div>
      {/* <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div> */}
      <div className="navbar-end">
        <div className="flex-none gap-2">
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center" onClick={handleToggle}>
              {state.LightMode? <MoonFilled style={{ fontSize: "30px" }} /> : <SunFilled style={{ fontSize: "30px" }} />}
            </div>
            &emsp;
            <div className="form-control">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-24 md:w-auto"
              />
            </div>&emsp;
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a onClick={handlelogout}>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
