import styles from "@/styles/Login.module.css";
import { GithubOutlined, GoogleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { signIn } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (res.ok) {
      router.push("/");
    } else {
      alert("Something went wrong");
    }
  };

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
          <input onChange={(e) => setEmail(e.target.value)} type="email" />
          <label htmlFor="">Your Password</label>
          <input onChange={(e) => setPassword(e.target.value)} type="password" />
          <Button onClick={handleLogin}>Login</Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
