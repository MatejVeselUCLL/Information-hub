import styles from './Manual6.module.css';

const Manual6: React.FC = () => {

  return (  
    <>

  <main className={styles.main}>


      <h1 className={styles.title}>Handling Notifications</h1>
      <p className={styles.author}>Princess Blessing, 10. December 2024</p>
      
      <section>
        <h2 className={styles.subtitle}>In this Manual</h2>
        <ol>
          <li><a href="#introduction">Introduction</a></li>
          <li><a href="#1-step">1: Handling Notifications</a></li>
          <li><a href="#2-step">2: Avoiding Common Mistakes</a></li>
          <li><a href="#3-step">3: Materials for Supervisors</a></li>
        </ol>
      </section>


      <section>
        <h2>Introduction</h2>
        <p>
          This manual is designed to help elderly users and their supervisors navigate
WhatsApp, We'll cover how to handle notifications, avoid common mistakes and
provide some guidance to the supervisors.</p>

<p>The manual is only available in:</p>

<li>          A printable version with images and step-by-step guidance.</li>
      </section>


      <section>
        <h2 className={styles.subtitle} id="1-step">1: Handling Notifications</h2>
        <h3>1.1 Understanding Notifications:</h3>
        <p>Notifications appear at the top of your screen when you receive a new
          message or call.
        </p>
        <p>They usually show the sender's name and a preview of the message.</p>
        <h3>1.2 Managing Notifications:</h3>
        <p>1. To view a notification, swipe down from the top of your screen.</p>
        <p>2. Tap the notification to open WhatsApp and see the full message.</p>
        <p>3. If you want to clear the notification, swipe it to the left or right.</p>
        <h3>1.3 Customizing Notifications:</h3>
        <p>1.  Open WhatsApp and go to Settings</p>
        <p>2. Tap Notifications to customize how you receive alerts</p>
      </section>


      <section>
        <h2 className={styles.subtitle} id="2-step">2: Avoiding Common Mistakes</h2>
        <h3>2.1 Accidental App Openings:</h3>
        <p>If you accidentally open an app like the gallery, press the home button to
          return to the home screen</p>
        <p>Practice tapping icons carefully to avoid mistakes.</p>
        <h3>2.2 Understanding Icons:</h3>
        <p>Familiarize yourself with common icons: the phone icon for calls, the chat
          bubble for messages, and the camera for photos.</p>
          <h3>2.3 Handling Hesitation:</h3>
          <p>If you're unsure about a notification, it's okay to ignore it until you feel more
            confident.</p>
            <p>Ask a family member for help if you're stuck.</p>
            <h3>2.4 Using Voice Commands:</h3>
            <p>If you find typing difficult, use voice commands by tapping the microphone
              icon in the chat box.</p>
      </section>
      <section>
        <h2 className={styles.subtitle} id="3-step">3: Materials for Supervisors</h2>
        <h3>Setup Support:</h3>
        <p>Install WhatsApp and verify the user's phone number.</p>
        <p>Customize accessibility settings (e.g., text size, high contrast).</p>
        <h3>Encourage Independence:</h3>
        <p>Guide users through each step instead of doing it for them.</p>
        <p>Offer positive reinforcement for each success.</p>
        <h3>Troubleshooting Tips:</h3>
        <p>If the user is stuck, show the solution instead of taking over.</p>
        <p>Highlight how to identify icons and notifications.</p>
      </section>
 

    </main>
  </>
  )
};

export default Manual6;
