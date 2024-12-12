import styles from './Manual11.module.css';
import Manual0_light_tower from './Manual0Src/Manual0_light_tower.jpg';
import Manual11_B1 from './Manual11Src/ManualN_B1.png';
import Manual11_B2 from './Manual11Src/ManualN_B2.png';
import Manual11_B3 from './Manual11Src/ManualN_B3.png';
import Manual11_B4 from './Manual11Src/ManualN_B4.png';
import Manual11_B5 from './Manual11Src/ManualN_B5.png';
import Manual11_B6 from './Manual11Src/ManualN_B6.png';
import Manual11_B7 from './Manual11Src/ManualN_B7.png';
import Manual11_B8 from './Manual11Src/ManualN_B8.png';
import Manual11_B9 from './Manual11Src/ManualN_B9.png';
import Manual11_B10 from './Manual11Src/ManualN_B10.png';
import Manual11_B11 from './Manual11Src/ManualN_B11.png';
import Manual11_B12 from './Manual11Src/ManualN_B12.png';
import Manual11_B13 from './Manual11Src/ManualN_B13.png';
import Manual11_B14 from './Manual11Src/ManualN_B14.png';
import Manual11_B15 from './Manual11Src/ManualN_B15.png';
import Manual11_B16 from './Manual11Src/ManualN_B16.png';
import Manual11_B17 from './Manual11Src/ManualN_B17.png';


