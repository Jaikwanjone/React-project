import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { SiWechat } from "react-icons/si";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-12 px-4 grid lg:grid-cols-3 gap-8 bg-black ">
      <div>
        <h1 className="w-full text-4xl font-bold text-[#00df9a]">React.js</h1>
        <p className="py-4 px-2 text-white">
          React is the library for web and native user interfaces. Build user
          interfaces out of individual pieces called components written in
          JavaScript.
        </p>
        <div className=" text-white flex ml-3 justify-evenly md-w-[75%] my-5 mx-2">
          <FaFacebook className="text-xl mx-2 cursor-pointer" />
          <FaInstagram className="text-xl mx-2 cursor-pointer" />
          <FaGithub className="text-xl mx-2  cursor-pointer" />
          <SiWechat className="text-xl mx-2  cursor-pointer" />
        </div>
      </div>
      <div className=" lg:col-span-2 flex justify-between mt-6">
        <div>
          <h1 className="font-medium text-gray-400">Soultion</h1>
          <ul className="text-white">
            <li className="py-3 text-sm">Ananytics</li>
            <li className="py-3 text-sm">Marketing</li>
            <li className="py-3 text-sm">Commerce</li>
            <li className="py-3 text-sm">Insights</li>
          </ul>
        </div>
        <div>
          <h1 className="font-medium text-gray-400">Support</h1>
          <ul className="text-white">
            <li className="py-3 text-sm">Pricing</li>
            <li className="py-3 text-sm">Documentation</li>
            <li className="py-3 text-sm">Guides</li>
            <li className="py-3 text-sm">API Status</li>
          </ul>
        </div>
        <div>
          <h1 className="font-medium text-gray-400">Company</h1>
          <ul className="text-white">
            <li className="py-3 text-sm">About</li>
            <li className="py-3 text-sm">Blogs</li>
            <li className="py-3 text-sm">Jobs</li>
            <li className="py-3 text-sm">Press</li>
            <li className="py-3 text-sm">Careers</li>
          </ul>
        </div>
        <div>
          <h1 className="font-medium text-gray-400">Legal</h1>
          <ul className="text-white">
            <li className="py-3 text-sm">Claim</li>
            <li className="py-3 text-sm">Policy</li>
            <li className="py-3 text-sm">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
