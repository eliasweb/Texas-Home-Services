import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { TexasAccent } from "@/components/marketing/TexasAccent";

export default function NotFound() {
  return (
    <Container className="relative py-24 text-center">
      <TexasAccent
        className="pointer-events-none absolute left-1/2 top-12 -translate-x-1/2 text-orange/10 h-40 w-40"
        opacity={0.6}
      />
      <p className="font-display text-7xl font-bold text-navy-deep">404</p>
      <h1 className="mt-3 font-display text-2xl font-semibold text-navy-deep">
        We couldn&apos;t find that one.
      </h1>
      <p className="mx-auto mt-2 max-w-md text-muted">
        That page may have moved, or the URL was off by a letter. Try one of these instead:
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Button asChild>
          <Link href="/">Go home</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/services">Browse services</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/cities">Browse cities</Link>
        </Button>
      </div>
    </Container>
  );
}
