import { Mail } from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-[#121212] text-white text-center">
      <div>
        <p className="text-[28px] font-bold text-red-500 mt-8">GoFlix.Com</p>
      </div>
      <div className="text-[#757577] p-4 md:p-10 md:pt-2 md:px-30">
        <p className="text-green-400">About GoFlix</p>
        <p>
          Goflix is a demo streaming platform that currently shows trending,
          popular, and top-rated movies & tv shows from collection of live movies database.
          This site does not play movies but tailers, it is still under progress.
          Developed by{" "}
          <span className="text-orange-300 font-semibold">
            Gopal Krishna Mohanta{" "}
          </span>
          . Many upcoming features and improvements will be released in the
          future updates
        </p>
      </div>
      <div className="bg-black p-4 text-[#757577] text-center">
        <p>
          Copyright @2025 All rights reserved | Contact :
          9123243015@kcgcollege.com
        </p>
      </div>
    </footer>
  );
};

export default Footer;
