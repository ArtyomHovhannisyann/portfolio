import { type NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "");

const contactTemplate = ({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>New contact request</title>
    <style>
      body {
        margin: 0;
        font-family: Inter, system-ui, sans-serif;
        background: #0b1220;
        color: #e5e7eb;
      }
      .wrapper {
        width: 100%;
        max-width: 680px;
        margin: 0 auto;
        padding: 32px;
        background: linear-gradient(180deg, rgba(15,23,42,0.98), rgba(15,23,42,0.92));
        border: 1px solid rgba(148,163,184,0.12);
        border-radius: 24px;
      }
      .header {
        margin-bottom: 24px;
      }
      .title {
        margin: 0 0 8px;
        font-size: 24px;
        color: #ffffff;
      }
      .subtitle {
        margin: 0;
        color: #94a3b8;
        font-size: 14px;
      }
      .field {
        margin-bottom: 18px;
      }
      .field-title {
        margin: 0 0 8px;
        font-size: 13px;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: #7c84a1;
      }
      .field-value {
        margin: 0;
        padding: 16px;
        border-radius: 16px;
        background: rgba(255,255,255,0.04);
        color: #f8fafc;
        font-size: 15px;
        line-height: 1.7;
        white-space: pre-wrap;
      }
      .footer {
        margin-top: 28px;
        color: #94a3b8;
        font-size: 13px;
      }
    </style>
  </head>
  <body>
    <div class="wrapper">
      <div class="header">
        <h1 class="title">New Portfolio Contact Request</h1>
        <p class="subtitle">A visitor sent a message through the portfolio contact form.</p>
      </div>

      <div class="field">
        <p class="field-title">Name</p>
        <p class="field-value">${name}</p>
      </div>

      <div class="field">
        <p class="field-title">Email</p>
        <p class="field-value">${email}</p>
      </div>

      <div class="field">
        <p class="field-title">Message</p>
        <p class="field-value">${message}</p>
      </div>

      <p class="footer">You can reply directly to the sender using the email address above.</p>
    </div>
  </body>
</html>
`;

export async function POST(request: NextRequest) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Email service is not configured. Please set RESEND_API_KEY." },
      { status: 500 },
    );
  }

  const body = await request.json().catch(() => null);

  if (!body?.name || !body?.email || !body?.message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  try {
    await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev",
      to: process.env.CONTACT_TO_EMAIL || "artyomhovhannisyan.ait@gmail.com",
      subject: `New message from ${body.name}`,
      html: contactTemplate(body),
      replyTo: body.email,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        error: "Unable to send your message right now. Please try again later.",
      },
      { status: 500 },
    );
  }
}
