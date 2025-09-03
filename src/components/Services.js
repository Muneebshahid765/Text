import React, {useEffect} from "react";
import "./Services.css"; // We'll create this next

const Services = (props) => {

    useEffect(() => {
        document.title = "TextUtils - Services"; 
      }, []);

  const services = [
    {
      title: "Text Case Converter",
      description: "Convert text to UPPERCASE, lowercase, or Title Case instantly.",
      icon: "🔠",
    },
    {
      title: "Word Counter",
      description: "Count words, characters, and sentences in your text.",
      icon: "📊",
    },
    {
      title: "Remove Extra Spaces",
      description: "Clean up messy text by removing unnecessary spaces.",
      icon: "🧹",
    },
    {
      title: "Copy to Clipboard",
      description: "Copy formatted text with one click.",
      icon: "📋",
    },
    {
      title: "Text Preview",
      description: "See how your text will look before saving.",
      icon: "👀",
    },
    {
      title: "Dark Mode",
      description: "Switch between light and dark themes for better readability.",
      icon: "🌙",
    },
  ];

  return (
    <div className="services-page" >
      <header className="services-header">
        <h1>Our Services</h1>
        <p>Powerful text manipulation tools at your fingertips</p>
      </header>

      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;