import React from "react";

const Profile = ({ resource }) => {
  const person = resource.person.read();
  return <h2>Your profile is {`${person.name.first} ${person.name.last}`}</h2>;
};

export default Profile;
