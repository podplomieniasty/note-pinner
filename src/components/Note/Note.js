import React from 'react'
import styles from './Note.module.scss';
import PropTypes from 'prop-types';
import AppContext from '../../context';



const Note = ({posX, posY, title, content, bgColor}) => {

    return(
        <AppContext.Consumer>
        {(context) => (
            <div 
            className={styles.note}
            style={{
                top: posY,
                left: posX,
                backgroundColor: bgColor || context.randHex(),
            }}
            >
            <h2>{title}</h2>
            <p>{content}</p>
        </div>)}
        </AppContext.Consumer>
    )
}

export default Note;

Note.propTypes = {
    posX: PropTypes.string,
    posY: PropTypes.string,
    bgColor: PropTypes.string,
}
