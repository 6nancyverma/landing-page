import Image from "next/image";

interface FeaturesCardProps {
  imageSrc: string;
  text: string;
}

const FeaturesCard: React.FC<FeaturesCardProps> = ({ imageSrc, text }) => {
  return (
    <div className="bg-white px-4 py-6 shadow-lg rounded-[1.25rem] flex flex-col items-center">
      <Image
        src={imageSrc}
        alt={text}
        width={500}
        height={500}
        className="mb-2 md:mb-4"
      />
      <p className="text-center text-[#00357B] font-semibold text-[0.75rem] md:text-[1rem] leading-5 w-[90%] md:w-[70%]">
        {text}
      </p>
    </div>
  );
};

export default FeaturesCard;
