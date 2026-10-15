"""Generate drafts/*.html for NGYN AI Frontier (prefix nafr) from one shared shell.

Run: python _src/build.py   then   python <skill>/scripts/build_preview.py .
Copy edits go here, never into drafts/ (they are overwritten).
"""
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
AODA = (ROOT / "_src" / "aoda-ada.min.js").read_text(encoding="utf-8")
IMG = "https://images.unsplash.com/photo-{}?w=1600&q=70&auto=format&fit=crop"
OG = IMG.format("1581091226825-a6a2a5aee158")

NAV = [("/dmaic-process-improvement", "DMAIC"),
       ("/lean-six-sigma-small-business", "Small business"),
       ("/lean-six-sigma-training", "Training"),
       ("/#faq", "FAQ")]

CSS = r"""
:root{--nafr-ink:#10161f;--nafr-ink-2:#1a2330;--nafr-paper:#f6f4ef;--nafr-card:#ffffff;
--nafr-line:#d9d4c8;--nafr-text:#1b222c;--nafr-muted:#4f5967;--nafr-accent:#d7351f;
--nafr-accent-strong:#a8240f;--nafr-signal:#1f8a70;--nafr-on-dark:#eef1f4;--nafr-on-dark-muted:#a9b4c2;
--nafr-radius:14px;--nafr-max:1200px;--nafr-display:'Space Grotesk','Space Grotesk Fallback',system-ui,sans-serif;
--nafr-body:'DM Sans','DM Sans Fallback',system-ui,sans-serif;--nafr-mono:'JetBrains Mono',ui-monospace,monospace}
*{box-sizing:border-box}html{scroll-behavior:smooth}
@media (prefers-reduced-motion:reduce){html{scroll-behavior:auto}*{animation:none!important;transition:none!important}}
body{margin:0;background:var(--nafr-paper);color:var(--nafr-text);font:17px/1.65 var(--nafr-body)}
img{max-width:100%;display:block}
a{color:var(--nafr-accent-strong)}
:focus-visible{outline:3px solid var(--nafr-accent);outline-offset:3px;border-radius:4px}
.nafr-skip{position:absolute;left:-999px;top:8px;background:#fff;color:#000;padding:10px 14px;z-index:100}
.nafr-skip:focus{left:8px}
.nafr-wrap{width:min(var(--nafr-max),100% - 32px);margin:0 auto}
h1,h2,h3{font-family:var(--nafr-display);line-height:1.1;letter-spacing:-.02em;margin:0 0 .5em}
h1{font-size:clamp(2.4rem,5.6vw,4.6rem);font-weight:600}
h2{font-size:clamp(1.8rem,3.4vw,2.8rem);font-weight:600}
h3{font-size:1.25rem;font-weight:600}
.nafr-eyebrow{font:500 .8rem/1 var(--nafr-mono);letter-spacing:.12em;text-transform:uppercase;color:var(--nafr-accent-strong);margin:0 0 14px}
.nafr-dark .nafr-eyebrow{color:#ff8a73}
.nafr-lead{font-size:1.2rem;color:var(--nafr-muted);max-width:60ch}
.nafr-dark .nafr-lead{color:var(--nafr-on-dark-muted)}
.nafr-btn{display:inline-flex;align-items:center;gap:10px;padding:14px 22px;border-radius:999px;font-weight:600;text-decoration:none;border:2px solid transparent;transition:transform .2s,background .2s}
.nafr-btn:hover{transform:translateY(-2px)}
.nafr-btn--primary{background:var(--nafr-accent);color:#fff}
.nafr-btn--primary:hover{background:var(--nafr-accent-strong)}
.nafr-btn--ghost{border-color:currentColor;color:inherit}
/* header */
.nafr-header{position:fixed;inset:0 0 auto;z-index:50;color:var(--nafr-on-dark);transition:background .3s,box-shadow .3s}
.nafr-header.is-solid{background:rgba(16,22,31,.96);box-shadow:0 6px 24px rgba(0,0,0,.2)}
.nafr-header__bar{display:flex;align-items:center;justify-content:space-between;height:74px}
.nafr-logo{display:flex;align-items:center;gap:10px;color:inherit;text-decoration:none;font:600 1.1rem var(--nafr-display)}
.nafr-logo svg{width:34px;height:34px}
.nafr-logo small{display:block;font:500 .66rem var(--nafr-mono);letter-spacing:.14em;color:var(--nafr-on-dark-muted)}
.nafr-nav ul{display:flex;gap:26px;list-style:none;margin:0;padding:0;align-items:center}
.nafr-nav a{color:inherit;text-decoration:none;font-weight:500}
.nafr-nav a:hover,.nafr-nav a[aria-current=page]{color:#ff8a73}
.nafr-nav .nafr-btn{padding:10px 18px;color:#fff}
.nafr-burger{display:none;background:none;border:2px solid currentColor;color:inherit;border-radius:10px;width:46px;height:42px;font-size:1.3rem}
@media (max-width:900px){.nafr-burger{display:block}
.nafr-nav{position:absolute;top:74px;left:0;right:0;background:var(--nafr-ink);display:none;padding:12px 16px 24px}
.nafr-nav.is-open{display:block}.nafr-nav ul{flex-direction:column;align-items:flex-start;gap:16px}}
/* hero */
.nafr-hero{position:relative;background:var(--nafr-ink);color:var(--nafr-on-dark);padding:150px 0 90px;overflow:hidden}
.nafr-hero--sub{padding:140px 0 70px}
.nafr-hero__grid{display:grid;grid-template-columns:1.05fr .95fr;gap:48px;align-items:center}
@media (max-width:900px){.nafr-hero__grid{grid-template-columns:1fr}}
.nafr-hero__actions{display:flex;flex-wrap:wrap;gap:14px;margin-top:28px}
.nafr-chart{background:var(--nafr-ink-2);border:1px solid #2c394a;border-radius:var(--nafr-radius);padding:20px}
.nafr-chart svg{width:100%;height:auto}
.nafr-chart__legend{display:flex;justify-content:space-between;font:500 .75rem var(--nafr-mono);color:var(--nafr-on-dark-muted);margin-top:10px}
.nafr-chart__pause{background:none;border:1px solid #3b4a5e;color:var(--nafr-on-dark);border-radius:8px;padding:4px 10px;font:inherit;cursor:pointer}
.nafr-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:40px}
.nafr-stats strong{display:block;font:600 1.9rem var(--nafr-display);color:#fff}
.nafr-stats span{font-size:.9rem;color:var(--nafr-on-dark-muted)}
/* sections */
.nafr-section{padding:96px 0}
.nafr-section--alt{background:#ece8df}
.nafr-dark{background:var(--nafr-ink);color:var(--nafr-on-dark)}
.nafr-head{max-width:760px;margin-bottom:48px}
.nafr-grid{display:grid;gap:22px;grid-template-columns:repeat(auto-fit,minmax(250px,1fr))}
.nafr-card{background:var(--nafr-card);border:1px solid var(--nafr-line);border-radius:var(--nafr-radius);padding:28px;transition:transform .25s,box-shadow .25s}
.nafr-card:hover{transform:translateY(-4px);box-shadow:0 18px 40px rgba(16,22,31,.08)}
.nafr-card p{color:var(--nafr-muted);margin:0 0 12px}
.nafr-card__tag{font:500 .75rem var(--nafr-mono);color:var(--nafr-signal);letter-spacing:.08em}
.nafr-card a.nafr-more{font-weight:600;text-decoration:none}
.nafr-card a.nafr-more::after{content:" \2192"}
.nafr-dark .nafr-card{background:var(--nafr-ink-2);border-color:#2c394a}
.nafr-dark .nafr-card p{color:var(--nafr-on-dark-muted)}
.nafr-waste{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:2px;background:var(--nafr-line);border:1px solid var(--nafr-line);border-radius:var(--nafr-radius);overflow:hidden}
.nafr-waste div{background:var(--nafr-paper);padding:22px}
.nafr-waste b{font:600 2rem var(--nafr-display);color:var(--nafr-accent)}
.nafr-waste p{margin:4px 0 0;color:var(--nafr-muted);font-size:.95rem}
.nafr-dmaic{display:grid;grid-template-columns:repeat(5,1fr);gap:0;counter-reset:s}
@media (max-width:900px){.nafr-dmaic{grid-template-columns:1fr}}
.nafr-dmaic li{list-style:none;padding:26px 22px;border-top:4px solid var(--nafr-line);transition:border-color .4s}
.nafr-dmaic li.is-in{border-color:var(--nafr-accent)}
.nafr-dmaic b{font:600 3rem var(--nafr-display);display:block;color:var(--nafr-accent)}
.nafr-dmaic p{color:var(--nafr-muted);margin:0}
.nafr-dmaic.nafr-on-dark p{color:var(--nafr-on-dark-muted)}
.nafr-split{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center}
@media (max-width:900px){.nafr-split{grid-template-columns:1fr}}
.nafr-split img{border-radius:var(--nafr-radius);aspect-ratio:4/3;object-fit:cover;width:100%}
.nafr-list{padding:0;list-style:none}
.nafr-list li{padding:12px 0 12px 30px;border-bottom:1px solid var(--nafr-line);position:relative}
.nafr-list li::before{content:"";position:absolute;left:0;top:21px;width:14px;height:2px;background:var(--nafr-accent)}
.nafr-dark .nafr-list li{border-color:#2c394a}
.nafr-table{width:100%;border-collapse:collapse;background:var(--nafr-card);border-radius:var(--nafr-radius);overflow:hidden}
.nafr-table th,.nafr-table td{text-align:left;padding:16px;border-bottom:1px solid var(--nafr-line);vertical-align:top}
.nafr-table th{font-family:var(--nafr-display);background:#e6e1d6}
.nafr-tablewrap{overflow-x:auto}
.nafr-note{font:500 .8rem var(--nafr-mono);color:var(--nafr-muted)}
.nafr-quote{font:500 1.35rem/1.5 var(--nafr-display);margin:0 0 14px}
/* faq */
.nafr-faq details{border-bottom:1px solid var(--nafr-line);padding:18px 0}
.nafr-faq summary{font:600 1.15rem var(--nafr-display);cursor:pointer;list-style:none;display:flex;justify-content:space-between;gap:16px}
.nafr-faq summary::after{content:"+";color:var(--nafr-accent);font-size:1.5rem;line-height:1}
.nafr-faq details[open] summary::after{content:"\2212"}
.nafr-faq p{color:var(--nafr-muted);margin:12px 0 0;max-width:72ch}
/* cta + form */
.nafr-cta{display:grid;grid-template-columns:1fr 1fr;gap:56px}
@media (max-width:900px){.nafr-cta{grid-template-columns:1fr}}
.nafr-form{background:var(--nafr-card);color:var(--nafr-text);border-radius:var(--nafr-radius);padding:30px;display:grid;gap:16px}
.nafr-form label{font-weight:600;font-size:.95rem;display:grid;gap:6px}
.nafr-form input,.nafr-form textarea,.nafr-form select{font:inherit;padding:12px 14px;border:1.5px solid #8a8f98;border-radius:10px;background:#fff;color:var(--nafr-text)}
.nafr-form button{justify-self:start;cursor:pointer;font:inherit}
.nafr-contact dt{font:500 .75rem var(--nafr-mono);letter-spacing:.1em;color:var(--nafr-on-dark-muted);margin-top:16px}
.nafr-contact dd{margin:4px 0 0}.nafr-contact a{color:#fff}
/* footer */
.nafr-footer{background:#0b1017;color:var(--nafr-on-dark-muted);padding:64px 0 28px}
.nafr-footer__grid{display:grid;grid-template-columns:1.4fr 1fr 1fr;gap:40px}
@media (max-width:800px){.nafr-footer__grid{grid-template-columns:1fr}}
.nafr-footer h2{font-size:1rem;color:#fff;margin-bottom:14px}
.nafr-footer ul{list-style:none;padding:0;margin:0;display:grid;gap:10px}
.nafr-footer a{color:var(--nafr-on-dark);text-decoration:none}.nafr-footer a:hover{text-decoration:underline}
.nafr-footer__base{border-top:1px solid #222c39;margin-top:44px;padding-top:22px;display:flex;justify-content:space-between;flex-wrap:wrap;gap:12px;font-size:.88rem}
.nafr-top{position:fixed;right:20px;bottom:20px;width:48px;height:48px;border-radius:50%;border:0;background:var(--nafr-accent);color:#fff;font-size:1.3rem;cursor:pointer;opacity:0;pointer-events:none;transition:opacity .3s;z-index:40}
.nafr-top.is-on{opacity:1;pointer-events:auto}
.nafr-reveal{opacity:0;transform:translateY(24px);transition:opacity .7s,transform .7s}
.nafr-reveal.is-in{opacity:1;transform:none}
@media (prefers-reduced-motion:reduce){.nafr-reveal{opacity:1;transform:none}}
.nafr-prose{max-width:760px}.nafr-prose h2{font-size:1.6rem;margin-top:40px}
"""

