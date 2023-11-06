import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = await resend.emails.send({
      from: "Portfolio <philip@mattha.net>",
      to: ["philip.mattha@gmail.com"],
      subject: "Contact from the Portfolio",
      text: body.message || "empty email",
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(error);
  }
}
