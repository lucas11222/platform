import React, { useEffect, useState } from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

function Layout() {
    const [docsWidth, setDocsWidth] = useState("100%");

    useEffect(() => {
        const updateWidth = () => {
            const sidebar = document.querySelector(".main-sidebar");
            if (sidebar) {
                const sidebarWidth = sidebar.offsetWidth;
                if (window.innerWidth > 958) {
                    setDocsWidth(`calc(100% - ${sidebarWidth}px)`);
                } else {
                    setDocsWidth("100%");
                }
            }
        };

        updateWidth();
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    return (
        <div className="main-app-container">
            <div className="app-container">
                <Sidebar />
                <div className="main-docs" style={{ width: docsWidth }}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Layout;
