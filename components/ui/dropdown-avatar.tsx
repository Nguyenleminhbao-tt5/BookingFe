import useUser from "@/stores/user-store";
import { Button, Dropdown, MenuProps, Space, message } from "antd";
import { useRouter } from "next/navigation";

export const DropdownAvatar = () => {
    const router = useRouter();
    const { user } = useUser();
    const [messageApi, contextHolder] = message.useMessage();
    const logout = () => {
        if (typeof localStorage !== "undefined") {
            localStorage.removeItem("accessToken");
            sessionStorage.removeItem("storage-user");
            sessionStorage.removeItem("storage-booking");
            sessionStorage.removeItem("storage-business");

            messageApi.open({
                type: "success",
                content: "Bạn đã đăng xuất thành công !",
            });

            router.push("/login");
        }
    };
    const items: MenuProps["items"] = [
        {
            label: `${user.first_name} ${user.last_name}`,
            key: "0",
        },
        {
            type: "divider",
        },
        {
            label: "Cài đặt theme",
            key: "1",
        },
        {
            label: "Cài đặt quyền riêng tư",
            key: "2",
        },
        {
            label: "Trợ giúp & Hỗ trợ",
            key: "3",
        },
        {
            type: "divider",
        },

        {
            label: <Button onClick={logout}>Đăng xuất</Button>,
            key: "4",
        },
    ];
    return (
        <Dropdown
            menu={{ items }}
            className="flex items-center justify-center rounded-full  cursor-pointer w-[50px] mx-[10px] mr-5 hover:brightness-125 "
        >
            <a onClick={(e) => e.preventDefault()}>
                <Space className="">
                    <img
                        src="https://uploads.nhanhoa.com/news/no-avatar.png"
                        className=" text-xl"
                    />
                </Space>
            </a>
        </Dropdown>
    );
};
