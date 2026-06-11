export function Footer() {
  return (
    <footer className="border-t border-dm-line py-9 pb-[100px] sm:pb-9">
      <div className="wrap">
        <div className="flex justify-between items-center gap-[18px] flex-wrap">
          <div className="flex items-center gap-3">
            <img src="/dm-logo.jpg" alt="DriverMade Logo" className="h-[36px] w-[36px] rounded-[6px] block object-cover" />
            <div>
              <div className="font-bebas text-[20px] leading-[1] tracking-[1px]">DRIVERMADE</div>
              <div className="font-mono text-[8px] tracking-[2.6px] text-dm-grey2 mt-0.5 uppercase">Precision Repair · Technical Care</div>
            </div>
          </div>
          <div className="font-mono text-[11px] text-dm-grey2 tracking-[1px] uppercase">
            MUSAFFAH · ABU DHABI <span className="text-dm-line2 font-light mx-1">/</span> DIAGNOSTICS-FIRST <span className="text-dm-line2 font-light mx-1">/</span> PROOF OVER GUESSWORK
          </div>
        </div>
      </div>
    </footer>
  );
}
