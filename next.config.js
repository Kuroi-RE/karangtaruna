/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/**
 * MEDIA_HOSTNAMES menerima daftar dipisah koma dengan dua bentuk:
 *   - "127.0.0.1:54321"  -> http lokal dengan port eksplisit (Supabase lokal)
 *   - "**.supabase.co"   -> https wildcard (proyek hosted)
 *
 * @param {string | undefined} raw
 */
function toRemotePatterns(raw) {
  return (raw ?? "**.supabase.co")
    .split(",")
    .map((entry) => entry.trim())
    .filter(Boolean)
    .map(
      /**
       * @param {string} entry
       * @returns {import("next/dist/shared/lib/image-config").RemotePattern}
       */
      (entry) => {
        if (entry.includes("*")) {
          return { protocol: "https", hostname: entry, pathname: "/**" };
        }
        const [hostname, port] = entry.split(":");
        return {
          protocol: "http",
          hostname: hostname ?? entry,
          port: port ?? undefined,
          pathname: "/**",
        };
      },
    );
}

/** @type {import("next").NextConfig} */
const config = {
  images: {
    remotePatterns: toRemotePatterns(process.env.MEDIA_HOSTNAMES),
    // Storage Supabase lokal (dev) dilayani dari 127.0.0.1; produksi memakai
    // host hosted sehingga opsi ini aman dimatikan di sana.
    dangerouslyAllowLocalIP: true,
  },
};

export default config;
