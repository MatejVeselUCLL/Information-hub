import { useRouter } from "next/router";


const Header: React.FC = () => {
  
  const router = useRouter();

  return (
      <>
        <p className="text-center text-xl flex-1 absolute top-0 w-full">Information Hub</p>
        
        <div className="flex">
          <nav>
            <button className="mx-5 my-5" onClick={() => {router.push(`/`)}}>Go home</button>
            <button className="mx-5 my-5" onClick={() => {router.back()}}>Previous page</button>
            <button className="mx-5 my-5 fixed bottom-0 left-0" onClick={() => window.scrollTo({ top: 0 })}>Back to top</button>
          </nav>
        </div>
          
      </>
  );
};

export default Header;