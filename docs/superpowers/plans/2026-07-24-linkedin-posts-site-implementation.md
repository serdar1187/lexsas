# LinkedIn Posts Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Asım Serdar Yılmaz'ın beş güncel kişisel LinkedIn gönderisini, İngilizce ve doğal Türkçe sayfa çiftleri halinde Lexsas.com'a eklemek; ana sayfalarda `LATEST INSIGHTS` ile aynı yapıdaki yeni koleksiyon bölümünü yayımlamak.

**Architecture:** Canlı GitHub Pages deposunun mevcut statik HTML makale şablonu kullanılacak. Beş İngilizce sayfa `/linkedin-posts/`, beş Türkçe sayfa `/tr/linkedin-gonderileri/` altında bulunacak. Mevcut `/linkedin.html` ve `/tr/linkedin.html` uçları koleksiyon dizini olarak korunacak ve yeni sayfalara bağlanacak. Yeni CSS, JavaScript, medya veya görsel eklenmeyecek.

**Tech Stack:** Statik HTML5, mevcut `/assets/css/site.css`, mevcut JSON-LD yapısı, XML sitemap, `llms.txt`, GitHub Pages.

**Working directory:** `/Users/serda/Documents/lexsas`

**Global constraints:**

- `Lexsas Kimi/` prototipine ve `lexsas-tools/` ayrı özel deposuna dokunma.
- `insights.html` ve `tr/yazilar.html` dosyalarını değiştirme.
- Em-dash karakteri kullanma.
- Mevcut işvereni adlandırma; telefon numarası ekleme.
- Her sayfada mevcut bilgilendirme footer'ını ve `serdar@lexsas.com` adresini koru.
- İngilizce ve Türkçe sayfalar arasında canonical, `hreflang`, `og:url`, dil düğmesi ve Article JSON-LD alanlarını karşılıklı eşle.
- LinkedIn animasyonu, videosu, görseli veya bağlantı önizlemesini siteye taşıma.
- Kaynaklarda birincil kurum sayfalarını tercih et.

---

## İçerik sözleşmesi

Yeni sayfa çiftleri ve değişmez alanları:

| Tarih | İngilizce yol ve başlık | Türkçe yol ve başlık | Kaynak LinkedIn |
|---|---|---|---|
| 23 Temmuz 2026 | `/linkedin-posts/openai-hugging-face-agent-liability.html`<br>`When an AI agent breaks out of the sandbox, who answers?` | `/tr/linkedin-gonderileri/openai-hugging-face-yapay-zeka-ajani-sorumlulugu.html`<br>`Yapay zeka ajanı kum havuzundan çıkarsa kim sorumlu olur?` | `https://www.linkedin.com/feed/update/urn:li:activity:7486085618469343233/` |
| 21 Temmuz 2026 | `/linkedin-posts/open-weights-ai-geopolitics.html`<br>`Open weights as geopolitical insurance` | `/tr/linkedin-gonderileri/acik-agirliklar-yapay-zeka-jeopolitigi.html`<br>`Jeopolitik sigorta olarak açık ağırlıklar` | `https://www.linkedin.com/feed/update/urn:li:activity:7485302343329304576/` |
| 15 Temmuz 2026 | `/linkedin-posts/frontier-ai-finra-standards-body.html`<br>`A FINRA for frontier AI` | `/tr/linkedin-gonderileri/frontier-yapay-zeka-finra-standart-orgutu.html`<br>`Frontier yapay zeka için bir FINRA` | `https://www.linkedin.com/feed/update/urn:li:activity:7483031295619416064/` |
| 9 Temmuz 2026 | `/linkedin-posts/j-lens-interpretability-transparency.html`<br>`The transparency paradox inside the black box` | `/tr/linkedin-gonderileri/j-lens-yorumlanabilirlik-seffaflik.html`<br>`Kara kutunun içindeki şeffaflık paradoksu` | `https://www.linkedin.com/feed/update/urn:li:activity:7481083681063837696/` |
| 2 Temmuz 2026 | `/linkedin-posts/ai-access-cutoffs-digital-sovereignty.html`<br>`AI access cutoffs and digital sovereignty` | `/tr/linkedin-gonderileri/yapay-zeka-erisim-kesintileri-dijital-egemenlik.html`<br>`Yapay zeka erişim kesintileri ve dijital egemenlik` | `https://www.linkedin.com/feed/update/urn:li:activity:7478490122372669440/` |