LOGO = ('<svg viewBox="0 0 40 40" aria-hidden="true"><rect x="1" y="1" width="38" height="38" rx="9" fill="none" stroke="#ff8a73" stroke-width="2"/>'
        '<path d="M6 30 L13 14 L19 24 L25 10 L34 20" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>'
        '<line x1="6" y1="33" x2="34" y2="33" stroke="#ff8a73" stroke-width="2" stroke-dasharray="3 3"/></svg>')

def header(current):
    items = "".join(f'<li><a href="{h}"{" aria-current=\"page\"" if h == current else ""}>{t}</a></li>' for h, t in NAV)
    return f'''<a class="nafr-skip" href="#main">Skip to content</a>
<header class="nafr-header" id="nafr-header"><div class="nafr-wrap nafr-header__bar">
<a class="nafr-logo" href="/" aria-label="NGYN AI Frontier home">{LOGO}<span>NGYN AI Frontier<small>LEAN SIX SIGMA</small></span></a>
<button class="nafr-burger" aria-expanded="false" aria-controls="nafr-nav" aria-label="Open menu">&#9776;</button>
<nav class="nafr-nav" id="nafr-nav" aria-label="Main"><ul>{items}<li><a class="nafr-btn nafr-btn--primary" href="/#contact">Book a process review</a></li></ul></nav>
</div></header>'''

