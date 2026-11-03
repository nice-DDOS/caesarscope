(() => {
 'use strict';
 const $ = (id) => document.getElementById(id);
 const texts = {
  ar: {
   headlineLead:'اكسر',headlineFocus:'شفرة قيصر',headlineEnd:'بدون مفتاح',title:'اكسر شفرة قيصر بدون مفتاح',intro:'عندك رسالة مشفّرة؟ أدخلها، والأداة تجرّب جميع المفاتيح الـ26 (Brute Force) وترشّح النص الأصلي. ما تحتاج تعرف المفتاح ولا الرسالة الأصلية.',step1:'اكتب النص المشفّر',step2:'اضغط اكسر الشفرة',step3:'شوف النتيجة والسبب',inputTitle:'شنو الرسالة المشفّرة؟',noKey:'ما يحتاج مفتاح',inputLabel:'النص المشفّر (Ciphertext)',inputHint:'اكتب نصاً مشفّراً بالحروف الإنجليزية. إذا ما عندك، جرّب مثالاً جاهزاً.',examples:'أمثلة سريعة:',shortExample:'مثال قصير: JG',attackBtn:'⚡ اكسر الشفرة الآن',privacy:'التحليل يتم في متصفحك، ولا نحتفظ بالرسائل أو المفاتيح.',resultTitle:'النتيجة الأقرب للإنجليزية',possible:'✓ ترشيح، مو تأكيد',key:'المفتاح المرجّح',tested:'المفاتيح المجربة',why:'ليش الأداة رجّحت هاي النتيجة؟',copy:'نسخ النص الناتج',copied:'تم النسخ ✓',again:'جرّب نص ثاني',allKeys:'عرض جميع النتائج الـ26 (اختياري)',keysHint:'الأداة تختبر المفاتيح من 0 إلى 25. كلها صحيحة حسابياً؛ ترتيبها مجرد ترجيح لغوي.',colKey:'Key',colText:'Decrypted text',challengeTitle:'🎓 تريد تسوي تحدّي للطلاب؟ اضغط هنا',challengeIntro:'اكتب رسالة إنجليزية، والموقع يشفّرها بمفتاح عشوائي مخفي. أعطِ الطلاب النص المشفّر فقط، وخليهم يجربون الهجوم.',secretLabel:'الرسالة السرية (قبل التشفير)',generate:'🔒 ولّد تحدّياً بمفتاح مخفي',reveal:'كشف الجواب الصحيح',challengeMade:'هذا هو النص الذي تعطيه للطلاب:',useChallenge:'جرّب كسره بالأداة ↑',footer:'© 2026 CaesarScope • إعداد وتطوير عمار أحمد — باحث في الأمن السيبراني',invalid:'أدخل نصاً مشفّراً يحتوي حروفاً إنجليزية (A–Z) أولاً.',invalidSecret:'اكتب رسالة إنجليزية أولاً حتى نقدر نشفّرها.',testing:'جارِ تجربة المفتاح {k} من 25…',whyWords:'النتيجة تحتوي كلمات إنجليزية معروفة مثل: {words}. هذا يساعد على ترجيحها.',whyStat:'هذه النتيجة الأقرب إحصائياً لأنماط الحروف الإنجليزية بين المفاتيح الـ26.',whyShort:'النص قصير جداً؛ عدة مفاتيح ممكن تعطي كلمات مفهومة، لذلك النتيجة غير مؤكدة. افتح جميع الاحتمالات وقارنها.',whyLong:'التحليل يعتمد على الكلمات الإنجليزية وتكرار الحروف. حتى لو النتيجة تبدو واضحة، ما نقدر نثبت أنها المقصودة بدون دليل إضافي.',keyLabel:'المفتاح',secretAnswer:'المفتاح الحقيقي: {k} — الرسالة: {text}',englishOnly:'ملاحظة: التشفير هنا يطبق على الحروف الإنجليزية A–Z فقط.',sharedHint:'🔗 تم تحميل النص المشفّر من رابط التحدّي. اضغط اكسر الشفرة!',shareChallenge:'🔗 انسخ رابط التحدّي',shareWarning:'رابط المشاركة يحتوي النص المشفّر فقط، وليس المفتاح أو النص الأصلي. لا تستخدم أسراراً حقيقية.',shareCopied:'تم نسخ رابط التحدّي ✓',cipherCopied:'قبل النشر، تم نسخ النص المشفّر فقط. رابط المشاركة يتفعّل بعد نشر الموقع.',shareTooLong:'النص طويل للرابط. استخدم تحدياً أقصر من 300 حرف.',shareFailed:'تعذّر النسخ تلقائياً؛ انسخ النص المشفّر يدوياً.',buttonReady:'⚡ اكسر الشفرة الآن',ctfOptions:'🎯 عندك Flag من CTF؟ إعداد اختياري',ctfPrefixLabel:'بادئة العلم (إذا تعرفها)',ctfPrefixHint:'مثلاً VOID أو HTB أو FLAG، بدون الأقواس. مو مفتاح ولا نص أصلي؛ هذه صيغة العلم المعروفة للتحدّي.',ctfResult:'أقرب احتمال لعلم CTF',ctfWhyPrefix:'صيغة العلم تطابق البادئة المتوقعة {prefix}، وهي دليل قوي لترجيح المفتاح، وليست برهاناً قاطعاً.',ctfWhyKnown:'هذه النتيجة تبدأ ببادئة CTF معروفة: {prefix}.',ctfWhyWords:'بعد تحويل رموز Leetspeak، ظهرت كلمات: {words}.',ctfWhyWeak:'اكتشفنا صيغة Flag، لكن الأدلة ضعيفة لتحديد المفتاح بثقة. افتح جميع النتائج الـ26 أو أدخل بادئة العلم المعروفة.',ctfAuto:'تم التعرف على صيغة CTF Flag؛ استُخدم تحليل مناسب للأعلام بدل تحليل النصوص الإنجليزية العادية.'
  },
  en: {
   headlineLead:'Break',headlineFocus:'Caesar Cipher',headlineEnd:'without the key',title:'Break Caesar Cipher without the key',intro:'Got encrypted text? Paste it here. The tool uses brute force to test all 26 keys and suggests the most likely original message. No key or plaintext required.',step1:'Enter ciphertext',step2:'Click Break Cipher',step3:'See the result and why',inputTitle:'What is the encrypted message?',noKey:'No key needed',inputLabel:'Ciphertext',inputHint:'Enter English-letter ciphertext. Don’t have any? Try one of the examples.',examples:'Quick examples:',shortExample:'Short example: JG',attackBtn:'⚡ Break Cipher',privacy:'Analysis runs in your browser. Messages and keys are not stored by this app.',resultTitle:'Most likely English plaintext',possible:'✓ Likely, not proven',key:'Likely key',tested:'Keys tested',why:'Why was this result chosen?',copy:'Copy plaintext',copied:'Copied ✓',again:'Try another message',allKeys:'See all 26 results (optional)',keysHint:'The tool tests keys 0–25. Every candidate is mathematically valid; ranking is only a language-based guess.',colKey:'Key',colText:'Decrypted text',challengeTitle:'🎓 Want a classroom challenge? Click here',challengeIntro:'Write an English message. The site encrypts it using a hidden random key. Give students only the ciphertext and let them attack it.',secretLabel:'Secret message (before encryption)',generate:'🔒 Create challenge with hidden key',reveal:'Reveal real answer',challengeMade:'Give this ciphertext to your classmates:',useChallenge:'Try breaking it above ↑',footer:'© 2026 CaesarScope • Developed by Ammar Ahmed — Cybersecurity Researcher',invalid:'First enter ciphertext containing English letters (A–Z).',invalidSecret:'Enter an English message to create a challenge.',testing:'Trying key {k} of 25…',whyWords:'Recognizable English words include {words}. This supports the suggested result.',whyStat:'This candidate scores best against English letter patterns among the 26 keys.',whyShort:'This message is very short; different keys may produce meaningful text. The guess is uncertain. Compare all candidates.',whyLong:'The tool uses English words and letter frequency. Even a plausible result needs independent evidence for certainty.',keyLabel:'Key',secretAnswer:'Actual key: {k} — Message: {text}',englishOnly:'Note: this cipher operates on English A–Z letters only.',sharedHint:'🔗 Challenge ciphertext loaded from the link. Click Break Cipher!',shareChallenge:'🔗 Copy challenge link',shareWarning:'The link contains ciphertext only, not the key or original text. Never use real secrets.',shareCopied:'Challenge link copied ✓',cipherCopied:'Before publishing, only the ciphertext was copied. Links work on the live website.',shareTooLong:'Too long for a challenge link. Use a message under 300 characters.',shareFailed:'Could not copy automatically. Please copy the ciphertext manually.',buttonReady:'⚡ Break Cipher',ctfOptions:'🎯 Have a CTF flag? Optional setting',ctfPrefixLabel:'Expected flag prefix (if known)',ctfPrefixHint:'For example VOID, HTB or FLAG, without braces. This is the challenge flag format, not the secret key or plaintext.',ctfResult:'Most likely CTF flag candidate',ctfWhyPrefix:'The candidate matches the expected prefix {prefix}, strong evidence for this key but not absolute proof.',ctfWhyKnown:'This candidate starts with a recognized CTF prefix: {prefix}.',ctfWhyWords:'After normalizing leetspeak, these words were found: {words}.',ctfWhyWeak:'A flag-shaped message was detected, but evidence is weak. Review all 26 candidates or enter the known flag prefix.',ctfAuto:'CTF flag format detected; flag-aware ranking was used instead of ordinary English-text ranking.'
  }
 };
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
 let language='ar',lastResult=null,lastChallenge=null,isRunning=false;
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
 function localize(){document.documentElement.lang=language;document.documentElement.dir=language==='ar'?'rtl':'ltr';document.title=language==='ar'?'CaesarScope — اكسر شفرة قيصر':'CaesarScope — Break Caesar Cipher';
  document.querySelectorAll('[data-t]').forEach(el=>{el.textContent=t(el.dataset.t);});
  $('language').textContent=language==='ar'?'English / EN':'العربية / AR';
  if(lastResult)renderResult(lastResult);if(lastChallenge)renderChallenge();
 }
 function error(id,msg){$(id).textContent=msg;$(id).style.display=msg?'block':'none';}
 function renderResult(result){
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
 function startAttack(){if(isRunning)return;const cipher=$('cipher').value.trim();if(!/[A-Za-z]/.test(cipher)){error('error',t('invalid'));return;}
  error('error','');isRunning=true;$('attack').disabled=true;$('result').style.display='none';$('progress').style.display='block';$('progressText').style.display='block';$('progressBar').style.width='0%';
  const expectedPrefix=$('ctfPrefix').value.trim().toUpperCase();
  const {ranked,isCTF}=sortCandidates(cipher,expectedPrefix);let i=0;
  const advance=()=>{i++;$('progressBar').style.width=(i/26*100)+'%';$('progressText').textContent=t('testing',{k:i-1});
    if(i<26){window.setTimeout(advance,22);}else{window.setTimeout(()=>{lastResult={best:ranked[0],ranked,isCTF};renderResult(lastResult);isRunning=false;$('attack').disabled=false;$('progress').style.display='none';$('progressText').style.display='none';$('result').scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'nearest'});},140);}};
  advance();
 }
 function createChallenge(){const plain=$('secret').value.trim();if(!/[A-Za-z]/.test(plain)){error('challengeError',t('invalidSecret'));return;}
  error('challengeError','');const key=(globalThis.crypto && crypto.getRandomValues)?crypto.getRandomValues(new Uint32Array(1))[0]%25+1:Math.floor(Math.random()*25)+1;
  lastChallenge={plain,key,cipher:encrypt(plain,key)};$('shareStatus').textContent='';renderChallenge();}
 function renderChallenge(){if(!lastChallenge)return;$('challengeResult').style.display='block';$('generatedCipher').textContent=lastChallenge.cipher;$('reveal').disabled=false;
  if($('secretReveal').style.display==='block')$('secretReveal').textContent=t('secretAnswer',{k:lastChallenge.key,text:lastChallenge.plain});}
 async function shareChallenge(){
  if(!lastChallenge)return;
  const cipher=lastChallenge.cipher;
  if(cipher.length>300){$('shareStatus').textContent=t('shareTooLong');return;}
  // The URL contains ciphertext only; never serialize the secret key or plaintext.
  const isPublished=window.location.protocol==='https:'||window.location.protocol==='http:';
  const link=new URL(window.location.href);
  link.search='';link.hash='';link.searchParams.set('c',cipher);
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
 $('shareChallenge').addEventListener('click',shareChallenge);
 $('language').addEventListener('click' ,()=>{language=language==='ar'?'en':'ar';localize();});
 for(const button of document.querySelectorAll('[data-sample]'))button.addEventListener('click',()=>{$('cipher').value=button.dataset.sample;clearOutput();$('cipher').focus();});
 $('cipher').addEventListener('input',clearOutput);
 $('ctfPrefix').addEventListener('input',clearOutput);
 $('attack').addEventListener('click',startAttack);
 $('rerun').addEventListener('click',()=>{$('cipher').value='';clearOutput();$('cipher').focus();$('cipher').scrollIntoView({block:'center',behavior:'smooth'});});
 $('copy').addEventListener('click',async()=>{if(!lastResult)return;try{await navigator.clipboard.writeText(lastResult.best.text);$('copy').textContent=t('copied');window.setTimeout(()=>$('copy').textContent=t('copy'),1300);}catch(e){const range=document.createRange();range.selectNodeContents($('plaintext'));const sel=window.getSelection();sel.removeAllRanges();sel.addRange(range);}});
 $('generate').addEventListener('click',()=>{$('secretReveal').style.display='none';createChallenge();});
 $('reveal').addEventListener('click',()=>{if(lastChallenge){$('secretReveal').style.display='block';renderChallenge();}});
 $('useChallenge').addEventListener('click',()=>{if(lastChallenge){$('cipher').value=lastChallenge.cipher;clearOutput();$('cipher').scrollIntoView({block:'center',behavior:'smooth'});}});
 localize();
})();
