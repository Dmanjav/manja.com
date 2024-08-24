import "../styles/navbar.css";
import BasicButton from "./button";

const Navbar = () => {
  return (
    <div className="container">
      <ul className="options">
        <BasicButton>About me</BasicButton>
        <BasicButton>Studies</BasicButton>
        <BasicButton>Experience</BasicButton>
        <BasicButton>Projects</BasicButton>
        <BasicButton>Contact</BasicButton>
      </ul>
    </div>
  );
}

export default Navbar;