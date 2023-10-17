import styles from './spotify.module.css'

export const Spotify = () => {
    return(
        <div className={styles.containerspotify}>
        <iframe style={{borderRadius:'1.125rem'}} src="https://open.spotify.com/embed/playlist/0AGauj0ss0BbzbCnFV55t3?utm_source=generator&theme=0"  allowFullScreen className={styles.spotify}
        ></iframe>

        </div>
    )
}