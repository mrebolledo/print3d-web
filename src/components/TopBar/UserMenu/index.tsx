import {Menu} from "@/components/Base/Headless";
import users from "@/fakers/users";
import Lucide from "@/components/Base/Lucide";
import {useAuth} from "@/contexts/AuthContext";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

function Main () {
    const {user, logout} = useAuth();
    const navigate = useNavigate();
    const {t} = useTranslation();
    return (
        <>
            <Menu className="ml-5">
                <Menu.Button className="overflow-hidden rounded-full w-[36px] h-[36px] border-[3px] border-slate-200/70 image-fit">
                    <img
                        alt="Tailwise - Admin Dashboard Template"
                        src={users.fakeUsers()[0].photo}
                    />
                </Menu.Button>
                <Menu.Items className="w-56 mt-1">
                    <Menu.Item>
                        <Lucide icon="User" className="w-4 h-4 mr-2" />
                        <span>{user?.name}</span>
                    </Menu.Item>

                    <Menu.Divider />
                    <Menu.Item
                        onClick={() => {
                            navigate("profile");
                        }}
                    >
                        <Lucide icon="Users" className="w-4 h-4 mr-2" />
                        {t('profile')}
                    </Menu.Item>
                    <Menu.Item
                        onClick={logout}
                    >
                        <Lucide icon="Power" className="w-4 h-4 mr-2" />
                        {t('logout')}
                    </Menu.Item>
                </Menu.Items>
            </Menu>
        </>
    );
}

export default Main;
