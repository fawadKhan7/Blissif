import { createContext, useContext, useState } from "react";

const SidebarContext = createContext()
export const useSideBar = () => useContext(SidebarContext)

export const SidebarProvider = ({ children }) => {

    const [isVisible, setIsVisible] = useState(true)

    const toggleSidebar = () => {
        setIsVisible(!isVisible)
    }
    return (
        <SidebarContext.Provider value={{ isVisible, toggleSidebar }}>
            {children}
        </SidebarContext.Provider>
    )
}