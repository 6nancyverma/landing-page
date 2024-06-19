import Image from "next/image";
import AminitiesData from "../data/AmenitiesData.json";

const Amenities = () => {
  return (
    <div className="mx-auto p-4 w-full gap-[0.25rem]">
      <div className="flex flex-col items-center justify-center gap-2 md:flex-row mb-4">
        <div className="w-full">
          <Image
            src={AminitiesData[0].src}
            alt={AminitiesData[0].alt}
            width={AminitiesData[0].width}
            height={AminitiesData[0].height}
            className="rounded-lg shadow-md w-full"
          />
        </div>
      </div>

      <div className="flex justify-between gap-4 md:gap-2">
        {AminitiesData.slice(1).map((image, index) => (
          <div key={index} className="w-[25%]">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Amenities;
