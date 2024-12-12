import styles from './Manual13.module.css';
// import Manual0_light_tower from './Manual0Src/Manual0_light_tower.jpg';
import ManualN_S1 from './Manual13Src/ManualN_S1.png';
import ManualN_S2 from './Manual13Src/ManualN_S2.png';
import ManualN_S3 from './Manual13Src/ManualN_S3.png';
import ManualN_S4 from './Manual13Src/ManualN_S4.png';
import ManualN_S5 from './Manual13Src/ManualN_S5.png';
import ManualN_S6 from './Manual13Src/ManualN_S6.png';
import ManualN_S7 from './Manual13Src/ManualN_S7.png';
import ManualN_S8 from './Manual13Src/ManualN_S8.png';
import ManualN_S9 from './Manual13Src/ManualN_S9.png';
import ManualN_S10 from './Manual13Src/ManualN_S10.png';
import ManualN_S11 from './Manual13Src/ManualN_S11.png';

const Manual13: React.FC = () => {

  return (  
    <>

  <main className={styles.main}>
      <h1 className={styles.title}>Handleiding: Bestanden/foto's organiseren met de smartphone (Android)</h1>
      <p className={styles.author}>Ode Malfait, 12. December 2024</p>

      <section>
        <h2 className={styles.subtitle}>Inhoudstafel</h2>
        <ol>
          <li><a href="/ManualN.html">Terug naar overzicht alle handleidingen</a></li>
          <li><a href="#inleiding">Inleiding</a></li>
          <li><a href="#bestanden-terugvinden">Bestanden terugvinden</a></li>
          <li><a href="#fotos-organiseren">Foto’s organiseren in Galerij/Foto’s</a></li>
        </ol>
      </section>

      <section>
        <h2 className={styles.subtitle} id="inleiding">Inleiding</h2>
        <p>
          Deze handleiding is geeft uitleg over het vinden en organiseren van bestanden zoals documenten en
afbeeldingen. Deze tutorial maakt gebruik van een Android smartphone. Hierdoor kunnen sommige
afbeeldingen of termen verschillend zijn. De stappen zouden normaal overeenkomen.
In deze handleiding staan vaak gekleurde kaders om weer te geven waar u precies op moet klikken.
Of voor het gebruik als legende met nadien extra informatie over de inhoud van deze kader. 
        </p>
      </section>

      <section>
        <h2 className={styles.subtitle} id="bestanden-terugvinden">Bestanden terugvinden</h2>
        <p>Ga naar de app lade, de plek waar al uw applicaties op één plek staan. Veeg hiervoor van beneden
          naar boven.</p>
        <p>
          Al uw bestanden op je smartphone vin u bij de applicatie “Mijn bestanden” of “Bestanden” of “Files”.
Om deze applicatie te zoeken gaat u naar uw app lade. Afbeelding 1: Typ in de zoekfunctie bovenaan
het scherm “Bestanden” of “Files” en duw op Enter. Afbeelding 2: Duw op deze applicatie.
        </p>
        <article className={styles.imagesdirection}>
        <img className={styles.smallimage} src={ManualN_S1.src} alt="bovenste gedeelte van de applade, in de linkerbovenhoek staat het nummer één" />
        <img className={styles.smallimage} src={ManualN_S2.src} alt="bovenste gedeelte van applade waarin de app Bestanden op staat, in zoekfunctie staat bestanden geschreven en in de linkerbovenhoek staat het getal 2 " />
      </article>
      <article className={styles.imagesdirection}>
        <img className={styles.smallimage} src={ManualN_S3.src} alt="bovenste gedeelte van de Bestanden app, twee kaders groeperen de informatie, kader A en kader B" />
        <img className={styles.smallimage} src={ManualN_S4.src} alt="onderste gedeelte van de Bestanden app, twee kaders groeperen de informatie, kader C en D" />
      </article>
        <ol type="A">
          <li>Dit geeft weer hoeveel opslag u al in gebruik neemt.</li>
          <li>Hier staan de bestanden gesorteerd op type.
            Op zoek naar een foto?. Druk dan op “Foto’s”.</li>
            <li>Hier staan de bestanden gesorteerd op bron.
              Bestanden/foto’s gekregen via Whatsapp? Ga naar “Whatsapp” om deze te zien.</li>
              <li>Dit is de prullenbak. Als u bestanden verwijderd komen deze hier terecht.</li>
        </ol>
        <p>Afbeelding 3 en 4 laat zien hoe mijn app “Bestanden” eruit ziet, voor afbeelding 2 scrolt u naar
          beneden.</p>
          </section>
          <section>
        <h3 className={styles.subtitle}>Documenten terugvinden en verwijderen</h3>
        <ol>
          <li>Duw op “Documenten”. Dit staat in het groene vakje B op afbeelding 3.</li>
          <li>Hier vind u al uw documenten terug.</li>
          <li>Om een bestand te openen duwt u op het bestand.</li>
          <li>Om een bestand te verwijderen:
            <ol type="a">
              <li>duwt u 2 seconden lang op het gekozen bestand.</li>
              <li>Duw onderaan op “Verwijderen” of “Wissen”.</li>
              <img className={styles.mediumimage} src={ManualN_S5.src} alt="horizontale optie menu met 5 iconen, het icoon van verwijderen is omkaderd" />
              <li>Er komt een waarschuwing. Duw nogmaals op “Verwijderen”/”Wissen”.</li>
            </ol>
          </li>
        </ol>
        </section>
        <section className={styles.imagesdirection}>
          <article>
        <h3 className={styles.subtitle}>Meerdere bestanden selecteren</h3>
        <p>Ga terug naar de startpagina van de app “Bestanden”. Duw hiervoor op de pijl links bovenaan.</p>
        <p>Als u meerdere bestanden wilt verwijderen is het gemakkelijker om ze eerst
          allemaal aan te duiden en dan pas te verwijderen in plaats van één voor één
          verwijderen.</p>
          <ol>
            <li>Duw 2 seconden lang op één bestand.</li>
            <li>Dan ziet u dat er afvink vakjes verschijnen bij de bestanden.</li>
            <li>Duw kort op de vakjes voor de andere gekozen bestanden.</li>
            <li>Duw dan op “Verwijderen” of “Wissen” zoals hierboven beschreven. (Hoofdstuk 2.3)</li>
            <li>Om uit selectiemodus te gaan (als u per ongeluk te lang hebt geduwd), duw op “Annuleren” in de linkerbovenhoek.</li>
            <li>Om alles in één keer te selecteren, duw op “Alles Selecteren” in de rechterbovenhoek.</li>
          </ol>
          </article>
          <img className={styles.mediumimage} src={ManualN_S6.src} alt="documenten staan afgebeeld onder elkaar, 2 ervan zijn aangeduid met een groen vinkje aan de rechterzijde, Annuleren in de linkerbovenhoek, Alles Selecteren in de rechtbovenhoek en het tweede vinkje zijn omkaderd" />
          </section>
          <section className={styles.imagesdirection}>
            <article>
        <h3 className={styles.subtitle}>Prullenbak beheren</h3>
        <p>
          Bestanden die verwijderd zijn komen terecht in de “Prullenbak” of
“Recent Verwijderd”.
Zie de blauwe kader B op Afbeelding 4.
        </p>
        <ol>
          <li>Duw op “Recent Verwijderd” of “Prullenbak”</li>
          <li>Hier staan alle bestanden die u hebt verwijderd.</li>
        </ol>
        <p>
          Als u een bestand per ongeluk hebt verwijderd kan u het herstellen naar documenten.
          Om plaats te maken kan u dit bestand ook definitief verwijderen.
          Om één van deze zaken te doen doet u het volgende:
        </p>
        <ol>
          <li>Duw 2 seconden lang op één of meerdere bestanden.</li>
          <li>Duw onderaan op “Herstellen” of “Verwijderen” of “Wissen”.</li>
        </ol>
        </article>
        <img className={styles.smallimage} src={ManualN_S7.src} alt="één document staat in de map Recent Verwijderd, onderaan in een optiemenu zijn de iconen voor Herstellen en Verwijderen omkaderd" />
      </section>

      <section>
        <h2 className={styles.subtitle} id="fotos-organiseren">Foto’s organiseren in Galerij/Foto’s</h2>
        <p>In bestanden kunt u uw foto’s terugvinden, bekijken en verwijderen. Maar organiseren in nieuwe
          mappen lukt beter in de app “Galerij” of “Foto’s..</p>
          <p>Zoals in Hoofstuk 2 zoek naar de app “Foto’s” in de app lade (afbeelding 1 en 2). En duw hierop.</p>
          <article className={styles.imagesdirection}>
            <img className={styles.smallimage} src={ManualN_S8.src} alt="Foto's gegroepeerd in albums staan weergeven" />
            <img className={styles.smallimage} src={ManualN_S9.src} alt="Nog meer foto's gegroepeerd in albums staan weergeven, onderaan rechts staat een groene cirkel met daarin een wit plusteken" />
          </article>
          <p>Op afbeelding 5 staan alle foto’s. Om naar de albums te kunnen kijken duwt u onderaan op “Albums”</p>
          <p>Op afbeelding 6 staan alle foto’s en video’s gegroepeerd op Albums. Dit zijn mappen waarin foto’s
            gegroepeerd zijn. Bijvoorbeeld alle foto’s die u neemt met de camera komen in album “Camera”
            terecht</p>
            <p>Veeg van beneden naar boven om de beneden de prullenbak te vinden. Om de prullenbak te te
            bekijken duwt u op “Recent verwijderd” en volgt u de stappen beschreven in hoofdstuk 2.3.</p>
        <h3 className={styles.subtitle}>Nieuwe album aanmaken</h3>
        <ol>
          <li>Klik op de groene bol met het plus teken in. (Zie afbeelding 6)
            Als dit teken er niet is, duw dan op de 3 bolletjes rechts bovenaan en dan op “Nieuwe map”..</li>
          <li>Typ een naam in voor de nieuwe map.</li>
          <li>Duw op “Opslaan” of op “Nieuw”.</li>
        </ol>
          <img className={styles.mediumimage} src={ManualN_S10.src} alt="Popup scherm met als titel Nieuw Album, een groene lijn waarin de naam van de naam kan getypen worden en onderaan de knoppen Annuleren en Opslaan" />
        <h3 className={styles.subtitle}>Afbeeldingen verplaatsen</h3>
        <p>U wilt een afbeelding verplaatsen van één map naar een andere map.</p>
        <ol>
          <li>Ga naar de map waar de foto nu instaat.</li>
          <li>Duw 2 seconden lang op de gekozen foto.</li>
          <li>Duw onderaan op “Meer” OF de 3 bolletjes in de rechterbovenhoek van het scherm indien u geen “Meer” ziet staan.</li>
          <li>Duw op “Verplaatsen naar Album”.</li>
          <li>Kies dan het nieuwe album.</li>
        </ol>
        <img className={styles.mediumimage} src={ManualN_S11.src} alt="onderste gedeelte van een fotoalbum, een witte menu met twee opties, de bovenste optie: Verplaatsen Naar Album is omkaderd" />
        <h3 className={styles.subtitle}>Afbeeldingen verwijderen</h3>
        <p>Het principe is hetzelfde zoals in Hoofstuk 2.1: Bestanden verwijderen. Om de prullenbak te bekijken
          duwt u op “Recent verwijderd” en volgt u de stappen beschreven in hoofdstuk 2.3: Prullenbak
          beheren.</p>
      </section>
    </main>
    </>
    )
    };

export default Manual13;