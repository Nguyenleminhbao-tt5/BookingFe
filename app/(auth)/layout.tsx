type Props = {
    children: React.ReactNode;
};
const AuthLayout = ({ children }: Props) => {
    return (
        <main className="w-full min-h-screen flex bg-white">{children}</main>
    );
};

export default AuthLayout;
