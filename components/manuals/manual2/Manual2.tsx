import styles from './Manual2.module.css';

const Manual2: React.FC = () => {

  return (  
      <>
        <main className={styles.main}>
            <h1 className={styles.title}>Het Gebruik van een Password Manager</h1>
            <p className={styles.author}>Michiel Meeus, 11. December 2024</p>

            <section className={styles.section}>
              <h2 className={styles.subtitle}>Table of Contents</h2>
              <ol>
                <li className={styles.li}>
                  Inleiding
                  <ul className={styles.ul}>
                    <li className={styles.li}>Wat is een Password Manager?</li>
                    <li className={styles.li}>Voordelen</li>
                  </ul>
                </li>
                <li className={styles.li}>
                  Installatie en Account Aanmaken
                  <ul className={styles.ul}>
                    <li className={styles.li}>Browser openen</li>
                    <li className={styles.li}>Kies en registreer je plan</li>
                    <li className={styles.li}>Inlogmethode kiezen en bevestigen</li>
                    <li className={styles.li}>Master wachtwoord instellen</li>
                  </ul>
                </li>
                <li className={styles.li}>
                  Wachtwoorden Genereren en Importeren
                  <ul className={styles.ul}>
                    <li className={styles.li}>Password Generator gebruiken</li>
                    <li className={styles.li}>Wachtwoord genereren en opslaan</li>
                    <li className={styles.li}>Wachtwoorden importeren</li>
                  </ul>
                </li>
                <li className={styles.li}>
                  Wachtwoorden Beheren
                  <ul className={styles.ul}>
                    <li className={styles.li}>Wachtwoorden bekijken en beheren</li>
                    <li className={styles.li}>Opties via de drie puntjes</li>
                    <li className={styles.li}>Wachtwoord bewerken of verplaatsen</li>
                  </ul>
                </li>
                <li className={styles.li}>
                  Andere Kenmerken
                  <ul className={styles.ul}>
                    <li className={styles.li}>Geheime notities</li>
                    <li className={styles.li}>Creditcard gegevens</li>
                  </ul>
                </li>
                <li className={styles.li}>
                  Wachtwoord Verwijderen
                  <ul className={styles.ul}>
                    <li className={styles.li}>Wachtwoord naar de prullenmand verplaatsen</li>
                    <li className={styles.li}>Prullenmand leegmaken</li>
                  </ul>
                </li>
                <li className={styles.li}>
                  Andere Features
                  <ul className={styles.ul}>
                    <li className={styles.li}>
                      Samenvatting van een paar van de andere opties binnen NordPass
                    </li>
                  </ul>
                </li>
              </ol>
            </section>

            <section className={styles.section}>
              <h2 className={styles.subtitle}>Inleiding</h2>
              <p className={styles.p}>
                Welkom bij de handleiding voor NordPass. Deze gids helpt je om
                eenvoudig je wachtwoorden veilig te beheren, genereren en opslaan met
                NordPass. Volg de stappen en ontdek hoe je optimaal gebruik kunt maken
                van alle functies voor passwoord management die NordPass biedt.
              </p>
              <h3 className={styles.h3}>Wat is een Password Manager?</h3>
              <p className={styles.p}>
                Een password manager is een tool die je helpt om wachtwoorden veilig
                te beheren. Het genereert sterke, unieke wachtwoorden voor elk account
                en slaat ze veilig op, zodat je ze niet meer hoeft te onthouden.
                Hierdoor hoef je nooit meer hetzelfde wachtwoord voor meerdere
                accounts te gebruiken of een wachtwoord te vergeten.
              </p>
              <p className={styles.p}>
                Er zijn verschillende password managers, zoals Bitwarden, NordPass,
                Keeper en Google Password Manager. In deze handleiding richten we ons
                op het installeren en gebruiken van NordPass (gratis versie), dat
                bekend staat om zijn gebruiksvriendelijke interface en hoge
                veiligheidsscore.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.subtitle}>Installatie en Aanmaken van een Account</h2>
              <h3 className={styles.h3}>Stap 1: Open je browser</h3>
              <p className={styles.p}>
                Start een browser zoals Google Chrome, Firefox, of Microsoft Edge.
              </p>
              <h3 className={styles.h3}>Stap 2: Bezoek de website</h3>
              <p className={styles.p}>Typ in de zoekbalk: nordpass.com/plans en druk op Enter.</p>
              <h3 className={styles.h3}>Stap 3: Kies het gratis plan</h3>
              <p className={styles.p}>
                Zoek het plan met het label "FREE" en klik op Get Started. Met meer
                ervaring kun je later upgraden naar het Premium- of Family-plan voor
                extra functies.
              </p>
              <img src="/ManualNSrc/ManualN_1.png" alt="Picture of the Free Plan" />
              <h3 className={styles.h3}>Stap 4: Vul je e-mailadres in</h3>
              <p className={styles.p}>
                Je komt op een scherm waarin staat: No credit card required. In het
                midden van het scherm zie je een veld met de tekst Your email address.
                Vul hier je eigen e-mailadres in (bijvoorbeeld: jhon.doe@gmail.com).
              </p>
              <h3 className={styles.h3}>Stap 5: Klik op Get Started</h3>
              <p className={styles.p}>
                Zodra je je e-mailadres hebt ingevuld, klik je opnieuw op Get Started.
              </p>
              <h3 className={styles.h3}>Stap 6: Ga naar de volgende pagina</h3>
              <p className={styles.p}>
                Je wordt doorgestuurd naar een nieuwe pagina die er ongeveer als volgt
                uitziet:
              </p>
              <img
                src="/ManualNSrc/ManualN_2.png"
                alt="Adding the NordPass extension"
              />
              <h3 className={styles.h3}>Stap 7: Klik op Add to Chrome</h3>
              <p className={styles.p}>Klik rechts op de blauwe knop Add to Chrome.</p>
              <h3 className={styles.h3}>Stap 8: Bevestig de extensie</h3>
              <p className={styles.p}>
                Er verschijnt een pop-up met de tekst "Add Extension". Klik op
                Extensie toevoegen om door te gaan.
              </p>
              <img
                src="/ManualNSrc/ManualN_3.png"
                alt="Popup extnesion for adding NordPass"
              />
              <h3 className={styles.h3}>Stap 9: Download en ga verder</h3>
              <p className={styles.p}>
                De extensie wordt gedownload en je wordt automatisch doorgestuurd naar
                een nieuwe pagina. Klik op Create Account om verder te gaan.
              </p>
              <img
                src="/ManualNSrc/ManualN_4.png"
                alt="Creating a NordPass account"
              />
              <h3 className={styles.h3}>Stap 10: Kies je inlogmethode</h3>
              <p className={styles.p}>
                Je ziet een pagina met verschillende inlogopties. Klik op Email
                Address (niet Sign up with Google). Vul je e-mailadres in,
                bijvoorbeeld: Jhon.Doe@Gmail.com.
              </p>
              <img src="/ManualNSrc/ManualN_5.png" alt="Login options" />
              <h3 className={styles.h3}>Stap 11: Klik op Continue</h3>
              <p className={styles.p}>Nadat je je e-mailadres hebt ingevoerd, klik je op Continue.</p>
              <h3 className={styles.h3}>Stap 12: Verifieer je e-mail</h3>
              <p className={styles.p}>
                Je ontvangt een verificatie-e-mail. Er zijn twee manieren om de code
                te verkrijgen:
              </p>
              <ul className={styles.ul}>
                <li className={styles.li}>
                  Via je telefoon: Open je mail-app en zoek naar een e-mail met de
                  code.
                </li>
                <li className={styles.li}>
                  Via je laptop/pc: Klik op het plus-icoon in de browserzoekbalk en
                  open je e-mailplatform (bijvoorbeeld Gmail). Log in (als je dat nog
                  niet hebt gedaan) en zoek de e-mail met de code.
                </li>
              </ul>
              <img src="/ManualNSrc/ManualN_6.png" alt="Verifying your e-mail" />
              <h3 className={styles.h3}>Stap 13: Voer de verificatiecode in</h3>
              <p className={styles.p}>
                Open de e-mail met de code (bijvoorbeeld: 989632) en ga terug naar de
                vorige pagina. Vul de code in het daarvoor bestemde veld in.
              </p>
              <h3 className={styles.h3}>Stap 14: Stel een sterk wachtwoord in</h3>
              <p className={styles.p}>
                Je komt op een pagina waar je een wachtwoord moet instellen. Zorg
                ervoor dat het wachtwoord voldoet aan de volgende vereisten:
              </p>
              <ul className={styles.ul}>
                <li className={styles.li}>Minimaal 8 tekens (bij voorkeur 9 voor de volgende stap)</li>
                <li className={styles.li}>Minimaal 1 hoofdletter</li>
                <li className={styles.li}>Minimaal 1 kleine letter</li>
                <li className={styles.li}>Minimaal 1 symbool (bijvoorbeeld: h8i9*2S23Ox-)</li>
              </ul>
              <p className={styles.p}>
                Het is belangrijk om dit wachtwoord goed te bewaren. Schrijf het op,
                want je hebt het later nodig. Klik op Create password om door te gaan.
              </p>
              <img src="/ManualNSrc/ManualN_7.png" alt="Creating your Password" />
              <h3 className={styles.h3}>Stap 15: Hergebruik je wachtwoord als Master Password</h3>
              <p className={styles.p}>
                Je kunt je vorige wachtwoord hergebruiken als Master Password. Dit
                wachtwoord is nodig om toegang te krijgen tot je opgeslagen
                wachtwoorden in NordPass.
              </p>
              <p className={styles.p}>Voer je wachtwoord opnieuw in en klik daarna op Continue.</p>
              <img
                src="/ManualNSrc/ManualN_8.png"
                alt="Creating your Master Password"
              />
              <h3 className={styles.h3}>Stap 16: Bevestig je wachtwoord</h3>
              <p className={styles.p}>
                Je wordt gevraagd om je wachtwoord te bevestigen. Voer het wachtwoord
                nogmaals in en klik op Bevestigen.
              </p>
              <p className={styles.p}>
                Let op: dit wachtwoord is permanent en kan moeilijk te veranderen
                zijn.
              </p>
              <h3 className={styles.h3}>Stap 17: Start met je Password Manager</h3>
              <p className={styles.p}>Je bent nu klaar om NordPass te gebruiken!</p>
              <ul className={styles.ul}>
                <li className={styles.li}>
                  Klik op Import items om bestaande wachtwoorden toe te voegen
                  (NordPass legt dit stap voor stap uit).
                </li>
                <li className={styles.li}>
                  Wil je nieuwe wachtwoorden maken die sterker en veiliger zijn? Klik
                  dan op Add your first Password
                </li>
              </ul>
              <img src="/ManualNSrc/ManualN_9.png" alt="Start using NordPass" />
              <h3 className={styles.h3}>Stap 18: Voltooi de installatie</h3>
              <p className={styles.p}>
                Je bent nu klaar met de installatie! Als je het verder niet wilt
                onderzoeken, klik dan rechtsboven op Skip.
              </p>
              <img src="/ManualNSrc/ManualN_10.png" alt="Skip" />
            </section>

            <section className={styles.section}>
              <h2 className={styles.subtitle}>Wachtwoorden Genereren</h2>
              <h3 className={styles.h3}>Stap 1: Open de Password Generator</h3>
              <p className={styles.p}>
                Klik in het menu aan de linkerkant op Tools en kies Password
                Generator.
              </p>
              <img
                src="/ManualNSrc/ManualN_11.png"
                alt="Picture of the Left-Hand menu in NordPass"
              />
              <h3 className={styles.h3}>Stap 2: Stel je voorkeuren in</h3>
              <p className={styles.p}>Bij de Password Generator kun je de volgende opties aanpassen:</p>
              <ul className={styles.ul}>
                <li className={styles.li}>Type: Kies tussen characters (aanbevolen) of woorden.</li>
                <li className={styles.li}>Lengte: Pas de lengte van je wachtwoord aan.</li>
                <li className={styles.li}>
                  Gebruik van hoofdletters, nummers en symbolen: Zorg ervoor dat je
                  deze opties ingeschakeld houdt voor een sterker wachtwoord.
                </li>
              </ul>
              <img
                src="/ManualNSrc/ManualN_12.png"
                alt="Choosing your password preferences"
              />
              <h3 className={styles.h3}>Stap 3: Genereer en sla het wachtwoord op</h3>
              <ul className={styles.ul}>
                <li className={styles.li}>Klik op Generate om een nieuw wachtwoord te laten maken.</li>
                <li className={styles.li}>
                  Als je het wachtwoord wilt gebruiken, klik je op de knop ernaast om
                  het te kopiëren.
                </li>
                <li className={styles.li}>
                  Om het wachtwoord op te slaan, klik je op de laatste knop van de
                  drie.
                </li>
              </ul>
              <img
                src="/ManualNSrc/ManualN_13.png"
                alt="Options for copying, generating and saving the password"
              />
              <h2 className={styles.subtitle}>Wachtwoorden Opslaan</h2>
              <h3 className={styles.h3}>Stap 4: Vul de gegevens in en sla op</h3>
              <p className={styles.p}>Wanneer je het wachtwoord opslaat, vul je de volgende velden in:</p>
              <ul className={styles.ul}>
                <li className={styles.li}>
                  Naam: Geef het wachtwoord een naam (bijvoorbeeld: Wachtwoord voor
                  Google).
                </li>
                <li className={styles.li}>
                  E-mail/gebruikersnaam: Vul de e-mail of gebruikersnaam in die je
                  gebruikt voor dit account.
                </li>
                <li className={styles.li}>
                  Wachtwoord: Dit is het wachtwoord dat je zojuist hebt gegenereerd.
                </li>
                <li className={styles.li}>Website: Vul de website in waarvoor het wachtwoord geldt.</li>
                <li className={styles.li}>Custom Fields: Voeg eventueel extra velden toe.</li>
                <li className={styles.li}>
                  Folder: Maak een map voor je wachtwoord, bijvoorbeeld: Wachtwoorden
                  van het werk.
                </li>
                <li className={styles.li}>Note: Voeg een notitie toe als je dat wilt.</li>
              </ul>
              <img
                src="/ManualNSrc/ManualN_14.png"
                alt="Enter the needed password details"
              />
              <h3 className={styles.h3}>Stap 5: Sla het wachtwoord op</h3>
              <p className={styles.p}>
                Als je klaar bent, klik je op Save. Het wachtwoord wordt opgeslagen en
                kun je later beheren onder de tab Passwords.
              </p>
              <img src="/ManualNSrc/ManualN_15.png" alt="Saved password" />
            </section>
            <section className={styles.section}>
              <h2 className={styles.subtitle}>Wachtwoorden importeren</h2>
              <h3 className={styles.h3}>Stap 1: Voeg een wachtwoord toe</h3>
              <p className={styles.p}>
                Op de pagina met je opgeslagen wachtwoorden, klik je rechtsboven op
                Add Password.
              </p>
              <img
                src="/ManualNSrc/ManualN_16.png"
                alt="Menu for adding a password"
              />
              <h2>Stap 2: Vul je gegevens in</h2>
              <p className={styles.p}>
                Je komt op een pagina die je herkent van het wachtwoord genereren. Het
                enige verschil is dat je nu het wachtwoord invult dat je al gebruikt
                voor de website die je wilt toevoegen. Vul ook de website-link in
                (bijvoorbeeld ASAdventure). Klik op Save. Als je later naar de website
                gaat, hoef je je wachtwoord niet meer te onthouden, want NordPass logt
                je automatisch in.
              </p>
              <img
                src="/ManualNSrc/ManualN_17.png"
                alt="Importing Data needed to save the password"
              />
            </section>
            <section className={styles.section}>
              <h2 className={styles.subtitle}>Wachtwoorden Beheren</h2>
              <h3 className={styles.h3}>Stap 1: Ga naar de Passwords-pagina</h3>
              <p className={styles.p}>
                om je wachtwoorden te beheren, ga je naar de Passwords-pagina. Hier
                kun je:
              </p>
              <ul className={styles.ul}>
                <li className={styles.li}>Naar de gekoppelde website gaan.</li>
                <li className={styles.li}>De informatie achter je wachtwoord wijzigen.</li>
                <li className={styles.li}>Je wachtwoord aanpassen.</li>
                <li className={styles.li}>Je wachtwoord in een map (folder) plaatsen.</li>
              </ul>
              <img src="/ManualNSrc/ManualN_18.png" alt="Passwords page" />
              <h3 className={styles.h3}>Stap 2: Opties bij je wachtwoord</h3>
              <p className={styles.p}>
                Als je met je muis over je wachtwoord beweegt, verschijnen er twee
                opties aan de rechterkant:
              </p>
              <ul className={styles.ul}>
                <li className={styles.li}>
                  Launch Site: Hiermee word je naar de website gestuurd (bijvoorbeeld
                  AS Adventures of EDU Colombia).
                </li>
                <li className={styles.li}>
                  Drie Puntjes: Dit toont verschillende opties voor het beheer van je
                  wachtwoord.
                </li>
              </ul>
              <img
                src="/ManualNSrc/ManualN_19.png"
                alt="Picture of the options for the passwords"
              />
              <h3 className={styles.h3}>Stap 3: Opties via de drie puntjes</h3>
              <p className={styles.p}>Klik op de drie puntjes om het menu te openen. Hier kun je:</p>
              <ul className={styles.ul}>
                <li className={styles.li}>
                  Copy Email/Username: Kopieer je e-mail of gebruikersnaam
                  (bijvoorbeeld: Marleentje3).
                </li>
                <li className={styles.li}>Copy Password: Kopieer het wachtwoord voor dat account.</li>
                <li className={styles.li}>
                  Move to Folder: Verplaats het wachtwoord naar een map. Kies een
                  bestaande map (bijvoorbeeld Werk) of maak een nieuwe map door op New
                  Folder te klikken. Geef de map een naam (bijvoorbeeld School) en
                  klik op Move to Folder.
                </li>
                <li className={styles.li}>Edit: Bewerk het wachtwoord (we slaan deze stap over).</li>
                <li className={styles.li}>Attach File: Voeg een bestand toe.</li>
                <li className={styles.li}>Share: Deel het wachtwoord met anderen.</li>
                <li className={styles.li}>Password History: Bekijk je vorige wachtwoorden.</li>
                <li className={styles.li}>Move to Trash: Verplaats het wachtwoord naar de prullenmand.</li>
              </ul>
              <img
                src="/ManualNSrc/ManualN_20.png"
                alt="Full 3 dotted menu and Folder menu"
              />
              <h3 className={styles.h3}>Stap 4 (optioneel): Bewerk je wachtwoord</h3>
              <p className={styles.p}>
                Via Edit kom je in een menu waar je alle details van het wachtwoord
                kunt wijzigen.
              </p>
              <img src="/ManualNSrc/ManualN_21.png" alt="Editing the password" />
              <h3 className={styles.h3}>Stap 5: Verplaats naar de prullenmand</h3>
              <p className={styles.p}>
                Klik op Move to Trash bij de drie puntjes om het wachtwoord naar de
                prullenmand te verplaatsen.
              </p>
              <ul className={styles.ul}>
                <li className={styles.li}>
                  Ga naar Trash in het menu aan de linkerkant om je verwijderde items
                  te zien.
                </li>
                <li className={styles.li}>
                  Klik rechtsboven op Empty Trash om alles permanent te verwijderen.
                </li>
                <li className={styles.li}>
                  Er verschijnt een bevestiging voordat de items definitief worden
                  verwijderd. Let op: eenmaal verwijderd, kun je deze niet meer
                  herstellen.
                </li>
              </ul>
              <img
                src="/ManualNSrc/ManualN_22.png"
                alt="Picture of showing where the trashcan is"
              />
            </section>
            <section className={styles.section}>
              <h2 className={styles.subtitle}>Andere Toepassingen van NordPass</h2>
              <p className={styles.p}>
                NordPass biedt nog verschillende praktische en beveiligde functies die
                je kunnen helpen je digitale leven gemakkelijker en veiliger te maken:
              </p>
              <ul className={styles.ul}>
                <li className={styles.li}>
                  Geheime Notities: Bewaar privé-informatie die niet voor het oog van
                  anderen bedoeld is. Van gevoelige notities tot persoonlijke
                  gegevens, je kunt alles veilig opslaan in NordPass.
                </li>
                <li className={styles.li}>
                  Creditcard Gegevens: Voeg je creditcard- of Visa-informatie toe,
                  zodat bij betalingen op je laptop of pc, NordPass automatisch je
                  gegevens invult. Dit bespaart je tijd en voorkomt dat je telkens je
                  betaalgegevens handmatig moet invoeren.
                </li>
              </ul>
              <p className={styles.p}>
                Deze functies maken NordPass niet alleen een veilige plaats om je
                wachtwoorden op te slaan, maar ook een handige tool voor het beheren
                van andere vertrouwelijke informatie.
              </p>
              <img
                src="/ManualNSrc/ManualN_23.png"
                alt="Picture of Shopping options with the use of Nordpass"
              />
            </section>
            <footer className={styles.footer}><h3 className={styles.h3}>Made for the free version of NordPass</h3></footer>
          </main>
      </>
    )
  }

export default Manual2;
