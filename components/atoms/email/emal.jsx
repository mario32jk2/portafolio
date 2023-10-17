import styles from './email.module.css'
import MarkunreadIcon from '@mui/icons-material/Markunread';
import SendIcon from '@mui/icons-material/Send';

export const Email = () => {
    return (
        <>
        <div className={styles.containerSeendIcon}>
        <SendIcon className={styles.sendIcon}/>
        </div>
        <div className={styles.contenedorIcons}>
        <MarkunreadIcon className={styles.iconMail}/>
        </div>
        
        </>
    )
}