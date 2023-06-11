import { useState } from "react";
import IconUp from "../../assets/chevron-up.svg";
import IconDown from "../../assets/chevron-down.svg";

function Collapse(props) {
  const [open, setOPen] = useState(true);

  const toggle = () => {
    setOPen(!open);
  };

  return (
    <div>
      <div onClick={toggle} style={{ backgroundColor: "green" }}>
        <h2>{props.title}</h2>
        <img src={open ? IconDown : IconUp} alt="Chevron" />
      </div>

      {open && (
        <div className="toggle">
          <p>{props.text}</p>
        </div>
      )}
    </div>
  );
}

export default Collapse;
