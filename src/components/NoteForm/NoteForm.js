import React, { useState } from 'react'
import AppContext from '../../context';
import Button from '../Button/Button';
import styles from './NoteForm.module.scss'

const NoteForm = ({cords, onClose}) => {

    // if note's position were to be outside of devices width 
    const noteWidth = 250;
    cords[0] = window.innerWidth - noteWidth < cords[0] ? window.innerWidth - noteWidth - 20: cords[0];

    const initInput = {
        title: '',
        content: '',
        posX: cords[0]+"px",
        posY: cords[1]+"px",
        bgColor: '',
    }

    const [input, modifyInput] = useState(initInput);

    const handleInput = (e) => {

        modifyInput({
            ...input,
            [e.target.name]: e.target.value, 
        });
    }

    return (
        <AppContext.Consumer>
        {
            (context) => (
                <div className={styles.wrapper}>
                    <button onClick={onClose} className={styles.closeButton}/>
                    <h1 className={styles.h1}>Add new note</h1>
                    <form onSubmit={(e) => context.addNote(e, input)} className={styles.form}>
                        <input
                            className={styles.input} 
                            type="text" 
                            name="title"
                            placeholder="Title"
                            required
                            onChange={handleInput}
                        />
                        <textarea 
                            className={styles.textarea}
                            type="textarea"
                            name="content"
                            placeholder="Content"
                            onChange={handleInput}
                        />
                        <Button>
                            Add me!
                        </Button>
                    </form>
                </div>
            )
        }    
        </AppContext.Consumer>
    )

}

export default NoteForm;