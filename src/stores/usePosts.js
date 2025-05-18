import matter from "gray-matter";

export function usePosts() {
  const postFiles = import.meta.glob("../assets/content/posts/*.md", {
    eager: true,
  });

  const posts = Object.entries(postFiles).map(([path, module]) => {
    const slug = path.split("/").pop().replace(".md", "");

    const data =
      module.frontmatter ||
      module.metadata ||
      (module.default && module.default.frontmatter) ||
      (module.default && module.default.metadata);

    let fm = data;
    if (!fm) {
      const content =
        typeof module.default === "string"
          ? module.default
          : typeof module.default?.source === "string"
            ? module.default.source
            : typeof module.source === "string"
              ? module.source
              : "";
      fm = matter(content).data;
    }

    return {
      slug,
      title: fm?.title || "Sem título",
      date: fm?.date || "0000-00-00",
      description: fm?.description || "",
      component: module.default,
    };
  });

  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}
