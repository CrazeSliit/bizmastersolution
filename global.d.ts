import type React from "react";

declare namespace JSX {
  interface IntrinsicElements {
    "zapier-interfaces-chatbot-embed": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      "is-popup"?: string;
      "chatbot-id"?: string;
    };
  }
}
