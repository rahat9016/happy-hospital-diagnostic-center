import { NextRequest, NextResponse } from "next/server";
import specialties from "../../../data/specialties.json";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  // Optional query params
  const slug = searchParams.get("slug");
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "10");

  let filtered = specialties;

  // Filter by slug if provided
  if (slug) {
    filtered = specialties.filter((s) => s.slug === slug);
  }

  const totalItems = filtered.length;
  const totalPages = Math.ceil(totalItems / limit);
  const currentPage = Math.min(page, totalPages) || 1;
  const startIndex = (currentPage - 1) * limit;
  const endIndex = startIndex + limit;

  const paginatedItems = filtered.slice(startIndex, endIndex);

  return NextResponse.json({
    statusCode: 200,
    success: true,
    message: "Resources retrieved successfully",
    data: paginatedItems,
    meta: {
      totalItems,
      itemCount: paginatedItems.length,
      itemsPerPage: limit,
      currentPage,
      totalPages,
    },
  });
}
