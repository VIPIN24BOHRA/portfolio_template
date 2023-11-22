export default function Header() {
  return (
    <nav className="pl-4 pt-2 sm:pr-40 z-40 fixed w-full text-white flex justify-end  sm:h-[50px] items-end backdrop-blur-sm">
      <img
        src="./assets/my_signature.png"
        alt="signature"
        width={160}
        className="w-[75px] sm:w-[160px] self-start rotate-6 mt-4"
      />

      <div className="grow"></div>

      <ul className="flex flex-row">
        <li className="mx-4 cursor-pointer">Home</li>
        <li className="mx-4 cursor-pointer">
          <a href="#aboutMe">About</a>
        </li>
        <li className="mx-4 cursor-pointer">
          <a href="#education">Education</a>
        </li>
        <li className="mx-4 cursor-pointer">
          {" "}
          <a href="#skills">Skills</a>
        </li>
        {/* <li className="mx-4 cursor-pointer">Projects</li>
        <li className="mx-4 cursor-pointer">Contact Me</li> */}
      </ul>
    </nav>
  );
}
