import React from "react";

const Profile = () => {
  return (
    <div className="page">
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "18px 0px",
          borderBottom: "1px solid grey",
        }}
      >
        <div>
          <img
            style={{ width: "160px", height: "160px", borderRadius: "80px" }}
            src="https://instagram.fhex4-2.fna.fbcdn.net/v/t51.2885-19/s320x320/47035179_1815829398539931_4396944654424080384_n.jpg?_nc_ht=instagram.fhex4-2.fna.fbcdn.net&_nc_ohc=CmXZ24YsUEcAX_yGHDA&oh=2a261a8f00be519fa16aca7140880c58&oe=5EF14A5E"
          />
        </div>
        <div>
          <h4>Xavier Rosario</h4>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "120%",
            }}
          >
            <h6>12 post</h6>
            <h6>1 follower</h6>
            <h6>1 following</h6>
          </div>
        </div>
      </div>
      <div className="gallery">
        <img
          className="item"
          src="https://images.huffingtonpost.com/2010-09-19-Reti1.jpg"
        />
        <img
          className="item"
          src="https://image.shutterstock.com/image-vector/abstract-square-pixel-mosaic-background-260nw-533541679.jpg"
        />
        <img
          className="item"
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/beach-quotes-1559667853.jpg?crop=0.632xw:0.946xh;0.0961xw,0.0537xh&resize=640:*"
        />
        <img
          className="item"
          src="https://images.huffingtonpost.com/2010-09-19-Reti1.jpg"
        />
        <img
          className="item"
          src="https://images.huffingtonpost.com/2010-09-19-Reti1.jpg"
        />
        <img
          className="item"
          src="https://images.huffingtonpost.com/2010-09-19-Reti1.jpg"
        />
        <img
          className="item"
          src="https://images.huffingtonpost.com/2010-09-19-Reti1.jpg"
        />
        <img
          className="item"
          src="https://images.huffingtonpost.com/2010-09-19-Reti1.jpg"
        />
        <img
          className="item"
          src="https://images.huffingtonpost.com/2010-09-19-Reti1.jpg"
        />
        <img
          className="item"
          src="https://images.huffingtonpost.com/2010-09-19-Reti1.jpg"
        />
        <img
          className="item"
          src="https://images.huffingtonpost.com/2010-09-19-Reti1.jpg"
        />
        <img
          className="item"
          src="https://images.huffingtonpost.com/2010-09-19-Reti1.jpg"
        />
      </div>
    </div>
  );
};

export default Profile;