FOOTER = f'''<footer class="nafr-footer"><div class="nafr-wrap">
<div class="nafr-footer__grid">
<div><a class="nafr-logo" href="/" style="color:#fff">{LOGO}<span>NGYN AI Frontier<small>LEAN SIX SIGMA</small></span></a>
<p>Lean Six Sigma process improvement for businesses of every size, with practical automation where the data says it pays.</p>
<address style="font-style:normal">001 NoWhere Avenue, ON, G5G 0R0, Canada<br><a href="tel:+19999999999">+1 999-999-9999</a><br><a href="mailto:info@mockup.ngynsolutions.com">info@mockup.ngynsolutions.com</a></address></div>
<div><h2>Services</h2><ul>
<li><a href="/dmaic-process-improvement">DMAIC process improvement</a></li>
<li><a href="/lean-six-sigma-small-business">Lean Six Sigma for small business</a></li>
<li><a href="/lean-six-sigma-training">Belt training and coaching</a></li></ul></div>
<div><h2>Company</h2><ul>
<li><a href="/#method">How we work</a></li><li><a href="/#faq">FAQ</a></li>
<li><a href="/#contact">Contact</a></li><li><a href="/accessibility">Accessibility</a></li></ul></div>
</div>
<div class="nafr-footer__base"><span>&copy; 2026 NGYN AI Frontier. All rights reserved.</span><span>Measure first. Improve what matters. Keep it in control.</span></div>
</div></footer>
<button class="nafr-top" id="nafr-top" aria-label="Back to top">&#8593;</button>'''

JS = r"""
(function(){
var h=document.getElementById('nafr-header'),top=document.getElementById('nafr-top');
function setPad(){document.documentElement.style.scrollPaddingTop=(h.offsetHeight+12)+'px'}
function onScroll(){var y=window.scrollY;h.classList.toggle('is-solid',y>30);top.classList.toggle('is-on',y>700)}
setPad();onScroll();addEventListener('resize',setPad);addEventListener('scroll',onScroll,{passive:true});
top.addEventListener('click',function(){scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'auto':'smooth'});document.getElementById('main').focus()});
var b=document.querySelector('.nafr-burger'),n=document.getElementById('nafr-nav');
b.addEventListener('click',function(){var o=n.classList.toggle('is-open');b.setAttribute('aria-expanded',o);b.setAttribute('aria-label',o?'Close menu':'Open menu')});
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&n.classList.contains('is-open')){n.classList.remove('is-open');b.setAttribute('aria-expanded','false');b.focus()}});
n.addEventListener('click',function(e){if(e.target.closest('a')){n.classList.remove('is-open');b.setAttribute('aria-expanded','false')}});
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('is-in');io.unobserve(e.target)}})},{threshold:.15});
document.querySelectorAll('.nafr-reveal,.nafr-dmaic li').forEach(function(el){io.observe(el)});
/* control chart hero: noisy process that settles inside control limits */
var svg=document.getElementById('nafr-cc');if(!svg)return;
var line=svg.querySelector('#nafr-cc-line'),dots=svg.querySelector('#nafr-cc-dots'),lbl=document.getElementById('nafr-cc-sigma'),
btn=document.getElementById('nafr-cc-pause'),N=40,t=0,running=!matchMedia('(prefers-reduced-motion:reduce)').matches,seed=1;
function rnd(){seed=(seed*16807)%2147483647;return seed/2147483647-.5}
function draw(){var spread=Math.max(.12,1-t/240),pts=[],html='';
 seed=7+Math.floor(t/6);
 for(var i=0;i<N;i++){var x=20+i*(560/(N-1)),late=i/N,s=spread*(1-late*.6)+.12*late,
  y=150+rnd()*220*s;y=Math.max(18,Math.min(282,y));pts.push(x.toFixed(1)+','+y.toFixed(1));
  var out=y<70||y>230;html+='<circle cx="'+x.toFixed(1)+'" cy="'+y.toFixed(1)+'" r="4" fill="'+(out?'#ff6b55':'#5fd3b0')+'"/>'}
 line.setAttribute('points',pts.join(' '));dots.innerHTML=html;
 lbl.textContent='Process capability: '+(1+ (Math.min(t,240)/240)*3.2).toFixed(1)+' sigma'}
function loop(){if(running){t=(t+1)%300;draw()}setTimeout(loop,90)}
if(!running)t=240;draw();loop();
btn.addEventListener('click',function(){running=!running;btn.textContent=running?'Pause':'Play';btn.setAttribute('aria-pressed',String(!running))});
if(!running){btn.textContent='Play';btn.setAttribute('aria-pressed','true')}
})();
"""

