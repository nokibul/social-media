import React from 'react'
import './profile.css';
import Topbar from '../../components/topbar/Topbar';
import SideBar from '../../components/sidebar/SideBar';
import RightBar from '../../components/rightbar/RightBar';
import Feed from '../../components/feed/Feed';

const Profile = () => {
  return (
    <>
        <Topbar />
        <div className="profile">
        <SideBar />
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                    <img src="/assets/cover.jpg" alt="" className="profileCoverImg" />
                    <img src="/assets/person/person1.jpg" alt="" className="profileUserImg" />
                </div>
                <div className="profileInfo">
                    <h4 className="profileInfoName">Nokibul Islam</h4>
                    <span className="profileInfoDesc">Hello there!</span>
                </div>
            </div>
            <div className="profileRightBottom">
                <Feed />
                <RightBar />
            </div>
        </div>
      </div>
    </>
  )
}

export default Profile