# Project Master Plan & Specification: MAHM One-Page Website

## 1. Executive Summary & Overview

### 1.1 Organization Background
* **Entity Name:** MAHM
* **Motto:** *"Mastery in Servitude"*
* **Origins & Heritage:** Founded in 1996 with a primary school established by Moulovi Abdul Hye (head teacher) and his son Ali Azam (engineer and Liberation War veteran). Formally established as a non-profit Trust in 1998.
* **Core Philosophy:** True excellence is defined by empowering the most marginalized. Focus on youth and women as primary architects of community transformation.

### 1.2 Website Objectives
* Serve as a public-facing, high-credibility, data-driven single-page landing site.
* Communicate MAHM's philosophy, 4 operational pillars, and historical roots.
* Showcase empirical evidence from a 150-household baseline assessment in Muksudpur Upazila.
* Provide total transparency regarding cost per intervention, return on investment (ROI), and risk mitigation.
* Drive conversions for donations, volunteer applications, and organizational partnerships.

### 1.3 Target Tech Stack
* **Framework:** Next.js (App Router)
* **Styling:** Tailwind CSS v4
* **Design Aesthetic:** Earthy, dignified, human-centered editorial style combining photography, hand-drawn vector illustrations, and precise data visualizations.

### 1.4 Official Brand Color Palette (from `docs/Color code.pdf`)
* **Primary Deep Forest Green (`#3f5a30`):**
  * *Usage:* Primary brand color, dark hero/section backgrounds (e.g., "Our Impact" dark banner), primary headers, footer background.
* **Vibrant Accent Amber / Orange (`#e08a1e`):**
  * *Usage:* Primary CTA buttons (e.g., "Donate" button in sticky navbar and cards), high-priority action badges, key highlights.
* **Warm Ivory / Parchment Base (`#fbf9f2`):**
  * *Usage:* Main page background, primary reading canvas, light section containers. Provides an organic, grounded, paper-like warmth.
* **Pale Sage / Neutral Tint (`#eef2e6`):**
  * *Usage:* Alternating section backgrounds (e.g., "How We Work / Our Principles"), card backdrops, subtle content grouping panels.
* **Warm Muted Gold / Sand (`#daba7f`):**
  * *Usage:* Section accent rules, badges, decorative borders, secondary metric highlights.

---

## 2. Page Architecture & Navigation

The website is architected as a continuous single-page scrolling experience with smooth-scrolling anchor navigation.

```
[Sticky Header: Logo + 7 Nav Anchors + "Donate" CTA]
  │
  ├── 01. Hero Banner
  ├── 02. Who We Are (Vision & Mission)
  ├── 03. Our Four Pillars (What We Do & Coalition Spotlight)
  ├── 04. Our Principles (How We Work)
  ├── 05. Our Story (Where It Began & Founding Values)
  ├── 06. Our Team (Leadership & Field Voices)
  ├── 07. Our Impact (Evidence & Baseline Assessment Data)
  ├── 08. Strategic Framework & Logic Model (Theory of Change)
  ├── 09. Proof of Concept (Pilot Programmes 1–4)
  ├── 10. Measurement & Strategic Prioritization (4 Data Tables)
  ├── 11. Get Involved (Donate, Volunteer, Partner CTAs)
  ├── 12. Latest News & Updates
  └── 13. Contact & Global Footer
```

---

## 3. Detailed Section-by-Section Specifications

### Section 0: Sticky Navigation Header
* **Anchor ID:** `#top` / Fixed Header
* **Elements:**
  * **Brand Mark:** MAHM logo mark and typography.
  * **Navigation Links:**
    1. About Us (`#about`)
    2. What We Do (`#pillars`)
    3. Team (`#team`)
    4. Impact (`#impact`)
    5. Get Involved (`#get-involved`)
    6. News (`#news`)
    7. Contact (`#contact`)
  * **Global CTA:** Primary action button: `Donate` (links to `#get-involved` or external gateway).

---

