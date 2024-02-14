// ✍️ import the Link component from 'next/link'
import Link from 'next/link'

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home page!</h1>
      <Link href="/about">About</Link>
      {/* ✍️ put a link to the About page */}
    </div>
  )
}

export default Home
