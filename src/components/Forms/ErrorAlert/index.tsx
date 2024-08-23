import Lucide from "@/components/Base/Lucide";
import Alert from "@/components/Base/Alert";

type ErrorAlertProps = {
    data : FormAlert
}

function Main ({data} : ErrorAlertProps) {
    return (
        <>
            {
                data.show &&
                <Alert
                    variant="outline-danger"
                    className="flex items-center px-4 py-3 my-7 bg-danger/5 danger/20 rounded-[0.6rem] leading-[1.7]"
                >
                    {({dismiss}) => (
                        <>
                            <div className="">
                                <Lucide
                                    icon="ShieldAlert"
                                    className="stroke-[0.8] w-7 h-7 mr-2 fill-danger/10"
                                />
                            </div>
                            <div className="ml-1 mr-8">
                                {data.message}
                            </div>
                            <Alert.DismissButton
                                type="button"
                                className="btn-close text-danger"
                                onClick={dismiss}
                                aria-label="Close"
                            >
                                <Lucide icon="X" className="w-5 h-5"/>
                            </Alert.DismissButton>
                        </>
                    )}
                </Alert>
            }
        </>
    );
}

export default Main;
