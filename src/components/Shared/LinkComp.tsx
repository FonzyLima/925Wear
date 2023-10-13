import Link from "next/link";

interface LinkProps {
  variant?: "link" | "a";
  text: string;
  link?: HTMLLinkElement | string;
}

const LinkComp = ({ text, link = "", variant = "link" }: LinkProps) => {
  if (variant === "link") {
    return (
      <Link href={link} className="link-effect pb-[3px]">
        {text}
      </Link>
    );
  }

  if (variant === "a") {
    return (
      <Link
        rel="noopener noreferrer"
        target="_blank"
        href={link}
        className="font-normal link-effect"
      >
        {text}
      </Link>
    );
  }
};
export default LinkComp;
