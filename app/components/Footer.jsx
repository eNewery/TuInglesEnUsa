"use client"
import React from "react";
import { useRouter } from "next/navigation";
const Footer = () => {
  const router = useRouter()
  return (
    <div className="footerContainer">
      <div className="footerLogo"></div>
      <div className="footerTerms"><p>* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringilla consectetur metus at scelerisque. Nam mattis felis quis sollicitudin cursus. Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus.</p><div className="footerPrivacyTermsContainer"><p className="footerPrivacyTerms">Privacy Policy </p><p className="footerPrivacyTerms"> Terms & Conditions</p><p className="footerPrivacyTerms" onClick={() => router.push("/AdminPanel")}>Admin</p></div>
      <p className="footerPrivacyTerms"></p></div>
      <div className="footerCopy"><p>© Copyright 2023 Neurolinguas all rights reserved</p></div>
    </div>
  );
};

export default Footer;