Her İngilizce sayfa mevcut makale şablonundaki şu yapıyı kullanacak:

```html
<section class="article-hero shell">
  <span class="kicker">July 23, 2026 &middot; LinkedIn post</span>
  <h1 class="article-title">When an AI agent breaks out of the sandbox, who answers?</h1>
  <p class="article-lede">OpenAI's Hugging Face incident raises a question current liability rules were not written to answer: who bears the loss when an autonomous agent finds and exploits the path?</p>
</section>
<div class="shell"><article class="prose">
  <p>OpenAI reported that models running an internal cyber-capability evaluation found a route out of a constrained test environment and reached Hugging Face production infrastructure.</p>
  <div class="article-sources">
    <p class="sources-title">Sources</p>
    <ul>
      <li><a href="https://openai.com/index/hugging-face-model-evaluation-security-incident/">OpenAI, security incident during model evaluation, 21 July 2026</a></li>
      <li><a href="https://www.mevzuat.gov.tr/mevzuatmetin/1.5.6098.pdf">Turkish Code of Obligations No. 6098, Article 67</a></li>
    </ul>
  </div>
  <p class="article-related">Original post: <a href="https://www.linkedin.com/feed/update/urn:li:activity:7486085618469343233/">LinkedIn</a></p>
</article></div>
<nav class="article-nav shell" aria-label="More">
  <a class="u-link" href="/linkedin.html">&larr; All LinkedIn posts</a>
  <a class="u-link" href="/contact.html">Get in touch &rarr;</a>
</nav>
```

Türkçe sayfa aynı sınıflarla `LinkedIn gönderisi`, `Kaynaklar`, `Özgün gönderi` ve `/tr/linkedin.html` metinlerini kullanacak.

İlk İngilizce sayfanın JSON-LD sayfa düğümü şu somut alanları içerecek; diğer dokuz sayfa aynı alanları İçerik sözleşmesi tablosundaki kendi URL, başlık, dil ve tarihiyle kullanacak:

```json
{
  "@type": "Article",
  "@id": "https://lexsas.com/linkedin-posts/openai-hugging-face-agent-liability.html",
  "url": "https://lexsas.com/linkedin-posts/openai-hugging-face-agent-liability.html",
  "mainEntityOfPage": "https://lexsas.com/linkedin-posts/openai-hugging-face-agent-liability.html",
  "name": "When an AI agent breaks out of the sandbox, who answers?",
  "headline": "When an AI agent breaks out of the sandbox, who answers?",
  "description": "OpenAI's Hugging Face incident raises a question current liability rules were not written to answer: who bears the loss when an autonomous agent finds and exploits the path?",
  "inLanguage": "en",
  "datePublished": "2026-07-23",
  "dateModified": "2026-07-24",
  "author": {"@id": "https://lexsas.com/#person"},
  "publisher": {"@id": "https://lexsas.com/#organization"}
}
```

---

### Task 1: OpenAI ve Hugging Face sorumluluk sayfa çiftini oluştur

**Files:**

- Create: `linkedin-posts/openai-hugging-face-agent-liability.html`
- Create: `tr/linkedin-gonderileri/openai-hugging-face-yapay-zeka-ajani-sorumlulugu.html`
- Reference: `insights/ai-incident-response-legal-teams.html`
- Reference: `tr/yazilar/hukuk-ekiplerinde-yapay-zeka-olay-mudahalesi.html`

- [ ] İngilizce ve Türkçe dosyaları mevcut makale çiftinin tam sayfa yapısından üret.
- [ ] İngilizce lede olarak şunu kullan: `OpenAI's Hugging Face incident raises a question current liability rules were not written to answer: who bears the loss when an autonomous agent finds and exploits the path?`
- [ ] Türkçe lede olarak şunu kullan: `OpenAI'ın Hugging Face olayı, mevcut sorumluluk kurallarının doğrudan yanıtlamadığı bir soruyu gündeme getiriyor: özerk bir ajan yolu bulup kullandığında zararı kim üstlenir?`
- [ ] İngilizce gövdede kaynak gönderinin anlatısını koru: test kum havuzundan çıkış, sıfır gün açığı, üretim altyapısına erişim, fail ve araç ayrımı, Roma hukuku hayvan gözetimi benzetmesi, Türk Borçlar Kanunu m. 67 ve sorumluluk sorusu.
- [ ] Türkçe gövdeyi doğal hukuk Türkçesiyle üret; İngilizce cümle yapısını kopyalama.
- [ ] Her iki sayfanın kaynak bloğuna aşağıdaki bağlantıları ekle:

