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

export default function TrustAbout(_props: TrustAboutProps) {
    return (
        <section
            id="about"
            className="relative border-b border-[#2B3038] bg-[#17191C] py-24 md:py-32"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-14 max-w-3xl">
                    <div className="mb-3 flex items-center gap-2">
                        <span className="text-xs font-mono uppercase tracking-widest text-[#3157D5]">
                            06 // TRUST
                        </span>
                        <span className="font-mono text-[#2B3038]">/</span>
                        <span className="text-xs font-mono uppercase tracking-widest text-[#8E929A]">
                            THE PERSON BEHIND THE WORK
                        </span>
                    </div>

                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#F2F0EA] sm:text-4xl lg:text-5xl">
                        There is a person behind Foundry.
                    </h2>

                    <p className="text-base leading-relaxed text-[#8E929A] sm:text-lg">
                        Foundry is the studio. Judah is the person responsible
                        for the thinking and work behind it.
                    </p>
                </div>

                <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
                    <div className="relative lg:col-span-5">
                        <div className="absolute -left-3 top-5 hidden h-px w-12 bg-[#3157D5] sm:block" />
                        <div className="overflow-hidden border border-[#2B3038] bg-[#1B1E22] p-2">
                            <img
                                src={founderPhoto}
                                alt="Judah, founder of Foundry Studio"
                                className="aspect-[4/5] w-full object-cover object-top grayscale-[15%]"
                            />
                        </div>
                        <div className="mt-3 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-[#555A64]">
                            <span>FOUNDRY / 06</span>
                            <span>ACCOUNTABILITY</span>
                        </div>
                    </div>

                    <div className="min-w-0 lg:col-span-7 lg:pt-8">
                        <div className="border-b border-[#2B3038] pb-8">
                            <p className="mb-2 text-xs font-mono uppercase tracking-widest text-[#3157D5]">
                                The person behind the work
                            </p>
                            <h3 className="text-3xl font-bold tracking-tight text-[#F2F0EA] sm:text-4xl">
                                JUDAH
                            </h3>
                            <p className="mt-2 text-sm font-mono text-[#8E929A]">
                                Founder · Full-stack Engineer
                            </p>
                            <p className="mt-8 max-w-xl text-xl leading-relaxed text-[#DCD8CD] sm:text-2xl">
                                Building Foundry around a simple idea: turning
                                raw problems into useful systems.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-8 pt-8 sm:grid-cols-7 sm:gap-10">
                            <div className="sm:col-span-5">
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

                <div className="mt-20 border-t border-[#2B3038] pt-8 md:mt-24">
                    <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <p className="mb-2 text-xs font-mono uppercase tracking-widest text-[#3157D5]">
                                HOW WE WORK
                            </p>
                            <h3 className="text-2xl font-bold tracking-tight text-[#F2F0EA] sm:text-3xl">
                                Principles behind the practice.
                            </h3>
                        </div>
                        <span className="text-xs font-mono uppercase tracking-widest text-[#555A64]">
                            03 / FOUNDATIONAL RULES
                        </span>
                    </div>

                    <div className="grid grid-cols-1 gap-0 border-y border-[#24282F] md:grid-cols-3 md:divide-x md:divide-[#24282F]">
                        {principles.map((principle) => (
                            <article
                                key={principle.number}
                                className="border-b border-[#24282F] py-6 md:border-b-0 md:px-6 md:first:pl-0 md:last:pr-0"
                            >
                                <div className="mb-5 flex items-center justify-between">
                                    <span className="text-xs font-mono font-bold text-[#3157D5]">
                                        {principle.number}
                                    </span>
                                    <span className="h-1.5 w-1.5 rounded-full bg-[#3157D5]" />
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
            </div>
        </section>
    );
}
