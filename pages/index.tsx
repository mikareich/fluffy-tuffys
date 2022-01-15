import React from 'react'
import Container from '../components/Container'
import Layout from '../components/Layout'

const Index: React.FC = () => (
  <Layout title="Fluffy Tuffys">
    <Container withPlayerStats>
      <h1>Willkommen auf unserem Server!</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae harum,
        temporibus dolore incidunt cupiditate dicta quibusdam quo quae dolorum
        deleniti eligendi, excepturi assumenda molestiae explicabo ex voluptatum
        deserunt aliquam quos? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Dicta dolorum iusto dolor porro fugiat cum ut
        laudantium voluptas eos laborum nostrum ipsum perspiciatis minima enim,
        illum blanditiis at error quas.
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
        commodi ipsam laborum dolorum hic dolor unde sequi error illo, excepturi
        reiciendis a sit ad corrupti nesciunt, at iusto odit?
      </p>

      <h2>Über den Server</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
        accusantium quis quasi nam quisquam expedita distinctio architecto quod?
        Quasi, numquam architecto libero earum neque fugit natus est accusamus
        nobis distinctio.
      </p>
    </Container>
  </Layout>
)

export default Index
