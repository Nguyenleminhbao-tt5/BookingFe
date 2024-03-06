"use client";

import BookingService from "@/services/api/booking-api";
import { useEffect, useState } from "react";
import { TableAdmin, columnBusiness } from "../_components/table-admin";
import { BusinessType } from "../type/business.datatype";
import { ColumnsType } from "antd/es/table";
import { Result, Skeleton } from "antd";
import useUser from "@/stores/user-store";
import Link from "next/link";

const BusinessAdmin = () => {
    const [isLoading, setLoading] = useState<boolean>(false);
    const [business, setBusiness] = useState<BusinessType[]>([]);
    const { user } = useUser();

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            const response = await BookingService.getAllBusiness();
            if (response && response.type == "Success") {
                setBusiness(response.data);
            }
        };
        fetchData();
        setLoading(false);
    }, []);

    return (
        <>
            {user.is_admin ? (
                <div className="px-6 w-full rounded-xl bg-white shadow-xl min-h-screen ">
                    <h1 className="text-black py-5 text-4xl font-semibold">
                        Quản lý Business
                    </h1>
                    {isLoading ? (
                        <Skeleton className="w-full" />
                    ) : (
                        <TableAdmin
                            typeColumn={
                                columnBusiness as ColumnsType<BusinessType>
                            }
                            dataSource={business}
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

export default BusinessAdmin;
