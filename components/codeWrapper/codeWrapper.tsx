import ScaleAnimationEffect from "../Animation/ScaleAnimationEffect";
import AnimationEffect from "../Animation/AnimationEffect";
/* eslint-disable react/no-unescaped-entities */
export default function CodeWrapper() {
  return (
    <AnimationEffect delay={0.1} y={25} duration={1}>
      <pre className="text-white w-[650px] border-2 border-[#333] pt-2 text-[16px] font-thin rounded-xl ">
        <nav className="block">
          <div className="flex mb-4">
            <p className="w-[14px] h-[14px] rounded-full bg-[#FF605C] ml-2 mr-1"></p>
            <p className="w-[14px] h-[14px] rounded-full bg-[#FFBD44] mr-1"></p>
            <p className="w-[14px] h-[14px] rounded-full bg-[#00CA4E]"></p>
          </div>

          <div className="">
            <span className="bg-[#222] p-2 rounded-lg ml-8">
              my_profile.js{" "}
            </span>
          </div>
        </nav>

        <div className="bg-[#222] mt-0">
          <span className="block">
            <span className="inline-block mr-8 ml-2">1</span>
            <span className="text-[#c792ea]">const</span>{" "}
            <span className="text-[#F4C430]">name</span>{" "}
            <span className="text-[#89ddff]">=</span>{" "}
            <span className="text-[#a5e844]">'Vipin Bohra'</span>
          </span>
          <span className="block">
            <span className="inline-block mr-8 ml-2">2</span>
            <span className="text-[#c792ea]">const</span>{" "}
            <span className="text-[#F4C430]">skills</span> <span>=</span>{" "}
            <span className="text-[#89ddff]">[</span>
          </span>
          <ScaleAnimationEffect delay={1} duration={1}>
            <span className="block border-l-4 border-l-[#89ddff] -ml-1 bg-[#eee2]">
              <span className="block">
                <span className="inline-block mr-12 ml-2">3</span>
                <span className="text-[#a5e844]">
                  'javaScript'<span className="text-[#89ddff]">,</span>
                </span>
              </span>

              <span className="block">
                <span className="inline-block mr-12 ml-2">4</span>
                <span className="text-[#a5e844]">
                  'Nextjs'<span className="text-[#89ddff]">,</span>
                </span>
              </span>

              <span className="block">
                <span className="inline-block mr-12 ml-2">5</span>
                <span className="text-[#a5e844]">
                  'Nodejs'<span className="text-[#89ddff]">,</span>
                </span>
              </span>

              <span className="block">
                <span className="inline-block mr-12 ml-2">6</span>
                <span className="text-[#a5e844]">
                  'MongoDB'<span className="text-[#89ddff]">,</span>
                </span>
              </span>
              <span className="block">
                <span className="inline-block mr-12 ml-2">7</span>
                <span className="text-[#a5e844]">'MySql'</span>
              </span>
              <span className="block">
                <span className="inline-block mr-12 ml-2">8</span>
                <span className="text-[#a5e844]">'React'</span>
              </span>
            </span>
          </ScaleAnimationEffect>
          <span className="block">
            <span className="inline-block mr-8 ml-2">9</span>

            <span className=" text-[#89ddff]">]</span>
          </span>
          <span className="block">
            <span className="inline-block mr-6 ml-2">10</span>
            <span className="text-[#c792ea]">const</span>{" "}
            <span className="text-[#F4C430]">want_to_hire</span> <span>=</span>{" "}
            <span>true</span>
          </span>
          <span className="block">
            <span className="inline-block mr-6 ml-2">11</span>
            <span className="text-[#c792ea]">const</span>{" "}
            <span className="text-[#F4C430]">prefect_match</span> <span>=</span>{" "}
            <span>
              skills.<span className="text-[#89ddff]">includes</span>
              <span>(</span>
              <span className="text-[#a5e844]">'React'</span>
              <span>)</span>
            </span>
          </span>
          <span className="block">
            <span className="inline-block mr-6 ml-2">12</span>
            <span className="text-[#c792ea]">if</span> <span>(</span>
            <span>want_to_hire</span> <span className="text-[#ff0000]">&&</span>{" "}
            <span>prefect_match</span>
            <span>)</span>
          </span>
          <span className="block">
            <span className="inline-block mr-16 ml-2">13</span>
            <span className="text-[#F4C430]">console.</span>
            <span className="text-[#89ddff]">log</span>
            <span>(</span>
            <span className="text-[#a5e844]">
              'Vola! found perfect match!!'
            </span>
            <span>)</span>
          </span>
          <span className="block">
            <span className="inline-block ml-2">14</span>
          </span>
          <span className="block">
            <span className="inline-block ml-2">15</span>
          </span>
          <span className="block">
            <span className="inline-block ml-2">16</span>
          </span>
          <span className="block">
            <span className="inline-block ml-2">17</span>
          </span>
        </div>
      </pre>
    </AnimationEffect>
  );
}
