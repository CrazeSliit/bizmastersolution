"use client";

import React from "react";
import Script from "next/script";

export default function ZapierChatbot() {
  return (
    <>
      <Script
        src="https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js"
        type="module"
        strategy="afterInteractive"
      />
      {React.createElement("zapier-interfaces-chatbot-embed", {
        "is-popup": "true",
        "chatbot-id": "cmlks1rp900iqtvqlema1qrmo",
      })}
    </>
  );
}
