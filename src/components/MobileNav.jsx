import React from "react";
import { NavLink } from "react-router-dom";
import AddIcon from "../assets/icons/AddIcon";
import HomeIcon from "../assets/icons/HomeIcon";
import HistoryIcon from "../assets/icons/HistoryIcon";

export default function MobileNav() {
    return (
        <nav
            id="mobile-nav"
            className="sm:hidden bg-black/20 backdrop-blur-xl border-t border-white/5 fixed bottom-0 w-full py-2"
        >
            <div className="content">
                <ul className="flex justify-around items-center">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `flex flex-col items-center justify-center text-xs ${
                                    isActive ? "text-[#0284c7]" : "text-white"
                                }`
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    <HomeIcon
                                        color={isActive ? "#0284c7" : "#fff"}
                                    />
                                    <span>Home</span>
                                </>
                            )}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/add-exercise"
                            className={({ isActive }) =>
                                `flex flex-col items-center justify-center text-xs ${
                                    isActive ? "text-[#0284c7]" : "text-white"
                                }`
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    <AddIcon
                                        color={isActive ? "#0284c7" : "#fff"}
                                    />
                                    <span>Add exercise</span>
                                </>
                            )}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/history"
                            className={({ isActive }) =>
                                `flex flex-col items-center justify-center text-xs ${
                                    isActive ? "text-[#0284c7]" : "text-white"
                                }`
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    <HistoryIcon
                                        color={isActive ? "#0284c7" : "#fff"}
                                    />
                                    <span>History</span>
                                </>
                            )}
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
