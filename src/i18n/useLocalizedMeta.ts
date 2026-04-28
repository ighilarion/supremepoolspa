import { useEffect } from "react";

type MetaInput = {
  title: string;
  description: string;
};

function setMetaByName(name: string, content: string) {
  const el = document.querySelector(`meta[name="${name}"]`);
  if (el) el.setAttribute("content", content);
}

function setMetaByProperty(property: string, content: string) {
  const el = document.querySelector(`meta[property="${property}"]`);
  if (el) el.setAttribute("content", content);
}

export function useLocalizedMeta({ title, description }: MetaInput) {
  useEffect(() => {
    document.title = title;
    setMetaByName("description", description);
    setMetaByProperty("og:title", title);
    setMetaByProperty("og:description", description);
    setMetaByName("twitter:title", title);
    setMetaByName("twitter:description", description);
  }, [description, title]);
}
