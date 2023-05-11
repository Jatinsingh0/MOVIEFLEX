import styles from "../styles/navbar.module.css"
import Image from "next/image"
import Link from 'next/link'
import Nav from "./Nav"


const Header = () => {
  return (
    <header className={styles.main_header}>
        <div className={styles.navbar_brand}>
        <Link href={"/"}>
            <Image src="/Moviesflix.jpg" alt="logo image" width={200} height={100}/>
        </Link>
        </div>

        <Nav />
    </header>
  );
};

export default Header