"use client";
import React, { useEffect } from "react";
import {
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.jsx";
import Image from "next/image.js";
import icon from "../../../public/images/usuario.svg";
import { useSession, signOut } from "next-auth/react";

export default function NavBarComponent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isLogged, setIsLogged] = React.useState(false);

  const menuItems = [
    ["Home", "./"],
    ["Proyects", "./proyects"],
    ["Contributors", "./users"],
    ["Sumbit Proyect", "./proyects/sumbit"],
    ["Log In", "./users/login"],
  ];

  const { data: session } = useSession();
  console.log(session);
  // if (session?.user != undefined) {
  //   setIsLogged(true);
  // }

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">SciUnity</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="./">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/proyects" aria-current="./proyects">
            Proyects
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/proyects/sumbit" aria-current="./proyects">
            Sumbit Proyect
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="./users">
            Contributors
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="./login">Login</Link>
        </NavbarItem>
        <NavbarItem>
          {session ? <Button onClick={() => signOut()}>LogOut</Button> : <></>}
          <Link src="./login">
            <Button
              as={Link}
              className="bg-cyan-400"
              href={session?.user ? "./users/login" : "./login"}
              variant="flat"
            >
              <Image src={icon} width={20} height={20} alt="login button" />
            </Button>
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href={item[1]}
              size="lg"
            >
              {item[0]}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
