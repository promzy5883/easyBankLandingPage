import { serviceData } from "./data";

export default function Services() {
  return (
    <div className="services">
      {serviceData.map((item) => {
        return (
          <div key={item.imagePath} className="service_box">
            <img src={item.imagePath} alt="" />
            <p className="service_heading">{item.title}</p>
            <p className="digital_paragraph">{item.details}</p>
          </div>
        );
      })}
    </div>
  );
}
