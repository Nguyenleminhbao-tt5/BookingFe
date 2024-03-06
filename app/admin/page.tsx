"use client";
import UserService from "@/services/api/user-api";
import { TableAdmin, columnUser } from "./_components/table-admin";
import { useEffect, useState } from "react";
import { UserType } from "./type/user.datatype";
import { ColumnsType } from "antd/es/table";
import { Button, Result, Skeleton } from "antd";
import useUser from "@/stores/user-store";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Admin = () => {
    const router = useRouter();
    const [isLoading, setLoading] = useState<boolean>(false);
    const [users, setUser] = useState<UserType[]>([]);

    const { user } = useUser();

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            const response = await UserService.getAllUsers();
            if (response && response.type == "Success") {
                setUser(response.data);
            }
        };
        fetchData();
        setLoading(false);
    }, []);

    return (
        <>
            {user.is_admin ? (
                <div className="px-6 w-full rounded-xl bg-white shadow-xl min-h-screen ">
                    {}
                    <h1 className="text-black py-5 text-4xl font-semibold">
                        Quản lý User
                    </h1>
                    {isLoading ? (
                        <Skeleton className="w-full" />
                    ) : (
                        <TableAdmin
                            typeColumn={columnUser as ColumnsType<UserType>}
                            dataSource={users}
                        />
                    )}
                </div>
            ) : (
                <Result
                    status="404"
                    title="404"
                    subTitle="Sorry, the page you visited does not exist."
                    extra={
                        <Link
                            href="/"
                            type="primary"
                            className=" bg-blue-500 p-3 rounded-xl"
                        >
                            Back Home
                        </Link>
                    }
                />
            )}
        </>
    );
};

export default Admin;
