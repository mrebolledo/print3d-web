import {useEffect, useRef} from "react";
import Notification, {NotificationElement} from "@/components/Base/Notification";
import Lucide from "@/components/Base/Lucide";

type AppToastProps = {
    toastData : AppToast;
    setToastData : (toastData : AppToast) => void;
}

const TOAST_DURATION = 3000;

function AppToast ({toastData, setToastData}: AppToastProps) {
    const toastEl = useRef<NotificationElement>();

    const IconForToast = ({type}: {type : ToastType}) => {
        switch (type) {
            case "error" : {
                return <Lucide icon="XCircle" className="text-danger" />
            }
            case "success" : {
                return <Lucide icon="CheckCircle2" className="text-success" />
            }
            case "info" : {
                return <Lucide icon="Info" className="text-primary" />
            }
            case "warning" : {
                return <Lucide icon="AlertOctagon" className="text-amber-400" />
            }
            default : {
                return <Lucide icon="Shapes" className="text-primary" />
            }
        }
    }

    useEffect(() => {
        if(toastData.type !== 'none') {
            toastEl.current?.showToast();
            const timer = setTimeout(() => {
                setToastData({
                    ...toastData,
                    type: "none",
                    title: "",
                    description : ""
                })
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [toastData.type]);

    return (
        <Notification
                getRef={(el) => {
                    toastEl.current = el;
                }}
                options={{duration:TOAST_DURATION}}
                className="flex hidden"
            >
                <IconForToast type={toastData.type}/>
                <div className="ml-4 mr-4">
                    <div className="font-medium">{toastData.title}</div>
                    {
                        toastData.description &&
                        <div className="mt-1 text-slate-500">
                            {toastData.description}
                        </div>
                    }
                </div>
        </Notification>
    );
}

export default AppToast;
