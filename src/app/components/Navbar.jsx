import Link from "next/link";
import NavLink from "./NavLink";

const navLinks = [
  {
    url: "/",
    title: "Home",
  },
  {
    url: "/about",
    title: "about",
  },
  {
    url: "/dashboard",
    title: "Dashboard",
  },
  {
    url: "/blogs",
    title: "Blogs",
  },
  {
    url: "/documentations",
    title: "Docs",
  },
];

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between container mx-auto">
      <ul className="flex items-center justify-center">
        {navLinks.map(({ url, title }) => (
          <li key={url} className="mx-2">
            <NavLink
              exact={url === "/"}
              activeClassName="text-red-500 underline font-extrabold"
              href={url}
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
