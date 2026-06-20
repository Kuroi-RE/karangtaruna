/**
 * Centralized schema.org structured data (JSON-LD) for the site.
 * Coordinates derived from the embedded village map: lat -7.5333, lng 111.0553.
 */

export const SITE_URL = "https://mekarjadi.vercel.app";
const ORG_ID = `${SITE_URL}/#organization`;
const CONTACT_EMAIL = "kartarmj@gmail.com";

const SAME_AS = [
  "https://www.instagram.com/mekarjadi.offc/",
  "https://linktr.ee/kartarmj",
];

export const organizationSchema: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORG_ID,
  name: "Karang Taruna Mekar Jadi",
  alternateName: "Kartar Mekar Jadi Domas",
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.ico`,
  email: CONTACT_EMAIL,
  description:
    "Organisasi kepemudaan Dusun Domas yang berfokus pada pemberdayaan pemuda, kegiatan sosial, dan pembangunan masyarakat.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dusun Domas",
    addressRegion: "Jawa Timur",
    addressCountry: "ID",
  },
  sameAs: SAME_AS,
};

export const websiteSchema: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Karang Taruna Mekar Jadi",
  inLanguage: "id-ID",
  publisher: { "@id": ORG_ID },
};

export const localBusinessSchema: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "NGO",
  "@id": ORG_ID,
  name: "Karang Taruna Mekar Jadi",
  url: SITE_URL,
  email: CONTACT_EMAIL,
  image: `${SITE_URL}/images/172024/1.jpg`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dusun Domas",
    addressRegion: "Jawa Timur",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -7.533345,
    longitude: 111.055309,
  },
  sameAs: SAME_AS,
};

/** Build a BreadcrumbList schema from an ordered list of crumbs. */
export function breadcrumbSchema(
  items: { name: string; path: string }[],
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export type EventInput = {
  name: string;
  startDate: string; // ISO 8601
  description?: string;
  status?: "scheduled" | "completed";
};

/** Build an Event schema item for the /event page. */
export function eventSchema(e: EventInput): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: e.name,
    startDate: e.startDate,
    eventStatus:
      e.status === "completed"
        ? "https://schema.org/EventScheduled"
        : "https://schema.org/EventScheduled",
    eventAttendanceMode:
      "https://schema.org/OfflineEventAttendanceMode",
    description: e.description,
    location: {
      "@type": "Place",
      name: "Dusun Domas",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dusun Domas",
        addressRegion: "Jawa Timur",
        addressCountry: "ID",
      },
    },
    organizer: { "@type": "Organization", name: "Karang Taruna Mekar Jadi", url: SITE_URL },
  };
}
