import { ChangeEvent, FocusEvent, MouseEvent, ReactNode } from "react";
import { INPUT_SIZES, INPUT_TYPES } from "./constants";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

type Values<T> = T[keyof T];
export type InputSizes = Values<typeof INPUT_SIZES>;
export type InputTypes = Values<typeof INPUT_TYPES>;

export type InputProps = {
    /**
     * Id поля ввода
     */
    id?: string;
    /**
     * Class css
     */
    className?: string;
    /**
     * Переключение в ошибочное состояние
     */
    error?: boolean;
    /**
     * Тект placeholder поля ввода
     */
    placeholder?: string;
    /**
     * Значение поля
     */
    value?: string;
    /**
     * Название поля
     */
    name?: string;
    /**
     * Управление состоянием только для чтения
     */
    readOnly?: boolean;
    /**
     * Тип поля ввода
     */
    type?: InputTypes;
    /**
     * Управление отключенным состоянием поля ввода
     */
    disabled?: boolean;
    /**
     * Left Icon
     */
    leftIcon?: IconDefinition;
};
