import styles from './styles.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={`${styles.row} ${styles.about}`}>
          <p className={styles.about__rules}>
            This website as part of Hlsolutions program. The materials contained on this website are procided for
            genaral information only and do not constitute any form ot advice. HLS assumes on no responsibility for the
            accuracy of any particular statement and accepts no liability for any loss or damage which may arise from
            reliance on the information contained on this site.
          </p>

          <p className={styles.about__copyright}>Copyright 2021 HLS</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
