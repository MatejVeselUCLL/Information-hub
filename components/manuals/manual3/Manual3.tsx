import styles from './Manual3.module.css';

const Manual3: React.FC = () => {

  return (  
    <>
    <main className={styles.main}>

      <h1 className={styles.title}>Nvidia GeForce Experience Manual</h1>
      <p className={styles.author}>Noah Maes, 11 December 2024</p>

      <section>
        <h2 className={styles.subtitle}>Table of Contents</h2>
        <ol>
          <li><a href="#finding-and-downloading">Finding the Nvidia GeForce Experience Website & Downloading the Application</a></li>
          <li><a href="#locating-and-installing">Locating Downloaded Application & Going Through the Installation</a></li>
          <li><a href="#setting-up">Setting-up GeForce Experience for Special Needs</a></li>
          <li><a href="#downloading-drivers">Downloading & Installing the Drivers</a></li>
        </ol>
      </section>

      <section>
        <h2 className={styles.subtitle}>Finding the Nvidia GeForce Experience Website & Downloading the Application</h2>
        <ol>
          <li>Open a browser (Google, Edge, Firefox).</li>
          <li>Type "GeForce Experience" in the search bar and press Enter.</li>
          <li>Find the link that says "Download NVIDIA App for Gamers and Creators" (ensure it contains "www.nvidia.com") and click on it.</li>
          <li>On the page, click the green "Download Now" button and wait for the file to finish downloading.</li>
        </ol>
      </section>

      <section>
        <h2 className={styles.subtitle}>Locating Downloaded Application & Going Through the Installation</h2>
        <ol>
          <li>Open the file explorer by clicking the folder icon on the Taskbar.</li>
          <li>Navigate to the Downloads folder on the left side.</li>
          <li>Find the downloaded file named something like "NVIDIA_app_vxx.x.x.xxx" and double-click it.</li>
          <li>When prompted, click "Yes" to allow the app to make changes.</li>
          <li>Follow the prompts to complete the installation.</li>
        </ol>
      </section>

      <section>
        <h2 className={styles.subtitle}>Setting-up GeForce Experience for Special Needs</h2>
        <ol>
          <li>After installation, choose your preferred driver:</li>
          <ul>
            <li><strong>Game Ready Driver:</strong> For gaming purposes.</li>
            <li><strong>NVIDIA Studio Driver:</strong> For video editing, animation, or graphic design.</li>
          </ul>
          <li>Toggle optional extra features if prompted (not required).</li>
        </ol>
      </section>

      <section>
        <h2 className={styles.subtitle}>Downloading & Installing the Drivers</h2>
        <ol>
          <li>Click on the "Drivers" tab on the left side.</li>
          <li>Click the green "DOWNLOAD" button on the right side and wait for the download to finish.</li>
          <li>Once the download completes, click the green "INSTALL" button and choose "Express installation."</li>
          <li>Wait for the installation to finish (screen flickering during the process is normal).</li>
        </ol>
        <p>You're all done! 🎉</p>
      </section>
      
      {/* <!--Operating System: Windows 10/11--> */}
    </main>
  </>
  )
};

export default Manual3
