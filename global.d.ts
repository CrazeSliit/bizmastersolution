import type React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "zapier-interfaces-chatbot-embed": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        "is-popup"?: "true" | "false" | boolean;
        "chatbot-id"?: string;
      };
    }
  }
}

export {};