### Section 1: Hero Banner
* **Visual Presentation:** Full-bleed documentary photographic banner capturing rural Bangladeshi landscape and community members engaged in daily agricultural life.
* **Purpose:** Establish geographic context, human dignity, and environmental setting immediately on load.

---

### Section 2: Who We Are (Vision & Mission)
* **Anchor ID:** `#about`
* **Badge:** `WHO WE ARE`
* **Heading:** `Our Vision & Mission`
* **Key Copy:**
  * *Belief:* Every community already holds the strength to build its own future; MAHM's role is to help that strength take root.
  * *Mission:* Institutionalising community resilience and strengthening human capital so families withstand shocks rather than merely survive them.
  * *Vision:* Self-reliant, gender-equitable, future-ready communities with youth and women leading as primary architects of change.
* **Supporting Media:**
  * Contextual photograph with caption: *"Women leading a household planning session — the everyday reality behind the strategy."*
  * Illustrated panoramic banner illustrating village life, schooling, and collective growth.

---

### Section 3: Our Four Pillars (What We Do)
* **Anchor ID:** `#pillars`
* **Badge:** `OUR FOUR PILLARS`
* **Heading:** `What We Do`
* **Subheading:** *"Everything we build stands on four interconnected pillars — because lasting change rarely comes from just one direction."*
* **Core Pillar Cards (4-Column Layout):**
  1. **🌱 Inclusive Growth:** Opening fair pathways to economic participation; shaping stand-alone or integrated programs around community needs.
  2. **📚 Education Continuum:** From early primary school to lifelong learning; keeping classroom doors open so no child's education is halted by circumstance.
  3. **🤝 Women's Livelihood & Financial Empowerment:** Strengthening vocational skills, income avenues, and support networks to establish financial independence and curtail child/early marriage.
  4. **🌾 Sustainable Agriculture, Fisheries & Food Security:** Assisting farming and fishing households to produce and earn sustainably while stewarding local ecosystems.
* **Media Grid:** 4 photography tiles showing field activities corresponding to each pillar.
* **Spotlight Feature Card:**
  * **Badge:** `LOCAL-TO-GLOBAL COALITION · UNDER SUSTAINABLE AGRICULTURE`
  * **Title:** `Chemicals & Waste Management: Tackling Agricultural Plastic Pollution`
  * **Content:** Description of the circular, commercially viable plastic waste recovery system in Bangladesh combining farmer incentives with an AI-based logistics decision-support tool.

---

### Section 4: Our Principles (How We Work)
* **Anchor ID:** `#principles`
* **Badge:** `OUR PRINCIPLES`
* **Heading:** `How We Work`
* **Card Grid (4 Numbered Principles):**
  * `01 | Dignity First:` Treating participants as active decision-makers rather than passive beneficiaries; avoiding dependency traps.
  * `02 | Holistic & Systems-Based:` Recognizing poverty as multifaceted (education, livelihoods, health, environment interwoven).
  * `03 | Multi-Generational Stewardship:` Combining decades of institutional continuity with agile adaptation to climate and economic shifts.
  * `04 | Mastery in Servitude:` Our operational standard—excellence is meaningful only when it directly advances the most marginalized.
* **Divider:** Hand-drawn line-art scenic illustration.

---

### Section 5: Our Story (Where It Began)
* **Anchor ID:** `#story`
* **Badge:** `OUR STORY`
* **Heading:** `Where It Began`
* **Narrative Content:**
  * Chronicling Moulovi Abdul Hye and his son Ali Azam's founding insight that poverty and educational disruption are inseparably linked.
  * Timeline markers: 1996 (first community school) → 1998 (formalization of the Trust).
* **Callout Quote Box:**
  * *"Mastery in Servitude."*
  * *"The philosophy at the heart of everything we do: excellence is only meaningful when it advances the lives of the most marginalised."*

---

### Section 6: Our Team
* **Anchor ID:** `#team`
* **Header Art:** Illustrated typography banner reading `OUR TEAM`.
* **Team Cards Grid (8 Profile Slots - 2 Rows of 4):**
  * Profile Photo container
  * `[ Name ]`
  * `[ ROLE ]`
  * *Handoff Requirement:* Short personal quote per member (*"Why I do this work"*).

