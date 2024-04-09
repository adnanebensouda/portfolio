
import Link from 'next/link';
import Illustration from '../components/Illustration';
import styles from '../styles/HomePage.module.css';


export default function HomePage() {

  const tagline = "Software Engineer Developer";
  
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>MY</h1>
          <h1>MAGIC</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Adnane Bensouda</h1>
            <h6 className={styles.bio}>{tagline}</h6>
            <Link href="/projects">
              <button className={styles.button}>View Work</button>
            </Link>
            <Link href="/contact">
              <button className={styles.outlined}>Contact Me</button>
            </Link>
          </div>
          <Illustration className={styles.illustration} />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
