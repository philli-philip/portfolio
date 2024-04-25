import { NextResponse } from "next/server";
import { content } from "../../../../pages/about";

export const generalData = {
  name: "Philip Mattha",
  phone: "+49 15906800728",
  email: "philip.mattha@gmail.com",
  address: "Rubensstraße 15, 12159 Berlin",
};

const data = {
  general: generalData,
  experience: content,
};

export function GET() {
  return NextResponse.json(data);
}
