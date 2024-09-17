import styles from './UITextField.module.css'
const UITextField = ({ value, onChange, placeholder, className, type, style }) => {
  return (
    <input className={`${styles.input} ${className}`} value={value} onChange={onChange} placeholder={placeholder} type={type} style={style}></input>
  );
};

export default UITextField;
