import React from "react";
import Cover from "../../img/blue.jpg";
import Profile from "../../img/virat.png";
import "./ProfileCard.css";

const ProfileCard = () => {
  const ProfilePage = true;
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={Cover} className="okk" alt="" />
        <img src={Profile} alt="" />
      </div>

      <div className="ProfileName">
        <span>Virat Kohli</span>
        <span>Indian Cricket Player</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>286</span>
            <span>Followings</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>25M</span>
            <span>Followers</span>
          </div>

          {ProfilePage && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>1000</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {ProfilePage ? "" : <span>My Profile</span>}
    </div>
  );
};

export default ProfileCard;
