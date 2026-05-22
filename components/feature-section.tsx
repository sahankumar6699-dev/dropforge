import { Zap, Shield, Globe } from "lucide-react";
import { SectionHeading } from "./section-heading";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Client-side processing means instant results without server delays"
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your files never leave your device. All processing happens locally"
  },
  {
    icon: Globe,
    title: "No Sign-Up",
    description: "Start using DropForge immediately. No accounts or registration needed"
  }
];

export function FeatureSection() {
  return (
    <section className="border-t border-slate-700/50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Why Choose DropForge"
          subtitle="Experience the power of local file processing"
        />
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="glass rounded-lg p-6 text-center transition-transform duration-300 hover:scale-105"
              >
                <Icon className="mx-auto mb-4 h-12 w-12 text-cyan-400" />
                <h3 className="text-lg font-bold text-white">{feature.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
