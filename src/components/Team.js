"use client";

import { useState } from "react";
import Image from "next/image";
import TeamModal from "@/components/TeamModal";

/**
 * Team member profile data structure:
 * - id: number
 * - name: string
 * - role: string
 * - image: string | null (Optional path e.g. "/Teams/shaheen.jpg")
 * - linkedin: string | null (Optional LinkedIn profile URL; omitted from modal if null)
 * - hasReadMore: boolean
 * - bio: string[] (Array of biographical paragraphs)
 */
const TOP_ROW_MEMBERS = [
  {
    id: 1,
    name: "Ali Azam",
    role: "Founder",
    image: "/Teams/Ali_Azam_Founder_MAHM_TRUST.jpeg",
    linkedin: null, // Optional
    hasReadMore: true,
    bio: [
      "A visionary engineer, entrepreneur, and Freedom Fighter, Ali Azam established the Moulovi Abdul Hye Memorial Trust (MAHM Trust) inspired by the educational legacy of his father, Moulovi Abdul Hye, a revered headmaster in Gobindopur. Ali Azam dedicated himself to ensuring that poverty would never deprive a child of education or hold back his community. Beyond founding the Moulovi Abdul Hye Memorial School & College, his vision spearheaded impactful social initiatives including successfully preventing early marriages for nearly 200+ young girls and providing them with employment opportunities to secure their long-term independence and dignity.",
    ],
  },
  {
    id: 2,
    name: "Tarana Ali",
    role: "Chairperson",
    image: "/Teams/Tarana.jpeg",
    linkedin: null, // Optional
    hasReadMore: true,
    bio: [
      "Tarana Ali chairs MAHM TRUST, guiding its work across education, sustainable agriculture, the circular economy, and women’s rights and livelihood. She also serves as Managing Director of Adex Group of Companies, a leading Bangladesh-based power engineering group, where she co-leads strategy, governance, and organizational development across its manufacturing and engineering enterprises.",
      "Her leadership bridges MAHM’s grassroots community work with the operational discipline of running a large Group of Companies, bringing the same focus on structure, accountability, and long-term resilience to both.",
    ],
  },
  {
    id: 3,
    name: "Elisun Ali",
    role: "Deputy Chairperson",
    image: "/Teams/Elisun.jpeg",
    linkedin: null, // Optional
    hasReadMore: true,
    bio: [
      "Elisun Ali brings over 15 years of power sector expertise to her role as Deputy Chairperson of MAHM Trust. She serves as the Director of Research & Development at Adex Group of Companies, leading product design, innovation, and business management with a strong focus on energy efficiency and environmental sustainability. She also chairs the BSTI Transformer Sector Committee, helping shape national standards and policy frameworks for the power industry.",
      "Alongside her corporate leadership, Elisun actively drives MAHM Trust’s community initiatives across rural economic development, sustainable agriculture, youth engagement, and women’s rights. A vocalist with over 11 years of performance experience, she leverages her creative background to promote local culture, music, art, and women’s sports. Her work uniquely bridges technological innovation, sustainability, and grassroots community empowerment.",
    ],
  },
  {
    id: 4,
    name: "Lucky Mony",
    role: "Executive Director",
    image: "/Teams/Moni.jpeg",
    linkedin: null, // Optional
    hasReadMore: true,
    bio: [
      "Lucky Mony is a business and social-impact professional with extensive experience in the energy sector and as a Director at Adex Group of Companies. As Executive Director of the Moulovi Abdul Hye Memorial Trust, she leads initiatives at the intersection of education, psychology, art, creativity, and community development, with a focus on creating meaningful social change.",
      "Her work also spans media and post-production, while her current social-tech venture explores innovative approaches to community building and wellbeing. She brings a cross-disciplinary perspective that connects business, creative thinking, and human development to the Trust’s long-term vision.",
    ],
  },
  {
    id: 5,
    name: "Palash Das",
    role: "Senior Adviser",
    image: "/Teams/Polash_Das_Senior_Adviser_MAHM_TRUST.jpeg",
    linkedin: null, // Optional, present
    hasReadMore: true,
    bio: [
      "Senior development professional with over 25 years’ experience in climate resilience, inclusive growth, and impact-oriented finance. Has structured climate financing solutions for circular economy interventions, including urban waste management and regenerative agriculture initiatives, and has led climate risk assessments and ESG advisory engagements across regions. Brings practical experience in results-based management, digital reporting systems, and economic policy analysis."
    ],
  },

];

