import { NavLink } from 'react-router-dom'

export default function Navbar() {

    return (
        <nav className="navbar">
            <div className='container'>
                <NavLink className="navbar-brand" to="/home">
                    test
                </NavLink>
            </div>
        </nav>
    )
}