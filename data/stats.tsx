import { Stat } from "@/components/types";
import { FaSortAmountUp, FaObjectGroup, FaBrain, FaPlus } from "react-icons/fa";

export const stats: Stat[] = [
  {
    label: "Our Crew",
    icon: <FaObjectGroup size={24} className="text-secondary" />,
    description:
      "A passionate group of thinkers, creators, and engineers working together to turn bold ideas into reality.",
  },
  {
    label: "Progress",
    icon: <FaSortAmountUp size={24} className="text-secondary" />,
    description:
      "Every project we take on fuels our growth — we focus on learning, adapting, and evolving with every challenge.",
  },
  {
    label: "Creativity & Tech",
    icon: <FaBrain size={24} className="text-secondary" />,
    description:
      "Blending imagination with technology, we push boundaries to craft smarter, more human digital experiences.",
  },
  {
    label: "Meaningful Results",
    icon: <FaPlus size={24} className="text-secondary" />,
    description:
      "Our mission is simple — create solutions that make a difference and bring a positive impact to your business.",
  },
];
