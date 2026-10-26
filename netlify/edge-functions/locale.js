const COOKIE_NAME = "portfolio_lang";

function savedLanguage(request) {
  const cookie = request.headers.get("cookie") ?? "";
  const match = cookie.match(/(?:^|;\s*)portfolio_lang=(es|en)(?:;|$)/);
  return match?.[1];
}

function redirect(url, language) {
  const headers = new Headers({
    Location: url.toString(),
    "Cache-Control": "private, no-store",
    Vary: "Accept-Language, Cookie",
  });
  if (language) {
    headers.set(
      "Set-Cookie",
      `${COOKIE_NAME}=${language}; Path=/; Max-Age=31536000; SameSite=Lax; Secure; HttpOnly`,
    );
  }
  return new Response(null, { status: 302, headers });
}

export default function locale(request) {
  const url = new URL(request.url);

  if (url.pathname === "/set-language/") {
    const language = url.searchParams.get("lang");
    const next = url.searchParams.get("next") ?? "/";
    const destination = new URL(next, url);
    if ((language !== "es" && language !== "en") || !next.startsWith("/") || destination.origin !== url.origin) {
      return redirect(new URL("/", url));
    }
    return redirect(destination, language);
  }

  if (url.pathname !== "/") return;

  const preference = savedLanguage(request);
  if (preference === "es") return;
  if (preference === "en") return redirect(new URL("/en/", url));

  const primaryLanguage = request.headers.get("accept-language")?.split(",", 1)[0].split(";", 1)[0].trim().toLowerCase();
  // A missing header is common for crawlers; keep the canonical Spanish root crawlable.
  if (!primaryLanguage || primaryLanguage === "es" || primaryLanguage.startsWith("es-")) return;
  return redirect(new URL("/en/", url));
}
