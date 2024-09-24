import React from "react";

const ServiceCard = ({ service, index }) => {
  const backgroundColor = index % 2 === 0 ? "#FFFFE0" : "#E9DECB";

  return (
    <div
      className="shadow-lg rounded-lg overflow-hidden"
      style={{ backgroundColor }}
    >
      <img
        src={`http://localhost${service.image_URL}`}
        alt={service.name}
        className="w-full rounded-lg h-custom-height object-cover"
        onError={(e) => (e.target.src = "/path/to/default-image.jpg")}
      />
      <div className="p-4 text-center">
        <h2 className="text-xl font-jomolhari font-semibold mb-2">
          {service.name}
        </h2>
        <p className="text-gray-600 font-jomolhari">
          {service.description.length > 100
            ? service.description.substring(0, 200) + "..."
            : service.description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
