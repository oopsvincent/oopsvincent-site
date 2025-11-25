// components/blog/MDXComponents.tsx
import React from "react";

// Optional custom components (placeholder for now)
const CodeBlock = (props: React.ComponentProps<"pre">) => (
  <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto" {...props} />
);

const Callout = ({ children, type = "info" }: { children: React.ReactNode; type?: "info" | "warning" | "danger" }) => {
  const baseStyle = "border-l-4 p-4 my-4";
  const color = {
    info: "bg-blue-100 border-blue-500 text-blue-900",
    warning: "bg-yellow-100 border-yellow-500 text-yellow-900",
    danger: "bg-red-100 border-red-500 text-red-900",
  }[type];

  return <div className={`${baseStyle} ${color}`}>{children}</div>;
};

// Map MDX tags to custom components
export const MDXComponents = {
  h1: (props: React.ComponentProps<"h1">) => <h1 className="text-3xl font-bold mb-4" {...props} />,
  h2: (props: React.ComponentProps<"h2">) => <h2 className="text-2xl font-semibold mb-4 mt-6" {...props} />,
  p: (props: React.ComponentProps<"p">) => <p className="text-gray-300 leading-relaxed mb-4" {...props} />,
  a: (props: React.ComponentProps<"a">) => <a className="text-blue-400 underline" {...props} />,
  pre: CodeBlock,
  Callout,
};
