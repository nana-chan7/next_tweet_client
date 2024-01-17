"use client"

import Image from "next/image";
import imageMe from '@/public/images/me.png'

const ProfilePage = () => {
    return (
        <div>
            <h1 className="text-2xl text-center font-bold">Profile</h1>
            <Image
            src={imageMe}
            className="h-36 w-36"
            alt=""
            />
        </div>
    );
} 

export default ProfilePage;

