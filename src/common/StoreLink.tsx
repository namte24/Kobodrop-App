import { ButtonLinkProps } from "./ButtonLink";

function StoreLink({
  href,
  className,
  target,
  logo,
  UpperText,
  LowerText,
}: ButtonLinkProps) {
  return (
    <a href={href} className={className} target={target}>
      <img src={logo} alt={`${LowerText}`} className="w-5" />
      <div className="">
        <p className="text-xs">{UpperText}</p>
        <p>{LowerText}</p>
      </div>
    </a>
  );
}

export default StoreLink;
