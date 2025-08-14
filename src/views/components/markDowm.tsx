import React from "react";
import ReactMarkdown from "react-markdown";
import "highlight.js/styles/github.css"; // 任选高亮主题

interface Props {
  content: string;
}

const MarkdownRenderer: React.FC<Props> = ({ content }) => (
  <div className="markdown-body">
    <ReactMarkdown>{content}</ReactMarkdown>
  </div>
);

export default MarkdownRenderer;