const Manual11: React.FC = () => {

  return (  
    <>

    <main className={styles.main} >
      <h1 className={styles.title} >Handleiding: Bladwijzers gebruiken en beheren</h1>
      <p className={styles.author} >Ode Malfait, 12. December 2024</p>

      <section>
        <h2 className={styles.subtitle} >Inhoudstafel</h2>
        <ol>
          <li><a href="/ManualN.html">Terug naar overzicht alle handleidingen</a></li>
          <li><a href="#inleiding">Inleiding</a></li>
          <li><a href="#wat-zijn-bladwijzers">Wat zijn bladwijzers?</a></li>
          <li><a href="#bladwijzerbalk">Bladwijzerbalk</a></li>
          <li><a href="#bladwijzer-toevoegen">Een bladwijzer toevoegen</a></li>
          <li><a href="#map-maken">Een map maken voor bladwijzers</a></li>
          <li><a href="#bladwijzer-verwijderen">Bladwijzer verwijderen</a></li>
          <li><a href="#andere-browsers">Andere webbrowsers</a></li>
        </ol>
      </section>

      <section>
        <h2 className={styles.subtitle}  id="inleiding">Inleiding</h2>
        <p>
          In deze handleiding leert u het aanmaken, verwijderen en organiseren van bladwijzers op
          webbrowsers. In deze handleiding staan vaak gekleurde kaders om weer te geven waar u precies op
          moet klikken.
        </p>
      </section>

      <section>
        <h2 className={styles.subtitle}  id="wat-zijn-bladwijzers">Wat zijn bladwijzers?</h2>
     <p>Zoals een bladwijzer in een boek de laatst gelezen bladzijde bijhoudt werkt dit ook voor internet
      bladwijzers. Bladwijzers is een lijst met links naar websites die snel aangeklikt kunnen worden.
      Hier kan u uw meest gebruikte websites snel en handig terug vinden.</p>
      <p>In deze tutorial wordt er gewerkt in de webbrowser Google Chrome. De afbeeldingen kunnen dus
        afwijken van andere webbrowsers, maar het stappenplan is wel hetzelfde. In hoofdstuk 7 worden
        verschillen bij andere webbrowsers getoond.</p>
        <p>Chrome icoon:</p>
        <img className={styles.extrasmallimage}  src={Manual11_B1.src} alt="icoon van Google Chrome" />
      </section>

      <section>
        <h2 className={styles.subtitle}  id="bladwijzerbalk">Bladwijzerbalk</h2>
        <p>Deze balk staat bovenaan uw webbrowser en vind u gemakkelijk uw bladwijzers terug.
          Deze staat vaak uitgeschakeld, dus schakel deze in.</p>
        <ol>
          <li>Klik in de webbrowser op de 3 bolletjes rechts bovenaan: dit is de menu voor meer opties</li>
          <li>Klik dan op “Bookmarks en lijsten”.</li>
          <li>Kies dan voor “Bookmarkbalk bekijken”.</li>
        </ol>
        <article className={styles.imagesdirection} >
        <img className={styles.smallimage}  src={Manual11_B2.src} alt="optie menu van chrome met een pijl die naar het icoon van 3 bolletjes wijst rechtsboven" />
        <img className={styles.mediumimage}  src={Manual11_B3.src}alt="optiemenu, BookmarkBalk bekijken is omkaderd" />
        </article>
        <p>Bovenaan het venster verschijnt er nu een lege balk, de bladwijzerbalk:</p>
        <img className={styles.mediumimage}  src={Manual11_B4.src} alt="bovenste gedeelte van webbrowser, een pijl wijst naar lege bookmarkbalk onder url" />
      </section>

      <section>
        <h2 className={styles.subtitle}  id="bladwijzer-toevoegen">Een bladwijzer toevoegen</h2>
        <h3 className={styles.subtitle} >Korte uitleg</h3>
        <ol>
          <li>Klik op het sterretje bij de link.</li>
          <li>Wijzig de naam (optioneel).</li>
          <li>Kies een map waar u het wilt in opslaan.</li>
          <li>Duw op "Opslaan".</li>
        </ol>
        <h3 className={styles.subtitle} >Uitgebreide uitleg</h3>
        <p>U wilt een bladwijzer maken voor de Google Homepagina.</p>
        <ol>
          <li>Ga naar de website: www.google.com.</li>
          <li>Klik op de ster rechts van de link bovenaan het venster.</li>
        <img className={styles.mediumimage}  src={Manual11_B5.src} alt="optiescherm van bladwijzer toevoegen, pijl wijst naar een blauwe ster in de rechterbovenhoek" />
        <p>Als u dit aanklikt wordt de ster blauw. De site is nu opgeslagen als bladwijzer.</p>
          <li>Nu kan u nog in het invulvakje bij “Naam” de naam van de site wijzigen (dit is optioneel)</li>
          <li>Kies een map waarin u de bladwijzer wilt bewaren. U kiest nu bijvoorbeeld voor
            BookmarkBalk.. Klik op het veld van “Map” en kies “Bookmarkbalk”</li>
            <img className={styles.mediumimage}  src={Manual11_B6.src} alt="menu van mappen waarin een bladwijzer kan opgeslagen worden, twee opties zijn BookmarkBalk en Alle bookmarks" />
            <li>Klik op “Klaar”</li>
        </ol>
        <p>Google is nu op de bladwijzerbalk verschenen.</p>
        <img className={styles.mediumimage}  src={Manual11_B7.src} alt="bovenste gedeelte van webbrowser, een pijl wijst naar Google logo in de bookmarkbalk" />
      </section>

      <section>
        <h2 className={styles.subtitle}  id="map-maken">Een map maken voor bladwijzers</h2>
        <h3 className={styles.subtitle} >Korte uitleg</h3>
        <ol>
          <li>Ga naar "BookmarkManager".</li>
          <li>Klik op de knop "Map maken".</li>
          <li>Geef de map een naam.</li>
          <li>Klaar.</li>
        </ol>
        <p>Klik op het sterretje bij de bladwijzer en kies "Verwijderen" of gebruik de rechtermuisknop en selecteer "Verwijderen".</p>
        <h3 className={styles.subtitle} >Uitgebreide uitleg</h3>
        <ol>
          <li>Klik opnieuw op de drie bolletjes rechtsboven aan (zie Hoofdstuk 3 BookmarkBalk Stap 2).</li>
          <li>Klik dan op “BookmarkManager”.</li>
          <img className={styles.mediumimage}  src={Manual11_B8.src} alt="optiemenu, BookmarkManager is omkaderd" />
          <li>U komt op een nieuw venster terecht.</li>
          <li>Klik met de rechtermuisknop op witruimte in het venster. U moet misschien naar beneden scrollen om meer witruimte te zien.</li>
          <li>Kies “Nieuwe map toevoegen”.</li>
          <img className={styles.mediumimage}  src={Manual11_B9.src} alt="witruimte met balk met Google logo in, daaronder een menu met twee opties: de onderste is omkaderd: Nieuwe map toevoegen" />
          <li>Geef de map een naam. En klik op “Opslaan”.</li>
          <img className={styles.mediumimage}  src={Manual11_B10.src} alt="popover scherm voor het toevoegen van Map, onderaan rechts is de blauwe knop Opslaan omkaderd" />
          <li>Deze map is nu ook op de BookmarkBalk verschijnt.</li>
          <img className={styles.mediumimage}  src={Manual11_B11.src} alt="ingezoomd op bookmarkbalk, icoon van Google en icoon van mapje met de naam Test" />
        </ol>
        <p>U kunt nu nieuwe bladwijzers toevoegen aan deze map om ze te groeperen.</p>
      </section>

      <section>
        <h2 className={styles.subtitle}  id="bladwijzer-verwijderen">Bladwijzer verwijderen</h2>
        <h3 className={styles.subtitle} >Korte uitleg</h3>
        <p>Klik nog eens op het sterretje en dan op “Verwijderen”.</p>
          <p>OF</p>
          <p>Rechtermuisknop klikken op bladwijzer en dan op “Verwijderen”.</p>
        <h3 className={styles.subtitle} >Uitgebreide uitleg</h3>
        <h4>Mogelijkheid 1:</h4>
        <ol>
          <li>Ga naar de website die u wilt verwijderen als bladwijzer.</li>
          <li>Klik op het blauwe sterretje.</li>
          <li>Klik dan op “Verwijderen”.</li>
        </ol>
        <img className={styles.mediumimage}  src={Manual11_B12.src} alt="menu om bookmark te wijzigen, onderaan rechts staat de lichtblauwe knop Verwijderen omkaderd" />
        <h4>Mogelijkheid 2:</h4>
        <ol>
          <li>Klik met rechtermuisknop op de bladwijzer dat je wilt verwijderen.</li>
          <li>Klik op “Verwijderen”.</li>
        </ol>
        <img className={styles.smallimage}  src={Manual11_B13.src} alt="optiemenu, Verwijderen staat onderaan omkaderd" />
      </section>

      <section>
        <h2 className={styles.subtitle}  id="andere-browsers">Andere webbrowsers</h2>
        <h3 className={styles.subtitle} >Microsoft Edge</h3>
       <p>Edge icoon:</p>
       <img className={styles.extrasmallimage}  src={Manual11_B14.src} alt="Edge icoon" />
       <ul>
        <li>Naam: Bladwijzers heten hier “Favorieten”.</li>
        <li>Bladwijzer maken: Een website als favoriet toevoegen is hetzelfde als in Hoofdstuk 4.</li>
        <li>Bladwijzer verwijderen: hetzelfde als in Hoofdstuk 6.</li>
        <li>Bladwijzers/Favorieten beheren: klik rechtsboven op de 3 bolletjes en dan op “Favorieten”.</li>
      </ul>
      <p>Er komt een venstertje tevoorschijn:</p>
      <img className={styles.mediumimage}  src={Manual11_B15.src} alt="optiemenu van Favorieten, er wijst een pijl naar een icoon bovenaan dat een map toevoegt" />
      <p>Een map kan u toevoegen door op het map icoontje te klikken.</p>
      </section>
      <section className={styles.imagesdirection} >
        <article>
        <h3 className={styles.subtitle} >Mozilla Firefox</h3>
       <p>Firefox icoon:</p>
       <img className={styles.extrasmallimage}  src={Manual11_B16.src} alt="Firefox icoon" />
       <ul>
        <li>Naam: Bladwijzers</li>
        <li>Bladwijzers vinden:
          <ol>
            <li>Om naar de menu met opties te gaan in deze browser klik je op de drie streepjes (in plaats van de bolletjes bij andere browsers).</li>
            <li>Klik dan op “Bladwijzers”.</li>
          </ol>
        </li>
        <li>Bladwijzers beheren: klik onderaan op “Bladwijzerbeheer”. Een nieuw venster opent. Hier vind u al uw mappen en bladwijzers terug. Hier hebt u een duidelijker overzicht in plaats van de kleinere menu’s van de bookmarkbalk.</li>
        <li>Bladwijzer maken: zoals in Hoofdstuk 4.</li>
        <li>Bladwijzer verwijderen: klik met rechtermuisknop op de bladwijzer en dan op “Bladwijzer verwijderen”.</li>
      </ul>
      </article>
      <img className={styles.mediumimage}  src={Manual11_B17.src} alt="optiemenu, in de rechterbovenhoek staan drie horizontale streepjes en onderaan Bladwijzers beheren omkaderd." />
      </section>
    </main>
  </>
  )
};

export default Manual11;
