function limitHtmlWords(html, maxWords) {
  // Strip HTML tags to count words
  const textOnly = html.replace(/<[^>]+>/g, '');
  const words = textOnly.trim().split(/\s+/);

  if (words.length <= maxWords) return html; // already short

  const limitedText = words.slice(0, maxWords).join(' ') + '...';
  // Wrap in <p> or leave plain depending on your design
  return `<p>${limitedText}</p>`;
}

export default limitHtmlWords;