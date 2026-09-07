import { getPhase } from "./phase";

// Kalimat sebelum Ramadhan: persiapan spiritual
const MENUJU_PAGI = [
  "Setiap pagi yang kamu jalani adalah satu hari lebih dekat menuju bulan mulia.",
  "Ramadhan bukan waktu mulai berubah. Mulailah sekarang.",
  "Persiapkan hatimu sebelum Ramadhan tiba, bukan saat sudah di dalamnya.",
  "Puasa bukan hanya soal lapar dan haus. Siapkan hati sejak sekarang.",
  "Hari ini adalah latihan. Ramadhan adalah ujiannya.",
  "Bangun pagi untuk kebaikan adalah awal dari Ramadhan yang bermakna.",
  "Jangan tunggu Ramadhan untuk memperbanyak ibadah. Biasakan dari sekarang.",
  "Ramadhan menerima siapa saja yang datang dengan niat yang benar.",
  "Setiap doa pagi adalah investasi sebelum bulan yang penuh berkah.",
  "Mulai hari ini, niatkan satu kebaikan yang akan kamu pertahankan di Ramadhan.",
  "Pagi yang bersyukur adalah awal hari yang produktif, di dunia dan akhirat.",
  "Sebelum Ramadhan tiba, perbanyak istighfar. Bersihkan hati dulu.",
  "Hitungan ini terus berkurang. Manfaatkan setiap pagimu sebaik-baiknya.",
  "Ramadhan adalah bulan Al-Quran. Mulailah dengan membaca satu halaman hari ini.",
  "Berdoa agar diberi umur sampai bertemu Ramadhan adalah doa para kekasih Allah.",
  "Pagi ini adalah kesempatan mempersiapkan diri sebelum tamu agung itu tiba.",
  "Satu kebiasaan baik yang dibangun hari ini adalah pondasi Ramadhan yang kuat.",
  "Puasa Senin-Kamis adalah latihan terbaik sebelum Ramadhan.",
  "Ramadhan tidak lama lagi. Apa yang sudah kamu persiapkan?",
  "Sambut pagi dengan syukur. Setiap hari yang berlalu mendekatkanmu ke Ramadhan.",
];

const MENUJU_SIANG = [
  "Semakin dekat Ramadhan, semakin besar tanggung jawab mempersiapkan diri.",
  "Gunakan siang ini untuk memperbaiki satu kebiasaan buruk sebelum Ramadhan.",
  "Waktu terus berjalan. Ramadhan tidak menunggu kesiapanmu.",
  "Sedekah sebelum Ramadhan adalah pembuka pintu berkah.",
  "Di siang yang sibuk ini, sempatkan bershalawat.",
  "Setiap jam yang berlalu adalah pengingat: Ramadhan semakin dekat.",
  "Ramadhan bukan tentang rebahan seharian. Siapkan jadwal ibadahmu dari sekarang.",
  "Jangan tunda kebaikan sampai Ramadhan. Mulai sekarang.",
  "Siang ini adalah kesempatan memperbanyak bekal sebelum bulan mulia.",
  "Hapus satu kebiasaan negatif sebelum Ramadhan tiba. Cukup satu.",
  "Setiap menit yang berlalu mendekatkanmu ke momen paling mulia dalam setahun.",
  "Ramadhan semakin dekat. Sudahkah niatmu dipersiapkan?",
  "Persiapan terbaik adalah memperbanyak amal jauh sebelum bulan Ramadhan.",
  "Satu shalat sunnah hari ini adalah latihan untuk ibadah yang lebih berat di Ramadhan.",
  "Kurangi layar, perbanyak dzikir. Persiapkan hatimu.",
  "Mengapa menunggu Ramadhan? Kebaikan bisa dimulai sekarang.",
  "Setiap hari yang berlalu dengan kebaikan adalah tabungan untuk Ramadhan.",
  "Ramadhan memberi hadiah terbesar kepada mereka yang paling siap.",
  "Siang ini, ingatlah bahwa Ramadhan sedang mendekat.",
  "Gunakan hari ini untuk memperbaiki diri sebelum Ramadhan tiba.",
];

