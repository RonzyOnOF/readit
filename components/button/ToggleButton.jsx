import { selecttoggleMode } from '../../src/features/togglemode/togglemodeSlice';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../button/ToggleButton.module.css';
import { Moon } from '../../src/images/Moon.jsx';
import { Sun } from '../sun/Sun';
import { toggleMode } from '../../src/features/togglemode/togglemodeSlice';

export const ToggleButton = () => {

    const dispatch = useDispatch();
    const currentMode = useSelector(selecttoggleMode);

    const handleToggleMode = () => {
        // console.log(currentMode);
        dispatch(toggleMode());
    }


    return (
        <>
                <button className={currentMode ? styles.toggleButtonLight : styles.toggleButtonDark}>
                    <div className={currentMode ? styles.circleRight : styles.circleLeft} onClick={handleToggleMode}>
                        <div className={currentMode ? styles.sun : styles.moon}>
                            {currentMode ? <Sun /> : <Moon />}
                        </div>
                    </div>
                </button>
                

        </>
    )

}