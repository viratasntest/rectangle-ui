import styles from './UITextField.module.css'
const UITextField = ({ value, onChange, placeholder, className }) => {
  return (
    <input className={`${styles.input} ${className}`} value={value} onChange={onChange} placeholder={placeholder}></input>
  );
};

export default UITextField;
