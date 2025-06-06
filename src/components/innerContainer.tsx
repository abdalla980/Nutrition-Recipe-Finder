import styles from'./innerContainer.module.css'

export default function InnerContainer({ children }:any){
    return <div className={styles.innerContainer}>
        {children}
    </div>
}