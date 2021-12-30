import styles from '../styles/Navbar.module.css'

function Navbar() {
    return (
        <nav className={styles.nav}>
            <div>
                <ul>
                    <li><a>Logo</a></li>
                    <li><a>Works</a></li>
                    <li><a>Posts</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
