"use client";

import { type ChangeEvent, type FormEvent, useCallback, useState } from "react";

export type ContactFormState = {
  email: string;
  message: string;
  name: string;
};

export type ContactFormStatus = "idle" | "sending" | "sent" | "error";

const emptyForm: ContactFormState = {
  email: "",
  message: "",
  name: "",
};

export function useContactForm(recipientEmail: string) {
  const [form, setForm] = useState<ContactFormState>(emptyForm);
  const [status, setStatus] = useState<ContactFormStatus>("idle");

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = event.target;
      setForm((current) => ({ ...current, [name]: value }));
    },
    [],
  );

  const resetForm = useCallback(() => {
    setForm(emptyForm);
    setStatus("idle");
  }, []);

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setStatus("sending");

      const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
      );

      window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
      window.setTimeout(() => setStatus("sent"), 500);
    },
    [form, recipientEmail],
  );

  return {
    form,
    handleChange,
    handleSubmit,
    resetForm,
    status,
  };
}
