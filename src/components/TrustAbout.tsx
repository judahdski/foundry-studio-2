import founderPhoto from "../assets/img/asep.jpeg";

interface TrustAboutProps {
    onOpenContact: () => void;
}

const principles = [
    {
        number: "01",
        title: "Understand before building",
        description:
            "We don't rush into implementation before understanding the problem.",
    },
    {
        number: "02",
        title: "Keep things useful",
        description:
            "Software should make work clearer, easier, or more reliable.",
    },
    {
        number: "03",
        title: "Build for the long run",
        description:
            "A system shouldn't only work today. It should remain understandable and maintainable.",
    },
];

const collaborationPractices = [
    {
        title: "Working software over slide decks",
        description:
            "We demonstrate progress through clickable, interactive builds rather than speculative presentations.",
    },
    {
        title: "Structured async updates",
        description:
            "Concise written updates and demos keep the work visible without unnecessary meetings.",
    },
    {
        title: "Clear ownership",
        description:
            "You own the repository, data, architecture, and deployment assets. No unnecessary vendor lock-in.",
    },
];

export default function TrustAbout(_props: TrustAboutProps) {
    return (
        <section
            id="about"
            className="relative border-b border-[#2B3038] bg-[#17191C] py-24 md:py-32"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16 max-w-3xl md:mb-24">
                    <div className="mb-3 flex items-center gap-2">
                        <span className="text-xs font-mono uppercase tracking-widest text-[#3157D5]">
                            06 // TRUST
                        </span>
                        <span className="font-mono text-[#2B3038]">/</span>
                        <span className="text-xs font-mono uppercase tracking-widest text-[#8E929A]">
                            HOW WE WORK &amp; WHO&apos;S BEHIND IT
                        </span>
                    </div>

                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#F2F0EA] sm:text-4xl lg:text-5xl">
                        Who&apos;s behind the work?
                    </h2>

                    <p className="text-base leading-relaxed text-[#8E929A] sm:text-lg">
                        Foundry is an independent, focused studio. We
                        deliberately operate without unnecessary layers between
                        the client and the people doing the work.
                    </p>
                </div>
                
                {/* Studio DNA & Mental Model Block */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
                    {/* Studio Profile Manifesto */}
                    <div className="lg:col-span-7 bg-[#1B1E22] border border-[#2B3038] rounded-sm p-6 sm:p-8 flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-3 pb-4 mb-4 border-b border-[#24282F] text-xs font-mono text-[#8E929A]">
                                <span className="text-[#3157D5] font-semibold">
                                    STUDIO ARCHETYPE
                                </span>
                                <span>//</span>
                                <span>SMALL · FOCUSED · HANDS-ON</span>
                            </div>

                            <h3 className="text-xl sm:text-2xl font-bold text-[#F2F0EA] mb-4">
                                An engineering-minded studio with strong design
                                taste.
                            </h3>

                            <div className="space-y-4 text-sm text-[#8E929A] leading-relaxed">
                                <p>
                                    We are not a traditional design agency that
                                    happens to dabble in code, nor are we a
                                    development outsourcing shop trying to mimic
                                    a branding agency.
                                </p>
                                <p>
                                    We are hands-on systems thinkers and
                                    engineers. When you collaborate with
                                    Foundry, the people you talk to in the
                                    initial diagnostic conversation are the
                                    exact same individuals architecting the
                                    domain model, designing the interfaces, and
                                    writing the production code.
                                </p>
                                <p className="text-[#DCD8CD]">
                                    This direct model preserves signal,
                                    eliminates miscommunication, and ensures
                                    every line of software is engineered with
                                    deep empathy for the people using it every
                                    single day.
                                </p>
                            </div>
                        </div>

                        {/* Ratio Bar (Technical 65% + Refined 35% + Human undertone) */}
                        <div className="mt-8 pt-6 border-t border-[#24282F]">
                            <div className="flex items-center justify-between text-xs font-mono text-[#8E929A] mb-2">
                                <span>Visual & Verbal Personality</span>
                                <span className="text-[#F2F0EA]">
                                    Technical 65% + Refined 35%
                                </span>
                            </div>
                            <div className="h-2 w-full bg-[#141619] rounded-xs overflow-hidden flex border border-[#24282F]">
                                <div
                                    className="bg-[#3157D5] h-full"
                                    style={{ width: "65%" }}
                                    title="Technical 65%"
                                />
                                <div
                                    className="bg-[#F2F0EA] h-full"
                                    style={{ width: "35%" }}
                                    title="Refined 35%"
                                />
                            </div>
                            <div className="flex justify-between text-[11px] font-mono text-[#555A64] mt-1.5">
                                <span>Systems, Modeling & Engineering</span>
                                <span>Editorial Typography & Restraint</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-[#2B3038] pt-8">
                    <div className="mb-8 max-w-2xl">
                        <p className="mb-2 text-xs font-mono uppercase tracking-widest text-[#3157D5]">
                            01 // HOW WE THINK
                        </p>
                        <h3 className="text-2xl font-bold tracking-tight text-[#F2F0EA] sm:text-3xl">
                            Principles behind the practice.
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 border-y border-[#24282F] md:grid-cols-3 md:divide-x md:divide-[#24282F]">
                        {principles.map((principle) => (
                            <article
                                key={principle.number}
                                className="border-b border-[#24282F] py-6 md:border-b-0 md:px-6 md:first:pl-0 md:last:pr-0"
                            >
                                <div className="mb-5 flex items-center justify-between">
                                    <span className="text-xs font-mono font-bold text-[#3157D5]">
                                        {principle.number}
                                    </span>
                                    <span className="h-px w-8 bg-[#3157D5]" />
                                </div>
                                <h4 className="mb-3 text-base font-semibold text-[#F2F0EA]">
                                    {principle.title}
                                </h4>
                                <p className="text-sm leading-relaxed text-[#8E929A]">
                                    {principle.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>

                <div className="mt-20 border-t border-[#2B3038] pt-8 md:mt-24">
                    <div className="mb-8 max-w-2xl">
                        <p className="mb-2 text-xs font-mono uppercase tracking-widest text-[#3157D5]">
                            02 // HOW WE COLLABORATE
                        </p>
                        <h3 className="text-2xl font-bold tracking-tight text-[#F2F0EA] sm:text-3xl">
                            Predictable, calm, and low-friction.
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 border-y border-[#24282F] md:grid-cols-3 md:divide-x md:divide-[#24282F]">
                        {collaborationPractices.map((practice, index) => (
                            <article
                                key={practice.title}
                                className="border-b border-[#24282F] py-6 md:border-b-0 md:px-6 md:first:pl-0 md:last:pr-0"
                            >
                                <p className="mb-5 text-xs font-mono font-bold text-[#3157D5]">
                                    0{index + 1}
                                </p>
                                <h4 className="mb-3 text-base font-semibold text-[#F2F0EA]">
                                    {practice.title}
                                </h4>
                                <p className="text-sm leading-relaxed text-[#8E929A]">
                                    {practice.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>

                <div className="mt-20 border-t border-[#2B3038] pt-8 md:mt-24">
                    <div className="mb-8 max-w-2xl">
                        <p className="mb-2 text-xs font-mono uppercase tracking-widest text-[#3157D5]">
                            03 // THE PERSON BEHIND THE WORK
                        </p>
                        <h3 className="text-2xl font-bold tracking-tight text-[#F2F0EA] sm:text-3xl">
                            There is a person behind Foundry.
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
                        <div className="relative lg:col-span-3">
                            <div className="absolute -left-3 top-5 hidden h-px w-12 bg-[#3157D5] sm:block" />
                            <div className="w-28 overflow-hidden border border-[#2B3038] bg-[#1B1E22] p-1.5 sm:w-36 lg:w-44">
                                <img
                                    src={founderPhoto}
                                    alt="Judah, founder of Foundry Studio"
                                    className="aspect-square w-full object-cover object-top grayscale-[15%]"
                                />
                            </div>
                            <div className="mt-3 text-[10px] font-mono uppercase tracking-widest text-[#555A64]">
                                FOUNDRY / 06
                            </div>
                        </div>

                        <div className="min-w-0 lg:col-span-9 lg:pt-2">
                            <h4 className="text-3xl font-bold tracking-tight text-[#F2F0EA] sm:text-4xl">
                                JUDAH
                            </h4>
                            <p className="mt-2 text-sm font-mono text-[#8E929A]">
                                Founder · Full-stack Engineer
                            </p>
                            <p className="mt-8 max-w-xl text-xl leading-relaxed text-[#DCD8CD] sm:text-2xl">
                                Building Foundry around a simple idea: turning
                                raw problems into useful systems.
                            </p>
                            <div className="mt-8 max-w-md border-t border-[#2B3038] pt-6">
                                <p className="mb-3 text-xs font-mono uppercase tracking-widest text-[#3157D5]">
                                    WHY FOUNDRY?
                                </p>
                                <p className="text-sm leading-relaxed text-[#8E929A]">
                                    I enjoy taking messy, real-world problems
                                    and turning them into something structured,
                                    useful, and easier to work with.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
