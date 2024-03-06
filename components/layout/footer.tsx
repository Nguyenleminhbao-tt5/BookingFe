import { Layout } from "antd";

const { Footer } = Layout;

const FooterDf = () => {
    return (
        <Footer className="text-center px-80">
            Booking Design ©{new Date().getFullYear()}
        </Footer>
    );
};

export default FooterDf;
