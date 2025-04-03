"use client";

import { login } from "@/lib/auth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { use, useState } from "react";
import { toast } from "react-toastify";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL as string;

function LoginPage({ searchParams }: SearchParamProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { url } = use(searchParams);

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const email = (e.target as HTMLFormElement).email.value;
    const password = (e.target as HTMLFormElement).password.value;
    const body = { email, password };
    const headers = {
      "Content-Type": "application/json",
    };
    const res = await fetch(BASE_URL + "/users/login", {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });
    if (res.status == 200) {
      const user = (await res.json()).user as UserPayload;
      await login(user);
      toast.success("Login successful");
      if (url) {
        router.replace(url as string);
      }
      window.location.reload();
    } else {
      toast.error("Failed to login. Please try again!");
    }
    setLoading(false);
  };
  return (
    <section className="min-h-[60vh] w-full">
      <div className="w-full max-w-md mx-auto py-4 lg:py-6">
        <Image
          src="/logo.png"
          alt="logo"
          className="w-fit mx-auto mb-6"
          width={384}
          height={144}
          data-aos="fade-right"
        />
        <h1 className="text-3xl font-bold text-center mb-6">Sign In</h1>
        <form onSubmit={submitHandler}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              placeholder="example@site.com"
              className="input input-md w-full"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              required
              placeholder="enter your password"
              className="input input-md w-full"
            />
          </div>
          <button type="submit" className="btn btn-primary" disabled={loading}>
            Sign In
          </button>
        </form>
        <p className="mt-6">
          Don&apos;t have an account?{" "}
          <a href="/register" className="link">
            Sign Up
          </a>
        </p>
      </div>
    </section>
  );
}

export default LoginPage;