```text
https://openai.com/index/hugging-face-model-evaluation-security-incident/
https://www.mevzuat.gov.tr/mevzuatmetin/1.5.6098.pdf
https://www.linkedin.com/feed/update/urn:li:activity:7486085618469343233/
```

- [ ] JSON-LD içindeki `citation` dizisini kurumsal kaynaklarla eşleştir.
- [ ] Tarihi `2026-07-23`, `dateModified` değerini `2026-07-24` olarak ayarla.
- [ ] Çifti doğrula:

```bash
rg -n "7486085618469343233|2026-07-23|openai.com/index/hugging-face" \
  linkedin-posts/openai-hugging-face-agent-liability.html \
  tr/linkedin-gonderileri/openai-hugging-face-yapay-zeka-ajani-sorumlulugu.html
```

Expected: Her dosyada LinkedIn kimliği, yayın tarihi ve OpenAI kaynağı görünür.

- [ ] Yalnız bu iki dosyayı commit et:

```bash
git add linkedin-posts/openai-hugging-face-agent-liability.html \
  tr/linkedin-gonderileri/openai-hugging-face-yapay-zeka-ajani-sorumlulugu.html
git commit -m "content: add AI agent liability LinkedIn post pair"
```

---

### Task 2: Açık ağırlıklar ve jeopolitik sayfa çiftini oluştur

**Files:**

- Create: `linkedin-posts/open-weights-ai-geopolitics.html`
- Create: `tr/linkedin-gonderileri/acik-agirliklar-yapay-zeka-jeopolitigi.html`

- [ ] İngilizce lede olarak şunu kullan: `Export controls, Kimi K3, Inkling and China's open-source message point to the same strategic question: what happens when access to frontier AI becomes leverage?`
- [ ] Türkçe lede olarak şunu kullan: `İhracat kontrolleri, Kimi K3, Inkling ve Çin'in açık kaynak mesajı aynı stratejik soruya işaret ediyor: frontier yapay zekaya erişim bir baskı aracına dönüştüğünde ne olur?`
- [ ] İngilizce gövdede Haziran erişim kısıtlarını, Kimi K3'ü, Inkling'i, 17 Temmuz konuşmasını ve açık ağırlıkların dijital egemenlik bakımından rolünü ayır.
- [ ] Türkçe gövdeyi doğal üretim olarak yaz; `open weights` terimini ilk kullanımda `açık ağırlıklar` olarak açıkla.
- [ ] Kaynak bloğuna aşağıdaki bağlantıları ekle:

```text
https://www.anthropic.com/news/fable-mythos-access
https://www.kimi.com/vi/blog/kimi-k3
https://thinkingmachines.ai/news/introducing-inkling/
https://www.fmprc.gov.cn/eng/xw/zyxw/202607/t20260717_11984766.html
https://www.linkedin.com/feed/update/urn:li:activity:7485302343329304576/
```

- [ ] Tarihi `2026-07-21`, `dateModified` değerini `2026-07-24` olarak ayarla.
- [ ] Çifti doğrula:

```bash
rg -n "7485302343329304576|2026-07-21|Kimi K3|Inkling" \
  linkedin-posts/open-weights-ai-geopolitics.html \
  tr/linkedin-gonderileri/acik-agirliklar-yapay-zeka-jeopolitigi.html
```

Expected: Her iki dosyada tarih, Kimi K3 ve Inkling referansları görünür.

- [ ] Yalnız bu iki dosyayı commit et:

```bash
git add linkedin-posts/open-weights-ai-geopolitics.html \
  tr/linkedin-gonderileri/acik-agirliklar-yapay-zeka-jeopolitigi.html
git commit -m "content: add open weights geopolitics post pair"
```

---

### Task 3: Frontier AI standart örgütü sayfa çiftini oluştur

**Files:**

- Create: `linkedin-posts/frontier-ai-finra-standards-body.html`
- Create: `tr/linkedin-gonderileri/frontier-yapay-zeka-finra-standart-orgutu.html`

