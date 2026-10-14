import { handleUpload, type HandleUploadBody } from "@vercel/blob/client";
import { NextResponse } from "next/server";

export async function POST(request: Request): Promise<NextResponse> {
  console.log("[CV-UPLOAD] /api/upload called", {
    method: request.method,
    hasBlobToken: !!process.env.BLOB_READ_WRITE_TOKEN,
  });

  let body: HandleUploadBody;
  try {
    body = (await request.json()) as HandleUploadBody;
    console.log("[CV-UPLOAD] Request body parsed", { type: body.type });
  } catch (error) {
    console.error("[CV-UPLOAD] Failed to parse request body", error);
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 },
    );
  }

  try {
    const response = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async (pathname, clientPayload) => {
        console.log("[CV-UPLOAD] Generating token", {
          pathname,
          clientPayload,
        });

        return {
          allowedContentTypes: ["application/pdf"],
          maximumSizeInBytes: 5 * 1024 * 1024,
          addRandomSuffix: true,
          tokenPayload: JSON.stringify({ roleSlug: clientPayload }),
        };
      },
      onUploadCompleted: async ({ blob, tokenPayload }) => {
        console.log("[CV-UPLOAD] Upload completed on server", {
          url: blob.url,
          pathname: blob.pathname,
          tokenPayload,
        });
      },
    });

    console.log("[CV-UPLOAD] Token generated successfully", {
      success: response.type,
    });

    return NextResponse.json(response);
  } catch (error) {
    console.error("[CV-UPLOAD] handleUpload error", {
      error,
      message: (error as Error).message,
      stack: (error as Error).stack,
    });

    return NextResponse.json(
      { error: (error as Error).message },
      { status: 400 },
    );
  }
}
