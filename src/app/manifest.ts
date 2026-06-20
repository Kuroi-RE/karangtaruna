import { type MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Karang Taruna Mekar Jadi",
    short_name: "Mekar Jadi",
    description:
      "Organisasi kepemudaan Dusun Domas. Berkarya, berkegiatan, dan membangun masyarakat bersama.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a2540",
    theme_color: "#e63946",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
