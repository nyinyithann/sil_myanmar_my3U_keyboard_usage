"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Info } from "lucide-react";
import { cn } from "@/lib/utils";

const examples = [
  { word: "ကျူ", spelling: "က + ျ + ူ", keys: "u + s + l" },
  { word: "ကျို", spelling: "က + ျ + ိ + ု", keys: "u + s + d + k" },
  { word: "ကျောင်း", spelling: "ေ + က + ျ + ာ + င + ် + း", keys: "a + u + s + m + i + f + ;" },
  { word: "ကျွမ်း", spelling: "က + ျ + ွ + မ + ် + း", keys: "u + s + G + r + f + ;" },
  { word: "ကြီး", spelling: "က + ြ + ီ + း", keys: "u + j + D + ;" },
  { word: "ခြုံ", spelling: "ခ + ြ + ု + ံ", keys: "c + j + k + H" },
  { word: "မြို့", spelling: "မ + ြ + ိ + ု + ့", keys: "r + j + d + k + h" },
  { word: "ကြွေး", spelling: "ေ + က + ြ + ွ + း", keys: "a + u + j + G + ;" },
  { word: "မြှင့်", spelling: "မ + ြ + ှ + င + ် + ့", keys: "r + j + S + i + f + h" },
  { word: "ငြှိုး", spelling: "င + ြ + ှ + ိ + ု + း", keys: "i + j + S + d + k + ;" },
  { word: "စက္ကူ", spelling: "စ + က + ္ + က + ူ", keys: "p + u + F + u + l" },
  { word: "အင်္ဂါ", spelling: "အ + င + ် + ္ + ဂ + ါ", keys: "t + i + f + F + : + g" },
  { word: "အင်္ကျီ", spelling: "အ + င + ် + ္ + က + ျ + ီ", keys: "t + i + f + F + u + s + D" },
  { word: "သင်္ဘော", spelling: "သ + င + ် + ္ + ေ + ဘ + ာ", keys: "o + i + f + F + a + b + m" },
  { word: "ဥက္ကဋ္ဌ", spelling: "ဥ + က + ္ + က + ဋ + ္ + ဌ", keys: "U + u + F + u + # + F + X" },
  { word: "သဏ္ဌာန်", spelling: "သ + ဏ + ္ + ဌ + ာ + န + ်", keys: "o + P + F + X + m + e + f" },
  { word: "ဘဏ္ဍာ", spelling: "ဘ + ဏ + ္ + ဍ + ာ", keys: "b + P + F + ! + m" },
  { word: "ခြင်္သေ့", spelling: "ခ + ြ + င + ် + ္ + ေ + သ + ့", keys: "c + j + i + f + F + a + o + h" },
  { word: "သိင်္ဂီ", spelling: "သ + ိ + င + ် + ္ + ဂ + ီ", keys: "o + d + i + f + F + : + D" },
  { word: "သင်္ဂြိုဟ်", spelling: "သ + င + ် + ္ + ဂ + ြ + ိ + ု + ဟ + ်", keys: "o + i + f + F + : + j + d + k + [ + f" },
];

export function TypingExamples() {
  const [showAll, setShowAll] = useState(false);
  const displayedExamples = showAll ? examples : examples.slice(0, 8);

  return (
    <section id="examples" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            Section 4
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            နမူနာပြ စာရိုက်နည်း
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            စာလုံးအချို့ကို နမူနာအဖြစ် ရိုက်နှိပ်ပုံအဆင့်ဆင့်ကို ဖေါ်ပြအပ်ပါသည်။
          </p>
        </div>

        {/* Info box */}
        <div className="flex items-start gap-4 p-6 rounded-2xl bg-primary/10 border border-primary/30 mb-12 max-w-3xl mx-auto">
          <Info className="w-6 h-6 text-primary shrink-0 mt-0.5" />
          <p className="text-sm text-foreground leading-relaxed">
            ရရစ် အက္ခရာကို ဗျည်းနောက်မှ ရိုက်ရပါမည်။ <code className="px-1 bg-card rounded">ိ ု</code>၊ <code className="px-1 bg-card rounded">ု ံ</code>၊ <code className="px-1 bg-card rounded">ံ ့</code> ကဲ့သိုသော အပေါ်အောက် စာလုံးများကို နှစ်သက်ရာ အရင်ရိုက်နိုင်ပါသည်။
          </p>
        </div>

        {/* Examples grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {displayedExamples.map((example, index) => (
            <div
              key={index}
              className={cn(
                "p-5 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:scale-[1.02]",
                "group"
              )}
            >
              <div className="text-center mb-4">
                <span className="text-4xl font-bold text-primary group-hover:scale-110 transition-transform inline-block">
                  {example.word}
                </span>
              </div>
              <div className="space-y-2">
                <div className="text-xs text-muted-foreground">
                  <span className="text-foreground/70">ပေါင်း: </span>
                  {example.spelling}
                </div>
                <div className="text-xs">
                  <span className="text-foreground/70">Keys: </span>
                  <code className="text-primary font-mono">{example.keys}</code>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show more/less button */}
        {examples.length > 8 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-xl text-foreground hover:bg-secondary transition-colors"
            >
              {showAll ? (
                <>
                  ပိတ်ရန်
                  <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  နောက်ထပ် {examples.length - 8} ခု ကြည့်ရန်
                  <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
