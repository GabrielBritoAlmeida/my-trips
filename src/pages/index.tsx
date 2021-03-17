import dynamic from 'next/dynamic'

import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'
import LinkWrapper from 'components/LinkWrapper'

const Map = dynamic(() => import('components/Map'), { ssr: false })

const place = {
  id: '1',
  name: 'São José',
  slug: 'sao-jose',
  location: {
    latitude: 0,
    longitude: 0
  }
}

const Home: React.FC = () => {
  return (
    <>
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={[place]} />
    </>
  )
}

export default Home
