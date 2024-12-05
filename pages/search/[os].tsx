import Header from "@/components/Header";
import IntroductionText from "@/components/IntroductionText";
import ChooseSystem from "@/components/ChooseSystem";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Manual } from "@/types";
import Link from "next/link";
import SearchForm from "@/components/search/SearchForm";
import Manuals from "@/components/search/Manuals";
import Footer from "@/components/Footer";

const Search: React.FC = () => {
  // Dynamic page. Lots of code for type safety.
  const router = useRouter();
  const { os } = router.query;

  // Hard-coded manuals. Use getManuals!!
  const [manuals, setManuals] = useState<Manual[]>([
    { id: 1, title: "Send an Email", os: "Windows", tags: ["Windows 10", "Chrome", "Gmail", "email", "internet"] },
    { id: 2, title: "Adjust Text Size", os: "Windows", tags: ["Windows 10", "Settings", "scale", "display", "size", "increase", "decrease"] },
    { id: 3, title: "Adjust Text Size", os: "Linux", tags: ["Ubuntu 20", "Settings", "scale", "display", "size", "increase", "decrease"] },
    { id: 4, title: "Find Startup Apps", os: "Windows", tags: ["Windows 11", "Settings", "Task Manager", "startup apps"] },
    { id: 5, title: "Find Startup Apps", os: "Linux", tags: ["Fedora 41", "Settings", "Task Manager", "startup apps"] },
    { id: 6, title: "Create a Macro in Excel", os: "Windows", tags: ["Windows 10", "Excel", "macro", "record"] },
    { id: 7, title: "Convert Excel to CSV File", os: "Windows", tags: ["Windows 10", "Excel", "converting", "CSV", "save as"] },
    { id: 8, title: "Convert Excel to CSV File", os: "MacOS", tags: ["MacOS Sequoia", "Excel", "converting", "CSV", "save as"] },
  ]);
  // This getter is used to mimic back-end service that would get manualsByOs.
  const getManuals = (): Manual[] => {
    console.log(os);
    return manuals.filter((manual) => manual.os === os);
  };

  const [queryResults, setQueryResults] = useState<Manual[]>([]);

  useEffect(() => {
    document.body.style.zoom = "130%";
    document.getElementById("__next")?.setAttribute("style", "height: 100vh");
  }, []);

  return (
    <>
      <div className="flex flex-col h-full">
        <header className="basis-12">
          <Header />
        </header>


        <main className="mb-14 flex-1">
          <SearchForm getManuals={getManuals} setQueryResults={setQueryResults} />
          <Manuals queryResults={queryResults} />
        </main>


        <footer className="basis-12">
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Search;
