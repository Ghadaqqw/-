// ============================================================================
// French C2 course · «La traduction et l’interprétation» — three stages: (1) Les
// types de traduction (littérale, libre, technique, littéraire, juridique,
// médicale, audiovisuelle, localisation) → (2) L’interprétation (simultanée,
// consécutive, de liaison, chuchotée, communautaire, la cabine, la note, la
// restitution) → (3) Les enjeux de la traduction (l’équivalence, la fidélité,
// la trahison, la transposition, la modulation, l’adaptation, l’explicitation,
// la compensation). Grammar met on the way: agreement of feminine adjectives
// with names of disciplines, the interrogative with -t- euphonic, and the
// feminine noun pattern l’équivalence / la fidélité. Built for Arabic speakers
// preparing the DALF C2 (maîtrise de la langue).
// ============================================================================

import { phrase, say, stage } from './kit'

const TYPES = stage({
  id: 'fr5-trad-types',
  emoji: '📚',
  title: ['Les types de traduction', 'The types of translation', 'أنواع الترجمة'],
  setting: ['Karim et Salma comparent huit types de traduction.', 'Karim and Salma compare eight types of translation.', 'يقارن كريم وسلمى ثمانية أنواع من الترجمة.'],
  scene: [
    say('bear', 'Salma classe huit types de traduction.', 'Salma classifies eight types of translation.', 'تُصنّف سلمى ثمانية أنواع من الترجمة.'),
    say('salma', 'La traduction littérale suit le texte mot à mot.', 'Literal translation follows the text word for word.', 'الترجمة الحرفية تتبع النصّ كلمة بكلمة.'),
    say('bear', 'La traduction libre recrée-t-elle l’esprit du texte ?', 'Does free translation recreate the spirit of the text?', 'هل تُعيد الترجمة الحرّة خلق روح النصّ؟'),
    say('salma', 'La traduction technique exige-t-elle un glossaire précis ?', 'Does technical translation demand a precise glossary?', 'هل تتطلّب الترجمة التقنيّة مُسردًا دقيقًا؟'),
    say('bear', 'La localisation adapte-t-elle le produit au marché ?', 'Does localization adapt the product to the market?', 'هل يُكيّف التوطين المنتجَ مع السوق؟'),
    say('duck', 'Bravo ! La traduction littéraire recherche l’élégance.', 'Bravo! Literary translation seeks elegance.', 'أحسنت! الترجمة الأدبيّة تبحث عن الأناقة.'),
  ],
  phrases: [
    phrase('la traduction littérale', '🔤', ['Literal translation', 'الترجمة الحرفية'], ['Word-for-word rendering, stays close to syntax.', 'نقل كلمة بكلمة يبقى قريبًا من البنية.'], [
      ['La traduction littérale suit le texte mot à mot.', 'Literal translation follows the text word for word.', 'الترجمة الحرفية تتبع النصّ كلمة بكلمة.'],
      ['La traduction littérale fige parfois le sens.', 'Literal translation sometimes freezes the meaning.', 'الترجمة الحرفية تُجمّد المعنى أحيانًا.'],
    ]),
    phrase('la traduction libre', '🕊️', ['Free translation', 'الترجمة الحرّة'], ['Renders sense over letter, favors fluency.', 'تنقل المعنى لا الحرف وتميل إلى الانسياب.'], [
      ['La traduction libre privilégie le souffle du texte.', 'Free translation favors the breath of the text.', 'الترجمة الحرّة تُفضّل روح النصّ.'],
      ['La traduction libre recrée l’esprit de l’original.', 'Free translation recreates the spirit of the original.', 'الترجمة الحرّة تُعيد خلق روح الأصل.'],
    ]),
    phrase('la traduction technique', '⚙️', ['Technical translation', 'الترجمة التقنيّة'], ['Manuals, patents, engineering documents.', 'أدلّة وبراءات اختراع ووثائق هندسيّة.'], [
      ['La traduction technique exige une terminologie exacte.', 'Technical translation demands exact terminology.', 'الترجمة التقنيّة تتطلّب مصطلحات دقيقة.'],
      ['La traduction technique sert les ingénieurs.', 'Technical translation serves engineers.', 'الترجمة التقنيّة تخدم المهندسين.'],
    ]),
    phrase('la traduction littéraire', '📖', ['Literary translation', 'الترجمة الأدبيّة'], ['Novels, poetry, essays; style matters.', 'رواية وشعر ومقالات؛ الأسلوب مهمّ.'], [
      ['La traduction littéraire respecte le style de l’auteur.', 'Literary translation respects the author’s style.', 'الترجمة الأدبيّة تحترم أسلوب الكاتب.'],
      ['La traduction littéraire recherche l’élégance.', 'Literary translation seeks elegance.', 'الترجمة الأدبيّة تبحث عن الأناقة.'],
    ]),
    phrase('la traduction juridique', '⚖️', ['Legal translation', 'الترجمة القانونيّة'], ['Contracts, laws, treaties; precision is binding.', 'عقود وقوانين ومعاهدات؛ الدقّة مُلزمة.'], [
      ['La traduction juridique garantit la valeur du contrat.', 'Legal translation guarantees the contract’s value.', 'الترجمة القانونيّة تضمن قيمة العقد.'],
      ['La traduction juridique sécurise les traités.', 'Legal translation secures treaties.', 'الترجمة القانونيّة تؤمّن المعاهدات.'],
    ]),
    phrase('la traduction médicale', '💊', ['Medical translation', 'الترجمة الطبيّة'], ['Leaflets, studies, records; safety critical.', 'منشورات ودراسات وسجلاّت؛ السلامة حرجة.'], [
      ['La traduction médicale protège le patient.', 'Medical translation protects the patient.', 'الترجمة الطبيّة تحمي المريض.'],
      ['La traduction médicale exige une grande rigueur.', 'Medical translation demands great rigor.', 'الترجمة الطبيّة تتطلّب صرامة كبيرة.'],
    ]),
    phrase('la traduction audiovisuelle', '🎬', ['Audiovisual translation', 'الترجمة السمعيّة البصريّة'], ['Subtitling, dubbing, voice-over for the screen.', 'ترجمة فرعيّة ودبلجة وتعليق صوتيّ للشاشة.'], [
      ['La traduction audiovisuelle synchronise les dialogues.', 'Audiovisual translation synchronizes dialogues.', 'الترجمة السمعيّة البصريّة تُزامن الحوارات.'],
      ['La traduction audiovisuelle inclut le sous-titrage.', 'Audiovisual translation includes subtitling.', 'الترجمة السمعيّة البصريّة تشمل الترجمة الفرعيّة.'],
    ]),
    phrase('la localisation', '🌐', ['Localization', 'التوطين'], ['Adapts a product to a market’s norms.', 'يُكيّف منتجًا مع معايير سوق.'], [
      ['La localisation adapte un produit à un marché.', 'Localization adapts a product to a market.', 'التوطين يُكيّف منتجًا مع سوق.'],
      ['La localisation soignée respecte la culture cible.', 'Careful localization respects the target culture.', 'التوطين المتقن يحترم الثقافة المقصودة.'],
    ]),
  ],
  talk: {
    setting: ['Salma parle à Nour des types de traduction.', 'Salma talks to Nour about the types of translation.', 'تتحدّث سلمى مع نور عن أنواع الترجمة.'],
    lines: [
      say('salma', 'Nour, la traduction littérale fige-t-elle le sens ?', 'Nour, does literal translation freeze the meaning?', 'نور، هل تُجمّد الترجمة الحرفية المعنى؟'),
      say('nour', 'Oui ! Et la localisation adapte au marché, Salma.', 'Yes! And localization adapts to the market, Salma.', 'نعم! والتوطين يُكيّف مع السوق يا سلمى.'),
    ],
  },
  grammar: {
    examples: ['La traduction [littérale] suit le texte. (adjective, feminine singular)', 'La traduction [libre] recrée l’esprit. (adjective, feminine singular)', 'La traduction [technique] exige un glossaire. (adjective, feminine singular)'],
    question: ['Literal translation follows the text: « La traduction ___ suit le texte. »', 'الترجمة الحرفية تتبع النصّ: « La traduction ___ suit le texte. »'],
    options: [['littérale', 'littérale'], ['libre', 'libre'], ['technique', 'technique']],
    correct: 0,
    explanation: [
      'Les types de traduction : eight families, each with its own constraints. La traduction littérale follows the source word for word, staying close to syntax but sometimes freezing the meaning. La traduction libre privileges the breath of the text, recreating the spirit of the original. La traduction technique demands exact terminology for manuals, patents and engineering documents. La traduction littéraire respects the author’s style and seeks elegance in novels, poetry and essays. La traduction juridique guarantees the binding value of contracts, laws and treaties. La traduction médicale protects the patient and demands rigor in leaflets, studies and records. La traduction audiovisuelle synchronizes dialogues through subtitling, dubbing and voice-over. La localisation adapts a product to a market’s norms, respecting the target culture. Agreement: each type takes a feminine singular adjective agreeing with « la traduction » (littérale, libre, technique, littéraire, juridique, médicale, audiovisuelle).',
      'أنواع الترجمة: ثماني عائلات، لكلٍّ قيودها. la traduction littérale تتبع المصدر كلمة بكلمة وتبقى قريبة من البنية لكنها قد تُجمّد المعنى. وla traduction libre تُفضّل روح النصّ وتُعيد خلق روح الأصل. وla traduction technique تتطلّب مصطلحات دقيقة للأدلّة وبراءات الاختراع والوثائق الهندسيّة. وla traduction littéraire تحترم أسلوب الكاتب وتبحث عن الأناقة في الرواية والشعر والمقالات. وla traduction juridique تضمن قيمة العقد والقانون والمعاهدة المُلزمة. وla traduction médicale تحمي المريض وتتطلّب صرامة في المنشورات والدراسات والسجلّات. وla traduction audiovisuelle تُزامن الحوارات بالترجمة الفرعيّة والدبلجة والتعليق الصوتيّ. وla localisation يُكيّف منتجًا مع معايير سوق ويحترم الثقافة المقصودة. والمطابقة: كلّ نوع يأخذ صفة مؤنّثة مفردة تُطابق «la traduction» (littérale، libre، technique، littéraire، juridique، médicale، audiovisuelle).',
    ],
  },
  transfer: {
    setting: ['Adam applique les types de traduction.', 'Adam applies the types of translation.', 'يطبّق آدم أنواع الترجمة.'],
    lines: [
      say('karim', 'La traduction littérale fige parfois le sens !', 'Literal translation sometimes freezes the meaning!', 'الترجمة الحرفية تُجمّد المعنى أحيانًا!'),
      say('rana', 'Parfait ! Et la localisation adapte au marché, Adam.', 'Perfect! And localization adapts to the market, Adam.', 'ممتاز! والتوطين يُكيّف مع السوق يا آدم.'),
    ],
  },
  write: {
    prompt: ['Say "literal translation freezes the meaning".', 'قل «الترجمة الحرفية تُجمّد المعنى».'],
    mustInclude: ['littérale'],
    model: 'La traduction littérale fige le sens.',
    frame: 'La traduction ___ fige le sens.',
  },
  drills: [
    ['La traduction ___ suit le texte.', ['littérale', 'libre', 'technique'], ['Literal.', 'حرفية.']],
    ['La traduction ___ recrée l’esprit.', ['libre', 'littérale', 'technique'], ['Free.', 'حرّة.']],
    ['La ___ adapte au marché.', ['localisation', 'littérale', 'technique'], ['Localization.', 'توطين.']],
  ],
})

