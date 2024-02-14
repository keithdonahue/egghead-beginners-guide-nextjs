import { Link } from 'next/link'

const About = () => {
  return (
    <div>
      <h1>Welcome to the About page!</h1>
      <Link href="/">Go back home</Link>
      {/* ✍️ put a link to the About page */}
    </div>
  )
}

export default About