---

### Section 7: Our Impact (The Evidence Behind the Work)
* **Anchor ID:** `#impact`
* **Badge:** `THE EVIDENCE BEHIND THE WORK`
* **Heading:** `Our Impact`
* **Context:** Synthesized from a rigorous baseline assessment of 150 households across Muksudpur Upazila.
* **Data Visualization Modules:**

#### 1. Sector Risk Priority Matrix ("Where the Need is Greatest")
Comparative ranking of community vulnerabilities dictating resource allocation:
| Sector | Severity Tag | Assessment Vulnerability |
| :--- | :--- | :--- |
| Water Security | **Critical · Quality Crisis** | 78% |
| Digital Access & Assets | **High · Structural Barrier** | 58% (47.3% total lack of connectivity) |
| Income Security | **High · Precarity** | 56% |
| Savings & Financial Resilience | **High · Insolvency** | 56% |
| Sanitation | **High · Structural** | 55% |
| Healthcare | **High · Capital Erosion** | 53% |
| Housing & Structural Safety | **High · Climate Risk** | 51% |
| Food Security | **Monitor** | 49% |
| Education | **Core** | 35% |
| Income Diversification | **Core** | 27% |

#### 2. Deep Dive Comparative Stat Panels
* **The Quality-Over-Proximity Crisis:**
  * **93.3%** have a water source within 100 meters.
  * **88.7%** of those nearby sources are unsafe/arsenic-contaminated.
  * *Key takeaway:* Proximity masks deep public health danger; water is the foundational priority.
* **The Debt-Financed Survival Trap:**
  * **৳142,299** mean household debt.
  * **৳120,000** median annual income.
  * **৳22,299** net annual deficit per household; **82.7%** have zero savings.

#### 3. Compound Vulnerability ("Deprivation Is Multi-Layered")
Distribution visualization demonstrating that households face multiple intersecting crises:
* **16.7%:** 0–2 high-risk sectors *(Low compound vulnerability)*
* **50.6%:** 3–6 high-risk sectors *(Moderate–High compound vulnerability)*
* **32.7%:** 7+ high-risk sectors *(Severe–Extreme compound vulnerability)*

#### 4. The Virtuous Cycle (Empirical Return on Investment)
A 3-step metric progression card showing how preventative water security preserves income:
* **৳9,370:** One-time investment in water quality per household
* **3.7×:** Annual return on investment
* **৳34,739:** Annual household capital freed from chronic healthcare expenditures

---

### Section 8: Strategic Framework & Logic Model
* **Anchor ID:** `#strategy`
* **Subsection A: Logic Model ("How Change Happens")**
  * 4-Stage Sequential Flow:
    1. `1. Basic Needs:` Stabilise safe water, nutrition, and storm-resistant housing to plug capital drains.
    2. `2. Skills & Market Access:` Deliver market-driven vocational skills to break the 72.7% single-source income dependency.
    3. `3. Financial Inclusion:` Shift families from predatory high-interest debt to structured community savings.
    4. `4. Gender Empowerment:` Cultivate socio-economic autonomy and household decision-making power for women.
  * Guiding Quote: *"Targeted, multidimensionally poor women and households sustainably build resilience against future economic, social, and climatic shocks — transitioning from survival mode to graduation status."*
* **Subsection B: Strategic Objectives ("By 2031")**
  * **Card 1 (Economic Stability):** Eliminate 72.7% single-source income dependency and bridge the ৳22,299 debt deficit.
  * **Card 2 (Access to Basic Needs):** Eradicate arsenic exposure and eliminate ৳34,739 annual medical capital leakage.
  * **Card 3 (Future Prospects):** Preserve educational continuity and measurably reduce youth precarity and early marriage.

---

