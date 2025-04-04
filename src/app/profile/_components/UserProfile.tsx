import { getUser } from "@/lib/auth";
import Image from "next/image";
import React from "react";
import { LuTicket } from "react-icons/lu";
import TicketBought from "./TicketBought";

const UserProfile = async () => {
  const user = await getUser();

  if (!user) return <div>Loading...</div>;

  const { id, name, imageUrl, username, email } = user;

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <div className="bg-base-100 p-6 border flex flex-col md:flex-row justify-center items-center rounded-md">
        <div tabIndex={0} role="button" className="avatar select-none">
          <div className="w-24 h-24 rounded-full">
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt={user.name}
                width={1980}
                height={1980}
              />
            ) : (
              <div className="flex items-center justify-center bg-primary font-bold w-full h-full text-primary-content">
                {user.username.slice(0, 2).toUpperCase()}
              </div>
            )}
          </div>
        </div>
        <div className="md:ml-6 mt-4 md:mt-0 text-center md:text-left">
          <h2 className="text-2xl font-bold capitalize">{name}</h2>
          <p className="text-base-content/60">@{username}</p>
          <p className="text-base-content/80">{email}</p>
        </div>
        <div className="flex items-center md:ml-auto mt-6 md:mt-0">
          <div>
            <p className="text-lg font-semibold">Tickets Bought</p>
            <div className="flex gap-2">
              <LuTicket className="w-6 h-6 text-primary" />
              <TicketBought userId={id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
