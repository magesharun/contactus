import styles from '../ContactForm/ContactForm.module.css'
import Button from '../Button/Button'
import { MdMessage } from "react-icons/md"; 
import { IoCall } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";



const ContactForm = () => {
  return (
    <section className={styles.container}>
    <div className={styles.contact_form}>
      <div className={styles.top_btn}>
      <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px"/>}></Button>
    <Button text="VIA Call" icon={<IoCall fontSize="24px"/>}> </Button>
      </div>
      <Button 
      isOutline={true}
      text="VIA Email Form" 
      icon={<MdOutlineMail  fontSize="24px"/>}> </Button>
    </div>
    <div className={styles.contact_image}></div>
    
    
    </section>
  )
}

export default ContactForm