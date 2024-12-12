import styles from './Manual10.module.css';
import Manual10_01 from './Manual10Src/ManualN01.png';
import Manual10_02 from './Manual10Src/ManualN02.png';
import Manual10_03 from './Manual10Src/ManualN03.png';
import Manual10_04 from './Manual10Src/ManualN04.png';
import Manual10_10 from './Manual10Src/ManualN10.png';
import Manual10_11 from './Manual10Src/ManualN11.png';
import Manual10_12 from './Manual10Src/ManualN12.png';
import Manual10_13 from './Manual10Src/ManualN13.png';
import Manual10_14 from './Manual10Src/ManualN14.png';
import Manual10_15 from './Manual10Src/ManualN15.png';
import Manual10_16 from './Manual10Src/ManualN16.png';
import Manual10_17 from './Manual10Src/ManualN17.png';
import Manual10_17_2 from './Manual10Src/ManualN17_2.png';
import Manual10_18 from './Manual10Src/ManualN18.png';
import Manual10_18_2 from './Manual10Src/ManualN18_2.png';
import Manual10_20 from './Manual10Src/ManualN20.png';
import Manual10_21 from './Manual10Src/ManualN21.png';
import Manual10_22 from './Manual10Src/ManualN22.png';
import Manual10_23 from './Manual10Src/ManualN23.png';
import Manual10_30 from './Manual10Src/ManualN30.png';
import Manual10_31 from './Manual10Src/ManualN31.png';
import Manual10_32 from './Manual10Src/ManualN32.png';
import Manual10_33 from './Manual10Src/ManualN33.png';
import Manual10_34 from './Manual10Src/ManualN34.png';
import Manual10_35 from './Manual10Src/ManualN35.png';


