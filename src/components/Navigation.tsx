import { NavLink } from "react-router-dom";

interface INavLink {
  text: string;
  path: string;
}

const navLinks: INavLink[] = [
  { text: "Главная", path: "/" },
  { text: "Избранное", path: "/favorites" },
];

export function Navigation() {
  return (
    <nav>
      <ul className="flex items-center gap-[16px]">
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `relative after:content-[""] after:w-[4px] after:h-[4px] after:bg-dark after:absolute after:rounded-full after:bottom-0 after:left-1/2 after:-translate-x-1/2 ${
                isActive ? "after:block" : "after:hidden"
              }`
            }
          >
            {link.text}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
}
