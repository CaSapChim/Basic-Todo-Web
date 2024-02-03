import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
    return (
        <header className="w-full h-auto p-2 flex justify-around items-center dark:bg-black">
            <div className="text-3xl text-slate-950 font-medium dark:text-white">Basic Todo App</div>
            <div 
                className="p-3 flex items-center ml-5 border-solid border-2 border-neutral-950 dark:border-white rounded cursor-pointer"
            >
                <FontAwesomeIcon icon="moon" size="lg" className="dark:text-white"/>
            </div>
        </header>
    );
}

export default Header;
