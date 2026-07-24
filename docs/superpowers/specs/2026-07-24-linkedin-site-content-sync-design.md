# LinkedIn ve Lexsas.com içerik senkronizasyonu tasarımı

**Tarih:** 24 Temmuz 2026
**Durum:** Kullanıcı tarafından onaylandı

## 1. Amaç

Bu çalışma iki yönlü ve tek seferlik bir içerik senkronizasyonudur:

1. Asım Serdar Yılmaz'ın kişisel LinkedIn hesabındaki beş güncel özgün gönderiyi Lexsas.com'a, İngilizce ve Türkçe metin sayfaları olarak taşımak.
2. Lexsas.com'da bulunan fakat Lexsas LinkedIn şirket sayfasında paylaşılmamış dokuz makaleyi, İngilizce LinkedIn gönderileri olarak zamanlamak.
3. Lexsas LinkedIn şirket sayfasındaki mevcut gönderileri denetlemek ve Lexsas makale bağlantısı bulunmayanlara doğru bağlantıyı eklemek.

Bu çalışma, kişisel LinkedIn hesabıyla Lexsas LinkedIn şirket sayfası arasında yeniden paylaşım yapmaz.

## 2. Kaynak ve hedefler

### Kişisel LinkedIn kaynağı

- Profil: `https://www.linkedin.com/in/asimserdaryilmaz/`
- Kapsam: Temmuz 2026 tarihli beş güncel özgün gönderi
- Kapsam dışı: Eski işe alım ilanları, başkalarının gönderilerinin yeniden paylaşımı ve yıllar önceki profil etkinlikleri

### Lexsas LinkedIn hedefi

- Şirket sayfası yönetimi: `https://www.linkedin.com/company/135184950/admin/dashboard/`
- Yeni gönderiler İngilizce yayımlanır ve ilgili İngilizce Lexsas makalesine doğrudan bağlanır.

### Lexsas.com hedefi

- Canlı statik site, ana depo kökündeki mevcut iki dilli yapı
- İngilizce gönderi sayfaları: `/linkedin-posts/`
- Türkçe gönderi sayfaları: `/tr/linkedin-gonderileri/`
- Ana sayfalar: `/index.html` ve `/tr/index.html`

`Lexsas Kimi/` klasörü ayrı bir ana sayfa prototipidir ve bu çalışmanın uygulama hedefi değildir.

## 3. Lexsas.com'a taşınacak beş kişisel gönderi

Beş konu ayrı içerik olarak korunur:

1. OpenAI modellerinin güvenlik testinde Hugging Face sistemlerine çıkması ve yapay zeka ajanının sorumluluğu
2. Açık ağırlıklar, ihracat kontrolleri ve yapay zeka jeopolitiği
3. Frontier AI için FINRA benzeri özdenetim önerisi
4. Anthropic J-lens, yorumlanabilirlik ve şeffaflık paradoksu
5. Yapay zeka erişim kesintileri, süreklilik ve dijital egemenlik

İkinci ve beşinci konu birbirine temas eder, ancak odakları ayrıdır. İkinci yazı jeopolitik ve açık ağırlıklara, beşinci yazı erişim sürekliliği ve operasyonel dayanıklılığa odaklanır.

## 4. Lexsas.com bilgi mimarisi

### Ana sayfa bölümü

Mevcut `LATEST INSIGHTS` bölümünün hemen altına yeni bir bölüm eklenir:

- İngilizce başlık: `LINKEDIN POSTS`
- Türkçe başlık: `LINKEDIN GÖNDERİLERİ`

Yeni bölüm, `LATEST INSIGHTS` ile aynı HTML yapısını ve aynı görsel sınıfları kullanır:

- tarih sütunu
- konu veya kategori etiketi
- başlık
- kısa özet
- sağ ok
- en yeniden eskiye sıralama

