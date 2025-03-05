import { useContext, useState } from 'react';

import './ToggleSwitch.css';
import { ThemeContext } from '../../contexts/ThemeContext';

const ToggleSwitch = () => {
    const { isDark, changeTheme } = useContext(ThemeContext);
    const [isChecked, setIsChecked] = useState<boolean>(isDark);
    
    return (
        <label className="switch">
            <input type="checkbox" 
                checked={isDark} 
                onChange={() => {
                    changeTheme();
                    setIsChecked(!isChecked);
                }}
            />
            <span className="switch-slider round">
                <span className="emoji">{isChecked ? "🌜" : "☀️"}</span>
            </span>
        </label>
    );
};

export default ToggleSwitch;