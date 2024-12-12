import styles from './Manual9.module.css';
import Manual9_Afbeelding1 from './Manual9Src/ManualN_Afbeelding1.png';
import Manual9_Afbeelding2 from './Manual9Src/ManualN_Afbeelding2.png';
import Manual9_Afbeelding3 from './Manual9Src/ManualN_Afbeelding3.png';
import Manual9_Afbeelding4 from './Manual9Src/ManualN_Afbeelding4.png';
import Manual9_Afbeelding5 from './Manual9Src/ManualN_Afbeelding5.png';
import Manual9_Afbeelding6 from './Manual9Src/ManualN_Afbeelding6.png';
import Manual9_Afbeelding7 from './Manual9Src/ManualN_Afbeelding7.png';
import Manual9_Afbeelding8 from './Manual9Src/ManualN_Afbeelding8.png';
import Manual9_Afbeelding9 from './Manual9Src/ManualN_Afbeelding9.png';
import Manual9_Afbeelding10 from './Manual9Src/ManualN_Afbeelding10.png';
import Manual9_Afbeelding11 from './Manual9Src/ManualN_Afbeelding11.png';
import Manual9_Afbeelding12 from './Manual9Src/ManualN_Afbeelding12.png';
import Manual9_Afbeelding13 from './Manual9Src/ManualN_Afbeelding13.png';