const MENUJU_MALAM = [
  "Malam ini, sempatkan berdoa agar diberikan umur sampai Ramadhan.",
  "Ramadhan adalah tamu agung yang perlu disambut dengan persiapan.",
  "Tidur lebih awal agar bangun untuk shalat malam. Latihan untuk Ramadhan.",
  "Malam ini, maafkan siapa pun yang pernah menyakitimu. Ringankan hatimu.",
  "Ramadhan akan terasa lebih bermakna jika hatimu bersih sejak sebelumnya.",
  "Istighfar malam ini adalah pembersih sebelum bulan pembersih tiba.",
  "Niatkan mulai besok pagi: kurangi satu hal yang sia-sia.",
  "Doa malam adalah bisikan yang paling didengar. Minta diberkati di Ramadhan.",
  "Sesedikit apapun ibadah malammu, lebih baik dari tidak sama sekali.",
  "Semangat Ramadhan tidak datang tiba-tiba. Dibangun sedikit demi sedikit.",
  "Baca Al-Quran malam ini. Jadikan kebiasaan sebelum Ramadhan.",
  "Tidur dengan niat baik adalah ibadah. Besok lanjutkan persiapan.",
  "Satu malam lagi berlalu. Ramadhan semakin dekat.",
  "Malam sebelum Ramadhan adalah malam yang tidak boleh disia-siakan.",
  "Berdoa sebelum tidur adalah penutup hari yang sempurna.",
  "Rencanakan ibadah Ramadhanmu malam ini selagi pikiran masih jernih.",
  "Shalat Witir adalah penutup malam yang indah. Jangan dilewatkan.",
  "Waktu istirahat ini pun bisa bernilai ibadah jika diniatkan dengan baik.",
  "Satu malam lagi mendekat. Besok, satu kesempatan baru untuk persiapan.",
  "Ramadhan mengajarkan bahwa jiwa juga butuh diet. Mulai dengan makanan mata malam ini.",
];

// Ramadhan - Sahur (perkiraan sebelum Subuh)
const RAMADAN_SAHUR = [
  "Bangun sahur adalah separuh kemenangan hari ini.",
  "Sahur itu berkah. Jangan lewatkan walau hanya seteguk air.",
  "Nabi bersabda: 'Bersahurlah, karena pada sahur itu ada berkah.'",
  "Bangun sahur sambil mengingat niat puasa adalah awal yang sempurna.",
  "Di saat orang lain tidur, kamu bangun. Itu nilai lebih yang hanya Ramadhan ajarkan.",
  "Sahur adalah makan dengan niat ibadah. Bukan sekadar mengisi perut.",
  "Dua rakaat sunnah Subuh lebih baik dari dunia dan seisinya.",
  "Bangun sahur mungkin berat, tapi pahalanya sangat ringan untuk dibawa.",
  "Nikmati sahurmu pelan-pelan. Ini berkah yang tidak ada di bulan lain.",
  "Setelah sahur, berdoalah. Waktu sebelum Subuh sangat mudah dikabulkan.",
  "Puasa tanpa sahur tetap sah, tapi kamu kehilangan sunnah yang penuh berkah.",
  "Mata yang masih berat ini akan merasakan manfaatnya seharian.",
  "Jangan lupa niat puasa. Tanpa niat, tidak ada amalannya.",
  "Sahur bersama keluarga adalah kenangan yang akan kamu rindukan suatu hari.",
  "Bangun sahur hari ini berarti kamu siap menghadapi hari yang penuh berkah.",
  "Minum air yang cukup saat sahur. Tubuhmu akan berterima kasih siang nanti.",
  "Sahur dengan kurma adalah sunnah Nabi. Sederhana, tapi bermakna.",
  "Makan sahur bukan balapan. Kunyah pelan-pelan, nikmati keberkahannya.",
];