Yeni bir görsel sistem, CSS bileşeni veya JavaScript davranışı oluşturulmaz. LinkedIn'deki video, animasyon ve hareketli medya dosyaları taşınmaz. Yalnızca metin ve kaynak bağlantıları kullanılır.

### Ayrıntı sayfaları

Her gönderi için iki sayfa oluşturulur:

- İngilizce metin sayfası
- Doğal Türkçe üretim olan Türkçe karşılık

Sayfalar mevcut Lexsas makale şablonunu kullanır. Her çiftte şunlar bulunur:

- karşılıklı `hreflang` bağlantıları
- sayfanın kendisini gösteren canonical URL
- doğru `og:url`
- üst menüde karşı dile giden `TR` veya `EN` düğmesi
- özgün LinkedIn yayın tarihi
- konu etiketi
- başlık ve kısa giriş
- yalnız metinden oluşan gövde
- birincil kaynak bağlantıları
- mevcut yasal bilgilendirme metni
- Article JSON-LD düğümü

İngilizce metin, kişisel LinkedIn gönderisinin anlatımını koruyarak site biçimine uyarlanır. Türkçe metin kelimesi kelimesine çeviri olmaz; aynı düşünceyi doğal ve üretim kalitesinde Türkçeyle aktarır.

## 5. Dizin ve keşfedilebilirlik güncellemeleri

Yeni on sayfa aşağıdaki yüzeylere eklenir:

- İngilizce ana sayfadaki `LINKEDIN POSTS` bölümü
- Türkçe ana sayfadaki `LINKEDIN GÖNDERİLERİ` bölümü
- `sitemap.xml`
- `llms.txt`

Mevcut `Insights` ve `Yazılar` dizinleri değiştirilmez. Yeni içerikler ayrı bir LinkedIn gönderileri koleksiyonu olarak kalır.

## 6. Lexsas LinkedIn şirket sayfası senkronizasyonu

Mevcut 14 Lexsas makale konusu ile şirket sayfasındaki yayımlanmış gönderiler karşılaştırılmıştır. Beş konu şirket sayfasında zaten yer alır. Aşağıdaki dokuz konu eksiktir:

1. When an AI workflow fails: an incident protocol for legal teams
2. Marketplace ranking and algorithmic accountability: questions for the legal lead
3. Legal AI: build, buy, or configure?
4. How to measure a legal automation pilot
5. An AI vendor due diligence checklist for legal teams
6. The billable hour is running out of logic
7. AI is quietly redrawing the legal industry
8. Where a lawyer's hours actually go
9. What generative AI actually changes for in-house legal teams

Her konu için:

- İngilizce bir şirket gönderisi hazırlanır.
- Gönderi, makalenin ana fikrini kısa ve doğru biçimde sunar.
- Doğrudan İngilizce `lexsas.com/insights/...` URL'si eklenir.
- Konuyla sınırlı etiketler kullanılır.
- Aynı konu için ikinci bir Türkçe LinkedIn gönderisi oluşturulmaz.

Kişisel LinkedIn'den siteye taşınan yeni `LinkedIn Posts` koleksiyonu bu dokuz gönderilik şirket sayfası senkronizasyonuna dahil edilmez.

## 7. LinkedIn yayın takvimi

Dokuz yeni İngilizce şirket gönderisi İstanbul saatine göre hafta içi her gün 09.30'da zamanlanır:

| Sıra | Tarih | Saat |
|---|---|---|
| 1 | 27 Temmuz 2026 Pazartesi | 09.30 |
| 2 | 28 Temmuz 2026 Salı | 09.30 |
| 3 | 29 Temmuz 2026 Çarşamba | 09.30 |
| 4 | 30 Temmuz 2026 Perşembe | 09.30 |
| 5 | 31 Temmuz 2026 Cuma | 09.30 |
| 6 | 3 Ağustos 2026 Pazartesi | 09.30 |
| 7 | 4 Ağustos 2026 Salı | 09.30 |
| 8 | 5 Ağustos 2026 Çarşamba | 09.30 |
| 9 | 6 Ağustos 2026 Perşembe | 09.30 |

