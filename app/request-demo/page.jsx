"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Building2,
  User,
  Mail,
  Phone,
  Globe,
  MessageSquare,
} from "lucide-react";
import { demoModules, demoFeatures } from "@/mock/data";

export default function RequestDemo() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    country: "",
    companySize: "",
    modules: [],
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const toggleModule = (mod) => {
    setForm((prev) => ({
      ...prev,
      modules: prev.modules.includes(mod)
        ? prev.modules.filter((m) => m !== mod)
        : [...prev.modules, mod],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top bar */}
      <div className="h-1.5 bg-[#81ad10]" />
      <div className="border-b-2 border-black px-6 lg:px-12 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img src="/logo.png" alt="i-REMIT" className="h-11 w-auto" />
        </Link>
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-bold text-black hover:text-[#81ad10] transition-colors"
        >
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-16">
        {!submitted ? (
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left panel */}
            <div className="lg:col-span-2">
              <div
                className="inline-block px-4 py-1.5 bg-[#81ad10]/10 border-2 border-black text-xs font-bold uppercase tracking-wider mb-4"
                style={{ boxShadow: "3px 3px 0px 0px #000" }}
              >
                Request a Demo
              </div>
              <h1 className="text-3xl lg:text-4xl font-extrabold text-black leading-tight mb-4">
                See i-REMIT In Action
              </h1>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                Book a personalised demo with our team. We&apos;ll walk you
                through the platform and show you how to launch your remittance
                business in weeks.
              </p>

              <div className="space-y-4">
                {demoFeatures.map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <item.icon
                      size={18}
                      className="text-[#81ad10] flex-shrink-0 mt-0.5"
                    />
                    <p className="text-sm text-gray-700">{item.text}</p>
                  </div>
                ))}
              </div>

              <div
                className="mt-10 bg-[#080145] border-2 border-black p-6"
                style={{ boxShadow: "4px 4px 0px 0px #81ad10" }}
              >
                <p className="text-[#81ad10] text-xs font-bold uppercase tracking-widest mb-3">
                  Response Time
                </p>
                <p className="text-white font-extrabold text-xl mb-1">
                  Within 24 hours
                </p>
                <p className="text-white/50 text-sm">
                  Our team will reach out to schedule your personalised session.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <form
                onSubmit={handleSubmit}
                className="bg-white border-2 border-black p-8"
                style={{ boxShadow: "8px 8px 0px 0px #000" }}
              >
                <h2 className="text-xl font-extrabold text-black mb-6">
                  Your Details
                </h2>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-black mb-1.5">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User
                        size={15}
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
                      Work Email *
                    </label>
                    <div className="relative">
                      <Mail
                        size={15}
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
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-black mb-1.5">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone
                        size={15}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                      />
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 555 000 0000"
                        className="w-full pl-9 pr-3 py-2.5 border-2 border-black text-sm font-medium focus:outline-none focus:border-[#81ad10]"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-black mb-1.5">
                      Company *
                    </label>
                    <div className="relative">
                      <Building2
                        size={15}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                      />
                      <input
                        name="company"
                        required
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Your company name"
                        className="w-full pl-9 pr-3 py-2.5 border-2 border-black text-sm font-medium focus:outline-none focus:border-[#81ad10]"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-black mb-1.5">
                      Your Role *
                    </label>
                    <select
                      name="role"
                      required
                      value={form.role}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 border-2 border-black text-sm font-medium focus:outline-none focus:border-[#81ad10] bg-white"
                    >
                      <option value="">Select role</option>
                      <option>CEO / Founder</option>
                      <option>CTO / Technical Lead</option>
                      <option>Product Manager</option>
                      <option>Business Development</option>
                      <option>Operations</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-black mb-1.5">
                      Company Size *
                    </label>
                    <select
                      name="companySize"
                      required
                      value={form.companySize}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 border-2 border-black text-sm font-medium focus:outline-none focus:border-[#81ad10] bg-white"
                    >
                      <option value="">Select size</option>
                      <option>1–10 employees</option>
                      <option>11–50 employees</option>
                      <option>51–200 employees</option>
                      <option>201–1000 employees</option>
                      <option>1000+ employees</option>
                    </select>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-xs font-bold uppercase tracking-wider text-black mb-1.5">
                    <Globe size={12} className="inline mr-1" />
                    Country
                  </label>
                  <input
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    placeholder="e.g. United States"
                    className="w-full px-3 py-2.5 border-2 border-black text-sm font-medium focus:outline-none focus:border-[#81ad10]"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-xs font-bold uppercase tracking-wider text-black mb-2">
                    Platform Modules You&apos;re Interested In
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {demoModules.map((mod) => (
                      <button
                        key={mod}
                        type="button"
                        onClick={() => toggleModule(mod)}
                        className={`px-3 py-2 text-xs font-bold border-2 border-black text-left transition-all duration-150 ${
                          form.modules.includes(mod)
                            ? "bg-[#81ad10] text-black"
                            : "bg-white text-black hover:bg-gray-50"
                        }`}
                        style={{ boxShadow: "2px 2px 0px 0px #000" }}
                      >
                        {mod}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-xs font-bold uppercase tracking-wider text-black mb-1.5">
                    <MessageSquare size={12} className="inline mr-1" />
                    Tell us about your project
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe your use case, timeline, or any specific requirements..."
                    className="w-full px-3 py-2.5 border-2 border-black text-sm font-medium focus:outline-none focus:border-[#81ad10] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#81ad10] text-black font-extrabold border-2 border-black transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none text-base"
                  style={{ boxShadow: "6px 6px 0px 0px #000" }}
                >
                  Request My Demo →
                </button>
                <p className="text-xs text-gray-400 mt-3 text-center">
                  No commitment required. We&apos;ll contact you within 24
                  hours.
                </p>
              </form>
            </div>
          </div>
        ) : (
          /* Success state */
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
            <div
              className="w-20 h-20 bg-[#81ad10] border-2 border-black flex items-center justify-center mb-6"
              style={{ boxShadow: "6px 6px 0px 0px #000" }}
            >
              <CheckCircle size={40} className="text-black" />
            </div>
            <h2 className="text-3xl font-extrabold text-black mb-3">
              Request Received!
            </h2>
            <p className="text-gray-600 max-w-md mb-8">
              Thank you, <strong>{form.fullName}</strong>. Our team will review
              your request and reach out to <strong>{form.email}</strong> within
              24 hours to schedule your personalised demo.
            </p>
            <Link
              href="/"
              className="px-7 py-3 bg-[#080145] text-white font-bold border-2 border-black transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
              style={{ boxShadow: "4px 4px 0px 0px #000" }}
            >
              ← Back to Home
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
