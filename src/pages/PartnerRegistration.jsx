import { useState } from "react";
import PartnerRegistrationStep1 from "../components/pricingPages/Step1";
import PartnerRegistrationStep2 from "../components/pricingPages/Step2";
import PartnerPaymentStep3 from "../components/pricingPages/Step3";
import { useAuth } from "../store/auth";
import axios from "axios";

export default function PartnerRegistration() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [couponState, setCouponState] = useState({});
  const [redeemConfirm, setRedeemConfirm] = useState(null);
  const { URI } = useAuth();
  const [user, setUser] = useState({
    fullname: "",
    contact: "",
    email: "",
    username: "",
    password: "",
    state: "",
    city: "",
    intrest: "",
    refrence: "",
  });

  const updateCouponState = (planId, newState) => {
    setCouponState((prev) => ({
      ...prev,
      [planId]: { ...prev[planId], ...newState },
    }));
  };
  const handleRedeem = async (plan, code) => {
    if (!code?.trim()) {
      window.alert("Enter a redeem code");
      return;
    }

    updateCouponState(plan.id, { isApplying: true, couponMsg: "" });

    try {
      const res = await axios.post(
        `${URI}/projectpartner/subscription/validate`,
        {
          user_id: 1234,
          code: code.trim(),
          planid: plan.id,
        },
      );

      if (res.data.success) {
        const discount = Number(res.data.discount || 0);

        setRedeemConfirm({
          plan,
          code,
          discount,
        });
      } else {
        updateCouponState(plan.id, {
          couponMsg: res.data.message || "Invalid Code",
        });
      }
    } catch (err) {
      updateCouponState(plan.id, { couponMsg: "Something went wrong" });
    } finally {
      updateCouponState(plan.id, { isApplying: false });
    }
  };
  const confirmRedeem = () => {
    if (!redeemConfirm || !selectedPlan) return;

    const { discount } = redeemConfirm;
    console.log(redeemConfirm);

    const originalPrice = Number(selectedPlan.totalPrice);
    const discountedPrice = Math.max(originalPrice - discount, 0);

    const updatedPlan = {
      ...selectedPlan,
      totalPrice: discountedPrice,
      billPrice: discountedPrice,
      discountApplied: discount,
    };
    console.log(updatedPlan, "update");

    setSelectedPlan(updatedPlan);

    updateCouponState(selectedPlan.id, {
      couponMsg: `Coupon Applied: ₹${discount} OFF`,
    });

    setRedeemConfirm(null);
  };
  console.log(selectedPlan, "ss");

  const cancelRedeem = () => {
    setRedeemConfirm(null);
  };

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 3));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <PartnerRegistrationStep1
            nextStep={nextStep}
            setPlan={setSelectedPlan}
            selectedPlan={selectedPlan}
            handleRedeem={handleRedeem}
            couponState={couponState}
            redeemConfirm={redeemConfirm}
            confirmRedeem={confirmRedeem}
            cancelRedeem={cancelRedeem}
            updateCouponState={updateCouponState}
          />
        );

      case 2:
        return (
          <PartnerRegistrationStep2
            nextStep={nextStep}
            prevStep={prevStep}
            selectedPlan={selectedPlan}
            form={user}
            setForm={setUser}
          />
        );

      case 3:
        return (
          <PartnerPaymentStep3
            prevStep={prevStep}
            selectedPlan={selectedPlan}
            user={user}
            setForm={setUser}
          />
        );

      default:
        return null;
    }
  };

  return <div className="">{renderStep()}</div>;
}
