// src/lib/contact.functions.ts
import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const ContactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(120),
  email: z.string().trim().email("Please enter a valid email"),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  size: z.enum(["1 to 10 people", "11 to 50 people", "51 to 250 people", "250+ people"]),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof ContactSchema>;

export const submitContact = createServerFn({ method: "POST" })
  .validator((data: unknown) => ContactSchema.parse(data))
  .handler(async ({ data }) => {
    const url = process.env.CONTACT_WEBHOOK_URL;
    const payload = { ...data, source: "NGYN AI Frontier website", submittedAt: new Date().toISOString() };

    if (!url) {
      // Testing mode: no webhook configured yet, so the lead is only logged on the server.
      console.log("[contact] CONTACT_WEBHOOK_URL not set, logging lead:", payload);
      return { success: true, message: "Thanks. Your request is in." };
    }

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        console.error("[contact] webhook responded", res.status);
        return { success: false, message: "We could not send your request. Please email info@mockup.ngynsolutions.com." };
      }
      return { success: true, message: "Thanks. Your request is in." };
    } catch (err) {
      console.error("[contact] webhook failed", err);
      return { success: false, message: "We could not send your request. Please email info@mockup.ngynsolutions.com." };
    }
  });
