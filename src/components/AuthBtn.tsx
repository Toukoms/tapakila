"use client";
import { getSession, logout } from "@/lib/auth";
import Link from "next/link";
import { useEffect, useState } from "react";

function AuthBtn() {
  const [user, setUser] = useState<UserProps | null>(null);
  useEffect(() => {
    getSession().then((session) => setUser(session));
  }, []);
  return (
    <div>
      {user ? (
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="avatar select-none cursor-pointer"
          >
            <div className="w-12 h-12 rounded-full">
              {user.imageUrl ? (
                <img src={user.imageUrl} alt={user.name} />
              ) : (
                <div className="flex items-center justify-center bg-primary font-bold w-full h-full text-primary-content">
                  {user.username.slice(0, 2).toUpperCase()}
                </div>
              )}
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content space-y-2 mt-2 bg-base-300 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <p className="flex flex-col bg-secondary p-2 rounded-md mb-4">
              <span className="font-bold text-lg capitalize">
                {user.username}
              </span>
              <span className="text-sm text-base-content/60">{user.email}</span>
            </p>

            <li>
              <Link href="/profile">My Profile</Link>
            </li>
            <li>
              <button
                className="btn btn-error w-full"
                onClick={async (e) => {
                  e.preventDefault();
                  await logout();
                  window.location.reload();
                }}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      ) : (
        <Link
          href="/login"
          className="btn btn-primary rounded-full text-xl font-sans"
        >
          Login
        </Link>
      )}
    </div>
  );
}

export default AuthBtn;
