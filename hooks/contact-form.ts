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

export function useContactForm() {
  const [form, setForm] = useState<ContactFormState>(emptyForm);
  const [status, setStatus] = useState<ContactFormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

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
    setErrorMessage("");
  }, []);

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setStatus("sending");
      setErrorMessage("");

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        });

        if (!response.ok) {
          const data = await response.json().catch(() => null);
          throw new Error(data?.error || "Unable to send the message.");
        }

        setStatus("sent");
        setForm(emptyForm);
      } catch (error) {
        console.error(error);
        setStatus("error");
        setErrorMessage(
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again later.",
        );
      }
    },
    [form],
  );

  return {
    errorMessage,
    form,
    handleChange,
    handleSubmit,
    resetForm,
    status,
  };
}
