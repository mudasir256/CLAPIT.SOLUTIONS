"use client";
import Image, { StaticImageData } from "next/image";
import { IMAGES } from "@/public/images";

interface CustomCardProps {
  name: string;
  description: string;
  image?: string | StaticImageData;
  proflieLink?: string;
}

const CustomCard: React.FC<CustomCardProps> = ({
  name,
  description,
  image,
  proflieLink,
}) => {
  const handleClick = () => {
    window.open(proflieLink, "_blank");
  };
  return (
    <div className="bg-dark text-white rounded-xl p-4 flex flex-col items-center w-full">
      <div className="w-20 h-20 mb-3">
        <Image
          src={image || IMAGES.profile}
          className="w-full h-full object-cover rounded-full"
          alt="Profile"
          width={80}
          height={80}
        />
      </div>

      <p className="text-lg text-secondary font-semibold text-nowrap">{name}</p>

      <div className="flex justify-between items-center w-full mt-4">
        <p className="text-md text-primary">{description}</p>
        <button onClick={handleClick}>
          <Image
            src={IMAGES.Linkedin}
            className="w-full h-full"
            alt="Linkedin"
            width={20}
            height={20}
          />
        </button>
      </div>
    </div>
  );
};

export default CustomCard;
