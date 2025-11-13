"use client";

import { ReactNode, useState } from "react";
import ContactForm from "@/components/ContactForm";
import { pricingData } from "@/data/pricingData";
import AnimatedSection1 from "@/components/AnimatedSection1";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type SelectedOptions = {
  step1: string;
  step2: string;
  step3: string;
  step4: string;
  step5: string[];
  step6: string;
};

type Option = {
  icon?: ReactNode;
  title: string;
  subtitle?: string;
};

const CalculateOutsource = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [showFinal, setShowFinal] = useState<boolean>(false);
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({
    step1: "",
    step2: "",
    step3: "",
    step4: "",
    step5: [],
    step6: "",
  });

  const totalSteps = 6;

  const handleOptionSelect = (step: number, option: string) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [`step${step}`]:
        step === 5
          ? prev[`step${step}` as keyof SelectedOptions].includes(option)
            ? (prev[`step${step}` as keyof SelectedOptions] as string[]).filter(
                (item: string) => item !== option
              )
            : [
                ...(prev[`step${step}` as keyof SelectedOptions] as string[]),
                option,
              ]
          : option,
    }));
  };

  const handleNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setShowFinal(true);
    }
  };

  const handlePrevStep = () => {
    if (showFinal) {
      setShowFinal(false);
    } else if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const getCurrentStepData = (): {
    title: string;
    subtitle?: string;
    options: Option[];
  } => {
    switch (currentStep) {
      case 1:
        return {
          title: pricingData.costCalculator.stepOneTitle,
          options: pricingData.costCalculator.stepOneOptions,
        };
      case 2:
        return {
          title: pricingData.costCalculator.stepTwoTitle,
          options: pricingData.costCalculator.stepTwoOptions,
        };
      case 3:
        return {
          title: pricingData.costCalculator.stepThreeTitle,
          options: pricingData.costCalculator.stepThreeOptions,
        };
      case 4:
        return {
          title: pricingData.costCalculator.stepFourTitle,
          options: pricingData.costCalculator.stepFourOptions,
        };
      case 5:
        return {
          title: pricingData.costCalculator.stepFiveTitle,
          subtitle: pricingData.costCalculator.stepFiveSubTitle,
          options: pricingData.costCalculator.stepFiveOptions,
        };
      case 6:
        return {
          title: pricingData.costCalculator.stepSixTitle,
          options: pricingData.costCalculator.stepSixOptions,
        };
      default:
        return { title: "", options: [] };
    }
  };

  const currentStepData = getCurrentStepData();

  if (showFinal) {
    return (
      <section className="py-20 bg-gradient-to-b from-white to-gray-50/30 lg:min-h-screen flex justify-center items-center">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-2xl border border-lightMedium/20 p-8 md:p-10 max-w-6xl mx-auto hover:shadow-2xl transition-shadow duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              <div className="bg-light p-6 md:p-8 rounded-2xl shadow-lg border border-lightMedium/20 hover:shadow-xl transition-shadow duration-300">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-secondary">
                  Your Selections
                </h2>
                <div className="space-y-6">
                  {Object.entries(selectedOptions).map(([key, value]) => (
                    <div key={key} className="pb-5 border-b border-lightMedium/20 last:border-0">
                      <h3 className="font-semibold text-darkMedium mb-3 uppercase text-sm tracking-wider">
                        {key.replace("step", "Step ")}
                      </h3>
                      <p className="text-secondary lg:text-lg text-md font-medium leading-relaxed">
                        {Array.isArray(value) ? value.join(", ") : value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <ContactForm
                  title="Congratulations! There's only one step left."
                  subtitle="Enter your work email, and we'll send you an estimate as soon as possible."
                  buttonText="Get my calculation"
                  onBack={handlePrevStep}
                  onSubmit={(formData: {
                    fullName: string;
                    workEmail: string;
                    agreeToTerms: boolean;
                  }) => {
                    const formattedMessage = `
                  From Cost Calculator Form

                 🧠 User Selections:
                   ${Object.entries(selectedOptions)
                     .map(([key, value]) => {
                       const label = key.replace("step", "Step ");
                       const content = Array.isArray(value)
                         ? value.join(", ")
                         : value;
                       return `🔸 ${label}: ${content}`;
                     })
                     .join("\n")}

                   📨 User Email: ${formData.workEmail}
                   👤 Full Name: ${formData.fullName}
                    `;

                    const templateParams = {
                      name: formData.fullName,
                      emailName: formData.workEmail.split("@")[0],
                      email: formData.workEmail,
                      message: formattedMessage,
                      phone: "-",
                      purpose: "Cost Calculator Estimate",
                    };

                    emailjs
                      .send(
                        "service_bpdntcq",
                        "template_76h14oh",
                        templateParams,
                        "xA2IfrQ-V9nNTzS2-"
                      )
                      .then(
                        (response) => {
                          console.log(
                            "SUCCESS!",
                            response.status,
                            response.text
                          );
                          toast.success(
                            "Your estimate request has been submitted successfully!",
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
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50/30 min-h-screen flex justify-center items-center">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-2xl border border-lightMedium/20 p-8 md:p-10 lg:p-12 max-w-4xl mx-auto hover:shadow-2xl transition-shadow duration-300">
          <div className="mb-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark leading-tight">
                {currentStepData.title}
              </h1>
              <span className="text-secondary font-semibold text-lg bg-light px-5 py-2.5 rounded-full shadow-md">
                STEP {currentStep}/{totalSteps}
              </span>
            </div>

            <div className="w-full bg-light rounded-full h-4 shadow-inner">
              <div
                className="bg-gradient-to-r from-secondary to-lightMedium h-4 rounded-full transition-all duration-500 shadow-md"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              />
            </div>
          </div>

          {currentStepData.subtitle && (
            <p className="text-darkMedium mb-8 text-lg md:text-xl leading-relaxed">{currentStepData.subtitle}</p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-10">
            {currentStepData.options.map((option, index) => {
              const isSelected =
                (currentStep === 5 &&
                  selectedOptions[
                    `step${currentStep}` as keyof SelectedOptions
                  ].includes(option.title)) ||
                selectedOptions[
                  `step${currentStep}` as keyof SelectedOptions
                ] === option.title;

              return (
                <div
                  key={index}
                  onClick={() => handleOptionSelect(currentStep, option.title)}
                  className={`p-6 md:p-7 rounded-2xl border-2 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                    isSelected
                      ? "border-secondary bg-light shadow-lg border-2 scale-105"
                      : "border-lightMedium/30 hover:border-secondary/50 bg-white hover:bg-gray-50"
                  }`}
                >
                  <div className="text-center">
                    <AnimatedSection1>
                      {option.icon && (
                        <div className={`mb-4 ${isSelected ? "text-secondary" : "text-dark"}`}>
                          {option.icon}
                        </div>
                      )}
                    </AnimatedSection1>
                    <h3 className={`font-semibold mb-2 text-lg ${isSelected ? "text-secondary" : "text-dark"}`}>
                      {option.title}
                    </h3>
                    {option.subtitle && (
                      <p className={`text-sm leading-relaxed ${isSelected ? "text-darkMedium" : "text-medium"}`}>
                        {option.subtitle}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-between items-center pt-6 border-t border-lightMedium/20">
            {currentStep > 1 ? (
              <button
                onClick={handlePrevStep}
                className="px-6 py-3 rounded-lg transition-all duration-300 bg-light text-dark hover:bg-lightMedium/20 hover:shadow-lg font-semibold transform hover:scale-105"
              >
                ← Previous
              </button>
            ) : (
              <div></div>
            )}
            <button
              onClick={handleNextStep}
              className={`px-8 py-3 rounded-lg transition-all duration-300 font-semibold shadow-lg transform ${
                selectedOptions[`step${currentStep}` as keyof SelectedOptions]
                  .length === 0
                  ? "opacity-50 cursor-not-allowed bg-gray-300 text-gray-500"
                  : "bg-secondary text-white hover:bg-lightMedium hover:shadow-xl hover:scale-105"
              }`}
              disabled={
                selectedOptions[`step${currentStep}` as keyof SelectedOptions]
                  .length === 0
              }
            >
              {currentStep === totalSteps ? "Finish →" : "Next step →"}
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default CalculateOutsource;
