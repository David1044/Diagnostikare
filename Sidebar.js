import {NavLink} from 'react-router-dom'
import * as  FaIcons from 'react-icons/fa'

const Sidebar = () => {
    return (
        <div className="sidebar bg-light">
            <ul>
                <li>
                    <NavLink to="/" exact className="text-dark rounded py-2 w-100 d-inline-block px-2" activeClassName="active"><FaIcons.FaHome className="me-3"/>Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="/sintomas" exact className="text-dark rounded py-2 w-100 d-inline-block px-2"activeClassName="active"><FaIcons.FaBriefcaseMedical className="me-3"/>Síntomas</NavLink>
                </li>
                <li>
                    <NavLink to="/agenda" exact className="text-dark rounded py-2w-100 d-inline-block px-2"activeClassName="active"><FaIcons.FaCalendarAlt className="me-3"/>Agenda</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar