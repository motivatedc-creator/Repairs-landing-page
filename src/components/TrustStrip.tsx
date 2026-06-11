export function TrustStrip() {
  return (
    <section className="py-[70px] border-t border-dm-line">
      <div className="wrap">
        <div className="font-mono text-[11px] tracking-[3px] text-dm-purple uppercase mb-[14px] flex items-center gap-[10px] before:content-[''] before:w-6 before:h-[1px] before:bg-dm-purple">
          Why trust us with it
        </div>
        <h2 className="font-bebas font-normal text-[clamp(34px,5vw,54px)] leading-[0.95] tracking-[0.6px] max-w-[18ch]">
          Engineering-led. Not a guess-and-charge garage.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px] mt-10">
          <div className="bg-dm-panel border border-dm-line rounded-[5px] p-[22px] px-5">
            <div className="font-bebas text-[22px] tracking-[0.5px] leading-[0.9] text-dm-purple font-mono">XENTRY · ISTA<br/>PIWIS · ODIS</div>
            <div className="text-[15px] text-dm-grey mt-2 leading-[1.35] font-light">Dealer-level tools. The same software the manufacturer's own techs use.</div>
          </div>
          <div className="bg-dm-panel border border-dm-line rounded-[5px] p-[22px] px-5">
            <div className="font-bebas text-[34px] tracking-[0.5px] leading-[0.9] text-dm-white">1</div>
            <div className="text-[15px] text-dm-grey mt-2 leading-[1.35] font-light">One engineer owns your car end to end. Your name has a face behind it.</div>
          </div>
          <div className="bg-dm-panel border border-dm-line rounded-[5px] p-[22px] px-5">
            <div className="font-bebas text-[34px] tracking-[0.5px] leading-[0.9] text-dm-white">100%</div>
            <div className="text-[15px] text-dm-grey mt-2 leading-[1.35] font-light">Written diagnosis on every job. No "trust me" verbal estimates.</div>
          </div>
          <div className="bg-dm-panel border border-dm-line rounded-[5px] p-[22px] px-5">
            <div className="font-bebas text-[34px] tracking-[0.5px] leading-[0.9] text-dm-white">0</div>
            <div className="text-[15px] text-dm-grey mt-2 leading-[1.35] font-light">Parts replaced on a hunch. We fix what the data proves, nothing else.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