const Manual10: React.FC = () => {

  return (  
    <>

    <main className={styles.main}>
      <h1 className={styles.title}>Maak een nieuw account aan op DeMorgen.</h1>
      <p className={styles.author}>Elias Christmas, 10. December 2024</p>
      <h2 className={styles.subtitle}>Inhoud tabel</h2>
      <ul>
        <li>
          <a href="#findpage"
            >De login-/registreerpagina van DeMorgen vinden.</a
          >
          <ul>
            <li><a href="#findpage-step1">Stap 1: Zoek DeMorgen</a></li>
            <li>
              <a href="#findpage-step2">Stap 2: Klik op de eerste link</a>
            </li>
            <li>
              <a href="#findpage-step3">Stap 3: Zoek de instellingen knop</a>
            </li>
            <li><a href="#findpage-step4">Stap 4: Zoek de inlog optie</a></li>
          </ul>
        </li>
        <li>
          <a href="#createaccount"
            >Create a new account on DeMorgen met Google</a
          >
          <ul>
            <li>
              <a href="#createaccount-step1"
                >Stap 1: Volg de vorige handleiding</a
              >
            </li>
            <li><a href="#createaccount-step2">Stap 2: Vul je e-mail in</a></li>
            <li>
              <a href="#createaccount-step3">Stap 3: Kies een wachtwoord</a>
            </li>
            <li>
              <a href="#createaccount-step4"
                >Stap 4: Vul persoonlijke gegevens in</a
              >
            </li>
            <li>
              <a href="#createaccount-step5"
                >Stap 5: Klik op "Maak mijn account aan"</a
              >
            </li>
            <li>
              <a href="#createaccount-step6"
                >Stap 6: Sla het account op in Google</a
              >
            </li>
            <li>
              <a href="#createaccount-step7"
                >Stap 7: Vul de verificatiecode in</a
              >
            </li>
            <li>
              <a href="#createaccount-step8"
                >Stap 8: Open de e-mail van DPG Media</a
              >
            </li>
            <li><a href="#createaccount-step9">Stap 9: Kopieer de code</a></li>
            <li><a href="#createaccount-step10">Stap 10: Plak de code</a></li>
            <li>
              <a href="#createaccount-step11">Stap 11: Succesvol ingelogd</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#findpassword">Handleiding Google Password Manager vinden</a>
          <ul>
            <li>
              <a href="#findpassword-step1">Stap 1: Open Google tabblad</a>
            </li>
            <li>
              <a href="#findpassword-step2"
                >Stap 2: Klik op "Passwords and autofill"</a
              >
            </li>
            <li>
              <a href="#findpassword-step3"
                >Stap 3: Ga naar Google Password Manager</a
              >
            </li>
            <li>
              <a href="#findpassword-step4">Stap 4: Zoek naar wachtwoorden</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#newpassword">Handleiding nieuw wachtwoord instellen</a>
          <ul>
            <li>
              <a href="#newpassword-step1"
                >Stap 1: Volg de vorige handleiding</a
              >
            </li>
            <li>
              <a href="#newpassword-step2"
                >Stap 2: Klik op "Ik ben mijn wachtwoord vergeten"</a
              >
            </li>
            <li><a href="#newpassword-step3">Stap 3: Vul je e-mail in</a></li>
            <li>
              <a href="#newpassword-step4"
                >Stap 4: Open de e-mail van DPG Media</a
              >
            </li>
            <li><a href="#newpassword-step5">Stap 5: Kopieer de code</a></li>
            <li><a href="#newpassword-step6">Stap 6: Plak de code</a></li>
            <li>
              <a href="#newpassword-step7"
                >Stap 7: Vul een nieuw wachtwoord in</a
              >
            </li>
            <li>
              <a href="#newpassword-step8"
                >Stap 8: Sla het wachtwoord op in Google</a
              >
            </li>
          </ul>
        </li>
      </ul>

      <section className={styles.section}>
        <h1 className={styles.title} id="findpage">De login/registreer pagina van DeMorgen vinden.</h1>
        <h2 className={styles.subtitle} id="findpage-step1">Stap 1: Zoek DeMorgen</h2>
        <p>
          Ga naar de zoekbalk en schrijf “demorgen”. Klik vervolgens op enter
        </p>
        <img
          className={styles.bigimagecentered}
          src={Manual10_01.src}
          alt="DeMorgen"
        />

        <h2 className={styles.subtitle} id="findpage-step2">
          Stap 2: Klik op de eerste link
        </h2>
        <p>
          Klik op de eerste link die je ziet. Dit is de officiële website van
          DeMorgen.
        </p>
        <img
          className={styles.bigimagecentered}
          src={Manual10_02.src}
          alt="DeMorgen"
        />

        <h2 className={styles.subtitle} id="findpage-step3">
          Stap 3: Zoek de instellingen knop
        </h2>
        <p>
          Je komt op de website van De Morgen, hier zoek je rechts boven naar de
          knop van “instellingen” met het icoontje van een mannetje.
        </p>
        <img
          className={styles.bigimagecentered}
          src={Manual10_03.src}
          alt="DeMorgen"
        />

        <h2 className={styles.subtitle} id="findpage-step4">
          Stap 4: Zoek de inlog optie
        </h2>
        <p>
          Je ziet aan de rechter kant van het scherm een venster verschijnen met
          verschillende instellingen. Je zoekt hier naar de optie van “Inloggen”
          en is aangeduid met een icoontje van een mannetje
        </p>
        <img
          className={styles.bigimagecentered}
          src={Manual10_04.src}
          alt="DeMorgen"
        />
      </section>

      <section className={styles.section}>
        <h1 className={styles.title} id="createaccount">Create a new account on DeMorgen met Google</h1>
        <h2 className={styles.subtitle} id="createaccount-step1">
          Stap 1: Volg de vorige handleiding
        </h2>
        <p>
          Volg de 4 stapjes van de handleiding hierboven: "De login/registreer
          pagina van DeMorgen vinden."
        </p>

        <h2 className={styles.subtitle} id="createaccount-step2">
          Stap 2: Vul je e-mail in
        </h2>
        <p>
          Je vult je e-mailadres. in het veld en daarna op de grote gele knop
          “Ga verder”, De Morgen beslist daarna pas of je al een account hebt of
          niet. In dit geval hebben we nog geen account bij De Morgen, dus
          zullen we er een moeten aanmaken.
        </p>
        <img
          className={styles.bigimagecentered}
          src={Manual10_10.src}
          alt="DeMorgen"
        />

        <h2 className={styles.subtitle} id="createaccount-step3">
          Stap 3: Kies een wachtwoord
        </h2>
        <p>
          Je kiest nu zelf een wacht naar keuze, let er wel op dat dit minstens
          10 karakters zijn
        </p>
        <p>
          (een karakter is een symbool zoals letters cijfers of speciale
          symbolen zoals # of &)
        </p>
        <img
          className={styles.bigimagecentered}
          src={Manual10_11.src}
          alt="DeMorgen"
        />

        <h2 className={styles.subtitle} id="createaccount-step4">
          Stap 4: Vul persoonlijke gegevens in
        </h2>
        <p>
          Scroll iets naar beneden en vul de gevraagde persoonlijke gegevens in,
          zoals geslacht, naam, geboortedatum (het adres is optioneel). Vul deze
          ook telkens in.
        </p>
        <img
          className={styles.bigimagecentered}
          src={Manual10_12.src}
          alt="DeMorgen"
        />

        <h2 className={styles.subtitle} id="createaccount-step5">
          Stap 5: Klik op "Maak mijn account aan"
        </h2>
        <p>
          Scrol nog een beetje naar beneden en negeer de 3 vragen van De Morgen
          en klikt op de grote gele knop “Maak mijn account aan”
        </p>
        <img
          className={styles.bigimagecentered}
          src={Manual10_13.src}
          alt="DeMorgen"
        />

        <h2 className={styles.subtitle} id="createaccount-step6">
          Stap 6: Sla het account op in Google
        </h2>
        <p>
          Er komt een melding van Google op je scherm en je ziet hier een
          mogelijkheid om op “Save” te klikken om het account op te slaan naar
          je Google account
        </p>
        <img
          className={styles.bigimagecentered}
          src={Manual10_14.src}
          alt="DeMorgen"
        />

        <h2 className={styles.subtitle} id="createaccount-step7">
          Stap 7: Vul de verificatiecode in
        </h2>
        <p>
          Je ziet op deze pagina dat ze je e-mail hebben gestuurd met de code
          die je moet invullen onderaan in het leeg veld.
        </p>
        <img
          className={styles.bigimagecentered}
          src={Manual10_15.src}
          alt="DeMorgen"
        />

        <h2 className={styles.subtitle} id="createaccount-step8">
          Stap 8: Open de e-mail van DPG Media
        </h2>
        <p>
          Open een nieuw tablad en ga naar je e-mail en zoek de e-mail van DPG
          Media en klik hierop
        </p>
        <img
          className={styles.bigimagecentered}
          src={Manual10_16.src}
          alt="DeMorgen"
        />

        <h2 className={styles.subtitle} id="createaccount-step9">
          Stap 9: Kopieer de code
        </h2>
        <p>
          Selecteer de code en klik op je toetsenbord op zowel “ctrl” en “c”
        </p>
        <img
          className={styles.bigimagecentered}
          src={Manual10_17.src}
          alt="DeMorgen"
        />
        <img
          className={styles.bigimagecentered}
          src={Manual10_17_2.src}
          alt="DeMorgen"
        />

        <h2 className={styles.subtitle} id="createaccount-step10">
          Stap 10: Plak de code
        </h2>
        <p>
          Ga terug naar de website van De Morgen en klik op het lege veld. Druk
          nu op zowel “ctrl” als “V”.
        </p>
        <img
          className={styles.bigimagecentered}
          src={Manual10_18.src}
          alt="DeMorgen"
        />
        <img
          className={styles.bigimagecentered}
          src={Manual10_18_2.src}
          alt=""
        />

        <h2 className={styles.subtitle} id="createaccount-step11">
          Stap 11: Succesvol ingelogd
        </h2>
        <p>
          De pagina gaat automatisch terug naar de begin pagina van De Morgen
          maar je bent nu succesvol ingelogd en je hebt dit naar je Google
          account kunnen opslaan
        </p>
      </section>

      <section className={styles.section}>
        <h1 className={styles.title} id="findpassword">Handleiding Google Password Manager vinden</h1>
        <h2 className={styles.subtitle} id="findpassword-step1">
          Stap 1: Open Google tabblad
        </h2>
        <p>
          Je zoekt de 3 streepjes bovenaan een nieuw Google tablad en klikt
          hierop
        </p>
        <img
          className={styles.bigimagecentered}
          src={Manual10_20.src}
          alt="DeMorgen"
        />

        <h2 className={styles.subtitle} id="findpassword-step2">
          Stap 2: Klik op "Passwords and autofill"
        </h2>
        <p>
          Je ziet een venster verschijnen aan de rechter kan. Je zoekt hier naar
          de optie “Passwords and autofill” en je klikt hierop
        </p>
        <img
          className={styles.bigimagecentered}
          src={Manual10_21.src}
          alt="DeMorgen"
        />

        <h2 className={styles.subtitle} id="findpassword-step3">
          Stap 3: Ga naar Google Password Manager
        </h2>
        <img
          className={styles.bigimagecentered}
          src={Manual10_22.src}
          alt="DeMorgen"
        />

        <h2 className={styles.subtitle} id="findpassword-step4">
          Stap 4: Zoek naar wachtwoorden
        </h2>
        <p>
          Je komt op de pagina van je Google password manger, Hier vind ja al de
          opgeslagen wachtwoorden. Je kan bovenaan in de zoekbalk naar
          verschillende wachtwoorden zoeken.
        </p>
        <img
          className={styles.bigimagecentered}
          src={Manual10_23.src}
          alt="DeMorgen"
        />
      </section>

      <section className={styles.section}>
        <h1 className={styles.title} id="newpassword" >Handleiding nieuw wachtwoord instellen</h1>
        <h2 className={styles.subtitle} id="newpassword-step1">
          Stap 1: Volg de vorige handleiding
        </h2>
        <p>
          Volg de eerste 4 stapjes van de eerste handleiding om op de registreer
          pagina te geraken van DeMorgen.
        </p>

        <h2 className={styles.subtitle} id="newpassword-step2">
          Stap 2: Klik op "Ik ben mijn wachtwoord vergeten"
        </h2>
        <p>
          Klik onder “Hulp bij inloggen” op de link van “Ik ben mijn wachtwoord
          vergeten”
        </p>
        <img
          className={styles.bigimagecentered}
          src={Manual10_30.src}
          alt="DeMorgen"
        />

        <h2 className={styles.subtitle} id="newpassword-step3">
          Stap 3: Vul je e-mail in
        </h2>
        <p>
          Vul je e-mailadres. in het leeg veld en klik daarna op de grote gele
          knop “Stuur mij een verificatiecode”
        </p>
        <img
          className={styles.bigimagecentered}
          src={Manual10_31.src}
          alt="DeMorgen"
        />

        <h2 className={styles.subtitle} id="newpassword-step4">
          Stap 4: Open de e-mail van DPG Media
        </h2>
        <p>
          Open een nieuw tablad en ga naar je e-mail en zoek de nieuwe e-mail
          van DPG Media en klik hierop
        </p>
        <img
          className={styles.bigimagecentered}
          src={Manual10_32.src}
          alt="DeMorgen"
        />

        <h2 className={styles.subtitle} id="newpassword-step5">Stap 5: Kopieer de code</h2>
        <p>
          Selecteer de code en klik op je toetsenbord op zowel “ctrl” en “c”
        </p>
        <img
          className={styles.bigimagecentered}
          src={Manual10_33.src}
          alt="DeMorgen"
        />
        <img
          className={styles.bigimagecentered}
          src={Manual10_17_2.src}
          alt="DeMorgen"
        />

        <h2 className={styles.subtitle} id="newpassword-step6">Stap 6: Plak de code</h2>
        <p>
          Ga terug naar de website van De Morgen en klik op het lege veld. Druk
          nu op zowel “ctrl” als “V”
        </p>
        <img
          className={styles.bigimagecentered}
          src={Manual10_18.src}
          alt="DeMorgen"
        />
        <img
          className={styles.bigimagecentered}
          src={Manual10_18_2.src}
          alt=""
        />

        <h2 className={styles.subtitle} id="newpassword-step7">
          Stap 7: Vul een nieuw wachtwoord in
        </h2>
        <p>
          Vul een nieuw wachtwoord dat aan de voorwaarden voldoet (minstens 10
          karacters) en klik vervolgens op de gele knop “Stel mijn wachtwoord
          in”
        </p>
        <p>
          (een karakter is een symbool zoals letters cijfers of speciale
          symbolen zoals # of &)
        </p>
        <img
          className={styles.bigimagecentered}
          src={Manual10_34.src}
          alt="DeMorgen"
        />

        <h2 className={styles.subtitle} id="newpassword-step8">
          Stap 8: Sla het wachtwoord op in Google
        </h2>
        <p>
          De pagina herlaadt en gaat automatisch terug naar de start pagina van
          De Morgen. Er komt een melding van Google op je scherm en je ziet hier
          een mogelijkheid om op “Save” te klikken om het account op te slaan
          naar je Google account.
        </p>
        <p>
          In de screenshot vanonder is de pagina nog aan het herladen daarom dat
          hij wit ziet.
        </p>
        <img
          className={styles.bigimagecentered}
          src={Manual10_35.src}
          alt="DeMorgen"
        />
      </section>
    </main>

    </>
  )
};

export default Manual10;

