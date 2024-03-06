"use client";

import { useState } from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import {
    ScheduleOutlined,
    FileOutlined,
    EnvironmentOutlined,
    TeamOutlined,
    UserOutlined,
    AliyunOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { useRouter } from "next/navigation";
import useUser from "@/stores/user-store";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[]
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem("User", "1", <UserOutlined />),
    getItem("Booking", "booking", <EnvironmentOutlined />),
    getItem("Business", "business", <ScheduleOutlined />),
    getItem("Employee", "sub1", <UserOutlined />, [
        getItem("Tom", "4"),
        getItem("Bill", "5"),
        getItem("Alex", "6"),
    ]),
    getItem("Team", "sub2", <TeamOutlined />, [
        getItem("Team 1", "7"),
        getItem("Team 2", "8"),
    ]),
    getItem("Files", "9", <FileOutlined />),
];

export const SliderAdmin = () => {
    const router = useRouter();
    const { user } = useUser();
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const handleChange = (selectedItem: MenuItem) => {
        const page = selectedItem?.key;
        if (page == "booking") {
            router.push(`/admin/${page}`);
        } else if (page == "business") {
            router.push(`/admin/${page}`);
        } else router.push("/admin");
    };
    return (
        <>
            {user.is_admin && (
                <Sider
                    collapsible
                    collapsed={collapsed}
                    onCollapse={(value) => setCollapsed(value)}
                >
                    <div className=" h-20 text-2xl font-semibold text-white flex justify-center items-center">
                        {!collapsed ? (
                            <span>Booking.com</span>
                        ) : (
                            <AliyunOutlined />
                        )}
                    </div>
                    <Menu
                        theme="dark"
                        defaultSelectedKeys={["1"]}
                        mode="inline"
                        items={items}
                        className=""
                        onClick={handleChange}
                    />
                </Sider>
            )}
        </>
    );
};
