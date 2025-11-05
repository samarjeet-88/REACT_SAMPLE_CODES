import React, { createContext, useContext, useEffect, useState } from "react";

const backSwitch = createContext({});

export const useBgSwitch = () => {
    const context = useContext(backSwitch);
    if (context === undefined) {
        throw new Error('useBgSwitch must be used within a BgSwitchProvider');
    }
    return context;
};

export const BgSwitchProvider = ({ children }) => {
    // Initialize state from localStorage, or default to true (light)
    const [currbg, setCurrentBg] = useState(() => {
        const storedValue = localStorage.getItem("bgcolor");
        return storedValue ? storedValue === "true" : true;
    });

    // Sync state with localStorage and the body class
    useEffect(() => {
        localStorage.setItem("bgcolor", currbg);
        if (currbg) {
            document.body.classList.remove("dark");
            document.body.classList.add("light");
        } else {
            document.body.classList.remove("light");
            document.body.classList.add("dark");
        }
    }, [currbg]);

    const toggleSwitch = () => {
        setCurrentBg((prev) => !prev);
    };

    const value = {
        currbg,
        setCurrentBg,
        toggleSwitch,
    };

    return (
        <backSwitch.Provider value={value}>
            {children}
        </backSwitch.Provider>
    );
};