import { db } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { title, content } = await req.json();

  const post = await db.post.create({
    data: {
      title,
      content,
      authorId: session.user.id,
    },
  });

  return NextResponse.json(post);
}
