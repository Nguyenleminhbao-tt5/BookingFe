"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, message } from "antd";
import { Loading } from "@/components/ui/loading";
import AuthService from "@/services/api/auth-api";
import useUser from "@/stores/user-store";

type LoginType = {
    email?: string;
    password?: string;
    remember?: string;
};

export const LoginForm = () => {
    const router = useRouter();
    const [isLoading, setLoading] = useState<boolean>(false);
    const { setUser } = useUser();

    const handleLogin = async ({ email, password, remember }: LoginType) => {
        try {
            if (email && password) {
                setLoading(true);

                const response = await AuthService.login(email, password);

                console.log(response);

                if (response && response.type === "Success") {
                    setUser(response.data);
                    localStorage.setItem(
                        "accessToken",
                        String(response.data.accessToken)
                    );
                    message.success("Login successfully");
                    if (response.data.is_admin) router.push("/admin");
                    else router.push("/");
                } else message?.error(response?.data);
            }
        } catch (err) {
            throw err;
        } finally {
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        }
    };

    const handleLoginFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <Form
            name="normal_login"
            className="login-form bg-white flex flex-col p-5 rounded-xl w-full "
            initialValues={{ remember: true }}
            onFinish={handleLogin}
        >
            <Form.Item
                name="email"
                rules={[{ required: true, message: "Hãy nhập email của bạn!" }]}
            >
                <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    className="border border-1 border-gray-100 p-3 rounded-md focus:outline-1 outline-blue-600"
                    placeholder="Email hoặc số điện thoại!"
                />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    { required: true, message: "Hãy nhập mật khẩu của bạn!" },
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    className="border border-1 border-gray-100 p-3 rounded-md focus:outline-1 outline-blue-600"
                    type="password"
                    placeholder="Mật khẩu"
                />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me?</Checkbox>
            </Form.Item>

            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    className="w-full login-form-button bg-blue-600 p-5 my-2 text-lg font-bold text-white rounded-md hover:bg-blue-700 flex items-center justify-center"
                >
                    {isLoading ? <Loading size="small" /> : "Đăng nhập"}
                </Button>
            </Form.Item>

            <p className="w-full login-form-forgot cursor-pointer text-blue-600 text-sm -mt-5 text-center hover:underline">
                Quên mật khẩu?
            </p>
            <div className="my-5">
                <hr />
            </div>

            <Button
                className="w-fit bg-green-500 p-5 my-5 text-lg font-bold text-white rounded-md hover:bg-green-600 mx-auto flex items-center justify-center"
                href="/signup"
            >
                Tạo tài khoản mới!
            </Button>
        </Form>
    );
};
