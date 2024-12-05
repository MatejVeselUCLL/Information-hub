import Header from "@/components/Header";
import IntroductionText from "@/components/IntroductionText";
import ChooseSystem from "@/components/ChooseSystem";
import Head from "next/head";
import { useRouter } from "next/router";
import Manual1 from "@/components/manuals/Manual1";
import { useEffect, useState } from "react";


const Manual: React.FC = () => {
  // Dynamic page.
   const router = useRouter();
   const { id } = router.query;

  return (
    <>
        <header>
            <Header />
        </header>

        {Number(id) === 1 && <Manual1 />}
        {Number(id) === 2 && <Manual1 />}
        {Number(id) === 3 && <Manual1 />}
        {Number(id) === 4 && <Manual1 />}
        {Number(id) === 5 && <Manual1 />}
        {Number(id) === 6 && <Manual1 />}
        {Number(id) === 7 && <Manual1 />}
        {Number(id) === 8 && <Manual1 />}
    
    </>
  );
};

export default Manual;
