import { JSX, useState } from 'react';

import './Tooltip.css';

interface TooltipProp {
    text: string;
    children: JSX.Element;
}

const Tooltip = (props: TooltipProp) => {
    const [show, setShow] = useState<boolean>(false);
    
    return (
        <div className="tooltip" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
            { props.children }
            <div className={`tooltip-text ${show ? 'show' : ''}`}>{ props.text }</div>
        </div>
    );
};

export default Tooltip;