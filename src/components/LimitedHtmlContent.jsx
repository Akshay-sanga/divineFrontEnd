import React from "react";

const LimitedHtmlContent = ({ html, wordLimit = 30, className }) => {
  // Function to strip tags and limit words
  const truncateHtml = (html, limit) => {
    const textOnly = html.replace(/<[^>]+>/g, ""); // remove HTML tags
    const words = textOnly.trim().split(/\s+/);

    if (words.length <= limit) return html;

    const limitedText = words.slice(0, limit).join(" ") + "...";
    return limitedText;
  };

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{
        __html: truncateHtml(html, wordLimit),
      }}
    />
  );
};

export default LimitedHtmlContent;
