import type { ChangeEvent } from "react";

type FormFieldProps = {
  label: string;
  name: "email" | "message" | "name";
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder: string;
  type?: "email" | "text";
  value: string;
};

const inputClassName =
  "w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-2)] px-4 py-3 text-sm text-white transition-all placeholder:text-[var(--color-text-dim)] focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)]/30 focus:outline-none";

export function FormField({
  label,
  name,
  onChange,
  placeholder,
  type = "text",
  value,
}: FormFieldProps) {
  const labelMarkup = (
    <label className="mb-2 block text-xs font-medium text-[var(--color-text-muted)]">
      {label} <span className="text-[var(--color-accent)]">*</span>
    </label>
  );

  if (name === "message") {
    return (
      <div>
        {labelMarkup}
        <textarea
          className={`${inputClassName} resize-none`}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          required
          rows={6}
          value={value}
        />
      </div>
    );
  }

  return (
    <div>
      {labelMarkup}
      <input
        className={inputClassName}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        required
        type={type}
        value={value}
      />
    </div>
  );
}
