import UITextField from "@/widgets/UITextField/UITextField";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Login.module.css";
import UIButton from "@/widgets/Button/UIButton";
import { useContext, useState } from "react";
import instance from "@/utils/axios";
import AuthContext from "@/context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(AuthContext);

  const handleLogin =  () => {
    login(email, password);
  };

  return (
    <Container className={`${styles.loginContainer} mt-4`}>
      <p className={styles.loginText}>
        Welcome back, <span className="primaryText">Login!</span>
      </p>
      <UITextField
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={"Enter your Email Id"}
      />
      <UITextField
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mt-2"
        placeholder={"Enter your password"}
      />
      <p className="mt-3 text-small">
        Forgot your password? <span className="primaryText">Reset here</span>
      </p>
      <p style={{ marginTop: "-16px" }} className="text-small">
        Dont have an account? <span className="primaryText">Signup</span>
      </p>
      <div className="d-flex justify-content-center w-100 mt-3">
        <UIButton handleClick={handleLogin} text="Login" />
      </div>
    </Container>
  );
};

export default Login;
