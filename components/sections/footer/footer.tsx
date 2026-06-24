import { BackToTop } from "@/components/sections/footer/back-to-top";
import { FooterBrand } from "@/components/sections/footer/footer-brand";
import { FooterSocialLinks } from "@/components/sections/footer/footer-social-links";

export function Footer() {
  return (
    <footer className="relative border-t border-[var(--color-border)] bg-[var(--color-surface)]/50">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row">
        <FooterBrand />
        <FooterSocialLinks />
        <BackToTop />
      </div>
    </footer>
  );
}
