import { getSession } from "@/lib/auth";
import React from "react";
import { LuCalendar, LuTicket } from "react-icons/lu";

const UserProfile = async () => {
  const user = await getSession();

  if (!user) return <div>Loading...</div>;

  const { name, imageUrl, username, email } = user;

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      {/* Profile Card */}
      <div className="bg-base-100 p-6 border flex flex-col md:flex-row justify-center items-center rounded-md">
        <div tabIndex={0} role="button" className="avatar select-none">
          <div className="w-24 h-24 rounded-full">
            {imageUrl ? (
              <img src={imageUrl} alt={user.name} />
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
              <p className="text-xl font-bold">4</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Events */}
      <div className="card bg-base-100 shadow-md p-6 rounded-2xl">
        <h3 className="text-lg font-semibold mb-4">Recent Events</h3>
        <div className="space-y-4">
          {/* {recentEvents.map((event, index) => (
            <div key={index} className="flex items-center justify-between border-b pb-2">
              <div className="flex items-center space-x-3">
                <LuCalendar className="w-5 h-5 text-green-600" />
                <p className="text-gray-800 font-medium">{event.name}</p>
              </div>
              <div className="badge badge-primary">{event.date}</div>
            </div>
          ))} */}
          <div className="flex items-center justify-between border-b pb-2">
            <div className="flex items-center space-x-3">
              <LuCalendar className="w-5 h-5 text-green-600" />
              <p className="text-gray-800 font-medium">GHOST</p>
            </div>
            <div className="badge badge-primary">12 April 2025</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