- [ ] İngilizce lede olarak şunu kullan: `Demis Hassabis proposes an industry-funded, federally overseen standards body. The safety case is real; so is the risk that the rulebook protects its authors.`
- [ ] Türkçe lede olarak şunu kullan: `Demis Hassabis, sektörün finanse ettiği ve federal gözetim altında çalışan bir standart örgütü öneriyor. Güvenlik gerekçesi gerçek; kuralları yazanları koruma riski de öyle.`
- [ ] İngilizce gövdede FINRA benzeri yapı, model paylaşımı, gönüllülükten sertifikasyona geçiş, güvenlik faydası ve yerleşik oyuncular lehine bariyer riski dengesini kur.
- [ ] Türkçe gövdede `self-regulation` kavramını `özdenetim` olarak kullan; öneriyi yürürlükteki hukuk gibi sunma.
- [ ] Kaynak bloğuna aşağıdaki bağlantıları ekle:

```text
https://demishassabis.substack.com/p/a-framework-for-frontier-ai-and-the-dawning-of-a-new-age
https://www.linkedin.com/feed/update/urn:li:activity:7483031295619416064/
```

- [ ] Tarihi `2026-07-15`, `dateModified` değerini `2026-07-24` olarak ayarla.
- [ ] Çifti doğrula:

```bash
rg -n "7483031295619416064|2026-07-15|FINRA|Hassabis" \
  linkedin-posts/frontier-ai-finra-standards-body.html \
  tr/linkedin-gonderileri/frontier-yapay-zeka-finra-standart-orgutu.html
```

Expected: Her iki dosyada öneri sahibi, FINRA ve doğru tarih görünür.

- [ ] Yalnız bu iki dosyayı commit et:

```bash
git add linkedin-posts/frontier-ai-finra-standards-body.html \
  tr/linkedin-gonderileri/frontier-yapay-zeka-finra-standart-orgutu.html
git commit -m "content: add frontier AI standards post pair"
```

---

### Task 4: J-lens ve şeffaflık sayfa çiftini oluştur

**Files:**

- Create: `linkedin-posts/j-lens-interpretability-transparency.html`
- Create: `tr/linkedin-gonderileri/j-lens-yorumlanabilirlik-seffaflik.html`

- [ ] İngilizce lede olarak şunu kullan: `Anthropic's J-lens can surface internal model patterns that never appear in the output. Governance now has to decide whether looking creates responsibility.`
- [ ] Türkçe lede olarak şunu kullan: `Anthropic'in J-lens aracı, model çıktısında hiç görünmeyen iç örüntüleri yüzeye çıkarabiliyor. Yönetişim artık bakmanın sorumluluk doğurup doğurmadığına da karar vermeli.`
- [ ] İngilizce gövdede J-space ve J-lens bulgularını, Article 13'ün çıktı odaklı şeffaflık yaklaşımını, izleme ile sorumluluk arasındaki paradoksu ve iyi niyetli tespit için güvenli alan önerisini ayır.
- [ ] Türkçe gövdeyi doğal üret; `interpretability` terimini `yorumlanabilirlik` olarak kullan.
- [ ] Kaynak bloğuna aşağıdaki bağlantıları ekle:

```text
https://www.anthropic.com/research/global-workspace
https://eur-lex.europa.eu/eli/reg/2024/1689/oj
https://www.linkedin.com/feed/update/urn:li:activity:7481083681063837696/
```

- [ ] Tarihi `2026-07-09`, `dateModified` değerini `2026-07-24` olarak ayarla.
- [ ] Çifti doğrula:

```bash
rg -n "7481083681063837696|2026-07-09|J-lens|Article 13" \
  linkedin-posts/j-lens-interpretability-transparency.html \
  tr/linkedin-gonderileri/j-lens-yorumlanabilirlik-seffaflik.html
```

Expected: Her iki dosyada J-lens, Article 13 ve doğru tarih görünür.

- [ ] Yalnız bu iki dosyayı commit et:

```bash
git add linkedin-posts/j-lens-interpretability-transparency.html \
  tr/linkedin-gonderileri/j-lens-yorumlanabilirlik-seffaflik.html
git commit -m "content: add interpretability post pair"
```

---

### Task 5: Erişim kesintileri ve dijital egemenlik sayfa çiftini oluştur

**Files:**

- Create: `linkedin-posts/ai-access-cutoffs-digital-sovereignty.html`
- Create: `tr/linkedin-gonderileri/yapay-zeka-erisim-kesintileri-dijital-egemenlik.html`
- Reference: `linkedin.html`

