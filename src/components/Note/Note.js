import React from 'react'
import styles from './Note.module.scss';
import PropTypes from 'prop-types';



const Note = ({posX, posY, title, content, bgColor}) => {

    return(
        <div 
            className={styles.note}
            style={{
                top: posY,
                left: posX,
                backgroundColor: bgColor || 'white',
            }}
        >
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    )
}

export default Note;

Note.propTypes = {
    posX: PropTypes.string,
    posY: PropTypes.string,
    bgColor: PropTypes.string,
}
