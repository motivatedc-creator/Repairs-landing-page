import { Plus } from 'lucide-react';
import { useState } from 'react';

const faqData = [
  {
    q: "What's the AED 250 actually for?",
    a: "A full diagnostic on dealer-level equipment, the engineer's time to interpret it, and your written fault file. If you approve the repair, the AED 250 is deducted from the final bill."
  },
  {
    q: "Will you just tell me to replace everything?",
    a: "No. The fault file separates what's *Required* (proven faults) from what's *Advisory* (worth watching). You only authorise what the data justifies — and you authorise it before we start."
  },
  {
    q: "Which cars do you work on?",
    a: "German platforms — Mercedes-AMG, BMW and M, Porsche, Audi S/RS, and VW. If your car is one of these and something isn't right, message us with the symptom."
  },
  {
    q: "What if I don't want to do the repair with you?",
    a: "The fault file is yours. Take it anywhere for a second opinion. We'd rather you leave informed than feel pushed — but most people stay once they see the work."
  },
  {
    q: "Where are you?",
    a: "Musaffah, Abu Dhabi. Message us on WhatsApp and we'll send the exact location and a slot."
  }
];

export function FAQ() {
  return (
    <section className="py-[70px] border-t border-dm-line">
      <div className="wrap border-t border-dm-line mt-9 pt-9">
        <div className="font-mono text-[11px] tracking-[3px] text-dm-purple uppercase mb-[14px] flex items-center gap-[10px] before:content-[''] before:w-6 before:h-[1px] before:bg-dm-purple">
          Before you message
        </div>
        <h2 className="font-bebas font-normal text-[clamp(34px,5vw,54px)] leading-[0.95] tracking-[0.6px] max-w-[18ch]">
          Quick answers.
        </h2>
        <div className="mt-9 border-t border-dm-line">
          {faqData.map((item, idx) => (
            <details key={idx} className="group border-b border-dm-line p-0">
              <summary className="list-none cursor-pointer py-[22px] px-1 flex justify-between items-center gap-[18px] font-barlow font-medium text-[21px] text-dm-white marker:hidden [&::-webkit-details-marker]:hidden">
                {item.q}
                <span className="font-mono text-dm-purple text-[22px] flex-none transition-transform duration-200 group-open:rotate-45">
                  <Plus className="w-5 h-5"/>
                </span>
              </summary>
              <div className="px-1 pb-6 text-[17px] text-dm-grey leading-[1.5] font-light max-w-[68ch]">
                {item.a.includes('*') ? (
                  <span dangerouslySetInnerHTML={{ __html: item.a.replace(/\*(.*?)\*/g, '<em>$1</em>') }} />
                ) : (
                  item.a
                )}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
