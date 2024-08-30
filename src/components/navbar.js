import "../styles/navbar.css";
import BasicButton from "./button";
import manjaBio from "../assets/bio";

const Navbar = () => {
  return (
    <div className="container">
{
                    manjaBio.map((item) => {
                        console.log(item);
                        return (
                            <BasicButton targetId={item.id}>{item.title}</BasicButton>
                        );
                    })
                }

      {/* <ul className="options">
        <BasicButton targetId="about-me">About me</BasicButton>
        <BasicButton targetId="studies">Studies</BasicButton>
        <BasicButton targetId="experience">Experience</BasicButton>
        <BasicButton targetId="projects">Projects</BasicButton>
        <BasicButton targetId="contact">Contact</BasicButton>
      </ul> */}
    </div>
  );
}

export default Navbar;