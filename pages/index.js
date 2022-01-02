import Head from 'next/head'
import Header from '../components/Header'
import MainHome from './MainHome'

export default function Home() {
  return (
    <div className="font-readex">
      <Head>
        <title>Sreedhar memorial hospital</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        {/* header */}
        <Header />
        {/* main */}
        <MainHome />
      </div>
    </div>
  )
}
