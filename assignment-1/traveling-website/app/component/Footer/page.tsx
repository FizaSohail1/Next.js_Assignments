import React from 'react'
import styles from './footer.module.css';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import Link from 'next/link';

function Footer() {
  return (
    <footer className={styles.Footer}>
     <div className={styles.container}>
      <div className={styles['social-Links']}>
        <ul>
          <li><FaFacebook/></li>
          <li><FaInstagram/></li>
          <li><FaTwitter/></li>
          <li><FaYoutube/></li>
        </ul>
      </div>
      <div className={styles.pageLinks}>
        <ul>
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/destinations'>Destinations</Link></li>
          <li><Link href='/about'>About Us</Link></li>
          <li><Link href='/contact'>Contact Us</Link></li>
        </ul>
      </div>
     </div>
     <hr />
     <div className={styles.bottom}>
      <p>&copy; Traveling Website 2024 | Designed By Fiza Sohail</p>
     </div>
    </footer>

  )
}

export default Footer
