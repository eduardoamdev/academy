import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Link from "next/link";

export function NavigationBar() {
  return (
    <Navbar
      fluid
      rounded
      className="fixed top-0 left-0 w-full z-50 !bg-transparent"
    >
      <NavbarBrand as={Link} href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Amdev Academy
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="/">Home</NavbarLink>
        <NavbarLink as={Link} href="/book">
          Book
        </NavbarLink>
        <NavbarLink as={Link} href="/about">
          About
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
