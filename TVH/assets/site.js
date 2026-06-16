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

  /* ---------- Zentrale Daten (assets/daten.js) einsetzen ----------
     Sucht auf der Seite nach [data-daten="..."]-Containern und füllt
     sie mit den Inhalten aus window.TVH_DATEN. Inhalte pflegen:
     NUR in assets/daten.js — hier muss nichts geändert werden. */
  function renderDaten(){
    var D=window.TVH_DATEN;
    if(!D) return;
    function qa(sel){return Array.prototype.slice.call(document.querySelectorAll(sel));}
    function esc(t){return String(t==null?'':t).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
    function startZeit(z){var p=String(z||'').split('–')[0].split(' - ')[0].trim();return p||'–';}

    /* Ticker (Startseite) — Inhalt doppelt für die Endlos-Animation */
    qa('[data-daten="ticker"]').forEach(function(el){
      var h=(D.ticker||[]).map(function(t){return '<span>'+esc(t)+'</span>';}).join('');
      el.innerHTML=h+h;
    });

    /* Kompakte Trainings-Tabelle (Startseite) */
    qa('[data-daten="training-kompakt"]').forEach(function(el){
      el.innerHTML=(D.training||[]).map(function(r){
        var who=r.hinweis?esc(r.hinweis)+' · '+esc(r.halle):esc(r.halle);
        var tm=r.hinweis?'Bald':esc(startZeit(r.zeit));
        return '<tr><td class="day">'+esc(r.tag)+'</td><td><span class="grp">'+esc(r.gruppe)+'</span><br><span class="who">'+who+'</span></td><td class="tm" style="text-align:right">'+tm+'</td></tr>';
      }).join('');
    });

    /* Volle Trainings-Tabelle (Seite Volleyball) */
    qa('[data-daten="training-voll"]').forEach(function(el){
      el.innerHTML=(D.training||[]).map(function(r){
        var hin=r.hinweis?' <span style="font-weight:600;color:var(--muted)">('+esc(r.hinweis)+')</span>':'';
        return '<tr><td class="day">'+esc(r.tag)+'</td><td class="grp">'+esc(r.gruppe)+hin+'</td><td class="hall">'+esc(r.halle)+'</td><td class="tm" style="text-align:right">'+esc(r.zeit)+'</td></tr>';
      }).join('');
    });

    /* Trainingszeilen einer Mannschaft (Teamseiten) */
    qa('[data-daten="training-team"]').forEach(function(el){
      var team=el.getAttribute('data-team');
      var rows=(D.training||[]).filter(function(r){return r.gruppe===team&&!r.hinweis;});
      el.innerHTML=rows.map(function(r,i){
        return '<div class="info-row"'+(i===0?' style="border-top:1px solid var(--line)"':'')+'><div class="ico">'+esc(r.tag)+'</div><div><h4>'+esc(r.titel||r.gruppe+'-Training')+'</h4><p>'+esc(r.zeit)+' Uhr · '+esc(r.halle)+'</p></div></div>';
      }).join('');
    });

    /* Kurzinfo „Training“ auf Team-Karten */
    qa('[data-daten="team-kurz"]').forEach(function(el){
      var key=el.getAttribute('data-team');
      el.textContent=(D.teams&&D.teams[key])||'';
    });

    /* Hallen / Spielstätten (Seite Volleyball) */
    qa('[data-daten="hallen"]').forEach(function(el){
      el.innerHTML=(D.hallen||[]).map(function(h){
        return '<div class="loc"><div class="ph"><span class="ph-tag">'+esc(h.foto||('Karte / Foto · '+h.name))+'</span></div><div class="lc-b"><span class="tag'+(h.ghost?' tag--ghost':'')+'">'+esc(h.label)+'</span><h3 style="margin:12px 0 8px">'+esc(h.name)+'</h3><p style="color:var(--muted);margin:0 0 6px">'+esc(h.adresse)+'</p><p style="color:var(--muted);margin:0;font-size:15px">'+esc(h.info)+'</p></div></div>';
      }).join('');
    });

    /* News-Karte */
    function newsCard(n){
      var inner='<div class="ph"><span class="ph-tag">'+esc(n.foto||'Foto')+'</span></div>'+
        '<div class="nb"><div class="nmeta"><span class="tag">'+esc(n.kategorie)+'</span><span>'+esc(n.datum)+'</span></div>'+
        '<h3>'+esc(n.titel)+'</h3><p>'+esc(n.text)+'</p>'+
        (n.link?'<span class="txtlink">Weiterlesen <span class="arr">→</span></span>':'')+'</div>';
      return n.link
        ?'<a class="card news reveal" href="'+esc(n.link)+'">'+inner+'</a>'
        :'<article class="card news reveal">'+inner+'</article>';
    }

    /* News-Raster — data-limit="3" (max. Anzahl), data-skip="1" (überspringt die neuesten) */
    qa('[data-daten="news-grid"]').forEach(function(el){
      var skip=parseInt(el.getAttribute('data-skip')||'0',10);
      var limit=parseInt(el.getAttribute('data-limit')||'0',10);
      var list=(D.news||[]).slice(skip);
      if(limit>0)list=list.slice(0,limit);
      el.innerHTML=list.map(newsCard).join('');
    });

    /* News-Aufmacher (Seite Aktuelles) — immer der neueste Beitrag */
    qa('[data-daten="news-feature"]').forEach(function(el){
      var n=(D.news||[])[0];
      if(!n){el.style.display='none';return;}
      el.innerHTML='<div class="ph"><span class="ph-tag">'+esc(n.foto||'Foto')+'</span></div>'+
        '<div class="fb"><div style="display:flex;gap:10px;align-items:center"><span class="tag">'+esc(n.kategorie)+'</span><span style="font-size:12px;letter-spacing:.1em;text-transform:uppercase;font-weight:700;color:var(--muted)">'+esc(n.datum)+'</span></div>'+
        '<h2>'+esc(n.titel)+'</h2>'+
        '<p style="color:var(--muted);margin:0 0 22px;max-width:54ch">'+esc(n.textLang||n.text)+'</p>'+
        (n.link?'<a class="btn btn--outline" href="'+esc(n.link)+'" style="align-self:flex-start">Ganzen Bericht lesen <span class="arr">→</span></a>':'')+
        '</div>';
    });

    /* Termine (Seite Aktuelles) — leere Liste blendet den Abschnitt aus */
    qa('[data-daten="termine"]').forEach(function(el){
      var list=D.termine||[];
      if(!list.length){
        var sec=el.closest('section');
        if(sec)sec.style.display='none';
        return;
      }
      el.innerHTML=list.map(function(t){
        return '<div class="up"><div class="date"><div class="d">'+esc(t.tagNr)+'</div><div class="m">'+esc(t.monat)+'</div></div><div class="uinfo"><div class="l">'+esc(t.label)+'</div><div class="t">'+esc(t.titel)+'</div><div class="s">'+esc(t.ort)+'</div></div><div class="utime">'+esc(t.zeit)+'</div></div>';
      }).join('');
    });

    /* Footer: Trainings-Spalte */
    qa('[data-daten="footer-training"]').forEach(function(el){
      el.innerHTML=(D.training||[]).map(function(r){
        if(r.hinweis)return '<li>'+esc(r.gruppe)+' · Coming Soon</li>';
        return '<li>'+esc(r.tag)+' · '+esc(r.gruppe)+' · '+esc(startZeit(r.zeit))+'</li>';
      }).join('');
    });

    /* Footer: Kontakt-Spalte */
    qa('[data-daten="footer-kontakt"]').forEach(function(el){
      var k=D.kontakt||{};
      var h=(k.adresse||[]).map(function(z){return '<li>'+esc(z)+'</li>';}).join('');
      if(k.email)h+='<li><a href="mailto:'+esc(k.email)+'">'+esc(k.email)+'</a></li>';
      if(k.kurabu)h+='<li><a href="'+esc(k.kurabu)+'" target="_blank" rel="noopener">Mitglieder-Login (KURABU)</a></li>';
      if(k.instagramUrl)h+='<li style="margin-top:6px"><a href="'+esc(k.instagramUrl)+'" target="_blank" rel="noopener">Instagram · '+esc(k.instagram||'Instagram')+'</a></li>';
      el.innerHTML=h;
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

  function boot(){initNav();renderDaten();initReveal();}
  if(document.readyState!=='loading'){boot();}
  else document.addEventListener('DOMContentLoaded',boot);
})();
