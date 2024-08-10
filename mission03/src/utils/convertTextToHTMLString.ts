export function convertHTMLToText(htmlString: string): string {
  return htmlString
    .replace(/<[^>]+>/g, ($1) => {
      if ($1.includes("/")) return "\n\n";
      return "";
    })
    .trim();
}

export function convertTextToHTMLString(
  text: string,
  tagName: string = "p"
): string {
  const match = /\s+/g.exec(text);
  if (!match) {
    return "";
  }
  return match.input
    .split("\n")
    .filter(Boolean)
    .reduce(
      (htmlString, text) => htmlString + `<${tagName}>${text}</${tagName}>`,
      ""
    );
}
