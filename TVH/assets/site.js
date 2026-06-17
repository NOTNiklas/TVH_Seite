(function(){
  /* ---------- Navigation ---------- */
  function initNav(){
    var burger=document.querySelector('.burger');
    var menu=document.querySelector('.mobile-menu');
    if(!burger||!menu) return;
    burger.addEventListener('click',function(){
      var open=menu.classList.toggle('open');
      burger.classList.toggle('open',open);
      burger.setAttribute('aria-expanded',open);
      document.body.style.overflow=open?'hidden':'';
    });
    menu.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click',function(){
        menu.classList.remove('open');burger.classList.remove('open');document.body.style.overflow='';
      });
    });
  }

  function qa(sel){return Array.prototype.slice.call(document.querySelectorAll(sel));}
  function esc(t){return String(t==null?'':t).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
  function startZeit(z){var p=String(z||'').split('–')[0].split(' - ')[0].trim();return p||'–';}
  /* Pfad-Präfix: Berichtseiten liegen im Unterordner „berichte/" und
     müssen Links/Skripte mit „../" ansteuern. */
  function base(){return document.body.getAttribute('data-base')||'';}

  /* ---------- Zentrale Daten (assets/daten.js) einsetzen ----------
     Füllt alle [data-daten="…"]-Container mit Inhalten aus
     window.TVH_DATEN. Inhalte pflegen: NUR in assets/daten.js. */
  function renderDaten(){
    var D=window.TVH_DATEN;
    if(!D) return;
    var B=base();

    /* --- Ticker (Startseite) --- */
    qa('[data-daten="ticker"]').forEach(function(el){
      var h=(D.ticker||[]).map(function(t){return '<span>'+esc(t)+'</span>';}).join('');
      el.innerHTML=h+h;
    });

    /* --- Kompakte Trainings-Tabelle (Startseite) --- */
    qa('[data-daten="training-kompakt"]').forEach(function(el){
      el.innerHTML=(D.training||[]).map(function(r){
        var who=r.hinweis?esc(r.hinweis)+' · '+esc(r.halle):esc(r.halle);
        var tm=r.hinweis?'Bald':esc(startZeit(r.zeit));
        return '<tr><td class="day">'+esc(r.tag)+'</td><td><span class="grp">'+esc(r.gruppe)+'</span><br><span class="who">'+who+'</span></td><td class="tm" style="text-align:right">'+tm+'</td></tr>';
      }).join('');
    });

    /* --- Volle Trainings-Tabelle (Seite Volleyball) --- */
    qa('[data-daten="training-voll"]').forEach(function(el){
      el.innerHTML=(D.training||[]).map(function(r){
        var hin=r.hinweis?' <span style="font-weight:600;color:var(--muted)">('+esc(r.hinweis)+')</span>':'';
        return '<tr><td class="day">'+esc(r.tag)+'</td><td class="grp">'+esc(r.gruppe)+hin+'</td><td class="hall">'+esc(r.halle)+'</td><td class="tm" style="text-align:right">'+esc(r.zeit)+'</td></tr>';
      }).join('');
    });

    /* --- Trainingszeilen einer Mannschaft (Teamseiten) --- */
    qa('[data-daten="training-team"]').forEach(function(el){
      var team=el.getAttribute('data-team');
      var rows=(D.training||[]).filter(function(r){return r.gruppe===team&&!r.hinweis;});
      el.innerHTML=rows.map(function(r,i){
        return '<div class="info-row"'+(i===0?' style="border-top:1px solid var(--line)"':'')+'><div class="ico">'+esc(r.tag)+'</div><div><h4>'+esc(r.titel||r.gruppe+'-Training')+'</h4><p>'+esc(r.zeit)+' Uhr · '+esc(r.halle)+'</p></div></div>';
      }).join('');
    });

    /* --- Kurzinfo „Training" auf Team-Karten --- */
    qa('[data-daten="team-kurz"]').forEach(function(el){
      var key=el.getAttribute('data-team');
      el.textContent=(D.teams&&D.teams[key])||'';
    });

    /* --- Hallen / Spielstätten (Seite Volleyball) --- */
    qa('[data-daten="hallen"]').forEach(function(el){
      el.innerHTML=(D.hallen||[]).map(function(h){
        return '<div class="loc"><div class="ph"><span class="ph-tag">'+esc(h.foto||('Karte / Foto · '+h.name))+'</span></div><div class="lc-b"><span class="tag'+(h.ghost?' tag--ghost':'')+'">'+esc(h.label)+'</span><h3 style="margin:12px 0 8px">'+esc(h.name)+'</h3><p style="color:var(--muted);margin:0 0 6px">'+esc(h.adresse)+'</p><p style="color:var(--muted);margin:0;font-size:15px">'+esc(h.info)+'</p></div></div>';
      }).join('');
    });

    /* --- Bild-Block: echtes Foto (n.bild) oder Platzhalter (n.foto) --- */
    function phBlock(n,cls){
      cls=cls?(' '+cls):'';
      if(n.bild){
        return '<div class="ph'+cls+'"><img class="ph-photo" src="'+esc(B+n.bild)+'" alt="'+esc(n.titel||'')+'" loading="lazy"></div>';
      }
      return '<div class="ph'+cls+'"><span class="ph-tag">'+esc(n.foto||'Foto')+'</span></div>';
    }
    /* --- Link zu einer Berichtsseite (slug) bzw. externer Link --- */
    function newsHref(n){
      if(n.slug)return B+'berichte/bericht-'+n.slug+'.html';
      return n.link?(B+n.link):'';
    }

    /* --- News-Karte --- */
    function newsCard(n){
      var href=newsHref(n);
      var inner=phBlock(n)+
        '<div class="nb"><div class="nmeta"><span class="tag">'+esc(n.kategorie)+'</span><span>'+esc(n.datum)+'</span></div>'+
        '<h3>'+esc(n.titel)+'</h3><p>'+esc(n.text)+'</p>'+
        (href?'<span class="txtlink">Weiterlesen <span class="arr">→</span></span>':'')+'</div>';
      return href
        ?'<a class="card news reveal" href="'+esc(href)+'">'+inner+'</a>'
        :'<article class="card news reveal">'+inner+'</article>';
    }

    /* --- News-Raster — data-limit (max), data-skip (überspringen) --- */
    qa('[data-daten="news-grid"]').forEach(function(el){
      var skip=parseInt(el.getAttribute('data-skip')||'0',10);
      var limit=parseInt(el.getAttribute('data-limit')||'0',10);
      var list=(D.news||[]).slice(skip);
      if(limit>0)list=list.slice(0,limit);
      el.innerHTML=list.map(newsCard).join('');
    });

    /* --- News-Aufmacher (Seite Aktuelles) — immer der neueste --- */
    qa('[data-daten="news-feature"]').forEach(function(el){
      var n=(D.news||[])[0];
      if(!n){el.style.display='none';return;}
      var href=newsHref(n);
      el.innerHTML=phBlock(n)+
        '<div class="fb"><div style="display:flex;gap:10px;align-items:center"><span class="tag">'+esc(n.kategorie)+'</span><span style="font-size:12px;letter-spacing:.1em;text-transform:uppercase;font-weight:700;color:var(--muted)">'+esc(n.datum)+'</span></div>'+
        '<h2>'+esc(n.titel)+'</h2>'+
        '<p style="color:var(--muted);margin:0 0 22px;max-width:54ch">'+esc(n.textLang||n.text)+'</p>'+
        (href?'<a class="btn btn--outline" href="'+esc(href)+'" style="align-self:flex-start">Ganzen Bericht lesen <span class="arr">→</span></a>':'')+
        '</div>';
    });

    /* --- Termine (Seite Aktuelles) --- */
    qa('[data-daten="termine"]').forEach(function(el){
      var list=D.termine||[];
      if(!list.length){var sec=el.closest('section');if(sec)sec.style.display='none';return;}
      el.innerHTML=list.map(function(t){
        return '<div class="up"><div class="date"><div class="d">'+esc(t.tagNr)+'</div><div class="m">'+esc(t.monat)+'</div></div><div class="uinfo"><div class="l">'+esc(t.label)+'</div><div class="t">'+esc(t.titel)+'</div><div class="s">'+esc(t.ort)+'</div></div><div class="utime">'+esc(t.zeit)+'</div></div>';
      }).join('');
    });

    /* --- FAQ-Blöcke (Volleyball + Mitglied werden) --- */
    qa('[data-daten="faq"]').forEach(function(el){
      var key=el.getAttribute('data-faq');
      var list=(D.faq&&D.faq[key])||[];
      el.innerHTML=list.map(function(f){
        return '<details><summary>'+esc(f.q)+'<span class="pm"></span></summary><div class="acc-body">'+esc(f.a)+'</div></details>';
      }).join('');
    });

    /* --- Steckbrief-Kacheln (Herren / Mixed) --- */
    qa('[data-daten="facts"]').forEach(function(el){
      var team=el.getAttribute('data-team');
      var list=(D[team]&&D[team].facts)||[];
      el.innerHTML=list.map(function(f){
        return '<div class="qf"><div class="k">'+esc(f.k)+'</div><div class="v">'+(f.v||'')+'</div></div>';
      }).join('');
    });

    /* --- Kader (Herren) --- */
    qa('[data-daten="roster"]').forEach(function(el){
      var team=el.getAttribute('data-team');
      var list=(D[team]&&D[team].roster)||[];
      el.innerHTML=list.map(function(p){
        var role=p.role?'<span class="rrole">'+esc(p.role)+'</span>':'';
        return '<details><summary><span class="rnum">'+esc(p.nr)+'</span><span class="rname">'+esc(p.name)+'</span>'+role+'<span class="rpos">'+esc(p.pos)+'</span><span class="chev" aria-hidden="true"></span></summary><div class="rport"><div class="ph dark-ph"><span class="ph-tag">Foto · '+esc(p.name)+'</span></div></div></details>';
      }).join('');
    });

    /* --- Trainerteam / Übungsleiter (Herren / Mixed) --- */
    qa('[data-daten="staff"]').forEach(function(el){
      var team=el.getAttribute('data-team');
      var list=(D[team]&&D[team].staff)||[];
      el.innerHTML=list.map(function(s){
        return '<div class="staffcard"><div class="srole">'+esc(s.role)+'</div><h3>'+esc(s.name)+'</h3><p>'+esc(s.text)+'</p></div>';
      }).join('');
    });

    /* --- Letzte Ergebnisse (Herren) --- */
    qa('[data-daten="results"]').forEach(function(el){
      var team=el.getAttribute('data-team');
      var list=(D[team]&&D[team].results)||[];
      el.innerHTML=list.map(function(r){
        return '<tr><td>'+esc(r.datum)+'</td><td>'+esc(r.gegner)+'</td><td>'+esc(r.ha)+'</td><td class="score '+esc(r.erg)+'" style="text-align:right">'+esc(r.satz)+'</td></tr>';
      }).join('');
    });

    /* --- Nächstes Spiel + Countdown (Herren / Mixed) --- */
    qa('[data-daten="nextmatch"]').forEach(function(el){
      var team=el.getAttribute('data-team');
      var m=(D[team]&&D[team].nextMatch);
      if(!m){el.style.display='none';return;}
      var text=m.text?'<p style="color:var(--muted-dark);margin:10px 0 0;max-width:42ch">'+esc(m.text)+'</p>':'';
      var meta=(m.meta||[]).map(function(x){return '<span>'+esc(x)+'</span>';}).join('');
      el.innerHTML='<span class="ghost-mark" aria-hidden="true">'+esc(m.ghost||'VS')+'</span>'+
        '<div class="nm-in"><div>'+
          '<span class="kicker kicker--light">'+esc(m.kicker||'')+'</span>'+
          '<h3 style="margin:14px 0 0">'+(m.title||'')+'</h3>'+text+
          '<div class="nm-meta">'+meta+'</div>'+
        '</div>'+
        '<div class="count" data-countdown data-iso="'+esc(m.iso||'')+'" data-endtext="'+esc(m.endText||'Anpfiff!')+'" data-endsub="'+esc(m.endSub||'')+'" aria-label="Countdown bis zum nächsten Termin">'+
          '<div class="cbox"><strong data-d>–</strong><span>Tage</span></div>'+
          '<div class="cbox"><strong data-h>–</strong><span>Std</span></div>'+
          '<div class="cbox"><strong data-m>–</strong><span>Min</span></div>'+
          '<div class="cbox"><strong data-s>–</strong><span>Sek</span></div>'+
        '</div></div>';
    });

    /* --- Tarife (Mitglied werden) --- */
    qa('[data-daten="tarife"]').forEach(function(el){
      el.innerHTML=(D.tarife||[]).map(function(t){
        var flag=t.flag?'<span class="flag">'+esc(t.flag)+'</span>':'';
        var items=(t.items||[]).map(function(i){return '<li>'+esc(i)+'</li>';}).join('');
        var cta=t.cta||{};
        var arrow=t.feat?' <span class="arr">→</span>':'';
        var btnCls=t.feat?'btn':'btn btn--outline';
        return '<div class="plan'+(t.feat?' feat':'')+'">'+flag+
          '<div class="pl-name">'+esc(t.name)+'</div>'+
          '<div class="pl-price">'+esc(t.preis)+'</div><div class="pl-per">'+esc(t.per)+'</div>'+
          '<ul>'+items+'</ul>'+
          '<a class="'+btnCls+'" href="'+esc(cta.href||'#')+'" target="_blank" rel="noopener">'+esc(cta.label||'Mehr')+arrow+'</a>'+
        '</div>';
      }).join('');
    });

    /* --- Footer: Trainings-Spalte --- */
    qa('[data-daten="footer-training"]').forEach(function(el){
      el.innerHTML=(D.training||[]).map(function(r){
        if(r.hinweis)return '<li>'+esc(r.gruppe)+' · Coming Soon</li>';
        return '<li>'+esc(r.tag)+' · '+esc(r.gruppe)+' · '+esc(startZeit(r.zeit))+'</li>';
      }).join('');
    });

    /* --- Footer: Kontakt-Spalte --- */
    qa('[data-daten="footer-kontakt"]').forEach(function(el){
      var k=D.kontakt||{};
      var h=(k.adresse||[]).map(function(z){return '<li>'+esc(z)+'</li>';}).join('');
      if(k.email)h+='<li><a href="mailto:'+esc(k.email)+'">'+esc(k.email)+'</a></li>';
      if(k.kurabu)h+='<li><a href="'+esc(k.kurabu)+'" target="_blank" rel="noopener">Mitglieder-Login (KURABU)</a></li>';
      if(k.instagramUrl)h+='<li style="margin-top:6px"><a href="'+esc(k.instagramUrl)+'" target="_blank" rel="noopener">Instagram · '+esc(k.instagram||'Instagram')+'</a></li>';
      el.innerHTML=h;
    });
  }

  /* ---------- Countdowns (datengetrieben) ---------- */
  function initCountdowns(){
    qa('[data-countdown]').forEach(function(box){
      var iso=box.getAttribute('data-iso'); if(!iso)return;
      var target=new Date(iso).getTime();
      if(isNaN(target))return;
      var dEl=box.querySelector('[data-d]'),hEl=box.querySelector('[data-h]'),mEl=box.querySelector('[data-m]'),sEl=box.querySelector('[data-s]');
      function pad(n){return(n<10?'0':'')+n;}
      function tick(){
        var diff=target-Date.now();
        if(diff<=0){
          box.innerHTML='<div class="cbox" style="min-width:auto;padding:14px 22px"><strong style="font-size:20px">'+(box.getAttribute('data-endtext')||'Anpfiff!')+'</strong><span>'+(box.getAttribute('data-endsub')||'')+'</span></div>';
          return;
        }
        var d=Math.floor(diff/86400000),h=Math.floor(diff%86400000/3600000),m=Math.floor(diff%3600000/60000),s=Math.floor(diff%60000/1000);
        if(dEl)dEl.textContent=d; if(hEl)hEl.textContent=pad(h); if(mEl)mEl.textContent=pad(m); if(sEl)sEl.textContent=pad(s);
        setTimeout(tick,1000);
      }
      tick();
    });
  }

  /* ---------- Mannschaften-Filter (nur wo vorhanden) ---------- */
  function initFilter(){
    var chips=qa('#filter .chip');
    if(!chips.length)return;
    var rows=qa('#roster .trow');
    var empty=document.getElementById('empty');
    chips.forEach(function(c){
      c.addEventListener('click',function(){
        chips.forEach(function(x){x.classList.remove('active')});
        c.classList.add('active');
        var cat=c.dataset.cat,shown=0;
        rows.forEach(function(r){
          var ok=cat==='all'||r.dataset.cat===cat;
          r.style.display=ok?'':'none';
          if(ok)shown++;
        });
        if(empty)empty.style.display=shown?'none':'block';
      });
    });
  }

  /* ---------- Scroll-Reveal ---------- */
  function initReveal(){
    var els=document.querySelectorAll('.reveal');
    if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')});return;}
    var io=new IntersectionObserver(function(ents){
      ents.forEach(function(en){
        if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target);}
      });
    },{threshold:.12,rootMargin:'0px 0px -8% 0px'});
    els.forEach(function(e){io.observe(e)});
  }

  /* ---------- Berichtsseite aus daten.js aufbauen ----------
     Eine Berichtsseite trägt am Hero  data-artikel="<slug>".
     Der passende News-Eintrag liefert Tag, Titel, Datum, Bild,
     Einleitung, Fließtext (inhalt) und die „Weitere Beiträge". */
  function renderArtikel(){
    var D=window.TVH_DATEN; if(!D) return;
    var B=base();
    var root=document.querySelector('[data-artikel]');
    if(!root) return;
    var slug=root.getAttribute('data-artikel');
    var list=D.news||[];
    var n=null;
    for(var i=0;i<list.length;i++){if(list[i].slug===slug){n=list[i];break;}}
    if(!n){
      qa('[data-daten="art-hero-inner"]').forEach(function(el){
        el.innerHTML='<h1>Bericht nicht gefunden</h1>';
      });
      return;
    }

    if(n.titel)document.title='TVH Volleyball | '+n.titel;
    var metaEl=document.querySelector('meta[name="description"]');
    if(metaEl&&(n.lead||n.text))metaEl.setAttribute('content',n.lead||n.text);

    function phBlock(item,cls){
      cls=cls?(' '+cls):'';
      if(item.bild)return '<div class="ph'+cls+'"><img class="ph-photo" src="'+esc(B+item.bild)+'" alt="'+esc(item.titel||'')+'" loading="lazy"></div>';
      return '<div class="ph'+cls+'"><span class="ph-tag">'+esc(item.foto||'Foto')+'</span></div>';
    }
    function artBody(item){
      var h='';
      var lead=item.lead||item.text;
      if(lead)h+='<p class="lead">'+esc(lead)+'</p>';
      (item.inhalt||[]).forEach(function(b){
        if(typeof b==='string'){h+='<p>'+esc(b)+'</p>';}
        else if(b.h){h+='<h3>'+esc(b.h)+'</h3>';}
        else if(b.liste){h+='<ul>'+b.liste.map(function(x){return '<li>'+esc(x)+'</li>';}).join('')+'</ul>';}
        else if(b.pull){h+='<blockquote class="pull">'+esc(b.pull)+(b.quelle?'<cite>'+esc(b.quelle)+'</cite>':'')+'</blockquote>';}
      });
      return h;
    }

    qa('[data-daten="art-hero-inner"]').forEach(function(el){
      el.innerHTML='<div class="crumb"><a href="'+B+'index.html">Start</a> <span>/</span> <a href="'+B+'aktuelles.html">Aktuelles</a> <span>/</span> <span style="color:#fff">'+esc(n.kategorie)+'</span></div>'+
        '<div class="art-tagrow" style="margin-top:14px"><span class="tag">'+esc(n.kategorie)+'</span><span class="art-date">'+esc(n.datum)+'</span></div>'+
        '<h1>'+esc(n.titel)+'</h1>';
    });
    qa('[data-daten="art-main"]').forEach(function(el){
      el.innerHTML=phBlock(n,'art-hero-img')+
        '<div class="art-body">'+artBody(n)+'</div>'+
        '<div class="art-foot"><a class="txtlink" href="'+B+'aktuelles.html"><span class="arr" style="display:inline-block;transform:rotate(180deg)">→</span> Zurück zu Aktuelles</a><span style="color:var(--muted);font-size:14px;font-weight:600">TV Hermeskeil · Abteilung Volleyball</span></div>';
    });
    qa('[data-daten="art-more"]').forEach(function(el){
      var others=list.filter(function(x){return x.slug&&x.slug!==slug;}).slice(0,3);
      el.innerHTML=others.map(function(o){
        return '<a class="card news reveal" href="'+esc(B+'berichte/bericht-'+o.slug+'.html')+'">'+phBlock(o)+
          '<div class="nb"><div class="nmeta"><span class="tag">'+esc(o.kategorie)+'</span><span>'+esc(o.datum)+'</span></div><h3>'+esc(o.titel)+'</h3><span class="txtlink">Weiterlesen <span class="arr">→</span></span></div></a>';
      }).join('');
    });
  }

  function boot(){initNav();renderDaten();renderArtikel();initCountdowns();initFilter();initReveal();}
  if(document.readyState!=='loading'){boot();}
  else document.addEventListener('DOMContentLoaded',boot);
})();
