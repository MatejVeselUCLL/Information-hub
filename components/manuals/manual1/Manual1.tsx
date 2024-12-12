import styles from './Manual1.module.css';
import Manual1_Search from "./Manual1Src/Search.png";
import Manual1_SearchBar from "./Manual1Src/SearchBar.png";
import Manual1_Settings from "./Manual1Src/Settings.png";
import Manual1_Apps from "./Manual1Src/Apps.png";
import Manual1_InstalledApps from "./Manual1Src/InstalledApps.png";
import Manual1_SearchApps from "./Manual1Src/SearchApps.png";
import Manual1_ThreeDots from "./Manual1Src/ThreeDots.png";
import Manual1_Uninstall from "./Manual1Src/Uninstall.png";
import Manual1_WindowsUpdate from "./Manual1Src/WindowsUpdate.png";
import Manual1_CheckForUpdates from "./Manual1Src/CheckForUpdates.png";
import Manual1_YouareUptoDate from "./Manual1Src/YoureUptoDate.png";
import Manual1_NewFile from "./Manual1Src/NewFile.png";
import Manual1_Rename from "./Manual1Src/Rename.png";
import Manual1_ChangeNameBlue from "./Manual1Src/ChangeNameBlue.png";
import Manual1_DragFile from "./Manual1Src/DragFile.png";

