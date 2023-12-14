import styles from "./ToggleSwitch.module.scss";

interface ToggleSwitchProps {
  isOn: boolean;
  handleToggle: () => void;
}

function ToggleSwitch(props: ToggleSwitchProps) {
  const { isOn, handleToggle } = props;
  return (
    <label style={{ display: "block", cursor: "pointer" }}>
      <input
        type="checkbox"
        checked={isOn}
        onChange={handleToggle}
        style={{ display: "none" }} // Hide the default checkbox
      />
      <div
        style={{
          width: "60px",
          height: "30px",
          backgroundColor: isOn ? "green" : "grey",
          borderRadius: "15px",
          position: "relative",
          transition: "background-color 0.2s",
        }}
      >
        <div
          style={{
            width: "28px",
            height: "28px",
            backgroundColor: "white",
            borderRadius: "50%",
            position: "absolute",
            top: "1px",
            left: isOn ? "31px" : "1px",
            transition: "left 0.2s",
          }}
        />
      </div>
    </label>
  );
}

export default ToggleSwitch;
