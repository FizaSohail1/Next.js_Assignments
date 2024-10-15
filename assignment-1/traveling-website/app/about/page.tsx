'use client'
import React from 'react'
import Image from 'next/image'
import styles from './about.module.css';

const handelButtton = () =>{
  return alert('Ticket Booked Successfully!')
}
function About() {
  return (
    <div className={styles["About-us"]}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>About Us</h1>
          <p>At Our Website, we are passionate about helping you discover the worlds most stunning destinations. Whether you are a beach lover, an adventure seeker, or a culture enthusiast, our mission is to guide you toward unforgettable experiences in the most beautiful corners of the globe.<br></br><br></br>Founded by a team of avid travelers, our website is designed to be your goto resource for expert travel advice, breathtaking destinations, and must-see hidden gems. We provide insider tips, curated itineraries, and travel inspiration to help you make the most of every journey.<br></br><br></br>Let us be your travel companion as you explore new horizons, immerse yourself in different cultures, and create memories that will last a lifetime. Your next adventure awaits—start planning with us today</p>
          </div>
          <div className={styles.image}>
          <Image 
            src="/about.jpg" 
            alt="Contact Us Image" 
            width={500} 
            height={500} 
            className={styles["image-style"]}
          />
        </div>
      </div>

      <div className={styles.heading}>
        <h1>Book Your Ticket Today!</h1>
      </div>
      <form className={styles["BookTicket-form"]} id='bookTicket'>
          <label htmlFor="name">Name:</label>
          <input  type="text"   placeholder="Enter your Full name" required />
          <label htmlFor="email">Email Address:</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required/>
  
          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required/>

          <label htmlFor="destination">Destination:</label>
         <select id="destination" name="destination" required>
          <option value="">Select your destination</option>
          <option>Paris</option>
          <option>Dubai</option>
          <option>Italy</option>
          <option>Istambul</option>
           <option>New York</option>
           <option>Tokyo</option>
           <option>Sydney</option>
           <option>London</option>
         </select>
          <label htmlFor="travel-date">Travel Date:</label>
           <input type="date" id="travel-date" name="travel-date" required/>
            <button type="submit" onClick={handelButtton}>Book Ticket</button>
          </form>
    </div>
  )
}

export default About

