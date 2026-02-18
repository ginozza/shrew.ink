import Image from "next/image"

export function ShrewLogo({ size = 28 }: { size?: number }) {
  return (
    <Image
      src="/images/shrew-logo.svg"
      alt=""
      width={size}
      height={size}
      className="brightness-0 invert"
      aria-hidden="true"
    />
  )
}