### Section 9: Proof of Concept (Our Pilot Programmes)
* **Anchor ID:** `#pilots`
* **Badge:** `PROOF OF CONCEPT`
* **Heading:** `Our Pilot Programmes`
* **Structured Pilot Cards:**
  * **Pilot 1: Education & Digital Literacy**
    * *Objective:* Stabilise the Education Continuum and bridge the digital divide.
    * *Vulnerability:* 25.2% irregular attendance; 47.3% total lack of connectivity.
    * *Activities:* Hardware IT assets, digital literacy training, fee barrier removal (৳16,247/child/year).
  * **Pilot 2: Sustainable Livelihood Graduation**
    * *Objective:* Institutionalise income diversification via demand-driven vocational pathways.
    * *Vulnerability:* 72.7% single-source dependency; 48.7% precarious day labour.
    * *Activities:* Livestock rearing, sewing/tailoring (specifically requested by 37% of survey respondents).
  * **Pilot 3: Water Security & Health Resilience**
    * *Objective:* Mitigate systemic capital erosion triggered by waterborne chronic diseases.
    * *Vulnerability:* 78% water risk; 44% chronic disease prevalence.
    * *Activities:* Safe water filtration infrastructure and community-based chronic disease clinics.
  * **Pilot 4: [Pending Name & Specification]**
    * Placeholder for 4th pilot program as indicated in project handoff notes.

---

### Section 10: Measurement & Strategic Planning (4 Data Tables)
* **Anchor ID:** `#data-tables`

#### Table 1: Key Performance Indicators ("Measuring What Matters")
| Category | Quantitative Indicator | Qualitative Indicator |
| :--- | :--- | :--- |
| **Resilience** | % reduction in household debt-to-income ratio | Increase in self-reported social belonging |
| **Education** | % increase in regular school attendance | Documented reduction in early marriage risk |
| **Health** | % decrease in annual medical expenditure | Improved self-reported physical well-being |
| **Agency** | % increase in women's control of household resources | Increase in self-reported autonomy / dignity |

#### Table 2: Priority Targeting ("Who We Prioritise - Dignity First Criteria")
| Priority Group | Data-Driven Justification |
| :--- | :--- |
| **Widowed / Female-Headed** | 13.3% of households — acute single-earner dependency and social isolation. |
| **The Debt-Insolvent** | Households with zero savings (82.7%) and debt exceeding annual income. |
| **Climate-Vulnerable** | 62% of households residing in non-storm-resistant structures. |
| **Medical Distress** | 44% household prevalence of heart disease, stroke, or respiratory illness. |
| **Large / Dependent Households** | Families with 4+ children or high elderly-dependency ratios. |
*Strategic Note:* Empowered families become models of resilience; graduated cohorts create community-wide ripple effects.

#### Table 3: Risk & Mitigation ("Planning For What Could Go Wrong")
| Identified Risk | Evidence | Mitigation Strategy |
| :--- | :--- | :--- |
| **Unsafe drinking water** | 88.7% of sources contaminated despite proximity. | Prioritise arsenic-free deep tubewells / filtration. |
| **Climate shocks** | 62% of housing stock is not storm-resistant. | Transition to climate-resilient semi-permanent housing. |
| **Systemic insolvency** | Mean debt (৳142k) exceeds median income (৳120k). | Institutionalise savings groups; graduation grants over micro-credit. |
| **Chronic disease burden** | 44% prevalence of heart disease, stroke, or respiratory illness. | Establish community-based health support. |

#### Table 4: Cost Breakdown ("Transparency - What It Costs to Change a Trajectory")
| Assessment Finding | Programmatic Response | Mean Cost (BDT) | Cost Type |
| :--- | :--- | :--- | :--- |
| **Water Security Risk** | Arsenic-free tubewells / filters | ৳9,370 | One-time |
| **Healthcare Distress** | Chronic disease support / clinics | ৳34,739 | Annual / recurrent |
| **Structural Housing Risk** | Storm-resistant repairs | ৳65,802 | One-time |
| **Digital Exclusion** | IT assets and connectivity | ৳46,169 | One-time |
| **Education Cost Burden** | Enrolment / attendance subsidies | ৳16,247 | Annual (per child) |
*Data Source:* MAHM baseline household assessment, 150 households, Muksudpur Upazila (Strategic Program Plan, Version 2).

---

