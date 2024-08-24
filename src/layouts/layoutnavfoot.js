import Navbar from "../components/navbar";

const LayoutNavFoot = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      {children}
      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
}

export default LayoutNavFoot;