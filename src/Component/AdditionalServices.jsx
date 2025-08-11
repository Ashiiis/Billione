import { ClipboardListIcon, ArrowDownIcon, GlobeAltIcon } from '@heroicons/react/outline';
import { LightningBoltIcon } from '@heroicons/react/outline';
// import { BoltIcon } from '@heroicons/react/24/outline';
// import { BoltIcon as BoltSolidIcon } from '@heroicons/react/24/solid';

const AdditionalServices = () => {
  const services = [
    {
      icon: <LightningBoltIcon className="h-8 w-8 text-gray-700" />,
      title: "Energy Consulting",
      description: "Strategic guidance for optimizing energy consumption"
    },
    {
      icon: <ClipboardListIcon className="h-8 w-8 text-gray-700" />,
      title: "Energy Audit",
      description: "Comprehensive analysis for enhanced energy performance"
    },
    {
      icon: <ArrowDownIcon className="h-8 w-8 text-gray-700" />,
      title: "Carbon Credits",
      description: "Offsetting emissions and contributing to global climate action."
    },
    {
      icon: <GlobeAltIcon className="h-8 w-8 text-gray-700" />,
      title: "ESG Consulting",
      description: "Guiding businesses in robust Environmental, Social, and Governance practices."
    }
  ];

  return (
    <section className="bg-gray-100 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Additional Services</h2>
        <p className="text-gray-600 mb-12 max-w-4xl">
          These additional services reflect our dedication to providing comprehensive solutions that go beyond conventional
          business practices. By integrating energy consulting, energy audit, carbon credits, and ESG consulting into our portfolio,
          we aim to empower organizations to navigate the complexities of sustainability, reduce their environmental footprint,
          and contribute meaningfully to a more sustainable and resilient global landscape.
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition duration-300">
              <div className="mb-4 flex items-center justify-center w-12 h-12 border border-gray-300 rounded-full">
                {service.icon}
              </div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalServices;
