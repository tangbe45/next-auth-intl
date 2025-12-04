import bcrypt from "bcryptjs";
import { db } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password, name } = await req.json();

  const hashed = await bcrypt.hash(password, 10);

  const user = await db.user.create({
    data: { email, password: hashed, name },
  });

  return NextResponse.json({ user });
}
