# LinkedIn Company Publication Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Lexsas LinkedIn şirket sayfasındaki mevcut altı gönderinin makale bağlantılarını denetlemek; eksik dokuz İngilizce Lexsas makalesini hafta içi her gün 09.30 TRT için zamanlamak; sonuçları repo durum dosyasına kaydetmek.

**Architecture:** LinkedIn işlemleri, kullanıcının oturumunun açık olduğu Chrome üzerinden gerçekleştirilir. Önce canlı site ve mevcut gönderiler salt okunur denetlenir. Yalnız eksik bağlantısı doğrulanan mevcut gönderiler düzenlenir. Dokuz yeni gönderi LinkedIn'in yerleşik zamanlama arayüzüyle tek tek kaydedilir, sonra planlanan içerik listesinden doğrulanır. Repo yalnız operasyon kaydı için `linkedin/content-calendar.md` dosyasında güncellenir.

**Tech Stack:** LinkedIn şirket sayfası yönetim arayüzü, Chrome browser control, Lexsas.com statik makaleleri, Markdown durum kaydı.

**Working directory:** `/Users/serda/Documents/lexsas`

**Dependencies:**

- `2026-07-24-linkedin-posts-site-implementation.md` tamamlanmış olmalı.
- Canlı Lexsas sayfaları HTTP 200 vermeli.
- LinkedIn'de kullanıcı kişisel hesabıyla ve Lexsas şirket yönetici görünümüyle oturum açmış olmalı.

**Safety constraints:**

- Bağlantı denetimi ve sayfa okuma salt okunur yapılır.
- Mevcut gönderinin metni, medyası, tarihi ve etkileşimleri korunur; yalnız eksikse doğrudan URL eklenir.
- Herhangi bir mevcut gönderiyi silme, yeniden yayımlama, boost etme veya reklama dönüştürme.
- Dokuz zamanlama ve gerekli mevcut gönderi düzenlemeleri, kaydetme işleminden hemen önce kullanıcıya tek bir toplu eylem özetiyle yeniden teyit ettirilir.
- Zamanlanan kayıt planlı listede görülmeden aynı konu ikinci kez oluşturulmaz.
- Saat dilimi LinkedIn arayüzünde açıkça `Europe/Istanbul` veya eşdeğer `TRT` olarak doğrulanır.
- Kişisel profilden siteye taşınan beş `LinkedIn Posts` sayfasını şirket sayfasında yayımlama.
- Em-dash karakteri kullanma.

---

## Mevcut gönderi denetim eşlemesi

| LinkedIn etkinliği | Beklenen Lexsas hedefi |
|---|---|
| `7484199834858635264` | `https://lexsas.com/insights/turkey-marketplace-liability.html` |
| `7484198073418760192` | `https://lexsas.com/insights/kvkk-compliant-genai-workflows.html` |
| `7484197259715346432` | `https://lexsas.com/insights/ai-governance-five-controls.html` |
| `7484193285448777728` | `https://lexsas.com/tr/yazilar/ab-yapay-zeka-tuzugu-agustos-2026.html` |
| `7484192302421340160` | `https://lexsas.com/insights/ai-citation-verification.html` |
| `7484191501653237760` | `https://lexsas.com/insights/eu-ai-act-august-2026.html` |

Bir `lnkd.in` bağlantısı yukarıdaki doğru hedefe çözülüyorsa geçerlidir ve gönderi düzenlenmez.

---

## Dokuz yeni gönderinin kesin takvimi ve metni

### 1. 27 Temmuz 2026 Pazartesi, 09.30 TRT

```text
When an AI-assisted legal workflow fails, the first question is not whether the model is intelligent. It is whether the team can stop, preserve the record, contain the issue and restart under defined ownership.

A short incident protocol for legal teams:
https://lexsas.com/insights/ai-incident-response-legal-teams.html

#AIGovernance #LegalTech #IncidentResponse
```

### 2. 28 Temmuz 2026 Salı, 09.30 TRT

```text
Marketplace ranking is not just a product decision. Under the DSA, DMA, P2B rules and Türkiye's e-commerce framework, it is also a legal surface that needs ownership, evidence and challenge paths.

Questions for the legal lead:
https://lexsas.com/insights/marketplace-algorithmic-accountability.html

#PlatformRegulation #AlgorithmicAccountability #LegalTech
```

### 3. 29 Temmuz 2026 Çarşamba, 09.30 TRT

