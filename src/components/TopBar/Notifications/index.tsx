import Lucide from "@/components/Base/Lucide";
import {useState} from "react";
import NotificationsPanel from "@/components/NotificationsPanel";

function Main () {
    const [notificationsPanel, setNotificationsPanel] = useState(false);
    return (
        <>
            <a
                href=""
                className="p-2 rounded-full hover:bg-slate-100"
                onClick={(e) => {
                    e.preventDefault();
                    setNotificationsPanel(true);
                }}
            >
                <Lucide icon="Bell" className="w-[18px] h-[18px]"/>
            </a>

            <NotificationsPanel
                notificationsPanel={notificationsPanel}
                setNotificationsPanel={setNotificationsPanel}
            />
        </>
    );
}

export default Main;
