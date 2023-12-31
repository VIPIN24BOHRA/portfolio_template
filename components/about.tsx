import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AnimationEffect from "./Animation/AnimationEffect";

export default function About() {
  return (
    <div className="text-white min-h-screen px-2 sm:px-40 flex flex-col sm:flex-row">
      <div className="overflow-hidden -rotate-6 sm:rotate-0 mx-8 max-h-screen  relative sm:sticky top-0 sm:top-10 basis-1/3 rounded-lg">
        <img
          alt="my_ai_img"
          src="./assets/my_ai_img_2.jpg"
          className="h-full object-cover"
        />
        <p className="text-center mt-2 text-[#aaa]">
          This is what AI thinks about me 🚀!{" "}
        </p>
      </div>

      <div className="ol-2 sm:pl-8 flex-1 sm:basis-2/3">
        <div className="py-16" id="aboutMe">
          <AnimationEffect delay={0.3} duration={1} y={25}>
            <h3 className="text-4xl text-center">About Me</h3>
          </AnimationEffect>
          <AnimationEffect delay={0.3} duration={1} y={25}>
            <div className="flex pt-8 text-[18px] tracking-wide font-thin text-[#ddd]">
              <span className="-mt-[2px] mr-4">
                <ArrowForwardIosIcon fontSize="small" className="text-[#aaa]" />
              </span>
              <div>
                <span className="font-semibold text-2xl bg-gradient-to-r from-[#ff0000] to-[#ff0] text-transparent bg-clip-text">
                  Introduction :
                </span>
                <p>
                  Hello there!{" "}
                  <b className="text-white font-bold">I&apos;m Vipin Bohra,</b>{" "}
                  a{" "}
                  <b className="text-white font-bold">passionate individual</b>{" "}
                  dedicated to creating end-to-end products that{" "}
                  <b className="text-white font-bold">
                    develop sustainable and scalable social and technical
                    systems,
                  </b>{" "}
                  aiming to make a positive impact.
                </p>
              </div>
            </div>
          </AnimationEffect>
          <AnimationEffect delay={0.3} duration={1} y={25}>
            <ul className="pt-4 tracking-wide font-thin text-[#ccc] list-disc pl-20">
              <li>
                I have a{" "}
                <b className="text-white font-bold">
                  strong background in computer science and engineering.
                </b>
              </li>
              <li>
                Continuously seeking{" "}
                <b className="text-white font-bold">
                  fresh challenges to propel my growth and skills
                </b>{" "}
                to new heights.
              </li>
              <li>
                Currently based in{" "}
                <b className="text-white font-bold">
                  India, working on a startup.
                </b>
              </li>
              <li>
                I am{" "}
                <b className="text-white font-bold">
                  actively exploring new opportunities
                </b>{" "}
                to expand my expertise and contribute effectively.
              </li>
            </ul>
          </AnimationEffect>
          <AnimationEffect delay={0.3} duration={1} y={25}>
            <div className="flex pt-8 text-[18px] tracking-wide font-thin text-[#ddd]">
              <span className="-mt-[2px] mr-4">
                <ArrowForwardIosIcon fontSize="small" className="text-[#aaa]" />
              </span>
              <div>
                <span className="font-semibold text-2xl bg-gradient-to-r from-[#ff0000] to-[#ff0] text-transparent bg-clip-text">
                  Coding Journey :
                </span>
                <p>
                  I completed my graduation from{" "}
                  <b className="text-white font-bold">NIT Durgapur, </b>where my
                  coding journey began in{" "}
                  <b className="text-white font-bold">my first year.</b> It all
                  started with exploring the world of{" "}
                  <b className="text-white font-bold">web development.</b> I
                  delved into learning{" "}
                  <b className="text-white font-bold">
                    HTML, CSS, and JavaScript.
                  </b>{" "}
                  Gradually, I fell in love with{" "}
                  <b className="text-white font-bold">
                    web development and coding,
                  </b>{" "}
                  and to enhance my skills further, I began{" "}
                  <b className="text-white font-bold">
                    practicing Data Structures and Algorithms (DSA).
                  </b>{" "}
                  This not only improved my logical thinking but also prepared
                  me for{" "}
                  <b className="text-white font-bold">
                    competitive programming challenges.
                  </b>
                </p>
              </div>
            </div>
          </AnimationEffect>
          <AnimationEffect delay={0.3} duration={1} y={25}>
            <a
              href="https://drive.google.com/file/d/1upmqH5l2Jg7PYsOo8hjllyQp73UNTa9R/view?usp=drive_link"
              target="_blank"
              className="ml-8 group  inline-block cursor-pointer mt-8 bg-[#ff0000] px-4 py-2 rounded-lg text-sm opacity-95 hover:opacity-100"
            >
              Resume{" "}
              <ArrowForwardIosIcon
                fontSize="small"
                className="group-hover:translate-x-1 transition duration-300 ease-in-out	"
              />
            </a>
          </AnimationEffect>
        </div>
        <div className="pt-16 pb-8 sm:py-32" id="education">
          <AnimationEffect delay={0.3} duration={1} y={25}>
            <h3 className="text-4xl text-center pb-16">Education</h3>
          </AnimationEffect>
          <AnimationEffect delay={0.3} duration={1} y={25}>
            <div className="flex pt-8 text-lg tracking-wide font-thin text-[#ddd]">
              <span className="-mt-[2px] mr-4">
                <ArrowForwardIosIcon fontSize="small" className="text-[#aaa]" />
              </span>
              <div className="grow">
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-2xl bg-gradient-to-r from-[#ff0000] to-[#ff0] text-transparent bg-clip-text">
                    National Institute of Technology, Durgapur.
                  </p>
                  <span className="font-bold">2019-2023</span>
                </div>
                <p className="text-sm py-4">
                  Bachelor of Technology, in Computer Science and Engineering
                </p>
              </div>
            </div>
          </AnimationEffect>
          <AnimationEffect delay={0.3} duration={1} y={25}>
            <ul className="pt-4 tracking-wide font-thin text-[#ccc] list-disc pl-20">
              <li>
                I have studied{" "}
                <b className="text-white font-bold">
                  software engineering subjects like DS, Algorithms, DBMS, OS,
                  CA etc.
                </b>
              </li>
              <li>
                Apart from this, I have done courses{" "}
                <b className="text-white font-bold">
                  on Full Stack Development.
                </b>
              </li>

              <li>
                Got <b className="text-white font-bold">9.0 CGPA out of 10.</b>
              </li>
            </ul>
          </AnimationEffect>
          <AnimationEffect delay={0.3} duration={1} y={25}>
            <div className="flex pt-8 text-lg tracking-wide font-thin text-[#ddd]">
              <span className="-mt-[2px] mr-4">
                <ArrowForwardIosIcon fontSize="small" className="text-[#aaa]" />
              </span>
              <div className="grow">
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-2xl bg-gradient-to-r from-[#ff0000] to-[#ff0] text-transparent bg-clip-text">
                    Green Valley Public School.
                  </p>
                  <span className="font-bold">2016-2018</span>
                </div>
                <p className="text-sm py-4">Higher secondary Education</p>
              </div>
            </div>
          </AnimationEffect>
          <AnimationEffect delay={0.3} duration={1} y={25}>
            <ul className="pt-4 tracking-wide font-thin text-[#ccc] list-disc pl-20">
              <li>
                I have studied{" "}
                <b className="text-white font-bold">
                  Science subjects like Physics, Chemistry and Maths.
                </b>
              </li>
              <li>
                Apart from this, I prepared{" "}
                <b className="text-white font-bold">for JEE Advance.</b>
              </li>
              <li>
                Got{" "}
                <b className="text-white font-bold">
                  91.6%, Secured 2nd position.
                </b>
              </li>
              <li>
                Got{" "}
                <b className="text-white font-bold">
                  AIR 7600 in JEE Mains and AIR 6600 in JEE Advance.
                </b>
              </li>
            </ul>
          </AnimationEffect>
        </div>
      </div>
    </div>
  );
}
