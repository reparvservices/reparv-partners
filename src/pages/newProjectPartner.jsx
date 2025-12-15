//import ProjectPartnerSection from "../components/NewProjectPartner/ExplainProjectPartner";
import Reveal from "../components/common/Reveal";
import FaqSection from "../components/NewProjectPartner/FaqSection";
import HeroSection from "../components/NewProjectPartner/HeroSection";
import PricingSection from "../components/NewProjectPartner/PricingSection";
import TestimonialsSection from "../components/NewProjectPartner/TestimonialsSection";
import TrustedSection from "../components/NewProjectPartner/TrustedCompanySection";
import ProjectPartnerSection from "../components/ProjectPartnerUpdated/ExploreSection";
import JoinStepsSection from "../components/ProjectPartnerUpdated/JoinSteps";
import MobileAppSection from "../components/ProjectPartnerUpdated/MobileApplication";
import ServicesSection from "../components/ProjectPartnerUpdated/OurServices";
import StatsAndBenefits from "../components/ProjectPartnerUpdated/StateSection";

const NewProjectPartner = () => {
  return (
    <div className="w-full mt-0 bg-white">
      <HeroSection />

      <Reveal className="[animation-duration:1.2s]">
        <ProjectPartnerSection />
      </Reveal>
      <StatsAndBenefits />

      <Reveal className="[animation-duration:1.2s]">
        <ServicesSection />
      </Reveal>

      <Reveal className="[animation-duration:1.2s]">
        <JoinStepsSection />
      </Reveal>

      <Reveal className="[animation-duration:1.2s]">
        <MobileAppSection />
      </Reveal>

      <Reveal className="[animation-duration:1.2s]">
        <PricingSection />
      </Reveal>

      <Reveal className="[animation-duration:1.2s]">
        <TrustedSection />
      </Reveal>

      <Reveal className="[animation-duration:1.2s]">
        <TestimonialsSection />
      </Reveal>

      <Reveal className="[animation-duration:1.2s]">
        <FaqSection />
      </Reveal>
    </div>
  );
};

export default NewProjectPartner;
