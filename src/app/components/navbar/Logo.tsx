// components/Logo.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Logo: React.FC = () => (
  <Link href="/" passHref>
    <div className="flex items-center space-x-2">
      <Image
        src="/images/favicon.gif"
        alt="Logo favicon AMA"
        width={44}
        height={44}
        className="h-11 w-auto"
        loading="lazy"
      />
      <Image
        src="/images/logotipo.gif"
        alt="Logotipo AMA"
        width={150}
        height={50}
        className="h-11 w-auto hidden md:block"
        loading="lazy"
      />
    </div>
  </Link>
);

export default Logo;
