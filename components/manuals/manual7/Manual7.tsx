import styles from './Manual7.module.css';
import Manual0_light_tower from './Manual0Src/Manual0_light_tower.jpg';

import Manual7_1_2 from './Manual7Src/ManualN_1.2.png';
import Manual7_1_3 from './Manual7Src/ManualN_1.3.png';
import Manual7_whatsapp_logo from './Manual7Src/ManualN_whatsapp_logo.png';
import Manual7_2_2 from './Manual7Src/ManualN_2.2.png';
import Manual7_2_3 from './Manual7Src/ManualN_2.3.png';
import Manual7_2_4 from './Manual7Src/ManualN_2.4.png';
import Manual7_2_6_7 from './Manual7Src/ManualN_2.6-7.png';
import Manual7_3_2_1 from './Manual7Src/ManualN_3.2.1.png';
import Manual7_3_2_2 from './Manual7Src/ManualN_3.2.2.png';
import Manual7_3_4 from './Manual7Src/ManualN_3.4.png';
import Manual7_3_5 from './Manual7Src/ManualN_3.5.png';
import Manual7_3_8 from './Manual7Src/ManualN_3.8.png';
import Manual7_3_11 from './Manual7Src/ManualN_3.11.png';
import Manual7_4_2 from './Manual7Src/ManualN_4.2.png';
import Manual7_4_3 from './Manual7Src/ManualN_4.3.png';
import Manual7_4_5 from './Manual7Src/ManualN_4.5.png';

