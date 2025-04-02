"use client";

import CountrySelect from "@/components/CountrySelect";
import ImageUploader from "@/components/ImageUploader";
import { login } from "@/lib/auth";
import { useUploadThing } from "@/lib/uploadthing";
import { useRouter } from "next/navigation";
import { use, useState } from "react";
import { toast } from "react-toastify";
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL as string;

function RegisterPage({ searchParams }: SearchParamProps) {
  const [file, setFile] = useState<File>();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { url } = use(searchParams);

  const { startUpload } = useUploadThing("imageUploader", {
    onClientUploadComplete: () => {
      console.log("Image profile uploaded successfully!");
    },
    onUploadError: () => {
      toast.error("Error occurred while uploading image profile");
    },
  });

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formaData = new FormData(e.currentTarget);
    let imageUrl = "";

    if (file) {
      try {
        const uploadedImage = await startUpload([file]);
        if (!uploadedImage) return;
        imageUrl = uploadedImage[0].ufsUrl;
        console.log("Uploaded: ", imageUrl);
      } catch (e) {
        console.error(e);
        setLoading(false);
        return;
      }
    }

    const username = formaData.get("username") as string;
    const name = formaData.get("name") as string;
    const email = formaData.get("email") as string;
    const password = formaData.get("password") as string;
    const country = formaData.get("country") as string;
    const fetchedCountry: CountryProps = await fetch(BASE_URL + "/countries", {
      method: "POST",
      body: JSON.stringify({ name: country }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
    const body = {
      username,
      name,
      email,
      password,
      imageUrl: "",
      role: {
        id: "7ccf4e12-4705-4a41-9ad4-82bcf470a0d8", // User role
      },
      country: {
        id: fetchedCountry.id,
      },
    };
    const headers = {
      "Content-Type": "application/json",
    };
    const res = await fetch(BASE_URL + "/users/register", {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });
    if (res.status == 200 || res.status == 201) {
      // PUT users to upload image profile
      const user = (await res.json()) as UserProps;
      user.imageUrl = imageUrl;
      const res2 = await fetch(BASE_URL + "/users", {
        method: "PUT",
        headers,
        body: JSON.stringify(user),
      });
      if (res2.status == 200 || res2.status == 201) {
        toast.success("Image profile uploaded successfully");
      } else {
        toast.error("Failed to upload image profile");
        setLoading(false);
        return;
      }

      const userPayload: UserPayload = {
        id: user.id,
        email: user.email,
        username: user.username,
        role: user.role.id,
      };
      try {
        await login(userPayload);
        toast.success("Registration successful");
        window.location.reload();
      } catch (error) {
        console.error("Failed to login", error);
        toast.error("Failed to login. Please try again!");
      }

      if (url) {
        router.replace(url as string);
      }
    } else {
      toast.error("Failed to register. Please try again!");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-[60vh] w-full">
      <div className="max-w-md w-full mx-auto py-4 lg:py-6">
        <h2 className="text-3xl font-bold text-center mb-8">Sign Up</h2>
        <form className="space-y-4" onSubmit={submitHandler}>
          <div className="flex flex-col items-center justify-center w-full text-center">
            <ImageUploader setFile={setFile} />
            <p className="mt-4 font-semibold">Upload your image profile</p>
            <label className="text-sm text-base-content/50">Max size 8MB</label>
          </div>
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="input input-md w-full"
              placeholder="How do you want to be called?"
            />
          </div>
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="input input-md w-full"
              placeholder="What's your name?"
            />
          </div>
          <CountrySelect name="country" />
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="input input-md w-full"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="input input-md w-full"
              placeholder="Enter your password (minimum 8 characters)"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary mt-4"
            disabled={loading}
          >
            Sign Up
          </button>
        </form>
        <p className="mt-6">
          Already have an account?{" "}
          <a href="/login" className="link">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
