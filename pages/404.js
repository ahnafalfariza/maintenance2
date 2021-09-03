import Head from 'next/head'
import { Maintenance } from '.'

export default function Home() {
  const image =
    'https://ipfs.fleek.co/ipfs/bafybeiayehxcsrmm6tz7gjszkpc6vwl43z7ahceb7x7te34pdfmgaazlie'
  const title = 'Paras 2.0 - Coming Soon'
  const description = 'Paras 2.0 - Coming Soon'
  const url = 'https://paras.id'

  return (
    <div className="flex flex-col min-h-screen py-4 bg-black">
      <Head>
        <title>Paras 2.0 - Coming Soon</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta name="robots" content="index, follow" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={image} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className="fixed inset-0 opacity-75"
        style={{
          zIndex: 0,
          backgroundImage: `url('/bg.jpg')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      />
      <Maintenance />
    </div>
  )
}
