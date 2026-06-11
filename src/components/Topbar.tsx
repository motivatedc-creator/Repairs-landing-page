export function Topbar() {
  return (
    <div className="flex items-center justify-between px-6 py-4 border-b border-dm-line max-w-[1100px] mx-auto w-full relative z-10">
      <div className="flex items-center gap-3">
        <img src="/dm-logo.jpg" alt="DriverMade Logo" className="h-[44px] w-[44px] rounded-[7px] block object-cover" />
        <div>
          <div className="font-bebas text-[25px] tracking-[1.8px] leading-[0.9]">DRIVERMADE</div>
          <div className="font-mono text-[8px] tracking-[2.6px] text-dm-grey2 mt-1 uppercase">Precision Repair · Technical Care</div>
        </div>
      </div>
      <div className="hidden sm:block font-mono text-[11px] tracking-[1.5px] text-dm-grey2">
        MUSAFFAH · <b className="text-dm-grey font-medium">ABU DHABI</b>
      </div>
    </div>
  );
}
