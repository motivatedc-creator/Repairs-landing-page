export function Problem() {
  return (
    <section className="py-[70px] border-t border-dm-line">
      <div className="wrap">
        <div className="font-mono text-[11px] tracking-[3px] text-dm-purple uppercase mb-[14px] flex items-center gap-[10px] before:content-[''] before:w-6 before:h-[1px] before:bg-dm-purple">
          The usual story
        </div>
        <h2 className="font-bebas font-normal text-[clamp(34px,5vw,54px)] leading-[0.95] tracking-[0.6px] max-w-[18ch]">
          You've been here before.
        </h2>
        <p className="text-[19px] text-dm-grey font-light max-w-[56ch] mt-[18px] leading-[1.45]">
          A warning light. A shudder. A noise that comes and goes. You take it in — and you leave with replaced parts, a four-figure bill, and the same problem two weeks later.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px] mt-10">
          <div className="bg-[linear-gradient(180deg,var(--color-dm-panel),#0d0d0f)] border border-dm-line border-t-2 border-t-dm-red p-6 px-[22px] rounded-[5px]">
            <div className="font-mono text-[11px] text-dm-red tracking-[1.5px] mb-3">
              // PARTS ROULETTE
            </div>
            <p className="text-[18px] text-dm-white leading-[1.4] font-normal">
              "We'll <span className="text-dm-grey2">start by replacing</span> the sensor and see if it helps."
            </p>
          </div>
          <div className="bg-[linear-gradient(180deg,var(--color-dm-panel),#0d0d0f)] border border-dm-line border-t-2 border-t-dm-red p-6 px-[22px] rounded-[5px]">
            <div className="font-mono text-[11px] text-dm-red tracking-[1.5px] mb-3">
              // NO PAPER TRAIL
            </div>
            <p className="text-[18px] text-dm-white leading-[1.4] font-normal">
              You paid for work you <span className="text-dm-grey2">can't see, verify, or understand.</span>
            </p>
          </div>
          <div className="bg-[linear-gradient(180deg,var(--color-dm-panel),#0d0d0f)] border border-dm-line border-t-2 border-t-dm-red p-6 px-[22px] rounded-[5px]">
            <div className="font-mono text-[11px] text-dm-red tracking-[1.5px] mb-3">
              // IT'S BACK
            </div>
            <p className="text-[18px] text-dm-white leading-[1.4] font-normal">
              The fault returns. <span className="text-dm-grey2">And now it's your word against theirs.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
