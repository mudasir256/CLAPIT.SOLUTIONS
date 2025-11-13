"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, Variants, useMotionValue } from "framer-motion";
import { Category, Service } from "@/components/types";

export default function ServicesSection({
  services,
  categories,
}: {
  services: Service[];
  categories: Category[];
}) {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        when: "beforeChildren",
        delayChildren: 0.1,
      },
    },
  };

  const gridRevealVariants: Variants = {
    hidden: { 
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { 
        duration: 0.5, 
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.08,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const prevCategoryRef = useRef(activeCategory);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const prevIndex = categories.findIndex((c) => c.id === prevCategoryRef.current);
    const currIndex = categories.findIndex((c) => c.id === activeCategory);
    setDirection(currIndex >= prevIndex ? 1 : -1);
    prevCategoryRef.current = activeCategory;
  }, [activeCategory, categories]);

  const itemVariants: Variants = {
    hidden: (custom: { dir: number; idx: number }) => ({
      opacity: 0,
    }),
    visible: (custom: { dir: number; idx: number }) => ({
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: custom.idx * 0.1,
      },
    }),
    exit: (custom: { dir: number; idx: number }) => ({
      opacity: 0,
      transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  const filteredServices = services.filter(
    (service) => service.category === activeCategory
  );

  return (
    <section className="relative py-16 overflow-hidden m-6 rounded-3xl container mx-auto">
      <div className="absolute inset-0 overflow-hidden rounded-3xl bg-gray-50">
        <div 
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-30"
        style={{
            background: 'radial-gradient(circle, rgba(250, 158, 137, 0.2) 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />
      </div>

      <div className="relative container mx-auto px-6 md:px-12 lg:px-16 ">
        <div className="">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                <span className="text-dark">
                All the strength your product
                </span>
                <br />
                <span className="bg-gradient-to-r from-secondary via-secondary/80 to-secondary bg-clip-text text-transparent text-2xl md:text-3xl lg:text-4xl">
                needs to grow
              </span>
            </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-6 bg-white/60 backdrop-blur-xl border border-gray-200 rounded-2xl p-2 px-4"
            >
              {categories.map((category, index) => (
                <div key={category.id} className="flex items-center gap-3">
                  <motion.button
                    onClick={() => {
                      const targetCategory = activeCategory === categories[0].id
                        ? categories[1].id
                        : categories[0].id;
                      setActiveCategory(targetCategory);
                    }}
                    className={`relative px-6 py-3 rounded-xl font-medium text-sm md:text-base transition-all duration-300 ${
                      activeCategory === category.id
                        ? "text-dark "
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    {activeCategory === category.id && (
                      <motion.div
                        layoutId="activeCategory"
                        className="absolute inset-0 bg-gradient-to-r from-secondary/20 via-secondary/30 to-secondary/20 border border-secondary/40 rounded-xl"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{category.label}</span>
                  </motion.button>
                  {index === 0 && categories.length > 1 && (
                    <div className="w-[1px] h-6 bg-gray-300" />
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeCategory}
            variants={gridRevealVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative"
          >
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 py-20"
              style={{ perspective: 1200 }}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {filteredServices.map((service, idx) => (
                <CardWrapper
                  key={service.id}
                  service={service}
                  idx={idx}
                  direction={direction}
                  variants={itemVariants}
                  hoveredCard={hoveredCard}
                  setHoveredCard={setHoveredCard}
                />
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function CardWrapper({
  service,
  idx,
  direction,
  variants,
  hoveredCard,
  setHoveredCard,
}: {
  service: Service;
  idx: number;
  direction: number;
  variants: Variants;
  hoveredCard: string | null;
  setHoveredCard: (id: string | null) => void;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    // For spotlight effect only
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setHoveredCard(service.id || "");
    setIsHovered(true);
  };

  return (
    <motion.div
      variants={variants}
      custom={{ dir: direction, idx }}
      initial="hidden"
      animate="visible"
      exit="exit"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      className="group"
    >
      <a
        href={service.href}
        className="block relative h-full"
      >
        <div className="relative h-full rounded-2xl overflow-hidden">
          <motion.div 
            className="relative h-full p-8 rounded-2xl bg-white/80 border border-gray-200 backdrop-blur-sm"
            animate={{
              borderColor: isHovered ? "rgba(250, 158, 137, 0.5)" : "rgba(0, 0, 0, 0.1)",
              boxShadow: isHovered 
                ? "0 10px 40px rgba(250, 158, 137, 0.15)"
                : "0 4px 20px rgba(0, 0, 0, 0.08)",
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.4 }}
              style={{
                background: 'linear-gradient(135deg, rgba(250, 158, 137, 0.15) 0%, transparent 50%)',
              }}
            />

            <motion.div
              className="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-secondary via-secondary/80 to-secondary"
              initial={{ width: 0, opacity: 0 }}
              animate={{ 
                width: isHovered ? "100%" : 0,
                opacity: isHovered ? 1 : 0,
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />

            <div className="relative z-10 flex flex-col gap-6 h-full">
              <div className="relative">
                <motion.div
                  className="relative w-16 h-16  rounded-xl bg-dark border border-gray-300 flex items-center justify-center text-2xl text-light backdrop-blur-sm"
                  animate={{
                    backgroundColor: isHovered 
                      ? "rgba(250, 158, 137, 0.2)" 
                      : "rgba(17, 24, 39, 1)",
                    borderColor: isHovered 
                      ? "rgba(250, 158, 137, 0.5)" 
                      : "rgba(209, 213, 219, 1)",
                    boxShadow: isHovered 
                      ? "0 8px 32px rgba(250, 158, 137, 0.3)"
                      : "0 4px 16px rgba(0, 0, 0, 0.1)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="relative z-10 "
                    style={{ color: isHovered ? 'rgb(250, 158, 137)' : 'rgb(255, 255, 255)' }}
                  >
                    {service.icon}
                  </motion.div>
                </motion.div>
              </div>

              <div className="space-y-4 flex-grow">
                <motion.h3
                  className="text-xl lg:text-2xl font-bold text-dark relative"
                  animate={{
                    color: isHovered ? "rgb(250, 158, 137)" : "rgb(17, 24, 39)",
                  }}
                  transition={{
                    color: { duration: 0.3 },
                  }}
                >
                  {service.title}
                </motion.h3>
                <motion.p
                  className="text-base lg:text-lg text-gray-600 leading-relaxed"
                  animate={{
                    color: isHovered ? "rgba(17, 24, 39, 0.9)" : "rgba(75, 85, 99, 0.8)",
                  }}
                  transition={{
                    color: { duration: 0.3 },
                  }}
                >
                  {service.description}
                </motion.p>
              </div>

              <motion.div
                className="flex items-center gap-3 mt-auto"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: isHovered ? 1 : 0,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <span className="text-sm font-semibold text-secondary">
                  Explore →
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </a>
    </motion.div>
  );
}
