export default function Header() {
  return (
    <nav className="px-40 fixed w-full text-white flex justify-end h-[50px] items-end backdrop-blur-sm">
      <ul className="flex flex-row">
        <li className="mx-4 cursor-pointer">Home</li>
        <li className="mx-4 cursor-pointer">About</li>
        <li className="mx-4 cursor-pointer">Education</li>
        <li className="mx-4 cursor-pointer">Experience</li>
        <li className="mx-4 cursor-pointer">Projects</li>
        <li className="mx-4 cursor-pointer">Contact Me</li>
      </ul>
    </nav>
  );
}