def faq(items):
    return "".join(f"<details><summary>{q}</summary><p>{a}</p></details>" for q, a in items)

def page(slug, title, desc, current, body):
    return f'''<!doctype html>
<html lang="en-CA"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{title}</title>
<meta name="description" content="{desc}">
<meta property="og:title" content="{title}"><meta property="og:description" content="{desc}"><meta property="og:image" content="{OG}">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=JetBrains+Mono:wght@500&family=Space+Grotesk:wght@500;600&display=swap" rel="stylesheet">
<style>{CSS}</style>
<script>window.AODA_ADA_CONFIG={{statementUrl:'/accessibility',feedbackEmail:'info@mockup.ngynsolutions.com',side:'left',
tokens:{{'--aoda-accent':'#d7351f','--aoda-accent-strong':'#a8240f','--aoda-on-accent':'#ffffff','--aoda-accent-soft':'#fbe3de',
'--aoda-font':"'DM Sans', 'DM Sans Fallback', sans-serif"}}}};</script>
<script src="aoda-ada.min.js"></script>
</head><body>
{header(current)}
<main id="main" tabindex="-1">
{body}
</main>
{FOOTER}
<script>{JS}</script>
</body></html>'''

def cta(heading="Start with a two-week process review",
        lead="Tell us which process hurts. We map it, measure it and come back with the three changes worth making first, ranked by payback."):
    return f'''<section class="nafr-section nafr-dark" id="contact"><div class="nafr-wrap nafr-cta">
<div class="nafr-reveal"><p class="nafr-eyebrow">Contact</p><h2>{heading}</h2><p class="nafr-lead">{lead}</p>
<dl class="nafr-contact"><dt>PHONE</dt><dd><a href="tel:+19999999999">+1 999-999-9999</a></dd>
<dt>EMAIL</dt><dd><a href="mailto:info@mockup.ngynsolutions.com">info@mockup.ngynsolutions.com</a></dd>
<dt>OFFICE</dt><dd>001 NoWhere Avenue, ON, G5G 0R0, Canada</dd></dl></div>
<form class="nafr-form nafr-reveal" action="/thank-you" method="get">
<label>Name<input name="name" autocomplete="name" required></label>
<label>Work email<input type="email" name="email" autocomplete="email" required></label>
<label>Phone<input type="tel" name="phone" autocomplete="tel"></label>
<label>Company size<select name="size"><option>1 to 10 people</option><option>11 to 50 people</option><option>51 to 250 people</option><option>250+ people</option></select></label>
<label>Which process is costing you the most?<textarea name="message" rows="4"></textarea></label>
<button class="nafr-btn nafr-btn--primary" type="submit">Request my process review</button>
</form></div></section>'''

def subhero(eyebrow, h1, lead, img, alt):
    return f'''<section class="nafr-hero nafr-hero--sub"><div class="nafr-wrap nafr-hero__grid">
<div><p class="nafr-eyebrow">{eyebrow}</p><h1>{h1}</h1><p class="nafr-lead">{lead}</p>
<div class="nafr-hero__actions"><a class="nafr-btn nafr-btn--primary" href="#contact">Book a process review</a></div></div>
<img src="{IMG.format(img)}" alt="{alt}" style="border-radius:14px;aspect-ratio:4/3;object-fit:cover;width:100%" width="800" height="600">
</div></section>'''