const Manual9: React.FC = () => {

  return ( 
    <>

    <main className={styles["main"]}>

      <section className={styles["manual-title"]}>
        <h2 className={styles["manual-heading"]}>My WhatsApp Manual</h2>
      </section>
      
      <section className={styles["manual-section"]}>
        <div className={styles["image-row"]}>
          <img className={styles["manual-image"]} src={Manual9_Afbeelding1.src} alt="Step 1" />
          <img className={styles["manual-image"]} src={Manual9_Afbeelding2.src} alt="Step 2" />
          <img className={styles["manual-image"]} src={Manual9_Afbeelding3.src} alt="Step 3" />
        </div>
        <p className={styles["manual-text"]}>
          Zoek voor “WhatsApp” in de App Store.<br/>
          Stap 1: Druk op de download knop naast ”WhatsApp Messenger”<br/>
          Stap 2: Wacht tot de app gedownload is<br/>
          Stap 3: Druk op ”Open”<br/>
          Nu dat WhatsApp geïnstalleerd en geopend is kunnen we een account gaan maken.
        </p>
      </section>
      
      <section className={styles["manual-section"]}>
        <div className={styles["image-row"]}>
          <img className={styles["manual-image"]} src={Manual9_Afbeelding4.src} alt="Step 4" />
          <img className={styles["manual-image"]} src={Manual9_Afbeelding5.src} alt="Step 5" />
          <img className={styles["manual-image"]} src={Manual9_Afbeelding6.src} alt="Step 6" />
        </div>
        <p className={styles["manual-text"]}>
          Stap 4: Druk op “Akkoord en ga door”, hiermee accepteer je de Servicevoorwaarden. Hier hoef je je geen zorgen over
          te maken.<br/>
          Stap 5: Nu moet je je telefoonnummer ingeven, dit doe je door op het invulveld naast ”+32” te drukken en dan je
          nummer in te geven.<br/>
          Stap 6: Als je jouw eigen nummer hebt ingegeven, druk je op ”Volgende”.
        </p>
      </section>
      
      <section className={styles["manual-section"]}>
        <div className={styles["image-row"]}>
          <img className={styles["manual-image"]} src={Manual9_Afbeelding7.src} alt="Step 7" />
          <img className={styles["manual-image"]} src={Manual9_Afbeelding8.src} alt="Step 8" />
          <img className={styles["manual-image"]} src={Manual9_Afbeelding9.src} alt="Step 9" />
        </div>
        <p className={styles["manual-text"]}>
          Wanneer je voor de eerste keer inlogd, ga je gevraagd worden of WhatsApp toegang mag tot je contacten. Hier klik je
          “Ga door”.<br/>
          Nu ben je ingelogd en kan je bellen wie je maar wilt! 🎉<br/>
          Stap 1: Druk op “Oproepen” onderaan op het scherm.<br/>
          Stap 2: Nu druk je op het “+” teken bovenaan op het scherm.<br/>
          Stap 3: Je ziet nu al jouw contacten, kies wie je wenst te bereiken en druk op het circeltje naast die naam. Daarna
          druk je op het eerste icoontje bovenaan om die persoon te videobellen.<br/>
          En dat was het! Zo kan je jouw vrienden / familie videobellen ☺️.
        </p>
      </section>
      
      <section className={styles["manual-section"]}>
        <div className={styles["image-row"]}>
          <img className={styles["manual-image"]} src={Manual9_Afbeelding10.src} alt="Step 10" />
          <img className={styles["manual-image"]} src={Manual9_Afbeelding11.src} alt="Step 11" />
        </div>
        <p className={styles["manual-text"]}>
          Om berichten / foto's te versturen moeten we weer verschillende stappen volgen.<br/>
          Stap 1: Klik op ”Chats” onderaan het scherm. Dit zorgt ervoor dat je al je chats kan zien met iedereen waarnaar je
          een bericht hebt gestuurd. Als de persoon waarnaar je een bericht/foto wilt sturen er niet tussen staat, druk je op
          het plusje bovenaan.<br/>
          Stap 2: Als je op het plusje hebt gedrukt zie je nu al jouw contacten, druk op iemand dat je wenst te bereiken.
        </p>
      </section>
      
      <section className={styles["manual-section"]}>
        <div className={styles["image-row"]}>
          <img className={styles["manual-image"]} src={Manual9_Afbeelding12.src} alt="Step 12" />
          <img className={styles["manual-image"]} src={Manual9_Afbeelding13.src} alt="Step 13" />
        </div>
        <p className={styles["manual-text"]}>
          Nu zie je dat je in de chat zit van die persoon. Je kan nu gewoon een bericht typen maar voor foto's te versturen
          zijn er nog 2 stappen.<br/>
          Stap 3: Klik op het plusje links in het midden.<br/>
          Stap 4: Nu zie je verschillende opties, druk op ”Foto’s” om foto’s uit je gallerij te versturen of druk op “Camera”
          om een foto te maken en te versturen.<br/>
          Nu zou je op je eigen foto’s moeten kunnen versturen en familie of vrienden moeten kunnen videobellen 🥳.
        </p>
      </section>
      
      <section className={styles["manual-summary"]}>
        <p className={styles["manual-text"]}>
          Als laatste samenvatting:<br/>
          Hier zijn de verschillende stappen op 2 pagina’s van het account maken tot foto's versturen:<br/>
          <strong>Downloaden:</strong><br/>
          Stap 1: Druk op de download knop naast ”WhatsApp Messenger”.<br/>
          Stap 2: Wacht tot de app gedownload is.<br/>
          Stap 3: Druk op ”Open”.<br/>
          <strong>Videobellen:</strong><br/>
          Stap 1: Druk op “Oproepen” onderaan op het scherm.<br/>
          Stap 2: Nu druk je op het “+” teken bovenaan op het scherm.<br/>
          Stap 3: Kies wie je wenst te bereiken en druk op het circeltje naast die naam. Daarna druk je op het eerste icoontje
          bovenaan om die persoon te videobellen.<br/>
          <strong>Foto’s versturen:</strong><br/>
          Stap 1: Klik op ”Chats” onderaan het scherm. Als de persoon waarnaar je een bericht/foto wilt sturen er niet tussen
          staat, druk je op het plusje bovenaan.<br/>
          Stap 2: Als je op het plusje hebt gedrukt zie je nu al jouw contacten, druk op iemand dat je wenst te bereiken.<br/>
          Stap 3: Klik op het plusje links in het midden.<br/>
          Stap 4: Nu zie je verschillende opties, druk op ”Foto’s” om foto’s uit je gallerij te versturen of druk op “Camera”
          om een foto te maken en te versturen.
        </p>
      </section>

    </main>
    </>
    )
  };

export default Manual9;

















