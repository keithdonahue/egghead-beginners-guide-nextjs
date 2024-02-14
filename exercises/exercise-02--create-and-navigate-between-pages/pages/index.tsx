import Link from 'next/link'

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home page!</h1>
      <Link href="/about">about</Link>
      <br />
      <a href="/about">about</a>
      {/* ✍️ put a link to the About page */}
    </div>
  )
}

export default Home
