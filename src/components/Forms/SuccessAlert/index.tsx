import Alert from "@/components/Base/Alert";
import Lucide from "@/components/Base/Lucide";

type SuccessAlertProps = {
    data : FormAlert
}

function Main({data} : SuccessAlertProps) {
    return (
        <>
            {
                data.show &&
                <Alert
                    variant="outline-success"
                    className="flex items-center px-4 py-3 my-7 bg-success/5 success/20 rounded-[0.6rem] leading-[1.7]"
                >
                    {({dismiss}) => (
                        <>
                            <div className="">
                                <Lucide
                                    icon="CheckCircle"
                                    className="stroke-[0.8] w-7 h-7 mr-2 fill-success/10"
                                />
                            </div>
                            <div className="ml-1 mr-8">
                                {data.message}
                            </div>
                            <Alert.DismissButton
                                type="button"
                                className="btn-close text-success"
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