const INTERPRET = stage({
  id: 'fr5-trad-interpret',
  emoji: '🗣️',
  title: ['L’interprétation', 'Interpreting', 'الترجمة الفوريّة'],
  setting: ['Karim et Salma comparent huit modes d’interprétation.', 'Karim and Salma compare eight modes of interpreting.', 'يقارن كريم وسلمى ثمانية أنماط من الترجمة الفوريّة.'],
  scene: [
    say('bear', 'Salma distingue huit modes d’interprétation.', 'Salma distinguishes eight modes of interpreting.', 'تميّز سلمى ثمانية أنماط من الترجمة الفوريّة.'),
    say('salma', 'L’interprétation simultanée se fait en cabine.', 'Simultaneous interpreting is done in a booth.', 'الترجمة الفوريّة المتزامنة تتمّ في الكابينة.'),
    say('bear', 'L’interprétation consécutive alterne-t-elle avec l’orateur ?', 'Does consecutive interpreting alternate with the speaker?', 'هل تتناوب الترجمة الفوريّة المتتابعة مع المتحدّث؟'),
    say('salma', 'L’interprétation chuchotée se murmure-t-elle à l’oreille ?', 'Is whispered interpreting murmured in the ear?', 'هل تُهمس الترجمة الهمسيّة في الأذن؟'),
    say('bear', 'La restitution suit-elle la prise de notes ?', 'Does the rendering follow note-taking?', 'هل تتبع الإعادة تدوين الملاحظات؟'),
    say('duck', 'Bravo ! La cabine d’interprétation isole les interprètes.', 'Bravo! The interpreting booth isolates interpreters.', 'أحسنت! كابينة الترجمة الفوريّة تعزل المترجمين.'),
  ],
  phrases: [
    phrase('l’interprétation simultanée', '🎧', ['Simultaneous interpreting', 'الترجمة الفوريّة المتزامنة'], ['Rendered at once, in a soundproof booth.', 'تتمّ فورًا في كابينة معزولة الصوت.'], [
      ['L’interprétation simultanée se fait en cabine.', 'Simultaneous interpreting is done in a booth.', 'الترجمة الفوريّة المتزامنة تتمّ في الكابينة.'],
      ['L’interprétation simultanée exige une grande concentration.', 'Simultaneous interpreting demands great concentration.', 'الترجمة الفوريّة المتزامنة تتطلّب تركيزًا كبيرًا.'],
    ]),
    phrase('l’interprétation consécutive', '🗒️', ['Consecutive interpreting', 'الترجمة الفوريّة المتتابعة'], ['Rendered after the speaker pauses, with notes.', 'تتمّ بعد توقّف المتحدّث مع التدوين.'], [
      ['L’interprétation consécutive alterne avec le discours.', 'Consecutive interpreting alternates with the speech.', 'الترجمة الفوريّة المتتابعة تتناوب مع الخطاب.'],
      ['L’interprétation consécutive utilise la prise de notes.', 'Consecutive interpreting uses note-taking.', 'الترجمة الفوريّة المتتابعة تستعمل تدوين الملاحظات.'],
    ]),
    phrase('l’interprétation de liaison', '🤝', ['Liaison interpreting', 'ترجمة الربط'], ['Short turns between two speakers, often bilateral.', 'جولات قصيرة بين متحدّثَين، غالبًا ثنائيّة.'], [
      ['L’interprétation de liaison rapproche deux interlocuteurs.', 'Liaison interpreting brings two speakers together.', 'ترجمة الربط تقرّب بين متحدّثَين.'],
      ['L’interprétation de liaison facilite les échanges.', 'Liaison interpreting facilitates exchanges.', 'ترجمة الربط تُسهّل التبادلات.'],
    ]),
    phrase('l’interprétation chuchotée', '👂', ['Whispered interpreting', 'الترجمة الهمسيّة'], ['Murmured to one or two listeners, no booth.', 'تُهمس لمستمعٍ أو اثنين دون كابينة.'], [
      ['L’interprétation chuchotée se murmure à l’oreille.', 'Whispered interpreting is murmured in the ear.', 'الترجمة الهمسيّة تُهمس في الأذن.'],
      ['L’interprétation chuchotée sert lors des visites.', 'Whispered interpreting serves during visits.', 'الترجمة الهمسيّة تُفيد أثناء الزيارات.'],
    ]),
    phrase('l’interprétation communautaire', '🏘️', ['Community interpreting', 'الترجمة المجتمعيّة'], ['Public services: health, justice, social work.', 'خدمات عامّة: صحّة وعدالة وعمل اجتماعيّ.'], [
      ['L’interprétation communautaire accompagne les migrants.', 'Community interpreting accompanies migrants.', 'الترجمة المجتمعيّة تُرافق المهاجرين.'],
      ['L’interprétation communautaire rapproche les cultures.', 'Community interpreting brings cultures together.', 'الترجمة المجتمعيّة تقرّب بين الثقافات.'],
    ]),
    phrase('la cabine d’interprétation', '🎛️', ['The interpreting booth', 'كابينة الترجمة الفوريّة'], ['Soundproof workspace for simultaneous teams.', 'مساحة عمل معزولة الصوت للفِرَق المتزامنة.'], [
      ['La cabine d’interprétation isole les interprètes.', 'The interpreting booth isolates interpreters.', 'كابينة الترجمة الفوريّة تعزل المترجمين.'],
      ['La cabine d’interprétation insonorise le bruit.', 'The interpreting booth soundproofs the noise.', 'كابينة الترجمة الفوريّة تعزل الضجيج.'],
    ]),
    phrase('la note', '✍️', ['The note', 'الملاحظة'], ['Symbolic shorthand used in consecutive mode.', 'تدوين رمزيّ يُستعمل في النمط المتتابع.'], [
      ['La note condense l’idée en symboles.', 'The note condenses the idea in symbols.', 'الملاحظة تُكثّف الفكرة في رموز.'],
      ['La note guide la restitution orale.', 'The note guides the oral rendering.', 'الملاحظة تهدي الإعادة الشفهيّة.'],
    ]),
    phrase('la restitution', '🔊', ['The rendering', 'الإعادة'], ['Oral delivery of the interpreted speech.', 'الأداء الشفهيّ للخطاب المترجم.'], [
      ['La restitution reproduit fidèlement le propos.', 'The rendering faithfully reproduces the speech.', 'الإعادة تُعيد إنتاج الخطاب بأمانة.'],
      ['La restitution suit la prise de notes.', 'The rendering follows note-taking.', 'الإعادة تتبع تدوين الملاحظات.'],
    ]),
  ],
  talk: {
    setting: ['Salma parle à Nour de l’interprétation.', 'Salma talks to Nour about interpreting.', 'تتحدّث سلمى مع نور عن الترجمة الفوريّة.'],
    lines: [
      say('salma', 'Nour, la cabine d’interprétation isole-t-elle les interprètes ?', 'Nour, does the interpreting booth isolate interpreters?', 'نور، هل تعزل كابينة الترجمة الفوريّة المترجمين؟'),
      say('nour', 'Oui ! Et la restitution suit la prise de notes, Salma.', 'Yes! And the rendering follows note-taking, Salma.', 'نعم! وتتبع الإعادة تدوين الملاحظات يا سلمى.'),
    ],
  },
  grammar: {
    examples: ['L’interprétation [simultanée] se fait en cabine. (adjective, feminine singular)', 'L’interprétation [consécutive] alterne avec l’orateur. (adjective, feminine singular)', 'L’interprétation [chuchotée] se murmure. (past participle as adjective, feminine singular)'],
    question: ['Simultaneous interpreting is done in a booth: « L’interprétation ___ se fait en cabine. »', 'الترجمة الفوريّة المتزامنة تتمّ في الكابينة: « L’interprétation ___ se fait en cabine. »'],
    options: [['simultanée', 'simultanée'], ['consécutive', 'consécutive'], ['chuchotée', 'chuchotée']],
    correct: 0,
    explanation: [
      'Les modes d’interprétation : eight modes, each with a distinct setting. L’interprétation simultanée is rendered at once in a soundproof booth, while the speaker talks. L’interprétation consécutive is rendered after the speaker pauses, supported by note-taking. L’interprétation de liaison handles short turns between two speakers, often in bilateral meetings. L’interprétation chuchotée is murmured in the ear of one or two listeners, with no booth. L’interprétation communautaire serves public services such as health, justice and social work. La cabine d’interprétation is the soundproof workspace of simultaneous teams. La note condenses the idea in symbols to guide the oral rendering. La restitution is the oral delivery of the interpreted speech. The interrogative with subject-verb inversion often inserts an euphonic -t- between two vowels: « alterne-t-elle », « murmure-t-elle », « suit-elle ». Agreement: each mode takes a feminine singular adjective agreeing with « l’interprétation » (simultanée, consécutive, chuchotée).',
      'أنماط الترجمة الفوريّة: ثمانية أنماط، لكلٍّ سياقه. l’interprétation simultanée تتمّ فورًا في كابينة معزولة الصوت أثناء حديث المتحدّث. وl’interprétation consécutive تتمّ بعد توقّف المتحدّث مدعومةً بالتدوين. وl’interprétation de liaison تعالج جولات قصيرة بين متحدّثَين في اجتماعات ثنائيّة غالبًا. وl’interprétation chuchotée تُهمس في أذن مستمعٍ أو اثنين دون كابينة. وl’interprétation communautaire تخدم المرافق العامّة كالصحّة والعدالة والعمل الاجتماعيّ. وla cabine d’interprétation هي مساحة العمل المعزولة الصوت للفِرَق المتزامنة. وla note تُكثّف الفكرة في رموز لتهدي الإعادة الشفهيّة. وla restitution هي الأداء الشفهيّ للخطاب المترجم. والاستفهام بعكس الفاعل والفعل يُدخل أحيانًا -t- ملائمة بين حرفَين متحرّكَين: «alterne-t-elle» و«murmure-t-elle» و«suit-elle». والمطابقة: كلّ نمط يأخذ صفة مؤنّثة مفردة تُطابق «l’interprétation» (simultanée، consécutive، chuchotée).',
    ],
  },
  transfer: {
    setting: ['Adam applique les modes d’interprétation.', 'Adam applies the modes of interpreting.', 'يطبّق آدم أنماط الترجمة الفوريّة.'],
    lines: [
      say('karim', 'La cabine d’interprétation isole les interprètes !', 'The interpreting booth isolates interpreters!', 'كابينة الترجمة الفوريّة تعزل المترجمين!'),
      say('rana', 'Parfait ! Et la restitution suit la note, Adam.', 'Perfect! And the rendering follows the note, Adam.', 'ممتاز! وتتبع الإعادة الملاحظة يا آدم.'),
    ],
  },
  write: {
    prompt: ['Say "the booth isolates the interpreters".', 'قل «الكابينة تعزل المترجمين الفوريين».'],
    mustInclude: ['cabine'],
    model: 'La cabine d’interprétation isole les interprètes.',
    frame: 'La ___ d’interprétation isole les interprètes.',
  },
  drills: [
    ['L’interprétation ___ se fait en cabine.', ['simultanée', 'consécutive', 'chuchotée'], ['Simultaneous.', 'متزامنة.']],
    ['L’interprétation ___ alterne avec l’orateur.', ['consécutive', 'simultanée', 'communautaire'], ['Consecutive.', 'متتابعة.']],
    ['La ___ d’interprétation isole les interprètes.', ['cabine', 'note', 'restitution'], ['Booth.', 'كابينة.']],
  ],
})

