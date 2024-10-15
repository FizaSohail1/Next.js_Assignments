'use client'

import React, { useState } from 'react'
import styles from './navbar.module.css';
import { FaBars } from 'react-icons/fa';
import Link from 'next/link';

function Navbar() {

  const [menuOpen,setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!menuOpen)
  }
  return (
    <div className="Navbar">
    <nav className={styles.navigation}>
      <div className={styles.logo}>
        <h2>Logo</h2>
      </div>
      <div className={`${styles["nav-items"]} ${menuOpen ? styles.show : ''}`}>
        <ul className={styles.ulList}>
          <li className={styles.list}> <Link href="/">Home</Link></li>
          <li className={styles.list}> <Link href="/destinations">Destinations</Link></li>
          <li className={styles.list}> <Link href="/about">About Us</Link> </li>
          <li className={styles.list}> <Link href="/contact">Contact Us</Link></li>
        </ul>
        <button className={styles.topbtn}><Link href='/about#bookTicket'>Book Ticket</Link></button>
      </div>
      <FaBars onClick={handleToggleMenu} className={styles.icon} />
    </nav>
  </div>

  )
}

export default Navbar
