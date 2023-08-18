import react from 'react'
import styles from './Footer.module.css'
import {Link} from 'react-router-dom'


function Footer () {
    return (
        <>
        <div className={styles.Footer}>
            
            <Link to="/Home">Mustafa Shamohammadi</Link>
            
        </div>
        </>
    )
}


export default Footer;