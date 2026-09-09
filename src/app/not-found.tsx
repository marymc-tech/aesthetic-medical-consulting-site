import { ButtonLink, Section } from "@/components/ui";

export const metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <Section>
      <div className="mx-auto max-w-xl text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 text-[40px] font-medium text-charcoal-900">That page isn&apos;t here.</h1>
        <p className="mt-4 text-[16px] text-taupe-600">
          The link may be out of date. Try the services page, or start with a discovery call.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/">Go home</ButtonLink>
          <ButtonLink href="/medical-director-services" variant="secondary">Medical Director Services</ButtonLink>
        </div>
      </div>
    </Section>
  );
}
