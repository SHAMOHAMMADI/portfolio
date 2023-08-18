import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import styles from "./Home.module.css";

import image2 from "../img/2.jpg";
import image3 from "../img/3.jpg";
import image4 from "../img/4.jpg";
import image5 from "../img/5.jpg";
import { Link } from "react-router-dom";

// carousel
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export default function Home() {
  return (
    <div>
      <NavBar />

      <div className={styles.Home}>
        <div className={styles.Box}>
        </div>
          <div className={styles.header}>
            <h1>Design & Web Development</h1>
          </div>
          <div>
            <pre>
              <h3>The only true wisdom is in knowing you know nothing.</h3>

              <h3>
                <q>socrates</q>
              </h3>
            </pre>
          </div>
      </div>
      <Footer />
    </div>
  );
}
