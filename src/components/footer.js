import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import "../styles/footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__social">
                <a href="https://www.linkedin.com/in/diego-manjarrez-viveros" target="_blank" rel="noreferrer">
                    <LinkedInIcon />
                </a>
                <a href="https://github.com/Dmanjav" target="_blank" rel="noreferrer">
                    <GitHubIcon />
                </a>
                <a href="mailto:flamer.manjarrez@gmail.com" target="_blank" rel="noreferrer">
                    <EmailIcon />
                </a>
            </div>
            <div className="footer__text">
                <p>Diego Manjarrez Viveros</p>
            </div>
        </footer>
    );
};

export default Footer;