- [ ] Mevcut `linkedin.html` içindeki 2 Temmuz gönderisinin İngilizce metnini kaynak al.
- [ ] İngilizce lede olarak şunu kullan: `When frontier models disappear from ordinary workflows, resilience depends on explicit AI policy, portability and open-weight fallbacks.`
- [ ] Türkçe lede olarak şunu kullan: `Frontier modeller gündelik iş akışlarından çekildiğinde dayanıklılık; açık bir yapay zeka politikası, taşınabilirlik ve açık ağırlıklı yedeklere bağlıdır.`
- [ ] İngilizce gövdede erişim kesintisi, yaptırım aracı olarak model erişimi, iş sürekliliği, veri taşınabilirliği ve açık ağırlıklı yedek seçeneklerini koru.
- [ ] Türkçe gövdeyi baştan doğal Türkçe olarak üret; İngilizce metni Türkçe sayfada bırakma.
- [ ] Kaynak bloğuna aşağıdaki bağlantıları ekle:

```text
https://openai.com/index/previewing-gpt-5-6-sol/
https://www.anthropic.com/news/fable-mythos-access
https://www.anthropic.com/news/redeploying-fable-5
https://www.linkedin.com/feed/update/urn:li:activity:7478490122372669440/
```

- [ ] Tarihi `2026-07-02`, `dateModified` değerini `2026-07-24` olarak ayarla.
- [ ] Çifti doğrula:

```bash
rg -n "7478490122372669440|2026-07-02|digital sovereignty|dijital egemenlik" \
  linkedin-posts/ai-access-cutoffs-digital-sovereignty.html \
  tr/linkedin-gonderileri/yapay-zeka-erisim-kesintileri-dijital-egemenlik.html
```

Expected: Her iki dosyada LinkedIn kimliği, tarih ve diline uygun dijital egemenlik ifadesi görünür.

- [ ] Yalnız bu iki dosyayı commit et:

```bash
git add linkedin-posts/ai-access-cutoffs-digital-sovereignty.html \
  tr/linkedin-gonderileri/yapay-zeka-erisim-kesintileri-dijital-egemenlik.html
git commit -m "content: add digital sovereignty post pair"
```

---

### Task 6: LinkedIn koleksiyon dizinlerini yenile

**Files:**

- Modify: `linkedin.html`
- Modify: `tr/linkedin.html`

- [ ] Mevcut URL'leri, canonical ve karşılıklı dil bağlantılarını koru.
- [ ] Sayfa girişlerini İngilizcede `LinkedIn posts`, Türkçede `LinkedIn gönderileri` olarak düzenle.
- [ ] Eski tam metinli `li-post` bloklarını kaldır; beş yeni içeriği `insight-list` içinde `insight-row` yapısıyla, en yeniden eskiye sırala.
- [ ] Her satırda tam gün, başlık, lede özeti ve sağ ok bulunmasını sağla.
- [ ] Dizin JSON-LD düğümünü `CollectionPage` yap ve `hasPart` alanında beş ayrıntı URL'sini listele.
- [ ] Dizinlerde animasyon, görsel veya LinkedIn embed bırakma.
- [ ] Yapı sayısını doğrula:

```bash
test "$(rg -c 'class=\"insight-row' linkedin.html)" -eq 5
test "$(rg -c 'class=\"insight-row' tr/linkedin.html)" -eq 5
test "$(rg -c 'class=\"li-post' linkedin.html)" -eq 0
test "$(rg -c 'class=\"li-post' tr/linkedin.html)" -eq 0
```

Expected: Dört komut da çıkış kodu 0 verir.

- [ ] Yalnız dizin dosyalarını commit et:

```bash
git add linkedin.html tr/linkedin.html
git commit -m "content: refresh LinkedIn post indexes"
```

---

### Task 7: Ana sayfalara aynı formatta yeni bölümü ekle

**Files:**

- Modify: `index.html`
- Modify: `tr/index.html`

