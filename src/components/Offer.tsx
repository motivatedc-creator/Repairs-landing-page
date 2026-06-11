import { WhatsAppIcon, PhoneIcon } from './Icons';

export function Offer() {
  return (
    <section className="py-[70px] border-t border-dm-line">
      <div className="wrap">
        <div className="bg-[radial-gradient(800px_360px_at_50%_0%,rgba(123,66,246,0.14),transparent_65%),linear-gradient(180deg,#101019,#0a0a0c)] border border-dm-line2 rounded-[10px] py-[54px] px-9 text-center mt-5">
          <div className="font-mono text-[11px] tracking-[3px] text-dm-purple uppercase mb-[14px] flex items-center justify-center gap-[10px] before:content-[''] before:w-6 before:h-[1px] before:bg-dm-purple">
            The diagnostic
          </div>
          <div className="font-bebas text-[clamp(56px,10vw,96px)] leading-[0.85] tracking-[1px]">
            <span className="text-dm-purple text-[0.5em] align-top mr-2 ">AED</span>
            250
          </div>
          <div className="font-mono text-[13px] tracking-[1.5px] text-dm-gold mt-3.5 uppercase">
            Credited toward your approved repair
          </div>
          <p className="text-[19px] text-dm-grey max-w-[48ch] mx-auto mt-[18px] font-light leading-[1.45]">
            A full engineering diagnostic on dealer-level tools, plus your written fault file. If you go ahead with the repair, the AED 250 comes off the bill — so the diagnosis effectively costs you nothing.
          </p>
          <div className="flex justify-center gap-[14px] mt-9 flex-wrap items-center">
            <a className="font-barlow font-semibold text-[18px] tracking-[0.5px] px-[26px] py-4 rounded-md inline-flex items-center gap-[11px] cursor-pointer transition-all duration-150 border border-transparent uppercase bg-dm-wa text-white shadow-[0_6px_24px_rgba(31,170,85,0.28)] hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(31,170,85,0.4)]" href="https://wa.me/971500000000?text=Hi%20DriverMade%2C%20I%27d%20like%20to%20book%20the%20AED%20250%20diagnostic.%20My%20car%20is%20a%20" aria-label="Book on WhatsApp">
              <WhatsAppIcon />
              Book on WhatsApp
            </a>
            <a className="font-barlow font-semibold text-[18px] tracking-[0.5px] px-[26px] py-4 rounded-md inline-flex items-center gap-[11px] cursor-pointer transition-all duration-150 border uppercase bg-transparent text-dm-white border-dm-line2 hover:-translate-y-0.5 hover:border-dm-grey2 hover:bg-dm-panel" href="tel:+971500000000" aria-label="Call the workshop">
              <PhoneIcon />
              Call the workshop
            </a>
          </div>
          <div className="font-mono text-[11px] text-dm-grey2 tracking-[0.5px] mt-[22px]">
            Tell us your car + symptom. We'll confirm the slot and what to expect.
          </div>
        </div>
      </div>
    </section>
  );
}
