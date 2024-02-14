// ✍️ import the Image component from 'next/image'
import Image from 'next/image'

import lazar from '../lazar.png'

const worms = 'https://pbs.twimg.com/profile_images/454658481/us_400x400.png'

// ✍️ import "lazar.png" statically

const Home = () => {
  return (
    <>
      <Image src={lazar} alt="Lazar Nikolov" />
      <Image src={lazar} alt="Lazar Nikolov" />
      <Image src={lazar} alt="Lazar Nikolov" />
      <Image src={lazar} alt="Lazar Nikolov" />
      <Image src={worms} alt="worms" width={550} height={550} />
      <Image src={lazar} alt="Lazar Nikolov" />
    </>
  )
}

export default Home