# ------------------------------------------------------------------ HOME
HOME_FAQ = [
 ("What is Lean Six Sigma?", "Lean Six Sigma is a process improvement method that combines Lean, which removes waste and delay, with Six Sigma, which reduces variation and defects using data. Projects follow the DMAIC cycle: Define, Measure, Analyze, Improve and Control."),
 ("Is Lean Six Sigma only for large manufacturers?", "No. The same tools work in a five person service business, a clinic, a contractor or an office team. We scale the method down: shorter projects, lighter statistics and changes the team can run without a full time improvement department."),
 ("How long does a Lean Six Sigma project take?", "A focused project usually runs 6 to 12 weeks. Small business quick wins such as 5S or a Kaizen event can show results in one to two weeks."),
 ("Where does AI fit into Lean Six Sigma?", "We use AI and automation only where the data shows a gain: collecting measurements automatically, flagging out of control points early and removing repetitive handoffs. Process first, tools second."),
 ("Do I need a certified Black Belt on staff?", "No. We lead the project and coach your people as they go. If you want internal capability, our Yellow Belt and Green Belt training builds it."),
]
HOME = f'''<section class="nafr-hero"><div class="nafr-wrap">
<div class="nafr-hero__grid">
<div><p class="nafr-eyebrow">Lean Six Sigma consulting</p>
<h1>Less waste. Less variation. Results you can measure.</h1>
<p class="nafr-lead">NGYN AI Frontier applies Lean Six Sigma to businesses of every size, from a ten person shop to a multi site operation. We measure the process, fix the causes and add practical automation only where the numbers prove it pays.</p>
<div class="nafr-hero__actions"><a class="nafr-btn nafr-btn--primary" href="#contact">Book a process review</a><a class="nafr-btn nafr-btn--ghost" href="/dmaic-process-improvement">See our DMAIC method</a></div></div>
<figure class="nafr-chart" style="margin:0">
<svg id="nafr-cc" viewBox="0 0 600 300" role="img" aria-label="Animated control chart: scattered process data settling between the upper and lower control limits as the process improves">
<line x1="20" y1="70" x2="580" y2="70" stroke="#ff8a73" stroke-dasharray="6 6"/><text x="580" y="62" text-anchor="end" fill="#ff8a73" font-size="12" font-family="JetBrains Mono">UCL</text>
<line x1="20" y1="150" x2="580" y2="150" stroke="#5c6b80"/><text x="580" y="142" text-anchor="end" fill="#a9b4c2" font-size="12" font-family="JetBrains Mono">MEAN</text>
<line x1="20" y1="230" x2="580" y2="230" stroke="#ff8a73" stroke-dasharray="6 6"/><text x="580" y="250" text-anchor="end" fill="#ff8a73" font-size="12" font-family="JetBrains Mono">LCL</text>
<polyline id="nafr-cc-line" fill="none" stroke="#5fd3b0" stroke-opacity=".55" stroke-width="2"/><g id="nafr-cc-dots"></g></svg>
<figcaption class="nafr-chart__legend"><span id="nafr-cc-sigma" aria-live="off">Process capability</span><button class="nafr-chart__pause" id="nafr-cc-pause" aria-pressed="false">Pause</button></figcaption>
</figure></div>
<div class="nafr-stats"><div><strong>DMAIC</strong><span>one proven method, every project</span></div><div><strong>6 to 12 weeks</strong><span>typical project length</span></div><div><strong>1 to 1,000+</strong><span>team sizes we work with</span></div></div>
</div></section>

<section class="nafr-section"><div class="nafr-wrap">
<div class="nafr-head nafr-reveal"><p class="nafr-eyebrow">The 8 wastes</p><h2>Most cost hides in the process, not the people</h2>
<p class="nafr-lead">Lean names eight wastes, remembered as DOWNTIME. Every business has them. Our first job is to find which ones are costing you the most.</p></div>
<div class="nafr-waste nafr-reveal">
<div><b>D</b><h3>Defects</h3><p>Rework, returns and errors that get fixed twice.</p></div>
<div><b>O</b><h3>Overproduction</h3><p>Making or preparing more than anyone ordered.</p></div>
<div><b>W</b><h3>Waiting</h3><p>Approvals, handoffs and idle equipment.</p></div>
<div><b>N</b><h3>Non used talent</h3><p>Skilled people stuck on manual busywork.</p></div>
<div><b>T</b><h3>Transport</h3><p>Moving material or files more than needed.</p></div>
<div><b>I</b><h3>Inventory</h3><p>Stock and backlog that ties up cash.</p></div>
<div><b>M</b><h3>Motion</h3><p>Searching, clicking and walking that adds no value.</p></div>
<div><b>E</b><h3>Extra processing</h3><p>Steps, reports and checks no customer pays for.</p></div>
</div></div></section>

<section class="nafr-section nafr-dark" id="method"><div class="nafr-wrap">
<div class="nafr-head nafr-reveal"><p class="nafr-eyebrow">How we work</p><h2>Every project follows DMAIC</h2>
<p class="nafr-lead">Define, Measure, Analyze, Improve, Control. It keeps opinions out of the room and makes the gains stick after we leave.</p></div>
<ol class="nafr-dmaic nafr-on-dark" style="padding:0;margin:0">
<li><b>D</b><h3>Define</h3><p>Agree the problem, the customer and the goal in one page.</p></li>
<li><b>M</b><h3>Measure</h3><p>Baseline the process with real data, not estimates.</p></li>
<li><b>A</b><h3>Analyze</h3><p>Prove the root causes with Pareto, fishbone and stats.</p></li>
<li><b>I</b><h3>Improve</h3><p>Pilot the fix, then roll it out with your team.</p></li>
<li><b>C</b><h3>Control</h3><p>Control charts and owners keep the gain in place.</p></li></ol>
<p style="margin-top:36px"><a class="nafr-btn nafr-btn--ghost" href="/dmaic-process-improvement">Read the full DMAIC guide</a></p>
</div></section>

<section class="nafr-section" id="services"><div class="nafr-wrap">
<div class="nafr-head nafr-reveal"><p class="nafr-eyebrow">Services</p><h2>Three ways to start</h2></div>
<div class="nafr-grid">
<article class="nafr-card nafr-reveal"><p class="nafr-card__tag">PROJECT</p><h3>DMAIC process improvement</h3><p>A consultant led project on one costly process, from baseline to control plan.</p><a class="nafr-more" href="/dmaic-process-improvement">DMAIC projects</a></article>
<article class="nafr-card nafr-reveal"><p class="nafr-card__tag">SMALL BUSINESS</p><h3>Lean for small teams</h3><p>5S, Kaizen events and simple visual controls that a small team can run itself.</p><a class="nafr-more" href="/lean-six-sigma-small-business">Lean for small business</a></article>
<article class="nafr-card nafr-reveal"><p class="nafr-card__tag">CAPABILITY</p><h3>Belt training and coaching</h3><p>Yellow Belt and Green Belt training built around a live project in your business.</p><a class="nafr-more" href="/lean-six-sigma-training">Training options</a></article>
</div></div></section>

<section class="nafr-section nafr-section--alt"><div class="nafr-wrap nafr-split">
<img class="nafr-reveal" src="{IMG.format('1556761175-5973dc0f32e7')}" alt="Team reviewing a process map on a whiteboard" width="800" height="600" loading="lazy">
<div class="nafr-reveal"><p class="nafr-eyebrow">Practical automation, measured</p><h2>Process first. Tools second.</h2>
<p class="nafr-lead">Automating a broken process just makes the mistakes faster. We fix the flow first, then add automation where it removes a measured waste.</p>
<ul class="nafr-list"><li>Capture measurements automatically instead of by clipboard</li><li>Flag out of control points before customers notice</li><li>Remove copy and paste handoffs between systems</li><li>Every change tracked against the baseline from Measure</li></ul></div>
</div></section>

<section class="nafr-section"><div class="nafr-wrap">
<div class="nafr-head nafr-reveal"><p class="nafr-eyebrow">Illustrative results</p><h2>What a finished project looks like</h2><p class="nafr-note">SAMPLE FIGURES FOR THIS TEST SITE, NOT REAL CLIENT RESULTS.</p></div>
<div class="nafr-grid">
<article class="nafr-card nafr-reveal"><p class="nafr-quote">Quote turnaround cut from 4 days to 1.</p><p>12 person contractor, Measure found 70% of delay was waiting for one approval.</p></article>
<article class="nafr-card nafr-reveal"><p class="nafr-quote">Order errors down 63% in 10 weeks.</p><p>Distributor, Pareto showed two SKUs and one form field caused most defects.</p></article>
<article class="nafr-card nafr-reveal"><p class="nafr-quote">Clinic wait time down 28 minutes.</p><p>Multi site clinic, Kaizen event rebuilt check in around patient flow.</p></article>
</div></div></section>

<section class="nafr-section nafr-section--alt" id="faq"><div class="nafr-wrap nafr-prose">
<p class="nafr-eyebrow">FAQ</p><h2>Lean Six Sigma questions, answered</h2><div class="nafr-faq">{faq(HOME_FAQ)}</div></div></section>
{cta()}'''

