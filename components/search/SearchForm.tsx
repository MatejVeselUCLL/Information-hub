import { Manual } from "@/types";
import { useEffect, useState } from "react";

type Props = {
  // cartItems: Array<CartItem>;
  getManuals: () => Manual[];
  setQueryResults: (queryResults: Manual[]) => void;
};

const SearchForm: React.FC<Props> = ({ getManuals, setQueryResults }: Props) => { 

  // Find manuals by title and tag, ignore case, ignore whitespace, and search containing, not exact. This could be another back-end function.
  const findManuals = (query: string): Manual[] => {
    const formattedQuery: string = query.toLowerCase().replaceAll(" ", "");
    const results: Manual[] = [];

    for (let manual of getManuals()) {
      // Find match in title.
      const formattedTitle: string = manual.title.toLowerCase().replaceAll(" ", "");
      const matchInTitle: Boolean = formattedTitle.includes(query.toLowerCase().replaceAll(" ", ""));

      // Find match in tags.
      const matchInTags: Boolean = manual.tags.find((tag) => {
        const formattedTag: string = tag.toLowerCase().replaceAll(" ", "");
        return formattedTag.includes(formattedQuery);
      }) ? true : false;
      // Ternary operator syntax:   condition ? exprIfTrue : exprIfFalse

      if (matchInTitle || matchInTags) results.push(manual);
    };

    return results;
  };

  // Search form.
  const [query, setQuery] = useState("");
  // const [queryResults, setQueryResults] = useState<Manual[]>([]);
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // Prevent page reload.
    event.preventDefault();
    // Clear status messages to prevent piling them up.
    setStatusMessage("");

    const manuals: Manual[] = findManuals(query);
    setQueryResults(manuals);

    setStatusMessage(`${manuals.length} results`);
  };

  useEffect(() => {
    setQueryResults(findManuals("")); // Find all manuals.
  }, []); // Empty dependency array means the functions will get executed only the first time the site is opened.

  return (
    <>
      <div className="mb-14">
        <form 
          className="w-max-[500px] flex flex-wrap justify-between gap-x-16 gap-y-8"
          onSubmit={(event) => handleSubmit(event)}>

          <label 
            className="pt-[3px]"
            htmlFor="queryInput">Search: </label>

          <input
              className="flex-auto scale-125 py-1 px-3"
              type="text"
              id="queryInput" 
              value={query}
              onChange={(event) => setQuery(event.target.value)}
          />

          <button type="submit">Search</button>

        </form>
        
        {statusMessage && 
        <p className="text-center">{statusMessage}</p>}
      </div>
    </>
  );
  
};

export default SearchForm;