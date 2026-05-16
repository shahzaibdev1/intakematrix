import { NextRequest } from "next/server";
import fs from "fs";
import path from "path";

// Ensure the public/waitlist directory exists at startup
const waitlistDir = path.join(process.cwd(), "public", "waitlist");
if (!fs.existsSync(waitlistDir)) {
  fs.mkdirSync(waitlistDir, { recursive: true });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, email, clinic, phone, plan, message } = body;

    if (!name || !email) {
      return Response.json(
        { success: false, error: "Name and email are required." },
        { status: 400 }
      );
    }

    // Build a safe filename: lowercase name, strip non-alphanumeric, add timestamp suffix
    const safeName = name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "_")
      .replace(/^_+|_+$/g, "");
    const timestamp = Date.now();
    const filename = `${safeName}_${timestamp}.json`;
    const filepath = path.join(waitlistDir, filename);

    const record = {
      name,
      email,
      clinic: clinic ?? "",
      phone: phone ?? "",
      plan: plan ?? "Not specified",
      message: message ?? "",
      submittedAt: new Date().toISOString(),
      filename,
    };

    fs.writeFileSync(filepath, JSON.stringify(record, null, 2), "utf-8");

    return Response.json(
      {
        success: true,
        message: "Your access request has been recorded. We will be in touch shortly.",
        file: filename,
      },
      { status: 201 }
    );
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return Response.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}

// Optional: list all submissions (accessible at GET /api/waitlist)
export async function GET() {
  try {
    const files = fs.readdirSync(waitlistDir).filter((f) => f.endsWith(".json"));
    const submissions = files.map((file) => {
      const raw = fs.readFileSync(path.join(waitlistDir, file), "utf-8");
      return JSON.parse(raw);
    });

    return Response.json({ success: true, count: submissions.length, submissions });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return Response.json({ success: false, error: message }, { status: 500 });
  }
}
