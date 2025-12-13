//import ProjectPartnerSection from "../components/NewProjectPartner/ExplainProjectPartner";
import FaqSection from "../components/NewProjectPartner/FaqSection";
import HeroSection from "../components/NewProjectPartner/HeroSection";
import PricingSection from "../components/NewProjectPartner/PricingSection";
import TestimonialsSection from "../components/NewProjectPartner/TestimonialsSection";
import TrustedSection from "../components/NewProjectPartner/TrustedCompanySection";
import ProjectPartnerSection from "../components/ProjectPartnerUpdated/ExploreSection";
import JoinStepsSection from "../components/ProjectPartnerUpdated/JoinSteps";
import MobileAppSection from "../components/ProjectPartnerUpdated/MobileApplication";


 const NewProjectPartner=()=>{
    return(
      <div className="w-full mt-0">
        <HeroSection/>
        {/* <ProjectPartnerSection/> */}
        <ProjectPartnerSection/>
         <JoinStepsSection />
      <MobileAppSection/>
        <PricingSection/>
        <TrustedSection/>
        <TestimonialsSection/>
        <FaqSection/>
      </div>
    )
}

export default NewProjectPartner;