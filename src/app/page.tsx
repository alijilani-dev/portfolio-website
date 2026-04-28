"use client";

import { useState } from "react";
import { Terminal, Cpu, CheckCircle, Mail, Bot, Plug, Code, Network, ArrowUpRight } from "lucide-react";

export default function Home() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    organisation: "",
    businessEmail: "",
    phone: "",
    country: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          organisation: "",
          businessEmail: "",
          phone: "",
          country: "",
          message: "",
        });
        return;
      }
    } catch (error) {
      console.error("API call failed:", error);
    }

    // Fallback: open user's email client with pre-filled data
    const subject = `New Contact Form Submission from ${formData.firstName} ${formData.lastName}`;
    const body = `First Name: ${formData.firstName}%0D%0A` +
      `Last Name: ${formData.lastName}%0D%0A` +
      `Organisation: ${formData.organisation || 'Not provided'}%0D%0A` +
      `Business Email: ${formData.businessEmail}%0D%0A` +
      `Phone: ${formData.phone || 'Not provided'}%0D%0A` +
      `Country: ${formData.country || 'Not provided'}%0D%0A` +
      `%0D%0AMessage:%0D%0A${encodeURIComponent(formData.message)}`;
    
    window.open(`mailto:aajilani.job@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`, '_blank');
    setSubmitStatus("success");
    setFormData({
      firstName: "",
      lastName: "",
      organisation: "",
      businessEmail: "",
      phone: "",
      country: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <div className="relative flex h-auto w-full flex-col bg-background dark group/design-root z-50">
      {/* Header */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-surface-variant px-10 py-3 bg-surface-container/80 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-4 text-on-surface">
          <div className="size-6 text-primary-container">
            <Terminal className="w-6 h-6" fill="currentColor" />
          </div>
          <h2 className="text-on-surface text-sm font-semibold leading-tight tracking-[-0.015em] uppercase">Ali Jilani</h2>
        </div>
        <div className="flex flex-1 justify-end gap-8">
          <nav className="flex items-center gap-9">
            <a className="text-on-surface hover:text-primary-container text-sm font-semibold tracking-[0.1em] transition-colors" href="#projects">Projects</a>
            <a className="text-on-surface hover:text-primary-container text-sm font-semibold tracking-[0.1em] transition-colors" href="#skills">AI & Skills</a>
            <a className="text-on-surface hover:text-primary-container text-sm font-semibold tracking-[0.1em] transition-colors" href="#certifications">Certifications</a>
            <a className="text-on-surface hover:text-primary-container text-sm font-semibold tracking-[0.1em] transition-colors" href="#contact">Contact Us</a>
          </nav>
          <a className="btn-primary-glow flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded h-10 px-6 bg-primary-container text-on-primary-container text-sm font-semibold tracking-[0.1em] transition-all" href="#contact">
            <span className="truncate">Contact Us</span>
          </a>
        </div>
      </header>

      <main className="w-full max-w-[1200px] mx-auto px-6 pb-[120px] flex flex-col gap-[120px] pt-8">
        {/* Hero Section */}
        <section className="relative rounded-xl overflow-hidden glass-panel min-h-[600px] flex items-center justify-center mt-8">
          <div className="absolute inset-0 z-0 bg-cover bg-center opacity-40" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCqBAdphHso0FTQWpSahjjotSLO8RWrpyGwuoKhDokR-v7IbPKi_h83O0qr5oEhVU22DbD_YGIw2L-xNiSjNL4nysFL4-OkbHwDb51ni__Zy82e_78-l5QLcwPyLQ5htVJz1A9m4oRG6dTFwSrqzoyf15Pem4oCI63GmpRY7wk1CiHhRxCFuoSpNsMNYGXuSj45h5loaQ10jRAEiUuIfTeQ6dF7Pc56rmRm-JWR1yUiY2pDUVB4MrIMPygbO71ttC7tbxv9kPhb_-w')", backgroundPosition: "center", backgroundSize: "cover"}}></div>
          <div className="relative z-10 flex flex-col items-center text-center max-w-[800px] px-8 py-16 glass-panel rounded-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary-container/30 bg-primary-container/10 mb-8">
              <span className="size-2 rounded-full bg-primary-container animate-pulse"></span>
              <span className="text-primary-container text-xs font-medium tracking-widest uppercase">Available for New Projects</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-on-surface mb-6 tracking-tight leading-[1.1]">
              Ali Jilani, PMP
            </h1>
            <h2 className="text-3xl md:text-4xl font-medium text-primary mb-6 leading-[1.3]">
              Project Manager & Agentic AI Developer
            </h2>
            <p className="text-lg text-secondary mb-10 max-w-[600px] leading-relaxed">
              Driving enterprise innovation with 18+ years of experience in project management and cutting-edge Agentic AI solutions. Architecting intelligent workflows that scale.
            </p>
            <div className="flex gap-4">
              <a className="btn-primary-glow flex items-center justify-center rounded h-12 px-8 bg-primary-container text-on-primary-container text-sm font-semibold tracking-[0.1em]" href="#contact">
                Contact Us
              </a>
              <a className="flex items-center justify-center rounded h-12 px-8 border border-outline hover:border-on-surface text-on-surface text-sm font-semibold tracking-[0.1em] transition-all" href="#projects">
                View Portfolio
              </a>
            </div>
          </div>
        </section>

        {/* Core Technologies Marquee */}
        <section className="flex flex-col gap-6 overflow-hidden py-4 -mt-16 mb-4">
          <h3 className="text-xs text-secondary text-center uppercase tracking-widest opacity-60 font-medium">Core Technologies</h3>
          <div className="relative w-full flex overflow-hidden">
            <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-background via-transparent to-background w-full"></div>
            <div className="animate-marquee flex items-center gap-16 px-8 w-max">
              <div className="flex items-center gap-16">
                <span className="text-3xl text-surface-variant font-bold hover:text-primary-container transition-colors cursor-default">Claude</span>
                <span className="text-3xl text-surface-variant font-bold hover:text-primary-container transition-colors cursor-default">OpenAI</span>
                <span className="text-3xl text-surface-variant font-bold hover:text-primary-container transition-colors cursor-default">OpenClaw</span>
                <span className="text-3xl text-surface-variant font-bold hover:text-primary-container transition-colors cursor-default">Lovable</span>
                <span className="text-3xl text-surface-variant font-bold hover:text-primary-container transition-colors cursor-default">n8n</span>
                <span className="text-3xl text-surface-variant font-bold hover:text-primary-container transition-colors cursor-default">Python</span>
                <span className="text-3xl text-surface-variant font-bold hover:text-primary-container transition-colors cursor-default">AWS</span>
                <span className="text-3xl text-surface-variant font-bold hover:text-primary-container transition-colors cursor-default">Docker</span>
                <span className="text-3xl text-surface-variant font-bold hover:text-primary-container transition-colors cursor-default">Kubernetes</span>
              </div>
              <div className="flex items-center gap-16">
                <span className="text-3xl text-surface-variant font-bold hover:text-primary-container transition-colors cursor-default">Claude</span>
                <span className="text-3xl text-surface-variant font-bold hover:text-primary-container transition-colors cursor-default">OpenAI</span>
                <span className="text-3xl text-surface-variant font-bold hover:text-primary-container transition-colors cursor-default">OpenClaw</span>
                <span className="text-3xl text-surface-variant font-bold hover:text-primary-container transition-colors cursor-default">Lovable</span>
                <span className="text-3xl text-surface-variant font-bold hover:text-primary-container transition-colors cursor-default">n8n</span>
                <span className="text-3xl text-surface-variant font-bold hover:text-primary-container transition-colors cursor-default">Python</span>
                <span className="text-3xl text-surface-variant font-bold hover:text-primary-container transition-colors cursor-default">AWS</span>
                <span className="text-3xl text-surface-variant font-bold hover:text-primary-container transition-colors cursor-default">Docker</span>
                <span className="text-3xl text-surface-variant font-bold hover:text-primary-container transition-colors cursor-default">Kubernetes</span>
              </div>
            </div>
          </div>
        </section>

        <div className="gradient-divider"></div>

        {/* Projects Section */}
        <section className="flex flex-col gap-8" id="projects">
          <div className="flex flex-col gap-2">
            <h2 className="text-4xl md:text-5xl font-semibold text-on-surface tracking-tight leading-[1.2]">Featured Projects</h2>
            <p className="text-lg text-secondary leading-relaxed">Enterprise & Mobile Solutions delivering impactful digital transformations.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Project Card 1 */}
            <div className="glass-panel rounded-lg p-6 flex flex-col gap-4 group transition-all hover:-translate-y-1">
              <div className="w-full aspect-video bg-cover bg-center rounded overflow-hidden relative" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA1nYLn-zunjuTe-OSr3ATJ0wQ1f92gDs8i0rsncOnGDJkT8vaTK7enij068c3tq9U6Wc9tu0qITRxEQCC4Ss12aJdcmg3eBY9olzx42kpUXd73OUf2O4HG5EbOASeRdDz0zd0fepsoOmncZaSUHvRkxaTtZWNEN_1zBW1Ozuql9eB5hE0lqj2awLCQM5SIcXYSuqWH8VHN0yu94ujJKEcH_tAMasgF4vOCtPLA0WsILqzTK6Z6RtlpxFgAOViaLRj1L9ldvCURrHY')"}}>
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container to-transparent opacity-60"></div>
              </div>
              <div className="flex flex-col gap-2 flex-grow">
                <h3 className="text-2xl font-medium text-on-surface">Artificial Intelligence Projects</h3>
                <p className="text-base text-secondary leading-relaxed">Developed advanced AI-driven solutions including Sparrows (<a className="text-primary hover:underline" href="https://sparrows.co" target="_blank">https://sparrows.co</a>), a Python and PostgreSQL based social media platform with LinkedIn and Facebook capabilities, and Bridge 18 (<a className="text-primary hover:underline" href="https://bridge18.com" target="_blank">https://bridge18.com</a>), a comprehensive operations support system for the trucking industry.</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-2 py-1 rounded bg-surface-container-high text-xs font-medium text-secondary">Automation</span>
                <span className="px-2 py-1 rounded bg-surface-container-high text-xs font-medium text-secondary">Logistics</span>
              </div>
            </div>
            {/* Project Card 2 */}
            <div className="glass-panel rounded-lg p-6 flex flex-col gap-4 group transition-all hover:-translate-y-1">
              <div className="w-full aspect-video bg-cover bg-center rounded overflow-hidden relative" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAHtwnpzTnvLMLHuIsbWiyO_zRmNtkipxGxzTruPr8hTfhC4uvjHID4Hk4D-ZIwPL6LvosA9PsGkwfeFHqk819BTGvQgfx51CFsnsFfyvXCieu_VfxyDzjIwM-TzNsM_KzlwIYp230n6zRehoqmPz7EmiNjxFbNX1jk-V0jr8J-sfO795p78AGYvOkcLG9obAjyAF0ZEIaIa8kwBCeTDWkadJa0DdaQSB1lo4Mtgq5SelqIPFuDXrLPxhQGCiRw8fSw5DKDn_KgoCE')"}}>
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container to-transparent opacity-60"></div>
              </div>
              <div className="flex flex-col gap-2 flex-grow">
                <h3 className="text-2xl font-medium text-on-surface">Government Sector Projects</h3>
                <p className="text-base text-secondary leading-relaxed">Led large-scale digital transformations for the Roads and Transport Authority (RTA), Govt. of Dubai, including turnkey document management and eArchive systems. Managed the Technology Store Revamp for 73 Etisalat stores across the UAE.</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-2 py-1 rounded bg-surface-container-high text-xs font-medium text-secondary">Enterprise CRM</span>
                <span className="px-2 py-1 rounded bg-surface-container-high text-xs font-medium text-secondary">CX</span>
              </div>
            </div>
            {/* Project Card 3 */}
            <div className="glass-panel rounded-lg p-6 flex flex-col gap-4 group transition-all hover:-translate-y-1">
              <div className="w-full aspect-video bg-cover bg-center rounded overflow-hidden relative" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuADUC_B-pmy2Vu1A81eDhvBN9aZvbSq1gVdw_whqpDPVi7XvmbMUi2pNfTD33kCha2R3tKtxkNyLzDlQEJFr9kwHiA5ToQPSc5UOvl07w2oI-cqBjwsO_Pu2T0I7yDlMnj6qyZisElW3fpOmIy28bJp44l8wPAF96uopFFYy2l0l0mekn0J0UqdjH24hAA4hURmA9n-LlFS83Opub60MghMBnvLWbvhJU72EnE6fwNgHczInM0D00EuNV3HxlJt_2UlhRLaESiMCJY')"}}>
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container to-transparent opacity-60"></div>
              </div>
              <div className="flex flex-col gap-2 flex-grow">
                <h3 className="text-2xl font-medium text-on-surface">PTCL and Emirates Post Mobile Apps</h3>
                <p className="text-base text-secondary leading-relaxed">Directed the development of cross-platform mobile applications for PTCL (Touch) and Emirates Post, delivering high-performance solutions across Android, iOS, Windows Phone, and BlackBerry platforms.</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-2 py-1 rounded bg-surface-container-high text-xs font-medium text-secondary">Mobile Dev</span>
                <span className="px-2 py-1 rounded bg-surface-container-high text-xs font-medium text-secondary">Agile</span>
              </div>
            </div>
          </div>
        </section>

        <div className="gradient-divider"></div>

        {/* AI & Skills Section */}
        <section className="flex flex-col gap-8" id="skills">
          <div className="flex flex-col gap-2 mb-4">
            <h2 className="text-4xl md:text-5xl font-semibold text-on-surface flex items-center gap-3 tracking-tight leading-[1.2]">
              <Cpu className="text-primary-container w-10 h-10" />
              AI Architecture & Expertise
            </h2>
            <p className="text-lg text-secondary leading-relaxed">Specialized in autonomous systems and enterprise technical skills.</p>
          </div>
          {/* AI Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <a className="glass-panel ai-glow rounded-lg p-6 flex flex-col gap-3 transition-all group" href="https://github.com/alijilani-dev/Cloud-Native_AI" target="_blank">
              <div className="flex items-center justify-between text-primary">
                <Bot className="w-8 h-8" />
                <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h4 className="text-lg font-medium text-on-surface mt-2">Agentic AI</h4>
              <p className="text-base text-secondary text-sm leading-relaxed">Autonomous agent design & implementation.</p>
            </a>
            <a className="glass-panel ai-glow rounded-lg p-6 flex flex-col gap-3 transition-all group" href="https://github.com/alijilani-dev/OpenAI-Agents-SDK" target="_blank">
              <div className="flex items-center justify-between text-primary">
                <Plug className="w-8 h-8" />
                <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h4 className="text-lg font-medium text-on-surface mt-2">OpenAI Agents SDK</h4>
              <p className="text-base text-secondary text-sm leading-relaxed">Integration and prompt engineering.</p>
            </a>
            <a className="glass-panel ai-glow rounded-lg p-6 flex flex-col gap-3 transition-all group" href="https://github.com/alijilani-dev/python-ml" target="_blank">
              <div className="flex items-center justify-between text-primary">
                <Code className="w-8 h-8" />
                <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h4 className="text-lg font-medium text-on-surface mt-2">Python</h4>
              <p className="text-base text-secondary text-sm leading-relaxed">Core backend & ML scripting logic.</p>
            </a>
            <a className="glass-panel ai-glow rounded-lg p-6 flex flex-col gap-3 transition-all group" href="https://github.com/alijilani-dev/AI-Driven_Development" target="_blank">
              <div className="flex items-center justify-between text-primary">
                <Network className="w-8 h-8" />
                <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h4 className="text-lg font-medium text-on-surface mt-2">LLM Orchestration</h4>
              <p className="text-base text-secondary text-sm leading-relaxed">Managing complex model pipelines.</p>
            </a>
          </div>
          {/* Technical Skills (Non-AI) */}
          <div className="glass-panel rounded-lg p-8">
            <h3 className="text-2xl font-medium text-on-surface mb-6 border-b border-surface-variant pb-4">Core Competencies</h3>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded border border-outline/30 bg-surface text-sm font-semibold tracking-[0.1em] text-on-surface">PMP Methodology</span>
              <span className="px-4 py-2 rounded border border-outline/30 bg-surface text-sm font-semibold tracking-[0.1em] text-on-surface">Agile / Scrum</span>
              <span className="px-4 py-2 rounded border border-outline/30 bg-surface text-sm font-semibold tracking-[0.1em] text-on-surface">DevOps CI/CD</span>
              <span className="px-4 py-2 rounded border border-outline/30 bg-surface text-sm font-semibold tracking-[0.1em] text-on-surface">Enterprise Architecture</span>
              <span className="px-4 py-2 rounded border border-outline/30 bg-surface text-sm font-semibold tracking-[0.1em] text-on-surface">ECM / CRM Integration</span>
              <span className="px-4 py-2 rounded border border-outline/30 bg-surface text-sm font-semibold tracking-[0.1em] text-on-surface">Cloud Infrastructure</span>
              <span className="px-4 py-2 rounded border border-outline/30 bg-surface text-sm font-semibold tracking-[0.1em] text-on-surface">Stakeholder Management</span>
            </div>
          </div>
        </section>

        <div className="gradient-divider"></div>

        {/* Certifications Section */}
        <section className="flex flex-col gap-8" id="certifications">
          <div className="flex flex-col gap-2 mb-4">
            <h2 className="text-4xl md:text-5xl font-semibold text-on-surface flex items-center gap-3 tracking-tight leading-[1.2]">
              <Verified className="text-primary-container w-10 h-10" />
              Licenses & Certifications
            </h2>
            <p className="text-lg text-secondary leading-relaxed">Professional credentials and global technology certifications.</p>
          </div>
          <div className="flex flex-col gap-6 overflow-hidden py-4 mb-4">
            <div className="relative w-full flex overflow-hidden">
              <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-background via-transparent to-background w-full"></div>
              <div className="animate-marquee flex items-center gap-16 px-8 w-max">
                <div className="flex items-center gap-16">
                  <span className="text-3xl text-surface-variant font-bold hover:text-primary-container transition-colors cursor-default">PMP</span>
                  <span className="text-3xl text-surface-variant font-bold hover:text-primary-container transition-colors cursor-default">PMI-ACP</span>
                  <span className="text-3xl text-surface-variant font-bold hover:text-primary-container transition-colors cursor-default">CBAP</span>
                  <span className="text-3xl text-surface-variant font-bold hover:text-primary-container transition-colors cursor-default">ITIL</span>
                  <span className="text-3xl text-surface-variant font-bold hover:text-primary-container transition-colors cursor-default">AWS</span>
                  <span className="text-3xl text-surface-variant font-bold hover:text-primary-container transition-colors cursor-default">KOFAX</span>
                  <span className="text-3xl text-surface-variant font-bold hover:text-primary-container transition-colors cursor-default">IBM</span>
                </div>
                <div className="flex items-center gap-16">
                  <span className="text-3xl text-surface-variant font-bold hover:text-primary-container transition-colors cursor-default">PMP</span>
                  <span className="text-3xl text-surface-variant font-bold hover:text-primary-container transition-colors cursor-default">PMI-ACP</span>
                  <span className="text-3xl text-surface-variant font-bold hover:text-primary-container transition-colors cursor-default">CBAP</span>
                  <span className="text-3xl text-surface-variant font-bold hover:text-primary-container transition-colors cursor-default">ITIL</span>
                  <span className="text-3xl text-surface-variant font-bold hover:text-primary-container transition-colors cursor-default">AWS</span>
                  <span className="text-3xl text-surface-variant font-bold hover:text-primary-container transition-colors cursor-default">KOFAX</span>
                  <span className="text-3xl text-surface-variant font-bold hover:text-primary-container transition-colors cursor-default">IBM</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="gradient-divider"></div>

        {/* Contact Us Section */}
        <section className="flex flex-col gap-8" id="contact">
          <div className="flex flex-col gap-2 mb-4 text-center items-center">
            <h2 className="text-4xl md:text-5xl font-semibold text-on-surface flex items-center justify-center gap-3 tracking-tight leading-[1.2]">
              <Mail className="text-primary-container w-10 h-10" />
              Contact Us
            </h2>
            <p className="text-lg text-secondary leading-relaxed">Connect with us to discuss AI solutions tailored for your enterprise.</p>
          </div>
          <div className="glass-panel ai-glow rounded-xl p-8 md:p-12 max-w-4xl w-full mx-auto">
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold tracking-[0.1em] text-on-surface" htmlFor="firstName">First Name</label>
                  <input className="w-full bg-surface-container border border-outline/30 rounded px-4 py-3 text-base text-on-surface focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors outline-none placeholder:text-secondary/50" id="firstName" placeholder="Enter first name" type="text" value={formData.firstName} onChange={handleChange} required/>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold tracking-[0.1em] text-on-surface" htmlFor="lastName">Last Name</label>
                  <input className="w-full bg-surface-container border border-outline/30 rounded px-4 py-3 text-base text-on-surface focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors outline-none placeholder:text-secondary/50" id="lastName" placeholder="Enter last name" type="text" value={formData.lastName} onChange={handleChange} required/>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold tracking-[0.1em] text-on-surface" htmlFor="organisation">Organisation</label>
                  <input className="w-full bg-surface-container border border-outline/30 rounded px-4 py-3 text-base text-on-surface focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors outline-none placeholder:text-secondary/50" id="organisation" placeholder="Company name" type="text" value={formData.organisation} onChange={handleChange}/>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold tracking-[0.1em] text-on-surface" htmlFor="businessEmail">Business Email</label>
                  <input className="w-full bg-surface-container border border-outline/30 rounded px-4 py-3 text-base text-on-surface focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors outline-none placeholder:text-secondary/50" id="businessEmail" placeholder="work@company.com" type="email" value={formData.businessEmail} onChange={handleChange} required/>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold tracking-[0.1em] text-on-surface" htmlFor="phone">Phone</label>
                  <input className="w-full bg-surface-container border border-outline/30 rounded px-4 py-3 text-base text-on-surface focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors outline-none placeholder:text-secondary/50" id="phone" placeholder="+1 (555) 000-0000" type="tel" value={formData.phone} onChange={handleChange}/>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold tracking-[0.1em] text-on-surface" htmlFor="country">Country</label>
                  <select className="w-full bg-surface-container border border-outline/30 rounded px-4 py-3 text-base text-on-surface focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors outline-none appearance-none" id="country" value={formData.country} onChange={handleChange}>
                    <option value="">Select your country</option>
                    <option value="US">United States</option>
                    <option value="UK">United Kingdom</option>
                    <option value="CA">Canada</option>
                    <option value="AU">Australia</option>
                    <option value="AE">United Arab Emirates</option>
                    <option value="PK">Pakistan</option>
                    <option value="OTHER">Other</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold tracking-[0.1em] text-on-surface" htmlFor="message">Message</label>
                <textarea className="w-full bg-surface-container border border-outline/30 rounded px-4 py-3 text-base text-on-surface focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors outline-none placeholder:text-secondary/50 resize-y" id="message" placeholder="How can we help you?" rows={5} value={formData.message} onChange={handleChange} required></textarea>
              </div>
              {submitStatus === "success" && (
                <div className="text-green-400 text-center text-sm font-semibold">
                  Thank you! Please send the email from your mail client to complete the submission.
                </div>
              )}
              <div className="flex justify-center md:justify-end mt-4">
                <button className="btn-primary-glow flex items-center justify-center rounded h-12 px-10 bg-primary-container text-on-primary-container text-sm font-semibold tracking-[0.1em] transition-all w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Submit Request"}
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-surface-variant py-8 bg-surface-container/20">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-base text-secondary">© 2024 Ali Jilani. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a className="text-base text-secondary hover:text-primary-container transition-colors" href="#">LinkedIn</a>
            <a className="text-base text-secondary hover:text-primary-container transition-colors" href="#">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
