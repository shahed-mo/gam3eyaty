const Loading = () => {
  return (
    <>
      <style>{`
        @keyframes ld-spin {
          to { transform: rotate(360deg); }
        }
        @keyframes ld-bounce {
          0%, 80%, 100% { transform: translateY(0); opacity: 0.4; }
          40%           { transform: translateY(-8px); opacity: 1; }
        }
        @keyframes ld-fade {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        .ld-wrap  { animation: ld-fade 0.3s ease-out 0.15s both; }
        .ld-spin  { animation: ld-spin 0.9s linear infinite; }
        .ld-dot   { animation: ld-bounce 1.2s ease-in-out infinite; }
        .ld-dot:nth-child(2) { animation-delay: 0.15s; }
        .ld-dot:nth-child(3) { animation-delay: 0.3s; }

        @media (prefers-reduced-motion: reduce) {
          .ld-wrap, .ld-spin, .ld-dot { animation: none; }
        }
      `}</style>

      <div
        role="status"
        aria-live="polite"
        className="ld-wrap flex flex-col items-center justify-center gap-space-md min-h-[60vh] text-on-surface-variant"
      >
        <span className="ld-spin w-14 h-14 rounded-full border-4 border-primary border-t-transparent" />

        <p className="text-body-md flex items-center gap-space-xs">
          <span>جاري التحميل</span>
          <span className="flex gap-1" aria-hidden="true">
            <span className="ld-dot w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="ld-dot w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="ld-dot w-1.5 h-1.5 rounded-full bg-primary" />
          </span>
        </p>
      </div>
    </>
  );
};

export default Loading;