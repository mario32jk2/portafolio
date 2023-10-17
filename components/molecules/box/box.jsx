import styles from './box.module.css'

export const Box = ({color, children}) => {
    return(
        <article className={styles.ageContainer} style={{backgroundColor:color,}}>
                  {children}
        </article>
    )
}