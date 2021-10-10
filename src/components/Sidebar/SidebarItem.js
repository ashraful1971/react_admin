import { NavLink } from 'react-router-dom';

const SidebarItem = (props) => {
    return (
        <NavLink activeClassName="text-blue-800 bg-blue-100" className="sidebar_item block px-4 py-3 text-white hover:text-blue-800 hover:bg-blue-100" exact to={props.to}>
            <div className="flex items-center">
                <div className="flex-none w-10 text-2xl">{props.icon}</div>
                <div className="flex-grow text-xs">{props.children}</div>
            </div>
        </NavLink>
    )
}

export default SidebarItem;