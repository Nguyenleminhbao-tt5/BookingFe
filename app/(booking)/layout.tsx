"use client";

import React from "react";
import { Layout } from "antd";
import HeaderDf from "@/components/layout/header";
import FooterDf from "@/components/layout/footer";

const { Content, Footer } = Layout;

type Props = {
    children: React.ReactNode;
};
const DefaultLayout = ({ children }: Props) => {
    return (
        <Layout className="w-full min-h-screen flex bg-white">
            <HeaderDf />
            <Content>{children}</Content>
            <FooterDf />
        </Layout>
    );
};

export default DefaultLayout;