- [ ] Mevcut `LATEST INSIGHTS` / `SON YAZILAR` bölümü bittikten hemen sonra yeni `<section class="insights shell" id="linkedin-posts">` bölümü ekle.
- [ ] İngilizce başlıkları `LINKEDIN POSTS` ve `Notes from LinkedIn on AI, law and regulation` olarak kullan.
- [ ] Türkçe başlıkları `LINKEDIN GÖNDERİLERİ` ve `LinkedIn'den yapay zeka, hukuk ve regülasyon notları` olarak kullan.
- [ ] Dizinlerdeki aynı beş satırı, aynı sıra, tarih, başlık ve özetlerle ekle.
- [ ] İngilizce tarihleri `July 23, 2026`, `July 21, 2026`, `July 15, 2026`, `July 9, 2026`, `July 2, 2026` olarak kullan.
- [ ] Türkçe tarihleri `23 Temmuz 2026`, `21 Temmuz 2026`, `15 Temmuz 2026`, `9 Temmuz 2026`, `2 Temmuz 2026` olarak kullan.
- [ ] `insight-row`, `insight-date`, `insight-main`, `insight-title`, `insight-summary` ve `insight-arrow` sınıflarını birebir koru.
- [ ] Yeni CSS, inline stil kuralı veya yeni JavaScript ekleme.
- [ ] Satır ve sınıf eşitliğini doğrula:

```bash
rg -n "LINKEDIN POSTS|Notes from LinkedIn|openai-hugging-face-agent-liability" index.html
rg -n "LINKEDIN GÖNDERİLERİ|LinkedIn'den yapay zeka|openai-hugging-face-yapay-zeka-ajani-sorumlulugu" tr/index.html
git diff -- assets/css/site.css js/main.js
```

Expected: İlk iki komut yeni bölümü bulur; son komut çıktı vermez.

- [ ] Yalnız ana sayfaları commit et:

```bash
git add index.html tr/index.html
git commit -m "site: add bilingual LinkedIn posts sections"
```

---

### Task 8: Sitemap ve LLM keşfedilebilirlik kayıtlarını güncelle

**Files:**

- Modify: `sitemap.xml`
- Modify: `llms.txt`

- [ ] `sitemap.xml` içine her EN/TR çifti için iki `<url>` kaydı ekle.
- [ ] Her kayıtta `lastmod` değerini `2026-07-24` kullan ve en/tr/x-default karşılıklı bağlantılarını eksiksiz ekle.
- [ ] `llms.txt` Pages listesine iki koleksiyon dizinini ve on ayrıntı sayfasını açıklayıcı başlıklarıyla ekle.
- [ ] `robots.txt` zaten sitemap'i işaret ettiği için içeriğini değiştirme.
- [ ] Sayıları doğrula:

```bash
test "$(rg -c 'linkedin-posts/' sitemap.xml)" -eq 25
test "$(rg -c 'tr/linkedin-gonderileri/' sitemap.xml)" -eq 15
test "$(rg -c 'linkedin-posts/' llms.txt)" -eq 5
test "$(rg -c 'tr/linkedin-gonderileri/' llms.txt)" -eq 5
```

Expected: Sitemap'te her İngilizce URL beş, her Türkçe URL üç kez görünür; `llms.txt` her ayrıntı URL'sini bir kez içerir.

- [ ] Yalnız keşfedilebilirlik dosyalarını commit et:

```bash
git add sitemap.xml llms.txt
git commit -m "seo: index bilingual LinkedIn post pages"
```

---

### Task 9: Statik site bütünlüğünü ve içeriği doğrula

**Files:**

- Verify: `index.html`
- Verify: `tr/index.html`
- Verify: `linkedin.html`
- Verify: `tr/linkedin.html`
- Verify: `linkedin-posts/*.html`
- Verify: `tr/linkedin-gonderileri/*.html`
- Verify: `sitemap.xml`
- Verify: `llms.txt`

- [ ] Tüm yeni HTML dosyalarındaki JSON-LD bloklarını parse et:

```bash
python3 -c 'import json,re,pathlib; files=list(pathlib.Path("linkedin-posts").glob("*.html"))+list(pathlib.Path("tr/linkedin-gonderileri").glob("*.html")); [json.loads(re.search(r"<script type=\"application/ld\\+json\">\\s*(.*?)\\s*</script>", p.read_text(), re.S).group(1)) for p in files]; print(len(files))'
```

Expected: `10`

- [ ] Canonical ve `og:url` değerlerinin dosyanın kendi URL'si olduğunu kontrol et:

```bash
python3 -c 'from pathlib import Path; import re; files=list(Path("linkedin-posts").glob("*.html"))+list(Path("tr/linkedin-gonderileri").glob("*.html")); bad=[]; [(lambda t,u,p: bad.append(str(p)) if re.search(r"<link rel=\"canonical\" href=\"([^\"]+)",t).group(1)!=u or re.search(r"<meta property=\"og:url\" content=\"([^\"]+)",t).group(1)!=u else None)(p.read_text(), "https://lexsas.com/"+p.as_posix(), p) for p in files]; print(bad); raise SystemExit(bool(bad))'
```

