'use client';

import Script from 'next/script';

declare global {
  interface Window {
    chatbase?: ((...args: unknown[]) => unknown) & { open?: () => void };
  }
}

export default function ChatbaseWidget() {
  const toggleChat = () => {
    // Chatbase's own bubble is hidden below; clicking it keeps its open/close toggle behaviour.
    const bubble = document.getElementById('chatbase-bubble-button');
    if (bubble) {
      bubble.click();
    } else {
      window.chatbase?.open?.();
    }
  };

  return (
    <>
      <Script
        id="chatbase-widget"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=(...arguments)=>{if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="mEJ0TRagW412IaMdgDXLf";script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})();`,
        }}
      />

      <button
        type="button"
        onClick={toggleChat}
        aria-label="Chat with our AI assistant"
        title="Chat with our AI assistant"
        className="chat-avatar-button"
      >
        <img src="/chat.png" alt="" width={64} height={64} />
      </button>

      <style>{`
        #chatbase-bubble-button { display: none !important; }

        .chat-avatar-button {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 99999;
          width: 64px;
          height: 64px;
          padding: 0;
          border: 3px solid #5D0E8B;
          border-radius: 50%;
          overflow: hidden;
          background: white;
          cursor: pointer;
          box-shadow: 0 6px 24px rgba(93, 14, 139, 0.45);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .chat-avatar-button:hover {
          transform: scale(1.1);
          box-shadow: 0 10px 32px rgba(93, 14, 139, 0.6);
        }
        .chat-avatar-button img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
      `}</style>
    </>
  );
}
