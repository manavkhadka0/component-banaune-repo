import React from "react";
import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

const ContactSection: React.FC = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-12">
      <div className="relative overflow-hidden rounded-[50px] bg-[#F1F5EB]">
        <div className="absolute inset-0">
          <div className="absolute -top-32 -left-24 h-72 w-72 rounded-full bg-[#DDE8C7]" />
          <div className="absolute bottom-10 right-0 h-96 w-96 rounded-full bg-gradient-to-br from-[#98D427]/40 to-transparent blur-3xl" />
        </div>

        <div className="relative grid gap-10 p-6 md:p-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 lg:p-16">
          {/* Left Illustration */}
          <div className="relative overflow-hidden rounded-[40px] bg-[#034833]/5">
            <img
              src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=2940&auto=format&fit=crop"
              alt="Traveler smiling"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-4 rounded-[32px] border border-white/30" />
          </div>

          {/* Right Content */}
          <div className="relative rounded-[40px] bg-white/90 p-6 shadow-xl ring-1 ring-white/60 md:p-10">
            <div className="mb-10 max-w-2xl space-y-4">
              <p className="inline-flex items-center gap-3 rounded-full bg-[#034833]/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#034833]">
                Contact Information
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#034833] text-white">
                  <Send size={16} />
                </span>
              </p>
              <h2 className="text-4xl font-bold leading-tight text-[#034833] md:text-5xl">
                Let Your Wanderlust Guide You
              </h2>
              <p className="text-base text-[#134232]">
                Lorem Ipsum is simply dummy text the printing and typese Lorem
                Ipsum has been the industry&apos;s standard dummy text for
                decades. Reach out and let&apos;s make your next move seamless.
              </p>
            </div>

            <div className="space-y-6">
              {/* Top row */}
              <div className="grid gap-6 md:grid-cols-2">
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-semibold text-[#034833]">
                    Your Email
                  </span>
                  <div className="flex items-center gap-3 rounded-full border border-[#D7D7D7] px-5 py-3">
                    <Mail className="text-[#034833]/60" size={18} />
                    <input
                      placeholder="name@email.com"
                      className="w-full bg-transparent text-sm text-[#034833] placeholder:text-[#034833]/50 focus:outline-none"
                    />
                  </div>
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-semibold text-[#034833]">
                    Your Phone
                  </span>
                  <div className="flex items-center gap-3 rounded-full border border-[#D7D7D7] px-5 py-3">
                    <Phone className="text-[#034833]/60" size={18} />
                    <input
                      placeholder="+00 000 0000"
                      className="w-full bg-transparent text-sm text-[#034833] placeholder:text-[#034833]/50 focus:outline-none"
                    />
                  </div>
                </label>
              </div>

              {/* Address */}
              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-[#034833]">
                  Your Address
                </span>
                <div className="flex items-center gap-3 rounded-full border border-[#D7D7D7] px-5 py-3">
                  <MapPin className="text-[#034833]/60" size={18} />
                  <input
                    placeholder="123 Windy Street, London"
                    className="w-full bg-transparent text-sm text-[#034833] placeholder:text-[#034833]/50 focus:outline-none"
                  />
                </div>
              </label>

              {/* Message */}
              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-[#034833]">
                  Message
                </span>
                <div className="rounded-[30px] border border-[#D7D7D7] px-5 py-4">
                  <textarea
                    placeholder="Write Message.."
                    className="h-28 w-full resize-none bg-transparent text-sm text-[#034833] placeholder:text-[#034833]/50 focus:outline-none"
                  />
                </div>
              </label>

              <button className="flex w-full items-center justify-center gap-2 rounded-full bg-[#83CD20] py-4 text-base font-semibold text-white transition hover:bg-[#034833]">
                Send Message
                <ArrowRight size={18} />
              </button>
            </div>

            {/* CTA card */}
            <div className="mt-10 rounded-[30px] bg-white p-8 shadow-[0px_20px_60px_rgba(2,38,20,0.08)]">
              <p className="text-3xl font-semibold text-[#034833]">
                Let’s Do Great!
              </p>
              <p className="mt-3 text-sm text-[#4F6B5D]">
                Lorem Ipsum is simply dummy text the printing and typese Lorem
                Ipsum has been the industry&apos;s standard dummy.
              </p>
              <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#034833] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#05271E]">
                Contact us
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

