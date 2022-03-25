import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { AppLayout } from "../components/AppLayout";
import { Board } from "../components/Board";
import { Header } from "../components/Header";

const Home: NextPage = () => {
  return (
    <AppLayout>
      <>
        <Header></Header>
        <Board></Board>
      </>
    </AppLayout>
  );
};

export default Home;
