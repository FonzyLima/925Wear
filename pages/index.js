import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
export default function Home() {
  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.leftNav}>
          <img src="logo.png" />
        </div>
        <ul className={styles.rightNav}>
          <li>
            <a href="#wear">925.Wear</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      </nav>
      <div id="wear" className={styles.firstSection}>
        <Carousel showThumbs={false} autoPlay>
          <div>
            <img src="firstpic.png" />
          </div>
          <div>
            <img src="secondpic.png" />
          </div>
          <div>
            <img src="thirdpic.png" />
          </div>
          <div>
            <img src="fourthpic.png" />
          </div>
        </Carousel>
      </div>
      <div id="about" className={styles.secondSection}>
        <div className={styles.collectionHeading}>Collection 01:</div>
        <div className={styles.collectionTitle}>
          <img className={styles.slogan} src="waste.png" />
        </div>
        <Swiper
          className={styles.clotheCarousel}
          spaceBetween={5}
          slidesPerView={4}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide className={styles.card}>
            <img className={styles.clothes} src="green.png" />
            <p className={styles.clotheTitle}>925 Work Polo</p>
            <p className={styles.clothePrice}>Php 1,400</p>
          </SwiperSlide>
          <SwiperSlide className={styles.card}>
            <img className={styles.clothes} src="green.png" />
            <p className={styles.clotheTitle}>925 Work Polo</p>
            <p className={styles.clothePrice}>Php 1,400</p>
          </SwiperSlide>
          <SwiperSlide className={styles.card}>
            <img className={styles.clothes} src="green.png" />
            <p className={styles.clotheTitle}>925 Work Polo</p>
            <p className={styles.clothePrice}>Php 1,400</p>
          </SwiperSlide>
          <SwiperSlide className={styles.card}>
            <img className={styles.clothes} src="green.png" />
            <p className={styles.clotheTitle}>925 Work Polo</p>
            <p className={styles.clothePrice}>Php 1,400</p>
          </SwiperSlide>
          <SwiperSlide className={styles.card}>
            <img className={styles.clothes} src="green.png" />
            <p className={styles.clotheTitle}>925 Work Polo</p>
            <p className={styles.clothePrice}>Php 1,400</p>
          </SwiperSlide>
        </Swiper>
        <div className={styles.secondParagraph}>
          Our first collection features{" "}
          <strong>
            <em>Relaxed Workwear</em>
          </strong>{" "}
          made from a lightweight and breathable cotton-linen blend. Wear it in
          the city or at the beach; on a night out, or on a mellow Sunday
          afternoon. Versatile pieces for the modern Filipino’s ever-changing
          environment
        </div>
      </div>
      <div className={styles.thirdSection}>
        <div className={styles.logopic}>
          <img src="925-main-logo.png" />
        </div>
        <div className={styles.thirdParagraph}>
          925 Studio is a Manila-based design house founded by siblings, Raf and
          Bianca Evangelista. The brand is fueled by their desire to create.
          Thus, 925 Studio was built to house various outlets of expression
          through sub-brands– may it be clothing, music, graphic design, or home
          accessories. 925 is all about doing what you love, or rather, the fear
          of not pursuing it.
        </div>
        <div className={styles.interview}>
          <div className={styles.interviewText}>
            “What’s your biggest fear?” “Getting stuck behind a desk, 9-to-5, 5
            days a week, all year long. Working a job you can’t stand. That shit
            scares me. But that's how it goes, you gotta survive.” 
            (Untitled Interview, n.d.)
          </div>
        </div>
      </div>
    </div>
  );
}
