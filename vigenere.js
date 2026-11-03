/* CaesarScope: Vigenere ciphertext-only cryptanalysis. English A-Z, no network/API. */
(() => {
  "use strict";
  const F=[8.167,1.492,2.782,4.253,12.702,2.228,2.015,6.094,6.966,.153,.772,4.025,2.406,6.749,7.507,1.929,.095,5.987,6.327,9.056,2.758,.978,2.36,.150,1.974,.074];
  const WORDS=new Set(("THE OF AND TO IN IS YOU THAT IT HE WAS FOR ON ARE AS WITH HIS THEY AT BE THIS HAVE FROM OR ONE HAD BY WORD BUT NOT WHAT ALL WERE WE WHEN YOUR CAN SAID THERE USE AN EACH WHICH SHE DO HOW THEIR IF WILL UP OTHER ABOUT OUT MANY THEN THEM THESE SO SOME HER WOULD MAKE LIKE HIM INTO TIME HAS LOOK TWO MORE WRITE GO SEE NUMBER NO WAY COULD PEOPLE MY THAN FIRST BEEN CALL WHO ITS NOW FIND LONG DOWN DAY DID GET COME MADE MAY PART HELLO WORLD SECRET ATTACK DAWN MEET AFTER CLASS CYBER SECURITY INFORMATION PROTECTING ENCRYPTION DECRYPTION CRYPTOGRAPHY CRYPTANALYSIS VIGENERE CAESAR CIPHER REPEATS DIFFERENT SHIFT SHIFTS KEY LETTER LETTERS TEXT ANALYZING ANALYSIS FREQUENCY FREQUENCIES ESTIMATE LENGTH RECOVER ORIGINAL MESSAGE MESSAGES WITHOUT KNOWING HOW ATTACKERS BREAK WEAK STRONG CLASSICAL LAB STUDENT STUDENTS PROFESSOR UNIVERSITY COMPUTER NETWORK NETWORKS SYSTEM ALGORITHM SYSTEMS TEST TESTING THIS THROUGH BECAUSE REQUIRES WHEN REVEALS DIFFERENT COLUMNS COLUMN EVERY ALSO SUCCESSFUL EXPLAIN RESULT MORE LIKELY POSSIBLE RESULTS ENGLISH SECRETLY REPEAT HIDDEN RANDOM LANGUAGE PATTERNS ANOTHER CHALLENGE PLEASE ENTER HERE IMPORTANT SIMPLE WE WANT SHOW STUDY ATTACKER ATTACKS EDUCATIONAL AUTOMATIC MATHEMATICAL SECURITY WORKS VERY GOOD").split(" "));
  const BIGRAMS=new Set("TH HE IN ER AN RE ON AT EN ND TI ES OR TE OF ED IS IT AL AR ST TO NT NG SE HA AS OU IO LE VE CO ME DE HI RI RO IC NE EA RA CE LI CH LL BE MA SI OM UR".split(" "));
  const TRIGRAMS=new Set("THE AND ING HER ERE ENT THA NTH WAS ETH FOR DTH HAT ION TIO VER TER HIS EST ALL RES ATI OTH MEN ERT INT EAN HEN ESE TED ORE HIN PRO OUR COM REA NOT YOU OUT ONE WIT THI SEC RET ATT ACK CAE SAR CIP PHE TIO ONS TIN ATI CON NCE RAN TER RER GIN ECT STA EVE ENE".split(" "));
  const clean=s=>s.toUpperCase().replace(/[^A-Z]/g,"");
  function transform(text,key,encrypt=false){
    const shifts=Array.from(key.toUpperCase()).filter(c=>c>="A"&&c<="Z").map(c=>c.charCodeAt(0)-65);
    if(!shifts.length)return text;
    let j=0;
    return text.replace(/[A-Za-z]/g,ch=>{
      const base=ch>="a"&&ch<="z"?97:65;
      const old=ch.charCodeAt(0)-base,shift=shifts[j++%shifts.length];
      return String.fromCharCode(base+(old+(encrypt?shift:26-shift))%26);
    });
  }
  function chi(counts,n){
    if(!n)return 1e6;
    let result=0;
    for(let i=0;i<26;i++){const expected=n*F[i]/100;result+=(counts[i]-expected)**2/expected;}
    return result;
  }
  function shiftsForColumn(letters,len,col){
    const counts=new Array(26).fill(0),n=Math.ceil((letters.length-col)/len);
    for(let i=col;i<letters.length;i+=len)counts[letters.charCodeAt(i)-65]++;
    const rankings=[];
    for(let shift=0;shift<26;shift++){
      const dec=new Array(26);
      for(let p=0;p<26;p++)dec[p]=counts[(p+shift)%26];
      rankings.push({letter:String.fromCharCode(65+shift),cost:chi(dec,n)});
    }
    return rankings.sort((a,b)=>a.cost-b.cost);
  }
  function averageIC(letters,len){
    let total=0,valid=0;
    for(let col=0;col<len;col++){
      const counts=new Array(26).fill(0);let n=0;
      for(let i=col;i<letters.length;i+=len){counts[letters.charCodeAt(i)-65]++;n++;}
      if(n>=2){total+=counts.reduce((sum,c)=>sum+c*(c-1),0)/(n*(n-1));valid++;}
    }
    return valid?total/valid:0;
  }
  function kasiski(letters,max){
    const marks=new Array(max+1).fill(0),seen=new Map(),limit=Math.min(letters.length,900);
    for(let i=0;i<limit-2;i++){
      const part=letters.slice(i,i+3);
      const previous=seen.get(part);
      if(previous!==undefined){
        const distance=i-previous;
        for(let k=2;k<=max;k++)if(distance%k===0)marks[k]++;
      }
      seen.set(part,i);
    }
    return marks;
  }
  function languageScore(plaintext,keyLength,ic,kasi){
    const upper=plaintext.toUpperCase(),letters=clean(plaintext),n=letters.length;
    const counts=new Array(26).fill(0);for(const l of letters)counts[l.charCodeAt(0)-65]++;
    const deviation=chi(counts,n),tokens=upper.match(/[A-Z]+/g)||[];
    const found=[];let wordPoints=0,unknown=0;
    for(const word of tokens){
      if(WORDS.has(word)){wordPoints+=word.length>=3?word.length*7+6:2;if(word.length>=3&&!found.includes(word))found.push(word);}
      else if(word.length>=4)unknown+=word.length;
    }
    let tri=0,bi=0;
    for(let i=0;i<n-2;i++)if(TRIGRAMS.has(letters.slice(i,i+3)))tri++;
    for(let i=0;i<n-1;i++)if(BIGRAMS.has(letters.slice(i,i+2)))bi++;
    const score=wordPoints+tri*2.2+bi*.25-Math.min(deviation,500)*.18-unknown*.35-keyLength*1.25+Math.min(kasi,15)*.65-Math.abs(ic-.066)*45;
    return {score,found,chi:deviation,wordPoints};
  }
  function attack(cipher){
    const all=clean(cipher);
    if(!all.length)return {ranked:[],lengthsChecked:0,keysScored:0,letters:0};
    const analyzed=cipher.slice(0,1600),letters=clean(analyzed),n=letters.length;
    const max=Math.min(16,Math.max(6,Math.floor(n/7)));
    const marks=kasiski(letters,max);
    const candidates=new Map();let scored=0;
    function evaluate(key,ic,kasi){
      if(candidates.has(key))return candidates.get(key);
      const plain=transform(analyzed,key);
      const stats=languageScore(plain,key.length,ic,kasi);
      const result={key,text:plain,...stats,ic,length:key.length};
      candidates.set(key,result);scored++;return result;
    }
    for(let len=1;len<=max;len++){
      const ic=averageIC(letters,len);
      const shifts=Array.from({length:len},(_,col)=>shiftsForColumn(letters,len,col).slice(0,n<100?4:3));
      let beams=[{key:"",cost:0}];
      for(const options of shifts){
        const next=[];
        for(const b of beams)for(const option of options)next.push({key:b.key+option.letter,cost:b.cost+option.cost});
        next.sort((a,b)=>a.cost-b.cost);beams=next.slice(0,100);
      }
      for(const beam of beams)evaluate(beam.key,ic,marks[len]);
    }
    // Optimize leading candidate keys using English-word and n-gram evidence.
    const seed=[...candidates.values()].sort((a,b)=>b.score-a.score).slice(0,10);
    for(const initial of seed){
      let current=initial;
      for(let round=0;round<2;round++){
        let changed=false;
        for(let pos=0;pos<current.key.length;pos++){
          let best=current;
          for(let ch=65;ch<=90;ch++){
            const key=current.key.slice(0,pos)+String.fromCharCode(ch)+current.key.slice(pos+1);
            const attempt=evaluate(key,current.ic,marks[current.key.length]);
            if(attempt.score>best.score+.0001)best=attempt;
          }
          if(best.key!==current.key){current=best;changed=true;}
        }
        if(!changed)break;
      }
    }
    const ranked=[...candidates.values()].sort((a,b)=>b.score-a.score||a.length-b.length).slice(0,10);
    for(const result of ranked)result.text=transform(cipher,result.key);
    return {ranked,lengthsChecked:max,keysScored:scored,letters:all.length,analyzedLetters:n,tooShort:n<80};
  }
  globalThis.CaesarScopeVigenere=Object.freeze({attack,decrypt:(text,key)=>transform(text,key),encrypt:(text,key)=>transform(text,key,true)});
})();
