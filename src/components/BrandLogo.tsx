import Image from "next/image";

type BrandLogoProps = {
  className?: string;
  imageClassName?: string;
  priority?: boolean;
};

export function BrandLogo({
  className = "",
  imageClassName = "h-11 w-auto object-contain",
  priority = false,
}: BrandLogoProps) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <Image
        src="/images/logo.png"
        alt="AQ Technical Services logo"
        width={180}
        height={140}
        priority={priority}
        className={imageClassName}
      />
    </span>
  );
}
