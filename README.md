# CaesarScope 🔐 — Classical Cipher Attack Lab

**Developed by Ammar Ahmed — Cybersecurity Researcher**  
**المشروع من إعداد وتطوير عمار أحمد — باحث في الأمن السيبراني**  
GitHub: [@nice-DDOS](https://github.com/nice-DDOS)

**Live site:** https://nice-ddos.github.io/caesarscope/

A free, bilingual (Arabic/English), mobile-friendly, client-side teaching tool to attack **Caesar Cipher** and **Vigenère Cipher** *without knowing the secret key*.

## ⚔️ Two attack modes

| Cipher | Method | Key space / limits |
|---|---|---|
| **Caesar** | Exhaustive brute force over all 26 shifts; rank plaintexts using English statistics and dictionary evidence. | Every shift is tested. The correct plaintext cannot always be identified from ciphertext alone. |
| **Vigenère** | Ciphertext-only cryptanalysis: repeated-sequence evidence (Kasiski), Index of Coincidence, frequency analysis per key position, candidate-key search and English-language ranking. | Searches likely keyword keys up to a **maximum length of 16**, not all possible keys. Long, ordinary English text works much better than short text. |

### How to use (English)

1. Select **Caesar** or **Vigenère** at the top of the existing single-page form.
2. Paste **ciphertext**. No original plaintext or key is necessary.
3. Click **Break Cipher** / **Attack Vigenère Cipher**.
4. Inspect the likely plaintext, suggested key, and explanation.
5. Expand the optional list to compare candidates. You can also generate classroom challenges and share ciphertext-only challenge links.

**Vigenère demo:** Select Vigenère → **Long sample 1** → **Attack Vigenère Cipher**. The educational sample uses the keyword `LEMON`, which the analyzer should recover for this long English message.

**Caesar demo:** Select Caesar → enter `KHOOR ZRUOG` → **Break Cipher**. The suggested key is `3`; plaintext is `HELLO WORLD`.

### طريقة الاستخدام (عربي)

1. اختر **قيصر** أو **فينير** من نفس الصفحة.
2. الصق **النص المشفّر فقط**، من دون المفتاح أو النص الأصلي.
3. اضغط **اكسر الشفرة** وشاهد المفتاح والنص المرجّحين مع سبب الترشيح.
4. افتح قائمة النتائج الاختيارية للمقارنة، أو ولّد تحدّياً للطلاب وشارك رابط النص المشفّر.

**مهم:** في قيصر يتم اختبار المفاتيح الـ26 كاملة. أما فينير فالمفتاح كلمة، لذلك نستخدم تحليل Kasiski وIndex of Coincidence وتكرار الحروف للوصول إلى مرشحات قوية بدلاً من تجربة كل الكلمات الممكنة. النصوص القصيرة أو غير الإنجليزية قد تعطي نتائج غير دقيقة.

## 🛡️ Security and privacy

- Static HTML / CSS / JavaScript only, no backend, login or paid AI API.
- Ciphertext analysis stays in the browser; the site does not send input to a server.
- Google Fonts is used for **Almarai** typography (font requests are separate from ciphertext analysis).
- User-supplied text is written into the interface as text, not interpreted as HTML.
- Challenge URLs embed ciphertext only, not the original plaintext or chosen key.
- Input is bounded; the Vigenère analyzer uses up to 1,600 characters for ranking.
- See [SECURITY_AUDIT.md](SECURITY_AUDIT.md) for the scope and limits of security checks.

## 🧮 Core idea

Caesar, for one letter: `P = (C − K) mod 26`.

Vigenère, for every English letter position `i`: `P_i = (C_i − K_(i mod m)) mod 26`, where `m` is the keyword length. Nonletters are preserved, and the key advances only on English A–Z characters.

**A likely plaintext is not mathematical proof of the original message.** A known fragment, external context, or challenge's revealed answer can independently verify a guess.

## 🚀 Hosting

The site is ready for GitHub Pages (publish `main` branch, `/(root)`).

Main files:
- `index.html` — one-page bilingual UI
- `style.css` — responsive design + Almarai typography
- `app.js` — Caesar brute force, UI controls, sharing and challenges
- `vigenere.js` — standalone offline Vigenère cryptanalysis engine
- `_headers` — optional security headers when hosted on compatible platforms
- `matlab/` — original Caesar academic lab materials

The `_headers` file is not processed by GitHub Pages; a Content-Security-Policy meta tag is present in `index.html`.

## License

MIT — see [LICENSE](LICENSE). Copyright © 2026 Ammar Ahmed (nice-DDOS).
