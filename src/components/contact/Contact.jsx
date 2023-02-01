import React from "react";
import styles from "./Contact.module.css";
import contact from "../../assets/contact.png";
import phone from "../../assets/phone.png";
import mail from "../../assets/mail.png";
import address from "../../assets/address.png";

const Contact = () => {
  return (
    <div id="Contact" className={styles.Contact}>
      <div className={styles.Title}>
        <p>CONTACT US</p>
      </div>
      <div
        className={styles.details}
        style={{ backgroundImage: `url(${contact})` }}
      >
        <div className={styles.phone}>
          <img src={phone} alt="" />
          <p>+91 6382025215</p>
        </div>
        <div className={styles.email}>
          <img src={mail} alt="" />
          <p>medizo@helpdisk.in</p>
        </div>
        <div className={styles.address}>
          <img src={address} alt="" />
          <p>Anna Nagar , Chennai</p>
        </div>
      </div>
      <div className={styles.map}>
        <iframe
          title="location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.25885647086!2d80.203834!3d13.082774199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52641c2c706027%3A0x60003914cb59f0aa!2s4th%20Ave%2C%20AL%20Block%2C%20Anna%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu%20600040!5e0!3m2!1sen!2sin!4v1675265069344!5m2!1sen!2sin"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
