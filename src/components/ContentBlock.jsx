function ContentBlock({ block }) {
  if (block.type === "paragraph") {
    return (
      <p>
        {block.content.map((part, index) =>
          part.href ? (
            <a
              key={index}
              href={part.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {part.text}
            </a>
          ) : (
            <span key={index}>{part.text}</span>
          ),
        )}
      </p>
    );
  }
  if (block.type === "image") {
    return (
      <figure>
        <img src={block.src} alt={block.alt} className="img-fluid rounded" />
        <figcaption>{block.caption}</figcaption>
      </figure>
    );
  }
  return null;
}

export default ContentBlock;
