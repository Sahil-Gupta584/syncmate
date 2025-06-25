"use server";

import nodemailer from "nodemailer";
export async function sendContactEmail(formData: {
  name: string;
  email: string;
  channel?: string;
  message?: string;
}) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_USER!,
      pass: process.env.NODEMAILER_PASS!,
    },
  });

  const mailOptions = {
    to: formData.email,
    from: process.env.NODEMAILER_USER!,
    subject: `New Contact Message from ${formData.name}`,
    html: `
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      ${formData.channel ? `<p><strong>Channel:</strong> ${formData.channel}</p>` : ""}
      <p><strong>Message:</strong></p>
      <p>${formData.message || "No message provided"}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { ok: true, result: true };
  } catch (error) {
    console.error("error in sendContactEmail:", error);
    return { ok: true, error: (error as Error).message };
  }
}
