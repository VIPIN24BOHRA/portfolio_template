import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function About() {
  return (
    <div className="text-white min-h-screen px-40 flex">
      <div className="overflow-hidden max-h-screen sticky top-10 basis-1/3 rounded-lg">
        <img
          alt="my_ai_img"
          src="./assets/my_ai_img_2.jpg"
          className="h-full object-cover"
        />
      </div>

      <div className="pl-8 basis-2/3">
        <div className="py-16" id="aboutMe">
          <h3 className="text-4xl text-center">About Me</h3>

          {/* <p className="text-center">
            <span className="inline-block font-semibold text-sm text-[#ff0000] mr-4">
              #Full Stack Developer
            </span>
            <span className="inline-block font-semibold text-sm text-[#FF5E0E] mr-4">
              #Mobile App Developer
            </span>
            <span className="inline-block font-semibold text-sm text-[#ff0]">
              #DSA Lover
            </span>
          </p> */}
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
                <b className="text-white font-bold">I&apos;m Vipin Bohra,</b> a{" "}
                <b className="text-white font-bold">passionate individual</b>{" "}
                dedicated to creating end-to-end products that{" "}
                <b className="text-white font-bold">
                  develop sustainable and scalable social and technical systems,
                </b>{" "}
                aiming to make a positive impact.
              </p>
            </div>
          </div>
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
                This not only improved my logical thinking but also prepared me
                for{" "}
                <b className="text-white font-bold">
                  competitive programming challenges.
                </b>
              </p>
            </div>
          </div>
          <a
            href=""
            className="ml-8 group  inline-block cursor-pointer mt-8 bg-[#ff0000] px-4 py-2 rounded-lg text-sm opacity-95 hover:opacity-100"
          >
            Resume{" "}
            <ArrowForwardIosIcon
              fontSize="small"
              className="group-hover:translate-x-1 transition duration-300 ease-in-out	"
            />
          </a>
        </div>
        <div className="py-32" id="education">
          <h3 className="text-4xl text-center pb-16">Education</h3>
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
          <ul className="pt-4 tracking-wide font-thin text-[#ccc] list-disc pl-20">
            <li>
              I have studied{" "}
              <b className="text-white font-bold">
                software engineering subjects like DS, Algorithms, DBMS, OS, CA
                etc.
              </b>
            </li>
            <li>
              Apart from this, I have done courses{" "}
              <b className="text-white font-bold">on Full Stack Development.</b>
            </li>

            <li>
              Got <b className="text-white font-bold">9.0 CGPA out of 10.</b>
            </li>
          </ul>
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
        </div>
      </div>
    </div>
  );
}
