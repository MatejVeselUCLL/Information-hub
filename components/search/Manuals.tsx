import { Manual } from "@/types";
import Link from "next/link";

type Props = {
  queryResults: Array<Manual>;
};

const Manuals: React.FC<Props> = ({ queryResults }: Props) => { 


  return (
    <>

      {/* Dynamically display manuals that match the search query. */}
      {queryResults.map((manual, index) => (

        <article 
          className={
            "" + // Other styles go here.
            ((index != queryResults.length - 1) ? " mb-14" : "") // If it is not the last article, add margin bottom.
          }
          key={index}>
          <Link className="visited:text-[#0066cc]" href={'/manual/' + manual.id}>{manual.title}</Link>

          <p>Tags:&nbsp; 
            {manual.tags.map((tag, jndex) => (
                  <span key={jndex}>{tag}, </span>
            ))}
          </p>
          
        </article>

      ))}

    </>
  );
  
};

export default Manuals;