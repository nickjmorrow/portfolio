// external
import Image from 'next/image';
import React from "react";
import profilePic from '../../public/images/profile_picture.jpeg';

export const Profile: React.FC = () => {
  return <div style={{ width: '250px', height: '250px' }}>
    <Image src={profilePic} />
  </div>;
};