const Manual7: React.FC = () => {

  return (  
    <>

    <main className={styles["main"]}>

      <h1 className={styles["title"]}>Handleiding Service Learning</h1>
      <p className={styles["author"]}>Brecht Deroover, 9. December 2024</p>
      
      <section>
        <h2 className={styles["subtitle"]}>Inhoud</h2>
        <ul>
          <li><a href="#inleiding">Inleiding</a></li>
          <li><a href="#1-step">1. WhatsApp openen op een smartphone</a></li>
          <li><a href="#2-step">2. Een foto/video versturen via WhatsApp</a></li>
          <li><a href="#3-step">3. Een groep aanmaken (en de groepsleden de juiste rol geven)</a></li>
          <li><a href="#4-step">4. WhatsApp openen op een computer/laptop</a></li>
        </ul>
      </section>

      <section>
        <h2 className={styles["subtitle"]} id="inleiding">Inleiding</h2>
        <p>Deze handleiding behandelt enkele handige functies van WhatsApp. Het bevat vier onderdelen:</p>
        <ol>
          <li>Hoe je Whatsapp kan openen op een smartphone.</li>
          <li>Hoe je een foto of video naar een persoon verstuurt.</li>
          <li>Hoe je een groep maakt, personen toevoegt en groepsleden een beheerdersrol geeft.</li>
          <li>Hoe je WhatsApp gebruikt op een computer of laptop.</li>
        </ol>
      </section>

      <section>
        <h2 className={styles["subtitle"]} id="1-step">1. WhatsApp openen op een smartphone</h2>
        <ol type="a">
          <li>Ontgrendel je smartphone en ga naar de startpagina.</li>
          <li>Veeg met je vinger van onder naar boven om het menu te openen. <span className={styles["light-blue"]}>(1)</span></li>
          <li>Tik bovenaan in het zoekveld en typ "WhatsApp" in.<span className={styles["green"]}>(2)</span></li>
          <li>Wanneer het WhatsApp-icoontje verschijnt, tik je erop om de app te openen.</li>
        </ol>
        <div className={styles["image-row"]}>
          <img src={Manual7_1_2.src} alt="Menu openen op smartphone" className={styles["image-1x2"]} />
          <img src={Manual7_1_3.src} alt="Zoekveld gebruiken" className={styles["image-1x2"]} />
          <img src={Manual7_whatsapp_logo.src} alt="WhatsApp icoon" className={styles["image-1x1"]} />
        </div>
      </section>
      
      <section>
        <h2 className={styles["subtitle"]} id="2-step">2. Een foto of video versturen via WhatsApp</h2>
        <ol type="a">
          <li>Open de WhatsApp-app (zie bovenstaande instructies).</li>
          <li>Open de chat van de persoon of groep naar wie je de foto/video wilt sturen.<span className={styles["blue"]}>(2)</span></li>
          <li>Tik rechtsonder op het camera-icoontje.<span className={styles["orange"]}>(3)</span></li>
          <li>Houd een foto of video 1 seconde ingedrukt om deze te selecteren.<span className={styles["yellow"]}>(4)</span>,<span className={styles["light-blue"]}>(5)</span></li>
          <li>Tik op het groene vinkje rechtsonder om je selectie te bevestigen.<span className={styles["magenta"]}>(6)</span></li>
          <li>Voeg optioneel een tekst toe door op het tekstvak te tikken.<span className={styles["magenta"]}>(7)</span></li>
          <li>Tik op het groene vlieger-icoontje rechtsonder om de bestanden te versturen.<span className={styles["cyan"]}>(8)</span></li>
        </ol>
        <p>Je hebt nu succesvol een foto of video verstuurd!</p>
        <div className={styles["image-row"]}>
          <img src={Manual7_2_2.src} alt="Chat selecteren" className={styles["image-1x2"]} />
          <img src={Manual7_2_3.src} alt="Camera icoon" />
          <img src={Manual7_2_4.src} alt="Foto of video selecteren" />
          <img src={Manual7_2_6_7.src} alt="Tekst toevoegen en versturen" />
        </div>
      </section>
      
      <section>
        <h2 className={styles["subtitle"]} id="3-step">3. Een groep aanmaken (en de groepsleden de juiste rol geven)</h2>
        <ol type="a">
          <li>Open de WhatsApp-app (zie instructies bij onderdeel 1).</li>
          <li>Tik linksonder op <strong>Chats <span className={styles["red"]}>(1)</span></strong> en vervolgens rechtsboven op de drie puntjes.<span className={styles["blue"]}>(2)</span></li>
          <li>Kies <strong>Nieuwe groep</strong>.</li>
          <li>Selecteer de personen die je wilt toevoegen aan de groep door op hun namen te tikken.<span className={styles["light-blue"]}>(4)</span></li>
          <li>Geef de groep een naam.<span className={styles["magenta"]}>(5)</span></li>
          <li>Wil je beperkingen instellen voor groepsleden? Ga naar <strong>Groepstoestemmingen</strong> en pas de instellingen aan.</li>
          <li>Tik op het groene vinkje rechtsonder om de groep aan te maken.<span className={styles["cyan"]}>(7)</span></li>
          <li>Om een lid mede-beheerder te maken, tik je bovenaan op de groepsnaam.<span className={styles["orange"]}>(8)</span></li>
          <li>Scrol naar beneden tot je de lijst met groepsleden ziet.</li>
          <li>Tik op de naam van de persoon die je groepsbeheerder wilt maken.</li>
          <li>Kies <strong>Groepsbeheerder maken <span className={styles["green"]}>(10)</span></strong>. De wijziging is nu doorgevoerd.</li>
        </ol>
        <div className={styles["image-row"]}>
          <img src={Manual7_3_2_1.src} alt="Groep aanmaken"  />
          <img src={Manual7_3_2_2.src} alt="Personen selecteren"  />
          <img src={Manual7_3_4.src} alt="Groepsnaam instellen"  />
          <img src={Manual7_3_5.src} alt="Groepstoestemmingen aanpassen" className={styles["image-1x2"]} />
          <img src={Manual7_3_8.src} alt="Mede-beheerder toevoegen"  />
          <img src={Manual7_3_11.src} alt="Groepsbeheerder maken"  />
        </div>
      </section>
      
      <section>
        <h2 className={styles["subtitle"]} id="4-step">4. WhatsApp openen op een computer/laptop</h2>
        <ol type="a">
          <li>Open een webbrowser, zoals Google Chrome, Microsoft Edge of Firefox.</li>
          <li>Typ <strong>https://web.whatsapp.com/ <span className={styles["light-blue"]}>(2)</span></strong> in de zoekbalk bovenaan en druk op <strong>Enter</strong>.</li>
          <li>Het webscherm van WhatsApp verschijnt met een QR-code.</li>
          <li>Pak je smartphone en open de WhatsApp-app (zie instructies bij onderdeel 1).</li>
          <li>Tik rechtsboven op het camera-icoontje om de camera te activeren.<span className={styles["magenta"]}>(3)</span></li>
          <li>Richt je smartphonecamera op de QR-code op het computerscherm.</li>
          <li>Tik op <strong>Een apparaat koppelen</strong> wanneer dit in beeld verschijnt.</li>
          <li>Binnen enkele seconden ben je ingelogd op WhatsApp via je computer of laptop.</li>
        </ol>
        <div className={styles["image-row"]}>
          <img src={Manual7_4_2.src} alt="Webbrowser openen" />
          <img src={Manual7_4_3.src} alt="QR-code scannen" />
          <img src={Manual7_4_5.src} alt="Succesvol ingelogd"  />
        </div>
      </section>

    </main>

    </>
  )
};

export default Manual7;