### Section 11: Call to Action (Get Involved / Join Us)
* **Anchor ID:** `#get-involved`
* **Badge:** `JOIN US`
* **Heading:** `Get Involved`
* **Introductory Subtext:** *"Whether you give, volunteer, or simply share our story — every bit of support strengthens the communities we serve."*
* **3 Action Cards:**
  1. **💚 Donate:** Dedicated funding of costed interventions (from ৳9,370 filter to ৳16,247 schooling year). CTA: `Donate Now`.
  2. **🙋 Volunteer:** Field contributions in digital training, tutoring, and livelihood coaching. CTA: `Apply to Volunteer`.
  3. **🤝 Partner:** Coalition opportunities with local and international bodies. CTA: `Start a Conversation`.

---

### Section 12: Latest News & Updates
* **Anchor ID:** `#news`
* **Badge:** `LATEST`
* **Heading:** `News & Updates`
* **Card Grid (3 Placeholder Slots):**
  * Image Thumbnail
  * Date Tag (`[ DATE ]`)
  * Article Title (`[ Article Title ]`)
  * Brief Summary (`[ One-line summary of the story — pilot milestone, field update, or partnership ]`)
* **Footer Action:** Text link button: `View All News →`.

---

### Section 13: Contact & Global Footer
* **Anchor ID:** `#contact`
* **Badge:** `REACH US`
* **Heading:** `Contact`
* **Two-Column Layout:**
  * **Left Column (Direct Channels):**
    * 📍 Office Address: `[ Add office address ]`
    * 📞 Telephone: `[ Add phone number ]`
    * ✉️ Email Address: `[ Add email address ]`
    * 🕐 Operational Hours: `[ Add hours ]`
  * **Right Column (Inquiry Form):**
    * Inputs: Name, Email Address, Message Textarea
    * Submit Button: `Send Message`
* **Global Footer:**
  * MAHM Brand Logo
  * Quotation: *"Mastery in Servitude."*
  * Legal statement: `© 2026 MAHM. All rights reserved.`

---

## 4. Internal Handoff & Action Items

This section records pending deliverables and assets required from the stakeholder team before final production rollout:

### 4.1 Content Deliverables Needed
- [ ] **Acronym Expansion:** Official clarification on what "MAHM" stands for in full.
- [ ] **Team Profile Content:** 8 high-resolution staff headshots, official names, designations, and 1-line personal statements.
- [ ] **Pilot 4 Specifications:** Name, objective, baseline vulnerability stat, and key activities.
- [ ] **External Action Targets:**
  - Donation payment gateway URL / merchant details.
  - Volunteer application form link or intake workflow.
  - Partnership inquiry contact email.
- [ ] **News Content:** 2–3 real news articles, case studies, or field dispatches with photography and publish dates.
- [ ] **Contact Info:** Physical office address in Muksudpur / Dhaka, primary telephone number, support email, and working hours.

### 4.2 Technical Architecture Plan
1. **Modular Data Layer (`src/data/`):**
   - Extract all baseline metrics, sector risk matrices, pilot descriptions, and table rows into strongly-typed/clean JS constants.
2. **Component Breakdown (`src/components/`):**
   - Header & Navigation (`Navbar.js`)
   - Hero Section (`Hero.js`)
   - Narrative & Pillars (`AboutUs.js`, `FourPillars.js`, `Principles.js`, `OurStory.js`)
   - Team Showcase (`TeamSection.js`)
   - Data & Visualizations (`ImpactMetrics.js`, `RiskMatrixChart.js`, `VirtuousCycle.js`)
   - Framework & Pilots (`LogicModel.js`, `Pilots.js`)
   - Strategic Tables (`DataTableSection.js` for KPIs, Targeting, Risks, Costs)
   - Engagement & Footer (`GetInvolved.js`, `NewsSection.js`, `ContactForm.js`, `Footer.js`)
3. **Responsive Design & Accessibility:**
   - Touch-friendly mobile navigation and horizontally scrollable tables on small viewports.
   - Semantic HTML5 structure with accessible ARIA landmarks.
