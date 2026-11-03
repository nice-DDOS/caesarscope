# CaesarScope — Security review

**Review date:** 2026-11-03  
**Scope:** Static source code and browser-based local tests of the files in this repository.  
**Not included:** Public-domain / hosting-provider penetration test (not deployed at review time); third-party GitHub or Netlify account configuration and live headers after publication. Browser navigation to localhost and file:// was blocked by the test environment, so browser functional testing used an in-memory DOM with the same HTML/CSS/JS but without enforcing the deployment CSP. Browser CSP response-header enforcement must be retested on the actual published website.

## Risk summary

This is a static site with no backend, sessions, authentication, cookies, database, API keys, package dependencies, analytics, or external fetches. This significantly reduces, but does not eliminate, risk. No Critical or High issue was identified in the locally reviewed source and tests. **This is not a guarantee that no vulnerability exists**; a live deployment needs its own verification.

## Verification performed

- `node --check app.js`: syntax passed.
- At the original review, static source scan found **0** calls to `eval`, `new Function`, `innerHTML`, `outerHTML`, `insertAdjacentHTML`, `document.write`, `fetch`, `XMLHttpRequest`, `WebSocket`, and **0** obvious embedded API tokens / private keys in the scanned code.
- HTML structural checks: no external scripts, iframes, forms or inline event handlers; local stylesheet and script only.
- Browser-based (in-memory) smoke tests: `KHOOR ZRUOG → HELLO WORLD` (`key 3`), 26 candidate rows, RTL/LTR switching, challenge generation/reveal/use, and injected `<img onerror>` payload rendered as ordinary text. No uncaught JS exceptions.
- Layout checks at **320, 390, 820 and 1440 px** detected no horizontal overflow. These are smoke tests, not an exhaustive device/browser compatibility matrix.
- Share-link unit checks using the actual share function with a mocked origin: HTTPS URL includes ciphertext only, `file://` fallback copies ciphertext, and 301-character URL challenges are rejected.
- Public hosting / response headers / live challenge URL were **not** tested because the website had not been deployed.

## Hardening

- Only trusted local HTML/CSS/JS files are loaded.
- Untrusted plaintext, ciphertext, and query-string contents are always written through `textContent`/`.value` (no user-controlled HTML parsing).
- Restrictive CSP in the HTML meta tag and Netlify `_headers`; JS and CSS are external files to avoid `unsafe-inline`.
- Netlify adds headers denying framing (clickjacking), MIME sniffing and browser permissions. GitHub Pages does not honor `_headers`, and header-level settings there are controlled by GitHub.
- Limit input to 5000 characters and shared challenge ciphertext to 300 characters; overlong URL input is ignored.
- Shared URL carries **ciphertext only**, never secret key or original message; use no real secrets because Caesar cipher is trivially reversible.
- No JavaScript dependencies, no `eval`, no external forms, and no secrets embedded. The optional Almarai font is loaded from Google Fonts; it does not receive ciphertext input.

## Residual caveats

- A challenge URL itself may appear in browser history, referrers, chat previews and hosting access logs. A `Referrer-Policy: no-referrer` header/meta reduces outgoing referrer exposure but does not stop server logging.
- This is an educational attack simulator. The per-key animation is deliberate pacing, not a real-time security benchmark.
- Language scoring is a heuristic. The right key is among all 26 outputs, but best-ranked may be wrong, especially for short/nonsense text.
- Inspect actual HTTPS certificate, CSP response headers, cross-device behavior and deployed URL **after publishing**. Do not claim an external scan occurred before a live site exists.

## Reporting security issues

Use the repository's GitHub Issues for non-sensitive bug reports. For sensitive findings, avoid publicly posting exploit details; contact the repository maintainer privately via GitHub if a private reporting channel is available.


## CTF update review
- CTF prefix field is read as ordinary text only; candidate strings render with `textContent`, never `innerHTML`.
- Optional prefix is not serialized into shared challenge URLs; no new external requests, dependencies, or remote APIs.
- Review scope is source inspection and local browser checks, not a hosted penetration test.

## Vigenère attack extension — review 2026-11-03

- Added a separate local `vigenere.js` module and a two-option Caesar / Vigenère mode selector.
- Vigenère uses Kasiski repeated-trigram evidence, Index of Coincidence, per-column chi-square, candidate-key search, and English-word ranking. It does **not** exhaust all possible Vigenère passwords or guarantee recovery.
- Input remains limited by the HTML `maxlength` (5,000 characters); ranking reads at most the first 1,600 characters and output is written through `textContent`.
- No additional API, analytics, database, credentials, web requests, dynamic HTML, or new third-party JavaScript was introduced.
- Source scan covered `index.html`, `style.css`, `app.js`, `vigenere.js`, and `_headers`. Both JavaScript files passed syntax checks; no use of `eval`, `new Function`, `innerHTML`, `fetch`, `XMLHttpRequest`, or local storage was found.
- In-memory DOM smoke tests: Caesar known sample (key 3), Vigenère long English sample (key LEMON), mode switching, English / Arabic translation, and Vigenère challenge generation / key reveal completed.
- Three additional prepared long English messages with known Vigenère keywords `LEMON`, `CIPHER`, and `SECURITY` were ranked correctly in local deterministic checks. These are test cases, not a statistical accuracy guarantee.
- **Not independently verified:** Actual public GitHub Pages response headers, live phone screenshots, penetration test against the deployed website, or universal ciphertext recovery.
