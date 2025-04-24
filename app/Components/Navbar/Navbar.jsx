import Link from "next/link";
import Image from "next/image";
import  {React } from "react";
import MobileNav from "../MobileNav/MobileNav";
import './Navbar.scss'


const Navbar = () => {
    
    return (
        <>
            <nav className="nav">
                <div className="wrapper">
                    <div className="container">
                        <Image 
                            src="/assets/logo.png"
                            alt=""
                            width={180}
                            height={50}
                            className="logo"
                        />
                        <ul className="nav-list">
                            <li className="nav-item">
                                <Link className="nav-link" href="/">
                                    HOME
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link about" href="/about">
                                    ABOUT
                                <Image 
                                    src="/assets/icons/down-arrow.png"
                                    alt=""
                                    width={16}
                                    height={16}
                                    className="downArrow"
                                />
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/services">
                                    SERVICES
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/projects">
                                    PROJECTS
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/ourClients">
                                    OUR CLIENTS
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/careers">
                                    CAREERS
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="">
                                    PROFILE
                                </Link>
                            </li>
                        </ul>
                        <Link href="/contact">
                            <button className="contact">Contact Us</button>
                        </Link>
                    </div>
                </div>
            </nav>
            <MobileNav/>
        </>
    );
};

export default Navbar;