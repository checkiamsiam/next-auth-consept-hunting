import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

import { useSession } from "next-auth/react";
import Head from "next/head";
const ProfilePage = () => {
  const { data: session } = useSession();
  return (
    <div style={{ textAlign: "center" }}>
      <Head>
        <title>Next Profile</title>
      </Head>
      <h1>User Profile</h1>
      <Avatar size={64} icon={<UserOutlined />} />
      {session && (
        <>
          <h1>Email: {session.user.email}</h1>
          <h1>User Name: {session.user.name}</h1>
        </>
      )}
    </div>
  );
};

export default ProfilePage;
