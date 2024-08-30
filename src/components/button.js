import "../styles/button.css";
import { Button } from "@mui/material";

const BasicButton = ({ children, targetId }) => {
  const handleClick = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return <Button className="basic-button" onClick={handleClick}>{children}</Button>;
}

export default BasicButton;