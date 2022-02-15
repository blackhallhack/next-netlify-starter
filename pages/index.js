import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>핵메타 배그핵 서든핵 옵치핵 최저가 판매</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="시장점유율 1위 핵메타" />
        <p className="description">
          사이트 바로가기<code>핵메타.com</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
