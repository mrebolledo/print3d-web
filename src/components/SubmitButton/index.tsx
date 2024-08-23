import Button from "@/components/Base/Button";
import LoadingIcon from "@/components/Base/LoadingIcon";

type SubmitButtonProps = {
    loading : boolean;
    text: string;
}

function Main ({loading, text}: SubmitButtonProps) {
    return (
        <>
            {
                !loading ?
                    <Button
                        variant="primary"
                        rounded
                        type={"submit"}
                        className="bg-gradient-to-r from-theme-1/70 to-theme-2/70 w-full py-3.5 xl:mr-3"
                    >
                        {text}
                    </Button> :
                    <Button
                        variant="primary"
                        rounded
                        type={"button"}
                        className="bg-gradient-to-r from-theme-1/70 to-theme-2/70 w-full py-3.5 xl:mr-3"
                    >
                        <LoadingIcon icon="oval" className="w-4 h-4" color={"primary"}/>
                    </Button>
            }
        </>
    );
}

export default Main;
