// Arabic Word Bank - Cumulative review data for Arabic letter games
// Each letter maps to words that START with that letter
// Used by review questions added at the end of each letter game
// Words are sourced from each letter's intro question (Q1)

const arabicWordBank = {
  'أ': [
    { image: 'word-rabbit', label: 'أرنب', optionAudio: '/audio/ar/word-arnab.mp3' },
    { image: 'word-arye', label: 'أسد', optionAudio: '/audio/ar/word-asad.mp3' },
    { image: 'word-ozen', label: 'أُذن', optionAudio: '/audio/ar/word-udhun.mp3' },
  ],
  'ب': [
    { image: 'word-barvaz', label: 'بطة', optionAudio: '/audio/ar/word-batta.mp3' },
    { image: 'word-bandora', label: 'بندورة', optionAudio: '/audio/ar/word-bandora.mp3' },
    { image: 'word-bayit', label: 'بيت', optionAudio: '/audio/ar/word-beit.mp3' },
  ],
  'ت': [
    { image: 'word-tapuach', label: 'تفاح', optionAudio: '/audio/ar/word-tuffah.mp3' },
    { image: 'word-tut', label: 'توت', optionAudio: '/audio/ar/word-toot.mp3' },
    { image: 'word-taj', label: 'تاج', optionAudio: '/audio/ar/word-taj.mp3' },
  ],
  'ث': [
    { image: 'word-snow', label: 'ثلج', optionAudio: '/audio/ar/word-thalj.mp3' },
    { image: 'word-fox', label: 'ثعلب', optionAudio: '/audio/ar/word-thalab.mp3' },
    { image: 'word-thoom', label: 'ثوم', optionAudio: '/audio/ar/word-thoom.mp3' },
  ],
  'ج': [
    { image: 'word-gamal', label: 'جمل', optionAudio: '/audio/ar/word-jamal.mp3' },
    { image: 'word-jibne', label: 'جبنة', optionAudio: '/audio/ar/word-jibne.mp3' },
    { image: 'word-gezer', label: 'جزر', optionAudio: '/audio/ar/word-jazar.mp3' },
  ],
  'ح': [
    { image: 'word-sus', label: 'حصان', optionAudio: '/audio/ar/word-hisan.mp3' },
    { image: 'word-halib', label: 'حليب', optionAudio: '/audio/ar/word-halib.mp3' },
    { image: 'word-himar', label: 'حمار', optionAudio: '/audio/ar/word-himar.mp3' },
    { image: 'word-whale', label: 'حوت', optionAudio: '/audio/ar/word-hoot.mp3' },
    { image: 'word-hamama', label: 'حمامة', optionAudio: '/audio/ar/word-hamama.mp3' },
    { image: 'word-chevel', label: 'حبل', optionAudio: '/audio/ar/word-habl.mp3' },
    { image: 'word-naal', label: 'حذاء', optionAudio: '/audio/ar/word-hitha.mp3' },
    { image: 'word-shablul', label: 'حلزون', optionAudio: '/audio/ar/word-halazoon.mp3' },
    { image: 'word-hakiba', label: 'حقيبة', optionAudio: '/audio/ar/word-hakiba.mp3' },
  ],
  'خ': [
    { image: 'word-lechem', label: 'خبز', optionAudio: '/audio/ar/word-khubz.mp3' },
    { image: 'word-melafafon', label: 'خيار', optionAudio: '/audio/ar/word-khiyar.mp3' },
    { image: 'word-kharoof', label: 'خروف', optionAudio: '/audio/ar/word-kharoof.mp3' },
    { image: 'word-tabaat', label: 'خاتم', optionAudio: '/audio/ar/word-khatim.mp3' },
    { image: 'word-chipooshit', label: 'خنفساء', optionAudio: '/audio/ar/word-khunfusa.mp3' },
    { image: 'word-kheima', label: 'خيمة', optionAudio: '/audio/ar/word-kheima.mp3' },
    { image: 'word-salat', label: 'خس', optionAudio: '/audio/ar/word-khas.mp3' },
    { image: 'word-khoukh', label: 'خوخ', optionAudio: '/audio/ar/word-khoukh.mp3' },
    { image: 'word-pig', label: 'خنزير', optionAudio: '/audio/ar/word-khinzir.mp3' },
  ],
  'د': [
    { image: 'word-dub', label: 'دب', optionAudio: '/audio/ar/word-dub.mp3' },
    { image: 'word-tarnegol', label: 'دجاجة', optionAudio: '/audio/ar/word-djaja.mp3' },
    { image: 'word-dolphin', label: 'دلفين', optionAudio: '/audio/ar/word-dulfin.mp3' },
    { image: 'word-daraja', label: 'دراجة', optionAudio: '/audio/ar/word-daraja.mp3' },
    { image: 'word-dumya', label: 'دمية', optionAudio: '/audio/ar/word-dumya.mp3' },
    { image: 'word-dalw', label: 'دلو', optionAudio: '/audio/ar/word-dalw.mp3' },
    { image: 'word-dooda', label: 'دودة', optionAudio: '/audio/ar/word-dooda.mp3' },
    { image: 'word-deek', label: 'ديك', optionAudio: '/audio/ar/word-deek.mp3' },
    { image: 'word-dinozaur', label: 'ديناصور', optionAudio: '/audio/ar/word-dinasoor.mp3' },
  ],
  'ذ': [
    { image: 'word-dhura', label: 'ذرة', optionAudio: '/audio/ar/word-dhura.mp3' },
    { image: 'word-zeev', label: 'ذئب', optionAudio: '/audio/ar/word-dhiib.mp3' },
    { image: 'word-zanav', label: 'ذيل', optionAudio: '/audio/ar/word-dheil.mp3' },
    { image: 'word-insect', label: 'ذبابة', optionAudio: '/audio/ar/word-dhubaba.mp3' },
    { image: 'word-dhahab', label: 'ذهب', optionAudio: '/audio/ar/word-dhahab.mp3' },
    { image: 'word-dhira', label: 'ذراع', optionAudio: '/audio/ar/word-dhira.mp3' },
    { image: 'word-dhikra', label: 'ذاكرة', optionAudio: '/audio/ar/word-dhikra.mp3' },
    { image: 'word-dhaqn', label: 'ذقن', optionAudio: '/audio/ar/word-dhaqn.mp3' },
    { image: 'word-dhaki', label: 'ذكي', optionAudio: '/audio/ar/word-dhaki.mp3' },
  ],
  'ر': [
    { image: 'word-rumman', label: 'رمان', optionAudio: '/audio/ar/word-rumman.mp3' },
    { image: 'word-regel', label: 'رجل', optionAudio: '/audio/ar/word-rijl.mp3' },
    { image: 'word-radaa', label: 'رضاعة', optionAudio: '/audio/ar/word-radaa.mp3' },
    { image: 'word-risala', label: 'رسالة', optionAudio: '/audio/ar/word-risala.mp3' },
    { image: 'word-raml', label: 'رمل', optionAudio: '/audio/ar/word-raml.mp3' },
    { image: 'word-ras', label: 'رأس', optionAudio: '/audio/ar/word-ras.mp3' },
    { image: 'word-rukba', label: 'ركبة', optionAudio: '/audio/ar/word-rukba.mp3' },
  ],
  'ز': [
    { image: 'word-zarafa', label: 'زرافة', optionAudio: '/audio/ar/word-zarafa.mp3' },
    { image: 'word-zeitoun', label: 'زيتون', optionAudio: '/audio/ar/word-zeitoun.mp3' },
    { image: 'word-zahra', label: 'زهرة', optionAudio: '/audio/ar/word-zahra.mp3' },
    { image: 'word-zubda', label: 'زبدة', optionAudio: '/audio/ar/word-zubda.mp3' },
    { image: 'word-zchuchit', label: 'زجاجة', optionAudio: '/audio/ar/word-zujaja.mp3' },
    { image: 'word-zebra', label: 'زيبرا', optionAudio: '/audio/ar/word-zebra-ar.mp3' },
    { image: 'word-zirr', label: 'زر', optionAudio: '/audio/ar/word-zirr.mp3' },
    { image: 'word-zunbur', label: 'زنبور', optionAudio: '/audio/ar/word-zunbur.mp3' },
    { image: 'word-zalaja', label: 'زلاجة', optionAudio: '/audio/ar/word-zalaja.mp3' },
  ],
  'س': [
    { image: 'word-dag', label: 'سمكة', optionAudio: '/audio/ar/word-samaka.mp3' },
    { image: 'word-sayara', label: 'سيارة', optionAudio: '/audio/ar/word-sayara.mp3' },
    { image: 'word-saaa', label: 'ساعة', optionAudio: '/audio/ar/word-saaa.mp3' },
    { image: 'word-sulhafa', label: 'سلحفاة', optionAudio: '/audio/ar/word-sulhafa.mp3' },
    { image: 'word-sikkeen', label: 'سكين', optionAudio: '/audio/ar/word-sikkeen.mp3' },
    { image: 'word-sullam', label: 'سلم', optionAudio: '/audio/ar/word-sullam.mp3' },
    { image: 'word-mita', label: 'سرير', optionAudio: '/audio/ar/word-sareer.mp3' },
    { image: 'word-sira', label: 'سفينة', optionAudio: '/audio/ar/word-safeena.mp3' },
    { image: 'word-souq', label: 'سوق', optionAudio: '/audio/ar/word-souq.mp3' },
  ],
  'ش': [
    { image: 'word-sun', label: 'شمس', optionAudio: '/audio/ar/word-shams.mp3' },
    { image: 'word-etz', label: 'شجرة', optionAudio: '/audio/ar/word-shajara.mp3' },
    { image: 'word-shokolata', label: 'شوكولاتة', optionAudio: '/audio/ar/word-shokolata.mp3' },
    { image: 'word-ner', label: 'شمعة', optionAudio: '/audio/ar/word-shamaa.mp3' },
    { image: 'word-sharab', label: 'شراب', optionAudio: '/audio/ar/word-sharab.mp3' },
    { image: 'word-shai', label: 'شاي', optionAudio: '/audio/ar/word-shai.mp3' },
    { image: 'word-reshet', label: 'شبكة', optionAudio: '/audio/ar/word-shabaka.mp3' },
    { image: 'word-shateera', label: 'شطيرة', optionAudio: '/audio/ar/word-shateera.mp3' },
  ],
  'ص': [
    { image: 'word-rocket', label: 'صاروخ', optionAudio: '/audio/ar/word-sarookh-sad.mp3' },
    { image: 'word-sabbar', label: 'صبار', optionAudio: '/audio/ar/word-sabbar.mp3' },
    { image: 'word-sahn', label: 'صحن', optionAudio: '/audio/ar/word-sahn.mp3' },
    { image: 'word-soof', label: 'صوف', optionAudio: '/audio/ar/word-soof.mp3' },
    { image: 'word-sundooq', label: 'صندوق', optionAudio: '/audio/ar/word-sundooq.mp3' },
    { image: 'word-saqr', label: 'صقر', optionAudio: '/audio/ar/word-saqr.mp3' },
    { image: 'word-sabon', label: 'صابون', optionAudio: '/audio/ar/word-saboon.mp3' },
    { image: 'word-soora', label: 'صورة', optionAudio: '/audio/ar/word-soora.mp3' },
    { image: 'word-sunboor', label: 'صنبور', optionAudio: '/audio/ar/word-sunboor.mp3' },
  ],
  'ض': [
    { image: 'word-tsfardea', label: 'ضفدع', optionAudio: '/audio/ar/word-difda.mp3' },
    { image: 'word-daw', label: 'ضوء', optionAudio: '/audio/ar/word-daw.mp3' },
    { image: 'word-dahk', label: 'ضحك', optionAudio: '/audio/ar/word-dahk.mp3' },
    { image: 'word-dayf', label: 'ضيف', optionAudio: '/audio/ar/word-dayf.mp3' },
    { image: 'word-dabab', label: 'ضباب', optionAudio: '/audio/ar/word-dabab.mp3' },
    { image: 'word-dimada', label: 'ضمادة', optionAudio: '/audio/ar/word-dimada.mp3' },
    { image: 'word-daba', label: 'ضبع', optionAudio: '/audio/ar/word-daba.mp3' },
    { image: 'word-dirs', label: 'ضرس', optionAudio: '/audio/ar/word-dirs.mp3' },
    { image: 'word-dabb', label: 'ضب', optionAudio: '/audio/ar/word-dabb.mp3' },
  ],
  'ط': [
    { image: 'word-tayas', label: 'طائرة', optionAudio: '/audio/ar/word-taira.mp3' },
    { image: 'word-tabl', label: 'طبل', optionAudio: '/audio/ar/word-tabl.mp3' },
    { image: 'word-tifl', label: 'طفل', optionAudio: '/audio/ar/word-tifl.mp3' },
    { image: 'word-tawla', label: 'طاولة', optionAudio: '/audio/ar/word-tawla.mp3' },
    { image: 'word-tabib', label: 'طبيب', optionAudio: '/audio/ar/word-tabib.mp3' },
    { image: 'word-tawq', label: 'طوق', optionAudio: '/audio/ar/word-tawq.mp3' },
    { image: 'word-tayara', label: 'طيارة', optionAudio: '/audio/ar/word-tayara.mp3' },
    { image: 'word-taheen', label: 'طحين', optionAudio: '/audio/ar/word-taheen.mp3' },
    { image: 'word-bandora', label: 'طماطم', optionAudio: '/audio/ar/word-tamatim.mp3' },
  ],
  'ظ': [
    { image: 'word-dharf', label: 'ظرف', optionAudio: '/audio/ar/word-dharf.mp3' },
    { image: 'word-dhill', label: 'ظل', optionAudio: '/audio/ar/word-dhill.mp3' },
    { image: 'word-dhabi', label: 'ظبي', optionAudio: '/audio/ar/word-dhabi.mp3' },
    { image: 'word-dhufr', label: 'ظفر', optionAudio: '/audio/ar/word-dhufr.mp3' },
    { image: 'word-dhahr', label: 'ظهر', optionAudio: '/audio/ar/word-dhahr.mp3' },
    { image: 'word-dhalam', label: 'ظلام', optionAudio: '/audio/ar/word-dhalam.mp3' },
    { image: 'word-dharif', label: 'ظريف', optionAudio: '/audio/ar/word-dharif.mp3' },
    { image: 'word-dhabya', label: 'ظبية', optionAudio: '/audio/ar/word-dhabya.mp3' },
    { image: 'word-dhama', label: 'ظمأ', optionAudio: '/audio/ar/word-dhama.mp3' },
  ],
  'ع': [
    { image: 'word-ayin-eye', label: 'عين', optionAudio: '/audio/ar/word-ayn.mp3' },
    { image: 'word-inab', label: 'عنب', optionAudio: '/audio/ar/word-inab.mp3' },
    { image: 'word-asal', label: 'عسل', optionAudio: '/audio/ar/word-asal.mp3' },
    { image: 'word-tsipor', label: 'عصفور', optionAudio: '/audio/ar/word-usfur.mp3' },
    { image: 'word-ajala', label: 'عجلة', optionAudio: '/audio/ar/word-ajala.mp3' },
    { image: 'word-akavish', label: 'عنكبوت', optionAudio: '/audio/ar/word-ankabut.mp3' },
    { image: 'word-araba', label: 'عربة', optionAudio: '/audio/ar/word-araba.mp3' },
    { image: 'word-adhm', label: 'عظم', optionAudio: '/audio/ar/word-adhm.mp3' },
    { image: 'word-aqrab', label: 'عقرب', optionAudio: '/audio/ar/word-aqrab.mp3' },
  ],
  'غ': [
    { image: 'word-ghazal', label: 'غزال', optionAudio: '/audio/ar/word-ghazal.mp3' },
    { image: 'word-ghayma', label: 'غيمة', optionAudio: '/audio/ar/word-ghayma.mp3' },
    { image: 'word-ghurab', label: 'غراب', optionAudio: '/audio/ar/word-ghurab.mp3' },
    { image: 'word-ghassala', label: 'غسالة', optionAudio: '/audio/ar/word-ghassala.mp3' },
    { image: 'word-ghaba', label: 'غابة', optionAudio: '/audio/ar/word-ghaba.mp3' },
    { image: 'word-ghitaa', label: 'غطاء', optionAudio: '/audio/ar/word-ghitaa.mp3' },
    { image: 'word-ghanam', label: 'غنم', optionAudio: '/audio/ar/word-ghanam.mp3' },
    { image: 'word-ghusn', label: 'غصن', optionAudio: '/audio/ar/word-ghusn.mp3' },
    { image: 'word-ghar', label: 'غار', optionAudio: '/audio/ar/word-ghar.mp3' },
  ],
  'ف': [
    { image: 'word-pil', label: 'فيل', optionAudio: '/audio/ar/word-fil.mp3' },
    { image: 'word-parpar', label: 'فراشة', optionAudio: '/audio/ar/word-farasha.mp3' },
    { image: 'word-achbar', label: 'فأر', optionAudio: '/audio/ar/word-faar.mp3' },
    { image: 'word-farawla', label: 'فراولة', optionAudio: '/audio/ar/word-farawla.mp3' },
    { image: 'word-fustan', label: 'فستان', optionAudio: '/audio/ar/word-fustan.mp3' },
    { image: 'word-fam', label: 'فم', optionAudio: '/audio/ar/word-fam.mp3' },
    { image: 'word-pilpel', label: 'فلفل', optionAudio: '/audio/ar/word-filfil.mp3' },
    { image: 'word-fanus', label: 'فانوس', optionAudio: '/audio/ar/word-fanus.mp3' },
    { image: 'word-finjan', label: 'فنجان', optionAudio: '/audio/ar/word-finjan.mp3' },
  ],
  'ق': [
    { image: 'word-chatul', label: 'قطة', optionAudio: '/audio/ar/word-qitta.mp3' },
    { image: 'word-yareach', label: 'قمر', optionAudio: '/audio/ar/word-qamar.mp3' },
    { image: 'word-kof', label: 'قرد', optionAudio: '/audio/ar/word-qird.mp3' },
    { image: 'word-et', label: 'قلم', optionAudio: '/audio/ar/word-qalam.mp3' },
    { image: 'word-lev', label: 'قلب', optionAudio: '/audio/ar/word-qalb.mp3' },
    { image: 'word-sira', label: 'قارب', optionAudio: '/audio/ar/word-qarib.mp3' },
    { image: 'word-qufl', label: 'قفل', optionAudio: '/audio/ar/word-qufl.mp3' },
    { image: 'word-kova', label: 'قبعة', optionAudio: '/audio/ar/word-qubaa.mp3' },
    { image: 'word-rainbow', label: 'قوس قزح', optionAudio: '/audio/ar/word-qaws-quzah.mp3' },
  ],
  'ك': [
    { image: 'word-kelev', label: 'كلب', optionAudio: '/audio/ar/word-kalb.mp3' },
    { image: 'word-sefer', label: 'كتاب', optionAudio: '/audio/ar/word-kitab.mp3' },
    { image: 'word-kursi', label: 'كرسي', optionAudio: '/audio/ar/word-kursi.mp3' },
    { image: 'word-finjan', label: 'كوب', optionAudio: '/audio/ar/word-kub.mp3' },
    { image: 'word-kadur', label: 'كرة', optionAudio: '/audio/ar/word-kura.mp3' },
    { image: 'word-uga', label: 'كعكة', optionAudio: '/audio/ar/word-kaaka.mp3' },
    { image: 'word-kanguru', label: 'كنغر', optionAudio: '/audio/ar/word-kanghar.mp3' },
    { image: 'word-violin', label: 'كمان', optionAudio: '/audio/ar/word-kaman.mp3' },
    { image: 'word-kumthra', label: 'كمثرى', optionAudio: '/audio/ar/word-kumthra.mp3' },
  ],
  'ل': [
    { image: 'word-limon', label: 'ليمون', optionAudio: '/audio/ar/word-leimun.mp3' },
    { image: 'word-luaba', label: 'لعبة', optionAudio: '/audio/ar/word-luaba.mp3' },
    { image: 'word-lisan', label: 'لسان', optionAudio: '/audio/ar/word-lisan.mp3' },
    { image: 'word-yogurt', label: 'لبن', optionAudio: '/audio/ar/word-laban.mp3' },
    { image: 'word-leil', label: 'ليل', optionAudio: '/audio/ar/word-leil.mp3' },
    { image: 'word-lawha', label: 'لوحة', optionAudio: '/audio/ar/word-lawha.mp3' },
    { image: 'word-lahm', label: 'لحم', optionAudio: '/audio/ar/word-lahm.mp3' },
    { image: 'word-lulu', label: 'لؤلؤة', optionAudio: '/audio/ar/word-lulu.mp3' },
    { image: 'word-fustan', label: 'لباس', optionAudio: '/audio/ar/word-libas.mp3' },
  ],
  'م': [
    { image: 'word-banana', label: 'موز', optionAudio: '/audio/ar/word-mawz.mp3' },
    { image: 'word-key', label: 'مفتاح', optionAudio: '/audio/ar/word-miftah.mp3' },
    { image: 'word-maa', label: 'ماء', optionAudio: '/audio/ar/word-maa.mp3' },
    { image: 'word-madrasa', label: 'مدرسة', optionAudio: '/audio/ar/word-madrasa.mp3' },
    { image: 'word-geshem', label: 'مطر', optionAudio: '/audio/ar/word-matar.mp3' },
    { image: 'word-malik', label: 'ملك', optionAudio: '/audio/ar/word-malik.mp3' },
    { image: 'word-miknasa', label: 'مكنسة', optionAudio: '/audio/ar/word-miknasa.mp3' },
    { image: 'word-miraa', label: 'مرآة', optionAudio: '/audio/ar/word-miraa.mp3' },
    { image: 'word-miqass', label: 'مقص', optionAudio: '/audio/ar/word-miqass.mp3' },
  ],
  'ن': [
    { image: 'word-kochav', label: 'نجمة', optionAudio: '/audio/ar/word-najma.mp3' },
    { image: 'word-dvora', label: 'نحلة', optionAudio: '/audio/ar/word-nahla.mp3' },
    { image: 'word-namer', label: 'نمر', optionAudio: '/audio/ar/word-namir.mp3' },
    { image: 'word-esh', label: 'نار', optionAudio: '/audio/ar/word-nar.mp3' },
    { image: 'word-nadharat', label: 'نظارات', optionAudio: '/audio/ar/word-nadharat.mp3' },
    { image: 'word-nemala', label: 'نملة', optionAudio: '/audio/ar/word-namla.mp3' },
    { image: 'word-nahr', label: 'نهر', optionAudio: '/audio/ar/word-nahr.mp3' },
    { image: 'word-nakhla', label: 'نخلة', optionAudio: '/audio/ar/word-nakhla.mp3' },
    { image: 'word-naal', label: 'نعل', optionAudio: '/audio/ar/word-naal.mp3' },
  ],
  'ه': [
    { image: 'word-telephone', label: 'هاتف', optionAudio: '/audio/ar/word-hatif.mp3' },
    { image: 'word-haram', label: 'هرم', optionAudio: '/audio/ar/word-haram.mp3' },
    { image: 'word-hadiya', label: 'هدية', optionAudio: '/audio/ar/word-hadiya.mp3' },
    { image: 'word-hilal', label: 'هلال', optionAudio: '/audio/ar/word-hilal.mp3' },
    { image: 'word-hawaa', label: 'هواء', optionAudio: '/audio/ar/word-hawaa.mp3' },
    { image: 'word-helicopter', label: 'هليكوبتر', optionAudio: '/audio/ar/word-helicopter.mp3' },
    { image: 'word-hudhud', label: 'هدهد', optionAudio: '/audio/ar/word-hudhud.mp3' },
    { image: 'word-harisa', label: 'هريسة', optionAudio: '/audio/ar/word-harisa.mp3' },
    { image: 'word-chatul', label: 'هرة', optionAudio: '/audio/ar/word-hirra.mp3' },
  ],
  'و': [
    { image: 'word-vered', label: 'وردة', optionAudio: '/audio/ar/word-warda.mp3' },
    { image: 'word-walad', label: 'ولد', optionAudio: '/audio/ar/word-walad.mp3' },
    { image: 'word-wajh', label: 'وجه', optionAudio: '/audio/ar/word-wajh.mp3' },
    { image: 'word-wisada', label: 'وسادة', optionAudio: '/audio/ar/word-wisada.mp3' },
    { image: 'word-wazza', label: 'وزة', optionAudio: '/audio/ar/word-wazza.mp3' },
    { image: 'word-leaf', label: 'ورقة', optionAudio: '/audio/ar/word-waraqa.mp3' },
    { image: 'word-wiaa', label: 'وعاء', optionAudio: '/audio/ar/word-wiaa.mp3' },
    { image: 'word-winsh', label: 'ونش', optionAudio: '/audio/ar/word-winsh.mp3' },
    { image: 'word-waquud', label: 'وقود', optionAudio: '/audio/ar/word-waquud.mp3' },
  ],
  'ي': [
    { image: 'word-yadayim', label: 'يد', optionAudio: '/audio/ar/word-yad.mp3' },
    { image: 'word-yaqteen', label: 'يقطين', optionAudio: '/audio/ar/word-yaqteen.mp3' },
    { image: 'word-hamama', label: 'يمامة', optionAudio: '/audio/ar/word-yamama.mp3' },
    { image: 'word-yakht', label: 'يخت', optionAudio: '/audio/ar/word-yakht.mp3' },
    { image: 'word-yarqa', label: 'يرقة', optionAudio: '/audio/ar/word-yarqa.mp3' },
    { image: 'word-yasmeen', label: 'ياسمين', optionAudio: '/audio/ar/word-yasmeen.mp3' },
    { image: 'word-yasoob', label: 'يعسوب', optionAudio: '/audio/ar/word-yasoob.mp3' },
    { image: 'word-sun', label: 'يوم', optionAudio: '/audio/ar/word-yawm.mp3' },
    { image: 'word-yanii', label: 'يانع', optionAudio: '/audio/ar/word-yanii.mp3' },
  ],
};

