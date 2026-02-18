import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [projectPartner, setProjectPartners] = useState([]);
  const [currentProjectPartner, setCurrentProjectPartner] = useState(null);
  const [successScreen, setSuccessScreen] = useState({
    show: false,
    label: "Thank You For Registering!",
    description: "Our Representative will call you shortly",
  });
  const [paymentSuccessScreen, setPaymentSuccessScreen] = useState(true);
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [purchaseData, setPurchaseData] = useState(null);
  const [role, setRole] = useState("sales");
  const URI = "https://aws-api.reparv.in";
  //const URI="https://aws-api.reparv.in";

  return (
    <AuthContext.Provider
      value={{
        isActive,
        setIsActive,
        successScreen,
        setSuccessScreen,
        showInquiryForm,
        setShowInquiryForm,
        URI,
        loading,
        setLoading,
        currentProjectPartner,
        setCurrentProjectPartner,
        projectPartner,
        setProjectPartners,
        role,
        setRole,
        paymentSuccessScreen,
        setPaymentSuccessScreen,
        purchaseData,
        setPurchaseData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
