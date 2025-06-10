import { type LinkComponent } from "@tanstack/react-router";
export default function Header({
  HeaderChild,
  LinkComponent,
  routesToHide,
}: {
  LinkComponent: LinkComponent<"a", string>;
  HeaderChild: React.FC;
  routesToHide: string[];
}) {
  if (typeof window !== "undefined") {
    const url = new URL(window.location.href);
    const shouldHide = routesToHide.some((p) => url.pathname.includes(p));
    if (shouldHide) {
      return null;
    }
  }
  return (
    <>
      <nav className="flex items-center justify-between p-2 md:text-2xl px-4 py-2 text-xl">
        <LinkComponent to="/">
          <span className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
            S
          </span>
        </LinkComponent>
        <HeaderChild />
      </nav>
    </>
  );
}
