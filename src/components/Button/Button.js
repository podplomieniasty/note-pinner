import React from 'react'
import styles from './Button.module.scss'


const Button = ({secondary, onClick, children}) => {

    const buttonClass = secondary ? styles.secondary : styles.primary;


    return (
        <button
            className={buttonClass}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button;