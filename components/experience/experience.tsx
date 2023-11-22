import SkillImgAnimate from "../Animation/SkillsAnimationEffect";
import CodeWrapper from "../codeWrapper/codeWrapper";
import AnimationEffect from "../Animation/AnimationEffect";
export default function Experience() {
  return (
    <div className="text-white min-h-screen pl-2 sm:pl-40 flex">
      <div className="hidden sm:flex items-center max-h-screen sticky top-0 codeWrapperContainer">
        <CodeWrapper />
      </div>
      <div className="grow pl-2 sm:pl-8">
        <AnimationEffect delay={0} duration={1} y={25}>
          <h3 className="text-4xl text-center pt-32 pb-8" id="skills">
            Skills
          </h3>
          <div className="text-center pb-8">
            <span className="bg-[#FF605C] px-4 py-2 rounded-lg">Frontend</span>
          </div>
        </AnimationEffect>
        <div className="w-full flex flex-wrap items-start justify-start">
          <SkillImgAnimate delay={0.1}>
            <div className="flex flex-col items-center">
              <div className="bg-[rgba(237,199,0,0.1)] rounded-full flex items-center justify-center w-[90px] h-[90px] m-4">
                <img
                  alt="html"
                  src="./assets/javascript.webp"
                  width={50}
                  height={50}
                />
              </div>
              <span>javaScript</span>
            </div>
          </SkillImgAnimate>
          <SkillImgAnimate delay={0.2}>
            <div className="flex flex-col items-center">
              <div className="bg-[#aaa] rounded-full flex items-center justify-center w-[90px] h-[90px] m-4">
                <img
                  alt="html"
                  src="./assets/nextjs.webp"
                  width={50}
                  height={50}
                />
              </div>
              <span>NextJs</span>
            </div>
          </SkillImgAnimate>
          <SkillImgAnimate delay={0.3}>
            <div className="flex flex-col items-center">
              <div className="bg-[rgba(128,222,234,0.1)] rounded-full flex items-center justify-center w-[90px] h-[90px] m-4">
                <img
                  alt="html"
                  src="./assets/react-native.webp"
                  width={50}
                  height={50}
                />
              </div>
              <span>React</span>
            </div>
          </SkillImgAnimate>
          <SkillImgAnimate delay={0.4}>
            <div className="flex flex-col items-center">
              <div className="bg-[rgba(126,87,194,0.1)] rounded-full flex items-center justify-center w-[90px] h-[90px] m-4">
                <img
                  alt="html"
                  src="./assets/redux.webp"
                  width={50}
                  height={50}
                />
              </div>
              <span>Redux</span>
            </div>
          </SkillImgAnimate>
          <SkillImgAnimate delay={0.5}>
            <div className="flex flex-col items-center">
              <div className="bg-[rgba(105,149,218,0.1)] rounded-full flex items-center justify-center w-[90px] h-[90px] m-4">
                <img
                  alt="html"
                  src="./assets/typescript.webp"
                  width={50}
                  height={50}
                />
              </div>
              <span>Typescript</span>
            </div>
          </SkillImgAnimate>
          <SkillImgAnimate delay={0.1}>
            <div className="flex flex-col items-center">
              <div className="bg-[rgba(0,172,193,0.1)] rounded-full flex items-center justify-center w-[90px] h-[90px] m-4">
                <img
                  alt="html"
                  src="./assets/tailwindcss.webp"
                  width={50}
                  height={50}
                />
              </div>
              <span>Tailwind</span>
            </div>
          </SkillImgAnimate>
          <SkillImgAnimate delay={0.2}>
            <div className="flex flex-col items-center">
              <div className="bg-[rgba(25,155,224,0.1)] rounded-full flex items-center justify-center w-[90px] h-[90px] m-4">
                <img
                  alt="html"
                  src="./assets/material-ui.webp"
                  width={50}
                  height={50}
                />
              </div>
              <span>Material Ui</span>
            </div>
          </SkillImgAnimate>
          <SkillImgAnimate delay={0.3}>
            <div className="flex flex-col items-center">
              <div className="bg-[rgba(238,194,128,0.1)] rounded-full flex items-center justify-center w-[90px] h-[90px] m-4">
                <img
                  alt="html"
                  src="./assets/html-5--v2.webp"
                  width={50}
                  height={50}
                />
              </div>
              <span>HTML</span>
            </div>
          </SkillImgAnimate>
          <SkillImgAnimate delay={0.4}>
            <div className="flex flex-col items-center">
              <div className="bg-[rgba(111,161,211,0.1)] rounded-full flex items-center justify-center w-[90px] h-[90px] m-4">
                <img
                  alt="html"
                  src="./assets/css3.webp"
                  width={50}
                  height={50}
                />
              </div>
              <span>CSS</span>
            </div>
          </SkillImgAnimate>
          <SkillImgAnimate delay={0.5}>
            <div className="flex flex-col items-center">
              <div className="bg-[rgba(157,139,204,0.1)] rounded-full flex items-center justify-center w-[90px] h-[90px] m-4">
                <img
                  alt="html"
                  src="./assets/bootstrap.webp"
                  width={50}
                  height={50}
                />
              </div>
              <span>Bootstrap</span>
            </div>
          </SkillImgAnimate>
          <SkillImgAnimate delay={0.1}>
            <div className="flex flex-col items-center">
              <div className="bg-[rgba(240,98,146,0.1)] rounded-full flex items-center justify-center w-[90px] h-[90px] m-4">
                <img
                  alt="html"
                  src="./assets/sass.webp"
                  width={50}
                  height={50}
                />
              </div>
              <span>SASS</span>
            </div>
          </SkillImgAnimate>
        </div>
        <AnimationEffect delay={0} duration={1} y={50}>
          <div className="text-center pt-24 pb-8">
            <span className="bg-[#FFBD44] px-4 py-2 rounded-lg">Backend</span>
          </div>
        </AnimationEffect>
        <div className="w-full flex flex-wrap items-start justify-start">
          <SkillImgAnimate delay={0.1}>
            <div className="flex flex-col items-center">
              <div className="bg-[rgba(59,107,77,0.1)] rounded-full flex items-center justify-center w-[90px] h-[90px] m-4">
                <img
                  alt="html"
                  src="./assets/nodejs.webp"
                  width={50}
                  height={50}
                />
              </div>
              <span>nodeJS</span>
            </div>
          </SkillImgAnimate>
          <SkillImgAnimate delay={0.2}>
            <div className="flex flex-col items-center">
              <div className="bg-[#aaa] rounded-full flex items-center justify-center w-[90px] h-[90px] m-4">
                <img
                  alt="html"
                  src="./assets/express.webp"
                  width={50}
                  height={50}
                />
              </div>
              <span>ExpressJS</span>
            </div>
          </SkillImgAnimate>
          <SkillImgAnimate delay={0.3}>
            <div className="flex flex-col items-center">
              <div className="bg-[rgba(92,132,76,0.1)] rounded-full flex items-center justify-center w-[90px] h-[90px] m-4">
                <img
                  alt="html"
                  src="./assets/mongodb.webp"
                  width={50}
                  height={50}
                />
              </div>
              <span>MongoDB</span>
            </div>
          </SkillImgAnimate>
          <SkillImgAnimate delay={0.4}>
            <div className="flex flex-col items-center">
              <div className="bg-[rgba(255,179,0,0.1)] rounded-full flex items-center justify-center w-[90px] h-[90px] m-4">
                <img
                  alt="html"
                  src="./assets/firebase.webp"
                  width={50}
                  height={50}
                />
              </div>
              <span>Firebase</span>
            </div>
          </SkillImgAnimate>
          <SkillImgAnimate delay={0.5}>
            <div className="flex flex-col items-center">
              <div className="bg-[rgba(105,149,218,0.1)] rounded-full flex items-center justify-center w-[90px] h-[90px] m-4">
                <img
                  alt="html"
                  src="./assets/mysql.webp"
                  width={50}
                  height={50}
                />
              </div>
              <span>MySQL</span>
            </div>
          </SkillImgAnimate>
        </div>

        <div className="text-center pt-16 pb-8">
          {/* <span className="bg-[#00CA4E] px-4 py-2 rounded-lg">Tools</span> */}
        </div>
      </div>
    </div>
  );
}
