import {
  FaBolt,
  FaClock,
  FaShieldAlt,
  FaHome,
} from "react-icons/fa";

function Highlights() {
  const highlights = [
    {
      icon: <FaBolt />,
      title: "Licensed Electricians",
      desc: "Certified and experienced professionals.",
    },
    {
      icon: <FaClock />,
      title: "24/7 Emergency",
      desc: "Fast response whenever you need us.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Quality Guaranteed",
      desc: "Reliable workmanship and premium materials.",
    },
    {
      icon: <FaHome />,
      title: "Residential & Commercial",
      desc: "Electrical solutions for every property.",
    },
  ];

  return (
    <section className="relative -mt-8 z-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">

          <div className="grid md:grid-cols-2 lg:grid-cols-4">

            {highlights.map((item, index) => (
              <div
                key={index}
                className={`flex items-start gap-4 p-8 transition-all duration-300 hover:bg-orange-50 ${
                  index !== highlights.length - 1
                    ? "border-b lg:border-b-0 lg:border-r border-gray-200"
                    : ""
                }`}
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-orange-100 text-orange-500 text-2xl flex-shrink-0">
                  {item.icon}
                </div>

                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-6">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Highlights;