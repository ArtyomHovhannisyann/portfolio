export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Web", href: "#projects" },
  { label: "Mobile", href: "#mobile" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
] as const;

export type NavLink = (typeof navLinks)[number];
