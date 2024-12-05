import { useRouter } from "next/router";

const ChooseSystem: React.FC = () => {

  const router = useRouter();

  return (
    <>
      <p className="text-center mt-14">Choose your system:</p>

      <div className="mt-7 flex justify-center flex-wrap gap-x-20 gap-y-8">
        <button onClick={() => {router.push(`/search/Windows`)}}>Windows</button>
        <button onClick={() => {router.push(`/search/MacOS`)}}>MacOS</button>
        <button onClick={() => {router.push(`/search/Linux`)}}>Linux</button>
      </div>
    </>
  );
};

export default ChooseSystem;