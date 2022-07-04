import Image from "next/image"
import Link from "next/link"

type Props = {}

const Header = (props: Props) => {
  return (
    <header className="bg-black flex items-center justify-between px-5 py-3 md:px-30 lg:px-60">
        <div className="w-14 object-contain cursor-pointer">
          <Link href="/">
          <img src="/sedslogo.svg"/>
          </Link>
        </div>
        <div className="hidden md:inline-flex items-center space-x-5 text-white">
          <h3>About</h3>
          <h3>Team</h3>
          <h3>Projects</h3>
          <h3>Events</h3>
          <h3>Blog</h3>
        </div>
    </header>
  )
}

export default Header