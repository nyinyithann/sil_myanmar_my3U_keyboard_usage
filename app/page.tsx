import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { KeyboardLayout } from "@/components/keyboard-layout";
import { StackedCharacters } from "@/components/stacked-characters";
import { Differences } from "@/components/differences";
import { TypingExamples } from "@/components/typing-examples";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <KeyboardLayout />
      <StackedCharacters />
      <Differences />
      <TypingExamples />
      <Footer />
    </main>
  );
}
