export type Member = {
  slug: string;
  name: string;
  role: string;
  /** Username Instagram tanpa simbol @. */
  instagram: string;
  photo: string;
  memberNo: string;
};

/**
 * Data sementara kepengurusan: nama, akun, foto, dan nomor masih placeholder
 * sampai data resmi dikumpulkan. Ganti nilai di sini tanpa menyentuh komponen.
 */
export const members: readonly Member[] = [
  {
    slug: "anggota-01",
    name: "Anggota 01",
    role: "Ketua",
    instagram: "anggota01",
    photo: "/images/172024/3.jpg",
    memberNo: "MJ-01",
  },
  {
    slug: "anggota-02",
    name: "Anggota 02",
    role: "Wakil Ketua",
    instagram: "anggota02",
    photo: "/images/172024/5.jpg",
    memberNo: "MJ-02",
  },
  {
    slug: "anggota-03",
    name: "Anggota 03",
    role: "Sekretaris",
    instagram: "anggota03",
    photo: "/images/172023/2.jpg",
    memberNo: "MJ-03",
  },
  {
    slug: "anggota-04",
    name: "Anggota 04",
    role: "Bendahara",
    instagram: "anggota04",
    photo: "/images/172024/9.jpg",
    memberNo: "MJ-04",
  },
  {
    slug: "anggota-05",
    name: "Anggota 05",
    role: "Humas",
    instagram: "anggota05",
    photo: "/images/172023/4.jpg",
    memberNo: "MJ-05",
  },
] as const;

export function findMember(slug: string): Member | undefined {
  return members.find((member) => member.slug === slug);
}
