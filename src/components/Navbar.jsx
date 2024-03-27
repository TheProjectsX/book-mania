import { NavLink } from "react-router-dom";
import hamburgerIcon from "../assets/icons/hamburger.svg";
import { useState } from "react";

const Navbar = () => {
  const [navOpened, setNavOpened] = useState(false);

  return (
    <nav className="my-6 mb-12">
      <div className="flex justify-between items-center gap-4 ">
        <div className="lg:hidden">
          <button onClick={() => setNavOpened(!navOpened)}>
            <img src={hamburgerIcon} alt="Hamburger Icon" />
          </button>
        </div>

        <div>
          <button className="text-xl sm:text-2xl font-bold">
            <a>Book Vibe</a>
          </button>
        </div>

        <div className="hidden lg:flex gap-2 *:text-[#150B2BB3] *:px-3 *:py-2 *:rounded-md *:cursor-pointer *:border-2 *:border-transparent">
          <NavLink to={"/"} className="hover:text-green-500">
            Home
          </NavLink>
          <NavLink to={"/listed-books"} className="hover:text-green-500">
            Listed Books
          </NavLink>
          <NavLink to={"/read-pages"} className="hover:text-green-500">
            Pages to Read
          </NavLink>
          <NavLink to={"/timeline"} className="hover:text-green-500">
            Timeline
          </NavLink>
        </div>

        <div className="hidden md:flex gap-3 items-center">
          <button className="py-2.5 px-4 rounded-md bg-[#23BE0A] text-white font-semibold">
            Sign In
          </button>
          <button className="py-2.5 px-4 rounded-md bg-[#59C6D2] text-white font-semibold">
            Sign Up
          </button>
        </div>
        <div className="md:hidden"></div>
      </div>
      <div
        className={`lg:hidden grid transition-[grid-template-rows,margin] duration-200 ${
          navOpened ? "grid-rows-[1fr] mt-2" : "grid-rows-[0fr]"
        }`}
      >
        <div className="mobileNav flex flex-col items-center *:text-[#150B2BB3] *:px-3 *:py-1 *:rounded-md *:cursor-pointer mb-2 *:underline-offset-4 overflow-hidden">
          <NavLink to={"/"} className="hover:text-green-500">
            Home
          </NavLink>
          <NavLink to={"/listed-books"} className="hover:text-green-500">
            Listed Books
          </NavLink>
          <NavLink to={"/read-pages"} className="hover:text-green-500">
            Pages to Read
          </NavLink>
          <NavLink to={"/timeline"} className="hover:text-green-500">
            timeline
          </NavLink>

          <div className="md:hidden flex flex-col gap-2 items-center">
            <button className="py-2 px-3.5 rounded-md bg-[#23BE0A] text-white font-semibold">
              Sign In
            </button>
            <button className="py-2 px-3.5 rounded-md bg-[#59C6D2] text-white font-semibold">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
