import styles from './Manual1.module.css';

const Manual1: React.FC = () => {

  return (  
    <>
      <main className={styles.main}>


        <h1>Creating a User Manual Template</h1>
        
        <section>
          <p>We are gathering user manuals for the Information Hub website. This is a template (and a simple example of a manual) that you use to create your own user manual with HTML and CSS.</p>
        </section>

        <section>
          <h2>1. Step</h2>
          <p>Create your manual in the <em>ManualN.html</em>.</p>
          <p>Put HTML only inside of <strong>main</strong> tag.</p>
          <p>No inline CSS!</p>
        </section>

        <section>
          <h2>2. Step</h2>
          <p>Add CSS styling into <em>ManualX.module.css</em> file.</p>
          <p>Try not to change colors, font.</p>
          <p>Make the design responsive.</p>
          <p>Do not try to make it nice, make it clear! General styling like fonts, background, text size may be changed later.</p>
        </section>

        <section>
          <h2>3. Step</h2>
          <p>Do not change file names.</p>
          <p>Zip the .html and .css files and send it to <em>matej.vesel@student.ucll.be</em>.</p>
        </section>

        {/* <!-- Add the operating system for which the manual is made for. If the manual is meant for multiple systems, make multiple manuals, one for each system. -->
        <!-- Operating System: XXX -->
        <!-- E.g.: Windows 10, Fedora 41, macOS Sequoia. --> */}



      </main>
    </>
  );
};
export default Manual1;