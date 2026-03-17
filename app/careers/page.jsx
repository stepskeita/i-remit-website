"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, MapPin, Clock, ArrowRight } from "lucide-react";
import { openRoles, companyValues, teamColors } from "@/mock/data";

export default function Careers() {
  const [activeTeam, setActiveTeam] = useState("All");
  const teams = ["All", ...new Set(openRoles.map((r) => r.team))];
  const filtered =
    activeTeam === "All"
      ? openRoles
      : openRoles.filter((r) => r.team === activeTeam);

  return (
    <div className="min-h-screen bg-white">
      <div className="h-1.5 bg-[#81ad10]" />
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

      {/* Hero */}
      <div className="bg-[#080145] border-b-2 border-black py-20 px-6 lg:px-12 text-center">
        <div
          className="inline-block px-4 py-1.5 bg-[#81ad10] border-2 border-black text-xs font-bold uppercase tracking-wider mb-6"
          style={{ boxShadow: "3px 3px 0px 0px #000" }}
        >
          We&apos;re Hiring
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
          Build the Future of
          <br />
          <span className="text-[#81ad10]">Global Remittance</span>
        </h1>
        <p className="text-white/50 max-w-xl mx-auto mb-8">
          Join a team of builders, problem-solvers, and fintech innovators
          working to reshape how money moves around the world.
        </p>
        <a
          href="#roles"
          className="inline-block px-8 py-3.5 bg-[#81ad10] text-black font-bold border-2 border-black transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
          style={{ boxShadow: "6px 6px 0px 0px #000" }}
        >
          View Open Roles ↓
        </a>
      </div>

      {/* Values */}
      <div className="bg-white border-b-2 border-black py-16 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-extrabold text-black mb-8 text-center">
            Our Values
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {companyValues.map((v) => (
              <div
                key={v.title}
                className="border-2 border-black p-5"
                style={{ boxShadow: "4px 4px 0px 0px #000" }}
              >
                <div className="w-10 h-10 bg-[#81ad10] border-2 border-black flex items-center justify-center mb-3">
                  <v.icon size={18} className="text-black" />
                </div>
                <h3 className="font-extrabold text-black mb-1">{v.title}</h3>
                <p className="text-sm text-gray-500">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Open Roles */}
      <div
        id="roles"
        className="py-16 px-6 lg:px-12 bg-gray-50 border-b-2 border-black"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-extrabold text-black mb-8">
            Open Positions
          </h2>

          {/* Team filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {teams.map((team) => (
              <button
                key={team}
                onClick={() => setActiveTeam(team)}
                className={`px-4 py-2 text-xs font-bold border-2 border-black transition-all duration-150 ${
                  activeTeam === team
                    ? "bg-[#81ad10] text-black"
                    : "bg-white text-black hover:bg-gray-100"
                }`}
                style={{ boxShadow: "2px 2px 0px 0px #000" }}
              >
                {team}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {filtered.map((role) => (
              <div
                key={role.title}
                className="bg-white border-2 border-black p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                style={{ boxShadow: "4px 4px 0px 0px #000" }}
              >
                <div className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span
                      className={`text-[10px] font-bold uppercase px-2 py-0.5 border border-black ${teamColors[role.team] || "bg-gray-100"}`}
                    >
                      {role.team}
                    </span>
                    <span className="flex items-center gap-1 text-[10px] font-bold text-gray-500 uppercase">
                      <MapPin size={10} /> {role.location}
                    </span>
                    <span className="flex items-center gap-1 text-[10px] font-bold text-gray-500 uppercase">
                      <Clock size={10} /> {role.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-extrabold text-black">
                    {role.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{role.desc}</p>
                </div>
                <button
                  className="flex-shrink-0 px-5 py-2.5 bg-[#080145] text-white text-sm font-bold border-2 border-black flex items-center gap-2 transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none whitespace-nowrap"
                  style={{ boxShadow: "3px 3px 0px 0px #81ad10" }}
                >
                  Apply Now <ArrowRight size={15} />
                </button>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-gray-400 py-12">
              No open roles in this team right now. Check back soon.
            </p>
          )}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-[#81ad10] border-b-2 border-black py-14 px-6 text-center">
        <h2 className="text-2xl font-extrabold text-black mb-3">
          Don&apos;t See Your Role?
        </h2>
        <p className="text-black/70 mb-6 max-w-md mx-auto text-sm">
          We&apos;re always looking for exceptional people. Send us your CV and
          tell us how you&apos;d contribute.
        </p>
        <a
          href="mailto:careers@i-remit.io"
          className="inline-block px-7 py-3 bg-[#080145] text-white font-bold border-2 border-black transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
          style={{ boxShadow: "4px 4px 0px 0px #000" }}
        >
          Send Open Application
        </a>
      </div>

      {/* Footer note */}
      <div className="bg-[#080145] py-6 text-center">
        <p className="text-white/30 text-xs">
          © 2026 i-REMIT. All rights reserved.
        </p>
      </div>
    </div>
  );
}
