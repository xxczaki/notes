import sanitizeHtml from 'sanitize-html';

// Super simple, REGEX-based markdown parser, can be extended if needed.
export const renderToMarkdown = (content: string): string => {
	const parsed = content
		.replaceAll(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
		.replaceAll(/\*(.*?)\*/g, '<em>$1</em>')
		.replaceAll(/\n/g, '<br/>');

	// Sanitize the HTML to prevent XSS attacks
	return sanitizeHtml(`<p>${parsed}</p>`);
};
