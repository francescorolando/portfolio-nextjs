import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, path: "https://github.com/francescorolando" },
    { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/francescorolando" },
    // { icon: <FaYoutube />, path: "" },
    // { icon: <FaTwitter />, path: "" },
];

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link
                        key={index}
                        href={item.path}
                        className={iconStyles}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {item.icon}
                    </Link>
                );
            })}
        </div>
    );
};

export default Social;