const BOTTOM_ROW_MEMBERS = [
  {
    id: 7,
    name: "Shaheen Bin Siraz",
    role: "Head of Programme and Adviser ",
    image: "/Teams/Shaheen.jpeg",
    linkedin: null, // Optional, present
    hasReadMore: true,
    bio: [
      "Development professional with 25 years of experience in programme delivery, partner management and donor oversight in Bangladesh. Managed climate resilience work at Christian Aid, implemented community flood resilience programming at Oxfam GB, and supervised close to 180 staff delivering community-managed water, sanitation and hygiene programmes at NGO Forum for Public Health. At USAID Bangladesh, led project and activity design across environment, climate, governance, economic growth and other sectors, alongside grant performance and compliance responsibilities. Current advisory work covers environmental and social risk screening, project design and results-based management.",
      "Brings experience relevant to managing the proposed agricultural plastics recovery project: coordinating community programmes and private-sector relationships, overseeing budgets and partner grants, supporting inclusive participation, and using performance evidence to guide implementation. Established a USAID–BRAC Bank credit guarantee programme that expanded smallholder farmers’ access to formal finance.",
    ],
  },
  {
    id: 8,
    name: "Tamanna Khan",
    role: "Adviser",
    image: "/Teams/Tamanna_Khan_Adviser_MAHM_TRUST.jpeg",
    linkedin: null, // Optional
    hasReadMore: true,
    bio: [
      "Tamanna Khan is a journalist who believes secular education is the key to building a knowledge-based, empathetic, and inclusive society. Born and raised in Dhaka, she had the privilege of an education that instilled progressive values, giving her the confidence to pursue an unconventional path in a heavily patriarchal society. Tamanna graduated with a degree in Business Administration from North South University and later completed her MBA at Dhaka University. She brings diverse local and international experience spanning market research, banking, teaching, communications, and customer service. Ultimately, the legacy she wishes to leave behind is rooted in educational philanthropy."
    ],
  },
  {
    id: 9,
    name: "Md. Zakir Hossain",
    role: "Admin",
    image: "/Teams/Zack.jpeg",
    linkedin: null, // Optional
    hasReadMore: true,
    bio: [
      "30+ Years of experience",
      "Helps oversee school",
    ],
  },
  {
    id: 10,
    name: "Ajufa Akhter",
    role: "M&E Lead",
    image: "/Teams/ajufa.jpeg",
    linkedin: null, // Optional
    hasReadMore: true,
    bio: [
      "Ajufa Akhter serves as the Monitoring & Evaluation (M&E) Lead at MAHM Trust, bringing over a decade of experience across strategic communications, digital marketing, and community-driven initiatives. In her role as Assistant Manager at Adex Group, she leads brand positioning, website development, and executive communications.",
      "A passionate practitioner of experiential learning and child development, Ajufa is the founder of Anandalok (a creative learning initiative for children) and an author of published children's literature. She communicates in Bengali and English, with basic conversational skills in French and German.",
    ],
  }
];

function TeamMemberCard({ member, onSelect }) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onSelect(member)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(member);
        }
      }}
      className="flex flex-col items-center text-center group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e08a1e] rounded-2xl p-1 transition-transform"
    >
      {/* 4:5 Boxed Portrait Container with orange top line */}
      <div className="relative w-full aspect-[4/5] rounded-2xl sm:rounded-[22px] bg-gradient-to-b from-[#f0f4ea] via-[#e5ecdb] to-[#d8e5cb] border border-[#3f5a30]/10 border-t-5 border-t-[#e08a1e] shadow-[0_8px_20px_-4px_rgba(63,90,48,0.12)] overflow-hidden transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-[0_16px_32px_-6px_rgba(63,90,48,0.18)] flex items-center justify-center">
        {member.image ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            style={{ objectPosition: member.objectPosition || "center" }}
          />
        ) : (
          <div className="flex flex-col items-center justify-center p-4 text-[#52604c]/80 select-none">
            {/* Elegant Portrait Silhouette Icon */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/70 flex items-center justify-center mb-2 shadow-2xs">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-[#3f5a30]/70"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </div>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#3f5a30]/80">
              Photo
            </span>
          </div>
        )}
      </div>

      {/* Member Details */}
      <div className="flex flex-col items-center mt-3 sm:mt-3.5 px-1">
        <h4 className="font-bold text-[#1d2619] text-base sm:text-[17px] leading-snug transition-colors duration-200 group-hover:text-[#3f5a30]">
          {member.name}
        </h4>
        <span className="font-bold tracking-wider text-[#e08a1e] uppercase text-[11px] sm:text-xs mt-1">
          {member.role}
        </span>
        {member.hasReadMore && (
          <span
            className="mt-1.5 text-xs font-semibold text-[#52604c] group-hover:text-[#e08a1e] underline decoration-1 underline-offset-4 transition-colors"
          >
            Read more...
          </span>
        )}
      </div>
    </div>
  );
}

export default function Team() {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <section
      id="team"
      className="relative w-full bg-[#fbf9f2] pt-8 sm:pt-12 pb-16 sm:pb-24 scroll-mt-20 overflow-hidden"
    >
      {/* Illustrated Header Banner with Overlaid Title */}
      <div className="relative w-full overflow-hidden">
        {/* Full-width illustration */}
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
          <Image
            src="/Teams/teams.jpg"
            alt="Hand-drawn illustration of teachers, students, engineers, and community workers"
            width={2048}
            height={768}
            sizes="100vw"
            className="w-full h-auto block"
            priority
          />
        </div>

        {/* Floating Centered Title */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none pb-16 sm:pb-28 lg:pb-36 -translate-y-2 sm:-translate-y-4">
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight text-[#e08a1e] drop-shadow-[0_2px_10px_rgba(255,255,255,0.85)]">
            Our Team
          </h2>
        </div>
      </div>

      {/* Team Member Slots Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2.5 sm:mt-3.5 lg:mt-4">
        {/* Top Row: 5 Members */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-8 gap-x-4 sm:gap-x-6 lg:gap-x-7 mb-10 sm:mb-14 lg:mb-16">
          {TOP_ROW_MEMBERS.map((member) => (
            <TeamMemberCard
              key={member.id}
              member={member}
              onSelect={setSelectedMember}
            />
          ))}
        </div>

        {/* Bottom Row: Centered */}
        <div className="flex flex-wrap justify-center gap-y-8 gap-x-4 sm:gap-x-6 lg:gap-x-7">
          {BOTTOM_ROW_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="w-[calc(50%-0.6rem)] sm:w-[calc(33.333%-1rem)] lg:w-[calc(20%-1.4rem)] max-w-[240px]"
            >
              <TeamMemberCard
                member={member}
                onSelect={setSelectedMember}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Team Member Detail Modal */}
      <TeamModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </section>
  );
}
