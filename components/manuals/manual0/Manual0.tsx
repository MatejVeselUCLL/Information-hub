import styles from './Manual0.module.css';
import Manual0_light_tower from './Manual0Src/Manual0_light_tower.jpg';

const Manual0: React.FC = () => {

  return (  
    <>
      <main className={styles.main}>


        <h1 className={styles.title}>Creating a User Manual Template</h1>
        
        <section>
          <h2 className={styles.subtitle}>In this Manual</h2>
          <ol>
            <li><a href="#1-step">1. Step</a></li>
            <li><a href="#2-step">2. Step</a></li>
            <li><a href="#3-step">3. Step</a></li>
            <li><a href="#available-classes">Available classes</a></li>
          </ol>
        </section>

        <section>
          <p>We are gathering user manuals for the Information Hub website. This is a template (and a simple example of a manual) that you use to create your own user manual with HTML and CSS.</p>
        </section>

        <section>
          <h2 className={styles.subtitle} id="1-step">1. Step</h2>
          <p>Create your manual in the <em>ManualN.html</em>.</p>
          <p>Put HTML only inside of <strong>main</strong> tag.</p>
          <p>No inline CSS!</p>
          <p>Put images into <em>Manual1Src</em> folder.</p>
        </section>

        <section>
          <h2 className={styles.subtitle} id="2-step">2. Step</h2>
          <p>Add CSS styling into <em>ManualX.module.css</em> file.</p>
          <p>Try to only use the <em>pre-made classes</em> from CSS.</p>
          <p>Try not to change colors and font.</p>
          <p>Make the design responsive.</p>
          <p>Do not try to make it nice, make it clear! General styling like fonts, background, text size may be changed later by the team of developers.</p>
        </section>

        <section>
          <h2 className={styles.subtitle} id="3-step">3. Step</h2>
          <p>Do not change file names.</p>
          <p>Zip the .html and .css files and send it to <em>matej.vesel@student.ucll.be</em>.</p>
        </section>

        {/* <!-- Add the operating system for which the manual is made for. If the manual is meant for multiple systems, make multiple manuals, one for each system. -->
        <!-- Operating System: XXX -->
        <!-- E.g.: Windows 10, Fedora 41, macOS Sequoia. --> */}

        
        <section>
          <h2 className={styles.subtitle} id="available-classes">Available CSS classes</h2>

          <p>.title</p>
          <h1 className={styles.title}>This is a Title</h1>

          <p>.subtitle</p>
          <h2 className={styles.subtitle}>This is a subtitle</h2>

          <p>.bigimage</p>
          <img className={styles.bigimage} src={Manual0_light_tower.src} alt='light tower'/>

          <p>.mediumimage</p>
          <img className={styles.mediumimage} src={Manual0_light_tower.src} alt='light tower'/>

          <p>.smallimage</p>
          <img className={styles.smallimage} src={Manual0_light_tower.src} alt='light tower'/>

          <p>.bigimagecentered</p>
          <img className={styles.bigimagecentered} src={Manual0_light_tower.src} alt='light tower'/>

          <p>.mediumimagecentered</p>
          <img className={styles.mediumimagecentered} src={Manual0_light_tower.src} alt='light tower'/>

          <p>.smallimagecentered</p>
          <img className={styles.smallimagecentered} src={Manual0_light_tower.src} alt='light tower'/>

        </section>



      </main>
    </>
  );
};
export default Manual0;