// Ordered list of Arabic letters as they appear in the game categories
export const arabicLetterOrder = [
  'أ', 'ب', 'ت', 'ث', 'ج',  // Category 1: أبتثج
  'ح', 'خ', 'د', 'ذ', 'ر',  // Category 2: حخدذر
  'ز', 'س', 'ش', 'ص', 'ض',  // Category 3: زسشصض
  'ط', 'ظ', 'ع', 'غ', 'ف',  // Category 4: طظعغف
  'ق', 'ك', 'ل', 'م', 'ن',  // Category 5: قكلمن
  'ه', 'و', 'ي',              // Category 6: هوي
];

/**
 * Generate a cumulative review question for an Arabic letter game.
 * Shows words from ALL letters learned so far (up to and including current letter).
 * Format: isIntroMultiSelect (all options are correct, click to hear audio).
 *
 * @param {number} letterIndex - Index of the current letter in arabicLetterOrder (0-based)
 * @param {string} questionIdPrefix - Prefix for the question ID (e.g., 'la-ar')
 * @param {number} questionNumber - Question number within the game (e.g., 7 for Q7)
 * @param {number} [maxWords=9] - Maximum number of words to show
 * @returns {object} A question object ready to be added to a game's questions array
 */
export function generateCumulativeReview(letterIndex, questionIdPrefix, questionNumber, maxWords = 9) {
  const learnedLetters = arabicLetterOrder.slice(0, letterIndex + 1);

  // Collect all words from learned letters
  const allWords = [];
  for (const letter of learnedLetters) {
    const words = arabicWordBank[letter] || [];
    for (const word of words) {
      allWords.push({ ...word, letter });
    }
  }

  // Select words: ensure at least 1 from the current letter, rest random from all learned
  const currentLetterWords = allWords.filter(w => w.letter === learnedLetters[learnedLetters.length - 1]);
  const otherWords = allWords.filter(w => w.letter !== learnedLetters[learnedLetters.length - 1]);

  // Shuffle helper
  const shuffle = (arr) => {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  // Pick words: 2 from current letter (or more if no others available), rest from others
  const shuffledCurrent = shuffle(currentLetterWords);
  const shuffledOthers = shuffle(otherWords);
  const currentMin = otherWords.length === 0 ? maxWords : Math.min(2, shuffledCurrent.length);
  const currentPick = shuffledCurrent.slice(0, Math.min(currentMin, shuffledCurrent.length));
  const remaining = maxWords - currentPick.length;
  const otherPick = shuffledOthers.slice(0, remaining);

  const selectedWords = shuffle([...currentPick, ...otherPick]);

  // Build options
  const options = selectedWords.map((word, idx) => ({
    id: `opt-${idx + 1}`,
    image: word.image,
    label: word.label,
    isCorrect: true,
    optionAudio: word.optionAudio,
  }));

  // Build letters display string for instruction
  const lettersStr = learnedLetters.join('، ');

  return {
    id: `${questionIdPrefix}-e${questionNumber}`,
    instruction: `כל המילים האלה מתחילות באותיות שלמדנו: ${lettersStr}`,
    instructionAudio: '/audio/ar/review-words-learned.mp3',
    isIntroMultiSelect: true,
    showLabels: true,
    options,
  };
}

export default arabicWordBank;
