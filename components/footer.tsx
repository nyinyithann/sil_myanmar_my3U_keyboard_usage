import Image from "next/image";
import { ExternalLink, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">အကြောင်း</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              ဤအချက်အလက်များအား suntun မူလ စာပြုစုပြီး andjc မှ ဖြည့်စွက်ထားသည်။
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://help.keyman.com/keyboard/sil_myanmar_my3/1.7.5/sil_myanmar_my3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
                >
                  Keyman Help
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://keyman.com/keyboards/sil_myanmar_my3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
                >
                  Download Keyboard
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* License */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">License</h3>
            <a
              href="http://creativecommons.org/licenses/by/3.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Image
                src="/images/cc-license.png"
                alt="Creative Commons License"
                width={80}
                height={15}
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
              <span>CC BY 3.0</span>
            </a>
            <p className="text-xs text-muted-foreground mt-3">
              Creative Commons Attribution 3.0 International License
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            Myanmar3 Keyboard Layout Guide
          </p>
          <p className="text-sm text-muted-foreground inline-flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-accent fill-accent" /> for Myanmar
          </p>
        </div>
      </div>
    </footer>
  );
}