// Ramadhan - Pagi (setelah Subuh hingga Dhuhr)
const RAMADAN_PAGI = [
  "Perutmu mungkin lapar, tapi pahalamu sedang menumpuk.",
  "Lapar dan haus ini adalah tanda bahwa ibadahmu sedang berjalan.",
  "Pagi Ramadhan adalah pagi yang lebih bercahaya dari biasanya.",
  "Setiap napas orang yang berpuasa adalah tasbih.",
  "Puasa mengajarkan kita merasakan apa yang dirasakan orang yang tidak punya.",
  "Tahan lisan dari hal yang sia-sia. Puasa bukan hanya perut.",
  "Setiap jam yang berlalu di bulan ini bernilai berlipat ganda.",
  "Al-Quran menunggumu. Bahkan satu ayat cukup untuk mengisi pagi ini.",
  "Ramadhan bukan soal seberapa lapar, tapi seberapa khusyuk.",
  "Dekatkan diri kepada Allah sebelum Dzuhur. Pagi ini masih panjang.",
  "Sedekah hari ini, walau sebutir kurma, nilainya besar di Ramadhan.",
  "Jaga matamu, lisanmu, pikiranmu. Puasa yang lengkap dimulai dari sana.",
  "Pagi yang sulit ini akan menjadi cerita manis di akhir Ramadhan.",
  "Ibadah sunnah di Ramadhan dinilai seperti ibadah wajib. Manfaatkan pagi ini.",
  "Orang yang sabar mendapat pahala tanpa batas. Pagi ini, bersabarlah.",
  "Dzikir pagi tidak butuh waktu lama. Lima menit, tapi penuh berkah.",
  "Ramadhan adalah kesempatan reset. Gunakan pagi ini dengan sungguh-sungguh.",
  "Rasanya lapar? Ingat, para sahabat juga merasakan ini.",
];

// Ramadhan - Siang (Dhuhr hingga Asr)
const RAMADAN_SIANG = [
  "Separuh hari ini sudah berhasil kamu lewati. Separuhnya lagi pasti bisa.",
  "Siang yang panas, perut yang lapar, hati yang sabar — itulah gambaran kemenangan.",
  "Sabar adalah amalan yang tidak ada batasnya. Siang ini kamu sedang menjalaninya.",
  "Lapar siang ini mengingatkanmu pada saudara yang lapar setiap hari.",
  "Dzuhur sudah. Sempatkan dua rakaat qobliyah dan ba'diyah.",
  "Siang Ramadhan bukan untuk tidur seharian. Isi dengan dzikir dan Al-Quran.",
  "Setiap rasa lapar yang kamu tahan hari ini, dibalas dengan kemuliaan.",
  "Jangan biarkan siang Ramadhanmu habis tanpa satu ayat Al-Quran pun.",
  "Istirahatlah sebentar. Tidur siang di Ramadhan pun bernilai ibadah.",
  "Siang ini, perbanyak shalawat. Ringkas tapi pahalanya tidak.",
  "Kamu mungkin lelah, tapi malaikat sedang mencatat setiap detik kesabaranmu.",
  "Asr tidak lama lagi. Bertahanlah.",
  "Di siang yang berat ini, ingat: Allah bersama orang-orang yang sabar.",
  "Ramadhan mengajarkan bahwa kenikmatan butuh pengorbanan.",
  "Yang berpuasa akan mendapat dua kebahagiaan: saat berbuka dan saat bertemu Rabb-nya.",
  "Sedikit lagi. Asr sudah dekat.",
  "Semakin berat ujian berpuasa, semakin besar pahalanya.",
];

