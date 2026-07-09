export const WP_API_URL = (import.meta as any).env.VITE_WP_API_URL || "https://darkgray-curlew-850665.hostingersite.com/wp-json";

export async function fetchPageBySlug(slug: string) {
  try {
    const response = await fetch(`${WP_API_URL}/wp/v2/pages?slug=${slug}`);
    if (!response.ok) return null;
    const pages = await response.json();
    return pages[0] || null;
  } catch (error) {
    console.error(`Error fetching page with slug ${slug}:`, error);
    return null;
  }
}
