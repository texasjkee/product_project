import { classNames } from "shared/lib/classNames/classNames";

import style from "./Input.module.scss";
import { InputHTMLAttributes } from "react";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
};

export const Input = (props: InputProps) => {
    const {className, value, onChange} = props;

    return (
        <div className={classNames(style.Input, {}, [className])}>

        </div>
    )
};