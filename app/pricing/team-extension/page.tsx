"use client";

import { JSX, useState } from "react";
import ContactForm from "@/components/ContactForm";
import { PricingOption } from "@/components/types";
import { pricingData } from "@/data/pricingData";
import ArrowIcon from "@/public/svg/RightArrowIcon";
import AnimatedSection1 from "@/components/AnimatedSection1";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface SelectedOptions {
  step1: {
    category: string;
    technologies: string[];
  };
  step2: string[];
  step3: string;
  experienceLevel: string;
  developerCount: number;
}

const TeamExtension = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [showFinal, setShowFinal] = useState<boolean>(false);
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({
    step1: {
      category: "Web",
      technologies: [],
    },
    step2: [],
    step3: "",
    experienceLevel: "Mid",
    developerCount: 1,
  });

  const totalSteps = 3;

  const handleCategorySelect = (category: string): void => {
    setSelectedOptions((prev) => ({
      ...prev,
      step1: {
        ...prev.step1,
        category,
        technologies: [],
      },
    }));
  };

  const handleTechnologySelect = (tech: string): void => {
    setSelectedOptions((prev) => ({
      ...prev,
      step1: {
        ...prev.step1,
        technologies: prev.step1.technologies.includes(tech)
          ? prev.step1.technologies.filter((t) => t !== tech)
          : [...prev.step1.technologies, tech],
      },
    }));
  };

  const handleSpecialistSelect = (specialist: string): void => {
    setSelectedOptions((prev) => ({
      ...prev,
      step2: prev.step2.includes(specialist)
        ? prev.step2.filter((s) => s !== specialist)
        : [...prev.step2, specialist],
    }));
  };

  const handleTimeframeSelect = (timeframe: string): void => {
    setSelectedOptions((prev) => ({
      ...prev,
      step3: timeframe,
    }));
  };

  const handleExperienceLevelSelect = (level: string): void => {
    setSelectedOptions((prev) => ({
      ...prev,
      experienceLevel: level,
    }));
  };

  const handleDeveloperCountChange = (delta: number): void => {
    setSelectedOptions((prev) => ({
      ...prev,
      developerCount: Math.max(1, prev.developerCount + delta),
    }));
  };

  const handleNextStep = (): void => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setShowFinal(true);
    }
  };

  const handlePrevStep = (): void => {
    if (showFinal) {
      setShowFinal(false);
    } else if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const getTechnologiesList = (): string[] => {
    const category = selectedOptions.step1.category.toLowerCase();
    const data = pricingData.teamCostCalculator.stepOneOptions.find(
      (opt) => opt.title.toLowerCase() === category
    );

    if (!data) return [];

    const stackType = `${category}Stacks` as keyof PricingOption;
    const stacks = data[stackType];
    return Array.isArray(stacks) ? stacks : [];
  };

  const calculateCost = (): number => {
    let baseCost = 0;
    switch (selectedOptions.experienceLevel) {
      case "Mid":
        baseCost = 5000;
        break;
      case "Senior":
        baseCost = 7500;
        break;
      case "Architect":
        baseCost = 10000;
        break;
      default:
        baseCost = 5000;
    }
    return baseCost * selectedOptions.developerCount;
  };

  const getCurrentStepContent = (): {
    title: string;
    content: JSX.Element | null;
  } => {
    switch (currentStep) {
      case 1:
        return {
          title: pricingData.teamCostCalculator.stepOneTitle,
          content: (
            <div className="space-x-0 flex flex-col md:flex-row justify-between min-h-[50vh] gap-6">
              <div className="space-y-3 mt-10 w-full md:w-auto md:min-w-[280px]">
                {pricingData.teamCostCalculator.stepOneOptions.map(
                  (option, index) => {
                    const isSelected = selectedOptions.step1.category === option.title;
                    return (
                      <div
                        key={index}
                        onClick={() => handleCategorySelect(option.title)}
                        className={`p-5 rounded-2xl cursor-pointer transition-all flex items-center justify-between duration-300 mb-3 group relative overflow-hidden
                        ${
                          isSelected
                            ? "bg-gradient-to-r from-secondary to-lightMedium text-white shadow-xl scale-105"
                            : "bg-white border-2 border-lightMedium/20 hover:border-secondary/50 hover:shadow-lg hover:scale-[1.02]"
                        }`}
                      >
                        {isSelected && (
                          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-lightMedium/90 opacity-100"></div>
                        )}
                        <h3 className={`font-bold text-lg relative z-10 flex-grow ${
                          isSelected ? "text-white" : "text-dark group-hover:text-secondary"
                        }`}>
                          {option.title}
                        </h3>
                        <div className={`relative z-10 transition-transform duration-300 ${
                          isSelected ? "text-white rotate-[-45deg]" : "text-dark group-hover:text-secondary group-hover:translate-x-1"
                        }`}>
                          <ArrowIcon className="w-5 h-5" />
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
              {selectedOptions.step1.category && (
                <div className="w-full md:w-[70%] md:mt-0">
                  <div className="bg-gradient-to-r from-secondary/10 to-lightMedium/10 p-4 rounded-2xl mb-6 border-l-4 border-secondary">
                    <h4 className="font-bold text-xl text-dark mb-1">
                      Select Technologies
                    </h4>
                    <p className="text-sm text-medium">Choose one or more technologies</p>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {getTechnologiesList().map((tech, index) => {
                      const isSelected = selectedOptions.step1.technologies.includes(tech);
                      return (
                        <div
                          key={index}
                          onClick={() => handleTechnologySelect(tech)}
                          className={`p-4 rounded-xl cursor-pointer text-center transition-all duration-300 group relative overflow-hidden
                            ${
                              isSelected
                                ? "bg-gradient-to-br from-secondary to-lightMedium text-white shadow-lg scale-105 ring-2 ring-secondary/50"
                                : "bg-white border-2 border-lightMedium/20 hover:border-secondary hover:shadow-md hover:scale-105"
                            }`}
                        >
                          {isSelected && (
                            <div className="absolute top-1 right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center">
                              <span className="text-secondary text-xs font-bold">✓</span>
                            </div>
                          )}
                          <AnimatedSection1>
                            <span className={`font-semibold text-sm ${
                              isSelected ? "text-white" : "text-dark group-hover:text-secondary"
                            }`}>
                              {tech}
                            </span>
                          </AnimatedSection1>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ),
        };
      case 2:
        return {
          title: pricingData.teamCostCalculator.stepTwoTitle,
          content: (
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-secondary/10 to-lightMedium/10 p-5 rounded-2xl border-l-4 border-secondary">
                <h4 className="font-bold text-xl text-dark mb-1">Required Specialists</h4>
                <p className="text-sm text-medium">Select the specialists you need</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {pricingData.teamCostCalculator.stepTwoOptions.map(
                  (option, index) => {
                    const isSelected = selectedOptions.step2.includes(option.title);
                    return (
                      <div
                        key={index}
                        onClick={() => handleSpecialistSelect(option.title)}
                        className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 group relative overflow-hidden
                          ${
                            isSelected
                              ? "bg-gradient-to-br from-secondary to-lightMedium text-white shadow-xl scale-105 ring-2 ring-secondary/50"
                              : "bg-white border-2 border-lightMedium/20 hover:border-secondary hover:shadow-lg hover:scale-105"
                          }`}
                      >
                        {isSelected && (
                          <div className="absolute top-2 right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                            <span className="text-secondary text-sm font-bold">✓</span>
                          </div>
                        )}
                        <h3 className={`font-bold text-center text-lg ${
                          isSelected ? "text-white" : "text-dark group-hover:text-secondary"
                        }`}>
                          {option.title}
                        </h3>
                      </div>
                    );
                  }
                )}
              </div>
              <div className="bg-gradient-to-r from-secondary/10 to-lightMedium/10 p-5 rounded-2xl border-l-4 border-secondary">
                <h4 className="font-bold text-xl text-dark mb-1">Experience Level</h4>
                <p className="text-sm text-medium">Choose the experience level required</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {["Mid", "Senior", "Architect"].map((level, index) => {
                  const isSelected = selectedOptions.experienceLevel === level;
                  const levelColors = [
                    { bg: "from-blue-500 to-blue-600", text: "Mid Level" },
                    { bg: "from-secondary to-lightMedium", text: "Senior Level" },
                    { bg: "from-purple-500 to-purple-600", text: "Architect Level" }
                  ];
                  return (
                    <div
                      key={index}
                      onClick={() => handleExperienceLevelSelect(level)}
                      className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 group relative overflow-hidden
                      ${
                        isSelected
                          ? `bg-gradient-to-br ${levelColors[index].bg} text-white shadow-xl scale-105 ring-2 ring-secondary/50`
                          : "bg-white border-2 border-lightMedium/20 hover:border-secondary hover:shadow-lg hover:scale-105"
                      }`}
                    >
                      {isSelected && (
                        <div className="absolute top-3 right-3 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                          <span className="text-secondary text-sm font-bold">✓</span>
                        </div>
                      )}
                      <div className="text-center">
                        <h3 className={`font-bold text-xl mb-1 ${isSelected ? "text-white" : "text-dark group-hover:text-secondary"}`}>
                          {level}
                        </h3>
                        <p className={`text-xs ${isSelected ? "text-white/90" : "text-medium"}`}>
                          {levelColors[index].text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="bg-gradient-to-r from-secondary/10 to-lightMedium/10 p-6 rounded-2xl border-l-4 border-secondary">
                <h4 className="font-bold text-xl text-dark mb-4 text-center">Number of Developers</h4>
                <div className="flex items-center justify-center space-x-6">
                  <button
                    onClick={() => handleDeveloperCountChange(-1)}
                    className={`w-12 h-12 rounded-full transition-all duration-300 font-bold text-xl flex items-center justify-center shadow-lg ${
                      selectedOptions.developerCount <= 1
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed opacity-50"
                        : "bg-gradient-to-br from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 hover:scale-110 hover:shadow-xl"
                    }`}
                    disabled={selectedOptions.developerCount <= 1}
                  >
                    −
                  </button>
                  <div className="bg-white px-8 py-4 rounded-2xl shadow-lg border-2 border-secondary/30 min-w-[200px]">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-secondary mb-1">
                        {selectedOptions.developerCount}
                      </div>
                      <div className="text-sm font-semibold text-darkMedium">
                        {selectedOptions.developerCount === 1 ? "Developer" : "Developers"}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleDeveloperCountChange(1)}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 hover:scale-110 hover:shadow-xl transition-all duration-300 font-bold text-xl flex items-center justify-center shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ),
        };
      case 3:
        return {
          title: pricingData.teamCostCalculator.stepThreeTitle,
          content: (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {pricingData.teamCostCalculator.stepThreeOptions.map(
                (option, index) => {
                  const isSelected = selectedOptions.step3 === option.title;
                  const timeframeColors = [
                    { bg: "from-yellow-500 to-orange-500", icon: "⚡" },
                    { bg: "from-blue-500 to-cyan-500", icon: "📅" },
                    { bg: "from-green-500 to-emerald-500", icon: "⏰" }
                  ];
                  return (
                    <div
                      key={index}
                      onClick={() => handleTimeframeSelect(option.title)}
                      className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 group relative overflow-hidden
                        ${
                          isSelected
                            ? `bg-gradient-to-br ${timeframeColors[index].bg} text-white shadow-xl scale-105 ring-2 ring-secondary/50`
                            : "bg-white border-2 border-lightMedium/20 hover:border-secondary hover:shadow-lg hover:scale-105"
                        }`}
                    >
                      {isSelected && (
                        <div className="absolute top-3 right-3 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                          <span className="text-secondary text-sm font-bold">✓</span>
                        </div>
                      )}
                      <div className="text-center">
                        <div className={`text-4xl mb-3 ${isSelected ? "" : "opacity-50"}`}>
                          {timeframeColors[index].icon}
                        </div>
                        <h3 className={`font-bold text-lg mb-2 ${
                          isSelected ? "text-white" : "text-dark group-hover:text-secondary"
                        }`}>
                          {option.title}
                        </h3>
                        {option.subtitle && (
                          <p className={`text-sm font-medium ${
                            isSelected ? "text-white/90" : "text-medium"
                          }`}>{option.subtitle}</p>
                        )}
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          ),
        };
      default:
        return { title: "", content: null };
    }
  };

  if (showFinal) {
    return (
      <section className="py-20 bg-light flex items-center justify-center min-h-screen">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl border border-lightMedium/20 p-8 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-light p-6 rounded-xl shadow-md border border-lightMedium/20">
                <h2 className="text-2xl font-bold mb-6 text-secondary">
                  Your Team Extension Details
                </h2>
                <div className="space-y-6">
                  <div className="pb-4 border-b border-lightMedium/20">
                    <h3 className="font-semibold text-darkMedium mb-2 uppercase text-sm tracking-wider">
                      Technology Category
                    </h3>
                    <p className="text-secondary lg:text-lg text-md font-medium">
                      {selectedOptions.step1.category}
                    </p>
                  </div>
                  <div className="pb-4 border-b border-lightMedium/20">
                    <h3 className="font-semibold text-darkMedium mb-2 uppercase text-sm tracking-wider">
                      Selected Technologies
                    </h3>
                    <p className="text-secondary lg:text-lg text-md font-medium">
                      {selectedOptions.step1.technologies.join(", ") || "None selected"}
                    </p>
                  </div>
                  <div className="pb-4 border-b border-lightMedium/20">
                    <h3 className="font-semibold text-darkMedium mb-2 uppercase text-sm tracking-wider">
                      Required Specialists
                    </h3>
                    <p className="text-secondary lg:text-lg text-md font-medium">
                      {selectedOptions.step2.join(", ") || "None selected"}
                    </p>
                  </div>
                  <div className="pb-4 border-b border-lightMedium/20">
                    <h3 className="font-semibold text-darkMedium mb-2 uppercase text-sm tracking-wider">
                      Timeline
                    </h3>
                    <p className="text-secondary lg:text-lg text-md font-medium">{selectedOptions.step3}</p>
                  </div>
                  <div className="pb-4 border-b border-lightMedium/20">
                    <h3 className="font-semibold text-darkMedium mb-2 uppercase text-sm tracking-wider">
                      Experience Level
                    </h3>
                    <p className="text-secondary lg:text-lg text-md font-medium">
                      {selectedOptions.experienceLevel}
                    </p>
                  </div>
                  <div className="pb-4 border-b border-lightMedium/20">
                    <h3 className="font-semibold text-darkMedium mb-2 uppercase text-sm tracking-wider">
                      Number of Developers
                    </h3>
                    <p className="text-secondary lg:text-lg text-md font-medium">
                      {selectedOptions.developerCount}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-darkMedium mb-2 uppercase text-sm tracking-wider">
                      Estimated Cost
                    </h3>
                    <p className="text-secondary lg:text-2xl text-xl font-bold">${calculateCost().toLocaleString()}</p>
                  </div>
                </div>
              </div>

              <div>
                <ContactForm
                  title="Complete the form to get the calculation"
                  subtitle="We'll promptly discuss the project"
                  buttonText="Get my estimation"
                  onBack={handlePrevStep}
                  onSubmit={(formData) => {
                    const finalMessage = `
                      From Team Extension Calculator:
                      🛠️ Technology Category: ${selectedOptions.step1.category}
                      💻 Selected Technologies: ${
                      selectedOptions.step1.technologies.join(", ") || "None"
                    }
                      👥 Required Specialists: ${selectedOptions.step2.join(", ") || "None"}
                      📈 Experience Level: ${selectedOptions.experienceLevel}
                      👨‍💻 Developer Count: ${selectedOptions.developerCount}
                      🗓️ Timeline: ${selectedOptions.step3}

                      📨 User Email: ${formData.workEmail}
                      👤 Full Name: ${formData.fullName}
                    `;
                    const templateParams = {
                      name: formData.fullName,
                      emailName: formData.workEmail.split("@")[0],
                      email: formData.workEmail,
                      message: finalMessage,
                      phone: "-",
                      purpose: "Team Extension Estimation",
                    };

                    emailjs
                      .send(
                        "service_bpdntcq",
                        "template_76h14oh",
                        templateParams,
                        "xA2IfrQ-V9nNTzS2-"
                      )
                      .then(
                        () => {
                          toast.success(
                            "Your estimation request has been submitted!",
                            {
                              position: "top-right",
                              autoClose: 3000,
                            }
                          );
                        },
                        () => {
                          toast.error(
                            "Submission failed. Please try again later.",
                            {
                              position: "top-right",
                              autoClose: 3000,
                            }
                          );
                        }
                      );
                  }}
                />
                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const currentStepData = getCurrentStepContent();

  return (
    <section className="py-20 bg-light flex items-center justify-center min-h-screen">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl border border-lightMedium/20 p-8 md:p-10 max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              <h1 className="text-3xl md:text-4xl font-bold text-dark">
                {currentStepData.title}
              </h1>
              <span className="text-secondary font-semibold text-lg bg-light px-4 py-2 rounded-full">
                STEP {currentStep}/{totalSteps}
              </span>
            </div>

            <div className="w-full bg-light rounded-full h-3 shadow-inner">
              <div
                className="bg-gradient-to-r from-secondary to-lightMedium h-3 rounded-full transition-all duration-500 shadow-sm"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              />
            </div>
          </div>

          {currentStepData.content}

          <div className="flex justify-between items-center mt-8 pt-4 border-t border-lightMedium/20">
            {currentStep > 1 ? (
              <button
                onClick={handlePrevStep}
                className="px-6 py-3 rounded-lg transition-all duration-300 bg-light text-dark hover:bg-lightMedium/20 hover:shadow-md font-semibold"
              >
                ← Previous
              </button>
            ) : (
              <div></div>
            )}
            <button
              onClick={handleNextStep}
              disabled={
                currentStep !== totalSteps &&
                ((currentStep === 1 && !selectedOptions.step1.category) ||
                  (currentStep === 2 && selectedOptions.step2.length === 0) ||
                  (currentStep === 3 && !selectedOptions.step3))
              }
              className={`px-8 py-3 rounded-lg transition-all duration-300 font-semibold shadow-md
               ${
                 currentStep !== totalSteps &&
                 ((currentStep === 1 && !selectedOptions.step1.category) ||
                   (currentStep === 2 && selectedOptions.step2.length === 0) ||
                   (currentStep === 3 && !selectedOptions.step3))
                   ? "opacity-50 cursor-not-allowed bg-gray-300 text-gray-500"
                   : currentStep === totalSteps
                   ? "bg-secondary text-white hover:bg-lightMedium hover:shadow-lg hover:scale-105"
                   : "bg-secondary text-white hover:bg-lightMedium hover:shadow-lg hover:scale-105"
               }`}
            >
              {currentStep === totalSteps ? "Finish →" : "Next step →"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamExtension;
