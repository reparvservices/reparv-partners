import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";

import Layout from "./components/layout/Layout";
import Home from "./pages/Home";

//Join Our Team Pages
import SalesPartner from "./pages/SalesPartner";
import TerritoryPartner from "./pages/TerritoryPartner";
import ProjectPartner from "./pages/ProjectPartner";
// User Account Cancellation
import AccountCancellation from "./pages/AccountCancellation";

// privacy Pages
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import RefundPolicy from "./pages/RefundPolicy";
import Promoter from "./pages/Promoter";
import LayoutTwo from "./components/layout/Layout2";
import NewProjectPartner from "./pages/newProjectPartner";
import PartnerRegistrationPage from "./components/ProjectPartnerUpdated/PartnerRegistrationModal";
import PartnersPage from "./components/ProjectPartnerUpdated/PartnersPage";
import PartnerRegistration from "./pages/PartnerRegistration";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Routes with default Layout */}
        <Route path="" element={<LayoutTwo />}>
          <Route path="/" element={<NewProjectPartner />} />
          <Route path="/home" element={<NewProjectPartner />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/promoter" element={<Promoter />} />
          <Route path="/sales-partner" element={<SalesPartner />} />
          <Route path="/territory-partner" element={<TerritoryPartner />} />
          <Route path="/project-partner" element={<ProjectPartner />} />
          <Route
            path="/account-cancellation"
            element={<AccountCancellation />}
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route path="/cancellation-policy" element={<RefundPolicy />} />
          <Route path="/subscribe" element={<PartnerRegistration />} />
        </Route>

        {/* Route with LayoutTwo */}
        {/* <Route path="" element={<LayoutTwo />}>
          <Route path="/newpartner" element={<NewProjectPartner />} />
          <Route path="/newpartner/joinPartner" element={<PartnerRegistrationPage/>}/>
          <Route path="/partners" element={<PartnersPage/>} />

        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
