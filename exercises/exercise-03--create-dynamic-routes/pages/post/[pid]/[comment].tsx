import { useRouter } from 'next/router'

const Comment = () => {
  const router = useRouter()
  console.log(router.query)
  const { id } = router.query
  return <p>Hello</p>
}

export default Comment
