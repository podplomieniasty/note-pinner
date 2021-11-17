import React from 'react'
import AppContext from '../../context';
import Note from '../Note/Note';
import styles from './Wrapper.module.scss';

const Wrapper = ({notes}) => {

    return (
        <AppContext.Consumer>
        {(context) => (
            <div 
                className={styles.wrapper}
                onDoubleClick={(e) => context.openNoteForm(e)}
                >
                {notes.length ? (
                    <ul>
                    {notes.map(note => (
                        <Note 
                            key={notes.indexOf(note)} 
                            {...note}
                        />
                    ))}
                    </ul>
                ) : (
                    <p className={styles.p}>The whiteboard seems to be empty. Double-click to add something!</p>
                )}
            </div>
        )}            
        </AppContext.Consumer>
);

}

export default Wrapper;