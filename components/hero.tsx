/* eslint-disable react/no-unescaped-entities */
import TypewriterComponent from "typewriter-effect";
import CirleWrapper from "./circleWrapper/circleWrapper";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AnimationEffect from "./Animation/AnimationEffect";
import ImageAnimationEffect from "./Animation/ImageAnimationEffect";
import OpacityEffect from "./Animation/opacityEffect";

export default function HeroSection() {
  return (
    <div className="min-h-screen text-white flex flex-col sm:flex-row p-2 sm:p-40 w-full h-full">
      <div className="mb-24 sm:mb-0 order-2 sm:order-1 flex flex-col grow justify-center items-center sm:items-start">
        <AnimationEffect delay={0.3} duration={1} y={50}>
          <div className="flex items-end mt-24 mb-8">
            <img src="./assets/waving.gif" alt="waving hand" width={50} />
            <h3 className="text-2xl ml-2">Hello World!</h3>
          </div>
        </AnimationEffect>
        <AnimationEffect delay={0.8} duration={1} y={50}>
          <h1 className="text-4xl sm:text-6xl ml-4 font-semibold tracking-wider">
            I'm Vipin Bohra
          </h1>
        </AnimationEffect>

        <div className="ml-4 mt-8">
          <AnimationEffect delay={1.5} duration={1} y={50}>
            <div className="text-3xl text-center sm:text-start sm:text-4xl font-semibold mb-4">
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
          </AnimationEffect>
          <AnimationEffect delay={2} duration={1} y={50}>
            <p className="py-4 text-md sm:text-xl font-extrabold bg-gradient-to-r from-[#FCF6BA] via-[#BF953F] to-[#AA771C] text-transparent bg-clip-text">
              &#8220; JavaScript is the silent powerhouse <br /> behind the
              interactive magic of the internet &#8221;
            </p>

            <a
              href="https://github.com/VIPIN24BOHRA"
              target="_blank"
              className="group  inline-block cursor-pointer mt-8 bg-gradient-to-r from-[#ff0000] to-[#440000] px-4 py-2 rounded-lg text-sm opacity-80 hover:opacity-100"
            >
              Star Me On Github{" "}
              <ArrowForwardIosIcon
                fontSize="small"
                className="group-hover:translate-x-1 transition duration-300 ease-in-out	"
              />
            </a>
          </AnimationEffect>
        </div>
      </div>
      <div className="scale-[0.78] sm:scale-[1] mt-16 ml-8 sm:mt-0 sm:ml-0 order-1 sm:order-2 w-[400px] relative">
        <ImageAnimationEffect delay={0.1}>
          <div className="flex items-center relative bg-white w-[300px] h-[300px] rounded-[100%] overflow-hidden">
            <img
              className="absolute contrast-150 z-20"
              src="./assets/my_photo.jpeg"
              alt="my photo"
              width={300}
            />
          </div>
        </ImageAnimationEffect>
        <OpacityEffect delay={1.4}>
          <div className="absolute top-28 left-14 h-[250px] w-[300px] bg-gradient-to-br from-[#0000] to-[rgb(18,15,22)] z-10"></div>
          <div className="absolute top-28 left-10 ">
            <CirleWrapper x={12} y={8} />
          </div>
        </OpacityEffect>
      </div>
    </div>
  );
}
