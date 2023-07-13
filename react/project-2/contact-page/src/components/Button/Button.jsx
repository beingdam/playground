import styles from "./Button.module.css";

const Button = ({ isSecondary, icon, text, ...rest }) => {
  //   const { isSecondary, icon, text } = props;
  return (
    <button
      {...rest}
      className={isSecondary ? styles.secondary_button : styles.primary_button}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
