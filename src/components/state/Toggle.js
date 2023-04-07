import React, { useState } from 'react';
import "./ToggleStyle.css"

// stateless functional component
function Toggle() {
    const [on, setOn] = useState(false);
    const handleToggle = () => {
        setOn(on => !on);
    }
    return (
      <div>
        <div className={`toggle ${on ? "active" : ""}`} onClick={handleToggle}>
          <div className={`spinner ${on ? "active" : ""}`}></div>
        </div>
      </div>
    );
};

export default Toggle;


// stateful function component
function Toogle2() {
    return(
        <div className="toggle">

        </div>
    )
}