// Ramadhan - Sore (Asr hingga Maghrib)
const RAMADAN_SORE = [
  "Sebentar lagi. Bertahan, kamu hampir sampai.",
  "Sore ini adalah yang paling berat, tapi juga yang paling dekat dengan pahala.",
  "Doamu di sore hari Ramadhan adalah salah satu doa yang paling dikabulkan.",
  "Menjelang Maghrib adalah waktu mustajab. Gunakan sekarang untuk berdoa.",
  "Semakin dekat buka, semakin besar sabar yang kamu tunjukkan.",
  "Berdoa sekarang. Doamu dalam keadaan berpuasa sangat kuat.",
  "Ashar sudah? Jangan sampai terlewat di hari-hari mulia ini.",
  "Sore ini, kurma atau air putih sudah cukup untuk berbuka dengan sempurna.",
  "Sedikit lagi. Kamu sudah berhasil sejauh ini.",
  "Jangan habiskan sore ini hanya menghitung menit. Isi dengan dzikir.",
  "Rasulullah berbuka dengan kurma dan air. Kesederhanaan yang penuh berkah.",
  "Waktu Maghrib semakin dekat. Siapkan niat dan syukurmu.",
  "Buka puasa bersama keluarga adalah nikmat yang tidak ternilai.",
  "Satu jam terakhir ini adalah yang paling bernilai. Jangan dilewatkan.",
  "Doa orang yang berpuasa saat menjelang buka tidak akan tertolak.",
  "Bertahan. Ini ujian terakhir sebelum hadiah itu datang.",
  "Sore Ramadhan adalah saat di mana doa paling mudah dikabulkan.",
  "Persiapkan buka puasa dengan yang sederhana. Sunnah itu lebih afdhol.",
];

// Ramadhan - Buka Puasa (setelah Maghrib hingga Isya)
const RAMADAN_BUKA = [
  "Alhamdulillah. Satu hari puasa yang sempurna.",
  "Berbuka dengan syukur adalah ibadah tersendiri.",
  "Nikmati bukamu dengan tenang. Ini momen istimewa di antara dua sujud.",
  "Setelah berbuka, jangan lupa: masih ada Isya dan Tarawih yang menunggu.",
  "Doa saat berbuka tidak akan tertolak. Manfaatkan momen ini.",
  "Satu hari berhasil. Masih ada hari-hari mulia di depan.",
  "Berbuka bersama, rezeki yang dinikmati bersama.",
  "Kurma itu sunnah. Tapi yang paling penting adalah syukur di hati.",
  "Tarawih bukan kewajiban, tapi siapa yang mau melewatkan kesempatan ini?",
  "Berbuka adalah hadiah setelah seharian berjuang.",
  "Jangan makan berlebihan saat buka. Perut penuh membuat Tarawih berat.",
  "Momen buka puasa adalah salah satu kebahagiaan yang hanya ada di Ramadhan.",
  "Syukuri nikmat berbuka. Tidak semua orang bisa merasakannya.",
  "Alhamdulillah atas hari ini. Minta kekuatan untuk hari esok.",
  "Nikmat berbuka ini akan kamu rindukan setelah Ramadhan berlalu.",
  "Berbukalah, lalu shalat. Urutan yang sempurna.",
  "Satu hari puasa selesai. Besok adalah kesempatan baru.",
  "Setelah Maghrib, ada Isya dan Tarawih. Masih banyak kesempatan.",
];

// Ramadhan - Malam (setelah Isya)
const RAMADAN_MALAM = [
  "Malam Ramadhan adalah malam yang paling bernilai sepanjang tahun.",
  "Tarawih bersama jamaah adalah sunnah yang penuh keberkahan.",
  "Lailatul Qadar mungkin ada di malam ini. Jangan lewatkan begitu saja.",
  "Malam di Ramadhan adalah emas. Rugi jika dihabiskan untuk hal sia-sia.",
  "Dzikir dan istighfar malam ini adalah persiapan untuk hari esok.",
  "Shalat Witir menutup malammu dengan sempurna.",
  "Bacalah beberapa ayat Al-Quran sebelum tidur. Malam ini berbeda.",
  "Minta ampunan malam ini. Pintu taubat terbuka lebar di Ramadhan.",
  "Doakan saudara-saudaramu yang jauh. Doa orang berpuasa sangat kuat.",
  "Tidur dengan wudhu di Ramadhan adalah sunnah yang besar pahalanya.",
  "Sepuluh malam terakhir Ramadhan adalah yang paling mulia.",
  "Malam ini, evaluasi: sudahkah ibadahmu lebih baik dari kemarin?",
  "Ramadhan tidak selamanya. Nikmati setiap malamnya.",
  "Selamat beristirahat. Besok, perjuangan dimulai lagi dengan semangat baru.",
  "Sahur menanti di sepertiga malam. Tidur dengan niat bangun.",
  "I'tikaf adalah cara terbaik menghidupkan malam-malam akhir Ramadhan.",
  "Malam yang diisi ibadah lebih bernilai dari seribu malam biasa.",
  "Berdoa untuk keluarga dan orang-orang yang kamu sayangi malam ini.",
];

