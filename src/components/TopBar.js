import { AiFillShop } from "react-icons/ai";

const TopBar = () => {
    return (
        <div className="flex items-center justify-between bg-white rounded-full shadow-sm px-5 py-3 mb-4">
            <div>
                <h2 className="text-xl font-bold text-blue-600 uppercase">
                    <AiFillShop className="inline-block text-white text-4xl bg-blue-500 rounded-full p-2" /> <span>Walton Electronics</span>
                </h2>
            </div>
            <div className="flex items-center space-x-2">
                <img className="w-12 h-12 rounded-full border-blue-600 border-2" src="/images/ash.png" alt="Avater" />
                <div>
                    <p className="font-bold"> Md. Ashraful</p>
                    <p className="font-xs"> Owner</p>
                </div>
            </div>
        </div>
    )
}

export default TopBar;
