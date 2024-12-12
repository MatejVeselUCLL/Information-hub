import Header from "@/components/Header";
import { useRouter } from "next/router";
import Manual0 from "@/components/manuals/manual0/Manual0";
import Manual1 from "@/components/manuals/manual1/Manual1";
import Manual2 from "@/components/manuals/manual2/Manual2";
import Manual3 from "@/components/manuals/manual3/Manual3";
import Manual4 from "@/components/manuals/manual4/Manual4";
import Manual5 from "@/components/manuals/manual5/Manual5";
import Manual6 from "@/components/manuals/manual6/Manual6";
import Manual7 from "@/components/manuals/manual7/Manual7";
import Manual8 from "@/components/manuals/manual8/Manual8";
import Manual9 from "@/components/manuals/manual9/Manual9";
import Manual10 from "@/components/manuals/manual10/Manual10";
import Manual11 from "@/components/manuals/manual11/Manual11";
import Manual12 from "@/components/manuals/manual12/Manual12";
import Manual13 from "@/components/manuals/manual13/Manual13";
import Manual14 from "@/components/manuals/manual14/Manual14";


const Manual: React.FC = () => {
  // Dynamic page.
   const router = useRouter();
   const { id } = router.query;
   console.log(id);
   console.log(Number(id));

  return (
    <>
        <header>
            <Header />
        </header>

        {Number(id) === 0 && <Manual0 />}
        {Number(id) === 1 && <Manual1 />}
        {Number(id) === 2 && <Manual2 />}
        {Number(id) === 3 && <Manual3 />}
        {Number(id) === 4 && <Manual4 />}
        {Number(id) === 5 && <Manual5 />}
        {Number(id) === 6 && <Manual6 />}
        {Number(id) === 7 && <Manual7 />}
        {Number(id) === 8 && <Manual8 />}
        {Number(id) === 9 && <Manual9 />}
        {Number(id) === 10 && <Manual10 />}
        {Number(id) === 11 && <Manual11 />}
        {Number(id) === 12 && <Manual12 />}
        {Number(id) === 13 && <Manual13 />}
        {Number(id) === 14 && <Manual14 />}
    
    </>
  );
};

export default Manual;
