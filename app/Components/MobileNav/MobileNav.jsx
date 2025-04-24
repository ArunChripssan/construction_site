"use client"

import React, { useEffect, useState } from "react";
import './MobileNav.scss'
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const MobileNav = () => {
    const [open, setOpen] = useState(false)
    
    useEffect(() => {
        let handler = () => {
            setOpen(false)
        }
        document.addEventListener("mousedown", handler);
    });


    return (
        <AnimatePresence>
            <div className="mobileNav">
                <div className="wrapper">
                    <div className="navContainer">
                        <Image 
                            src="/assets/logo.png"
                            alt=""
                            width={180}
                            height={60}
                        />
                        <Image 
                            src="/assets/icons/hamburger-menu.png"
                            alt=""
                            width={32}
                            height={32}
                            onClick={() => setOpen(!open)}
                        />
                        {open && (
                            <motion.div
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}
                                className="menu"
                            >
                                <div className="menu-items">
                                    <ul >
                                        <li className="nav-item">
                                            <Link  className="nav-link" href="/">
                                                HOME
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" href="/about">
                                                ABOUT
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
                                            <Link className="nav-link" href="/our-clients">
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
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
        </AnimatePresence>
    );
};

export default MobileNav;
