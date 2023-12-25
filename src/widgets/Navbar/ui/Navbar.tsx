import { useCallback, useState } from "react";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";

import { Modal } from "shared/ui/Modal/Modal";
import { Button, ThemeButton } from "shared/ui/Button/Button";

import style from "./Navbar.module.scss";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal(prev => !prev);
    }, []);

    return (
        <div className={classNames(style.navbar, {}, [className])}>
            <Button
                theme={ThemeButton.OUTLINE}
                className={style.links}
                onClick={onToggleModal}
            >
                {t('Sign in ')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, repudiandae vero veritatis aliquid sed adipisci laborum totam porro, ipsum perferendis, quas nesciunt atque tempora nemo perspiciatis ex rem eaque maxime!
            </Modal>
        </div>
    )
}