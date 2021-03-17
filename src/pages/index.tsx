import dynamic from 'next/dynamic'

import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'

const Map = dynamic(() => import('components/Map'), { ssr: false })

const Home: React.FC = () => {
  return (
    <Map
      places={[
        {
          id: '2',
          name: 'Rio de Janeiro',
          slug: 'rio-de-janeiro',
          location: {
            latitude: 35,
            longitude: 0
          }
        },
        {
          id: '2',
          name: 'Rio de Janeiro',
          slug: 'rio-de-janeiro',
          location: {
            latitude: 50,
            longitude: 0
          }
        }
      ]}
    />
  )
}

export default Home
