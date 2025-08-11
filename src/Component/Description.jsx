const AboutStatsSection = () => {
  return (
    <section className="px-6 md:px-20 py-16 bg-white">
      {/* Intro Text */}
      <div className="max-w-4xl mx-auto text-left md:text-left">
        <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
          BillionE Group stands at the forefront of pioneering sustainable
          solutions in the energy and mobility sectors. Our mission is to lead
          the charge in Energy Transition and Mobility & Power Infrastructures,
          delivering groundbreaking solutions to empower communities and
          businesses worldwide.
        </p>
      </div>

      {/* Stats */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center md:text-left">
        <div>
          <h2 className="text-4xl font-semibold text-gray-900">600+</h2>
          <p className="text-gray-600 text-sm mt-1">
            MW Energy Capacity Designed
          </p>
        </div>
        <div>
          <h2 className="text-4xl font-semibold text-gray-900">1700+</h2>
          <p className="text-gray-600 text-sm mt-1">Charging Points</p>
        </div>
        <div>
          <h2 className="text-4xl font-semibold text-gray-900">15000+</h2>
          <p className="text-gray-600 text-sm mt-1">Kilometres Electrified</p>
        </div>
      </div>
    </section>
  );
};

export default AboutStatsSection;
