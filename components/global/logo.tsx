import LogoImage from "@/public/images/global/logo.svg";
import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/">
      <Image src={LogoImage} alt="Logo" />
    </Link>
  );
}

export default Logo;