# ------------------------------------------------------------------ DMAIC
DMAIC_FAQ = [
 ("What does DMAIC stand for?", "DMAIC stands for Define, Measure, Analyze, Improve and Control. It is the five phase problem solving cycle at the heart of Six Sigma, used to improve an existing process."),
 ("What is the difference between DMAIC and DMADV?", "DMAIC improves a process that already exists. DMADV (Define, Measure, Analyze, Design, Verify) is used to design a new process or product from scratch."),
 ("Which tools are used in each DMAIC phase?", "Common tools are a project charter and SIPOC in Define, value stream maps and measurement system analysis in Measure, Pareto charts, fishbone diagrams and hypothesis tests in Analyze, pilots and mistake proofing in Improve, and control charts with a control plan in Control."),
 ("How do you know a DMAIC project worked?", "We compare the controlled process to the baseline captured in Measure, using the same metric and the same data source. If the gain does not hold for at least one full cycle, the project is not closed."),
]
DMAIC = subhero("DMAIC process improvement", "DMAIC: a five phase method to fix processes for good",
 "DMAIC is the Six Sigma cycle for improving an existing process: Define, Measure, Analyze, Improve, Control. Here is exactly what we do in each phase, the tools we use and what you get at the end.",
 "1552664730-d307ca884978", "Consultant pointing at process data on a wall during a workshop") + f'''
<section class="nafr-section"><div class="nafr-wrap">
<div class="nafr-head nafr-reveal"><p class="nafr-eyebrow">The five phases</p><h2>What happens in each phase</h2></div>
<div class="nafr-tablewrap nafr-reveal"><table class="nafr-table">
<caption class="nafr-note" style="caption-side:bottom;text-align:left;padding-top:10px">Typical project: 6 to 12 weeks.</caption>
<thead><tr><th scope="col">Phase</th><th scope="col">Question answered</th><th scope="col">Key tools</th><th scope="col">You receive</th></tr></thead><tbody>
<tr><th scope="row">Define</th><td>What problem, for which customer, worth how much?</td><td>Project charter, SIPOC, voice of the customer</td><td>One page charter with goal and scope</td></tr>
<tr><th scope="row">Measure</th><td>How does the process perform today?</td><td>Value stream map, data collection plan, measurement system analysis</td><td>Trusted baseline and current sigma level</td></tr>
<tr><th scope="row">Analyze</th><td>What actually causes the problem?</td><td>Pareto, fishbone, 5 Whys, regression, hypothesis tests</td><td>Verified root causes, ranked by impact</td></tr>
<tr><th scope="row">Improve</th><td>Which fix works, proven on a pilot?</td><td>Kaizen, mistake proofing, pilot runs, future state map</td><td>Tested solution and rollout plan</td></tr>
<tr><th scope="row">Control</th><td>How do we keep the gain?</td><td>Control charts, standard work, control plan, automated alerts</td><td>Owned control plan and monitoring</td></tr>
</tbody></table></div></div></section>

<section class="nafr-section nafr-dark"><div class="nafr-wrap">
<div class="nafr-head nafr-reveal"><p class="nafr-eyebrow">Timeline</p><h2>A sample 10 week DMAIC project</h2></div>
<ol class="nafr-dmaic nafr-on-dark" style="padding:0;margin:0">
<li><b>1</b><h3>Week 1</h3><p>Charter signed, team and sponsor named.</p></li>
<li><b>2</b><h3>Weeks 2 to 3</h3><p>Process walked, mapped and baselined.</p></li>
<li><b>3</b><h3>Weeks 4 to 5</h3><p>Root causes tested with data.</p></li>
<li><b>4</b><h3>Weeks 6 to 8</h3><p>Pilot, adjust, then roll out.</p></li>
<li><b>5</b><h3>Weeks 9 to 10</h3><p>Control plan handed to owners.</p></li></ol>
</div></section>

<section class="nafr-section"><div class="nafr-wrap nafr-split">
<div class="nafr-reveal"><p class="nafr-eyebrow">Control phase</p><h2>Where automation earns its place</h2>
<p class="nafr-lead">The Control phase is where most improvements quietly fade. We automate the monitoring so drift is caught in days, not quarters.</p>
<ul class="nafr-list"><li>Live control charts fed from your existing systems</li><li>Alerts when a point breaks a control limit or a run rule</li><li>Monthly capability report without manual spreadsheets</li></ul></div>
<img class="nafr-reveal" src="{IMG.format('1551288049-bebda4e38f71')}" alt="Dashboard with process performance charts on a laptop" width="800" height="600" loading="lazy">
</div></section>

<section class="nafr-section nafr-section--alt"><div class="nafr-wrap nafr-prose">
<p class="nafr-eyebrow">FAQ</p><h2>DMAIC questions</h2><div class="nafr-faq">{faq(DMAIC_FAQ)}</div>
<p style="margin-top:32px">Running a smaller team? See <a href="/lean-six-sigma-small-business">Lean Six Sigma for small business</a>.</p></div></section>
{cta("Pick one process. We will run DMAIC on it.")}'''

