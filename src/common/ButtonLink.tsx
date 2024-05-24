export interface ButtonLinkProps {
  children?: React.ReactNode;
  href: string;
  className?: string;
  target?: string;
  logo?: string;
  UpperText?: string;
  LowerText?: string;
}

const ButtonLink = ({ children, href, className, target }: ButtonLinkProps) => {
  return (
    <a
      href={href}
      children={children}
      className={className}
      target={target}
    ></a>
  );
};

export default ButtonLink;
