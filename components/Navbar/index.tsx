import * as React from 'react';
import Link from 'next/link';
import { AiFillGithub } from "react-icons/ai"
import { BiLogoLinkedin } from "react-icons/bi"
import ThemeToggler from './ThemeToggler';
import CustomizedName from './CustomizedName';
import IconWithLink from './IconWithLink';

type PropsResponsiveAppBar = {
    Routes: React.FC;
    SidebarRoutes: React.FC;
}

function ResponsiveAppBar({ Routes, SidebarRoutes }: PropsResponsiveAppBar) {

    return (
        <nav className='Navbar sticky top-0 left-0 right-0 z-10 backdrop-blur-sm'>
            <div className="navbar__container flex justify-between items-center max-w-7xl mx-auto p-4 flex-row-reverse md:flex-row ">
                <SidebarRoutes />
                <CustomizedName />
                <Routes />
                <div className="navbar__utils flex gap-2 items-center">
                    <ThemeToggler />
                    <IconWithLink url="https://github.com/shekharK18/" Icon={<AiFillGithub/>} />
                    <IconWithLink url="https://www.linkedin.com/in/shekhar-kashyap-5b99551aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" Icon={<BiLogoLinkedin/>} />
                </div>
            </div>
        </nav>
    );
}
export default ResponsiveAppBar;