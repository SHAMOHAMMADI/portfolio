
import React from 'react'
import {Link} from 'react-router-dom'

import image2 from '../img/lowPic/website.png'
import image3 from '../img/lowPic/website.png'
import image4 from '../img/lowPic/website.png'
import image5 from '../img/lowPic/website.png'

import styles from './SlideShow.module.css'


// carousel
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

export default function SlideShow() {
  return (
    <div>
        <div className={styles.SlideShow}>

    <AliceCarousel autoPlay infinite  autoPlayInterval="3000" >

<p><Link to="/home"><img src={image2} alt="test2"  className={styles.SlideImages}/></Link></p>
<p><Link to="/home"><img src={image3} alt="test3" className={styles.SlideImages}/></Link></p>
<p><Link to="/home"><img src={image4} alt="test4" className={styles.SlideImages}/></Link></p>
<p><Link to="/home"><img src={image5} alt="test5" className={styles.SlideImages}/></Link></p>
  </AliceCarousel>
        </div>
    </div>
  )
}
