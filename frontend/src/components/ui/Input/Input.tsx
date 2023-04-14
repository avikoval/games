import { forwardRef } from 'react'
import cn from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { InputProps } from './types';
import { INPUT_TYPES } from './constants';
import styles from "./styles.module.scss";

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
	const {
        id,
        leftIcon,
        className,
        type = INPUT_TYPES.TEXT,
        disabled = false,
        error = false,
        value,
        ...restProps
    } = props;

	const hasLeftIcon = Boolean(leftIcon);

	const inputClassName = cn(
		styles["input"],
		{[styles["input_left-icon"]] : hasLeftIcon},
		{[styles["input_error"]] : error},
		{[styles["input_disabled"]] : disabled},
		className
	)

	return (
		<div className={styles["input-container"]}>
			{hasLeftIcon && (
				<div className={styles["input-icon"]}>
					{leftIcon && (
						<FontAwesomeIcon icon={leftIcon} />
					)}
				</div>
			)}
			<input 
				ref={ref}
				id={id}
				type={type}
				disabled={disabled}
				className={inputClassName}
				{...restProps}
			></input>
		</div>
	)
})

Input.displayName = "Input";
