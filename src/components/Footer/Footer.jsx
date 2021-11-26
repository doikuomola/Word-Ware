import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";
import "./Footer.css";

const Footer = ({ lightMode }) => {
    return (
        <div
            className="footer"
            style={{
                backgroundColor: lightMode ? "#fff" : "#121212",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                color: lightMode ? "black" : "white",
            }}
        >
            <hr style={{ width: "90%", marginTop: 20 }} />
            <span
                className="name"
                style={{
                    fontSize: "20px",
                    padding: "10px",
                    color: lightMode ? "black" : "white",
                }}
            >
                Made by{" "}
                <a
                    href="https://www.linkedin.com/in/david-ikuomola-1747601a4/"
                    target="__blank"
                    style={{ color: lightMode ? "black" : "white" }}
                >
                    David
                </a>
            </span>
            <div className="iconContainer">
                <a
                    href="https://www.instagram.com/_walestrings/"
                    target="__blank"
                >
                    <InstagramIcon
                        fontSize="large"
                        style={{ color: lightMode ? "#8a3ab9 " : "white" }}
                    />
                </a>
                <a
                    href="https://www.linkedin.com/in/david-ikuomola-1747601a4/"
                    target="__blank"
                >
                    <LinkedInIcon
                        fontSize="large"
                        style={{ color: lightMode ? "#0e76a8" : "white" }}
                    />
                </a>
                <a
                    href="https://www.youtube.com/channel/UCbc7bJoNj94Rkv0nO_-l4_w"
                    target="__blank"
                >
                    <YouTubeIcon
                        fontSize="large"
                        style={{ color: lightMode ? "#FF0000" : "white" }}
                    />
                </a>
            </div>
        </div>
    );
};

export default Footer;