# ------------------------------------------------------------------ SMALL BUSINESS
SMB_FAQ = [
 ("Can a small business use Lean Six Sigma?", "Yes. Small businesses often see results faster than large ones because decisions are quick and the process is visible end to end. We use the lighter Lean tools first and bring in statistics only when the problem needs them."),
 ("What is the easiest Lean tool to start with?", "5S (Sort, Set in order, Shine, Standardize, Sustain) is the usual starting point. It needs no software, takes days, and makes every later improvement easier to see."),
 ("What is a Kaizen event?", "A Kaizen event is a focused improvement workshop, usually two to five days, where the people who do the work redesign one process and implement the change before the week ends."),
 ("How much does Lean Six Sigma consulting cost for a small business?", "It depends on scope. For this test site the figures are placeholders: a process review is a fixed fee, and projects are quoted after the Define phase so you know the cost before committing."),
]
SMB = subhero("Lean Six Sigma for small business", "Lean Six Sigma for small business, without the corporate overhead",
 "You do not need a quality department to run Lean Six Sigma. We bring the method down to the size of your team: short projects, plain language and fixes your people can keep running.",
 "1600880292203-757bb62b4baf", "Small business team planning work around a table") + f'''
<section class="nafr-section"><div class="nafr-wrap">
<div class="nafr-head nafr-reveal"><p class="nafr-eyebrow">By business size</p><h2>Same method, scaled to you</h2></div>
<div class="nafr-grid">
<article class="nafr-card nafr-reveal"><p class="nafr-card__tag">1 TO 10 PEOPLE</p><h3>Owner led</h3><p>The owner is the bottleneck. We map where your time goes and standardize the work others can take over.</p></article>
<article class="nafr-card nafr-reveal"><p class="nafr-card__tag">11 TO 50 PEOPLE</p><h3>Growing team</h3><p>Handoffs multiply and quality drifts. We set standard work, visual boards and one DMAIC project on the costliest process.</p></article>
<article class="nafr-card nafr-reveal"><p class="nafr-card__tag">51 TO 250 PEOPLE</p><h3>Scaling operation</h3><p>Departments optimize alone. We run cross functional value stream mapping and train internal Green Belts.</p></article>
<article class="nafr-card nafr-reveal"><p class="nafr-card__tag">250+ PEOPLE</p><h3>Multi site</h3><p>Variation between sites. We build a project pipeline, a control dashboard and a belt program.</p></article>
</div></div></section>

<section class="nafr-section nafr-section--alt"><div class="nafr-wrap nafr-split">
<img class="nafr-reveal" src="{IMG.format('1504384308090-c894fdcc538d')}" alt="Organized shared workspace with labelled storage" width="800" height="600" loading="lazy">
<div class="nafr-reveal"><p class="nafr-eyebrow">Quick wins</p><h2>Results in the first two weeks</h2>
<ul class="nafr-list"><li><strong>5S workplace organization</strong>: less searching, fewer errors</li>
<li><strong>Kaizen event</strong>: one process redesigned and live in a week</li>
<li><strong>Visual management board</strong>: problems seen the same day</li>
<li><strong>Standard work</strong>: the best way written down and trained</li>
<li><strong>Simple automation</strong>: one repeated manual step removed</li></ul></div>
</div></section>

<section class="nafr-section"><div class="nafr-wrap nafr-prose">
<p class="nafr-eyebrow">FAQ</p><h2>Small business questions</h2><div class="nafr-faq">{faq(SMB_FAQ)}</div>
<p style="margin-top:32px">Want your team to run this on their own? See <a href="/lean-six-sigma-training">Lean Six Sigma training</a>.</p></div></section>
{cta("Find your biggest waste in two weeks")}'''

# ------------------------------------------------------------------ TRAINING
TR_FAQ = [
 ("What is the difference between Yellow Belt and Green Belt?", "A Yellow Belt understands Lean Six Sigma basics and supports projects. A Green Belt leads improvement projects part time using the full DMAIC toolkit, including basic statistics."),
 ("How long does Green Belt training take?", "Our Green Belt program runs over about 8 weeks alongside a live project in your business, so the training pays for itself through the project result."),
 ("Is training delivered online or in person?", "Both. Classroom sessions can be on site or live online, and coaching happens on your real process."),
 ("Do I need statistics experience for Lean Six Sigma training?", "No. Yellow Belt needs none. Green Belt teaches the statistics you need, with templates that do the calculations."),
]
TRAIN = subhero("Lean Six Sigma training", "Lean Six Sigma training built around your own project",
 "Yellow Belt and Green Belt training where every exercise uses your real data. Your people finish with a skill, and your business finishes with a completed improvement.",
 "1524178232363-1fb2b075b655", "Instructor leading a training session with a small group") + f'''
<section class="nafr-section"><div class="nafr-wrap">
<div class="nafr-head nafr-reveal"><p class="nafr-eyebrow">Belt levels</p><h2>Choose the right level</h2></div>
<div class="nafr-tablewrap nafr-reveal"><table class="nafr-table">
<thead><tr><th scope="col">Level</th><th scope="col">Who it is for</th><th scope="col">Length</th><th scope="col">Outcome</th></tr></thead><tbody>
<tr><th scope="row">White Belt</th><td>Whole team awareness</td><td>Half day</td><td>Shared language for waste and improvement</td></tr>
<tr><th scope="row">Yellow Belt</th><td>Team members and supervisors</td><td>2 days</td><td>Can support projects and run 5S and Kaizen</td></tr>
<tr><th scope="row">Green Belt</th><td>Managers and process owners</td><td>About 8 weeks with a live project</td><td>Leads a full DMAIC project with data</td></tr>
<tr><th scope="row">Coaching</th><td>Internal improvement leads</td><td>Ongoing</td><td>Project pipeline and review support</td></tr>
</tbody></table></div><p class="nafr-note" style="margin-top:12px">COURSE LENGTHS ARE SAMPLE VALUES FOR THIS TEST SITE.</p></div></section>

<section class="nafr-section nafr-dark"><div class="nafr-wrap">
<div class="nafr-head nafr-reveal"><p class="nafr-eyebrow">How training runs</p><h2>Learn, apply, prove</h2></div>
<div class="nafr-grid">
<article class="nafr-card nafr-reveal"><p class="nafr-card__tag">01 LEARN</p><h3>Short sessions</h3><p>Concepts taught in focused blocks, never a week of slides.</p></article>
<article class="nafr-card nafr-reveal"><p class="nafr-card__tag">02 APPLY</p><h3>Your process</h3><p>Each tool is used on your own data the same week.</p></article>
<article class="nafr-card nafr-reveal"><p class="nafr-card__tag">03 PROVE</p><h3>Project review</h3><p>Completion means a measured result, not just an exam.</p></article>
</div></div></section>

<section class="nafr-section nafr-section--alt"><div class="nafr-wrap nafr-prose">
<p class="nafr-eyebrow">FAQ</p><h2>Training questions</h2><div class="nafr-faq">{faq(TR_FAQ)}</div>
<p style="margin-top:32px">See how a full project runs in our <a href="/dmaic-process-improvement">DMAIC guide</a>.</p></div></section>
{cta("Build improvement skills in your own team")}'''

