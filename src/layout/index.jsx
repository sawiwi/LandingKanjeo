import Header from '../shared/header/header';
import Footer from '../shared/footer';
import ScrollToTop from '../components/scroll-to-top';

const Layout = ({ children }) => {
  return (
    <div className="tw-relative tw-bg-body tw-overflow-hidden">
      <div className="tw-relative tw-p-0 tw-m-0 tw-w-full tw-h-full">
        <Header />
        <main>{children}</main>
      </div>
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Layout;
