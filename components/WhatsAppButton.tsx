'use client';

export default function WhatsAppButton() {
  return (
    <>
      <div
        style={{
          position: 'fixed',
          bottom: '100px',
          right: '20px',
          zIndex: 99999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: '8px',
        }}
      >
        {/* Label */}
        <div
          style={{
            background: '#075E54',
            color: 'white',
            fontSize: '13px',
            fontWeight: 700,
            padding: '5px 12px',
            borderRadius: '20px',
            whiteSpace: 'nowrap',
            boxShadow: '0 3px 10px rgba(0,0,0,0.25)',
          }}
        >
          Chat on WhatsApp
        </div>

        {/* Button with pulse */}
        <div style={{ position: 'relative', width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* Animated pulse ring */}
          <span
            style={{
              position: 'absolute',
              inset: '-8px',
              borderRadius: '50%',
              background: 'rgba(37,211,102,0.4)',
              animation: 'waPulse 2s ease-out infinite',
              pointerEvents: 'none',
            }}
          />
          <a
            href="https://wa.me/94777960231"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 6px 24px rgba(37,211,102,0.6)',
              textDecoration: 'none',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.12)';
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 10px 32px rgba(37,211,102,0.75)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)';
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 6px 24px rgba(37,211,102,0.6)';
            }}
          >
            {/* WhatsApp Image Icon */}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              width="40"
              height="40"
              style={{ display: 'block' }}
            />
          </a>
        </div>
      </div>

      <style>{`
        @keyframes waPulse {
          0% { transform: scale(1); opacity: 0.7; }
          70% { transform: scale(1.5); opacity: 0; }
          100% { transform: scale(1); opacity: 0; }
        }
      `}</style>
    </>
  );
}
