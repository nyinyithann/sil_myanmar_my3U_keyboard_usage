"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function KeyboardLayout() {
  const [activeTab, setActiveTab] = useState<"normal" | "shift">("normal");

  return (
    <section id="keyboard" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            Section 1
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Myanmar3 လက်ကွက် ဇယား
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            မြန်မာလက်ကွက် ဇယားသည် ဝင်းလက်ကွက် နှင့် အများအားဖြင့် ဆင်တူပါသည်။
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab("normal")}
            className={cn(
              "px-6 py-3 rounded-lg font-medium transition-all",
              activeTab === "normal"
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border"
            )}
          >
            Shift မနှိပ်ထားပုံ
          </button>
          <button
            onClick={() => setActiveTab("shift")}
            className={cn(
              "px-6 py-3 rounded-lg font-medium transition-all",
              activeTab === "shift"
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border"
            )}
          >
            Shift နှိပ်ထားပုံ
          </button>
        </div>

        {/* Keyboard Image */}
        <div className="relative rounded-2xl overflow-hidden bg-card border border-border p-4 sm:p-8">
          <div className="relative aspect-[16/6] w-full">
            {activeTab === "normal" ? (
              <Image
                src="/images/keyboard-normal.png"
                alt="Myanmar keyboard layout without Shift"
                fill
                className="object-contain"
                priority
              />
            ) : (
              <Image
                src="/images/keyboard-shift.png"
                alt="Myanmar keyboard layout with Shift"
                fill
                className="object-contain"
                priority
              />
            )}
          </div>
          <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8">
            <span
              className={cn(
                "px-3 py-1 rounded-full text-xs font-medium",
                activeTab === "shift"
                  ? "bg-accent text-accent-foreground"
                  : "bg-secondary text-secondary-foreground"
              )}
            >
              {activeTab === "shift" ? "SHIFT" : "NORMAL"}
            </span>
          </div>
        </div>

        {/* Info cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <div className="p-6 rounded-xl bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-3">ရရစ်အကြောင်း</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              ရရစ် ( အကြီး အသေး အပြတ် ) အမျိုးမျိုး မရှိပါ။ ကီးဘုတ်ပေါ်တွင် ရရစ်တခုသာ တွေ့ရပါမည်။
            </p>
          </div>
          <div className="p-6 rounded-xl bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-3">တစ်ချောင်းငင် / နှစ်ချောင်းငင်</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              တစ်ချောင်းငင် နှစ်ချောင်းငင် အရှည်ကိုလည်း တွေ့ရမည်မဟုတ်ပါ။ အလိုလျောက် ပြောင်းလဲပေးပါလိမ့်မည်။
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
