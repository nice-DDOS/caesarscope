(() => {
 'use strict';
 const $ = (id) => document.getElementById(id);
 const texts = {
  ar: {
   headlineLead:'اكسر',headlineFocus:'شفرة قيصر',headlineEnd:'بدون مفتاح',title:'اكسر شفرة قيصر بدون مفتاح',intro:'عندك رسالة مشفّرة؟ أدخلها، والأداة تجرّب جميع المفاتيح الـ26 (Brute Force) وترشّح النص الأصلي. ما تحتاج تعرف المفتاح ولا الرسالة الأصلية.',step1:'اكتب النص المشفّر',step2:'اضغط اكسر الشفرة',step3:'شوف النتيجة والسبب',inputTitle:'شنو الرسالة المشفّرة؟',noKey:'ما يحتاج مفتاح',inputLabel:'النص المشفّر (Ciphertext)',inputHint:'اكتب نصاً مشفّراً بالحروف الإنجليزية. إذا ما عندك، جرّب مثالاً جاهزاً.',examples:'أمثلة سريعة:',shortExample:'مثال قصير: JG',attackBtn:'⚡ اكسر الشفرة الآن',privacy:'التحليل يتم في متصفحك، ولا نحتفظ بالرسائل أو المفاتيح.',resultTitle:'النتيجة الأقرب للإنجليزية',possible:'✓ ترشيح، مو تأكيد',key:'المفتاح المرجّح',tested:'المفاتيح المجربة',why:'ليش الأداة رجّحت هاي النتيجة؟',copy:'نسخ النص الناتج',copied:'تم النسخ ✓',again:'جرّب نص ثاني',allKeys:'عرض جميع النتائج الـ26 (اختياري)',keysHint:'الأداة تختبر المفاتيح من 0 إلى 25. كلها صحيحة حسابياً؛ ترتيبها مجرد ترجيح لغوي.',colKey:'Key',colText:'Decrypted text',challengeTitle:'🎓 تريد تسوي تحدّي للطلاب؟ اضغط هنا',challengeIntro:'اكتب رسالة إنجليزية، والموقع يشفّرها بمفتاح عشوائي مخفي. أعطِ الطلاب النص المشفّر فقط، وخليهم يجربون الهجوم.',secretLabel:'الرسالة السرية (قبل التشفير)',generate:'🔒 ولّد تحدّياً بمفتاح مخفي',reveal:'كشف الجواب الصحيح',challengeMade:'هذا هو النص الذي تعطيه للطلاب:',useChallenge:'جرّب كسره بالأداة ↑',footer:'© 2026 CipherScope • إعداد وتطوير عمار أحمد — باحث في الأمن السيبراني',invalid:'أدخل نصاً مشفّراً يحتوي حروفاً إنجليزية (A–Z) أولاً.',invalidSecret:'اكتب رسالة إنجليزية أولاً حتى نقدر نشفّرها.',testing:'جارِ تجربة المفتاح {k} من 25…',whyWords:'النتيجة تحتوي كلمات إنجليزية معروفة مثل: {words}. هذا يساعد على ترجيحها.',whyStat:'هذه النتيجة الأقرب إحصائياً لأنماط الحروف الإنجليزية بين المفاتيح الـ26.',whyShort:'النص قصير جداً؛ عدة مفاتيح ممكن تعطي كلمات مفهومة، لذلك النتيجة غير مؤكدة. افتح جميع الاحتمالات وقارنها.',whyLong:'التحليل يعتمد على الكلمات الإنجليزية وتكرار الحروف. حتى لو النتيجة تبدو واضحة، ما نقدر نثبت أنها المقصودة بدون دليل إضافي.',keyLabel:'المفتاح',secretAnswer:'المفتاح الحقيقي: {k} — الرسالة: {text}',englishOnly:'ملاحظة: التشفير هنا يطبق على الحروف الإنجليزية A–Z فقط.',sharedHint:'🔗 تم تحميل النص المشفّر من رابط التحدّي. اضغط اكسر الشفرة!',shareChallenge:'🔗 انسخ رابط التحدّي',shareWarning:'رابط المشاركة يحتوي النص المشفّر فقط، وليس المفتاح أو النص الأصلي. لا تستخدم أسراراً حقيقية.',shareCopied:'تم نسخ رابط التحدّي ✓',cipherCopied:'قبل النشر، تم نسخ النص المشفّر فقط. رابط المشاركة يتفعّل بعد نشر الموقع.',shareTooLong:'النص طويل للرابط. استخدم تحدياً أقصر من 300 حرف.',shareFailed:'تعذّر النسخ تلقائياً؛ انسخ النص المشفّر يدوياً.',buttonReady:'⚡ اكسر الشفرة الآن',ctfOptions:'🎯 عندك Flag من CTF؟ إعداد اختياري',ctfPrefixLabel:'بادئة العلم (إذا تعرفها)',ctfPrefixHint:'مثلاً VOID أو HTB أو FLAG، بدون الأقواس. مو مفتاح ولا نص أصلي؛ هذه صيغة العلم المعروفة للتحدّي.',ctfResult:'أقرب احتمال لعلم CTF',ctfWhyPrefix:'صيغة العلم تطابق البادئة المتوقعة {prefix}، وهي دليل قوي لترجيح المفتاح، وليست برهاناً قاطعاً.',ctfWhyKnown:'هذه النتيجة تبدأ ببادئة CTF معروفة: {prefix}.',ctfWhyWords:'بعد تحويل رموز Leetspeak، ظهرت كلمات: {words}.',ctfWhyWeak:'اكتشفنا صيغة Flag، لكن الأدلة ضعيفة لتحديد المفتاح بثقة. افتح جميع النتائج الـ26 أو أدخل بادئة العلم المعروفة.',ctfAuto:'تم التعرف على صيغة CTF Flag؛ استُخدم تحليل مناسب للأعلام بدل تحليل النصوص الإنجليزية العادية.'
  },
  en: {
   headlineLead:'Break',headlineFocus:'Caesar Cipher',headlineEnd:'without the key',title:'Break Caesar Cipher without the key',intro:'Got encrypted text? Paste it here. The tool uses brute force to test all 26 keys and suggests the most likely original message. No key or plaintext required.',step1:'Enter ciphertext',step2:'Click Break Cipher',step3:'See the result and why',inputTitle:'What is the encrypted message?',noKey:'No key needed',inputLabel:'Ciphertext',inputHint:'Enter English-letter ciphertext. Don’t have any? Try one of the examples.',examples:'Quick examples:',shortExample:'Short example: JG',attackBtn:'⚡ Break Cipher',privacy:'Analysis runs in your browser. Messages and keys are not stored by this app.',resultTitle:'Most likely English plaintext',possible:'✓ Likely, not proven',key:'Likely key',tested:'Keys tested',why:'Why was this result chosen?',copy:'Copy plaintext',copied:'Copied ✓',again:'Try another message',allKeys:'See all 26 results (optional)',keysHint:'The tool tests keys 0–25. Every candidate is mathematically valid; ranking is only a language-based guess.',colKey:'Key',colText:'Decrypted text',challengeTitle:'🎓 Want a classroom challenge? Click here',challengeIntro:'Write an English message. The site encrypts it using a hidden random key. Give students only the ciphertext and let them attack it.',secretLabel:'Secret message (before encryption)',generate:'🔒 Create challenge with hidden key',reveal:'Reveal real answer',challengeMade:'Give this ciphertext to your classmates:',useChallenge:'Try breaking it above ↑',footer:'© 2026 CipherScope • Developed by Ammar Ahmed — Cybersecurity Researcher',invalid:'First enter ciphertext containing English letters (A–Z).',invalidSecret:'Enter an English message to create a challenge.',testing:'Trying key {k} of 25…',whyWords:'Recognizable English words include {words}. This supports the suggested result.',whyStat:'This candidate scores best against English letter patterns among the 26 keys.',whyShort:'This message is very short; different keys may produce meaningful text. The guess is uncertain. Compare all candidates.',whyLong:'The tool uses English words and letter frequency. Even a plausible result needs independent evidence for certainty.',keyLabel:'Key',secretAnswer:'Actual key: {k} — Message: {text}',englishOnly:'Note: this cipher operates on English A–Z letters only.',sharedHint:'🔗 Challenge ciphertext loaded from the link. Click Break Cipher!',shareChallenge:'🔗 Copy challenge link',shareWarning:'The link contains ciphertext only, not the key or original text. Never use real secrets.',shareCopied:'Challenge link copied ✓',cipherCopied:'Before publishing, only the ciphertext was copied. Links work on the live website.',shareTooLong:'Too long for a challenge link. Use a message under 300 characters.',shareFailed:'Could not copy automatically. Please copy the ciphertext manually.',buttonReady:'⚡ Break Cipher',ctfOptions:'🎯 Have a CTF flag? Optional setting',ctfPrefixLabel:'Expected flag prefix (if known)',ctfPrefixHint:'For example VOID, HTB or FLAG, without braces. This is the challenge flag format, not the secret key or plaintext.',ctfResult:'Most likely CTF flag candidate',ctfWhyPrefix:'The candidate matches the expected prefix {prefix}, strong evidence for this key but not absolute proof.',ctfWhyKnown:'This candidate starts with a recognized CTF prefix: {prefix}.',ctfWhyWords:'After normalizing leetspeak, these words were found: {words}.',ctfWhyWeak:'A flag-shaped message was detected, but evidence is weak. Review all 26 candidates or enter the known flag prefix.',ctfAuto:'CTF flag format detected; flag-aware ranking was used instead of ordinary English-text ranking.'
  }
 };

 const MODE_TX={
  ar:{
   caesar:'قيصر • Caesar',vigenere:'فينير • Vigenère',
   dualTitle:'شفرتي قيصر وفينير',
   dualIntro:'مختبر تفاعلي لكسر شفرات Caesar وVigenère بدون معرفة المفتاح. اختَر الشفرة، أدخل النص المشفّر، وشاهد النتيجة وتحليلها.',
   caesarHelp:'قيصر (Caesar): نجرّب المفاتيح الـ26 كلها، ثم نرتّب النتائج حسب الكلمات وتكرار الحروف.',
   vigenereHelp:'فينير (Vigenère): نخمّن طول كلمة المفتاح باستخدام Kasiski وIndex of Coincidence، ثم نختبر مرشّحات بتحليل الحروف والكلمات الإنجليزية. النص الأطول يعطي نتيجة أدق.',
   advanced:'خيارات تحليل فينير المتقدمة (اختياري)',
   lengthLabel:'طول كلمة المفتاح إذا تعرفه — اختياري',
   lengthHint:'اتركه فارغاً حتى يقدّره الموقع تلقائياً. هذا طول المفتاح، مو المفتاح نفسه.',
   invalidLength:'أدخل طول مفتاح صحيح بين 1 و16، أو اتركه فارغاً.',
   confidenceStrong:'مؤشرات قوية',confidenceModerate:'مؤشرات متوسطة',confidenceLow:'مؤشرات ضعيفة',
   fixedEvidence:'استخدمنا طول المفتاح {length} بناءً على اختيارك.',
   automaticEvidence:'اختبرنا أطوال كلمات المفتاح حتى {length} حرفاً.',

   vHeadline:'شفرة فينير',vIntro:'عندك رسالة مشفّرة بفينير؟ أدخل النص فقط. نحاول تقدير طول المفتاح باستخدام Kasiski وIndex of Coincidence، ثم نستخرج الكلمة المفتاحية الأرجح بتحليل تكرار الحروف. ما تحتاج تعرف المفتاح الأصلي.',
   vHint:'الأفضل استخدام رسالة إنجليزية طويلة (80 حرفاً أو أكثر). الرسائل القصيرة قد لا تكفي لاكتشاف المفتاح.',
   vButton:'⚡ حاول كسر فينير الآن',vResult:'النص الأرجح بعد هجوم فينير',vKey:'المفتاح المرجّح (كلمة)',
   vTested:'مفاتيح مرشّحة فُحصت',vWhy:'ليش رجّحنا هذا المفتاح؟',
   vAll:'أفضل 10 نتائج مرشّحة (اختياري)',
   vAllHint:'فينير تستخدم كلمة مفتاح، لذلك عدد المفاتيح الممكنة كبير جداً. نحلل أطوال المفاتيح من 1 إلى 16 ونرتّب مرشّحات إحصائية؛ هذه ليست تجربة شاملة لكل الكلمات الممكنة.',
   vEvidence:'فُحصت {count} كلمة مفتاح مرشّحة، مع تحليل طول المفتاح (حتى {len} أحرف) باستخدام Kasiski وIndex of Coincidence، ثم تكرار الحروف والكلمات الإنجليزية.',
   vWords:'من الكلمات الإنجليزية الداعمة: {words}.',
   vShort:'تنبيه: النص قصير، لذلك لا نكدر نضمن تحديد المفتاح. جرّب نصاً أطول وراجع المرشّحات.',
   vUncertain:'هذه أقرب نتيجة حسب التحليل، وليست دليلاً قاطعاً على صحة المفتاح أو الرسالة.',
   vRunning:'جارٍ تحليل طول المفتاح والحروف…',
   vChallengeIntro:'اكتب رسالة إنجليزية طويلة. الموقع يشفّرها بكلمة مفتاح مخفية، وتكدر تتحدى الطلاب بكسرها من النص المشفّر وحده.',
   vSecretPlaceholder:'WE STUDY CRYPTOGRAPHY BECAUSE ...',
   sample1:'نص طويل 1',sample2:'نص طويل 2',sample3:'نص قصير (صعب)',sample4:'نص طويل 3'
  },
  en:{
   caesar:'Caesar',vigenere:'Vigenère',
   dualTitle:'Caesar & Vigenère',dualIntro:'An interactive cryptanalysis lab for Caesar and Vigenère. Choose a cipher, paste the ciphertext, and inspect the suggested plaintext and reasoning. No key required.',
   caesarHelp:'Caesar: test all 26 shifts and rank candidate plaintexts using English language evidence.',
   vigenereHelp:'Vigenère: estimate keyword length using Kasiski and Index of Coincidence, then rank keys using letter frequencies and English word evidence. Longer messages work better.',
   advanced:'Advanced Vigenère analysis (optional)',
   lengthLabel:'Known keyword length (optional)',
   lengthHint:'Leave blank to let the analyzer estimate the length. This is not the actual keyword.',
   invalidLength:'Enter a key length from 1 to 16, or leave it empty.',
   confidenceStrong:'Strong indicators',confidenceModerate:'Moderate indicators',confidenceLow:'Weak indicators',
   fixedEvidence:'Used your key-length hint: {length} characters.',
   automaticEvidence:'Searched keyword lengths up to {length} characters.',

   vHeadline:'Vigenère Cipher',vIntro:'Got Vigenère ciphertext? Paste it here. We estimate key length using Kasiski and the Index of Coincidence, then rank likely keyword keys with letter-frequency analysis. No original key required.',
   vHint:'Long English ciphertext (80+ letters) works best. Short messages may not provide enough evidence to recover a key.',
   vButton:'⚡ Attack Vigenère Cipher',vResult:'Likely Vigenère plaintext',vKey:'Likely keyword key',
   vTested:'Candidate keys evaluated',vWhy:'Why was this key suggested?',
   vAll:'Top 10 candidate keys (optional)',
   vAllHint:'Vigenère has a huge keyword key space. We analyze key lengths up to 16 and rank statistical candidates; this is not exhaustive brute force over every possible keyword.',
   vEvidence:'Evaluated {count} candidate keywords, testing key lengths up to {len} with Kasiski, Index of Coincidence, letter frequencies, and English-language scoring.',
   vWords:'Recognizable English words include: {words}.',
   vShort:'Warning: this ciphertext is short, so a recovered key cannot be reliably confirmed. Try a longer message and inspect alternatives.',
   vUncertain:'This is a statistically likely result, not proof of the original plaintext or key.',
   vRunning:'Analyzing key lengths and letter patterns…',
   vChallengeIntro:'Write a long English message. The site encrypts it with a hidden keyword. Challenge classmates to recover it from ciphertext alone.',
   vSecretPlaceholder:'WE STUDY CRYPTOGRAPHY BECAUSE ...',
   sample1:'Long sample 1',sample2:'Long sample 2',sample3:'Short (uncertain)',sample4:'Long sample 3'
  }
 };
 const modeText=(key,vars={})=>(MODE_TX[language][key]||key).replace(/\{(\w+)\}/g,(_,k)=>String(vars[k]??''));
 const VIG_SAMPLES=[
  ['LEMON','WE STUDY CRYPTOGRAPHY BECAUSE PROTECTING INFORMATION REQUIRES KNOWING HOW ATTACKERS BREAK WEAK CIPHERS. THE VIGENERE CIPHER REPEATS A SECRET KEY AND USES DIFFERENT SHIFTS FOR EACH LETTER. BY ANALYZING THE TEXT WE CAN ESTIMATE THE LENGTH OF THE KEY AND RECOVER IT WITHOUT KNOWING THE ORIGINAL MESSAGE.'],
  ['CIPHER','IN OUR CYBERSECURITY LAB WE WANT TO SHOW HOW CLASSICAL ENCRYPTION FAILS WHEN THE KEY REPEATS. ANALYZING LETTER FREQUENCIES IN DIFFERENT COLUMNS REVEALS THE SHIFT OF EACH KEY LETTER. A SUCCESSFUL ATTACK MUST ALSO EXPLAIN WHY A RESULT IS MORE LIKELY THAN OTHER POSSIBLE TEXTS.'],
  ['LEMON','ATTACK AT DAWN'],
  ['SECURITY','THE PURPOSE OF THIS EXPERIMENT IS TO SHOW WHY CLASSICAL CIPHERS DO NOT PROVIDE STRONG SECURITY. A LONG ENGLISH MESSAGE CAN REVEAL A REPEATED VIGENERE KEY THROUGH STATISTICAL ANALYSIS. WE STUDY THE FREQUENCY OF LETTERS AND THE LENGTH OF A KEY TO RECOVER THE ORIGINAL INFORMATION WITHOUT KNOWING THE SECRET KEY.']
 ];
 const FREQ=[8.167,1.492,2.782,4.253,12.702,2.228,2.015,6.094,6.966,.153,.772,4.025,2.406,6.749,7.507,1.929,.095,5.987,6.327,9.056,2.758,.978,2.36,.15,1.974,.074];
 const WORDS=new Set(('A I THE AND OF TO IN IS IT YOU THAT HE WAS FOR ON ARE AS WITH HIS THEY AT BE THIS HAVE FROM OR ONE HAD BY WORD BUT NOT WHAT ALL WERE WE WHEN YOUR CAN SAID THERE USE AN EACH WHICH SHE DO HOW THEIR IF WILL UP OTHER ABOUT OUT MANY THEN THEM THESE SO SOME HER WOULD MAKE LIKE HIM INTO TIME HAS LOOK TWO MORE WRITE GO SEE NUMBER NO WAY COULD PEOPLE MY THAN FIRST WATER BEEN CALL WHO ITS NOW FIND LONG DOWN DAY DID GET COME MADE MAY PART HELLO WORLD SECRET ATTACK WRONG WAS CAESAR FLAG CTF PICOHTF CODE HACK ATTACK DAWN MEET LIBRARY AFTER CLASS CYBER SECURITY STARTS CURIOSITY MESSAGE HIDDEN PLAIN SIGHT BREAK CAESAR CIPHER WITHOUT KEY EVERY CLASSICAL WEAKNESS ENCRYPTION EASY CRYPTOGRAPHY STUDENTS PROFESSOR UNIVERSITY TEST ENGLISH TEXT SAMPLE TESTING HERE GOOD MORNING NIGHT SYSTEM DATA SAFE STRONG WEAK SHIFT LETTER LETTERS POWER EDUCATION LEARN DEFEND TODAY TOMORROW CRYPTO ANALYSIS RECOVER FINDING CAUGHT NEVER TRUST PASSWORD SEND HELP PLEASE THANK LEARNING THINK SMART WORKS SIMPLE CHALLENGE CRACK SOMEONE SECRETLY CODE FRIEND FRIENDS EXAMPLE CRACKED RECOVERED ROTATION').split(' '));
 const KNOWN_CTF_PREFIXES = new Set('FLAG CTF VOID HTB THM HMS PICOCTF PICOCTFDUCTF TRYHACKME HACKTHEBOX CRYPTO CYBER SECURE FLAGCTF'.split(' '));
 const LEET = {'0':'O','1':'I','3':'E','4':'A','5':'S','7':'T','8':'B','9':'G'};
 const flagMatch = (value) => /^([A-Za-z][A-Za-z0-9]{1,24})\{([^{}]+)\}$/.exec(value.trim());
 function flagEvidence(candidate, expectedPrefix){
  const match=flagMatch(candidate);if(!match)return {score:0,prefix:'',matches:[],known:false,expected:false};
  const prefix=match[1].toUpperCase();
  const body=match[2].toUpperCase().replace(/[01345789]/g,d=>LEET[d]);
  const tokens=body.match(/[A-Z]{2,}/g)||[];
  const matchedWords=tokens.filter(w=>WORDS.has(w));
  const uniqueWords=[...new Set(matchedWords)];
  let bigrams=0,trigrams=0;
  for (const w of tokens){
   for(let i=0;i<w.length-1;i++)if(BIGRAMS.has(w.slice(i,i+2)))bigrams++;
   for(let i=0;i<w.length-2;i++)if(TRIGRAMS.has(w.slice(i,i+3)))trigrams++;
  }
  const expected=Boolean(expectedPrefix && prefix===expectedPrefix);
  const known=KNOWN_CTF_PREFIXES.has(prefix);
  // CTF-specific evidence. The secret key is NEVER hardcoded or assumed to be 3.
  // Correct prefix (when provided by the user) outweighs weak English frequencies.
  const score = (expected ? -170 : 0) - (known ? 90 : 0)
    - uniqueWords.reduce((sum,w)=>sum+15+w.length*4,0)
    - Math.min(bigrams,30)*0.6 - Math.min(trigrams,20)*1.3;
  return {score,prefix,matches:uniqueWords,known,expected};
 }
 const BIGRAMS=new Set('TH HE IN ER AN RE ON AT EN ND TI ES OR TE OF ED IS IT AL AR ST TO NT NG SE HA AS OU IO LE VE CO ME DE HI RI RO IC NE EA RA CE LI CH LL BE MA SI OM UR'.split(' '));
 const TRIGRAMS=new Set('THE AND ING HER ERE ENT THA NTH WAS ETH FOR DTH HAT ION TIO VER TER HIS EST ALL RES ATI OTH MEN ERT INT EAN HEN ESE TED ORE HIN PRO OUR COM REA NOT YOU OUT ONE WIT THI SEC RET ATT ACK CAE SAR CIP PHE'.split(' '));
 let language='ar',mode=new URL(window.location.href).searchParams.get('mode')==='vigenere'?'vigenere':'caesar',lastResult=null,lastChallenge=null,isRunning=false;
 function t(key,vars={}){return (texts[language][key] || key).replace(/\{(\w+)\}/g,(_,k)=>String(vars[k]??''));}
 function shift(text,key){return text.replace(/[A-Za-z]/g,c=>{const base=c>='a'&&c<='z'?97:65;return String.fromCharCode((c.charCodeAt(0)-base-key+26)%26+base);});}
 function encrypt(text,key){return shift(text,(26-key)%26);}
 function grade(text,key){
  const upper=text.toUpperCase(),letters=upper.replace(/[^A-Z]/g,''),n=letters.length;
  const counts=Array(26).fill(0);for(const c of letters)counts[c.charCodeAt(0)-65]++;
  const chi=n?counts.reduce((sum,observed,i)=>{const e=n*FREQ[i]/100;return sum+(observed-e)**2/e;},0):9999;
  const tokens=upper.match(/[A-Z]+/g)||[];let coverage=0,matched=0;const found=[];
  for(const word of tokens){if(WORDS.has(word)){matched++;coverage+=word.length>=2?word.length:.35;if(word.length>1 && !found.includes(word))found.push(word);}}
  let tri=0,bi=0;for(let i=0;i<letters.length-2;i++)if(TRIGRAMS.has(letters.slice(i,i+3)))tri++;
  for(let i=0;i<letters.length-1;i++)if(BIGRAMS.has(letters.slice(i,i+2)))bi++;
  return {text,key,score:chi-coverage*6-tri*1.8-bi*.65,found,n,matched};
 }
 function sortCandidates(cipher, expectedPrefix=''){
  const isCTF=Boolean(flagMatch(cipher));
  const ranked=Array.from({length:26},(_,k)=>{
   const candidate=grade(shift(cipher,k),k);
   if(isCTF){
    const evidence=flagEvidence(candidate.text,expectedPrefix);
    // English chi-square trained on prose is unreliable for symbols/leet flags.
    // Use a weak tie-breaker only when stronger flag-specific evidence is absent.
    candidate.score=evidence.score+Math.min(candidate.score,300)*0.025;
    candidate.flag=evidence;
   }
   return candidate;
  }).sort((a,b)=>a.score-b.score || a.key-b.key);
  return {ranked,isCTF};
 }
 function localize(){
  document.documentElement.lang=language;
  document.documentElement.dir=language==='ar'?'rtl':'ltr';
  document.title=language==='ar'?'CipherScope — هجوم قيصر وفينير':'CipherScope — Caesar & Vigenère Attack Lab';
  document.querySelectorAll('[data-t]').forEach(el=>{el.textContent=t(el.dataset.t);});
  $('language').textContent=language==='ar'?'English / EN':'العربية / AR';
  const vig=mode==='vigenere';
  $('modeCaesar').textContent=modeText('caesar');
  $('modeVigenere').textContent=modeText('vigenere');
  for(const name of ['caesar','vigenere']){
    const el=$(name==='caesar'?'modeCaesar':'modeVigenere');
    el.classList.toggle('isSelected',mode===name);
    el.setAttribute('aria-pressed',String(mode===name));
  }
  $('ctfBox').style.display=vig?'none':'';
  $('vigAdvanced').hidden=!vig;
  $('headlineFocus').textContent=modeText('dualTitle');
  $('introText').textContent=modeText('dualIntro');
  $('modeExplanation').textContent=modeText(vig?'vigenereHelp':'caesarHelp');
  $('advancedLabel').textContent=modeText('advanced');
  $('vigLengthLabel').textContent=modeText('lengthLabel');
  $('vigLengthHint').textContent=modeText('lengthHint');
  $('inputHintText').textContent=vig?modeText('vHint'):t('inputHint');
  $('attack').textContent=vig?modeText('vButton'):t('attackBtn');
  $('keyLabel').textContent=vig?modeText('vKey'):t('key');
  $('testedLabel').textContent=vig?modeText('vTested'):t('tested');
  $('whyTitle').textContent=vig?modeText('vWhy'):t('why');
  $('allKeysSummary').textContent=vig?modeText('vAll'):t('allKeys');
  $('keysHintText').textContent=vig?modeText('vAllHint'):t('keysHint');
  $('challengeIntroText').textContent=vig?modeText('vChallengeIntro'):t('challengeIntro');
  $('secret').placeholder=vig?modeText('vSecretPlaceholder'):'MEET ME AFTER CLASS';
  const sampleButtons=[...document.querySelectorAll('[data-sample]')];
  if(vig){
    sampleButtons.forEach((b,i)=>{
      b.dataset.sample=globalThis.CaesarScopeVigenere.encrypt(VIG_SAMPLES[i][1],VIG_SAMPLES[i][0]);
      b.textContent=modeText('sample'+(i+1));
    });
  }else{
    const defaults=['KHOOR ZRUOG','DWWDFN DW GDZQ','YRLG{f4354u_z45_zu0qj}','JG'];
    sampleButtons.forEach((b,i)=>{b.dataset.sample=defaults[i];b.textContent=i===2?'CTF Flag':i===3?t('shortExample'):defaults[i];});
  }
  if(lastResult)renderResult(lastResult);
  if(lastChallenge)renderChallenge();
 }
 function switchMode(next){
  if(isRunning||mode===next)return;
  mode=next;lastChallenge=null;$('challengeResult').style.display='none';$('reveal').disabled=true;
  $('secretReveal').style.display='none';$('cipher').value='';$('secret').value='';$('ctfPrefix').value='';
  $('sharedHint').hidden=true;$('vigLength').value='';clearOutput();localize();
 }
 function error(id,msg){$(id).textContent=msg;$(id).style.display=msg?'block':'none';}
 function renderResult(result){
  if(result.mode==='vigenere'){
    const best=result.best;
    $('result').classList.add('vigenereResult');
    $('result').style.display='block';$('plaintext').textContent=best.text;
    $('bestKey').textContent=best.key;
    $('testedCount').textContent=String(result.keysScored);
    $('resultTitle').textContent=modeText('vResult');
    const conf=$('confidenceTag');
    conf.hidden=false;conf.className='confidenceTag '+(result.confidence||'low');
    conf.textContent=modeText('confidence'+(result.confidence==='strong'?'Strong':result.confidence==='moderate'?'Moderate':'Low'));
    const pieces=[modeText('vEvidence',{count:result.keysScored,len:result.maximumKeyLength})];
    pieces.push(modeText(result.fixedLength?'fixedEvidence':'automaticEvidence',{length:result.maximumKeyLength}));
    if(best.found.length)pieces.push(modeText('vWords',{words:best.found.slice(0,5).join(', ')}));
    if(result.tooShort)pieces.push(modeText('vShort'));
    pieces.push(modeText('vUncertain'));
    $('reason').textContent=pieces.join(' ');
    const container=$('candidates');container.replaceChildren();
    for(const candidate of result.ranked){
      const row=document.createElement('div');row.className='candidateRow'+(candidate.key===best.key?' highlight':'');
      const key=document.createElement('span'),txt=document.createElement('span');
      key.textContent=candidate.key;txt.textContent=candidate.text;
      row.append(key,txt);container.appendChild(row);
    }
    return;
  }
  $('result').classList.remove('vigenereResult');$('confidenceTag').hidden=true;
  $('testedCount').textContent='26 / 26';
  $('result').style.display='block';$('plaintext').textContent=result.best.text;$('bestKey').textContent=String(result.best.key).padStart(2,'0');
  const best=result.best;
  $('resultTitle').textContent=t(result.isCTF?'ctfResult':'resultTitle');
  let explanation;
  if(result.isCTF){
    const evidence=best.flag;
    const parts=[t('ctfAuto')];
    if(evidence.expected)parts.push(t('ctfWhyPrefix',{prefix:evidence.prefix}));
    else if(evidence.known)parts.push(t('ctfWhyKnown',{prefix:evidence.prefix}));
    if(evidence.matches.length)parts.push(t('ctfWhyWords',{words:evidence.matches.slice(0,5).join(', ')}));
    if(!evidence.expected&&!evidence.known&&!evidence.matches.length)parts.push(t('ctfWhyWeak'));
    explanation=parts.join(' ');
  } else {
    explanation=best.n<=7?t('whyShort'):best.found.length?t('whyWords',{words:best.found.slice(0,4).join(', ')})+' '+t('whyLong'):t('whyStat')+' '+t('whyLong');
  }
  $('reason').textContent=explanation;
  const container=$('candidates');container.replaceChildren();
  for(const candidate of result.ranked){const row=document.createElement('div');row.className='candidateRow'+(candidate.key===best.key?' highlight':'');
    const key=document.createElement('span'),txt=document.createElement('span');key.textContent=String(candidate.key).padStart(2,'0');txt.textContent=candidate.text;row.append(key,txt);container.appendChild(row);}
 }
 function clearOutput(){lastResult=null;$('result').style.display='none';$('allKeys').open=false;error('error','');}
 function startAttack(){
  if(isRunning)return;
  const cipher=$('cipher').value.trim();
  if(!/[A-Za-z]/.test(cipher)){error('error',t('invalid'));return;}
  const rawLength=mode==='vigenere'?$('vigLength').value.trim():'';
  const keyLength=rawLength===''?0:Number(rawLength);
  if(rawLength!==''&&(!Number.isInteger(keyLength)||keyLength<1||keyLength>16)){error('error',modeText('invalidLength'));return;}
  error('error','');isRunning=true;$('attack').disabled=true;
  $('modeCaesar').disabled=true;$('modeVigenere').disabled=true;
  $('result').style.display='none';$('progress').style.display='block';$('progressText').style.display='block';$('progressBar').style.width='0%';
  function finish(result){
    lastResult=result;renderResult(lastResult);isRunning=false;$('attack').disabled=false;
    $('modeCaesar').disabled=false;$('modeVigenere').disabled=false;
    $('progress').style.display='none';$('progressText').style.display='none';
    $('result').scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'nearest'});
  }
  if(mode==='vigenere'){
    $('progressText').textContent=modeText('vRunning');
    $('progressBar').style.width='15%';
    window.setTimeout(()=>{
      try{
        const outcome=globalThis.CaesarScopeVigenere.attack(cipher,keyLength?{keyLength}:{});
        if(!outcome.ranked.length)throw Error('No candidate keys');
        $('progressBar').style.width='100%';
        finish({mode:'vigenere',best:outcome.ranked[0],...outcome});
      }catch(_){
        error('error',language==='ar'?'تعذّر التحليل. حاول بنص إنجليزي مختلف.':'Analysis failed. Try different English ciphertext.');
        isRunning=false;$('attack').disabled=false;
        $('modeCaesar').disabled=false;$('modeVigenere').disabled=false;
        $('progress').style.display='none';$('progressText').style.display='none';
      }
    },60);
    return;
  }
  const expectedPrefix=$('ctfPrefix').value.trim().toUpperCase();
  const {ranked,isCTF}=sortCandidates(cipher,expectedPrefix);let i=0;
  const advance=()=>{i++;$('progressBar').style.width=(i/26*100)+'%';$('progressText').textContent=t('testing',{k:i-1});
    if(i<26){window.setTimeout(advance,22);}else{window.setTimeout(()=>finish({mode:'caesar',best:ranked[0],ranked,isCTF}),140);}};
  advance();
 }
 function createChallenge(){
  const plain=$('secret').value.trim();if(!/[A-Za-z]/.test(plain)){error('challengeError',t('invalidSecret'));return;}
  error('challengeError','');
  if(mode==='vigenere'){
    const keys=['LEMON','CIPHER','ORANGE','SECURITY','ACADEMY','SECRET','NETWORK'];
    const random=(globalThis.crypto&&crypto.getRandomValues)?crypto.getRandomValues(new Uint32Array(1))[0]:Math.floor(Math.random()*65536);
    const key=keys[random%keys.length];
    lastChallenge={plain,key,cipher:globalThis.CaesarScopeVigenere.encrypt(plain,key),mode:'vigenere'};
  }else{
    const key=(globalThis.crypto&&crypto.getRandomValues)?crypto.getRandomValues(new Uint32Array(1))[0]%25+1:Math.floor(Math.random()*25)+1;
    lastChallenge={plain,key,cipher:encrypt(plain,key),mode:'caesar'};
  }
  $('shareStatus').textContent='';renderChallenge();
 }
 function renderChallenge(){if(!lastChallenge)return;$('challengeResult').style.display='block';$('generatedCipher').textContent=lastChallenge.cipher;$('reveal').disabled=false;
  if($('secretReveal').style.display==='block')$('secretReveal').textContent=t('secretAnswer',{k:lastChallenge.key,text:lastChallenge.plain});}
 async function shareChallenge(){
  if(!lastChallenge)return;
  const cipher=lastChallenge.cipher;
  if(cipher.length>300){$('shareStatus').textContent=t('shareTooLong');return;}
  // The URL contains ciphertext only; never serialize the secret key or plaintext.
  const isPublished=window.location.protocol==='https:'||window.location.protocol==='http:';
  const link=new URL(window.location.href);
  link.search='';link.hash='';link.searchParams.set('c',cipher);if(lastChallenge.mode==='vigenere')link.searchParams.set('mode','vigenere');
  try{
   await navigator.clipboard.writeText(isPublished?link.toString():cipher);
   $('shareStatus').textContent=t(isPublished?'shareCopied':'cipherCopied');
  }catch(_){$('shareStatus').textContent=t('shareFailed');}
 }
 const imported=new URL(window.location.href).searchParams.get('c');
 if(imported && imported.length<=300 && /[A-Za-z]/.test(imported)){
  $('cipher').value=imported;
  $('sharedHint').hidden=false;
 }
 $('modeCaesar').addEventListener('click',()=>switchMode('caesar'));
 $('modeVigenere').addEventListener('click',()=>switchMode('vigenere'));
 $('shareChallenge').addEventListener('click',shareChallenge);
 $('language').addEventListener('click' ,()=>{language=language==='ar'?'en':'ar';localize();});
 for(const button of document.querySelectorAll('[data-sample]'))button.addEventListener('click',()=>{$('cipher').value=button.dataset.sample;clearOutput();$('cipher').focus();});
 $('cipher').addEventListener('input',clearOutput);
 $('ctfPrefix').addEventListener('input',clearOutput);
 $('vigLength').addEventListener('input',clearOutput);
 $('attack').addEventListener('click',startAttack);
 $('rerun').addEventListener('click',()=>{$('cipher').value='';clearOutput();$('cipher').focus();$('cipher').scrollIntoView({block:'center',behavior:'smooth'});});
 $('copy').addEventListener('click',async()=>{if(!lastResult)return;try{await navigator.clipboard.writeText(lastResult.best.text);$('copy').textContent=t('copied');window.setTimeout(()=>$('copy').textContent=t('copy'),1300);}catch(e){const range=document.createRange();range.selectNodeContents($('plaintext'));const sel=window.getSelection();sel.removeAllRanges();sel.addRange(range);}});
 $('generate').addEventListener('click',()=>{$('secretReveal').style.display='none';createChallenge();});
 $('reveal').addEventListener('click',()=>{if(lastChallenge){$('secretReveal').style.display='block';renderChallenge();}});
 $('useChallenge').addEventListener('click',()=>{if(lastChallenge){$('cipher').value=lastChallenge.cipher;clearOutput();$('cipher').scrollIntoView({block:'center',behavior:'smooth'});}});
 localize();
})();
