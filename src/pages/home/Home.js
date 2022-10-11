import React from 'react';
import './home.css'
import Topbar from '../../components/topbar/Topbar';
import SideBar from '../../components/sidebar/SideBar';
import RightBar from '../../components/rightbar/RightBar';
import Feed from '../../components/feed/Feed';


const Home = () => {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <SideBar />
        <Feed />
        <RightBar />
      </div>

    </>
  )
}

export default Home