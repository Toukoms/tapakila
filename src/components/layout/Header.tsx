import Image from "next/image";
import { MdClose, MdMenu } from "react-icons/md";

function Header() {
  const navLinks = [
    { name: "Home", link: "/#" },
    { name: "Events", link: "/#events" },
    { name: "About Us", link: "/about" },
  ];
  return (
    <header className="fixed top-0 left-0 z-50 w-full flex justify-between items-center px-4 sm:px-6 md:px12 py-6 md:py-8 bg-base-200">
      <Image src="/logo.svg" alt="logo" width={32} height={32} />
      <label htmlFor="nav-menu" className="peer block sm:hidden">
        <input className="peer hidden" type="checkbox" id="nav-menu" />
        <MdMenu size={32} className="peer-checked:hidden" />
        <MdClose size={32} className="hidden peer-checked:block" />
      </label>
      <nav className="z-40 sm:w-auto! sm:static! sm:flex-row! sm:bg-transparent! sm:py-0! peer-has-checked:flex peer-has-checked:flex-col peer-has-checked:absolute peer-has-checked:top-full peer-has-checked:left-0 peer-has-checked:py-10 peer-has-checked:w-full peer-has-checked:h-auto peer-has-checked:scale-100 transition-transform duration-700 peer-has-checked:bg-base-300 items-center gap-6 hidden h-0 scale-y-0 sm:scale-100 sm:h-auto sm:flex">
        {navLinks.map((l) => (
          <a
            key={`nav_link_${l.name}`}
            href={l.link}
            className={
              "text-xl tracking-wider transition-transform hover:border-b"
            }
          >
            {l.name}
          </a>
        ))}
        <button className="btn btn-primary rounded-full text-xl font-sans">
          Login
        </button>
      </nav>
    </header>
  );
}

export default Header;
