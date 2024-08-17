import "../styles/button.css";
import { Button } from "@mui/material";

const BasicButton = ({ children }) => {
  return <Button className="basic-button">{children}</Button>;
}

export default BasicButton;