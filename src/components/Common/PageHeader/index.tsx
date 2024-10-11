type PageHeaderProps = {
    title : string;
    description? : string;
}

function Main ({title, description}: PageHeaderProps) {
    return (
        <>
            <div className="flex flex-col mt-4 md:mt-0 md:h-10 gap-y-3 md:items-center md:flex-row">
                <div className="text-base font-medium group-[.mode--light]:text-white">
                    {title}
                </div>
                {
                    description &&
                    <>
                        <div className="group-[.mode--light]:text-white/80 mx-3 hidden lg:block">
                            •
                        </div>
                        <div className="group-[.mode--light]:text-white/80 text-slate-500 leading-relaxed hidden lg:block">
                            {description}
                        </div>
                    </>
                }
            </div>
        </>
    );
}

export default Main;
