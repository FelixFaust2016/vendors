import { CircularProgressbar } from "react-circular-progressbar";
import randomcolor from "randomcolor";

import "react-circular-progressbar/dist/styles.css";

const ProgressBar = ({ value }) => {
  const color = randomcolor();

  return (
    <div style={{ width: 40, height: 40, margin: "0px auto" }}>
      <CircularProgressbar
        background={color}
        value={(value / 10) * 100}
        text={value}
      />
    </div>
  );
};

export { ProgressBar };
