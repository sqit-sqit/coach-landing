# SEO Checklist - Status Implementacji

## ✅ 1. Metadata podstawowe
- [x] Title tag w root layout
- [x] Title tags per strona (home, bogoban, systemic-constellations, privacy, terms, login, signup)
- [x] Meta description per strona
- [x] Dynamiczne metadata z uwzględnieniem locale
- [x] Keywords (dodane dla wszystkich stron)

## ✅ 2. Open Graph & Social Media
- [x] Open Graph tags (og:title, og:description, og:image, og:url)
- [x] Twitter Card tags
- [x] Obrazy social (1200x630px) - dynamiczne PNG generowanie

## ✅ 3. Structured Data (JSON-LD)
- [x] Organization schema
- [x] WebSite schema z SearchAction
- [x] BreadcrumbList (dla wszystkich stron)
- [x] FAQPage schema (dla sekcji FAQ)
- [x] Article schema (dla Latest News)

## ✅ 4. URL & Routing
- [x] Canonical URLs per strona
- [x] Hreflang tags (EN/PL)
- [x] 301 redirects dla / → /en (middleware)
- [x] Correct URL structure (`/[locale]/...`)

## ✅ 5. Technical SEO
- [x] robots.txt (dynamiczny)
- [x] XML sitemap (generowanie dynamiczne)
- [x] Sitemap index z wersjami językowymi
- [x] Optymalizacja obrazów (alt texts, lazy loading, sizes, aspect-ratio)
- [x] Semantyczny HTML (h1–h6, header, nav, main, footer)

## ✅ 6. Performance & Core Web Vitals
- [x] Lazy loading obrazów (next/image z fill)
- [x] Optymalizacja fontów (display: swap, preload)
- [x] Minifikacja CSS/JS (Next.js domyślnie)
- [x] Image optimization (WebP/AVIF, responsive, sizes)
- [x] LCP optimization (priority dla hero images)
- [x] CLS optimization (aspect-ratio dla wszystkich obrazów)
- [x] FID/INP optimization (dynamic imports dla below-fold)

## ⚠️ 7. Content SEO
- [x] Unikalny H1 per strona
- [x] Nagłówki H2–H6 w hierarchii (85 nagłówków w 23 plikach)
- [x] Alt text dla wszystkich obrazów
- [x] Internal linking między stronami
- [x] Breadcrumbs (wizualne)

## ✅ 8. Mobile SEO
- [x] Viewport meta tag (Next.js domyślnie dodaje)
- [x] Mobile-friendly design (responsive)
- [x] Touch targets min 44x44px - **ZROBIONE** (wszystkie przyciski, linki, ikony, checkboxy)

## ✅ 9. Security & Trust
- [ ] HTTPS (do sprawdzenia na produkcji)
- [x] Security headers (X-Frame-Options, X-Content-Type-Options, HSTS, etc.) - **ZROBIONE**
- [x] Privacy Policy link w footer
- [x] Terms of Use link w footer

## ⚠️ 10. Analytics & Tracking
- [ ] Google Analytics / GTM - **DO DODANIA**
- [ ] Google Search Console verification - **DO SKONFIGUROWANIA**
- [ ] Meta verification (opcjonalnie)

---

## 📊 Podsumowanie
- **Zrobione: 39/42 punktów (93%)**
- **Do sprawdzenia: 2 punkty (HTTPS na produkcji, Search Console)**
- **Do dodania: 1 punkt (Google Analytics)**

## 🎯 Następne kroki (priorytet):

1. ✅ **Security headers** - DODANE
2. ✅ **Touch targets** - POPRAWIONE (wszystkie elementy mają min 44x44px)
3. **Google Analytics/GTM** - dodać tracking code
4. **Google Search Console** - skonfigurować po deploy

