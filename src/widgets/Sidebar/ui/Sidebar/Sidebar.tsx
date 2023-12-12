import { useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

import style from "./Sidebar.module.scss";

interface SidebarProps {
    className?: string;
};

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const handleToggle = () => setCollapsed(prev => !prev);

    return (
        <div className={classNames(style.Sidebar, { [style.collapsed]: collapsed }, [className])}>

            <button onClick={handleToggle}>toggle</button>
            <div className={style.switchers}>
                <ThemeSwitcher />
                {/* <LangSwitcher /> */}
            </div>
        </div>
    )
};