const Manual1: React.FC = () => {

  return (  
    <>
        <main className={styles.main}>
            <h1 className={styles.title}>Handleiding voor Windows</h1>

            <section>
                <h2 className={styles.subtitle}>Hoe kan je een programma verwijderen van je computer?</h2>
                <ol>
                    <li>
                        <strong>Stap 1:</strong> Navigeer naar de instellingen
                        <ul>
                            <li>Klik op het vergrootglas onderaan je scherm (links of in het midden, afhankelijk van de Windows-versie).</li>
                            <li><img className={styles.smallimage} src={Manual1_Search.src} alt="Vergrootglas icoon om te zoeken" /></li>
                            <li>Typ vervolgens op je toetsenbord “Instellingen”.</li>
                            <li><img className={styles.smallimage} src={Manual1_SearchBar.src} alt="Zoekbalk waarin 'Instellingen' wordt ingetypt" /></li>
                            <li>Klik in de lijst op het tandwiel icoon met “Instellingen”.</li>
                            <li><img className={styles.smallimage} src={Manual1_Settings.src} alt="Tandwiel icoon voor instellingen" /></li>
                        </ul>
                    </li>
                    <li>
                        <strong>Stap 2:</strong> Open het scherm “Apps”
                        <ul>
                            <li>Open het nieuwe venster en klik op het pictogram met vier blokjes en de tekst “Apps”.</li>
                            <li><img className={styles.smallimage} src={Manual1_Apps.src} alt="Pictogram met vier blokjes voor Apps" /></li>
                            <li>Kies de optie “Geïnstalleerde apps”.</li>
                            <li><img className={styles.smallimage} src={Manual1_InstalledApps.src} alt="Scherm met Geïnstalleerde apps" /></li>
                        </ul>
                    </li>
                    <li>
                        <strong>Stap 3:</strong> Vind en verwijder de app
                        <ul>
                            <li>Typ de naam van de app in de zoekbalk bovenaan.</li>
                            <li><img className={styles.smallimage} src={Manual1_SearchApps.src} alt="Zoekbalk waarin de naam van de app wordt ingetypt" /></li>
                            <li>Klik rechts naast de app op de drie puntjes (…).</li>
                            <li><img className={styles.smallimage} src={Manual1_ThreeDots.src} alt="Drie puntjes naast de app" /></li>
                            <li>Kies de optie “Verwijderen”.</li>
                            <li><img className={styles.smallimage} src={Manual1_Uninstall.src} alt="Optie Verwijderen" /></li>
                        </ul>
                    </li>
                </ol>
            </section>

            <section>
                <h2 className={styles.subtitle}>Hoe kan je jouw Windows updaten?</h2>
                <ol>
                    <li>
                        <strong>Stap 1:</strong> Navigeer naar de instellingen
                        <ul>
                            <li>Klik op het vergrootglas onderaan je scherm (links of in het midden, afhankelijk van de Windows-versie).</li>
                            <li><img className={styles.smallimage} src={Manual1_Search.src} alt="Vergrootglas icoon om te zoeken" /></li>
                            <li>Typ op je toetsenbord “Instellingen”.</li>
                            <li><img className={styles.smallimage} src={Manual1_SearchBar.src} alt="Zoekbalk waarin 'Instellingen' wordt ingetypt" /></li>
                            <li>Klik in de lijst op het tandwielpictogram met “Instellingen”.</li>
                            <li><img className={styles.smallimage} src={Manual1_Settings.src} alt="Tandwiel icoon voor instellingen" /></li>
                        </ul>
                    </li>
                    <li>
                        <strong>Stap 2:</strong> Open het menu “Windows Update”
                        <ul>
                            <li>Klik onderaan links op de optie “Windows Update”.</li>
                            <li><img className={styles.smallimage} src={Manual1_WindowsUpdate.src} alt="Scherm met Windows Update" /></li>
                        </ul>
                    </li>
                    <li>
                        <strong>Stap 3:</strong> Controleer op updates
                        <ul>
                            <li>Kijk of er een nieuwe update beschikbaar is.</li>
                            <li><img className={styles.smallimage} src={Manual1_CheckForUpdates.src} alt="Knop om te controleren op updates" /></li>
                            <li>Klik op “Controleren op updates” om zeker te zijn.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Stap 4:</strong> Installeer en laat Windows updaten
                        <ul>
                            <li>Klik op “Installeren” als er een update is.</li>
                            <li>Laat de computer met rust tijdens de update.</li>
                            <li><img className={styles.smallimage} src={Manual1_YouareUptoDate.src} alt="Melding dat Windows up-to-date is" /></li>
                        </ul>
                    </li>
                </ol>
            </section>

            <section>
                <h2 className={styles.subtitle}>Hoe maak ik mappen om mijn desktop te organiseren?</h2>
                <ol>
                    <li>
                        <strong>Stap 1:</strong> Maak een nieuwe map
                        <ul>
                            <li>Ga naar je bureaublad en klik met de rechtermuisknop op een lege plek.</li>
                            <li>Kies “Nieuw” en daarna “Folder”.</li>
                            <li><img className={styles.smallimage} src={Manual1_NewFile.src} alt="Optie Nieuw Folder maken" /></li>
                        </ul>
                    </li>
                    <li>
                        <strong>Stap 2:</strong> Geef de map een naam
                        <ul>
                            <li>Klik met de rechtermuisknop op de nieuwe map en kies “Hernoemen”.</li>
                            <li><img className={styles.smallimage} src={Manual1_Rename.src} alt="Optie om map te hernoemen" /></li>
                            <li>Typ de gewenste naam en druk op Enter.</li>
                            <li><img className={styles.smallimage} src={Manual1_ChangeNameBlue.src} alt="Blauwe kader om naam in te typen" /></li>
                        </ul>
                    </li>
                    <li>
                        <strong>Stap 3:</strong> Vul de map
                        <ul>
                            <li>Verplaats bestanden naar de map door ze te slepen.</li>
                            <li><img className={styles.smallimage} src={Manual1_DragFile.src} alt="Bestand slepen naar map" /></li>
                        </ul>
                    </li>
                    <li>
                        <strong>Stap 4:</strong> Open de map
                        <ul>
                            <li>Dubbelklik op de map om deze te openen.</li>
                            <li>Je kunt ook mappen binnen andere mappen maken.</li>
                        </ul>
                    </li>
                </ol>
            </section>
        </main>
    </>
  )
};

export default Manual1;
