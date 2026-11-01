import { type MetadataRoute } from "next";
import { SITE_URL } from "~/content/site";
import { getMembers } from "~/lib/api/client";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = [
    { path: "/", priority: 1, changeFrequency: "monthly" as const },
    { path: "/organisasi", priority: 0.8, changeFrequency: "monthly" as const },
    {
      path: "/program-kegiatan",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/keanggotaan",
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
    { path: "/kontak", priority: 0.6, changeFrequency: "yearly" as const },
  ];

  const members = await getMembers({ period: "all", limit: 100 });

  return [
    ...routes.map((route) => ({
      url: `${SITE_URL}${route.path}`,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...members.map((member) => ({
      url: `${SITE_URL}/keanggotaan/${member.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];
}
