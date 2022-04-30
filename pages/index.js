import { faGithub, faStackOverflow, faSteam, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from 'next/head'
import Typewriter from '../components/typewriter'

export default function Home() {
  return (
    <div className="idx">
      <Head>
        <title>Liulihaocai - After-hours Developer</title>
        <meta name="description" content="Personal website for Liulihaocai" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      </Head>

      <div className="idx-content">
        <div className="idx-block">
          <div className="idx-title" />
          <div className="idx-text">Liulihaocai, <br /> <span className="type-text"><Typewriter texts={["Java/Kotlin developer.", "on progressing front-end developer.", "gamer."]} cursor="|" /></span></div>
          <div className="idx-center-line" />
          <div className="idx-social">
            <a href="https://github.com/liulihaocai" target="_blank"><FontAwesomeIcon className="idx-icon" icon={faGithub} /></a>
            <a href="https://www.youtube.com/channel/UCVwMDCM2oUvzQthG8EfDpHQ" target="_blank"><FontAwesomeIcon className="idx-icon" icon={faYoutube} /></a>
            <a href="https://steamcommunity.com/profiles/76561199179237723/" target="_blank"><FontAwesomeIcon className="idx-icon" icon={faSteam} /></a>
            <a href="https://stackoverflow.com/users/16676567/liulichan" target="_blank"><FontAwesomeIcon className="idx-icon" icon={faStackOverflow} /></a>
            <a href="https://leetcode.com/liulihaocaiqwq/" target="_blank"><FontAwesomeIcon className="idx-icon" icon={faCode} /></a>
          </div>
        </div>
      </div>
    </div>
  )
}
