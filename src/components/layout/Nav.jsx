import React from "react";

const links = [
  {
    id: 1,
    label: "Home",
  },
  {
    id: 2,
    label: "About",
  },
  {
    id: 3,
    label: "Menu",
  },
  {
    id: 4,
    label: "Reservations",
  },
  {
    id: 5,
    label: "Order online",
  },
  {
    id: 6,
    label: "Login",
  },
];

const Nav = () => {
  return (
    <nav>
      <ul>
        {links.map((link) => {
          return (
            <li key={link.id}>
              <a>{link.label}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