# ------------------------------------------------------------------ UTILITY
def util(eyebrow, h1, html):
    return f'''<section class="nafr-hero nafr-hero--sub"><div class="nafr-wrap"><p class="nafr-eyebrow">{eyebrow}</p><h1>{h1}</h1></div></section>
<section class="nafr-section"><div class="nafr-wrap nafr-prose">{html}</div></section>'''

NOTFOUND = util("Error 404", "This page is out of control limits", '''<p class="nafr-lead">The page you asked for does not exist or has moved.</p>
<p>Try one of these instead:</p><ul class="nafr-list"><li><a href="/">Home</a></li><li><a href="/dmaic-process-improvement">DMAIC process improvement</a></li>
<li><a href="/lean-six-sigma-small-business">Lean Six Sigma for small business</a></li><li><a href="/lean-six-sigma-training">Lean Six Sigma training</a></li></ul>''')
THANKS = util("Thank you", "Thanks. Your request is in.", '''<p class="nafr-lead">We will reply within one business day to schedule your process review.</p>
<p>While you wait, read how a project runs in our <a href="/dmaic-process-improvement">DMAIC guide</a>.</p>
<p><a class="nafr-btn nafr-btn--primary" href="/">Back to home</a></p>''')
A11Y = util("Accessibility", "Accessibility statement", '''<p class="nafr-note">LAST UPDATED: 15 OCTOBER 2026</p>
<h2>Our commitment</h2><p>NGYN AI Frontier is committed to providing a website that everyone can use, including people with disabilities. We follow the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA, the standard referenced by the Accessibility for Ontarians with Disabilities Act (AODA) and used under the Americans with Disabilities Act (ADA).</p>
<h2>What we do</h2><ul class="nafr-list"><li>Clear headings, labels and landmarks for screen readers.</li><li>Every feature works with a keyboard alone.</li><li>Colour contrast, text sizing and zoom to 200% are checked.</li><li>Images have text alternatives; animations can be paused.</li></ul>
<h2>Accessibility options on this site</h2><p>The accessibility button on every page lets you change text size and spacing, switch to high contrast or a readable font, stop animations, use a reading guide and more. Your choices are saved in your browser only and work alongside your own tools, such as browser zoom and screen readers.</p>
<h2>Accessible formats and communication supports</h2><p>If you need any information on this site in another format, contact us and we will provide it in a timely manner at no cost.</p>
<h2>Feedback</h2><dl><dt><strong>Email</strong></dt><dd><a href="mailto:info@mockup.ngynsolutions.com">info@mockup.ngynsolutions.com</a></dd><dt><strong>Phone</strong></dt><dd><a href="tel:+19999999999">+1 999-999-9999</a></dd><dt><strong>Mail</strong></dt><dd>001 NoWhere Avenue, ON, G5G 0R0, Canada</dd></dl>
<p>We aim to respond within two business days.</p>''')

PAGES = [
 ("home", "Lean Six Sigma Consulting for Any Business Size | NGYN", "Lean Six Sigma consulting for small and growing businesses. DMAIC projects, waste reduction and practical automation that cut cost and variation you can measure.", "/", HOME),
 ("dmaic-process-improvement", "DMAIC Process Improvement Consulting | NGYN AI Frontier", "DMAIC explained phase by phase: Define, Measure, Analyze, Improve, Control. See the tools, a 10 week timeline and what you receive from each Six Sigma phase.", "/dmaic-process-improvement", DMAIC),
 ("lean-six-sigma-small-business", "Lean Six Sigma for Small Business | NGYN AI Frontier", "Lean Six Sigma for small business without corporate overhead. 5S, Kaizen events and DMAIC scaled to teams of 1 to 250 people, with quick wins in two weeks.", "/lean-six-sigma-small-business", SMB),
 ("lean-six-sigma-training", "Lean Six Sigma Training: Yellow & Green Belt | NGYN", "Lean Six Sigma Yellow Belt and Green Belt training built around a live project in your business. Learn DMAIC on your own data and finish with a measured result.", "/lean-six-sigma-training", TRAIN),
 ("404", "Page Not Found | NGYN AI Frontier", "The page you were looking for could not be found. Explore Lean Six Sigma consulting, DMAIC process improvement and training from NGYN AI Frontier instead.", "", NOTFOUND),
 ("thank-you", "Thank You | NGYN AI Frontier", "Thanks for requesting a Lean Six Sigma process review from NGYN AI Frontier. We will reply within one business day to schedule a time that works for you.", "", THANKS),
 ("accessibility", "Accessibility Statement | NGYN AI Frontier", "How NGYN AI Frontier makes its website usable for everyone: WCAG 2.1 AA practices, accessibility options on every page and how to request accessible formats.", "", A11Y),
]

for slug, title, desc, cur, body in PAGES:
    assert "—" not in body + desc and "–" not in body + desc, slug
    (ROOT / "drafts" / f"{slug}.html").write_text(page(slug, title, desc, cur, body), encoding="utf-8")
print("drafts:", len(PAGES))
