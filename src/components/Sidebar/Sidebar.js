import {
    AiOutlineHome,
    AiOutlineGold,
    AiFillAmazonCircle
} from "react-icons/ai";
import SidebarItem from './SidebarItem';

const Sidebar = () => {
    return (
        <div className="bg-blue-600 flex-none w-60 h-screen pl-1">
            <div className="text-white font-bold px-4 my-6">
                <h1 className="text-2xl"><AiFillAmazonCircle className="inline text-3xl" /> <span>Sellium</span></h1>
            </div>
            <SidebarItem to="/" icon={<AiOutlineHome />}>Dashboard</SidebarItem>
            <SidebarItem to="/brand" icon={<AiOutlineGold />}>Brand</SidebarItem>
            <SidebarItem to="/a" icon={<AiOutlineGold />}>Product</SidebarItem>
            <SidebarItem to="/v" icon={<AiOutlineGold />}>Category</SidebarItem>
            <SidebarItem to="/brandd" icon={<AiOutlineGold />}>User</SidebarItem>
            <SidebarItem to="/d" icon={<AiOutlineGold />}>Reports</SidebarItem>
            <SidebarItem to="/s" icon={<AiOutlineGold />}>Sales</SidebarItem>
            <SidebarItem to="/ss" icon={<AiOutlineGold />}>Purchases</SidebarItem>
        </div>
    );
}

export default Sidebar;