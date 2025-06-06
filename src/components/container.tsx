import styles from './container.module.css'

export default function Container({children}:any){
    return(
        <div className={styles.parentContainer}> {children}</div>
    )
}