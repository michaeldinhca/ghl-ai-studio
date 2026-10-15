// src/components/contact-section.tsx
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "@tanstack/react-router";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ContactSchema, submitContact, type ContactInput } from "@/lib/contact.functions";
import { Reveal } from "@/components/reveal";
import { Eyebrow, H2, Lead, Wrap } from "@/components/site-ui";

const field =
  "h-auto rounded-[10px] border-[1.5px] border-input bg-card px-3.5 py-3 text-base text-card-foreground";

function FieldError({ id, msg }: { id: string; msg?: string }) {
  return msg ? (
    <p id={id} className="text-sm font-medium text-destructive">
      {msg}
    </p>
  ) : null;
}

export function ContactSection({
  heading = "Start with a two-week process review",
  lead = "Tell us which process hurts. We map it, measure it and come back with the three changes worth making first, ranked by payback.",
}: {
  heading?: string;
  lead?: string;
}) {
  const navigate = useNavigate();
  const [status, setStatus] = useState("");
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(ContactSchema),
    defaultValues: { name: "", email: "", phone: "", size: "1 to 10 people", message: "" },
  });

  const onSubmit = async (values: ContactInput) => {
    setStatus("Sending...");
    const res = await submitContact({ data: values });
    if (res.success) {
      setStatus(res.message);
      navigate({ to: "/thank-you" });
    } else {
      setStatus(res.message);
    }
  };

  const contactLink = "text-[var(--brand-on-dark)]";

  return (
    <section id="contact" className="bg-[var(--brand-ink)] py-24 text-[var(--brand-on-dark)]">
      <Wrap className="grid gap-14 min-[901px]:grid-cols-2">
        <Reveal>
          <Eyebrow onDark>Contact</Eyebrow>
          <h2 className={H2}>{heading}</h2>
          <Lead onDark>{lead}</Lead>
          <dl>
            <dt className="mt-4 font-mono text-xs font-medium tracking-[0.1em] text-[var(--brand-on-dark-muted)]">PHONE</dt>
            <dd className="ml-0 mt-1"><a className={contactLink} href="tel:+19999999999">+1 999-999-9999</a></dd>
            <dt className="mt-4 font-mono text-xs font-medium tracking-[0.1em] text-[var(--brand-on-dark-muted)]">EMAIL</dt>
            <dd className="ml-0 mt-1"><a className={contactLink} href="mailto:info@mockup.ngynsolutions.com">info@mockup.ngynsolutions.com</a></dd>
            <dt className="mt-4 font-mono text-xs font-medium tracking-[0.1em] text-[var(--brand-on-dark-muted)]">OFFICE</dt>
            <dd className="ml-0 mt-1">001 NoWhere Avenue, ON, G5G 0R0, Canada</dd>
          </dl>
        </Reveal>
        <Reveal>
          <form
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            className="grid gap-4 rounded-[14px] bg-card p-[30px] text-card-foreground"
          >
            <div className="grid gap-1.5">
              <Label htmlFor="c-name" className="font-semibold">Name</Label>
              <Input id="c-name" autoComplete="name" className={field} aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "c-name-err" : undefined} {...register("name")} />
              <FieldError id="c-name-err" msg={errors.name?.message} />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="c-email" className="font-semibold">Work email</Label>
              <Input id="c-email" type="email" autoComplete="email" className={field} aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "c-email-err" : undefined} {...register("email")} />
              <FieldError id="c-email-err" msg={errors.email?.message} />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="c-phone" className="font-semibold">Phone</Label>
              <Input id="c-phone" type="tel" autoComplete="tel" className={field} aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "c-phone-err" : undefined} {...register("phone")} />
              <FieldError id="c-phone-err" msg={errors.phone?.message} />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="c-size" className="font-semibold">Company size</Label>
              <Controller
                control={control}
                name="size"
                render={({ field: f }) => (
                  <Select value={f.value} onValueChange={f.onChange}>
                    <SelectTrigger id="c-size" className={field}>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {ContactSchema.shape.size.options.map((o) => (
                        <SelectItem key={o} value={o}>{o}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="c-message" className="font-semibold">Which process is costing you the most?</Label>
              <Textarea id="c-message" rows={4} className={field} aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "c-message-err" : undefined} {...register("message")} />
              <FieldError id="c-message-err" msg={errors.message?.message} />
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="h-auto justify-self-start rounded-full px-[22px] py-3.5 text-base font-semibold transition-transform hover:-translate-y-0.5 hover:bg-[var(--brand-accent-strong)]"
            >
              {isSubmitting ? "Sending..." : "Request my process review"}
            </Button>
            <p role="status" aria-live="polite" className="min-h-[1.2em] text-sm text-muted-foreground">{status}</p>
          </form>
        </Reveal>
      </Wrap>
    </section>
  );
}
