import { Outlet } from "react-router-dom";
import Navigation from "./components/layout/Navigation";

export default function Layout() {
    return (
        <>
            <main
                role="main"
                className="flex-1 flex flex-col justify-start pt-8 pb-20 lg:pb-8 lg:ml-52"
            >
                <Outlet />
            </main>
            <Navigation />
        </>
    );
}