Expected: `[]`

- [ ] Em-dash ve telefon taraması yap:

```bash
python3 -c 'from pathlib import Path; files=[Path("index.html"),Path("tr/index.html"),Path("linkedin.html"),Path("tr/linkedin.html"),Path("sitemap.xml"),Path("llms.txt")]+list(Path("linkedin-posts").glob("*.html"))+list(Path("tr/linkedin-gonderileri").glob("*.html")); bad=[str(p) for p in files if "\N{EM DASH}" in p.read_text()]; print(bad); raise SystemExit(bool(bad))'
rg -n '\+90|053[0-9]|054[0-9]|055[0-9]' linkedin-posts tr/linkedin-gonderileri
```

Expected: İki komut da çıktı vermez.

- [ ] On yeni sayfanın her birinde footer, dil düğmesi, Article JSON-LD, kaynak bloğu ve özgün LinkedIn bağlantısı bulunduğunu programlı denetle:

```bash
python3 -c 'from pathlib import Path; files=list(Path("linkedin-posts").glob("*.html"))+list(Path("tr/linkedin-gonderileri").glob("*.html")); required=("footer-disclaimer","lang-toggle","article-sources","linkedin.com/feed/update","\"@type\": \"Article\""); bad=[str(p) for p in files if any(x not in p.read_text() for x in required)]; print(bad); raise SystemExit(bool(bad))'
```

Expected: `[]`

- [ ] Yerel sunucuda masaüstü ve dar ekran görünümünü kontrol et:

```bash
python3 -m http.server 8000
```

Expected: `/`, `/tr/`, `/linkedin.html`, `/tr/linkedin.html` ve on ayrıntı sayfası HTTP 200 verir; yeni ana sayfa bölümü `LATEST INSIGHTS` ile aynı satır düzenini korur; yatay taşma yoktur.

- [ ] `git diff --check` ve çalışma ağacı denetimini çalıştır:

```bash
git diff --check
git status --short
```

Expected: `git diff --check` sessizdir; yalnız bilinçli dosyalar görünür veya ağaç temizdir.

---

### Task 10: Siteyi yayımla ve canlı uçları doğrula

**Files:**

- Deploy: committed site changes on the current branch

- [ ] Dalın `master` olduğunu ve çalışma ağacının temiz olduğunu doğrula:

```bash
git branch --show-current
git status --short
```

Expected: `master`; status çıktısı yok.

- [ ] Site commitlerini uzak depoya gönder:

```bash
git push origin master
```

- [ ] GitHub Pages yayını tamamlandıktan sonra on ayrıntı sayfası ile dört dizin/ana sayfa ucunu kontrol et:

```bash
for url in \
  https://lexsas.com/ \
  https://lexsas.com/tr/ \
  https://lexsas.com/linkedin.html \
  https://lexsas.com/tr/linkedin.html \
  https://lexsas.com/linkedin-posts/openai-hugging-face-agent-liability.html \
  https://lexsas.com/linkedin-posts/open-weights-ai-geopolitics.html \
  https://lexsas.com/linkedin-posts/frontier-ai-finra-standards-body.html \
  https://lexsas.com/linkedin-posts/j-lens-interpretability-transparency.html \
  https://lexsas.com/linkedin-posts/ai-access-cutoffs-digital-sovereignty.html \
  https://lexsas.com/tr/linkedin-gonderileri/openai-hugging-face-yapay-zeka-ajani-sorumlulugu.html \
  https://lexsas.com/tr/linkedin-gonderileri/acik-agirliklar-yapay-zeka-jeopolitigi.html \
  https://lexsas.com/tr/linkedin-gonderileri/frontier-yapay-zeka-finra-standart-orgutu.html \
  https://lexsas.com/tr/linkedin-gonderileri/j-lens-yorumlanabilirlik-seffaflik.html \
  https://lexsas.com/tr/linkedin-gonderileri/yapay-zeka-erisim-kesintileri-dijital-egemenlik.html
do
  curl -sS -o /dev/null -w "%{http_code} %{url_effective}\n" "$url"
done
```

Expected: On dört satırın tamamı `200` ile başlar.

- [ ] Canlı site doğrulanmadan `2026-07-24-linkedin-company-publication.md` planına geçme.
