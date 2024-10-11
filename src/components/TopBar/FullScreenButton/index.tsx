import Lucide from "@/components/Base/Lucide";

function Main () {

    const requestFullscreen = () => {
        const el = document.documentElement;
        if (el.requestFullscreen) {
            el.requestFullscreen().then(() => {});
        }
    };


    return (
        <>
            <a
                href=""
                className="p-2 rounded-full hover:bg-slate-100"
                onClick={(e) => {
                    e.preventDefault();
                    requestFullscreen();
                }}
            >
                <Lucide icon="Expand" className="w-[18px] h-[18px]"/>
            </a>
        </>
    );
}

export default Main;
