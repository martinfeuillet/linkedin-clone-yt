import { Avatar } from "@mui/material";
import React from "react";
import "./sidebar.css";

function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
                <p>{topic}</p>
        </div>
    )
    
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1579547621706-1a9c79d5c9f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="" />
                <Avatar className="sidebar__avatar" />
                <h2>Martin Feuillet</h2>
                <h4>Martin.feuillet92@gmail.com</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>qui vous a remarqué</p>
                    <p className="sidebar__statNumber">2,5663</p>
                </div>
                <div className="sidebar__stat">
                    <p>Vues sur vos publications</p>
                    <p className="sidebar__statNumber">2,5663</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('softwareEngineering')}
                {recentItem('design')}
                {recentItem('developer')}
            </div>
        </div>
    );
}

export default Sidebar;
