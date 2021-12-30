import Navbar from './Navbar.js'

function Layout({children}) {
    return (
        <div>
            <Navbar/>
            {children}
        </div>
    )
}

export default Layout
