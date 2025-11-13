"use client";
import CustomCard from "@/components/common/CustomCard";
import ContactUsForm from "@/components/ContactUs/ContactUsForm";
import { IMAGES } from "@/public/images";
import { SiAmazonsimpleemailservice } from "react-icons/si";
import { MdOutlinePhoneInTalk } from "react-icons/md";

const ContactUs = () => {
  const getImageUrl = (image: string | any): string => {
    if (!image) return "";
    if (typeof image === "string") return image;
    if (image && typeof image === "object" && "src" in image) {
      return image.src;
    }
    return String(image);
  };

  const building1Url = getImageUrl(IMAGES.Building1);
  const building2Url = getImageUrl(IMAGES.Building2);

  return (
    <div className="bg-light md:flex md:flex-row md:justify-between md:items-center md:gap-12 md:py-40 p-6 lg:pt-24 pt-20">
      <div className="container md:mx-auto mx-2">
        <div className="flex md:flex-row flex-col justify-center gap-20 mb-16">
          <ContactUsForm />
          <div className="bg-light p-10 rounded-3xl shadow-xl border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Meet Our Team
            </h2>

            <div className="space-y-8">
              <div className="flex flex-col lg:space-y-0 space-y-8 md:flex-row md:items-stretch md:gap-8 w-full ">
                <div className="w-full">
                  <CustomCard
                    name="Syed Mudasir Bukhari"
                    description="CEO"
                    proflieLink="https://www.linkedin.com/in/syed-mudasir-bukhari/"
                    image={IMAGES.Mudasir}
                  />
                </div>
                <div className="w-full">
                  <CustomCard
                    name="Syeda Mehwish Kanwal"
                    description="Creative Director"
                    proflieLink="https://www.linkedin.com/in/mehwish-kanwal-814129288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                    image={IMAGES.Mehwish}
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <div className=" lg:w-[50%] w-full">
                  <CustomCard
                    name="Syed Mubashir Bukhari"
                    description="Head of Sales"
                    proflieLink="https://www.linkedin.com/in/syed-mubashir-a68384168?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    image={IMAGES.Mubashir}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-dark capitalize mb-8 sm:mb-12 md:mb-16">
            Our Offices Around the World
          </h1>
          <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-6 sm:gap-8 lg:gap-10 max-w-8xl mx-auto">
            <div className="relative w-full sm:w-[80%] md:w-[450px] h-[250px] sm:h-[300px] transition-all duration-500 ease-in-out hover:w-full lg:hover:w-[500px] group">
              <div
                style={{
                  backgroundImage: `url('${building1Url}')`,
                }}
                className="p-6 sm:p-8 rounded-xl shadow-lg w-full h-full transform origin-left transition-all duration-500 ease-in-out lg:group-hover:scale-x-105 relative bg-cover bg-center overflow-hidden"
              >
                <div className="absolute inset-0 bg-dark rounded-xl opacity-0 group-hover:opacity-95 transition-all duration-500 ease-in-out"></div>
                <div className="relative z-10 h-full flex flex-col justify-center">
                  <h2 className="text-4xl sm:text-4xl font-bold text-secondary group-hover:text-white transition-colors duration-500">
                    California
                  </h2>
                  <div className="overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                    <span className="w-16 sm:w-20 h-[1px] bg-white mb-3 sm:mb-4 block mt-2"></span>
                    <span className="text-secondary block mt-3 sm:mt-4 text-sm sm:text-md font-medium">
                    1440 Newport Ave, San Jose, CA 95125,
                      <br />San Jose City, California, United States
                    </span>
                    <div className="grid gap-2 sm:gap-3 mt-4 sm:mt-6">
                      <span className="text-secondary flex items-center gap-3 sm:gap-4 group/item w-fit">
                        <p className="p-1 sm:p-2 rounded-full bg-secondary/20">
                          <SiAmazonsimpleemailservice className="text-sm sm:text-base" />
                        </p>
                        <p className="hover:text-light cursor-pointer text-sm sm:text-md transition-all duration-300">
                        CLAPIT SOLUTIONSsolutions@gmail.com
                        </p>
                      </span>
                      <span className="text-secondary flex items-center gap-3 sm:gap-4 group/item w-fit">
                        <p className="p-1 sm:p-2 rounded-full bg-secondary/20">
                          <MdOutlinePhoneInTalk className="text-sm sm:text-base" />
                        </p>
                        <p className="hover:text-light cursor-pointer text-sm sm:text-md transition-all duration-300">
                          +92 310 44 34 436
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative w-full sm:w-[80%] md:w-[450px] h-[250px] sm:h-[300px] transition-all duration-500 ease-in-out hover:w-full lg:hover:w-[500px] group">
              <div
                style={{
                  backgroundImage: `url('${building2Url}')`,
                }}
                className="p-6 sm:p-8 rounded-xl shadow-lg w-full h-full transform origin-right transition-all duration-500 ease-in-out lg:group-hover:scale-x-105 relative bg-cover bg-center overflow-hidden"
              >
                <div className="absolute inset-0 bg-dark rounded-xl opacity-0 group-hover:opacity-95 transition-all duration-500 ease-in-out"></div>
                <div className="relative z-10 h-full flex flex-col justify-center">
                  <h2 className="text-4xl sm:text-4xl font-bold text-secondary group-hover:text-white transition-colors duration-500">
                    Lahore
                  </h2>
                  <div className="overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                    <span className="w-16 sm:w-20 h-[1px] bg-white mb-3 sm:mb-4 block mt-2"></span>
                    <span className="text-secondary block mt-3 sm:mt-4 text-sm sm:text-md font-medium">
                      Pakistan, 2nd Floor, 43-CCA,
                      <br /> Gulberg III, Lahore, Punjab, Pakistan
                    </span>
                    <div className="grid gap-2 sm:gap-3 mt-4 sm:mt-6">
                      <span className="text-secondary flex items-center gap-3 sm:gap-4 group/item w-fit">
                        <p className="p-1 sm:p-2 rounded-full bg-secondary/20">
                          <SiAmazonsimpleemailservice className="text-sm sm:text-base" />
                        </p>
                        <p className="hover:text-light cursor-pointer text-sm sm:text-md transition-all duration-300">
                          mycodecircle302@gmail.com
                        </p>
                      </span>
                      <span className="text-secondary flex items-center gap-3 sm:gap-4 group/item w-fit">
                        <p className="p-1 sm:p-2 rounded-full bg-secondary/20">
                          <MdOutlinePhoneInTalk className="text-sm sm:text-base" />
                        </p>
                        <p className="hover:text-light cursor-pointer text-sm sm:text-md transition-all duration-300">
                          +92 307 3346 890
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
