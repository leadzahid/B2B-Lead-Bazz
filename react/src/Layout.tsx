// src/components/Layout.jsx
import { ConfigProvider } from "antd";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import BookCall from "./components/BookCall";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { theme } from "./theme/antd";
import ScrollToHash from "./utils/ScroollToHash";
import ScrollToTop from "./utils/ScroollToTop";

const Layout = () => {
  return (
    <ConfigProvider theme={theme}>
      <Toaster />
      <BookCall />
      <ScrollToHash />
      <ScrollToTop />
      <div>
        <Header />
        <main>
          <Outlet /> {/* This is where page content will render */}
        </main>
        <Footer />
      </div>
    </ConfigProvider>
  );
};

export default Layout;
