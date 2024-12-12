import styles from './Manual4.module.css';

import Manual4_send from './Manual4Src/ManualN_send.png';
import Manual4_search from './Manual4Src/ManualN_search.png';
import Manual4_type from './Manual4Src/ManualN_type.png';
import Manual4_text from './Manual4Src/ManualN_text.png';

const Manual4: React.FC = () => {

  return (  
    <>

    <main className={styles.main}>

        <h1 className={styles.title}>Manual for Receiving and Sending Messages</h1>
        <p className={styles.author}>Princess Blessing, 10. December 2024</p>
        
        <section>
          <h2 className={styles.subtitle}>In this Manual</h2>
          <ol>
            <li><a href="#introduction">Introduction</a></li>
            <li><a href="#1-step">1.1 Sending a Message:</a></li>
            <li><a href="#2-step">1.2 Receiving a Message:</a></li>
            <li><a href="#3-step">1.3 Sending Photos and Videos:</a></li>
          </ol>
        </section>


        <section>
          <h2>Introduction</h2>
          <p>
            This manual is designed to help elderly users and their supervisors navigate
            WhatsApp, a free and easy-to-use app for staying connected with family and
            friends. We'll cover how to receive and send messages.
            It offers clear, step-by-step instructions with visual aids and uses simple, easy-
            to-understand language.
            The manual is only available in:
            A printable version with images and step-by-step guidance</p>
        </section>


        <section>
          <h2 className={styles.subtitle} id="1-step">1.1 Sending a Message:</h2>
          <p>1. Open WhatsApp and go to the Chats tab.</p>
          <img src={Manual4_send.src} alt="" />
          <p>2. In the search bar type the name of the person you are
            contacting and click
            their name when it appears.</p>
            <img src={Manual4_search.src} alt="" />
            <p>3. Type out your message on the keyboard. To include an emoji in your message,
              press the smiley face in the bottom left corner of the screen.</p>
              <img src={Manual4_type.src} alt="" />
              <p>4.  When you are ready to send your message press the blue paper plane button</p>
              <img src={Manual4_text.src} alt="" />


              <p>💡 A single grey tick means your message was successfully sent
                Two grey ticks means your message was successfully delivered to your
                recipient's phone.
                Two blue ticks means the recipient has read your message.</p>
                
                <strong>Great job! You've just sent your first message.</strong>
        </section>


        <section>
          <h2 className={styles.subtitle} id="2-step">1.2 Receiving a Message:</h2>
          <p>1. When you receive a message, you'll see a notification on your screen.</p>
          <p>2. Tap the notification to open WhatsApp and read the message.</p>
        </section>


        <section>
          <h2 className={styles.subtitle} id="3-step">1.3 Sending Photos and Videos:</h2>
          <p>1. In the chat, tap the paperclip icon.</p>
          <p>2. Choose Gallery to select a photo or video.</p>
          <p>3. Tap the send button to share it.</p>
        </section>
  
    </main>

    </>
    )
  }

export default Manual4;