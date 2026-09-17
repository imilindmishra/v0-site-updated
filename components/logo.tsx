import Image from "next/image"
import logo from "@/public/logo.png"

/** LogoMark — the "Ai" brand image (transparent PNG, square). Favicon is app/icon.png, derived from the same file. */
export function LogoMark({ className = "" }: { className?: string }) {
  return <Image src={logo} alt="" priority className={className} />
}