```text
The right legal AI strategy is rarely "build everything" or "buy everything." Most teams need a deliberate mix: configure platforms, buy commodity capability and build only where sensitivity or differentiation justifies it.

A practical decision frame:
https://lexsas.com/insights/legal-ai-build-buy-configure.html

#LegalAI #LegalOperations #DigitalTransformation
```

### 4. 30 Temmuz 2026 Perşembe, 09.30 TRT

```text
A legal automation pilot without a baseline, error tolerance and a pre-agreed scale or stop threshold is a demo, not a decision.

How to measure the work before, during and after the pilot:
https://lexsas.com/insights/measuring-automation-pilots.html

#LegalOperations #WorkflowAutomation #LegalTech
```

### 5. 31 Temmuz 2026 Cuma, 09.30 TRT

```text
AI vendor diligence needs to move beyond the product demo. Training data, prompt retention, subprocessors, IP allocation, logging and exit rights belong in the decision before signature.

Six questions for legal teams:
https://lexsas.com/insights/ai-vendor-due-diligence.html

#AIGovernance #VendorRisk #LegalTech
```

### 6. 3 Ağustos 2026 Pazartesi, 09.30 TRT

```text
Generative AI does not only reduce the time required for legal work. It also weakens the logic of pricing the work by the hour when clients increasingly value the outcome, the process and the risk carried.

Why the work matters more than the time:
https://lexsas.com/insights/beyond-the-billable-hour.html

#FutureOfLaw #LegalInnovation #LegalServices
```

### 7. 4 Ağustos 2026 Salı, 09.30 TRT

```text
AI is changing legal work quietly, through workflow design rather than a single dramatic replacement event. The advantage is moving toward teams that can redesign intake, research, drafting and review around accountable human judgment.

What is changing across the industry:
https://lexsas.com/insights/ai-reshaping-legal-industry.html

#LegalIndustry #LegalAI #FutureOfWork
```

### 8. 5 Ağustos 2026 Çarşamba, 09.30 TRT

```text
Much of a lawyer's day is consumed by coordination, searching, formatting, status work and repeated handling. Workflow automation creates value when it returns time to legal judgment, not when it automates for its own sake.

Where legal hours actually go:
https://lexsas.com/insights/where-legal-hours-go.html

#LegalOperations #WorkflowAutomation #LegalProductivity
```

### 9. 6 Ağustos 2026 Perşembe, 09.30 TRT

```text
Generative AI can accelerate first drafts, issue spotting and knowledge retrieval in an in-house legal team. Accountability, privilege decisions, risk acceptance and final judgment still need named human owners.

A practitioner view of what changes and what stays human:
https://lexsas.com/insights/genai-for-legal-teams.html

#GenerativeAI #InHouseLegal #AIGovernance
```

---

### Task 1: Canlı site ve LinkedIn oturum önkoşullarını doğrula

**Files:**

- Verify: nine live English article URLs listed above

- [ ] Dokuz makale URL'sinin tamamının HTTP 200 verdiğini doğrula:

```bash
for url in \
  https://lexsas.com/insights/ai-incident-response-legal-teams.html \
  https://lexsas.com/insights/marketplace-algorithmic-accountability.html \
  https://lexsas.com/insights/legal-ai-build-buy-configure.html \
  https://lexsas.com/insights/measuring-automation-pilots.html \
  https://lexsas.com/insights/ai-vendor-due-diligence.html \
  https://lexsas.com/insights/beyond-the-billable-hour.html \
  https://lexsas.com/insights/ai-reshaping-legal-industry.html \
  https://lexsas.com/insights/where-legal-hours-go.html \
  https://lexsas.com/insights/genai-for-legal-teams.html
do
  curl -sS -o /dev/null -w "%{http_code} %{url_effective}\n" "$url"
done
```

Expected: Dokuz satırın tamamı `200` ile başlar.

- [ ] Chrome'da kullanıcıya ait LinkedIn oturumunun açık olduğunu doğrula.
- [ ] `https://www.linkedin.com/company/135184950/admin/dashboard/` adresinin Lexsas yönetici görünümünü açtığını doğrula.
- [ ] Planlanan gönderiler ekranında aynı dokuz konuya ait önceden kaydedilmiş kayıt bulunmadığını salt okunur kontrol et.
- [ ] Mükerrer bir kayıt varsa o konu için yeni gönderi hazırlama; mevcut kaydın tarih, saat, metin ve URL'sini denetle.

