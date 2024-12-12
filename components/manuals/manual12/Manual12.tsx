import styles from './Manual12.module.css';
import Manual12_C1 from './Manual12Src/ManualN_C1.jpg';
import Manual12_C3 from './Manual12Src/ManualN_C3.png';
import Manual12_C4 from './Manual12Src/ManualN_C4.png';
import Manual12_C9 from './Manual12Src/ManualN_C5.png';
import Manual12_C5 from './Manual12Src/ManualN_C6.png';
import Manual12_C11 from './Manual12Src/ManualN_C7.png';
import Manual12_C6 from './Manual12Src/ManualN_C8.png';
import Manual12_C13 from './Manual12Src/ManualN_C9.png';
import Manual12_C7 from './Manual12Src/ManualN_C10.png';
import Manual12_C15 from './Manual12Src/ManualN_C11.png';
import Manual12_C8 from './Manual12Src/ManualN_C12.png';
import Manual12_C10 from './Manual12Src/ManualN_C13.png';
import Manual12_C12 from './Manual12Src/ManualN_C14.png';
import Manual12_C14 from './Manual12Src/ManualN_C15.png';


const Manual12: React.FC = () => {

  return (  
    <>

    <main className={styles.main}>
      <h1 className={styles.title}>Handleiding: Bestanden/foto's organiseren met de computer (Windows)</h1>
      <p className={styles.author}>Ode Malfait, 12. December 2024</p>

      <section>
        <h2 className={styles.subtitle}>Inhoudstafel</h2>
        <ol>
          <li><a href="/ManualN.html">Terug naar overzicht alle handleidingen</a></li>
          <li><a href="#inleiding">Inleiding</a></li>
          <li><a href="#verkenner">Verkenner</a></li>
          <li><a href="#afbeelding-opslaan">Een afbeelding opslaan in een nieuwe map</a></li>
          <li><a href="#afbeelding-terugvinden">Afbeelding terugvinden</a></li>
          <li><a href="#tips">Aantal tips om bestanden beter te kunnen organiseren</a></li>
        </ol>
      </section>

      <section>
        <h2 className={styles.subtitle} id="inleiding">Inleiding</h2>
        <p>
          Met deze handleiding leert u de applicatie “Verkenner” van Windows gebruiken om uw documenten,
          afbeeldingen of andere bestanden makkelijk te organiseren. In deze handleiding staan vaak gekleurde
          kaders met een letter om weer te geven waar u precies op moet klikken. Of voor het gebruik als legende
          met nadien extra informatie over de inhoud van deze kader.
        </p>
      </section>

      <section>
        <h2 className={styles.subtitle} id="verkenner">Verkenner</h2>
        <p>
          Verkenner is een applicatie waarin u een mappenstructuur van uw computer terugvindt. Hier kan u zelf
          mappen aanmaken, bestanden opslaan, wijzigen, verplaatsen of verwijderen. In deze tutorial wordt er
          gewerkt met Windows 11 en kan de applicatie er anders uitzien dan bij u. De werking zou normaal
          hetzelfde moeten zijn, dus u kunt deze handleiding vlot volgen.
        </p>
        <h3 className={styles.subtitle}>Verkenner starten en uitleg</h3>
        <p>
          Normaal staat Verkenner op uw taakbalk, onderaan uw computerscherm.</p>
          <article>
          <img className={styles.mediumimagecentered} src={Manual12_C1.src} alt=" blauwe windows taakbalk met iconen van enkele programma's erop." />
        </article>
          <p> Klik hier één keer op met de
          linkermuisknop om de applicatie te openen. </p> 
          
          <img className={styles.hidebigimage} src={Manual12_C3.src} alt="de thuispagina in de verkenner app, aan de linkerkant staan er 3 kaders, A,B,en C om iconen te groeperen" />
          <p>Dit venster is "Thuis". Hier hebt u een overzicht van alle
          soorten mappen die zich in "Snelle Toegang" bevinden, favoriete bestanden en bestanden die u recent
          hebt toegevoegd of gewijzigd.
        </p>
        <ul>
          <li>A. Thuis is de pagina waar we nu op zijn en hierboven is uitgelegd.</li>
          <li>B. Snelle Toegang bevat mappen die vaak gebruikt worden.</li>
          <li>
            C. In deze mappen zit de structuur van uw computer, hierin zitten ook de mappen van Snelle Toegang, maar ook nodige informatie van uw
            computerprogramma's. Deze structuur is ingewikkeld en niet nodig voor deze handleiding te kunnen volgen.
          </li>
        </ul>
        <h3 className={styles.subtitle}>Uitleg Snelle Toegang mappen</h3>
        <ul>
          <li>Bureaublad</li>
          <ul>
            <li>Mappen/bestanden of snelkoppelingen naar programma’s die u op uw bureaublad
              zet (het scherm dat u ziet als u uw computer hebt opgestart), staan in deze map.</li>
          </ul>
          <li>Downloads</li>
          <ul>
            <li>Als u een bestand download/opslaat van het internet zonder zelf een plaats/map
              te kiezen, dan vindt u dit bestand in deze map terug.</li>
          </ul>
          <li>Volgende mappen spreken voor zich: de naam geeft aan wat er in deze map opgeslagen
            kan worden:</li>
            <ul>
              <li>Documenten</li>
              <li>Afbeeldingen</li>
              <li>Muziek</li>
              <li>Video's</li>
            </ul>
        </ul>
      </section>

      <section>
        <h2 className={styles.subtitle} id="afbeelding-opslaan">Een afbeelding opslaan in een nieuwe map</h2>
        <h3 className={styles.subtitle}>Korte uitleg</h3>
        <ol>
          <li>Kies afbeelding</li>
          <li>Druk op "Afbeelding Opslaan Als"</li>
          <li>Kies map</li>
          <li>Wijzig naam of type (optioneel)</li>
          <li>Druk op "Opslaan"</li>
        </ol>
        <h3 className={styles.subtitle}>Uitgebreide uitleg</h3>
        <p>
          U wilt een nieuwe afbeelding opslaan van een kat die u via Google heeft gevonden op het internet. In uw internetbrowser doet u het volgende:
        </p>
        <ol>
            <li>Klik met de rechtermuisknop op de afbeelding en kies "Afbeelding opslaan als...". </li>
            <img className={styles.mediumimage} src={Manual12_C4.src} alt="een optiemenu waarin bovenaan Afbeelding opslaan als is omkadert" />
            <li>Een nieuw venster van Verkenner opent. Hierin gaat u naar de map "Afbeeldingen". </li>
            <li>Hierin gaat u naar de map “Afbeeldingen”, door hierop te klikken aan de linkerkant.
              Als u het niet ziet in deze menu, scrol dan met uw muiswiel naar beneden.</li>
              <img className={styles.mediumimage} src={Manual12_C5.src} alt="verkenner venster met een pijl naar het menu Afbeeldingen" />
              <li>In “Afbeeldingen” willen we deze tekening in een nieuwe map zetten met de naam “Katten”.
                <ol type="a">
                  <li>Klik met de rechtermuisknop op witruimte in dit venster.</li>
                  <li>Kies "Nieuw"</li>
                  <li>Kies "Map"</li>
                </ol>
              </li>
              <img className={styles.mediumimage} src={Manual12_C6.src} alt="twee optiemenus, één pijl wijst naar Nieuw en hieruit is er een nieuwe optiemenu met bovenaan Map omkadert" />
              <li>Een nieuwe map verschijnt. De blauwe achtergrond duid aan dat u nu een nieuwe naam kunt
                typen. Typ: “Katten” en druk op Enter.</li>
                <img className={styles.mediumimage} src={Manual12_C7.src} alt=" enkele mappen in verkenner waarvan één in het blauw aangeduid staat en de naam gewijzigd wordt" />
                 <p>Als u al ergens had geklikt, dan ziet u dat de map “Nieuwe map” heet. U kunt nog steeds de
                naam wijzigen. Selecteer eerst de map met de linkermuisknop en klik nadien met de
                rechtermuisknop en klik op “Naam wijzigen”. Nadien kan u zoals in Stap 5 de naam wijzigen.</p>
                <li>Nu kan u op deze map klikken om hierin te gaan. Hier gaan we onze afbeelding bewaren.
                  Onderaan kan u de naam van uw afbeelding wijzigen en het bestandtype veranderen, dit is
                  allemaal optioneel. Druk op “Opslaan”.</li> 
                  <img className={styles.mediumimage} src={Manual12_C8.src} alt="deel van verkenner venster: optie om bestand naam te geven en optie om bestandstype te kiezen. Een pijl wijst naar de knop Opslaan." />
        </ol>
        <p>Nu is de afbeelding succesvol opgeslagen in onze gekozen map.</p>
      </section>

      <section>
        <h2 className={styles.subtitle} id="afbeelding-terugvinden">Afbeelding terugvinden</h2>
        <p>
          Open opnieuw Verkenner via het Verkenner icoon (zie Hoofdstuk 2.1).
Ga naar “Afbeeldingen” door op deze naam te klikken in het menu aan de linkerkant van het venster.
        </p>
        <p>Hier staat onze map “Katten”. Klik hier twee keer na elkaar op. De opgeslagen foto staat hier!</p>
        <img className={styles.mediumimage} src={Manual12_C9.src} alt="verkenner venster van de map Katten, de opgeslagen afbeelding van een tekening van een zwarte kat staat hier" />
      </section>

      <section>
        <h2 className={styles.subtitle} id="tips">Aantal tips om bestanden beter te kunnen organiseren</h2>
        <h3 className={styles.subtitle}>Naam wijzigen</h3>
        <p>
          Dit werd al uitgelegd in Hoofdstuk 3.2: Stap 5. Maar in verkenner is er ook in icoontje om de naam te
kunnen wijzigen. Selecteer de afbeelding door er één keer op te klikken. Nu ziet u vanboven enkele
icoontjes staan. Klik op het “naam wijzigen” icoontje om de tekst te kunnen wijzigen.
        </p>
        <img className={styles.mediumimage} src={Manual12_C10.src} alt="deel van verkenner venster, staat de afbeelding van de kat en daarboven een horizonetale lijst met iconen, het icoon van naam wjizigen staat omkadert" />
        <h3 className={styles.subtitle}>Bestand verplaatsen met knippen en plakken</h3>
        <p>
          U wilt deze afbeelding toch in de algemene “Afbeeldingen” map zetten.
U kan het concept “knippen en plakken” (of cut and paste in het Engels) hiervoor gebruiken.
Eerst selecteert u opnieuw de afbeelding door één keer op te klikken.
        </p>
        <p>Nu gaat u deze afbeelding “knippen”. Dit bestand wordt opgeslagen in het geheugen van de computer
          en tegelijk verwijderd uit deze map.</p>
          <p>U kunt met de rechtermuisknop op de afbeelding klikken en dan kiezen voor “Knippen” in het menu.
            Of u kunt weer de iconen bovenaan gebruiken.</p>
            <img className={styles.mediumimage} src={Manual12_C11.src} alt="deel van verkenner venster, staat de afbeelding van de kat en daarboven een horizonetale lijst met iconen, het icoon van knippen staat omkadert" />
            <p>Nu de afbeelding is geknipt gaat u naar de map waar u het wilt verplaatsen, in dit geval “Afbeeldingen”.</p>
            <p>Klik in deze map ergens op het witruimte met rechtermuisknop en selecteer “plakken” of kies het icoontje bovenaan.</p>
            <img className={styles.mediumimage} src={Manual12_C12.src} alt="een horizonetale lijst met iconen, het icoon van plakken staat omkadert" />
            <h4 className={styles.subtitle}>Toetsenbord alternatief: </h4>
          <p>Indien u graag met het toetsenbord werken zijn er zogenoemde “shortcuts”.
            Om een bestand te knippen duwt u op de “ctrl” toets. Blijf duwen en druk nadien ook op de “x” toets
            in.
            Om nadien het bestand te plakken: duw terug op de ctrl toets en nadien de “v” toets.</p>
            <ul>
              <li>Knippen → ctrl + x</li>
              <li>Plakken → ctrl + v</li>
            </ul>
        <h3 className={styles.subtitle}>Bestand verwijderen</h3>
        <p>
          U wilt de afbeelding toch niet meer bijhouden op uw computer. U wilt deze verwijderen.
Kies de afbeelding en druk op verwijder icoon:
Of druk op de “Delete” toets van uw toetsenbord.
        </p>
        <img className={styles.mediumimage} src={Manual12_C13.src} alt="een horizonetale lijst met iconen, het icoon van verwijderen staat omkadert" />
        <h3 className={styles.subtitle}>Gebruik prullenbak</h3>
        <p>
          Bestanden komen in de prullenbak van uw computer terecht. Dus ze zijn nog niet definitief verwijderd.
Om uw bureaublad te zien verkleint of sluit u al uw vensters die u open hebt staan op uw computer.
        </p>
        <p>Verkleinen: klikt op de het horizontaal streepje in de rechter bovenhoek:</p>
        <p>Sluiten: klik op het kruisje in de rechter bovenhoek:</p>
        <p>Op uw bureaublad staat de prullenbak:</p>
        <img className={styles.smallimage} src={Manual12_C14.src} alt="icoon van de windows prullenbak op een blauwe achtergrond" />
        <p>Duw hier met de rechtermuisknop op om de opties te weergeven:</p>
        <img className={styles.mediumimage} src={Manual12_C15.src} alt="optiemenu van de prullenbak" />
        <p>Druk op “Openen” om de prullenbak te openen. U krijgt een venster te zien dat lijkt zoals Verkenner. <br/>
          Als u een verwijderd bestand uit de prullenbak wilt halen dan kiest u dat bestand.<br/>
          Met rechtermuisknop klikt u dan op: “Terugzetten”.<br/>
          Om het leeg te maken en de inhoud definitief te verwijderen klik op “Prullenbak leegmaken”.<br />
          Opgepast! Hierdoor kunnen verwijderde bestanden niet teruggehaald worden!</p>
      </section>
    </main>
  </>
  )
  };

export default Manual12;