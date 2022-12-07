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
          <li>925.Wear</li>
          <li>About</li>
        </ul>
      </nav>
      <div className={styles.firstSection}>
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
        </Carousel>
      </div>
    </div>
  )
}
