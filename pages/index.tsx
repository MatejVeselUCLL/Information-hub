import Header from "@/components/Header";
import IntroductionText from "@/components/IntroductionText";
import ChooseSystem from "@/components/ChooseSystem";
import Head from "next/head";
import { useEffect } from "react";
import Footer from "@/components/Footer";

const Home: React.FC = () => {
 
  useEffect(() => {
    document.body.style.zoom = "130%";
    document.getElementById("__next")?.setAttribute("style", "height: 100vh");
  }, []);

  return (
    <>
        <Head>
          <title>Information Hub</title>
          <meta name="description" content="Information hub" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

      <div className="flex flex-col h-full">
        <header className="basis-12">
          <Header />
        </header>


        <main className="mb-14 flex-1">
          <IntroductionText />
          <ChooseSystem />
          

        </main>


        <footer className="basis-12">
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Home;
