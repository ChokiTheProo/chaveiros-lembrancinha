import { createFileRoute } from "@tanstack/react-router";


import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Zap,
  Gift,
  Sparkles,
  Printer,
  Scissors,
  BookOpen,
  Church,
  Users,
  ShoppingBag,
  Palette,
  FileText,
  Layout,
  CheckCircle2,
  Lock,
  Globe,
  Shield,
  Infinity as InfinityIcon,
  ArrowRight,
  Star,
  Crown,
  Sword,
  Download,
  HandHeart,
  BadgeCheck,
} from "lucide-react";

import productoPreview from "@/assets/llaveros/pacote-50.webp";
import llavero1 from "@/assets/llaveros/galeria-a.webp";
import llavero2 from "@/assets/llaveros/galeria-b.webp";
import llavero3 from "@/assets/llaveros/galeria-c.webp";
import llavero4 from "@/assets/llaveros/galeria-d.webp";
import llavero5 from "@/assets/llaveros/galeria-e.webp";
import llavero6 from "@/assets/llaveros/galeria-f.webp";
import avatar1 from "@/assets/llaveros/avatar-1.webp";
import avatar2 from "@/assets/llaveros/avatar-2.webp";
import whatsappTestimonialAsset from "@/assets/depoimento-whatsapp-v2.png.asset.json";
import marianaTestimonialAsset from "@/assets/depoimento-mariana.png.asset.json";
import fernandaTestimonialAsset from "@/assets/depoimento-fernanda.png.asset.json";
const whatsappTestimonial = whatsappTestimonialAsset.url;
const marianaTestimonial = marianaTestimonialAsset.url;
const fernandaTestimonial = fernandaTestimonialAsset.url;
import avatar3 from "@/assets/llaveros/avatar-3.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kit com 50 Moldes de Lembrancinhas para Fazer em Casa" },
      {
        name: "description",
        content:
          "Kit com 50 moldes de lembrancinhas em PDF, prontos para imprimir e montar em casa. Ideal para vender, presentear ou usar em festas. Acesso imediato.",
      },
      { property: "og:title", content: "Kit com 50 Moldes de Lembrancinhas para Imprimir" },
      {
        property: "og:description",
        content:
          "Moldes digitais prontos para imprimir, recortar e montar — crie lembrancinhas encantadoras em casa.",
      },
      { property: "og:image", content: productoPreview },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@600;700;800&display=swap",
      },
      { rel: "preload", as: "image", href: productoPreview, fetchpriority: "high" } as any,
    ],
  }),
  component: LandingPage,
});

const CHECKOUT_URL = "https://pay.wiapy.com/5lQOB-QY04"; // Kit + 5 bônus — R$ 19,90
const CHECKOUT_URL_BASIC = "https://pay.wiapy.com/Z2t2c8j9J8H"; // Plano simples (só o kit) — R$ 9,90

const scrollToContent = () => {
  document.getElementById("content")?.scrollIntoView({ behavior: "smooth", block: "start" });
};


/* ---------- HERO ---------- */
const heroBenefits = [
  "50 moldes exclusivos prontos para imprimir",
  "Faça em casa com poucos materiais",
  "Ideal para vender ou presentear",
];

const heroSeals = [
  { icon: Zap, text: "Acesso imediato" },
  { icon: Lock, text: "Pagamento único" },
  { icon: FileText, text: "Arquivo digital em PDF" },
];

