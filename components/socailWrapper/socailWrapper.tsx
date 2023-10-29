import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
export default function SocialWrapper() {
  return (
    <div className="fixed bottom-10 left-10">
      <ul>
        <li className="cursor-pointer duration-300 hover:-translate-y-2 mb-4 flex items-center justify-center rounded-[100%] w-[50px] h-[50px] bg-gradient-to-r from-[#ff0000] to-[#880000]">
          <a href="https://github.com/VIPIN24BOHRA" target="_blank">
            <GitHubIcon className="text-white" />
          </a>
        </li>
        <li className="cursor-pointer mb-4 duration-300 hover:-translate-y-2 flex items-center justify-center rounded-[100%] w-[50px] h-[50px] bg-gradient-to-r from-[#ff0000] to-[#880000]">
          <a
            href="https://www.linkedin.com/in/vipin-bohra-502a95209/"
            target="_blank"
          >
            <LinkedInIcon className="text-white" />
          </a>
        </li>
        <li className="cursor-pointer mb-4 duration-300 hover:-translate-y-2 flex items-center justify-center rounded-[100%] w-[50px] h-[50px] bg-gradient-to-r from-[#ff0000] to-[#880000]">
          <a href="https://www.instagram.com/vipin2405bohra/" target="_blank">
            <InstagramIcon className="text-white" />
          </a>
        </li>
        <li className="cursor-pointer flex duration-300 hover:-translate-y-2 items-center justify-center rounded-[100%] w-[50px] h-[50px] bg-gradient-to-r from-[#ff0000] to-[#880000]">
          <a href="https://www.facebook.com/vimal.bohra.129" target="_blank">
            <FacebookIcon className="text-white" />
          </a>
        </li>
      </ul>
    </div>
  );
}
