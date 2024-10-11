import Lucide from "@/components/Base/Lucide";
import ActivitiesPanel from "@/components/ActivitiesPanel";
import {useState} from "react";

function  Main () {
    const [activitiesPanel, setActivitiesPanel] = useState(false);
    return (
        <>
            <a
                href=""
                className="p-2 rounded-full hover:bg-slate-100"
                onClick={(e) => {
                    e.preventDefault();
                    setActivitiesPanel(true);
                }}
            >
                <Lucide icon="LayoutGrid" className="w-[18px] h-[18px]"/>
            </a>
            <ActivitiesPanel
                activitiesPanel={activitiesPanel}
                setActivitiesPanel={setActivitiesPanel}
            />
        </>
    );
}

export default Main;
