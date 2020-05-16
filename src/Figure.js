import React from "react";

const Profile = ({ resource }) => {
  const number = Math.ceil(resource.randomNumber.read() * 100);
  return (
    <div>
      <h2>
        Your magic number is
        <span
          style={{ color: "blue", paddingLeft: "1rem" }}
        >{`${number}`}</span>
      </h2>
    </div>
  );
};

export default Profile;
