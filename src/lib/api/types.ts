// Bentuk respons API karangtaruna_api (sumber: src/*/dto/*.ts di proyek API).

export type SiteLink = {
  id: string;
  kind: string;
  label: string;
  url: string;
};

export type SiteResponse = {
  name: string;
  shortName: string;
  location: string;
  description: string;
  profile: string | null;
  vision: string | null;
  mission: string | null;
  profileImageUrl: string | null;
  siteUrl: string | null;
  currentPeriod: {
    id: string;
    name: string;
    startsOn: string;
    endsOn: string | null;
  } | null;
  links: SiteLink[];
};

export type MemberResponse = {
  slug: string;
  name: string;
  role: string;
  instagram: string | null;
  photoUrl: string | null;
  memberNo: string | null;
  bio: string | null;
};

export type ActivityImage = {
  url: string;
  alt: string | null;
};

export type ActivityResponse = {
  slug: string;
  title: string;
  summary: string | null;
  date: string;
  year: string;
  location: string | null;
  coverUrl: string | null;
  coverAlt: string | null;
  isFeatured: boolean;
  images: ActivityImage[];
};

export type GalleryImage = {
  url: string;
  alt: string | null;
  activitySlug: string;
  activityTitle: string;
};

export type ListResponse<T> = {
  data: T[];
  meta: { nextCursor: string | null; total?: number };
};
