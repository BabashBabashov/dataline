import Link from "next/link"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { ContactSection } from "@/components/contact-section"

export default function ServerlerinKurulmasiPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Page Title */}
      <section className="bg-primary py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-primary-foreground hover:text-accent transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Xidmətlərə geri
            </Link>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground text-center">
            Serverlərin Qurulması
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">

          {/* Server Definition */}
          <div className="bg-secondary p-8 md:p-10 rounded-lg shadow-lg mb-12">
            <h2 className="text-xl font-bold text-primary mb-4">Server nədir?</h2>
            <p className="text-lg leading-relaxed text-foreground">
              Server - böyük həcmdə informasiyanın emalı üçün nəzərdə tutulmuş və sutka ərzində xüsusi informasiya xidmətlərinin fasiləsiz işini təmin edən xüsusi kompüterdir. Server istifadəçilərin İNTERNET şəbəkəsinə çıxışının təmin olunması və idarə edilməsi, elektron məktubların göndərilməsi və qabul edilməsi, məlumatların saxlanılması və onlardan istifadə qaydalarının müəyyən edilməsi kimi işləri yerinə yetirir.
            </p>
          </div>

          {/* Server Types */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              Server növləri
            </h2>

            {/* Domain Controller */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-accent" />
                Domain Controller
              </h3>
              <div className="bg-primary/5 p-5 rounded-lg">
                <p className="text-foreground leading-relaxed">
                  Domain içərisindəki istifadəçi hesabları Active Directory verilənlər bazasında tutulur. İstifadəçilər bu məlumatlar sayəsində domaine qoşula bilirlər. Active Directory verilənlər bazasının üzərində olduğu maşına DC (Domain Controller) deyilir. DC səlahiyyətlərin verilməsini, idarəsini və kimlik doğrulamalarını təmin edir. Admin tərəfdən yanaşarsaq Domain admins qrupuna üzv istifadəçilər domain içərisindəki bütün obyektlər üzərində tam səlahiyyətə sahibdirlər.
                </p>
              </div>
            </div>

            {/* File Server */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-accent" />
                File Server
              </h3>
              <div className="bg-primary/5 p-5 rounded-lg">
                <p className="text-foreground leading-relaxed">
                  Böyük həcmdə yaddaşa malik və fayl əməliyyatlarının (faylların yazılması/oxunması) icrası üçün optimallaşdırılmış xüsusi kompüterdir. Fayl Serverin əsas təyinatı istənilən formatda olan (doc, xls, mp3, jpg, pdf və s.) faylları saxlamaq və onların təhlükəsizliyini təmin etməkdir. İri şəbəkələrdə fayl server xüsusi "şəbəkə əməliyyat sistemi" vasitəsi ilə idarə olunur.
                </p>
              </div>
            </div>

            {/* FTP Server */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-accent" />
                FTP Server
              </h3>
              <div className="bg-primary/5 p-5 rounded-lg">
                <p className="text-foreground leading-relaxed">
                  FTP-nin açılımı File Transfer Protocol-dur; yəni Verilənlərin Transfer Protokolu. Adından anlaşdığımız kimi bu serverlər bizə verilənləri təqdim edirlər. Məsələn bir kompüter firması yeni bir avadanlığının sürücüsünü və pulsuz yazılımlarını istifadəçilərə FTP server üzərindən göndərə bilər. Web səhifələrindən fayl endirməkdən fərqi ondadır ki, FTP server xətt qırılması kimi hallarda yarıda qalan fayl qaldığı yerdən endirməyə imkan verir, fərqli bir protokol olaraq daha sürətli fayl endirməyə imkan verir, eyni zamanda iki istiqamətli olduğu üçün istifadəçinin FTP serverinə fayl göndərməsini də təmin edir.
                </p>
              </div>
            </div>

            {/* Web Server */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-accent" />
                Web Server
              </h3>
              <div className="bg-primary/5 p-5 rounded-lg">
                <p className="text-foreground leading-relaxed">
                  Web server internet üzərində bir web səhifəsinin yayınında məsuliyyət daşıyan serverdir. Web server, Hostingi internet protokolu vasitəsi ilə təqdim edən bir serverdir. Hosting isə Web səhifələrini internetdə yayımlamaq üçün gərəkli sahənin kirayələnməsidir. Digər bir ifadə ilə hosting, bir Web səhifəsində yayımlanmaq istənilən səhifələrin, rəsimlərin və ya dokumentlərin internet istifadəçiləri tərəfindən çata biləcəyi bir kompüterdə tutulmasıdır.
                </p>
              </div>
            </div>

            {/* Mail Server */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-accent" />
                Mail Server
              </h3>
              <div className="bg-primary/5 p-5 rounded-lg">
                <p className="text-foreground leading-relaxed mb-4">
                  Elektron məktubların bir kompüterdən digər kompüterə ötürülməsini təmin edən xüsusi kompüter proqramıdır. Bir çox hallarda şirkətlər digər təşkilatların (İNTERNET provayderin, Hosting provayderin) "mail server"-indən istifadə edirlər. Lakin təşkilatda şəxsi mail serverin quraşdırılmasının bir sıra üstünlükləri var:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Elektron məktubların göndərilməsinə və qəbuluna tam nəzarət edə bilmək imkanı</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>İstənilən sayda poçt qutusu yaratmaq</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Limitsiz sayda elektron məktub göndərmək</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Göndərilən və qəbul edilən bütün məktubların ehtiyyat surətinin çıxartmaq (mail backup)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Firewall & Proxy Server */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-accent" />
                Firewall & Proxy (Vasitəçi) Server
              </h3>
              <div className="bg-primary/5 p-5 rounded-lg">
                <p className="text-foreground leading-relaxed">
                  Firewall-un əsas məqsədi şəbəkəyə zərər vermək ya da sızmaq istəyənlərə maneə törətməkdir. Ümumi olaraq şirkətlər və məlumat mərkəzləri üçün firewall tez-tez istifadə edilən bir təhlükəsizlik metodudur. Firewall-lar təhlükəsizlik və nəzarət üçün bir növ keçid nöqtəsi meydana gətirir.
                </p>
                <p className="text-foreground leading-relaxed mt-3">
                  Proxy, internetə giriş əsnasında istifadə edilən bir ara serverdir. Bu vəziyyətdə, məsələn bir şəbəkə səhifəsinə giriş əsnasında birbaşa əlaqə yerinə skaner proxy serverə bağlanır və hansı səhifəni istədiyini söyləyir. Proxy server lazımdırsa o səhifəyə bağlanır və məzmunu alır, Proxy server skanerə məzmunu göndərir. Kompüter şəbəkələrində, bir proxy server digər serverlərdən qaynaqları istəyən istifadəçilərin tələbləri üçün bir vasitə kimi davranan serverdir.
                </p>
              </div>
            </div>

            {/* Antivirus Server */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-accent" />
                Antivirus Server
              </h3>
              <div className="bg-primary/5 p-5 rounded-lg">
                <p className="text-foreground leading-relaxed mb-4">
                  Bu günki şərtlərdə heç bir kompüteri antivirus proqramı olmadan təsəvvür etmək mümkün deyil. Antivirus serverlər isə bizə bütün kompüterlərə antivirus yazmaq əvəzinə hamısını bir mərkəzdən idarə etmək imkanı verir.
                </p>
                <p className="text-foreground leading-relaxed">
                  Bu serverdən istifadənin öz növbəsində aşağıdakı üstünlükləri vardır:
                </p>
                <ul className="space-y-2 text-muted-foreground mt-3">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Daha aşağı maliyyətlə antivirus problemini aradan qaldırmaq</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Heç bir istifadəçinin bu xidmətdən kənar qalmadığına əmin olmaq</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Vaxta qənaət etmək</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* DB Server */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-accent" />
                DB Server
              </h3>
              <div className="bg-primary/5 p-5 rounded-lg">
                <p className="text-foreground leading-relaxed">
                  Kompüterdə verilənlərin bəlli bir düzən içində tutulduğu, bəlli bir sistem daxilində çıxış imkanı olan, idarə oluna bilən, update edilə bilən və bir-biriləri ilə əlaqə qura bilən verilənlərdən ibarət bir sistemin yerləşdiyi serverdir.
                </p>
              </div>
            </div>

            {/* Terminal Server */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-accent" />
                Terminal Server
              </h3>
              <div className="bg-primary/5 p-5 rounded-lg">
                <p className="text-foreground leading-relaxed mb-4">
                  Şəbəkə mühitində olan client kompüterlərin üzərindəki istifadəçilərə, terminal server kompüterində yüklü olan Windows əsaslı proqramlara uzaqdan giriş imkanı təmin etməkdədir. Client kompüterlər üzərində olan istifadəçilər, terminal server sayəsində server kompüterinə uzaqdan əlaqə reallaşdırarlar və server üzərindəki qaynaqları asanlıqla istifadə edir.
                </p>
                <p className="text-foreground leading-relaxed">
                  Terminal serverin bizə təmin etdiyi faydalar:
                </p>
                <ul className="space-y-2 text-muted-foreground mt-3">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Şəbəkə mühitində olan client kompüterlərə uzaqdan əlaqə reallaşdıraraq asan bir şəkildə rəhbərliyini təmin etmək</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Sistem Adminlərinin iş yükünü azaltmaq</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Networkdə çıxa biləcək problemlərə sürətli bir şəkildə həll tapmaq</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Sistemi daha asan bir şəkildə kontrol altında tutmaq</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Print Server */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-accent" />
                Print Server
              </h3>
              <div className="bg-primary/5 p-5 rounded-lg">
                <p className="text-foreground leading-relaxed">
                  Təşkilatlarda printerin kollektiv istifadəsinə imkan yaradan xüsusi cihazdır. Print server vasitəsi ilə bir printerdən həm simli həm də simsiz (Wi-Fi) şəbəkənin istifadəçiləri ortaq istifadə edə bilərlər. Bundan başqa şəbəkəyə qoşulmuş adi kompüterdən də print server kimi istifadə etmək mümkündür. Bunun üçün proqram təminatı vasitəsi ilə kompüterə qoşulmuş printerlərə, şəbəkə vasitəsi ilə digər istifadəçilərin istifadə edə bilməsi üçün icazə vermək lazımdır.
                </p>
              </div>
            </div>

            {/* SharePoint */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-accent" />
                SharePoint
              </h3>
              <div className="bg-primary/5 p-5 rounded-lg">
                <p className="text-foreground leading-relaxed">
                  Təşkilatlar SharePoint vasitəsilə daxili web saytlar yaratmaq üçün istifadə edir. Siz bütün cihazlardakı məlumatları saxlamaq, redaktə etmək, paylaşmaq və bunlara qoşulmaq üçün etibarlı bir yer olaraq istifadə edə bilərsiniz. Sizə tək lazım olan, Internet Explorer, Chrome və ya Firefox kimi bir web brauzerdir.
                </p>
              </div>
            </div>

            {/* ESXi Virtualization */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-accent" />
                ESXi Virtualization
              </h3>
              <div className="bg-primary/5 p-5 rounded-lg">
                <p className="text-foreground leading-relaxed">
                  ESXi virtuallaşdırma proqramlarından (Nümunə. Workstation) vərdiş etdiyimiz şəklin əksinə, istifadə etdiyimiz əməliyyat sistemi üzərinə qurula bilər bir sistem deyil. ESXi Linux əsaslı öz başına bir əməliyyat sistemidir. Beləliklə ESXi bizə - bir maşın resurslarından istifadə edərək bir neçə serveri qurmaqla resurslara qənaət etmək və Linux əsaslı bir sistem olduğu üçün yüksək təhlükəsizlik imkanı verir.
                </p>
              </div>
            </div>

            {/* Hyper-V Virtualization */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-accent" />
                Hyper-V Virtualization
              </h3>
              <div className="bg-primary/5 p-5 rounded-lg">
                <p className="text-foreground leading-relaxed">
                  Microsoft Hyper-V, Viridian şərti adındakı daha əvvəl Windows Server Virtualization olaraq bilinən 64-bitli kompüterlər üçün hypervisor əsaslı bir virtuallaşdırma sistemidir. Birdən çox server rolunu tək bir fiziki ana maşında çalışan ayrı məntiqi (virtual) maşınlar olaraq birləşdirərək server avadanlıqlarına və resurslarına qənaət etmək üçün istifadə edilir. Hyper-V sayəsində, Windows-dan başqa Linux və sairə kimi əməliyyat sistemləri də daxil olmaqla bir neçə əməliyyat sistemini məhsuldar şəkildə bir serverdə istifadə etmək mümkündür.
                </p>
              </div>
            </div>
          </div>

          {/* Data Line Solutions */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              Data Line şəbəkə həlləri
            </h2>

            <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
              <p className="text-primary font-medium mb-4">
                Data Line aşağıdakı şəbəkə həllərini müştərilərə təklif edir:
              </p>
              <ul className="space-y-2 text-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>LAN şəbəkələrinin (simli və simsiz - WiFi local şəbəkələr) tətbiqi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>WAN şəbəkələrinin (korporativ şəbəkələr) tətbiqi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>İnformasiya sistemlərinin resurslarına məsafədən çıxışın təşkil edilməsi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Çoxfunksiyalı korporativ şəbəkələrin tətbiq edilməsi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Telekommunikasiya şəbəkə infrastrukturlarının yaradılması və müasirləşdirilməsi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Avadanlığa texniki dəstək</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  )
}
