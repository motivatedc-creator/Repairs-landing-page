import { WhatsAppIcon, PhoneIcon } from './Icons';

export function Hero() {
  return (
    <header className="py-16 pb-14 relative z-10 before:absolute before:-top-10 before:left-1/2 before:-translate-x-1/2 before:w-[900px] before:h-[520px] before:pointer-events-none before:-z-10 before:bg-[radial-gradient(closest-side,rgba(123,66,246,0.16),transparent_70%)]">
      <div className="wrap">
        <div className="font-mono text-[11px] tracking-[3px] text-dm-purple inline-flex items-center gap-[9px] mb-6 border border-dm-line2 border-l-[2px] border-l-dm-purple py-[7px] px-[13px] rounded-[3px] uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-dm-green shadow-[0_0_8px_var(--color-dm-green)]"></span>
          Mercedes-AMG · BMW · Porsche · Audi
        </div>
        <h1 className="font-bebas font-normal text-[clamp(48px,8.5vw,92px)] leading-[0.9] tracking-[1px] max-w-[14ch]">
          Find the fault.<br/><span className="text-dm-purple">Then</span> fix it.
        </h1>
        <p className="text-[clamp(18px,2.4vw,23px)] text-dm-grey font-light max-w-[54ch] mt-6 leading-[1.4]">
          Most workshops guess, swap parts, and bill you for the lesson. We run dealer-level diagnostics, hand you a <b className="text-dm-white font-medium">written fault file</b>, and fix only what's proven broken. No guesswork. No mystery invoices.
        </p>

        <div className="flex gap-[14px] mt-9 flex-wrap items-center">
          <a className="font-barlow font-semibold text-[18px] tracking-[0.5px] px-[26px] py-4 rounded-md inline-flex items-center gap-[11px] cursor-pointer transition-all duration-150 border border-transparent uppercase bg-dm-wa text-white shadow-[0_6px_24px_rgba(31,170,85,0.28)] hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(31,170,85,0.4)]" href="https://wa.me/971500000000?text=Hi%20DriverMade%2C%20I%27d%20like%20to%20book%20a%20diagnostic.%20My%20car%20is%20a%20" aria-label="Message us on WhatsApp">
            <WhatsAppIcon />
            WhatsApp Us
          </a>
          <a className="font-barlow font-semibold text-[18px] tracking-[0.5px] px-[26px] py-4 rounded-md inline-flex items-center gap-[11px] cursor-pointer transition-all duration-150 border uppercase bg-transparent text-dm-white border-dm-line2 hover:-translate-y-0.5 hover:border-dm-grey2 hover:bg-dm-panel" href="tel:+971500000000" aria-label="Call us">
            <PhoneIcon />
            Call
          </a>
        </div>
        <div className="font-mono text-[11.5px] text-dm-grey2 tracking-[0.5px] mt-4">
          Reply usually within the hour, 7 days · Diagnostic <b className="text-dm-gold">AED 250</b>, credited to your repair
        </div>

        <div className="flex gap-[26px] flex-wrap mt-[42px] pt-6 border-t border-dm-line font-bebas text-[21px] tracking-[1.5px] text-dm-grey2">
          <span className="font-mono text-[10px] tracking-[2px] text-dm-grey2 self-center">WE WORK ON</span>
          <span className="transition-colors hover:text-dm-grey cursor-default">MERCEDES-AMG</span>
          <span className="transition-colors hover:text-dm-grey cursor-default">BMW · M</span>
          <span className="transition-colors hover:text-dm-grey cursor-default">PORSCHE</span>
          <span className="transition-colors hover:text-dm-grey cursor-default">AUDI · S/RS</span>
          <span className="transition-colors hover:text-dm-grey cursor-default">VW</span>
        </div>
      </div>
    </header>
  );
}
