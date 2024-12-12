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
  // Primary key is a compound key: id and os.
  const [manuals, setManuals] = useState<Manual[]>([
    { id: 0, lang: 'en', title: "Creating a User Manual Template", os: "Windows", tags: ["Windows 10", "HTML", "CSS", "manual", "template"] },
    { id: 1, lang: 'nl', title: "Handleiding voor Windows", os: "Windows", tags: ["Windows 11", "Instellingen", "updates", "algemeen", "installeren", "programma", "maken", "mappen"] },
    { id: 2, lang: 'nl', title: "Het Gebruik van een Password Manager", os: "Windows", tags: ["Windows", "browser", "internet", "wachtwoord", "manager", "Nordpass"] },
    { id: 2, lang: 'nl', title: "Het Gebruik van een Password Manager", os: "MacOS", tags: ["Windows", "browser", "internet", "wachtwoord", "manager", "Nordpass"] },
    { id: 2, lang: 'nl', title: "Het Gebruik van een Password Manager", os: "Linux", tags: ["Windows", "browser", "internet", "wachtwoord", "manager", "Nordpass"] },
    { id: 3, lang: 'en', title: "Nvidia GeForce Experience Manual", os: "Windows", tags: ["Windows 10", "Windows 11", "drivers", "Nividia", "graphics", "games"] },
    { id: 4, lang: 'en', title: "Manual for Receiving and Sending Messages", os: "IOS", tags: ["phone", "WhatsApp", "messages", "send", "receive"] },
    { id: 4, lang: 'en', title: "Manual for Receiving and Sending Messages", os: "Android", tags: ["phone", "WhatsApp", "messages", "send", "receive"] },
    { id: 5, lang: 'en', title: "Manual for Receiving and Making Calls", os: "IOS", tags: ["phone", "WhatsApp", "calls", "make", "receive"] },
    { id: 5, lang: 'en', title: "Manual for Receiving and Making Calls", os: "Android", tags: ["phone", "WhatsApp", "calls", "make", "receive"] },
    { id: 6, lang: 'en', title: "Handling Notifications", os: "IOS", tags: ["phone", "WhatsApp", "notifications", "handling"] },
    { id: 7, lang: 'nl', title: "Gebruik van WhatsApp", os: "Android", tags: ["telefoon", "WhatsApp", "algemeen", "gids", "navigatie"] },
    { id: 7, lang: 'nl', title: "Gebruik van WhatsApp", os: "IOS", tags: ["telefoon", "WhatsApp", "algemeen", "gids", "navigatie"] },
    { id: 7, lang: 'nl', title: "Gebruik van WhatsApp", os: "Windows", tags: ["browser", "computer", "WhatsApp", "algemeen", "gids", "navigatie"] },
    { id: 8, lang: 'en', title: "User Manual for Gmail", os: "Windows", tags: ["Gmail", "Google", "email", "e-mail", "mail", "send", "receive", "post", "letter"] },
    { id: 8, lang: 'en', title: "User Manual for Gmail", os: "MacOS", tags: ["Gmail", "Google", "email", "e-mail", "mail", "send", "receive", "post", "letter"]  },
    { id: 8, lang: 'en', title: "User Manual for Gmail", os: "Linux", tags: ["Gmail", "Google", "email", "e-mail", "mail", "send", "receive", "post", "letter"]  },
    { id: 9, lang: 'en', title: "My WhatsApp Manual", os: "IOS", tags: ["phone", "WhatsApp", "general", "guide", "navigation"] },
    { id: 10, lang: 'nl', title: "Maak een nieuw account aan op DeMorgen.", os: "Windows", tags: ["DeMorgen", "krant", "nieuws", "Vlaams", "vinden", "aanmaken", "account", "nieuw", "wachtwoord"] },
    { id: 10, lang: 'nl', title: "Maak een nieuw account aan op DeMorgen.", os: "MacOS", tags: ["DeMorgen", "krant", "nieuws", "Vlaams", "vinden", "aanmaken", "account", "nieuw", "wachtwoord"] },
    { id: 10, lang: 'nl', title: "Maak een nieuw account aan op DeMorgen.", os: "Linux", tags: ["DeMorgen", "krant", "nieuws", "Vlaams", "vinden", "aanmaken", "account", "nieuw", "wachtwoord"] },
    { id: 11, lang: 'nl', title: "Handleiding: Bladwijzers gebruiken en beheren", os: "Windows", tags: ["Chrome", "internet", "browser", "bladwijzers", "gids", "maken", "maken"] },
    { id: 11, lang: 'nl', title: "Handleiding: Bladwijzers gebruiken en beheren", os: "MacOS", tags: ["Chrome", "internet", "browser", "bladwijzers", "gids", "maken", "maken"] },
    { id: 11, lang: 'nl', title: "Handleiding: Bladwijzers gebruiken en beheren", os: "Linux", tags: ["Chrome", "internet", "browser", "bladwijzers", "gids", "maken", "maken"] },
    { id: 12, lang: 'nl', title: "Handleiding: Bestanden/foto's organiseren met de computer (Windows)", os: "Windows", tags: ["Windows 11", "organiseren", "afbeeldingen", "Bestandsverkenner", "bestand", "maken", "foto"] },
    { id: 13, lang: 'nl', title: "Handleiding: Bestanden/foto's organiseren met de smartphone (Android)", os: "Android", tags: ["Windows 11", "organiseren", "afbeeldingen", "Bestandsverkenner", "bestand", "maken", "foto"] },
    { id: 14, lang: 'nl', title: "Handleiding van Google drive", os: "Windows", tags: ["Google", "Drive", "algemeen", "maken", "map", "verplaatsen", "documenten", "delen", "video", "snelkoppelingen"] },
    { id: 14, lang: 'nl', title: "Handleiding van Google drive", os: "MacOS", tags: ["Google", "Drive", "algemeen", "maken", "map", "verplaatsen", "documenten", "delen", "video", "snelkoppelingen"] },
    { id: 14, lang: 'nl', title: "Handleiding van Google drive", os: "Linux", tags: ["Google", "Drive", "algemeen", "maken", "map", "verplaatsen", "documenten", "delen", "video", "snelkoppelingen"] },
  ]);

  // This getter is used to mimic back-end service that would get manualsByOs.
  const getManuals = (): Manual[] => {
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
          <p className="text-center text-lg mb-12 -mt-5">{os} manuals:</p>
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
