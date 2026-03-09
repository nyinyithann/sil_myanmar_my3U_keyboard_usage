import { ArrowDown, ExternalLink } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzJhMmEzOCIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-8">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm text-muted-foreground">SIL Myanmar (my3U) Keyboard</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight text-balance">
          <span className="text-primary">မြန်မာလက်ကွက်</span>
          <br />
          <span className="text-2xl sm:text-3xl lg:text-4xl font-normal text-muted-foreground">ဇယား</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed text-pretty">
          မြန်မာစာကို ရေးတတ်သူတိုင်း ကွန်ပျူတာတွင် ရိုက်နိုင်ရန် ပြုလုပ်ထားသည့် 
          ၂၁ ရာစုခေတ် နည်းပညာ ဖြစ်ပါသည်။
        </p>

        <p className="text-base text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          မြန်မာစာ လက်ရေးရေးသည့် အစီအစဉ်အတိုင်း ရိုက်သွားရုံသာ ဖြစ်ပါသည်။ မြန်မာယူနီကုဒ်သည် အက္ခရာတစ်ခုမှ ပုံသဏ္ဌာန် ကွဲပြားသော စာလုံးပုံ အမျိုးမျိုးကို ခလုတ်တခုတည်း (ကုဒ်တစ်ခုတည်း ) ဖြင့်တည်ဆောက်ထားပါသည်။

          ဆိုလိုသည်မှာ ရရစ် ( အကြီး အသေး အပြတ် ) အမျိုးမျိုး မရှိပါ။ ကီးဘုတ်ပေါ်တွင် ရရစ်တခုသာ တွေ့ရပါမည်။ ထို့အတူ တစ်ချောင်းငင် နှစ်ချောင်းငင် အရှည်ကိုလည်း တွေ့ရမည်မဟုတ်ပါ။ စာလုံးပေါင်း သတ်ပုံအတိုင်း ရိုက်နှိပ်သွားပါက လိုချင်သော စာလုံးပုံစံကို အလိုလျောက် ပြောင်းလဲ ပေးပါလိမ့်မည်။
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#keyboard"
            className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-all hover:scale-105 flex items-center gap-2"
          >
            လက်ကွက်ကြည့်ရန်
            <ArrowDown className="w-4 h-4" />
          </a>
          <a
            href="https://keyman.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-secondary text-secondary-foreground rounded-xl font-medium hover:bg-secondary/80 transition-all border border-border flex items-center gap-2"
          >
            Keyman Download
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
