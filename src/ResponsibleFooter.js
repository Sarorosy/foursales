import { Twitter, Facebook, Instagram, Mail } from "lucide-react";

const ResponsibleFooter = () => {
  return (
    <footer className="bg-black text-white">
      <div className=" mx-auto ">
        <div className=" border-b-2 border-white border-t-2 py-4 font-semibold  px-2 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-4">
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-gray-300" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="hover:text-gray-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
            <div className="flex items-center">
              <Mail size={20} className="mr-2" />
              <span>business.socialrecoveries@gmail.com</span>
            </div>
            
          </div>
        </div>
        <div className="flex justify-between items-center text-sm px-3 md:px-8 py-3">
          <div>© Copyright {new Date().getFullYear()} Social Recoveries</div>
          <div className="space-x-4"></div>
        </div>
      </div>
    </footer>
  );
};

export default ResponsibleFooter;
