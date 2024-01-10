import { useCallback, useState } from "react";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";

import { LoginModal } from "features/AuthByUsername";
import { Button, ThemeButton } from "shared/ui/Button/Button";

import style from "./Navbar.module.scss";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onCloseModel = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModel = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    return (
        <div className={classNames(style.navbar, {}, [className])}>
            <Button
                theme={ThemeButton.OUTLINE}
                className={style.links}
                onClick={onShowModel}
            >
                {t('Sign in ')}
            </Button>
            <LoginModal
                isOpen={isAuthModal}
                onClose={onCloseModel}
            />
        </div>
    )
}