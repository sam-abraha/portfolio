import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="bg-zinc-300 fixed top-0 left-0 right-0 z-50 p-4 shadow-md text-sm">
            <div className="container mx-auto flex justify-between items-center">
                <NavLink to="/" className="text-black font-semibold">
                    Samuel Abraha <span className="text-stone">Portfolio</span>
                </NavLink>
                <nav className="flex space-x-6">
                    <NavLink 
                        to="/"
                        className={({ isActive }) => 
                            isActive ? "text-black border-b-2 border-black font-semibold" : "text-stone font-semibold"
                        }
                    >
                        Projects
                    </NavLink>
                    <NavLink 
                        to="/aboutme"
                        className={({ isActive }) => 
                            isActive ? "text-black border-b-2 border-black hover:bg-coolgrey font-semibold" : "text-stone font-semibold"
                        }
                    >
                        About me
                    </NavLink>
                </nav>
            </div>
        </header>
    );
}