Takvim, yukarıdaki konu sırasını kullanır. Böylece yeni ve operasyonel içerikten daha genel pazar içeriğine doğru düzenli bir akış oluşur.

## 8. Mevcut LinkedIn gönderilerinin bağlantı denetimi

Lexsas şirket sayfasındaki mevcut altı gönderi tek tek denetlenir:

1. Gönderide doğrudan Lexsas URL'si varsa işlem yapılmaz.
2. `lnkd.in` kısa bağlantısı doğru Lexsas makalesine çözülüyorsa bağlantı geçerli sayılır ve işlem yapılmaz.
3. Lexsas makalesine giden tıklanabilir bağlantı yoksa mevcut gönderinin metni korunur ve sonuna doğru doğrudan makale URL'si eklenir.
4. Düzenleme sonrasında gönderi yeniden açılır ve bağlantının tıklanabilir olduğu doğrulanır.

Bağlantı denetimi, mükerrer gönderi oluşturmaz ve mevcut etkileşimleri korur.

## 9. Hata yönetimi

- Bir LinkedIn gönderisinin mevcut bağlantısı belirsizse düzenleme yapılmadan önce hedef URL tarayıcıda doğrulanır.
- Zamanlanmış gönderi kaydedildikten sonra takvimde aynı tarih, saat ve konu aranır. Kayıt görünüyorsa ikinci kez oluşturulmaz.
- LinkedIn bağlantı önizlemesi oluşmasa bile tıklanabilir doğrudan URL mevcutsa gönderi geçerli kabul edilir.
- Bir gönderi düzenlemesi mevcut metni veya medyayı değiştirme riski taşıyorsa işlem durdurulur ve yalnız bağlantı eklenebildiği doğrulandıktan sonra devam edilir.
- Kaynak doğrulaması tamamlanmayan bir iddia Lexsas.com'da yayımlanmaz.
- Canlı site doğrulaması başarısız olursa LinkedIn zamanlaması başlatılmaz.

## 10. Doğrulama ölçütleri

### Lexsas.com

- Beş İngilizce ve beş Türkçe sayfa oluşturulmuş olmalı.
- Ana sayfalardaki yeni bölümler `LATEST INSIGHTS` ile aynı yapıda görünmeli.
- Her EN/TR çifti karşılıklı ve doğru `hreflang` bağlantılarına sahip olmalı.
- Canonical, `og:url` ve JSON-LD URL'leri sayfanın kendisini göstermeli.
- `sitemap.xml` ve `llms.txt` yeni sayfaları içermeli.
- Tüm yeni bağlantılar HTTP 200 vermeli.
- İngilizce ve Türkçe metinler UTF-8 karakterlerini korumalı.
- Yeni veya değiştirilen içerikte em-dash karakteri bulunmamalı.
- Telefon numarası ve mevcut işveren adı bulunmamalı.
- Footer bilgilendirmesi korunmalı.

### LinkedIn

- Mevcut altı şirket gönderisinin her biri doğru bir Lexsas makalesine bağlanmalı.
- Dokuz yeni gönderi doğru tarih ve saatlerde takvimde görünmeli.
- Her yeni gönderi doğru İngilizce makale URL'sini içermeli.
- Aynı konu için mükerrer zamanlanmış veya yayımlanmış gönderi bulunmamalı.

## 11. Kapsam dışı

- Kişisel LinkedIn gönderilerini Lexsas şirket sayfasında yeniden paylaşmak
- LinkedIn video ve animasyonlarını Lexsas.com'a indirmek veya yüklemek
- Mevcut `Insights` makalelerini yeniden yazmak
- `Lexsas Kimi/` prototipini canlı siteye taşımak
- Yeni görsel tasarım, CSS sistemi veya JavaScript bileşeni geliştirmek
- LinkedIn reklamı, boost işlemi veya ücretli dağıtım
