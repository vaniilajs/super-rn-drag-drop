const { BASE_URL: ASTRO_BASE_URL } = import.meta.env;

export const BASE_URL = ASTRO_BASE_URL.replace(/"/g, "");

export const SITE = {
  title: "React Native DND",
  description: "Your website description.",
  defaultLanguage: "en-us",
} as const;

// export const OPEN_GRAPH = {
//   image: {
//     src: "https://github.com/withastro/astro/blob/main/.github/assets/banner.png?raw=true",
//     alt:
//       "astro logo on a starry expanse of space," +
//       " with a purple saturn-like planet floating in the right foreground",
//   },
//   twitter: "astrodotbuild",
// };

export const KNOWN_LANGUAGES = {
  English: "en",
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_REPO_URL = `https://github.com/mgcrea/react-native-dnd`;
export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/tree/main/examples/docs`;

// See "Algolia" section of the README for more information.
// export const ALGOLIA = {
//   indexName: "XXXXXXXXXX",
//   appId: "XXXXXXXXXX",
//   apiKey: "XXXXXXXXXX",
// };

// export type Sidebar = Record<
//   (typeof KNOWN_LANGUAGE_CODES)[number],
//   Record<string, { text: string; link: string }[]>
// >;
// export const SIDEBAR: Sidebar = {
//   en: {
//     "Section Header": [
//       { text: "Introduction", link: "en/introduction" },
//       { text: "Page 2", link: "en/page-2" },
//       { text: "Page 3", link: "en/page-3" },
//       { text: "Quickstart", link: "en/quickstart" },
//       { text: "Quickstart 2", link: "en/quickstart2" },
//     ],
//     "Another Section": [{ text: "Page 4", link: "en/page-4" }],
//   },
// };
