import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {Carousel} from 'react-responsive-carousel'


export default function Home() {
  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.leftNav}>
          <img src="logo.png"/>
        </div>
        <ul className={styles.rightNav}>
          <li><a href="#wear">925.Wear</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>
      <div id="wear" className={styles.firstSection}>
        <Carousel showThumbs={false} autoPlay>
          <div>
            <img src="firstpic.png"/>
          </div>
          <div>
            <img src="secondpic.png"/>
          </div>
          <div>
            <img src="thirdpic.png"/>
          </div>
          <div>
            <img src="fourthpic.png"/>
          </div>
        </Carousel>
      </div>
      <div id="about" className={styles.secondSection}>
        <div className="collectionHeading">
          Collection 01:
        </div>
        <div className="collectionTitle">

        </div>
      </div>
      <div className={styles.thirdSection}>

      </div>
    </div>
  )
}
