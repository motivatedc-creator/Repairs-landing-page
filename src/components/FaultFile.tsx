import { Check } from 'lucide-react';

export function FaultFile() {
  return (
    <section className="py-[70px] border-t border-dm-line">
      <div className="wrap grid grid-cols-1 md:grid-cols-[1.05fr_1fr] gap-[34px] md:gap-[46px] items-center">
        <div>
          <div className="font-mono text-[11px] tracking-[3px] text-dm-purple uppercase mb-[14px] flex items-center gap-[10px] before:content-[''] before:w-6 before:h-[1px] before:bg-dm-purple">
            Why people choose us
          </div>
          <h2 className="font-bebas font-normal text-[clamp(34px,5vw,54px)] leading-[0.95] tracking-[0.6px] max-w-[18ch]">
            You leave with a fault file. Nobody else gives you this.
          </h2>
          <p className="text-[19px] text-dm-grey font-light max-w-[56ch] mt-[18px] leading-[1.45]">
            Every diagnostic produces a documented engineering report — the same standard whether it's a misfire or a melted HPFP. It's yours to keep, question, and hold us to.
          </p>

          <div className="mt-[26px] flex flex-col gap-4">
            <div className="flex gap-[14px] items-start">
              <Check className="w-[20px] h-[20px] shrink-0 mt-0.5 text-dm-purple" strokeWidth={2.2} />
              <div>
                <div className="text-[18px] text-dm-white font-medium leading-[1.3]">Root cause, not symptoms</div>
                <div className="text-[15.5px] text-dm-grey font-light leading-[1.4] mt-0.5">We tell you what actually failed and why — not which part to throw at it next.</div>
              </div>
            </div>
            <div className="flex gap-[14px] items-start">
              <Check className="w-[20px] h-[20px] shrink-0 mt-0.5 text-dm-purple" strokeWidth={2.2} />
              <div>
                <div className="text-[18px] text-dm-white font-medium leading-[1.3]">Live data + photos as evidence</div>
                <div className="text-[15.5px] text-dm-grey font-light leading-[1.4] mt-0.5">Under-load datalogs and pictures of the actual failed component. Proof, not opinion.</div>
              </div>
            </div>
            <div className="flex gap-[14px] items-start">
              <Check className="w-[20px] h-[20px] shrink-0 mt-0.5 text-dm-purple" strokeWidth={2.2} />
              <div>
                <div className="text-[18px] text-dm-white font-medium leading-[1.3]">Required vs. Advisory, split clearly</div>
                <div className="text-[15.5px] text-dm-grey font-light leading-[1.4] mt-0.5">What must be fixed now vs. what to watch. You decide with full information.</div>
              </div>
            </div>
            <div className="flex gap-[14px] items-start">
              <Check className="w-[20px] h-[20px] shrink-0 mt-0.5 text-dm-purple" strokeWidth={2.2} />
              <div>
                <div className="text-[18px] text-dm-white font-medium leading-[1.3]">A second opinion you can take anywhere</div>
                <div className="text-[15.5px] text-dm-grey font-light leading-[1.4] mt-0.5">It's your document. If you walk, you walk with the diagnosis in hand.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mock fault file card */}
        <div 
          className="bg-[radial-gradient(900px_400px_at_80%_-10%,rgba(123,66,246,0.12),transparent_60%),var(--color-dm-black)] border border-dm-line2 rounded-lg overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.6)]"
          aria-label="Example of the fault file structure"
        >
          <div className="flex items-center gap-2 py-3 px-4 border-b border-dm-line bg-[#0c0c0e]">
            <span className="w-[9px] h-[9px] rounded-full bg-[#C1272D]"></span>
            <span className="w-[9px] h-[9px] rounded-full bg-[#D4A437]"></span>
            <span className="w-[9px] h-[9px] rounded-full bg-[#2ecc71]"></span>
            <span className="font-mono text-[10.5px] text-dm-grey2 tracking-[1.5px] ml-1.5">ENGINEERING_DIAGNOSTIC_REPORT.pdf</span>
          </div>
          <div className="py-[22px] px-5">
            <div className="flex justify-between items-baseline border-b border-dm-line pb-3.5 mb-4">
              <div className="font-bebas text-[24px] tracking-[1px]">FAULT FILE</div>
              <div className="font-mono text-[10px] text-dm-purple tracking-[1.5px]">DM-XXXX</div>
            </div>
            <div className="flex justify-between font-mono text-[12px] py-[7px] border-b border-dashed border-dm-line">
              <span className="text-dm-grey2">PLATFORM</span>
              <span className="text-dm-grey">▮▮▮▮▮ · ▮▮▮▮</span>
            </div>
            <div className="flex justify-between font-mono text-[12px] py-[7px] border-b border-dashed border-dm-line">
              <span className="text-dm-grey2">SYMPTOM</span>
              <span className="text-dm-grey">Power loss under load</span>
            </div>
            <div className="flex justify-between font-mono text-[12px] py-[7px] border-b border-dashed border-dm-line">
              <span className="text-dm-grey2">TOOL</span>
              <span className="text-dm-grey">XENTRY · live datalog</span>
            </div>
            <div className="flex justify-between font-mono text-[12px] py-[7px] border-b border-dashed border-dm-line">
              <span className="text-dm-grey2">BANK 1 PRESSURE</span>
              <span className="text-dm-red">OUT OF SPEC ▼</span>
            </div>
            <div className="flex justify-between font-mono text-[12px] py-[7px] border-b border-dashed border-dm-line">
              <span className="text-dm-grey2">BANK 2 PRESSURE</span>
              <span className="text-dm-green">NOMINAL</span>
            </div>
            <div className="flex justify-between font-mono text-[12px] py-[7px] border-b border-dashed border-dm-line">
              <span className="text-dm-grey2">ROOT CAUSE</span>
              <span className="text-dm-grey">Confirmed · component-level</span>
            </div>
            
            <div className="mt-4 grid grid-cols-2 gap-[10px]">
              <div className="border border-dm-line border-l-2 border-l-dm-red rounded-[5px] p-3">
                <div className="font-mono text-[9px] tracking-[1.5px] mb-1.5 text-dm-red">REQUIRED</div>
                <p className="text-[14px] text-dm-grey leading-[1.3] font-light">Replace proven-failed component. Re-test under load to confirm.</p>
              </div>
              <div className="border border-dm-line border-l-2 border-l-dm-gold rounded-[5px] p-3">
                <div className="font-mono text-[9px] tracking-[1.5px] mb-1.5 text-dm-gold">ADVISORY</div>
                <p className="text-[14px] text-dm-grey leading-[1.3] font-light">Monitor adjacent items. No immediate action needed.</p>
              </div>
            </div>
            
            <div className="font-mono text-[10px] text-dm-grey2 tracking-[0.8px] mt-3.5 text-center leading-[1.5]">
              ILLUSTRATIVE STRUCTURE · YOUR REPORT CARRIES YOUR CAR'S REAL DATA
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
