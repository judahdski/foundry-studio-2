import { useState } from "react";
import { ArrowDown, ArrowRight, Layers, Cpu, GitCommit } from "lucide-react";

interface HeroOrientProps {
    onExplore: () => void;
    onOpenContact: () => void;
}

export default function HeroOrient({
    onExplore,
    onOpenContact,
}: HeroOrientProps) {
    const [activeVisualMode, setActiveVisualMode] = useState<
        "raw" | "formation" | "structured"
    >("structured");

    return (
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 border-b border-[#2B3038] overflow-hidden">
            {/* Subtle architectural background grid */}
            <div className="absolute inset-0 system-grid opacity-75 pointer-events-none" />

            {/* Subtle corner registration marks (Engineered grammar) */}
            <div className="absolute top-24 left-6 text-[10px] font-mono text-[#555A64] select-none hidden lg:block">
                + SYS_REF: 01_ORIENT // FOUNDRY_CORE
            </div>
            <div className="absolute top-24 right-6 text-[10px] font-mono text-[#555A64] select-none hidden lg:block">
                COORD: [45.12N, 09.34W] // ACTIVE
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
                    {/* Main Statement & Narrative Column */}
                    <div className="lg:col-span-7 flex flex-col justify-between">
                        <div>
                            {/* Studio category tag */}
                            <div className="flex max-w-full items-start gap-2 px-2.5 py-1 bg-[#20242A] border border-[#2B3038] rounded-xs mb-6">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#3157D5]" />
                                <span className="min-w-0 break-words text-xs font-mono uppercase tracking-wider text-[#8E929A]">
                                    Problem-Solving Studio // Software As Medium
                                </span>
                            </div>

                            {/* Core Philosophy Headline */}
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F2F0EA] leading-[1.08] mb-6">
                                Raw Problem <br className="hidden sm:inline" />
                                <span className="text-[#8E929A] font-light">
                                    →
                                </span>{" "}
                                Useful System
                                <span className="text-[#3157D5]">.</span>
                            </h1>

                            {/* Concrete Studio Definition */}
                            <p className="text-lg sm:text-xl text-[#8E929A] leading-relaxed max-w-2xl font-normal mb-8">
                                Foundry transforms messy workflows, fragmented
                                operational information, and software friction
                                into reliable, structured digital systems.
                            </p>

                            <div className="p-4 bg-[#1B1E22] border-l-2 border-[#3157D5] border-y border-r border-[#24282F] mb-10 max-w-2xl">
                                <p className="text-sm text-[#DCD8CD] leading-relaxed">
                                    <span className="text-[#F2F0EA] font-semibold">
                                        We don't start by building. We start by
                                        understanding.
                                    </span>{" "}
                                    Software is our craft and medium, but our
                                    purpose is resolving real-world operational
                                    complexity.
                                </p>
                            </div>

                            {/* Action Triggers */}
                            <div className="flex flex-col items-stretch gap-3 pt-2 min-[480px]:flex-row min-[480px]:items-center min-[480px]:gap-4">
                                <button
                                    onClick={onExplore}
                                    className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#3157D5] hover:bg-[#2546B4] text-white text-sm font-semibold tracking-wide rounded-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#3157D5] cursor-pointer shadow-sm"
                                >
                                    <span>Explore what we do</span>
                                    <ArrowRight className="w-4 h-4" />
                                </button>

                                <button
                                    onClick={onOpenContact}
                                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#20242A] hover:bg-[#282D35] text-[#F2F0EA] border border-[#2B3038] hover:border-[#3B424D] text-sm font-medium rounded-sm transition-all focus:outline-none cursor-pointer"
                                >
                                    <span>Have a problem in mind?</span>
                                </button>
                            </div>
                        </div>

                        {/* Bottom metadata indicators */}
                        <div className="mt-14 pt-8 border-t border-[#24282F] grid grid-cols-1 min-[420px]:grid-cols-3 gap-5 min-[420px]:gap-4 text-xs font-mono text-[#8E929A]">
                            <div className="min-w-0 break-words">
                                <span className="block text-[#555A64] uppercase text-[10px]">
                                    Studio Mindset
                                </span>
                                <span className="text-[#F2F0EA] font-medium">
                                    Engineering + Design
                                </span>
                            </div>
                            <div className="min-w-0 break-words">
                                <span className="block text-[#555A64] uppercase text-[10px]">
                                    Primary Focus
                                </span>
                                <span className="text-[#F2F0EA] font-medium">
                                    Operational Clarity
                                </span>
                            </div>
                            <div className="min-w-0 break-words">
                                <span className="block text-[#555A64] uppercase text-[10px]">
                                    Collaboration
                                </span>
                                <span className="text-[#F2F0EA] font-medium">
                                    Direct & Hands-On
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Interactive Visual Graphic: The Signature Visual Grammar (Raw → Formation → Structured) */}
                    <div className="lg:col-span-5">
                        <div className="min-w-0 bg-[#1B1E22] border border-[#2B3038] rounded-sm p-4 sm:p-6 relative">
                            {/* Graphic Header with state switches */}
                            <div className="flex flex-col items-start gap-3 pb-4 mb-4 border-b border-[#24282F] min-[420px]:flex-row min-[420px]:items-center min-[420px]:justify-between min-[420px]:gap-2">
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-[#3157D5] rounded-xs" />
                                    <span className="text-xs font-mono uppercase tracking-wider text-[#F2F0EA]">
                                        Transformation Model
                                    </span>
                                </div>

                                {/* Visual state selector */}
                                <div className="flex max-w-full items-center bg-[#17191C] p-0.5 border border-[#2B3038] rounded-xs text-[11px] font-mono">
                                    <button
                                        onClick={() =>
                                            setActiveVisualMode("raw")
                                        }
                                        className={`px-2 py-1 rounded-xs transition-colors cursor-pointer ${
                                            activeVisualMode === "raw"
                                                ? "bg-[#2B3038] text-[#F2F0EA]"
                                                : "text-[#8E929A] hover:text-[#F2F0EA]"
                                        }`}
                                    >
                                        Raw
                                    </button>
                                    <button
                                        onClick={() =>
                                            setActiveVisualMode("formation")
                                        }
                                        className={`px-2 py-1 rounded-xs transition-colors cursor-pointer ${
                                            activeVisualMode === "formation"
                                                ? "bg-[#2B3038] text-[#F2F0EA]"
                                                : "text-[#8E929A] hover:text-[#F2F0EA]"
                                        }`}
                                    >
                                        Formation
                                    </button>
                                    <button
                                        onClick={() =>
                                            setActiveVisualMode("structured")
                                        }
                                        className={`px-2 py-1 rounded-xs transition-colors cursor-pointer ${
                                            activeVisualMode === "structured"
                                                ? "bg-[#3157D5] text-white"
                                                : "text-[#8E929A] hover:text-[#F2F0EA]"
                                        }`}
                                    >
                                        System
                                    </button>
                                </div>
                            </div>

                            {/* Transformation Visual Canvas */}
                            <div className="min-h-[300px] min-w-0 flex flex-col justify-center relative p-3 sm:p-4 bg-[#17191C] border border-[#24282F] rounded-xs overflow-hidden">
                                {activeVisualMode === "raw" && (
                                    <div className="space-y-3 animate-fadeIn">
                                        <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-1 text-[11px] font-mono text-[#8E929A] mb-2 pb-1 border-b border-[#24282F]">
                                            <span className="min-w-0 text-amber-400/90 font-medium flex items-center gap-1.5">
                                                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                                                STATE: RAW PROBLEM //
                                                UNSTRUCTURED
                                            </span>
                                            <span className="break-words">
                                                5 Disconnected Sources
                                            </span>
                                        </div>

                                        {/* Disconnected chaotic nodes */}
                                        <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                                            <div className="p-2.5 bg-[#20242A] border border-dashed border-red-500/30 text-[#8E929A] rotate-[-1deg]">
                                                <span className="text-[10px] text-red-400 block mb-0.5">
                                                    SPREADSHEET V4_FINAL.xlsx
                                                </span>
                                                Row 849 overwritten by order
                                                dispatch
                                            </div>
                                            <div className="p-2.5 bg-[#20242A] border border-dashed border-amber-500/30 text-[#8E929A] translate-x-1 translate-y-1">
                                                <span className="text-[10px] text-amber-400 block mb-0.5">
                                                    WHATSAPP CHAT GROUP
                                                </span>
                                                "Driver John delivered to unit
                                                4B (cash)"
                                            </div>
                                        </div>
                                        <div className="p-2.5 bg-[#20242A] border border-dashed border-red-500/30 text-xs font-mono text-[#8E929A] rotate-[0.5deg]">
                                            <span className="text-[10px] text-red-400 block mb-0.5">
                                                ACCOUNTING EMAIL THREAD
                                            </span>
                                            Invoice #402 missing matching
                                            packing slip
                                        </div>
                                        <div className="p-2 bg-[#1B1E22] border border-[#24282F] text-[11px] text-[#8E929A] font-mono">
                                            <span className="text-amber-400">
                                                Friction:
                                            </span>{" "}
                                            3 people manually re-entering
                                            duplicate data across 3 separate
                                            windows.
                                        </div>
                                    </div>
                                )}

                                {activeVisualMode === "formation" && (
                                    <div className="space-y-3 animate-fadeIn">
                                        <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-1 text-[11px] font-mono text-[#8E929A] mb-2 pb-1 border-b border-[#24282F]">
                                            <span className="min-w-0 text-[#3157D5] font-medium flex items-center gap-1.5">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#3157D5] animate-ping" />
                                                STATE: FORMATION // RELATIONAL
                                                MODELING
                                            </span>
                                            <span className="break-words">
                                                Mapping Dependencies
                                            </span>
                                        </div>

                                        {/* Aligned formation blocks */}
                                        <div className="space-y-2 text-xs font-mono">
                                            <div className="p-2 bg-[#20242A] border border-[#3157D5]/50 flex items-center justify-between">
                                                <span className="text-[#F2F0EA]">
                                                    Order Entity [UUID]
                                                </span>
                                                <span className="text-[10px] text-[#3157D5]">
                                                    Normalized
                                                </span>
                                            </div>
                                            <div className="flex items-center justify-center py-0.5 text-[#3157D5]">
                                                <GitCommit className="w-4 h-4" />
                                            </div>
                                            <div className="grid grid-cols-2 gap-2">
                                                <div className="p-2 bg-[#20242A] border border-[#2B3038] text-[11px]">
                                                    <span className="text-[#8E929A] block text-[10px]">
                                                        STATE MACHINE
                                                    </span>
                                                    Draft → Dispatched →
                                                    Delivered
                                                </div>
                                                <div className="p-2 bg-[#20242A] border border-[#2B3038] text-[11px]">
                                                    <span className="text-[#8E929A] block text-[10px]">
                                                        LEDGER
                                                    </span>
                                                    Single Source of Truth
                                                </div>
                                            </div>
                                            <div className="p-2 bg-[#1B1E22] border border-[#24282F] text-[11px] text-[#8E929A]">
                                                <span className="text-[#3157D5]">
                                                    Logic:
                                                </span>{" "}
                                                Connecting intake triggers
                                                directly to driver queues with
                                                automated audit records.
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeVisualMode === "structured" && (
                                    <div className="space-y-3 animate-fadeIn">
                                        <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-1 text-[11px] font-mono text-[#8E929A] mb-2 pb-1 border-b border-[#24282F]">
                                            <span className="min-w-0 text-emerald-400 font-medium flex items-center gap-1.5">
                                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                                STATE: USEFUL SYSTEM //
                                                OPERATIONAL
                                            </span>
                                            <span className="break-words">
                                                Zero Manual Duplication
                                            </span>
                                        </div>

                                        {/* Useful structured system view */}
                                        <div className="bg-[#20242A] border border-[#2B3038] p-3 rounded-xs space-y-2">
                                            <div className="flex items-center justify-between border-b border-[#2B3038] pb-1.5 text-xs font-mono">
                                                <span className="text-[#F2F0EA] font-semibold flex items-center gap-1.5">
                                                    <Cpu className="w-3.5 h-3.5 text-[#3157D5]" />
                                                    Live Dispatch Console
                                                </span>
                                                <span className="text-[10px] text-emerald-400 bg-emerald-950/50 px-1.5 py-0.5 border border-emerald-800/40 rounded-xs">
                                                    Synced (14ms)
                                                </span>
                                            </div>
                                            <div className="grid grid-cols-3 gap-1.5 text-center text-[10px] font-mono pt-1">
                                                <div className="bg-[#17191C] p-1.5 border border-[#24282F] rounded-xs">
                                                    <span className="text-[#8E929A] block">
                                                        Queue
                                                    </span>
                                                    <span className="text-[#F2F0EA] font-bold">
                                                        24 Active
                                                    </span>
                                                </div>
                                                <div className="bg-[#17191C] p-1.5 border border-[#24282F] rounded-xs">
                                                    <span className="text-[#8E929A] block">
                                                        Transit
                                                    </span>
                                                    <span className="text-[#F2F0EA] font-bold">
                                                        8 Drivers
                                                    </span>
                                                </div>
                                                <div className="bg-[#17191C] p-1.5 border border-[#24282F] rounded-xs">
                                                    <span className="text-[#8E929A] block">
                                                        Completed
                                                    </span>
                                                    <span className="text-emerald-400 font-bold">
                                                        142 Today
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="text-[11px] font-mono text-[#8E929A] pt-1 flex items-center justify-between">
                                                <span>
                                                    Automated client
                                                    notification
                                                </span>
                                                <span className="text-[#3157D5]">
                                                    100% Handled
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Graphic descriptor footer */}
                            <div className="mt-4 pt-3 border-t border-[#24282F] flex items-center justify-between text-xs text-[#8E929A]">
                                <span className="font-mono text-[11px]">
                                    Philosophy in action
                                </span>
                                <button
                                    onClick={() => {
                                        if (activeVisualMode === "raw")
                                            setActiveVisualMode("formation");
                                        else if (
                                            activeVisualMode === "formation"
                                        )
                                            setActiveVisualMode("structured");
                                        else setActiveVisualMode("raw");
                                    }}
                                    className="text-xs text-[#3157D5] hover:text-[#4A6EE6] font-medium flex items-center gap-1 cursor-pointer"
                                >
                                    <span>Cycle Transformation</span>
                                    <ArrowRight className="w-3 h-3" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
