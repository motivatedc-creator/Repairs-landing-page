export function Process() {
  return (
    <section className="py-[70px] border-t border-dm-line">
      <div className="wrap">
        <div className="font-mono text-[11px] tracking-[3px] text-dm-purple uppercase mb-[14px] flex items-center gap-[10px] before:content-[''] before:w-6 before:h-[1px] before:bg-dm-purple">
          How it actually works
        </div>
        <h2 className="font-bebas font-normal text-[clamp(34px,5vw,54px)] leading-[0.95] tracking-[0.6px] max-w-[18ch]">
          Three steps. Nothing hidden.
        </h2>
        <p className="text-[19px] text-dm-grey font-light max-w-[56ch] mt-[18px] leading-[1.45]">
          A repair you can follow from symptom to sign-off. You always know what's wrong, why, and what it costs — before anyone touches a bolt.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mt-[46px] border border-dm-line rounded-md overflow-hidden">
          <div className="p-[30px] px-[26px] border-b md:border-b-0 md:border-r border-dm-line relative bg-dm-panel">
            <div className="font-mono text-[12px] text-dm-purple tracking-[2px]">STEP 01</div>
            <h3 className="font-bebas text-[30px] tracking-[1px] my-[14px] mt-3.5 mb-2.5 leading-[0.95]">
              Book the diagnostic
            </h3>
            <p className="text-[16.5px] text-dm-grey leading-[1.45] font-light">
              Message us your car and the symptom. Drop it in. We run it on the same dealer-level tools the manufacturer uses — XENTRY, ISTA, PIWIS, ODIS.
            </p>
          </div>

          <div className="p-[30px] px-[26px] border-b md:border-b-0 md:border-r border-dm-line relative bg-[linear-gradient(180deg,#19142b,#0e0c16)] border-t-2 border-t-dm-purple">
            <div className="font-mono text-[12px] text-dm-purple tracking-[2px]">STEP 02</div>
            <h3 className="font-bebas text-[30px] tracking-[1px] my-[14px] mt-3.5 mb-2.5 leading-[0.95]">
              Get your fault file
            </h3>
            <p className="text-[16.5px] text-dm-grey leading-[1.45] font-light">
              Not a verbal "it's probably the…". A written engineering report. Root cause, live data, photos of the failed part, and exactly what needs doing.
            </p>
            <span className="inline-block font-mono text-[9.5px] tracking-[1.5px] text-dm-gold border border-dm-gold py-0.5 px-[7px] rounded-[3px] mt-[14px]">
              YOUR PROOF, IN WRITING
            </span>
          </div>

          <div className="p-[30px] px-[26px] relative bg-dm-panel">
            <div className="font-mono text-[12px] text-dm-purple tracking-[2px]">STEP 03</div>
            <h3 className="font-bebas text-[30px] tracking-[1px] my-[14px] mt-3.5 mb-2.5 leading-[0.95]">
              Approve only what's proven
            </h3>
            <p className="text-[16.5px] text-dm-grey leading-[1.45] font-light">
              You see the fix and the price first. Your AED 250 comes straight off the bill. We repair the proven fault — and prove it's gone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
