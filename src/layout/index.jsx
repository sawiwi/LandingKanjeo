import Header from '../shared/header/header';
import Footer from '../shared/footer';
import ScrollToTop from '../components/scroll-to-top';

const Layout = ({ children }) => {
  return (
    <div className="relative bg-body overflow-hidden">
      <div className="relative p-0 m-0 w-full h-full">
        <Header />
        <main>{children}</main>
      </div>
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Layout;