---

### Task 2: Mevcut altı şirket gönderisinin bağlantılarını salt okunur denetle

**Files:**

- Verify: existing LinkedIn activities in the audit mapping

- [ ] Altı etkinlik URL'sini ayrı ayrı aç:

```text
https://www.linkedin.com/feed/update/urn:li:activity:7484199834858635264/
https://www.linkedin.com/feed/update/urn:li:activity:7484198073418760192/
https://www.linkedin.com/feed/update/urn:li:activity:7484197259715346432/
https://www.linkedin.com/feed/update/urn:li:activity:7484193285448777728/
https://www.linkedin.com/feed/update/urn:li:activity:7484192302421340160/
https://www.linkedin.com/feed/update/urn:li:activity:7484191501653237760/
```

- [ ] Gönderi metnindeki doğrudan URL'yi veya `lnkd.in` kısa bağlantısını yeni sekmede aç.
- [ ] Çözülen son URL'yi denetim eşlemesindeki beklenen hedefle karşılaştır.
- [ ] Her gönderiyi `valid`, `missing` veya `wrong target` olarak not et.
- [ ] `valid` gönderide hiçbir değişiklik yapma.
- [ ] `missing` veya `wrong target` bulunan gönderinin tam etkinlik kimliği ve eklenecek doğru URL'sini eylem onayı özetine dahil et.

Expected: Altı gönderinin her biri için etkinlik kimliği, çözülen URL ve karar kaydedilmiş olur.

---

### Task 3: LinkedIn'de dış yazma eylemleri için toplu son teyidi al

**Files:**

- No repository changes

- [ ] Kullanıcıya şu kapsamı tek mesajda sun:

```text
Şimdi LinkedIn'de dış yazma işlemlerine geçeceğim:
1. Eksik veya yanlış bağlantısı doğrulanan mevcut gönderiler: [etkinlik kimliği ve eklenecek URL listesi]
2. Dokuz yeni İngilizce gönderi: 27 Temmuz ile 6 Ağustos 2026 arasında hafta içi her gün 09.30 TRT
3. Gönderiler yayımlanmayacak; LinkedIn zamanlama kuyruğuna kaydedilecek.
Bu işlemleri şimdi kaydetmemi onaylıyor musunuz?
```

- [ ] Açık onay gelmeden hiçbir `Save`, `Schedule`, `Post` veya mevcut gönderi `Edit` onayı verme.

Expected: Kullanıcının işlem anındaki açık onayı alınır.

---

### Task 4: Yalnız eksik veya yanlış mevcut bağlantıları düzelt

**Files:**

- Modify externally: only the LinkedIn activities classified `missing` or `wrong target`

- [ ] Her hedef gönderide düzenleme menüsünü aç.
- [ ] Mevcut metni aynen koru; metnin sonuna bir boş satır ve doğru doğrudan Lexsas URL'sini ekle.
- [ ] Medyayı, önizlemeyi, etiketleri veya tarih bilgisini değiştirme.
- [ ] Değişikliği kaydet.
- [ ] Gönderiyi yeniden aç ve doğrudan URL'nin tıklanabilir olduğunu doğrula.
- [ ] Yeni bağlantıyı açıp doğru Lexsas makalesine ulaştığını doğrula.
- [ ] Kaydetme sonrası hata veya belirsizlik varsa aynı gönderiyi ikinci kez düzenleme; işlemi durdur ve durumu raporla.

Expected: Başlangıçta `missing` veya `wrong target` olan her gönderi doğru Lexsas URL'sine bağlanır; `valid` gönderilere dokunulmaz.

---

### Task 5: Dokuz İngilizce gönderiyi hafta içi 09.30 TRT için zamanla

**Files:**

- Create externally: nine scheduled LinkedIn company posts

- [ ] Lexsas şirket sayfasında `Start a post` akışını aç.
- [ ] Bu plandaki gönderi metnini tam olarak yapıştır.
- [ ] URL'nin düz metin içinde tam ve tıklanabilir kalmasını sağla.
- [ ] LinkedIn'in zamanlama denetimini aç.
- [ ] Tarih ve saati tablodaki değerle ayarla; saat dilimini `TRT` olarak doğrula.
- [ ] Gönderiyi `Schedule` ile kaydet.
- [ ] Planlanan içerik listesinde konu, tarih ve saatin göründüğünü doğrula.
- [ ] Doğrulama başarılı olmadan sonraki konuya geçme.
- [ ] Dokuz konu için aynı işlemi sırayla tekrarla.

