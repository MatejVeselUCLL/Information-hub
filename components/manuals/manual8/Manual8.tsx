import styles from './Manual8.module.css';
// import Manual0_light_tower from './Manual0Src/Manual0_light_tower.jpg';
import Manual8_1 from './Manual8Src/ManualN_1.png';
import Manual8_2 from './Manual8Src/ManualN_2.png';
import Manual8_3 from './Manual8Src/ManualN_3.png';
import Manual8_4 from './Manual8Src/ManualN_4.png';
import Manual8_5 from './Manual8Src/ManualN_5.png';
import Manual8_6 from './Manual8Src/ManualN_6.png';

const Manual8: React.FC = () => {

  return (  
    <>

    <main>

    <h1 className={styles.title} >User Manual for Gmail</h1>

    <h2 className={styles.title} >Step 1 - Logging In</h2>
    <img className={styles.mediumimage}  src={Manual8_1.src} alt="Logging In to Gmail" width="605" height="342" />
    <p>Provided that you already have an account for Gmail, simply click on the box and type in your email. After that click on <strong>Next</strong> and on the page that appears, do the same for your password. Click on sign in.</p>

    <h2 className={styles.title} >Step 2 - Sending / Composing an email</h2>
    <img className={styles.mediumimage}  src={Manual8_2.src} alt="Compose Email BUtton" width="306" height="213" />
    <p>Click on the button <strong>Compose</strong> at the top left corner of the screen. After that, a box will appear at the bottom right corner of the screen. Here you can write your message, select which address you want to send the email to, and add any attachments if needed.</p>
    <img className={styles.mediumimage}  src={Manual8_3.src} alt="Composing a New Message in Gmail" width="256" height="196" />
    <p>Click on the field that says <strong>To</strong> and type in the address of the recipient. In the <strong>Subject</strong> field, say the topic of your mail so the recipient can understand the content of the email. Click on the large white space and type in your email. Before clicking on <strong>Send</strong>, click on the “Paper clip” icon next to it to attach any necessary files (these can be photos or any type of document).</p>
    <p>After clicking on the button “Attach files” or “Paper clip,” you will see the file explorer. To navigate simply click on one of the sections shown. Any image or document should be visible on the screen. Once you find the file you want, simply double click on it and it should be attached to the mail.</p>
    <img className={styles.mediumimage}  src={Manual8_4.src} alt="Windows 10 File Explorer" width="605" height="461" />
    <p>You should be able to see your attached document there. After double checking the address of the recipient, your message, and the attached files, you can click on <strong>Send</strong> and the recipient should receive it in a matter of seconds!</p>

    <h2 className={styles.title} >Step 3 - Reading the received mails</h2>
    <img className={styles.mediumimage}  src={Manual8_5.src} alt="Inbox" width="239" height="350" />
    <p>The main screen you see on Gmail is your Inbox / Received mails. You can see it on the left side of the screen. Click on any of the mails to read them.</p>
    <img className={styles.mediumimage}  src={Manual8_6.src} alt="Reading Emails" width="605" height="488" />
    <p>On this screen when you click on a mail, you can see the sender, their email address, and any attachments that they added. You can click on an attachment to view or download it. Under the attachments you can click on the reply button to immediately reply to the message or forward button to send that same email to another person.</p>

    <h2 className={styles.title} >Practice makes perfect!</h2>
    <p>Repeat these tasks until you feel confident and comfortable:</p>
    <ul className={styles.ul} >
        <li className={styles.li} ><strong>Task 1</strong>: Send an email to yourself with the subject <em>“Test Email”</em> and attach any file from your “Documents” folder.</li>
        <li className={styles.li} ><strong>Task 2</strong>: Try attaching two files to the same email.</li>
        <li className={styles.li} ><strong>Task 3</strong>: Format the email body with bold text and a hyperlink to <a href="http://www.gmail.com" target="_blank">www.gmail.com</a>.</li>
    </ul>
	<p><strong>Glossary:</strong></p>
	<ul>
		<li><strong>Compose</strong>: The button you click to start writing a new email.</li>
		<li><strong>Recipient</strong>: The person you are sending the email to.</li>
		<li><strong>Attachment</strong>: A file (like a document or picture) added to your email.</li>
		<li><strong>File System</strong>: The place where all your files and folders are stored on your computer.</li>
		<li><strong>Forward</strong>: Is used when you want to send the email you received to someone else. The original sender won’t be notified unless you mention them in the message.</li>
		<li><strong>Reply</strong>: Is used when you want to respond directly to the person who sent you the email. Your message will go only to them (unless they’ve included others in the email).</li>
	</ul>
	<p> <h3><strong>Advanced tips:</strong></h3> </p>
	<p><strong>Keyboard Shortcuts:</strong></p>
	<ul>
		<li><strong>Ctrl + Enter</strong>: Send email.</li>
		<li><strong>Ctrl + Shift + C</strong>: Add a CC recipient.</li>
		<li><strong>Ctrl + K</strong>: Insert a link.</li>
		<li><strong>Ctrl + B</strong>: Use bold.</li>
		<li><strong>Ctrl + I</strong>: Use italics.</li>
		<li><strong>Ctrl + C</strong>: Copy</li>
		<li><strong>Ctrl + V</strong>: Paste</li>
	</ul>
	<p><strong>File Attachment Methods:</strong></p>
	<p>Drag-and-drop files directly into the email.</p>
	<p>Attach button.</p>
	<p>Use copy-paste shortcuts (Ctrl + C and Ctrl + V) for files.</p>
	<p>Cloud storage links.</p>
	<p>Inserting Inline Images (It looks like a part of the email)</p>

    </main>
    </>
    )
};

export default Manual8;