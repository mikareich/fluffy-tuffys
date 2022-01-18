import React from 'react'
import Container from '../components/Container'
import Gallery from '../components/Gallery'
import Layout from '../components/Layout'
import players from '../utils/players'

const Index: React.FC = () => {
  const imagePaths = [
    '/server-image-1.png',
    '/server-image-2.png',
    '/server-image-3.png',
    '/server-image-4.png',
    '/server-image-5.png',
    '/server-image-6.png',
    '/server-image-7.png',
    '/server-image-8.png',
    '/server-image-9.png',
    '/server-image-10.png',
    '/server-image-11.png',
    '/server-image-12.png',
    '/server-image-13.png',
  ]

  return (
    <Layout title="Fluffy Tuffys">
      <Gallery paths={imagePaths} />
      <Container players={players}>
        <h1>Willkommen auf unserem Server!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
          harum, temporibus dolore incidunt cupiditate dicta quibusdam quo quae
          dolorum deleniti eligendi, excepturi assumenda molestiae explicabo ex
          voluptatum deserunt aliquam quos? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Dicta dolorum iusto dolor porro fugiat
          cum ut laudantium voluptas eos laborum nostrum ipsum perspiciatis
          minima enim, illum blanditiis at error quas.
        </p>

        <h2>Unsere Regeln</h2>
        <ul>
          <li>Keine Pornographie</li>
          <li>Keine Rassismus</li>
          <li>Keine Beleidigung</li>
          <li>Keine Spam</li>
          <li>Keine Werbung</li>
          <li>Keine Beleidigung</li>
        </ul>

        <h2>Tasks</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
          quaerat, veniam architecto in illo molestiae quas. Minima voluptatum,
          dolores est aut ratione voluptate quae corporis odio, itaque unde,
          repellat doloribus.
        </p>

        <h2>Waypoints</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam odio
          commodi ipsam laborum dolorum hic dolor unde sequi error illo,
          excepturi reiciendis a sit ad corrupti nesciunt, at iusto odit?
        </p>

        <h2>Über den Server</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
          accusantium quis quasi nam quisquam expedita distinctio architecto
          quod? Quasi, numquam architecto libero earum neque fugit natus est
          accusamus nobis distinctio.
        </p>
      </Container>
    </Layout>
  )
}

export default Index
