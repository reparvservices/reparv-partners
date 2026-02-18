import React from "react";
import {
  Check,
  Download,
  FileText,
  ArrowRight,
  CreditCardIcon,
  User,
  FileCheck,
  Briefcase,
} from "lucide-react";
import { useAuth } from "../../store/auth";
import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import logo from "../../assets/reparvIcon.png";

function PaymentSuccessModal() {
  const { purchaseData } = useAuth();
  //   const purchaseData = {
  //     paymentDetails: {
  //       razorpay_order_id: "order_SHgOh3LBxEoTNn",
  //       razorpay_payment_id: "pay_SHgPJzm4d00aMN",
  //     },

  //     selectedPlan: {
  //       id: 19,
  //       planName: "Project Starter",
  //       planDuration: "3 Months",
  //       partnerType: "Project Partner",

  //       totalPrice: 1,
  //       billPrice: 1,
  //       discount: 53097,
  //       discountApplied: 53097,
  //       redeemCode: "TESTTT",

  //       startDate: "2026-02-17T18:30:00.000Z",
  //       endDate: "2026-02-18T18:30:00.000Z",
  //       status: "Active",

  //       highlight: "True",

  //       features:
  //         "Minimum 300 Leads, 15–20 Site Visits, Monthly Sales Training (1 Session), Common Relationship Manager, Marketing Material, 1 Social Media Post / Month, 1 Social Media Video Reel, Follow-up Tracker, Digital Broker System, Daily Work Tracker, Lead Management System, Digital Profile, Team Management Support, Personalised Landing Page, Business Community Access",

  //       firstImage: "/uploads/subscriptionBanners/1763894332884.jpg",
  //       secondImage: null,
  //       thirdImage: null,

  //       created_at: "2025-11-23T10:38:52.000Z",
  //       updated_at: "2026-01-30T22:11:53.000Z",
  //     },

  //     subscriptionDetails: {
  //       success: true,
  //     },

  //     userDetails: {
  //       fullname: "TESTTS",
  //       username: "9637295908eemake it objetct data",
  //       email: "TEST@gmail.com",
  //       contact: "7458963214",
  //       city: "Gandhinagar",
  //       state: "Gujarat",
  //       intrest: "kbjf ,reh fjer",
  //       password: "Kiran@2226012",
  //       refrence: "",
  //     },
  //   };

  const navigate = useNavigate();

  if (!purchaseData || !purchaseData.selectedPlan) {
    navigate("/");
    return null;
  }

  const { selectedPlan, paymentDetails, userDetails } = purchaseData;

  const formatDate = (date) =>
    new Date(date).toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

  const handleDownloadInvoice = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();

    const primary = [94, 35, 220]; // #5E23DC
    const darkGray = [40, 40, 40];

    const { paymentDetails, selectedPlan, userDetails } = purchaseData;

    let y = 20;

    /* ================= HEADER ================= */

    // Add Logo (Left Side)

    doc.addImage(logo, "PNG", 20, y - 10, 18, 18);

    // Reparv Text
    doc.setFontSize(22);
    doc.setTextColor(...primary);
    doc.setFont("helvetica", "bold");
    doc.text("Reparv", 42, y);

    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.setFont("helvetica", "normal");
    doc.text("Partner Network", 42, y + 6);

    // Invoice Title
    doc.setFontSize(26);
    doc.setTextColor(...darkGray);
    doc.setFont("helvetica", "bold");
    doc.text("INVOICE", pageWidth - 65, y);

    // Accent Line
    doc.setDrawColor(...primary);
    doc.setLineWidth(2);
    doc.line(20, y + 12, pageWidth - 20, y + 12);

    y += 28;

    /* ================= BILL TO ================= */

    doc.setFontSize(11);
    doc.setTextColor(...primary);
    doc.setFont("helvetica", "bold");
    doc.text("Invoice To:", 20, y);

    doc.setFontSize(10);
    doc.setTextColor(0);
    doc.setFont("helvetica", "normal");

    y += 8;
    doc.text(userDetails.fullname, 20, y);
    y += 6;
    doc.text(`${userDetails.city}, ${userDetails.state}`, 20, y);
    y += 6;
    doc.text(userDetails.email, 20, y);
    y += 6;
    doc.text(userDetails.contact, 20, y);

    // Right Side Invoice Info
    doc.text(
      `Invoice #: ${paymentDetails.razorpay_payment_id}`,
      pageWidth - 85,
      y - 18,
    );
    doc.text(
      `Order ID: ${paymentDetails.razorpay_order_id}`,
      pageWidth - 85,
      y - 12,
    );
    doc.text(`Status: ${selectedPlan.status}`, pageWidth - 85, y - 6);

    y += 18;

    /* ================= PLAN DETAILS TABLE ================= */

    doc.setFillColor(...primary);
    doc.rect(20, y, pageWidth - 40, 10, "F");

    doc.setTextColor(255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);

    doc.text("Plan", 25, y + 7);
    doc.text("Duration", 80, y + 7);
    doc.text("Partner Type", 115, y + 7);
    doc.text("Amount", pageWidth - 40, y + 7);

    y += 10;

    doc.setTextColor(0);
    doc.setFont("helvetica", "normal");
    doc.rect(20, y, pageWidth - 40, 14);

    doc.text(selectedPlan.planName, 25, y + 9);
    doc.text(selectedPlan.planDuration, 80, y + 9);
    doc.text(selectedPlan.partnerType, 115, y + 9);

    // 🔥 Styled Price (Bold + Bigger)
    doc.setFont("courier", "bold");
    doc.setFontSize(14);
    doc.setTextColor(...primary);
    doc.text(`₹ ${selectedPlan.totalPrice}`, pageWidth - 40, y + 9);

    y += 25;

    /* ================= PRICE BREAKDOWN ================= */

    doc.setFontSize(11);
    doc.setTextColor(0);
    doc.setFont("helvetica", "normal");

    // Bill Price
    doc.text("Bill Price :", pageWidth - 90, y);
    doc.setFont("helvetica", "bold");
    doc.text(`Rs. ${selectedPlan.billPrice}`, pageWidth - 45, y);

    y += 7;

    // Discount
    doc.setFont("helvetica", "normal");
    doc.text("Discount :", pageWidth - 90, y);
    doc.setFont("helvetica", "bold");
    doc.text(`Rs. ${selectedPlan.discountApplied}`, pageWidth - 45, y);

    y += 10;

    // TOTAL (Highlighted)
    doc.setFillColor(...primary);
    doc.rect(pageWidth - 100, y - 6, 80, 14, "F");

    doc.setFont("helvetica", "bold");
    doc.setTextColor(255);
    doc.setFontSize(12);
    doc.text(
      `Total Paid : Rs. ${selectedPlan.totalPrice}`,
      pageWidth - 95,
      y + 3,
    );

    /* ================= SUBSCRIPTION INFO ================= */

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(0);

    doc.text(
      `Start Date: ${new Date(selectedPlan.startDate).toLocaleDateString()}`,
      20,
      y,
    );

    y += 6;
    doc.text(
      `End Date: ${new Date(selectedPlan.endDate).toLocaleDateString()}`,
      20,
      y,
    );

    y += 15;

    /* ================= FOOTER ================= */

    doc.setTextColor(120);
    doc.setFontSize(9);
    doc.text("Thank you for choosing Reparv.", 20, y);

    y += 15;
    doc.setDrawColor(...primary);
    doc.line(20, y, 70, y);
    doc.text("Authorised Signature", 25, y + 6);

    /* ================= SAVE ================= */

    doc.save(`Invoice_${paymentDetails.razorpay_payment_id}.pdf`);
  };

  return (
    <div className="min-h-screen mt-10 bg-[#f5f6fa] flex flex-col items-center py-16 px-4">
      {/* Success Card */}
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-md p-10">
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
            <Check className="w-10 h-10 text-green-600" strokeWidth={3} />
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-900 mb-4">
          Payment Successful!
        </h2>

        <p className="text-gray-500 text-center max-w-xl mx-auto mb-8">
          Your subscription has been confirmed. Welcome to the Reparv Partner
          Network. A receipt has been sent to your email.
        </p>

        {/* Subscription Details */}
        <div className="bg-[#f7f8fa] rounded-xl p-6 mb-6 text-sm">
          <div className="flex justify-between mb-4">
            <span className="text-gray-500">Plan Subscription</span>
            <span className="font-semibold text-gray-900">
              {selectedPlan.planName} ({selectedPlan.planDuration})
            </span>
          </div>

          <div className="flex justify-between mb-4">
            <span className="text-gray-500">Amount Paid</span>
            <span className="font-semibold text-gray-900">
              ₹{selectedPlan.totalPrice}
            </span>
          </div>

          <div className="flex justify-between mb-4 items-center">
            <span className="text-gray-500">Payment Method</span>
            <span className="font-semibold text-gray-900 flex items-center gap-2">
              Online Payment
              <CreditCardIcon className="w-4 h-4 text-gray-400" />
            </span>
          </div>

          <hr className="my-4" />

          <div className="flex justify-between mb-4">
            <span className="text-gray-500">Transaction ID</span>
            <span className="font-medium text-gray-900">
              {paymentDetails?.razorpay_payment_id}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Subscription Start</span>
            <span className="font-medium text-gray-900">
              {formatDate(selectedPlan.startDate)}
            </span>
          </div>
        </div>

        {/* User Details */}
        <div className="bg-[#f7f8fa] rounded-xl p-6 mb-8 text-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Registered User Details
          </h3>

          {[
            ["Full Name", userDetails?.fullname],
            ["Username", userDetails?.username],
            ["Email", userDetails?.email],
            ["Contact", userDetails?.contact],
            ["City", userDetails?.city],
            ["State", userDetails?.state],
          ].map(([label, value], index) => (
            <div key={index} className="flex justify-between mb-4 last:mb-0">
              <span className="text-gray-500">{label}</span>
              <span className="font-semibold text-gray-900">{value}</span>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => navigate("/partner-dashboard")}
            className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-3 rounded-lg font-medium shadow hover:opacity-95 transition"
          >
            Go to Partner Dashboard
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Links */}
        <div className="flex justify-center gap-6 text-gray-400 text-sm">
          <button
            onClick={handleDownloadInvoice}
            className="flex items-center gap-2 hover:text-gray-600"
          >
            <Download className="w-4 h-4" />
            Download Invoice
          </button>

          <button className="flex items-center gap-2 hover:text-gray-600">
            <FileText className="w-4 h-4" />
            View Subscription
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaymentSuccessModal;
