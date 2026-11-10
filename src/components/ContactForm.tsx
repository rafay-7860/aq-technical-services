"use client";

import { useState, type FormEvent } from "react";
import { services, whatsappUrl } from "@/lib/site";

type FormState = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  service: "",
  message: "",
};

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim() || values.name.trim().length < 2) {
    errors.name = "Please enter your full name.";
  }

  const phoneDigits = values.phone.replace(/[^\d+]/g, "");
  if (!phoneDigits || phoneDigits.replace(/\D/g, "").length < 8) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!values.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.service) {
    errors.service = "Please select a service.";
  }

  if (!values.message.trim() || values.message.trim().length < 10) {
    errors.message = "Please share a short message (at least 10 characters).";
  }

  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
    setStatus("idle");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("error");
      return;
    }

    const composedMessage = [
      "Hello AQ Technical Services, I would like to enquire about your services.",
      "",
      `Name: ${values.name.trim()}`,
      `Phone: ${values.phone.trim()}`,
      `Email: ${values.email.trim()}`,
      `Service Required: ${values.service}`,
      `Message: ${values.message.trim()}`,
    ].join("\n");

    setStatus("success");
    window.open(whatsappUrl(composedMessage), "_blank", "noopener,noreferrer");
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-[2rem] border border-navy/10 bg-white p-6 shadow-[0_24px_60px_rgba(11,31,58,0.08)] sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Name"
          id="name"
          error={errors.name}
          value={values.name}
          onChange={(value) => updateField("name", value)}
          autoComplete="name"
          placeholder="Your full name"
        />
        <Field
          label="Phone"
          id="phone"
          type="tel"
          error={errors.phone}
          value={values.phone}
          onChange={(value) => updateField("phone", value)}
          autoComplete="tel"
          placeholder="+971 5X XXX XXXX"
        />
        <Field
          label="Email"
          id="email"
          type="email"
          error={errors.email}
          value={values.email}
          onChange={(value) => updateField("email", value)}
          autoComplete="email"
          placeholder="you@example.com"
          className="sm:col-span-2"
        />
        <div className="sm:col-span-2">
          <label htmlFor="service" className="mb-2 block text-sm font-semibold text-navy">
            Service Required
          </label>
          <select
            id="service"
            value={values.service}
            onChange={(event) => updateField("service", event.target.value)}
            className={`w-full rounded-2xl border bg-surface px-4 py-3 text-sm text-charcoal outline-none transition focus:border-orange focus:ring-2 focus:ring-orange/20 ${
              errors.service ? "border-red-400" : "border-navy/10"
            }`}
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? "service-error" : undefined}
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
            <option value="General Enquiry">General Enquiry</option>
          </select>
          {errors.service ? (
            <p id="service-error" className="mt-2 text-sm text-red-600">
              {errors.service}
            </p>
          ) : null}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-2 block text-sm font-semibold text-navy">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            value={values.message}
            onChange={(event) => updateField("message", event.target.value)}
            placeholder="Tell us about your property and what you need help with."
            className={`w-full resize-y rounded-2xl border bg-surface px-4 py-3 text-sm text-charcoal outline-none transition focus:border-orange focus:ring-2 focus:ring-orange/20 ${
              errors.message ? "border-red-400" : "border-navy/10"
            }`}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message ? (
            <p id="message-error" className="mt-2 text-sm text-red-600">
              {errors.message}
            </p>
          ) : null}
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-orange px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange/25 transition hover:bg-orange-deep sm:w-auto"
      >
        Send via WhatsApp
      </button>

      <p className="mt-4 text-sm text-charcoal/60">
        This form opens WhatsApp with your enquiry details. No email backend is configured yet, so
        messages are not stored on this website.
      </p>

      {status === "success" ? (
        <p
          role="status"
          className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800"
        >
          Your enquiry is ready. WhatsApp should open so you can send the message to AQ Technical
          Services.
        </p>
      ) : null}

      {status === "error" ? (
        <p
          role="alert"
          className="mt-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          Please correct the highlighted fields and try again.
        </p>
      ) : null}
    </form>
  );
}

type FieldProps = {
  label: string;
  id: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  className?: string;
};

function Field({
  label,
  id,
  value,
  onChange,
  error,
  type = "text",
  placeholder,
  autoComplete,
  className,
}: FieldProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-navy">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className={`w-full rounded-2xl border bg-surface px-4 py-3 text-sm text-charcoal outline-none transition focus:border-orange focus:ring-2 focus:ring-orange/20 ${
          error ? "border-red-400" : "border-navy/10"
        }`}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-red-600">
          {error}
        </p>
      ) : null}
    </div>
  );
}
