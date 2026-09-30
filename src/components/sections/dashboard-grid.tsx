import React from 'react';
import { BarChart3, TrendingUp, Cpu, Gauge, Zap, Check, Shield } from 'lucide-react';
import { Section, Container } from '../layout/Section';
import { Heading } from '../ui/Heading';
import { Pill } from '../ui/Pill';

interface DashboardGridProps {
  badge?: string;
  title?: string;
  subtitle?: string;
}

const BENCHMARKS = [
  { metric: 'Hook Tension / Scroll-Stop Ratio', neoforge: '98.2%', genericLlm: '31.4%', delta: '+212%' },
  { metric: 'Conversational Filler Removal', neoforge: '100%', genericLlm: '24.0%', delta: '+316%' },
  { metric: 'Platform Structural Adherence', neoforge: '100%', genericLlm: '48.5%', delta: '+106%' },
  { metric: 'Drafting Iteration Cycles Required', neoforge: '1 pass', genericLlm: '6-8 passes', delta: '85% faster' },
  { metric: 'Audience Terminology Precision', neoforge: '99.0%', genericLlm: '54.2%', delta: '+82%' },
];

export const DashboardGridSection: React.FC<DashboardGridProps> = ({
  badge = 'TELEMETRY BENCHMARKS',
  title = 'SIGNAL-TO-NOISE BENCHMARKS',
  subtitle = 'Measurable content density and hook velocity metrics',
}) => {
  return (
    <Section id="telemetry" variant="paper-2" className="py-20">
      <Container>
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Pill variant="accent">
              <Gauge size={14} className="stroke-[3]" />
              {badge}
            </Pill>
            <Pill variant="ink">EMPIRICAL TELEMETRY</Pill>
          </div>
          <Heading as="h2" size="xl" className="mb-4">
            {title}
          </Heading>
          <p className="font-mono text-sm sm:text-base text-muted font-bold uppercase tracking-wider">
            {subtitle}
          </p>
        </div>

        {/* 3 Metric Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-paper border-4 border-ink p-6 shadow-[6px_6px_0px_0px_var(--ink)]">
            <div className="flex items-center justify-between pb-3 mb-3 border-b-2 border-ink">
              <span className="font-mono text-xs font-black uppercase text-muted">
                SIGNAL DENSITY
              </span>
              <Pill variant="accent">BENCHMARK</Pill>
            </div>
            <div className="font-display font-black text-5xl text-ink mb-1">
              98.4%
            </div>
            <p className="font-mono text-xs text-muted font-semibold">
              Zero conversational pleasantries, zero generic preamble.
            </p>
            <div className="w-full h-3 bg-paper-2 border-2 border-ink mt-4 overflow-hidden">
              <div className="h-full bg-accent w-[98%]" />
            </div>
          </div>

          <div className="bg-paper border-4 border-ink p-6 shadow-[6px_6px_0px_0px_var(--ink)]">
            <div className="flex items-center justify-between pb-3 mb-3 border-b-2 border-ink">
              <span className="font-mono text-xs font-black uppercase text-muted">
                HOOK VELOCITY
              </span>
              <Pill variant="default">4.9X</Pill>
            </div>
            <div className="font-display font-black text-5xl text-ink mb-1">
              4.9x
            </div>
            <p className="font-mono text-xs text-muted font-semibold">
              Higher tension opening lines vs standard conversational answers.
            </p>
            <div className="w-full h-3 bg-paper-2 border-2 border-ink mt-4 overflow-hidden">
              <div className="h-full bg-[#10B981] w-[88%]" />
            </div>
          </div>

          <div className="bg-paper border-4 border-ink p-6 shadow-[6px_6px_0px_0px_var(--ink)]">
            <div className="flex items-center justify-between pb-3 mb-3 border-b-2 border-ink">
              <span className="font-mono text-xs font-black uppercase text-muted">
                TIME TO PUBLISH
              </span>
              <Pill variant="ink">&lt;60 SEC</Pill>
            </div>
            <div className="font-display font-black text-5xl text-ink mb-1">
              &lt;60s
            </div>
            <p className="font-mono text-xs text-muted font-semibold">
              From raw notes to 3 formatted channel assets on clipboard.
            </p>
            <div className="w-full h-3 bg-paper-2 border-2 border-ink mt-4 overflow-hidden">
              <div className="h-full bg-ink w-[95%]" />
            </div>
          </div>
        </div>

        {/* Telemetry Comparison Table */}
        <div className="bg-paper border-4 border-ink shadow-[8px_8px_0px_0px_var(--ink)] overflow-x-auto">
          <div className="p-4 bg-ink text-paper font-mono text-xs font-black uppercase tracking-wider flex items-center justify-between">
            <span>BENCHMARK DATA: NEOFORGE ENGINE VS STANDARD CHATBOT PROMPTING</span>
            <span className="text-accent">EVAL_N=1,200 ASSETS</span>
          </div>

          <table className="w-full text-left font-mono text-xs border-collapse">
            <thead>
              <tr className="border-b-4 border-ink bg-paper-2">
                <th className="p-4 font-black uppercase text-ink">EVALUATION METRIC</th>
                <th className="p-4 font-black uppercase text-ink bg-accent/20 border-l-2 border-ink">
                  NEOFORGE ENGINE
                </th>
                <th className="p-4 font-black uppercase text-muted border-l-2 border-ink">
                  GENERIC CHATBOT WRAPPER
                </th>
                <th className="p-4 font-black uppercase text-ink border-l-2 border-ink">
                  DELTA
                </th>
              </tr>
            </thead>
            <tbody>
              {BENCHMARKS.map((row, i) => (
                <tr
                  key={row.metric}
                  className={`border-b-2 border-ink font-semibold hover:bg-paper-2 transition-colors ${
                    i % 2 === 0 ? 'bg-paper' : 'bg-paper-2/40'
                  }`}
                >
                  <td className="p-4 text-ink font-bold">{row.metric}</td>
                  <td className="p-4 text-ink font-black bg-accent/10 border-l-2 border-ink">
                    <span className="inline-flex items-center gap-1.5">
                      <Check size={14} className="text-[#10B981] stroke-[3]" />
                      {row.neoforge}
                    </span>
                  </td>
                  <td className="p-4 text-muted border-l-2 border-ink">{row.genericLlm}</td>
                  <td className="p-4 text-ink font-black border-l-2 border-ink">
                    <span className="px-2 py-0.5 bg-accent text-accent-ink border border-ink">
                      {row.delta}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </Section>
  );
};
