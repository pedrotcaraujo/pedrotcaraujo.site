import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pedro Araujo</title>
        <meta name="description" content="Pedro Araujo - Software Engineer" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=PT+Sans:400,400italic,700|Abril+Fatface"></link>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Pedro Araujo
        </h1>
        <p className={styles.subtitle}>I am a software engineer who works with <b>JavaScript</b> and this is a <b>decentralized</b> website.</p>
      </main>
      <footer className={styles.footer}>
        <a href="https://www.linkedin.com/in/pedrotcaraujo/">linkedin</a>
        <a href="https://github.com/pedrotcaraujo">github</a>
        <a href="https://twitter.com/pedrotcaraujo">twitter</a>
      </footer>
    </div>
  )
}
