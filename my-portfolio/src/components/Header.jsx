import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="bg-primary fixed top-0 left-0 right-0 mb-4 z-50 p-6 text-sm font-sans">
            <div className="container mx-auto flex justify-around items-center">
                <NavLink to="/" className="text-black font-semibold">
                    Home
                </NavLink>
                <nav className="flex space-x-6">
                    <NavLink 
                        to="/"
                        className={({ isActive }) => 
                            isActive ? "text-black border-b-2 border-white font-semibold" : "text-gray-900 font-semibold"
                        }
                    >
                        Projects
                    </NavLink>
                    <NavLink 
                        to="/aboutme"
                        className={({ isActive }) => 
                            isActive ? "text-gray-900 border-b-2 border-white font-semibold" : "text-gray-900 font-semibold"
                        }
                    >
                        About me
                    </NavLink>
                </nav>
            </div>
        </header>
    );
}

