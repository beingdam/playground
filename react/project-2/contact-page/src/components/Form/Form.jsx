import Button from "../Button/Button";
import styles from "./Form.module.css";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("Dam");
  const [email, setEmail] = useState("dam@email.com");
  const [text, setText] = useState("Hello, Dam here!");

  const onViaCall = () => {
    console.log("Calling...");
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_button}>
          <Button text="Support Chat" icon={<MdMessage fontSize="24px" />} />
          <Button
            onClick={onViaCall}
            text="Call"
            icon={<FaPhoneAlt fontSize="24px" />}
          />
        </div>
        <Button
          isSecondary={true}
          text="Email"
          icon={<HiMail fontSize="24px" />}
        />
        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="8" />
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button text="Submit" />
          </div>
          <div>{name + " " + email + " " + text}</div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="/image/service.svg" alt="service person image" />
      </div>
    </section>
  );
};

export default Form;
