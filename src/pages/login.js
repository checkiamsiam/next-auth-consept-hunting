import styles from "@/styles/Login.module.css";
import { GithubOutlined, GoogleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { signIn } from "next-auth/react";
import Head from "next/head";
const LoginPage = () => {
  return (
    <div>
      <Head>
        <title>Next Login</title>
      </Head>
      <div className={styles.form}>
        <h3>LOGIN</h3>
        <div className={styles.social_icons}>
          <GoogleOutlined onClick={() => signIn("google", { callbackUrl: "http://localhost:3000/" })} />
          <GithubOutlined onClick={() => signIn("github", { callbackUrl: "http://localhost:3000/" })} />
        </div>
        <hr />
        <form>
          <label htmlFor="">Your Email</label>
          <input type="email" />
          <label htmlFor="">Your Password</label>
          <input type="password" />
          <Button>Login</Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
