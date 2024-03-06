"use client";

import React, { useEffect, useState } from "react";
import { Button, Space, Table, Switch, ConfigProvider } from "antd";
import type { TableProps } from "antd";
import { UserType } from "../type/user.datatype";
import { ColumnsType } from "antd/es/table";
import { BusinessType } from "../type/business.datatype";
import { BookingType } from "../type/booking.datatype";
import BookingService from "@/services/api/booking-api";

type Props = {
    typeColumn:
        | ColumnsType<UserType>
        | ColumnsType<BusinessType>
        | ColumnsType<BookingType>;
    dataSource: any[];
};

const changePending = async (checked: boolean, record: BookingType) => {
    try {
        const response = await BookingService.updateBooking(
            record.id,
            !checked
        );
    } catch (err) {
        throw err;
    }
};

export const columnUser: TableProps<UserType>["columns"] = [
    {
        title: "First name",
        dataIndex: "first_name",
        key: "first_name",
    },
    {
        title: "Last name",
        dataIndex: "last_name",
        key: "last_name",
    },
    {
        title: "Avatar",
        dataIndex: "avatar",
        key: "avatar",
        render: (_, record) => (
            <div className=" h-10 w-10">
                <img
                    src={
                        record.avatar
                            ? record.avatar
                            : "https://uploads.nhanhoa.com/news/no-avatar.png"
                    }
                    className="w-full h-full rounded-full"
                />
            </div>
        ),
    },
    {
        title: "Email",
        dataIndex: "email",
        key: "email",
    },
    {
        title: "Action",
        key: "action",
        render: (_, record) => (
            <Space size="middle">
                <span>Edit</span>
                <span>Delete</span>
            </Space>
        ),
    },
];

export const columnBusiness: TableProps<BusinessType>["columns"] = [
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
    },
    {
        title: "Price",
        dataIndex: "price",
        key: "price",
    },
    {
        title: "Action",
        key: "action",
        render: (_, record) => (
            <Space size="middle">
                <span>Edit</span>
                <span>Delete</span>
            </Space>
        ),
    },
];

export const columnBooking: TableProps<BookingType>["columns"] = [
    {
        title: "User",
        dataIndex: "user_name",
        key: "user_name",
    },
    {
        title: "Time book",
        dataIndex: "time_book",
        key: "time_book",
    },
    {
        title: "Time picker",
        dataIndex: "time_picker",
        key: "time_picker",
    },
    {
        title: "Address",
        dataIndex: "address",
        key: "address",
    },
    {
        title: "Business",
        dataIndex: "business_name",
        key: "business_name",
    },
    {
        title: "Status",
        dataIndex: "is_pending",
        key: "is_pending",
        render: (_, record) => (
            <Space size="middle">
                <ConfigProvider
                    theme={{
                        token: {
                            // Seed Token
                            colorPrimary: "#00b96b",
                            borderRadius: 2,
                            size: 20,
                            fontSize: 18,
                            colorBgContainer: "#f6ffed",
                        },
                    }}
                >
                    <Switch
                        checkedChildren="Success"
                        unCheckedChildren="Pending"
                        defaultValue={!record.is_pending}
                        className=" bg-slate-400"
                        onClick={(checked) => changePending(checked, record)}
                    />
                </ConfigProvider>
            </Space>
        ),
    },
    {
        title: "Action",
        key: "action",
        render: (_, record) => (
            <Space size="middle">
                <span>Edit</span>
                <span>Delete</span>
            </Space>
        ),
    },
];

export const TableAdmin = ({ typeColumn, dataSource }: Props) => {
    return (
        <Table
            columns={typeColumn}
            dataSource={dataSource}
            className=" p-4 shadow-xl rounded-xl"
        />
    );
};
