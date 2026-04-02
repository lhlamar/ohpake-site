import type { Metadata } from "next";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";

const jersey10 = localFont({ src: "../../public/Jersey10-Regular.ttf" });

export const metadata: Metadata = {
  title: "Merch – Ohpake",
};

const items = [
  {
    name: "oh.totebag",
    description: "Hand-drawn original artwork. Tote bag.",
    image: "/IMG_8706.jpg",
    price: "$15",
    inquirySubject: "Merch Order – oh.totebag",
    inquiryMessage: "Hey! I'm interested in ordering an oh.totebag ($15). Could you let me know about availability, sizes, and how to pay/ship?",
    inventory: { type: "count" as const, available: 11 },
  },
  {
    name: "Electric Shock Tee",
    description: "Hand-drawn original artwork. White tee.",
    image: "/IMG_8707.jpg",
    price: "$25",
    inquirySubject: "Merch Order – Electric Shock Tee",
    inquiryMessage: "Hey! I'm interested in ordering an Electric Shock Tee ($25). Could you let me know about available sizes and how to pay/ship?",
    inventory: { type: "sizes" as const, sizes: { M: 4, L: 3, XL: 2, "2X": 5 } },
  },
];

export default function MerchPage() {
  return (
    <main className="min-h-screen bg-[#0e1019] text-[#e8edf8] pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6 sm:px-10 flex flex-col gap-14">

        {/* Header */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-5 h-px bg-[#6280c4]" />
            <span className="text-xs tracking-[0.3em] uppercase text-[#6280c4]">Store</span>
          </div>
          <h1 className={`${jersey10.className} text-5xl sm:text-6xl text-[#c4ceec]`}>Merch</h1>
          <p className="text-[#9aaedf] text-base leading-relaxed max-w-prose">
            We&apos;re not ready to fully open an online store yet, but merch is still available, and one of the
            best ways to support us. If you see anything you like, hit us up on the{" "}
            <Link href="/contact" className="text-[#7b96d4] hover:text-[#9aaedf] underline underline-offset-4 transition-colors">
              contact page
            </Link>{" "}
          </p>
        </div>

        {/* Items grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.name}
              className="group flex flex-col rounded-2xl border border-[#9aaedf]/10 bg-[#9aaedf]/5 overflow-hidden hover:border-[#6280c4]/30 hover:bg-[#6280c4]/8 transition-all"
            >
              {/* Image */}
              <div className="relative w-full aspect-square overflow-hidden bg-[#1a1f2e]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Info */}
              <div className="flex flex-col gap-2 p-5">
                <p className={`${jersey10.className} text-xl text-[#c4ceec]`}>{item.name}</p>
                <p className="text-sm text-[#9aaedf] leading-relaxed">{item.description}</p>

                {/* Inventory */}
                {item.inventory.type === "count" ? (
                  <div className="flex items-center gap-2 mt-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400/80 shrink-0" />
                    <span className="text-xs text-emerald-400/80 tracking-wide">{item.inventory.available} in stock</span>
                  </div>
                ) : (
                  <div className="flex flex-col gap-1.5 mt-1">
                    <span className="text-xs text-[#6280c4] tracking-[0.2em] uppercase">Sizes availabl</span>
                    <div className="flex flex-wrap gap-1.5">
                      {Object.entries(item.inventory.sizes).map(([size, qty]) => (
                        <span
                          key={size}
                          className="flex items-center gap-1 px-2.5 py-1 rounded-full border border-[#6280c4]/30 bg-[#6280c4]/10 text-xs"
                        >
                          <span className="text-[#c4ceec] font-medium">{size}</span>
                          <span className="text-[#6280c4]">·</span>
                          <span className="text-emerald-400/80">{qty}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between mt-3">
                  <span className={`${jersey10.className} text-lg text-[#7b96d4]`}>{item.price}</span>
                  <Link
                    href={`/contact?subject=${encodeURIComponent(item.inquirySubject)}&message=${encodeURIComponent(item.inquiryMessage)}`}
                    className={`${jersey10.className} text-sm px-4 py-2 rounded-full border border-[#6280c4] text-[#9aaedf] hover:bg-[#6280c4]/20 hover:text-[#e8edf8] transition-colors`}
                  >
                    Inquire
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex flex-col items-center gap-4 text-center pt-4">
          <p className="text-[#9aaedf] text-sm">Ready to grab some merch?</p>
          <Link
            href="/contact"
            className={`${jersey10.className} text-lg px-8 py-3 rounded-full bg-linear-to-r from-[#6280c4] via-[#8b4eab] to-[#6280c4] bg-size-[200%_100%] hover:bg-position-[100%_0] transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-[#6280c4]/40 text-[#e8edf8]`}
          >
            Contact Us
          </Link>
        </div>

      </div>
    </main>
  );
}
