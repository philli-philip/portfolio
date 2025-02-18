import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { data, error } = await resend.emails.send({
      from: "Portfolio <philip@mattha.net>",
      to: ["philip.mattha@gmail.com"],
      subject: "Contact from the Portfolio",
      html: "<p>it works!</p>",
    });

    console.log(data, body.message, error);

    if (error) {
      return Response.json({ error }, { status: 500 });
    }
    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
