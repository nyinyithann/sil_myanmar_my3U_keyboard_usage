import { Layers } from "lucide-react";

const stackedExamples = [
  { char: "ဋ္ဌ", spelling: "ဋ + ္ + ဌ", keys: "# + F + X" },
  { char: "ဏ္ဌ", spelling: "ဏ + ္ + ဌ", keys: "P + F + X" },
  { char: "ဍ္ဎ", spelling: "ဍ + ္ + ဎ", keys: "! + F + ~" },
  { char: "ဏ္ဍ", spelling: "ဏ + ္ + ဍ", keys: "P + F + !" },
];

export function StackedCharacters() {
  return (
    <section id="stacked" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            Section 2
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            ပါဠ်ဆင့် ( စာလုံးဆင့် )များ ရိုက်သွင်းနည်း
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            စာလုံးဆင့်များရိုက်နှိပ်လိုပါက အဆင့်ခလုတ် <code className="px-2 py-1 bg-card rounded text-primary font-mono">F</code> (shift + f) ကိုရိုက်နှိပ်ပြီး ဆင့်လိုသော အက္ခရာကို ဆက်ရိုက်လိုက်ပါ။
          </p>
        </div>

        {/* Key instruction */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-4 px-6 py-4 bg-card rounded-2xl border border-border">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Layers className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">အဆင့်ခလုတ်</p>
              <p className="text-2xl font-bold text-foreground font-mono">Shift + F</p>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-2xl border border-border bg-card">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-secondary/50">
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                  စာလုံးပုံ
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                  စာလုံးပေါင်းပုံ
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                  အင်္ဂလိပ်ကီးခလုတ်
                </th>
              </tr>
            </thead>
            <tbody>
              {stackedExamples.map((example, index) => (
                <tr
                  key={index}
                  className="border-b border-border last:border-0 hover:bg-secondary/30 transition-colors"
                >
                  <td className="px-6 py-4">
                    <span className="text-3xl font-bold text-primary">
                      {example.char}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">
                    {example.spelling}
                  </td>
                  <td className="px-6 py-4">
                    <code className="px-3 py-1 bg-secondary rounded text-sm font-mono text-foreground">
                      {example.keys}
                    </code>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
