import Head from 'next/head'
import styles from './index.module.css'

const About = () => (
  <div className={styles.container}>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <h1>this is about</h1>
  </div>
)

export default About
