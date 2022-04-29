import Head from 'next/head'
import Typewriter from '../components/typewriter'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Liulihaocai - After-hours Developer</title>
        <meta name="description" content="Personal website for Liulihaocai" />
      </Head>

      <div>Welcome to Next.js!</div>
      <br />
      <Typewriter texts={[""]} cursor="|" />
    </div>
  )
}
