import SideBar from './ui/sidebar/sidebar'
import Navbar from './ui/navbar/navbar'


interface dashProps {

    children: React.ReactNode
}
const Layout = ({children}: dashProps) => {
  return (
    <div className="container flex">
        <div className="w-96 bg-slate-500/20 p-5 ">
            <SideBar/>
        </div>
        <div className="flex p-5 ">
            <Navbar/>
            {children}
        </div>
    </div>
  )
}

export default Layout