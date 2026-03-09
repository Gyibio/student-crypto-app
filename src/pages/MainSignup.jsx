import logo from "../assets/logo.svg";
import signupBusiness from "../assets/signupBusiness.svg";
import signupPersonal from "../assets/signupPersonal.svg";
import signupDeveloper from "../assets/signupDeveloper.svg";
import { Link } from "react-router-dom";

const Cards = [
  {
    id: 1,
    image: signupPersonal,
    title: "Personal",
    description: "Trade crypto as an individual.",
  },
  {
    id: 2,
    image: signupBusiness,
    title: "Business",
    description:
      "Manage teams and portfolios, accept crypto payments, access APIs, and more",
  },
  {
    id: 3,
    image: signupDeveloper,
    title: "Developer",
    description: "Build onchain using developer tooling.",
  },
];

function MainSignup() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-6 py-12">
      {/* Branding Logo */}
      <div className="mb-12">
        <img src={logo} alt="Coinbase" className="h-10 w-10 invert-50" />
      </div>

      <div className="w-full max-w-135 text-white">
        <h1 className="text-3xl md:text-4xl font-medium text-center mb-10">
          What kind of account are you creating?
        </h1>

        <div className="flex flex-col gap-4">
          {Cards.map((card) => (
            <Link
            to='/signupMain/signup'
              key={card.id}
              className="group flex items-center gap-6 p-6 border border-[#2d2d2d] rounded-2xl hover:bg-[#121212] hover:border-[#4b4b4b] transition-all cursor-pointer"
            >
              {/* Icon Container */}
              <div className="flex shrink-0">
                <img src={card.image} alt={card.title} className="w-12 h-12" />
              </div>

              {/* Text Content */}
              <div className="flex flex-col grow">
                <div className="text-xl font-bold mb-1  transition-colors">
                  {card.title}
                </div>
                <div className="text-[#8c8c8c] text-[15px] leading-snug">
                  {card.description}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainSignup;
