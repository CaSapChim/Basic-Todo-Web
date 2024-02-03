import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IsShowCard {
    visible: boolean;
    close: () => void;
    title: string;
    note?: string;
    date: string;
}

export const ModalCard: React.FC<IsShowCard> = ({visible, close, title, note, date}) => {
    if (!visible) return;

    return (
        <div className="fixed top-0 inset-0 bg-black bg-opacity-30 flex justify-center items-center">
            <div className="relative bg-white w-2/5 h-1/2 p-3 rounded-xl animate-popupModal">
                <header className="w-full h-[3vh] flex justify-between items-center">
                    <h1 className="font-bold text-xl">{title}</h1>
                    <h3
                        className="cursor-pointer"
                        onClick={close}
                        >
                        <FontAwesomeIcon  
                        icon="close" 
                        size="lg" 
                        className={`dark:text-white`}
                        />
                    </h3>
                </header>
                <div className="mt-2">
                    <span>Ghi chú công việc: {note}</span>
                </div>
                <h2 className="absolute bottom-2">{date}</h2>
            </div>
        </div>
    )
}
