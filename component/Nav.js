import Link from "next/link";

import styles from "../component/Nav.module.css";



export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/AddPost">
            <a>Add post</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