Expected schedule:

| Sıra | Konu kısa adı | Tarih | Saat |
|---|---|---|---|
| 1 | Incident protocol | 2026-07-27 | 09.30 TRT |
| 2 | Marketplace accountability | 2026-07-28 | 09.30 TRT |
| 3 | Build, buy, configure | 2026-07-29 | 09.30 TRT |
| 4 | Measure automation pilots | 2026-07-30 | 09.30 TRT |
| 5 | Vendor due diligence | 2026-07-31 | 09.30 TRT |
| 6 | Billable hour | 2026-08-03 | 09.30 TRT |
| 7 | Legal industry | 2026-08-04 | 09.30 TRT |
| 8 | Legal hours | 2026-08-05 | 09.30 TRT |
| 9 | GenAI for legal teams | 2026-08-06 | 09.30 TRT |

---

### Task 6: Planlanan gönderileri ve bağlantıları ikinci geçişte doğrula

**Files:**

- Verify externally: scheduled posts and existing edited posts

- [ ] Planlanan içerik ekranında dokuz kaydın tam listesini al.
- [ ] Her kayıt için başlık ilk satırı, tarih, saat ve tam Lexsas URL'sini karşılaştır.
- [ ] Aynı gün 09.30'da birden fazla Lexsas kaydı olmadığını doğrula.
- [ ] Hafta sonu tarihine kayıt düşmediğini doğrula.
- [ ] Her URL'yi yeni sekmede açıp HTTP 200 ve doğru makale başlığını doğrula.
- [ ] Task 4'te düzenlenen mevcut gönderileri yeniden açıp linklerin halen doğru olduğunu kontrol et.

Expected: Dokuz tekil zamanlanmış gönderi, dokuz doğru URL, dokuz doğru hafta içi tarih ve saat; mevcut altı gönderinin tamamı doğru Lexsas hedeflerine bağlı.

---

### Task 7: Operasyon kaydını güncelle ve commit et

**Files:**

- Modify: `linkedin/content-calendar.md`

- [ ] Mevcut iki dilli sıra kuralını, bu tek seferlik onaylanmış İngilizce senkronizasyon kampanyasını yansıtacak şekilde açıklığa kavuştur.
- [ ] Dokuz eksik makaleyi kuyruktan kaldır veya durumunu `🗓️` olarak güncelle.
- [ ] Her kayıt için kesin tarih, `09.30 TRT`, İngilizce makale yolu ve `scheduled` durumunu yaz.
- [ ] Mevcut altı gönderi için denetim tablosu ekle: etkinlik kimliği, hedef URL, `valid` veya `link added`, denetim tarihi `2026-07-24`.
- [ ] Yalnız gerçekten LinkedIn'de doğrulanan durumları kaydet; başarısız veya yarım işlemi tamamlanmış gösterme.
- [ ] Em-dash ve çalışma ağacı denetimini çalıştır:

```bash
python3 -c 'from pathlib import Path; p=Path("linkedin/content-calendar.md"); raise SystemExit("\N{EM DASH}" in p.read_text())'
git diff --check
git diff -- linkedin/content-calendar.md
```

Expected: İlk iki komut sessizdir; diff yalnız doğrulanmış operasyon durumunu gösterir.

- [ ] Yalnız durum dosyasını commit et:

```bash
git add linkedin/content-calendar.md
git commit -m "ops: record LinkedIn article schedule"
```

---

### Task 8: Sonuç raporunu kullanıcıya ver

**Files:**

- No repository changes

- [ ] Kullanıcıya aşağıdaki dört sonucu kısa ve sayısal olarak raporla:

```text
Mevcut gönderi denetimi: 6/6
Bağlantı eklenen veya düzeltilen mevcut gönderi: N
Zamanlanan yeni İngilizce gönderi: 9/9
Takvim aralığı: 27 Temmuz 2026 ile 6 Ağustos 2026, hafta içi 09.30 TRT
```

- [ ] Herhangi bir kayıt tamamlanmadıysa nedenini, etkinlik veya konu kimliğini ve LinkedIn'de oluşan son durumu açıkça belirt.
- [ ] Yayımlanmış gibi konuşma; dokuz kayıt henüz `scheduled` durumundadır.
