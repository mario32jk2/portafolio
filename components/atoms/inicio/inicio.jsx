import Link from 'next/link'
import styles from './home.module.css'
import HomeIcon from '@mui/icons-material/Home';

export const Inicio = () =>{
    return(
        <>
        <Link href={'/'} className={styles.link}>
        <div className={styles.nav}>
        <HomeIcon className={styles.homeicon}/>
        </div>
        </Link>
        </>
    )
}