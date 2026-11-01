import { env } from "~/env";
import type {
  ActivityResponse,
  GalleryImage,
  ListResponse,
  MemberResponse,
  SiteResponse,
} from "./types";

const REVALIDATE_SECONDS = 300;

const TAGS = {
  site: "site",
  members: "members",
  activities: "activities",
  gallery: "gallery",
} as const;

export class ApiUnavailableError extends Error {}

async function fetchApi<T>(path: string, tag: string): Promise<T | null> {
  const baseUrl = env.API_BASE_URL.replace(/\/$/, "");
  try {
    const response = await fetch(`${baseUrl}/api/v1${path}`, {
      next: { revalidate: REVALIDATE_SECONDS, tags: [tag] },
      headers: { accept: "application/json" },
    });
    if (!response.ok) {
      console.error(`API ${path} responded ${response.status}`);
      return null;
    }
    return (await response.json()) as T;
  } catch (error) {
    console.error(`API ${path} unreachable:`, error);
    return null;
  }
}

export async function getSite(): Promise<SiteResponse | null> {
  return fetchApi<SiteResponse>("/site", TAGS.site);
}

export async function getMembers(
  query: { period?: "current" | "all"; limit?: number } = {},
): Promise<MemberResponse[]> {
  const params = new URLSearchParams();
  if (query.period) params.set("period", query.period);
  if (query.limit) params.set("limit", String(query.limit));
  const response = await fetchApi<ListResponse<MemberResponse>>(
    `/members?${params.toString()}`,
    TAGS.members,
  );
  return response?.data ?? [];
}

export async function getMemberBySlug(
  slug: string,
): Promise<MemberResponse | null> {
  const response = await fetchApi<{ data: MemberResponse }>(
    `/members/${encodeURIComponent(slug)}`,
    TAGS.members,
  );
  return response?.data ?? null;
}

export async function getActivities(
  query: { year?: string; featured?: boolean; limit?: number } = {},
): Promise<ActivityResponse[]> {
  const params = new URLSearchParams();
  if (query.year) params.set("year", query.year);
  if (query.featured !== undefined)
    params.set("featured", String(query.featured));
  if (query.limit) params.set("limit", String(query.limit));
  const response = await fetchApi<ListResponse<ActivityResponse>>(
    `/activities?${params.toString()}`,
    TAGS.activities,
  );
  return response?.data ?? [];
}

export async function getActivityBySlug(
  slug: string,
): Promise<ActivityResponse | null> {
  const response = await fetchApi<{ data: ActivityResponse }>(
    `/activities/${encodeURIComponent(slug)}`,
    TAGS.activities,
  );
  return response?.data ?? null;
}

export async function getGallery(limit = 6): Promise<GalleryImage[]> {
  const response = await fetchApi<{ data: GalleryImage[] }>(
    `/gallery?limit=${limit}`,
    TAGS.gallery,
  );
  return response?.data ?? [];
}
