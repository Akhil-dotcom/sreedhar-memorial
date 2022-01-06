import Head from 'next/head'
import Header from '../components/Header'
import Services from '../components/Services'
import MainHome from '../components/MainHome'
import Doctors from '../components/Doctors'

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
        <Services />
        <Doctors />
      </div>
    </div>
  )
}
