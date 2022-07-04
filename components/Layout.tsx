import Footer from "./Footer"
import Header from "./Header"

type Props = {
  children
}

const Layout = ({children}: Props) => {
  return (
    <>
    <Header/>
    <div className="max-w-5xl mx-auto px-5 lg:px-0">
    <div className="flex-col items-center py-5">
      {children}
    </div>
    <Footer/>
    </div>
    </>
  )
}

export default Layout