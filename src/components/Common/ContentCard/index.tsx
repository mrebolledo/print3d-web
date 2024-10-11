type ContentCardProps = {
    children?: React.ReactNode;
    title : string;
}

function Main ({children, title}: ContentCardProps) {
    return (
        <>
            <div className="relative flex flex-col col-span-12 lg:col-span-9 xl:col-span-8 gap-y-7">
                <div className="flex flex-col p-5 box box--stacked">
                    <div className="flex flex-col pb-5 mb-5 border-b border-dashed sm:items-center sm:flex-row border-slate-300/70">
                        <div className="text-[0.94rem] font-medium">
                            {title}
                        </div>
                    </div>
                    <div>
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Main;
