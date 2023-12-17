import { cc } from "../../../utils/Classnames";
import styles from "./ToggleSwitch.module.scss";

interface ToggleSwitchProps {
  isOn: boolean;
  handleToggle: () => void;
}

function ToggleSwitch(props: ToggleSwitchProps) {
  const { isOn, handleToggle } = props;
  return (
    <label className={styles.ToggleSwitch}>
      Scroll switch
      <input type="checkbox" checked={isOn} onChange={handleToggle} />
      <div className={cc(styles.ToggleSwitchContainer, isOn && styles.Active)}>
        <div className={cc(styles.ToggleSwitchCircle, isOn && styles.Active)} />
      </div>
    </label>
  );
}

export default ToggleSwitch;
