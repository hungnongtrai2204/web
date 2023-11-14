import styles from './styles.module.css'
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.header__content}>
          {/* Logo Website */}
          <div>
            <img className={styles.logo} src="/assets/images/logo.png" alt="logo" />
          </div>

          {/* User */}
          <div className={styles.user}>
            <div className={styles.user__container}>
              <div className={styles.user__infos}>
                <p className={styles.user__text}>Handicrafted by</p>
                <p className={styles.user__name}>Jim HLS</p>
              </div>
            </div>

            <div className={styles.user__container}>
              <div className={styles.user__avatar}>
                <img className={styles.avatar} src="/assets/images/avatar.jpg" alt="Avatar of the user" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
