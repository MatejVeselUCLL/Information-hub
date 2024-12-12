import styles from './Manual5.module.css';

import Manual5_call from './Manual5Src/ManualN_call.png';
import Manual5_call_icon from './Manual5Src/ManualN_call_icon.png';
import Manual5_contact from './Manual5Src/ManualN_contact.png';
import Manual5_voice_call from './Manual5Src/ManualN_voice_call.png';
import Manual5_video_call from './Manual5Src/ManualN_video_call.png';
import Manual5_receive_call from './Manual5Src/ManualN_receive_call.png';
import Manual5_decline_call from './Manual5Src/ManualN_decline_call.png';

const Manual5: React.FC = () => {

  return (  
    <>

  <main className={styles.main}>


      <h1 className={styles.title}>Manual for Receiving and Making Calls</h1>
      <p className={styles.author}>Princess Blessing, 10. December 2024</p>
      
      <section>
        <h2 className={styles.subtitle}>In this Manual</h2>
        <ol>
          <li><a href="#introduction">Introduction</a></li>
          <li><a href="#1-step">1: Getting Started with WhatsApp</a></li>
          <li><a href="#2-step">2: Making and Receiving Calls</a></li>
          {/* <!-- <li><a href="#3-step">1.3 Sending Photos and Videos:</a></li> -->
          <!-- <li><a href="#available-classes">Available classes</a></li> --> */}
        </ol>
      </section>


      <section>
        <h2>Introduction</h2>
        <p>
          This manual is designed to help elderly users and their supervisors navigate WhatsApp, a free and easy-to-use app for staying connected with family and friends. We'll cover how to make and receive calls. 

It offers clear, step-by-step instructions with visual aids and uses simple, easy-to-understand language. 

The manual is only available in:</p>

<li>          A printable version with images and step-by-step guidance.</li>
      </section>


      <section>
        <h2 className={styles.subtitle} id="1-step">1: Getting Started with WhatsApp</h2>
        <h3>1.1 Opening WhatsApp:</h3>
        <p>1. Find the WhatsApp icon on your smartphone's home screen. It looks like a green speech bubble with a white phone inside.
        </p>
        <p>  2. Tap the icon to open WhatsApp.</p>
        <h3>1.2 Understanding the Home Screen:</h3>
        <ul>
          <li>Chats:This is where you see all your conversations.</li>
          <li>Status:Here, you can see updates from your contacts.</li>
          <li> Calls:This shows your call history and allows you to make calls.</li>
        </ul>
        <h3>1.3 Logging In:</h3>
        <p>If prompted, enter your phone number and follow the on-screen instructions to log in.</p>
      </section>


      <section>
        <h2 className={styles.subtitle} id="2-step">2: Making and Receiving Calls</h2>
        <h3>2.1 Making a Call:</h3>
        <p>1. Open WhatsApp and go to the Calls tab.</p>
        <img src={Manual5_call.src} alt="" />
        <p>2. Click on the call icon in the bottom right hand corner.</p>
        <img src={Manual5_call_icon.src} alt="" />
        <p>3. This will show you all your contacts either search for the contact you want to call by clicking on the search icon or scroll until you find their name.</p>
        <img src={Manual5_contact.src} alt="" />
        <p>4. You can voice call them by clicking on the phone icon next to the person's name.</p>
        <p>1. When you receive a message, you'll see a notification on your screen.</p>
       <img src={Manual5_voice_call.src} alt="" />
       <p>Or you can video call them by clicking on the video icon next to the person's name.</p>
        <img src={Manual5_video_call.src} alt="" />

        <p>Made your first call? Amazing!</p>

        <h3>2.2 Receiving a Call:</h3>
        <p>1. When you receive a call, a screen will appear with the caller's name and a green button and to answer, swipe the green button to the right.</p>
        <img src={Manual5_receive_call.src} alt="" />
        <p>2. To decline, click the red button.</p>
        <img src={Manual5_decline_call.src} alt="" />

        <h3>2.3 Ending a Call:</h3>
        <p>1. To end a call, tap the red phone icon too.</p>
      </section>
  

    </main>
    </>
  )
};

export default Manual5;