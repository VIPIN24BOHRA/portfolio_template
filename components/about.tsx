import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function About() {
  return (
    <div className="text-white min-h-screen px-40 flex">
      <div className="overflow-hidden basis-1/3 rounded-lg">
        <img
          alt="my_ai_img"
          src="./assets/my_ai_img_2.jpg"
          className="h-full object-cover"
        />
      </div>

      <div className="pl-8 basis-2/3">
        <h3 className="text-4xl text-center pb-16">About Me</h3>

        <p>
          <span className="inline-block font-semibold mr-4 bg-[#ff0000] px-4 py-[6px] text-xs rounded-2xl">
            #Full Stack Developer
          </span>
          <span className="inline-block font-semibold  mr-4 bg-[#ff0000] px-4 py-[6px] text-xs rounded-2xl">
            #Mobile App Developer
          </span>
          <span className="inline-block font-semibold  mr-4 bg-[#ff0000] px-4 py-[6px] text-xs rounded-2xl">
            #DSA Lover
          </span>
        </p>
        <p className="flex pt-8 text-lg tracking-wide font-thin text-[#ddd]">
          <span className="-mt-[2px] mr-4">
            <ArrowForwardIosIcon fontSize="small" className="text-[#aaa]" />
          </span>
          <span>
            Hello there!{" "}
            <b className="text-white font-bold">I&apos;m Vipin Bohra,</b> a{" "}
            <b className="text-white font-bold">passionate individual</b>{" "}
            dedicated to creating end-to-end products that{" "}
            <b className="text-white font-bold">
              develop sustainable and scalable social and technical systems,
            </b>{" "}
            aiming to make a positive impact.
          </span>
        </p>
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
            <b className="text-white font-bold">India, working on a startup.</b>
          </li>
          <li>
            I am{" "}
            <b className="text-white font-bold">
              actively exploring new opportunities
            </b>{" "}
            to expand my expertise and contribute effectively.
          </li>
        </ul>
        <p className="flex pt-8 text-lg tracking-wide font-thin text-[#ddd]">
          <span className="-mt-[2px] mr-4">
            <ArrowForwardIosIcon fontSize="small" className="text-[#aaa]" />
          </span>
          <span>
            I completed my graduation from{" "}
            <b className="text-white font-bold">NIT Durgapur, </b>where my
            coding journey began in{" "}
            <b className="text-white font-bold">my first year.</b> It all
            started with{" "}
            <b className="text-white font-bold">
              exploring the world of web development.
            </b>{" "}
            I delved into{" "}
            <b className="text-white font-bold">
              learning HTML, CSS, and JavaScript.
            </b>{" "}
            Gradually,{" "}
            <b className="text-white font-bold">
              I fell in love with web development and coding,
            </b>{" "}
            and to enhance my skills further, I began{" "}
            <b className="text-white font-bold">
              practicing Data Structures and Algorithms (DSA).
            </b>{" "}
            This not only improved my{" "}
            <b className="text-white font-bold">
              logical thinking but also prepared me for competitive programming
              challenges.
            </b>
          </span>
        </p>
        <a
          href=""
          className="group  inline-block cursor-pointer mt-8 bg-[#ff0000] px-4 py-2 rounded-lg text-sm opacity-95 hover:opacity-100"
        >
          Resume{" "}
          <ArrowForwardIosIcon
            fontSize="small"
            className="group-hover:translate-x-1 transition duration-300 ease-in-out	"
          />
        </a>
      </div>
    </div>
  );
}
