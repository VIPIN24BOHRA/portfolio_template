/* eslint-disable react/no-unescaped-entities */
import TypewriterComponent from "typewriter-effect";
import CirleWrapper from "./circleWrapper/circleWrapper";
export default function HeroSection() {
  return (
    <div className="h-screen text-white flex flex-row p-40 w-full h-full">
      <div className="flex flex-col grow justify-center">
        <div className="flex items-end mt-24 mb-8">
          <img src="./assets/waving.gif" alt="waving hand" width={50} />
          <h3 className="text-2xl ml-2">Hello World!</h3>
        </div>
        <h1 className="text-6xl ml-4 font-semibold tracking-wider">
          I'm Vipin Bohra
        </h1>
        <div className="ml-4 mt-8">
          <div className="text-4xl font-semibold mb-4">
            <TypewriterComponent
              options={{
                strings: [
                  "Full stack developer",
                  "Problem solver",
                  "React lover",
                ],
                cursor: "_",
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 50,
                wrapperClassName:
                  "inline-block bg-gradient-to-r from-[#ff0000] to-[#880000] text-transparent bg-clip-text",
                cursorClassName: "bg-[#880000] text-transparent bg-clip-text",
              }}
            />
          </div>
          <p className="w-[500px] tracking-wider font-thin">
            I focus on developing user-friendly web applications that meet the
            client's requirements, with attention to detail, scalability, and
            performance.
          </p>
          <a
            href="https://github.com/VIPIN24BOHRA"
            target="_blank"
            className="inline-block cursor-pointer mt-8 bg-gradient-to-r from-[#ff0000] to-[#440000] px-4 py-2 rounded-lg text-sm opacity-80 hover:opacity-100"
          >
            Star Me On Github
          </a>
        </div>
      </div>
      <div className="w-[400px] relative">
        <div className="flex items-center relative bg-white w-[300px] h-[300px] rounded-[100%] overflow-hidden">
          <img
            className="absolute contrast-150 z-20"
            src="./assets/my_photo.jpeg"
            alt="my photo"
            width={300}
          />
        </div>
        <div className="absolute top-28 left-14 h-[250px] w-[300px] bg-gradient-to-br from-[#0000] to-[rgb(18,15,22)] z-10"></div>
        <div className="absolute top-28 left-10 ">
          <CirleWrapper x={12} y={8} />
        </div>
      </div>
    </div>
  );
}
