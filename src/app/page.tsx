import Image from 'next/image'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '../components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Reddit</title>
      </Head>

      <Header />

      <h1>NextJS Project</h1>


    </div>
  )
}
