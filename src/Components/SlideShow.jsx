
import React from 'react'
import {Link} from 'react-router-dom'

import image2 from '../img/2.jpg'
import image3 from '../img/3.jpg'
import image4 from '../img/4.jpg'
import image5 from '../img/5.jpg'

import styles from './SlideShow.module.css'


// carousel
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

export default function SlideShow() {
  return (
    <div>
        <div className={styles.SlideShow}>

    <AliceCarousel autoPlay infinite  autoPlayInterval="2000" >

<p><Link to="/home"><img src={image2} alt="test2"  className={styles.SlideImages}/></Link></p>
<p><Link to="/home"><img src={image3} alt="test3" className={styles.SlideImages}/></Link></p>
<p><Link to="/home"><img src={image4} alt="test4" className={styles.SlideImages}/></Link></p>
<p><Link to="/home"><img src={image5} alt="test5" className={styles.SlideImages}/></Link></p>
  </AliceCarousel>
        </div>
    </div>
  )
}
