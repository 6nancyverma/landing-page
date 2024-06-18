import Image from "next/image";

const Aminities = () => {
  return (
    <div className="mx-auto p-4 w-full">
      <div className="flex flex-col items-center justify-center gap-2 md:flex-row md:mb-8">
        <div className="w-full">
          <Image
            src="/aminities/exterior.png"
            alt="exterior"
            width={1000}
            height={800}
            className="rounded-lg shadow-md w-full mb-2"
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-1 md:gap-2">
        {[
          { src: "/aminities/washroom.png", alt: "washroom" },
          { src: "/aminities/pool.png", alt: "pool" },
          { src: "/aminities/room.png", alt: "room" },
          { src: "/aminities/reception.png", alt: "reception" },
        ].map((amenity, index) => (
          <div key={index} className="w-[24%]">
            <Image
              src={amenity.src}
              alt={amenity.alt}
              width={300}
              height={200}
              className="rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Aminities;
