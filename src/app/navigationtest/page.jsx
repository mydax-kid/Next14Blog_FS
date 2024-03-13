"use client"
import Link from "next/link"
import { usePathname, useRouter, useSearchParams, useParams } from "next/navigation"

const NavigationTestPage = () => {

  // CLIENT SIDE NAVIGATION
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()
  const searchParams = useSearchParams()

  const q = searchParams.get("q")

  console.log(q)

  const handleClick = ()=>{
    console.log("clicked")
    router.forward()
  }

  return (
    <div>
      <Link href="/" prefetch={false}>Click here</Link>
      <button onClick={handleClick}>Write and Redirect</button>
    </div>
  )
}

export default NavigationTestPage