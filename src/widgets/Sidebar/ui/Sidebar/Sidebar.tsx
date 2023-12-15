import { useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";

import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LanguageSwitcher } from "widgets/LanguageSwitcher/LanguageSwitcher";
import { Button } from "shared/ui/Button/Button";

import style from "./Sidebar.module.scss";

interface SidebarProps {
    className?: string;
};

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const handleToggle = () => setCollapsed(prev => !prev);

    return (
        <div
            data-testid="sidebar"
            className={classNames(style.Sidebar, { [style.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={handleToggle}
            >
                toggle
            </Button>
            <div className={style.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher className={style.lang} />
            </div>
        </div>
    )
};