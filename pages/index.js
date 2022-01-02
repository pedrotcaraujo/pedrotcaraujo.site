import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pedro Araujo</title>
        <meta name="description" content="Pedro Araujo - Software Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Pedro Araujo
        </h1>
        <p>Hey, I am a Software Engineer and this is my personal decentralized website</p>
      </main>
    </div>
  )
}
