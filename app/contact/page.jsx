"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle,
  MessageSquare,
  Building2,
  User,
} from "lucide-react";
import { contactReasons } from "@/mock/data";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    company: "",
    reason: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top accent */}
      <div className="h-1.5 bg-[#81ad10]" />

      {/* Header */}
      <div className="border-b-2 border-black px-6 lg:px-12 py-4 flex items-center justify-between">
        <Link href="/">
          <img src="/logo.png" alt="i-REMIT" className="h-11 w-auto" />
        </Link>
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-bold text-black hover:text-[#81ad10] transition-colors"
        >
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>

      {/* Hero bar */}
      <div className="bg-[#080145] border-b-2 border-black px-6 lg:px-12 py-14 text-center">
        <div
          className="inline-block px-4 py-1.5 bg-[#81ad10] border-2 border-black text-xs font-bold uppercase tracking-wider mb-5"
          style={{ boxShadow: "3px 3px 0px 0px #000" }}
        >
          Get In Touch
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
          We&apos;d Love To Hear From You
        </h1>
        <p className="text-white/50 max-w-xl mx-auto text-sm">
          Whether you have a question about our platform, pricing, or anything
          else — our team is ready to answer.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left — contact info */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-extrabold text-black">
              Contact Information
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Reach out through the form or contact us directly. We respond to
              all enquiries within one business day.
            </p>

            {/* Info cards */}
            {[
              {
                icon: Mail,
                label: "Email Us",
                value: "hello@i-remit.io",
                sub: "For general & sales enquiries",
              },
              {
                icon: Phone,
                label: "Call Us",
                value: "+1 (555) 000-0000",
                sub: "Mon–Fri, 9am–6pm (GMT)",
              },
              {
                icon: MapPin,
                label: "Headquarters",
                value: "i-REMIT Global HQ",
                sub: "Available on request",
              },
              {
                icon: Clock,
                label: "Response Time",
                value: "Within 24 hours",
                sub: "Business days only",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 bg-white border-2 border-black p-4"
                style={{ boxShadow: "3px 3px 0px 0px #000" }}
              >
                <div className="w-10 h-10 bg-[#81ad10] border-2 border-black flex items-center justify-center flex-shrink-0">
                  <item.icon size={18} className="text-black" />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                    {item.label}
                  </p>
                  <p className="text-sm font-extrabold text-black">
                    {item.value}
                  </p>
                  <p className="text-xs text-gray-400">{item.sub}</p>
                </div>
              </div>
            ))}

            {/* Dark promo block */}
            <div
              className="bg-[#080145] border-2 border-black p-5 mt-4"
              style={{ boxShadow: "4px 4px 0px 0px #81ad10" }}
            >
              <p className="text-[#81ad10] text-xs font-bold uppercase tracking-widest mb-2">
                Ready to launch?
              </p>
              <p className="text-white font-extrabold text-lg mb-1">
                Book a personalised demo
              </p>
              <p className="text-white/50 text-xs mb-4">
                See the full i-REMIT platform in action with your team.
              </p>
              <Link
                href="/request-demo"
                className="inline-block px-5 py-2.5 bg-[#81ad10] text-black text-xs font-bold border-2 border-black transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                style={{ boxShadow: "3px 3px 0px 0px #000" }}
              >
                Request Demo →
              </Link>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3">
            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="bg-white border-2 border-black p-8"
                style={{ boxShadow: "8px 8px 0px 0px #000" }}
              >
                <h2 className="text-xl font-extrabold text-black mb-6">
                  Send Us a Message
                </h2>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-black mb-1.5">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User
                        size={14}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                      />
                      <input
                        name="fullName"
                        required
                        value={form.fullName}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className="w-full pl-9 pr-3 py-2.5 border-2 border-black text-sm font-medium focus:outline-none focus:border-[#81ad10]"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-black mb-1.5">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail
                        size={14}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                      />
                      <input
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full pl-9 pr-3 py-2.5 border-2 border-black text-sm font-medium focus:outline-none focus:border-[#81ad10]"
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-xs font-bold uppercase tracking-wider text-black mb-1.5">
                    Company
                  </label>
                  <div className="relative">
                    <Building2
                      size={14}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                    <input
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                      className="w-full pl-9 pr-3 py-2.5 border-2 border-black text-sm font-medium focus:outline-none focus:border-[#81ad10]"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-xs font-bold uppercase tracking-wider text-black mb-1.5">
                    Reason for Contact *
                  </label>
                  <select
                    name="reason"
                    required
                    value={form.reason}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 border-2 border-black text-sm font-medium focus:outline-none focus:border-[#81ad10] bg-white"
                  >
                    <option value="">Select a reason</option>
                    {contactReasons.map((r) => (
                      <option key={r}>{r}</option>
                    ))}
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-xs font-bold uppercase tracking-wider text-black mb-1.5">
                    <MessageSquare size={12} className="inline mr-1" />
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us how we can help you..."
                    className="w-full px-3 py-2.5 border-2 border-black text-sm font-medium focus:outline-none focus:border-[#81ad10] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#81ad10] text-black font-extrabold border-2 border-black transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none text-base"
                  style={{ boxShadow: "6px 6px 0px 0px #000" }}
                >
                  Send Message →
                </button>
                <p className="text-xs text-gray-400 mt-3 text-center">
                  We&apos;ll get back to you within one business day.
                </p>
              </form>
            ) : (
              <div
                className="bg-white border-2 border-black p-12 flex flex-col items-center text-center"
                style={{ boxShadow: "8px 8px 0px 0px #000" }}
              >
                <div
                  className="w-16 h-16 bg-[#81ad10] border-2 border-black flex items-center justify-center mb-6"
                  style={{ boxShadow: "4px 4px 0px 0px #000" }}
                >
                  <CheckCircle size={32} className="text-black" />
                </div>
                <h2 className="text-2xl font-extrabold text-black mb-3">
                  Message Sent!
                </h2>
                <p className="text-gray-600 text-sm max-w-sm mb-8">
                  Thanks, <strong>{form.fullName}</strong>! We&apos;ve received
                  your message and will reply to <strong>{form.email}</strong>{" "}
                  within one business day.
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        fullName: "",
                        email: "",
                        company: "",
                        reason: "",
                        message: "",
                      });
                    }}
                    className="px-5 py-2.5 bg-white text-black text-sm font-bold border-2 border-black transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                    style={{ boxShadow: "3px 3px 0px 0px #000" }}
                  >
                    Send Another
                  </button>
                  <Link
                    href="/"
                    className="px-5 py-2.5 bg-[#080145] text-white text-sm font-bold border-2 border-black transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                    style={{ boxShadow: "3px 3px 0px 0px #000" }}
                  >
                    ← Back to Home
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer note */}
      <div className="bg-[#080145] border-t-2 border-black py-6 text-center">
        <p className="text-white/30 text-xs">
          © 2026 i-REMIT. All rights reserved.
        </p>
      </div>
    </div>
  );
}
