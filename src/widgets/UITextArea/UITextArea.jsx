import styles from "./UITextArea.module.css";
const UITextArea = ({
  value,
  onChange,
  placeholder,
  className,
  type,
  style,
}) => {
  return (
    <textarea
      className={`${styles.textarea} ${className}`}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      style={style}
    ></textarea>
  );
};

export default UITextArea;
