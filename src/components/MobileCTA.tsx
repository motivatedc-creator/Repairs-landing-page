import { WhatsAppIcon, PhoneIcon } from './Icons';

export function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex sm:hidden gap-[10px] p-[12px_14px] bg-[rgba(8,8,10,0.94)] backdrop-blur-[10px] border-t border-dm-line2">
      <a className="font-barlow font-semibold text-[16px] tracking-[0.5px] p-[14px_10px] rounded-md flex justify-center items-center gap-[11px] cursor-pointer flex-1 border border-transparent uppercase bg-dm-wa text-white" href="https://wa.me/971500000000?text=Hi%20DriverMade%2C%20I%27d%20like%20to%20book%20a%20diagnostic.%20My%20car%20is%20a%20" aria-label="WhatsApp">
        <WhatsAppIcon />
        WhatsApp
      </a>
      <a className="font-barlow font-semibold text-[16px] tracking-[0.5px] p-[14px_10px] rounded-md flex justify-center items-center gap-[11px] cursor-pointer flex-1 border uppercase bg-transparent text-dm-white border-dm-line2" href="tel:+971500000000" aria-label="Callus">
        <PhoneIcon />
        Call
      </a>
    </div>
  );
}
