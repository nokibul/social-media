import React from 'react';
import './sidebar.css';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import CloseFriends from '../closeFriends/CloseFriends.js';
import {Users} from "../../dummy.js";

const SideBar = () => {
    return (
        <div className="sidebar">
          <div className="sidebarWrapper">
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <RssFeedIcon className="sidebarIcon" />
                <span className="sidebarListItemText">Feed</span>
              </li>
              <li className="sidebarListItem">
                <ChatBubbleIcon className="sidebarIcon" />
                <span className="sidebarListItemText">Chats</span>
              </li>
            </ul>
            <button className="sidebarButton">Show More</button>
            <hr className="sidebarHr" />
            <ul className="sidebarFriendList">
            </ul>
            <ul className="sidebarFriendList">
                {Users.map(u=>(
                  <CloseFriends key={Users.id} user={u} />
                ))}
            </ul>
          </div>
        </div>
      );
}

export default SideBar;