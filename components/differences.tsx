import { AlertCircle } from "lucide-react";

const differences = [
  { char1: "၀", label1: "သုည", char2: "ဝ", label2: "ဝလုံး" },
  { char1: "စျ", label1: "စလုံးရပင့်", char2: "ဈ", label2: "ဇမြင်ဆွဲ" },
  { char1: "ဉ", label1: "ညလေး", char2: "ဥ", label2: "အက္ခရာအု" },
  { char1: "သြ", label1: "သရရစ်", char2: "ဩ", label2: "အက္ခရာအော" },
  { char1: "စဉ်", label1: "စ + ဉ + ်", char2: "စဥ်", label2: "စ + ဥ + ်" },
];

export function Differences() {
  return (
    <section id="differences" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            Section 3
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            မတူကွဲပြားသော အက္ခရာများ
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            ဤအက္ခရာများသည် ပုံသဏ္ဌာန်ချင်း ဆင်တူသော်လည်း တူညီသော အက္ခရာများ မဟုတ်ပါ။
          </p>
        </div>

        {/* Warning notice */}
        <div className="flex items-start gap-4 p-6 rounded-2xl bg-accent/10 border border-accent/30 mb-12 max-w-2xl mx-auto">
          <AlertCircle className="w-6 h-6 text-accent shrink-0 mt-0.5" />
          <p className="text-sm text-foreground leading-relaxed">
            ဤအက္ခရာများကို မှားရိုက်ပါက စာလုံးပေါင်း သတ်ပုံမှားယွင်းသွားနိုင်ပါသည်။ သတိထားရန် လိုအပ်ပါသည်။
          </p>
        </div>

        {/* Difference cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {differences.map((diff, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center justify-center gap-6 mb-4">
                <div className="text-center">
                  <span className="block text-4xl font-bold text-foreground mb-1">
                    {diff.char1}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {diff.label1}
                  </span>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="text-center">
                  <span className="block text-4xl font-bold text-primary mb-1">
                    {diff.char2}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {diff.label2}
                  </span>
                </div>
              </div>
              <div className="text-center">
                <span className="inline-block px-3 py-1 bg-secondary rounded-full text-xs text-muted-foreground">
                  မတူပါ
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
