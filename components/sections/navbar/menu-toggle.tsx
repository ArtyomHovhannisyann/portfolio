"use client";

type MenuToggleProps = {
  onToggle: () => void;
  open: boolean;
};

export function MenuToggle({ onToggle, open }: MenuToggleProps) {
  return (
    <button
      aria-label="Toggle menu"
      className="flex flex-col gap-1.5 p-2 md:hidden"
      onClick={onToggle}
    >
      <span
        className={`block h-px w-6 origin-center bg-[var(--color-text)] transition-transform ${
          open ? "translate-y-[7px] rotate-45" : ""
        }`}
      />
      <span
        className={`block h-px w-6 bg-[var(--color-text)] transition-opacity ${
          open ? "opacity-0" : ""
        }`}
      />
      <span
        className={`block h-px w-6 origin-center bg-[var(--color-text)] transition-transform ${
          open ? "-translate-y-[7px] -rotate-45" : ""
        }`}
      />
    </button>
  );
}