const ENJEUX = stage({
  id: 'fr5-trad-enjeux',
  emoji: '🎯',
  title: ['Les enjeux de la traduction', 'The stakes of translation', 'قضايا الترجمة'],
  setting: ['Karim et Salma comparent huit procédés du traduire.', 'Karim and Salma compare eight translation procedures.', 'يقارن كريم وسلمى ثمانية إجراءات للترجمة.'],
  scene: [
    say('bear', 'Salma énumère huit procédés du traduire.', 'Salma lists eight translation procedures.', 'تُعدّد سلمى ثمانية إجراءات للترجمة.'),
    say('salma', 'L’équivalence cherche un sens parallèle.', 'Equivalence seeks a parallel meaning.', 'المقابلة تبحث عن معنى موازٍ.'),
    say('bear', 'La transposition change-t-elle de catégorie ?', 'Does transposition change category?', 'هل يُغيّر التبديل الفئة؟'),
    say('salma', 'La modulation ajuste-t-elle le point de vue ?', 'Does modulation adjust the viewpoint?', 'هل يُعدّل التحوير وجهة النظر؟'),
    say('bear', 'La compensation rétablit-elle un effet perdu ?', 'Does compensation restore a lost effect?', 'هل يستعيد التعويض أثرًا مفقودًا؟'),
    say('duck', 'Bravo ! La fidélité respecte l’intention de l’auteur.', 'Bravo! Fidelity respects the author’s intention.', 'أحسنت! الوفاء يحترم قصد الكاتب.'),
  ],
  phrases: [
    phrase('l’équivalence', '⚖️', ['Equivalence', 'المقابلة'], ['Same sense through different words.', 'نفس المعنى بكلمات مختلفة.'], [
      ['L’équivalence cherche un sens parallèle.', 'Equivalence seeks a parallel meaning.', 'المقابلة تبحث عن معنى موازٍ.'],
      ['L’équivalence évite le calque mot à mot.', 'Equivalence avoids word-for-word calque.', 'المقابلة تجتنب الكلك كلمة بكلمة.'],
    ]),
    phrase('la fidélité', '🤍', ['Fidelity', 'الوفاء'], ['Loyalty to sense and intent.', 'إخلاص للمعنى والقصد.'], [
      ['La fidélité respecte l’intention de l’auteur.', 'Fidelity respects the author’s intention.', 'الوفاء يحترم قصد الكاتب.'],
      ['La fidélité n’exclut pas la liberté.', 'Fidelity does not exclude freedom.', 'الوفاء لا يستبعد الحرّية.'],
    ]),
    phrase('la trahison', '🗡️', ['Betrayal', 'الخيانة'], ['« Traduttore traditore », every choice distorts.', '«المترجم خائن»، كلّ اختيار يشوّه.'], [
      ['La trahison trahit par maladresse.', 'Betrayal betrays through clumsiness.', 'الخيانة تخون بسبب سوء التصرّف.'],
      ['La trahison rappelle le dicton italien.', 'Betrayal recalls the Italian saying.', 'الخيانة تُذكّر بالمثل الإيطاليّ.'],
    ]),
    phrase('la transposition', '🔁', ['Transposition', 'التبديل'], ['Shift grammatical category without changing sense.', 'تبديل الفئة النحويّة دون تغيير المعنى.'], [
      ['La transposition change de catégorie grammaticale.', 'Transposition changes grammatical category.', 'التبديل يُغيّر الفئة النحويّة.'],
      ['La transposition transforme un nom en verbe.', 'Transposition transforms a noun into a verb.', 'التبديل يحوّل اسمًا إلى فعل.'],
    ]),
    phrase('la modulation', '🎨', ['Modulation', 'التحوير'], ['Shift viewpoint, often a figurative turn.', 'تبديل وجهة النظر، غالبًا بمعنى مجازيّ.'], [
      ['La modulation ajuste le point de vue.', 'Modulation adjusts the viewpoint.', 'التحوير يُعدّل وجهة النظر.'],
      ['La modulation révèle un éclairage nouveau.', 'Modulation reveals a new lighting.', 'التحوير يكشف إضاءة جديدة.'],
    ]),
    phrase('l’adaptation', '🧩', ['Adaptation', 'التكييف'], ['Rewrite a cultural reference for the target.', 'إعادة كتابة مرجع ثقافيّ للمقصد.'], [
      ['L’adaptation réécrit pour la culture cible.', 'Adaptation rewrites for the target culture.', 'التكييف يعيد الكتابة للثقافة المقصودة.'],
      ['L’adaptation transpose le contexte.', 'Adaptation transposes the context.', 'التكييف ينقل السياق.'],
    ]),
    phrase('l’explicitation', '💡', ['Explicitation', 'التوضيح'], ['Make implicit content clear for the reader.', 'إظهار ما هو ضمنيّ للقارئ.'], [
      ['L’explicitation dévoile ce qui est implicite.', 'Explicitation unveils what is implicit.', 'التوضيح يكشف ما هو ضمنيّ.'],
      ['L’explicitation éclaire le lecteur cible.', 'Explicitation enlightens the target reader.', 'التوضيح يُنير القارئ المقصود.'],
    ]),
    phrase('la compensation', '🪞', ['Compensation', 'التعويض'], ['Restore elsewhere an effect lost in translation.', 'استعادة في موضع آخر أثرٍ ضاع في النقل.'], [
      ['La compensation rétablit un effet perdu.', 'Compensation restores a lost effect.', 'التعويض يستعيد أثرًا مفقودًا.'],
      ['La compensation déplace la nuance ailleurs.', 'Compensation shifts the nuance elsewhere.', 'التعويض ينقل الفروق إلى مكان آخر.'],
    ]),
  ],
  talk: {
    setting: ['Salma parle à Nour des enjeux de la traduction.', 'Salma talks to Nour about the stakes of translation.', 'تتحدّث سلمى مع نور عن قضايا الترجمة.'],
    lines: [
      say('salma', 'Nour, l’équivalence évite-t-elle le calque mot à mot ?', 'Nour, does equivalence avoid word-for-word calque?', 'نور، هل تجتنب المقابلة الكلك كلمة بكلمة؟'),
      say('nour', 'Oui ! Et la fidélité respecte l’auteur, Salma.', 'Yes! And fidelity respects the author, Salma.', 'نعم! والوفاء يحترم الكاتب يا سلمى.'),
    ],
  },
  grammar: {
    examples: ['La [fidélité] respecte l’auteur. (noun, feminine)', 'La [trahison] trahit par maladresse. (noun, feminine)', 'La [compensation] rétablit un effet. (noun, feminine)'],
    question: ['Fidelity respects the author: « La ___ respecte l’auteur. »', 'الوفاء يحترم الكاتب: « La ___ respecte l’auteur. »'],
    options: [['fidélité', 'fidélité'], ['trahison', 'trahison'], ['compensation', 'compensation']],
    correct: 0,
    explanation: [
      'Les enjeux de la traduction : eight procedures of the translator, balancing fidelity and freedom. L’équivalence seeks the same sense through different words, avoiding word-for-word calque. La fidélité respects the author’s intention, yet never excludes liberty of tone. La trahison betrays, often by clumsiness, and recalls the Italian saying « Traduttore traditore » (translator, traitor). La transposition shifts grammatical category without changing sense, turning a noun into a verb for instance. La modulation adjusts the viewpoint, often with a figurative turn that reveals new lighting. L’adaptation rewrites a cultural reference for the target reader and transposes the context. L’explicitation unveils what is implicit and enlightens the target reader. La compensation restores elsewhere an effect lost in translation, shifting the nuance to a nearby sentence. The feminine noun pattern is regular: la fidélité, la trahison, la transposition, la modulation, la compensation all take « la » and a feminine adjective (la fidélité rigoureuse). L’équivalence, l’adaptation, l’explicitation take « l’ » before a vowel, still feminine.',
      'قضايا الترجمة: ثمانية إجراءات للمترجم، تُوازن بين الوفاء والحرّية. l’équivalence تبحث عن نفس المعنى بكلمات مختلفة وتجتنب الكلك كلمة بكلمة. وla fidélité تحترم قصد الكاتب ولا تستبعد حرّية النبرة أبدًا. وla trahison تخون غالبًا بسوء التصرّف وتُذكّر بالمثل الإيطاليّ «المترجم خائن». وla transposition تبدّل الفئة النحويّة دون تغيير المعنى، فتحوّل مثلًا اسمًا إلى فعل. وla modulation تُعدّل وجهة النظر، غالبًا بمعنى مجازيّ يكشف إضاءة جديدة. وl’adaptation تعيد كتابة مرجع ثقافيّ للقارئ المقصود وتنقل السياق. وl’explicitation تكشف ما هو ضمنيّ وتُنير القارئ المقصود. وla compensation تستعيد في موضع آخر أثرًا ضاع في النقل فتنقل الفروق إلى جملة قريبة. والنمط المؤنّث منتظم: la fidélité، la trahison، la transposition، la modulation، la compensation كلّها تأخذ «la» وصفة مؤنّثة (la fidélité rigoureuse). وl’équivalence، l’adaptation، l’explicitation تأخذ «l’» قبل حرف متحرّك، وتبقى مؤنّثة.',
    ],
  },
  transfer: {
    setting: ['Adam applique les procédés du traduire.', 'Adam applies the translation procedures.', 'يطبّق آدم إجراءات الترجمة.'],
    lines: [
      say('karim', 'L’équivalence évite le calque mot à mot !', 'Equivalence avoids word-for-word calque!', 'المقابلة تجتنب الكلك كلمة بكلمة!'),
      say('rana', 'Parfait ! Et la fidélité respecte l’auteur, Adam.', 'Perfect! And fidelity respects the author, Adam.', 'ممتاز! والوفاء يحترم الكاتب يا آدم.'),
    ],
  },
  write: {
    prompt: ['Say "equivalence avoids word-for-word calque".', 'قل «المقابلة تجتنب الكلك كلمة بكلمة».'],
    mustInclude: ['équivalence'],
    model: 'L’équivalence évite le calque mot à mot.',
    frame: 'L’___ évite le calque mot à mot.',
  },
  drills: [
    ['La ___ respecte l’auteur.', ['fidélité', 'trahison', 'compensation'], ['Fidelity.', 'وفاء.']],
    ['La ___ change de catégorie grammaticale.', ['transposition', 'fidélité', 'équivalence'], ['Transposition.', 'تبديل.']],
    ['L’___ cherche un sens parallèle.', ['équivalence', 'fidélité', 'trahison'], ['Equivalence.', 'مقابلة.']],
  ],
})

export const FR_TRADUCTION_INTERPRETATION = [TYPES, INTERPRET, ENJEUX]
