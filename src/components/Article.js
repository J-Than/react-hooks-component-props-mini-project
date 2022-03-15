import React from "react";

function Article({
  title,
  date = "January 1, 1970",
  preview, 
  minutes
}) {

  const minEmoji = () => {
    
    const emoji = minutes >= 30 ? "🍱" : "☕️";
    let emojiString = emoji;

    for (let i=0; i < Math.floor((minutes-1)/(emoji==="☕️" ? 5 : 10)); i++) {
      emojiString = emojiString.concat(emoji);
    }

    return emojiString;
  }

  return <article>
    <h3>{title}</h3>
    <small>{date} · {minEmoji()} {minutes} min read</small>
    <p>{preview}</p>
  </article>
}

export default Article;