import Link from "next/link";
import tw from "tailwind-styled-components";

import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Logo from "./Logo";

const NavbarContainer = tw.div`
    fixed
    left-0
    top-0
    w-full
    z-30
    ease-in
    duration-300
`;

const NavbarItemsContainer = tw.nav`
    max-w-[1480px]
    m-auto
    flex
    justify-between
    items-center
    p-4
    text-white
`;
const NavbarMenu = tw.ul`
    hidden
    sm:flex
`;

const NavbarMenuItem = tw.li`
    p-4
`;

const HamburgerButton = tw.div`
    block
    sm:hidden
    z-10
`;

const MobileMenuItem = tw.li`
    p-4
    text-4xl
    hover:text-gray-500
`;

const MobileMenu = tw.div`
    sm:hidden
    absolute
    top-0
    right-0
    bottom-0
    flex
    justify-center
    items-center
    w-full
    h-screen
    bg-black
    text-white
    text-center
    ease-in
    duration-300
    `;

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [color, setColor] = useState("transparent");
    const [textColor, setTextColor] = useState("white");

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 10) {
                setColor("#ffffff");
                setTextColor("#000000");
            } else {
                setColor("transparent");
                setTextColor("#ffffff");
            }
        };
        window.addEventListener("scroll", changeColor);
    }, []);

    return (
        <NavbarContainer style={{ backgroundColor: `${color}` }}>
            <NavbarItemsContainer style={{ color: `${textColor}` }}>
                <Link href="/" passHref>
                    <Logo></Logo>
                </Link>
                <NavbarMenu>
                    <NavbarMenuItem>
                        <Link href="/">Home</Link>
                    </NavbarMenuItem>
                    <NavbarMenuItem>
                        <Link href="/#about">Gallery</Link>
                    </NavbarMenuItem>
                    <NavbarMenuItem>
                        <Link href="/#product">Work</Link>
                    </NavbarMenuItem>
                    <NavbarMenuItem>
                        <Link href="/#testimonials">Contact</Link>
                    </NavbarMenuItem>
                </NavbarMenu>

                {/* Mobile Button */}
                <HamburgerButton onClick={handleNav} className="">
                    {nav ? (
                        <AiOutlineClose
                            size={20}
                            style={{ color: `${textColor}` }}
                        />
                    ) : (
                        <AiOutlineMenu
                            size={20}
                            style={{ color: `${textColor}` }}
                        />
                    )}
                </HamburgerButton>
                {/* Mobile Menu */}
                <MobileMenu className={nav ? "left-0 " : "left-[-100%]"}>
                    <ul>
                        <MobileMenuItem onClick={handleNav} className="">
                            <Link href="/">Home</Link>
                        </MobileMenuItem>
                        <MobileMenuItem onClick={handleNav}>
                            <Link href="/#gallery">Gallery</Link>
                        </MobileMenuItem>
                        <MobileMenuItem onClick={handleNav}>
                            <Link href="/work">Work</Link>
                        </MobileMenuItem>
                        <MobileMenuItem onClick={handleNav}>
                            <Link href="/contact">Contact</Link>
                        </MobileMenuItem>
                    </ul>
                </MobileMenu>
            </NavbarItemsContainer>
        </NavbarContainer>
    );
};

export default Navbar;
