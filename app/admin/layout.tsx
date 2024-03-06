"use client";

import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { SliderAdmin } from "@/components/layout/slider-admin";
import { DropdownAvatar } from "@/components/ui/dropdown-avatar";

const { Header, Content, Footer, Sider } = Layout;

type Props = {
    children: React.ReactNode;
};
const AdminLayout = ({ children }: Props) => {
    return (
        <Layout className="w-full min-h-screen flex bg-white">
            <SliderAdmin />
            <Layout>
                <Header className="bg-white shadow-md h-20 flex justify-end">
                    <DropdownAvatar />
                </Header>
                <Content className=" mt-5 w-full ">
                    <div>{children}</div>
                </Content>
                <Footer className="text-center">
                    Booking Design ©{new Date().getFullYear()}
                </Footer>
            </Layout>
        </Layout>
    );
};

export default AdminLayout;
