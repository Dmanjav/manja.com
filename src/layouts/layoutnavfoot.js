import Navbar from "../components/navbar";
import Footer from "../components/footer";

const LayoutNavFoot = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default LayoutNavFoot;