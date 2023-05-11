import ContactCard from "../components/contactCard";
import styles from "../styles/contact.module.css"
import ContactForm from "../components/contactForm";

export const metadata = {
  title: 'Contact',
}
  
const page = () => {
  return (
    <>
      <div className={styles.container}>
        <ContactCard />

      <section className={styles.contact_section}>
        <h2>We'd love to hear <span> from you </span></h2>
         <ContactForm />
       </section>
       </div>
    </>
  )
}

export default page