// Idul Fitri
const IDUL_FITRI_QUOTES = [
  "Taqabbalallahu minna wa minkum. Semoga amal kita diterima.",
  "Selamat Idul Fitri 1448 Hijriyah. Minal Aidin Wal Faizin.",
  "Ramadhan berlalu, tapi amalnya semoga terus terjaga.",
  "Kembali fitri bukan berarti kembali ke kebiasaan lama.",
  "Hari ini kemenangan bagi yang menjalani Ramadhan dengan sepenuh hati.",
  "Mohon maaf lahir dan batin.",
  "Semoga Ramadhan ini mengubah kita menjadi lebih baik seterusnya.",
  "Idul Fitri adalah titik awal, bukan titik akhir.",
  "Puasa sudah selesai, tapi ketakwaan jangan berhenti.",
  "Semoga pertemuan kita dengan Ramadhan berikutnya lebih baik.",
  "Jangan biarkan Ramadhan berlalu tanpa meninggalkan jejak di hatimu.",
  "Allah menyukai yang konsisten. Pertahankan kebaikan Ramadhanmu.",
];

export type Slot =
  | "menuju:pagi" | "menuju:siang" | "menuju:malam"
  | "ramadan:sahur" | "ramadan:pagi" | "ramadan:siang"
  | "ramadan:sore" | "ramadan:buka" | "ramadan:malam"
  | "idul_fitri:0";

export const ROTATE_MS = 30_000;

export function slotOf(now: Date): Slot {
  const phase = getPhase(now);
  if (phase === "IDUL_FITRI") return "idul_fitri:0";
  const h = now.getHours();
  if (phase === "PRE_RAMADAN") {
    if (h >= 5 && h < 12) return "menuju:pagi";
    if (h >= 12 && h < 21) return "menuju:siang";
    return "menuju:malam";
  }
  // RAMADAN — perkiraan waktu sholat (slot beralih lebih presisi via state Countdown)
  if (h >= 3 && h < 5) return "ramadan:sahur";
  if (h >= 5 && h < 12) return "ramadan:pagi";
  if (h >= 12 && h < 15) return "ramadan:siang";
  if (h >= 15 && h < 18) return "ramadan:sore";
  if (h >= 18 && h < 20) return "ramadan:buka";
  return "ramadan:malam";
}

const SETS: Record<Slot, string[]> = {
  "menuju:pagi": MENUJU_PAGI,
  "menuju:siang": MENUJU_SIANG,
  "menuju:malam": MENUJU_MALAM,
  "ramadan:sahur": RAMADAN_SAHUR,
  "ramadan:pagi": RAMADAN_PAGI,
  "ramadan:siang": RAMADAN_SIANG,
  "ramadan:sore": RAMADAN_SORE,
  "ramadan:buka": RAMADAN_BUKA,
  "ramadan:malam": RAMADAN_MALAM,
  "idul_fitri:0": IDUL_FITRI_QUOTES,
};

export const quoteCount = (slot: Slot): number => SETS[slot].length;
export const quoteAt = (slot: Slot, i: number): string => SETS[slot][i];

export function nextQuoteIndex(slot: Slot, prev: number): number {
  const n = quoteCount(slot);
  if (prev < 0 || prev >= n) return Math.floor(Math.random() * n);
  const i = Math.floor(Math.random() * (n - 1));
  return i >= prev ? i + 1 : i;
}
