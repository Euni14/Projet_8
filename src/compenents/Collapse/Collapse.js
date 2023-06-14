import { useState } from "react";
import IconUp from "../../assets/chevron-up.svg";
import IconDown from "../../assets/chevron-down.svg";
import "./Collapse.css";

function Collapse(props) {
  const [open, setOPen] = useState(false);

  const toggle = () => {
    setOPen(!open);
  };

  return (
    <div>
      <div className="collapse" onClick={toggle}>
        <h2 className="collapseTitle">{props.title}</h2>
        <img
          className="collapseIcone"
          src={open ? IconDown : IconUp}
          alt="Chevron"
        />
      </div>

      {open && (
        <div className="toggle">
          <p className="toggleText">{props.text}</p>
        </div>
      )}
    </div>
  );
}

export default Collapse;
