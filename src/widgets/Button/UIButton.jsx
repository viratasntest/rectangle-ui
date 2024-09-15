import { Button } from "react-bootstrap";
import styles from './Button.module.css'

const UIButton = ({ style, text, handleClick, className }) => {
  return (
    <Button className={`${styles.button} ${className}`} style={style} onClick={handleClick}>
      {text}
    </Button>
  );
};

export default UIButton;
