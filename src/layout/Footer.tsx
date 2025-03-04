import Image from "next/image";
import { CiMail } from "react-icons/ci";
import { MdLocationPin, MdMailOutline, MdOutlinePhone } from "react-icons/md";

function Footer() {
  return (
    <footer className="footer footer-vertical gap-2 bg-base-300 text-base-content p-10">
      <div className="w-full flex flex-col justify-center items-center mb-6 bg-base-200 py-8 rounded-md">
        <p className="text-4xl text-center font-mono text-wrap w-full sm:w-1/2 md:w-1/3 mb-4">
          Want us to email you with the latest blockbuster news?
        </p>
        <form method="post" className="join">
          <div className="w-60">
            <label className="input validator join-item w-full">
              <CiMail />
              <input type="email" placeholder="mail@site.com" required />
            </label>
            <div className="validator-hint hidden">
              Enter valid email address
            </div>
          </div>
          <button className="btn btn-neutral join-item w-24">Join</button>
        </form>
      </div>

      <div className="w-full grid grid-cols-1 grid-rows-2 sm:grid-rows-1 md:grid-cols-2 xl:grid-cols-[60%_40%]">
        <aside className="grid auto-rows-fr gap-4">
          <Image src="/logo.svg" alt="logo" width={64} height={64} />
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <div className="w-full grid grid-cols-2">
          <nav className="grid auto-rows-auto">
            <h6 className="footer-title">Links</h6>
            <a className="link link-hover ml-1">Home</a>
            <a className="link link-hover ml-1">About Us</a>
            <a className="link link-hover ml-1">Events</a>
            <a className="link link-hover ml-1">Meet Our team</a>
          </nav>
          <nav className="grid auto-rows-auto items-start">
            <h6 className="footer-title">Contact</h6>
            <a className="link link-hover ml-1 flex items-center">
              <MdMailOutline className="mr-2" /> contact@tapakila.mg
            </a>
            <a className="link link-hover ml-1 flex items-center">
              <MdOutlinePhone className="mr-2" /> 038 88 888 88
            </a>
            <a className="link link-hover ml-1 flex items-center">
              <MdLocationPin className="mr-2" /> Ivandry, Antananarivo,
              Madagascar
            </a>
          </nav>
        </div>
      </div>

      <div className="w-full flex justify-between items-center text-sm text-gray-600">
        <div className="flex gap-2">
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <p>© 2025. Tapakila. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
