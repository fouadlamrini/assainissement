import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// Lazy-loaded page components for route-based code splitting
const Home = lazy(() => import("./pages/Home"));
const SolutionsTechniques = lazy(() => import("./pages/SolutionsTechniques"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const MentionsLegales = lazy(() => import("./pages/MentionsLegales"));
const ConditionsGeneralesVente = lazy(() => import("./pages/ConditionsGeneralesVente"));

/**
 * ScrollToTop utility component
 * Resets the page to the top on route changes, or scrolls to the
 * matching section (hash anchor) when the URL contains one.
 * Retries briefly so the target exists even with lazy-loaded pages.
 */
function ScrollToTop() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    let retryTimer = null;

    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      const scrollToHash = (attempt) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
        if (attempt < 20) {
          retryTimer = setTimeout(() => scrollToHash(attempt + 1), 50);
        }
      };
      scrollToHash(0);
    } else {
      window.scrollTo(0, 0);
    }

    return () => {
      if (retryTimer) clearTimeout(retryTimer);
    };
  }, [pathname, hash, key]);

  return null;
}

/**
 * Page loading fallback UI
 * Prevents Cumulative Layout Shift (CLS) during dynamic chunk fetches
 */
function PageLoader() {
  return (
    <div
      className="flex min-h-[60vh] w-full items-center justify-center p-8"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="flex flex-col items-center space-y-4">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-sky-200 border-t-sky-600"></div>
        <p className="text-sm font-medium text-slate-600">Chargement de Letraci...</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <main id="main-content" tabIndex={-1} className="outline-none">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/solutions-techniques"
              element={<SolutionsTechniques />}
            />
            <Route
              path="/privacy-policy"
              element={<PrivacyPolicy />}
            />
            <Route
              path="/mentions-legales"
              element={<MentionsLegales />}
            />
            <Route
              path="/conditions-generales-de-vente"
              element={<ConditionsGeneralesVente />}
            />
            {/* Catch-all route fallback to prevent dead ends */}
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </main>
    </BrowserRouter>
  );
}

export default App;