import React from 'react'
import Image from 'next/image'
import styles from './contactPage.module.css'
function contact() {
  return (
    <div className={styles["contact-us-section"]}>
      <div className={styles["contact-us-container"]}>
        <div className={styles["contact-us-content"]}>
          <h1>Contact Us</h1>
          <p>If you have any questions, feel free to reach out. We are here to help!</p>

          <div className={styles["contact-info"]}>
            <p><strong>Email:</strong> support@example.com</p>
            <p><strong>Phone:</strong> +123 456 7890</p>
            <p><strong>Address:</strong> 123 Travel Road, XYZ City</p>
          </div>
          <form className={styles["subscribe-form"]}>
            <label htmlFor="email">Get special offers and more:</label>
            <input  type="email"  id="email"  placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        <div className={styles["contact-us-image"]}>
          <Image 
            src="/main.jpg" 
            alt="Contact Us Image" 
            width={500} 
            height={500} 
            className={styles["image-style"]}
          />
        </div>
      </div>
    </div>
  )
}

export default contact
