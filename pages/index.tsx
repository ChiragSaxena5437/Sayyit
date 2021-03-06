import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'

const Home: NextPage = () => {
  return (
    <div className="lg:max-w-6xl max-h-screen overflow-hidden mx-auto">
      <Head>
        <title>SAYYIT</title>
        <link rel="icon" href="/Sayyitbg.png" />
      </Head>

      <main className="grid grid-cols-9">
        <Sidebar />
        <Feed />
        <Widgets />
      </main>
    </div>
  )
}

export default Home
