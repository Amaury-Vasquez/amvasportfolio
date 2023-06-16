import Link from "next/link";
import { FC } from "react";
import { Button } from "@/components";

const Header: FC = () => (
  <header>
    <Link href="/">Hello</Link>
    <nav>
      <Link href="/about">¿Qué es Hello?</Link>
      <Link href="/auth" tabIndex={-1}>
        <Button variant="gray">Iniciar sesión</Button>
      </Link>
    </nav>
  </header>
);

export default Header;