const HeroSection = () => (
  <section className="min-h-[85vh] flex items-center bg-background py-6 md:py-10">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto text-center space-y-3 md:space-y-4">
        <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mb-2 text-balance">
          Transforme Papel em{" "}
          <span className="text-accent">Lembrancinhas Encantadoras</span> com Este Kit Exclusivo
          de 50 Moldes Prontos para Imprimir
        </h1>

        <div className="flex justify-center">
          <img
            src="/lembrancinhas/hero.png"
            alt="Pacote com 50 Chaveiros Lembrancinhas — perfeitos para todas as ocasiões"
            loading="eager"
            decoding="async"
            // @ts-expect-error fetchpriority is valid HTML
            fetchpriority="high"
            width={800}
            height={800}
            className="w-full max-w-[320px] sm:max-w-md md:max-w-lg h-auto rounded-xl shadow-soft bg-muted"
          />
        </div>

        <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Crie lindas lembrancinhas em casa de forma simples e econômica. Perfeito para vender,
          presentear ou tornar qualquer ocasião ainda mais especial.
        </p>

        <ul className="flex flex-col items-start gap-2 max-w-md mx-auto text-left">
          {heroBenefits.map((benefit, i) => (
            <li key={i} className="flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-sm sm:text-base text-foreground font-medium">{benefit}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-col items-center gap-1.5">
          <Button
            size="lg"
            onClick={scrollToContent}
            className="shiny-cta animate-pulse-gold w-full sm:w-auto text-primary-foreground font-bold text-base sm:text-lg px-8 gap-2 rounded-full"
          >
            Quero Meu Kit Agora
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2.5 pt-1">
          {heroSeals.map((seal, i) => (
            <div
              key={i}
              className="flex items-center gap-1.5 bg-card border border-border rounded-full px-3.5 py-1.5 shadow-card"
            >
              <seal.icon className="w-3.5 h-3.5 text-accent" />
              <span className="text-xs sm:text-sm font-semibold text-foreground">{seal.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ---------- PARA QUEM É ---------- */
const audiences = [
  { icon: ShoppingBag, title: "Quem quer uma renda extra", description: "Produza e venda lembrancinhas direto de casa." },
  { icon: Scissors, title: "Quem ama trabalhos manuais", description: "Coloque a criatividade pra fora com moldes prontos." },
  { icon: HandHeart, title: "Mães e famílias", description: "Crie lembrancinhas em casa com quem você ama." },
  { icon: Gift, title: "Quem quer presentes personalizados", description: "Surpreenda com um presente feito à mão." },
  { icon: Sparkles, title: "Quem trabalha com festas e eventos", description: "Tenha sempre lembrancinhas lindas pra oferecer." },
  { icon: Star, title: "Iniciantes", description: "Algo simples e fácil de fazer, mesmo do zero." },
];

const TargetAudienceSection = () => (
  <section className="py-5 md:py-7 bg-muted/30">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-5">
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-accent mb-1">PARA QUEM É</p>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-primary text-balance">
          Este Kit é Perfeito Para
        </h2>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
        {audiences.map((a, i) => (
          <div key={i} className="text-center space-y-2">
            <div className="icon-tile-soft w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto rounded-2xl flex items-center justify-center">
              <a.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-accent" />
            </div>
            <h3 className="text-sm sm:text-base md:text-lg font-semibold text-foreground mb-1">{a.title}</h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{a.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ---------- SHOWCASE ---------- */
const modelos = [
  { icon: Gift, title: "Chá de Bebê", description: "Moldes fofos para receber o bebê com carinho." },
  { icon: HandHeart, title: "Casamento", description: "Lembrancinhas elegantes para o grande dia." },
  { icon: Sparkles, title: "Aniversário Infantil", description: "Modelos divertidos para a festa da criançada." },
  { icon: BookOpen, title: "Formatura", description: "Detalhes especiais para celebrar a conquista." },
];

const incluiBonus = [
  { icon: Printer, title: "Controle de Despesas e Vendas", description: "Planilha para organizar custos e lucros." },
  { icon: BookOpen, title: "Vídeo Aula de Montagem", description: "Passo a passo de impressão e montagem." },
  { icon: Gift, title: "Calculadora de Preço e Lucro", description: "Saiba quanto cobrar em cada peça." },
  { icon: Layout, title: "Modelos para Vender", description: "Posts e preços sugeridos prontos." },
  { icon: InfinityIcon, title: "Atualizações Vitalícias", description: "Novos modelos sem custo extra." },
];

const IncludedGroup = ({
  label,
  items,
}: {
  label: string;
  items: { icon: typeof Gift; title: string; description: string }[];
}) => (
  <div>
    <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2 text-left">{label}</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
      {items.map((c, i) => (
        <div key={i} className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded-md hover:bg-muted/50 transition-smooth text-left">
          <div className="icon-tile-soft w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
            <c.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
          </div>
          <div>
            <span className="text-foreground text-xs sm:text-sm font-semibold block">{c.title}</span>
            <span className="text-muted-foreground text-xs hidden sm:block">{c.description}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ShowcaseSection = () => (
  <section className="py-5 md:py-7 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-4xl mx-auto space-y-3">
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-accent">O QUE VOCÊ RECEBE</p>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-primary">
          O Que Está Incluído no Kit
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground">
          50 Moldes de Lembrancinhas prontos para imprimir, divididos entre as 4 ocasiões mais
          pedidas — e ainda 5 bônus inclusos gratuitamente.
        </p>

        <Card className="p-3.5 sm:p-5 max-w-4xl mx-auto space-y-5">
          <IncludedGroup label="Os 50 Moldes · por ocasião" items={modelos} />
          <div className="border-t border-border" />
          <IncludedGroup label="Bônus inclusos grátis" items={incluiBonus} />
        </Card>

        <div className="flex flex-col items-center gap-1.5">
          <Button
            size="lg"
            onClick={scrollToContent}
            className="shiny-cta animate-pulse-gold w-full sm:w-auto text-primary-foreground font-bold text-base sm:text-lg px-8 gap-2 rounded-full"
          >
            Quero Meu Kit Agora
            <ArrowRight className="w-5 h-5" />
          </Button>
          <span className="text-[12px] text-muted-foreground">Acesso imediato após a compra</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 pt-4">
          {[
            "/lembrancinhas/edit1.png",
            "/lembrancinhas/edit2.png",
            "/lembrancinhas/edit3.png",
            "/lembrancinhas/edit4.png",
            "/lembrancinhas/edit5.png",
            "/lembrancinhas/edit6.png",
          ].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Exemplo de lembrancinha ${i + 1}`}
              loading="lazy"
              decoding="async"
              className="w-full aspect-square object-cover rounded-3xl shadow-card bg-muted"
            />
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ---------- BENEFITS / A SOLUÇÃO ---------- */
const benefits = [
  { icon: Scissors, title: "Fácil de Fazer", description: "Mesmo para iniciantes. Basta imprimir, recortar e montar." },
  { icon: ShoppingBag, title: "Econômico", description: "Produza lindas lembrancinhas gastando muito pouco." },
  { icon: Star, title: "Possibilidade de Renda Extra", description: "Venda suas criações e aumente a sua renda." },
];

const BenefitsSection = () => (
  <section className="py-5 md:py-7 bg-muted/30">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-5">
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-accent mb-1">A SOLUÇÃO</p>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-primary text-balance">
          Chega de Gastar Muito com Presentes e Lembrancinhas
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground mt-3 max-w-2xl mx-auto">
          Com este kit você produz lindas lembrancinhas em casa gastando pouco. Não precisa de
          experiência: basta imprimir, recortar e montar. Uma solução prática para presentear,
          decorar ou gerar uma renda extra vendendo peças prontas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 max-w-4xl mx-auto">
        {benefits.map((b, i) => (
          <Card key={i} className="p-5 sm:p-6 text-center space-y-3 hover:shadow-soft transition-smooth">
            <div className="icon-tile w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-2xl flex items-center justify-center">
              <b.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary-foreground" />
            </div>
            <h3 className="font-display text-lg sm:text-xl font-bold text-primary">{b.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{b.description}</p>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

/* ---------- BÔNUS ---------- */
const mainItems = [
  "50 Moldes de Lembrancinhas em PDF",
  "Arquivo PDF de alta qualidade",
  "Imprima quantas vezes quiser",
  "Linhas de corte fáceis de seguir",
  "Licença para uso pessoal ou comercial",
  "Compatível com qualquer impressora",
];

const bonuses = [
  { icon: Printer, number: "BÔNUS 01", title: "Controle de Despesas e Vendas de Lembrancinhas", oldPrice: "R$ 27,00", newPrice: "HOJE GRÁTIS" },
  { icon: BookOpen, number: "BÔNUS 02", title: "Vídeo Aula: como imprimir, recortar e montar (passo a passo)", oldPrice: "R$ 37,00", newPrice: "HOJE GRÁTIS" },
  { icon: Gift, number: "BÔNUS 03", title: "Calculadora de Preço e Lucro para Lembrancinhas", oldPrice: "R$ 19,00", newPrice: "HOJE GRÁTIS" },
  { icon: Layout, number: "BÔNUS 04", title: "Modelos para Vender: posts e preços sugeridos", oldPrice: "R$ 37,00", newPrice: "HOJE GRÁTIS" },
  { icon: InfinityIcon, number: "BÔNUS 05", title: "Atualizações Vitalícias: novos modelos sem custo", oldPrice: "R$ 19,00", newPrice: "HOJE GRÁTIS" },
];

const WhatYouReceiveSection = () => (
  <section className="py-5 md:py-7 bg-muted/30">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-5">
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-accent mb-1">HOJE COM BÔNUS</p>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mb-2">
          5 Bônus GRÁTIS ao comprar hoje
        </h2>
        <p className="text-sm text-muted-foreground">
          Ao confirmar sua compra, você também recebe estes materiais extras — pensados para que aproveite o kit ao máximo.
        </p>
      </div>

      <div className="max-w-5xl mx-auto space-y-5">
        <Card className="p-3.5 sm:p-5 md:p-6">
          <div className="flex flex-row gap-4 items-start">
            <div className="icon-tile flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl flex-shrink-0">
              <FileText className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary-foreground" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold uppercase tracking-widest text-accent mb-0.5">PRODUTO PRINCIPAL</p>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground mb-2">
                Kit com 50 Moldes de Lembrancinhas
              </h3>
              <p className="text-muted-foreground text-xs sm:text-sm mb-3">
                Moldes digitais prontos para imprimir, recortar e montar em casa.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {mainItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>

        <div>
          <div className="text-center mb-4">
            <span className="inline-block bg-accent/20 text-accent-foreground text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
              🎁 Bônus exclusivos
            </span>
            <h3 className="mt-3 font-display text-xl sm:text-2xl md:text-3xl font-bold text-primary">
              BÔNUS INCLUÍDOS <span className="text-success">GRÁTIS</span>
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 md:gap-4">
            {bonuses.map((bonus, i) => (
              <Card key={i} className="p-4 sm:p-5 hover:shadow-soft transition-smooth border-2">
                <div className="flex items-start gap-4">
                  <div className="icon-tile w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center flex-shrink-0">
                    <bonus.icon className="w-7 h-7 sm:w-8 sm:h-8" strokeWidth={2.25} style={{ color: "hsl(40 90% 75%)" }} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-extrabold uppercase tracking-widest text-accent mb-1">{bonus.number}</p>
                    <h4 className="text-base sm:text-lg font-bold text-primary mb-1.5 leading-snug">{bonus.title}</h4>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm text-muted-foreground line-through">{bonus.oldPrice}</span>
                      <span className="text-sm font-extrabold text-success">{bonus.newPrice}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-5 flex justify-center">
            <span className="inline-flex items-center gap-2 bg-success/15 text-success text-sm font-bold px-4 py-2 rounded-full">
              <CheckCircle2 className="w-4 h-4" />
              Todos os bônus inclusos gratuitamente
            </span>
          </div>
          <div className="mt-4 flex justify-center">
            <Button
              size="lg"
              onClick={scrollToContent}
              className="shiny-cta animate-pulse-gold w-full sm:w-auto text-primary-foreground font-bold text-base px-8 gap-2 rounded-full"
            >
              Quero Meu Kit Agora
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ---------- DEPOIMENTOS ---------- */
const testimonials = [
  {
    name: "Maria S.",
    role: "Brasil · Compra verificada",
    avatar: "/depoimentos/cliente-1.jpg",
    quote:
      "Consegui fazer várias lembrancinhas para presentear minha família. Muito fácil!",
  },
  {
    name: "Ana C.",
    role: "Brasil · Compra verificada",
    avatar: "/depoimentos/cliente-2.jpg",
    quote:
      "Comecei a vender e já tive minhas primeiras encomendas.",
  },
  {
    name: "Juliana R.",
    role: "Brasil · Compra verificada",
    avatar: "/depoimentos/cliente-3.jpg",
    quote:
      "Os moldes são lindos e a qualidade é excelente.",
  },
];

const TestimonialsSection = () => (
  <section className="py-5 md:py-7 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-5">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-primary">
          Veja o Que Nossos Clientes Estão Dizendo
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {testimonials.map((t, i) => {
          const hasImage = Boolean((t as any).image);
          return (
            <Card key={i} className="p-4 sm:p-5 hover:shadow-soft transition-smooth flex">
              <div className="flex flex-col items-center text-center space-y-3 w-full">
                {hasImage ? (
                  <div className="block w-full rounded-xl overflow-hidden ring-1 ring-border bg-[#0b141a]">
                    <img
                      src={(t as any).image}
                      alt={`Depoimento real de cliente via WhatsApp`}
                      loading="lazy"
                      className="w-full h-[260px] sm:h-[300px] md:h-[340px] object-cover object-top pointer-events-none select-none"
                      draggable={false}
                    />
                  </div>
                ) : (
                  <img
                    src={t.avatar}
                    alt={t.name}
                    loading="lazy"
                    className="w-20 h-20 rounded-full object-cover ring-2 ring-accent/40"
                  />
                )}
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 sm:w-5 sm:h-5 fill-accent text-accent" />
                  ))}
                </div>
                {!hasImage && (
                  <p className="text-foreground italic leading-relaxed text-sm sm:text-base">"{t.quote}"</p>
                )}
                {hasImage && (
                  <p className="text-foreground italic leading-relaxed text-xs sm:text-sm text-muted-foreground">
                    Print real enviado por cliente no WhatsApp
                  </p>
                )}
                <div className="mt-auto">
                  <p className="font-bold text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                  <p className="text-[11px] font-semibold mt-1" style={{ color: "#2F7D4F" }}>
                    ✓ Compra verificada
                  </p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  </section>
);

/* ---------- CONTENT (PRICING) ---------- */
const offerItems = [
  { title: "50 Moldes de Lembrancinhas (PDF imprimível)", icon: CheckCircle2 },
  { title: "5 Bônus Exclusivos inclusos", icon: CheckCircle2 },
  { title: "Acesso Imediato após a compra", icon: CheckCircle2 },
  { title: "Atualizações Futuras gratuitas", icon: CheckCircle2 },
  { title: "Garantia total de 7 dias", icon: Shield },
  { title: "Acesso vitalício ao material", icon: InfinityIcon },
];

const ContentSection = () => {
  return (
  <section className="py-4 md:py-8 bg-muted/30" id="content">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-4 md:mb-6">
        <div className="inline-block bg-destructive text-destructive-foreground text-xs sm:text-sm font-bold px-5 py-2 rounded-full uppercase tracking-wider mb-3 shadow-md animate-pulse-gold">
          OFERTA POR TEMPO LIMITADO
        </div>
        <h2 className="font-display text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold text-primary mb-2 text-balance">
          Oferta Especial por Tempo Limitado
        </h2>
        <p className="text-sm md:text-base text-muted-foreground mt-2">
          Tudo o que você precisa para começar a criar — em um único pagamento.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 items-stretch">
        {/* PLANO SIMPLES — R$ 9,90 */}
        <Card className="p-5 md:p-7 border-2 border-border flex flex-col">
          <div className="text-center mb-3 mt-2">
            <span className="inline-block bg-muted text-muted-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Plano Simples
            </span>
          </div>
          <div className="flex justify-center mb-4">
            <img
              src="/lembrancinhas/hero.png"
              alt="Kit com 50 Moldes de Lembrancinhas"
              loading="lazy"
              className="max-w-[160px] sm:max-w-[190px] h-auto rounded-md bg-muted opacity-90"
            />
          </div>
          <h3 className="text-center font-display text-xl md:text-2xl font-bold text-primary mb-4">
            Apenas o Kit
          </h3>

          <div className="space-y-2.5 mb-5 flex-1">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-success" />
              <p className="text-sm md:text-base text-foreground">50 Moldes de Lembrancinhas (PDF)</p>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-success" />
              <p className="text-sm md:text-base text-foreground">Imprima quantas vezes quiser</p>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-success" />
              <p className="text-sm md:text-base text-foreground">Acesso vitalício</p>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-success" />
              <p className="text-sm md:text-base text-foreground">Garantia de 7 dias</p>
            </div>
            <div className="flex items-center gap-2.5 opacity-50">
              <span className="w-5 h-5 flex-shrink-0 text-center font-bold">✕</span>
              <p className="text-sm md:text-base text-muted-foreground line-through">Sem os 5 bônus exclusivos</p>
            </div>
          </div>

          <div className="pt-3 mb-5 border-t">
            <p className="text-center text-sm text-muted-foreground mt-3 mb-1">Por apenas</p>
            <p className="text-center text-4xl md:text-5xl font-bold text-foreground mb-1">R$ 9,90</p>
            <p className="text-center text-xs text-muted-foreground">Pagamento único</p>
          </div>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full text-base font-bold gap-2 rounded-full py-6 border-2"
          >
            <a href={CHECKOUT_URL_BASIC} target="_blank" rel="noopener noreferrer">
              Quero Comprar Agora
            </a>
          </Button>
        </Card>

        {/* PLANO COMPLETO — R$ 19,90 */}
        <Card className="p-5 md:p-7 border-2 border-accent shadow-soft relative flex flex-col">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <span className="inline-block bg-destructive text-destructive-foreground text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-md">
              ⭐ Mais Vendido
            </span>
          </div>

          <div className="text-center mb-3 mt-2">
            <span className="inline-block bg-accent/20 text-accent-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Kit + 5 Bônus
            </span>
          </div>
          <div className="flex justify-center mb-4">
            <img
              src="/lembrancinhas/hero.png"
              alt="Kit com 50 Moldes de Lembrancinhas + Bônus"
              loading="lazy"
              className="max-w-[180px] sm:max-w-[220px] h-auto rounded-md bg-muted"
            />
          </div>
          <h3 className="text-center font-display text-xl md:text-2xl font-bold text-primary mb-4">
            Kit Completo + 5 Bônus
          </h3>

          <div className="space-y-2.5 mb-5 flex-1">
            {offerItems.map((item, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <item.icon className="w-5 h-5 flex-shrink-0 text-success" />
                <p className="text-sm md:text-base text-foreground">{item.title}</p>
              </div>
            ))}
          </div>

          <div className="pt-3 mb-5 border-t">
            <p className="text-center text-sm md:text-base text-destructive line-through mt-3 mb-0.5">De R$ 49,90</p>
            <p className="text-center text-sm text-muted-foreground mb-1">Por apenas</p>
            <p className="text-center text-4xl md:text-5xl font-bold text-success mb-1">R$ 19,90</p>
            <p className="text-center text-xs text-muted-foreground">Pagamento único · Acesso vitalício</p>
          </div>

          <Button
            asChild
            size="lg"
            className="shiny-cta animate-pulse-gold w-full text-primary-foreground text-base md:text-lg font-bold gap-2 rounded-full py-6"
          >
            <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
              Quero Comprar Agora
            </a>
          </Button>
          <p className="text-center text-[12px] text-muted-foreground mt-2">+5 bônus inclusos hoje</p>
        </Card>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground mt-5">
        <div className="flex items-center gap-1"><Lock className="w-4 h-4" /><span>Pagamento seguro</span></div>
        <span>|</span>
        <div className="flex items-center gap-1"><Zap className="w-4 h-4" /><span>Acesso imediato</span></div>
        <span>|</span>
        <div className="flex items-center gap-1"><Globe className="w-4 h-4" /><span>Pagamento em reais</span></div>
      </div>
    </div>

  </section>
  );
};


/* ---------- GARANTIA + FAQ ---------- */
const faqs = [
  { question: "Como recebo o material?", answer: "O acesso é enviado imediatamente após a confirmação do pagamento, direto para o seu e-mail." },
  { question: "Os moldes são físicos?", answer: "Não. O produto é digital e enviado em PDF, pronto para você imprimir em casa." },
  { question: "Preciso ter experiência?", answer: "Não. O kit foi criado para iniciantes e é muito fácil de utilizar." },
  { question: "Posso vender as lembrancinhas prontas?", answer: "Sim. Você pode produzir e vender suas criações livremente." },
  { question: "Posso imprimir quantas vezes quiser?", answer: "Sim. O acesso é vitalício e você imprime quantas vezes precisar." },
  { question: "Quais materiais preciso?", answer: "Papel, impressora, tesoura e cola são suficientes para começar." },
];

const GuaranteeSection = () => (
  <section className="py-8 md:py-12 bg-background">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary text-balance">
            Garantia Incondicional de 7 Dias
          </h2>
        </div>

        <Card className="p-6 md:p-10 mb-12 bg-success/10 border-2 border-success/30 shadow-soft">
          <div className="flex flex-col items-center text-center gap-5">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-success/20 flex items-center justify-center shadow-md animate-pulse-gold">
              <span className="text-6xl sm:text-7xl" role="img" aria-label="Escudo de garantia">🛡️</span>
            </div>
            <p className="text-foreground leading-relaxed max-w-2xl">
              Você terá 7 dias para experimentar o material. Se por qualquer motivo não ficar
              satisfeito, basta solicitar o reembolso e devolvemos <b>100% do valor investido</b>.
            </p>
            <p className="text-muted-foreground leading-relaxed max-w-2xl text-sm sm:text-base">
              Sem perguntas, sem burocracia. O risco é todo nosso.
            </p>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 pt-2">
              {[
                { icon: "✅", text: "Sem letras miúdas" },
                { icon: "💬", text: "Sem enrolação" },
                { icon: "🤝", text: "Sem perguntas constrangedoras" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm font-semibold text-success">
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            <span className="inline-flex items-center gap-2 bg-success text-success-foreground text-sm font-bold px-5 py-2 rounded-full mt-1">
              <Shield className="w-4 h-4" />
              Risco Zero
            </span>
          </div>
        </Card>

        <div className="text-center mb-6">
          <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">
            Tudo o que você precisa saber
          </h3>
          <p className="text-sm text-muted-foreground">PERGUNTAS FREQUENTES</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <Card key={i} className="p-5 sm:p-6 hover:shadow-soft transition-smooth">
              <div className="flex items-start gap-4">
                <div className="icon-tile-soft w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0">
                  <BadgeCheck className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="font-display font-semibold text-primary mb-1">{faq.question}</p>
                  <p className="text-muted-foreground text-sm sm:text-base">{faq.answer}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ---------- FINAL CTA ---------- */
const FinalCTASection = () => (
  <section className="py-6 md:py-8 bg-primary">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground text-balance">
          Comece Hoje Mesmo a Criar Lembrancinhas Lindas em Casa
        </h2>
        <p className="text-base sm:text-xl md:text-2xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto">
          São 50 moldes prontos para imprimir que podem ser usados para vender, presentear ou tornar
          momentos especiais ainda mais inesquecíveis.
        </p>
        <div className="flex flex-col items-center gap-2">
          <Button
            size="lg"
            onClick={scrollToContent}
            className="shiny-cta animate-pulse-gold w-full sm:w-auto text-primary-foreground font-bold text-base sm:text-lg px-8 gap-2 rounded-full"
          >
            Adquirir o Kit Agora
          </Button>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm sm:text-base text-primary-foreground/90 font-medium pt-1">
          <span className="flex items-center gap-1.5">🔒 Compra Segura</span>
          <span className="flex items-center gap-1.5">⚡ Acesso Imediato</span>
          <span className="flex items-center gap-1.5">💛 Pagamento Único</span>
        </div>
      </div>
    </div>
  </section>
);

function LandingPage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <TargetAudienceSection />
      <ShowcaseSection />
      <BenefitsSection />
      <WhatYouReceiveSection />
      <TestimonialsSection />
      <ContentSection />
      <GuaranteeSection />
      <FinalCTASection />

      <footer className="bg-primary text-primary-foreground/80 py-8">
        <div className="container mx-auto px-4 text-center text-sm space-y-2">
          <p className="font-semibold text-primary-foreground">Moldes de Lembrancinhas · Kit Digital</p>
          <p>© 2026 — Todos os direitos reservados · Pagamento processado de forma segura</p>
          <p className="text-primary-foreground/60 text-xs max-w-2xl mx-auto">
            Este produto não garante resultados financeiros. Os depoimentos refletem experiências individuais.
          </p>
        </div>
      </footer>
    </div>
  );
}
