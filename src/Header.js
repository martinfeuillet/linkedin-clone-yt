import React from "react";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import HeaderOptions from "./HeaderOptions";
import { Home,BusinessCenter, SupervisorAccount,Notifications,Chat } from "@mui/icons-material";

function Header() {
    return (
        <div className="header">
            <div className="header__left">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="img"/>
                <div className="header__search">
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>
            <div className="header__right">
                <HeaderOptions Icon={Home} title ="home" />
                <HeaderOptions Icon={SupervisorAccount} title ="my Network" />
                <HeaderOptions Icon={BusinessCenter} title ="jobs" />
                <HeaderOptions Icon={Chat} title ="messaging" />
                <HeaderOptions Icon={Notifications} title ="notifications" />
                <HeaderOptions title ="me" avatar='https://compassionate-leakey-e9b16b.netlify.app/images/IG_Sonny.jpeg' />
                
            </div>
        </div>
    );
}

export default Header;
