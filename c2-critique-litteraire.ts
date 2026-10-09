// ============================================================================
// French course · «La critique littéraire» (C2) — three stages: les approches
// critiques (thématique, structuraliste, sociologique, psychanalytique,
// génétique, textuelle, comparée, impressionniste) → les concepts critiques
// (intertextualité, lecture, interprétation, herméneutique, déconstruction,
// réception, signifiance, littérarité) → les grands critiques (Sainte-Beuve,
// Taine, Lanson, Thibaudet, Maurras, Richard, Barthes, Genette). Grammar met
// on the way: qualifying adjective agreement on critical labels, possessive
// and demonstrative pronouns in theoretical discourse, and proper nouns as
// subjects in critical biography.
// ============================================================================

import { phrase, say, stage } from './kit'

const APPROCHES = stage({
  id: 'fr4-cl-approches',
  emoji: '🔬',
  title: ['Les approches critiques', 'Critical approaches', 'المناهج النقديّة'],
  setting: ['Salma explique les approches critiques à Nour.', 'Salma explains the critical approaches to Nour.', 'تشرح سلمى المناهج النقديّة لنور.'],
  scene: [
    say('bear', 'Salma étudie les approches critiques.', 'Salma studies the critical approaches.', 'سلمى تدرس المناهج النقديّة.'),
    say('salma', 'La critique thématique explore l’imaginaire de l’auteur.', 'Thematic criticism explores the author’s imaginary.', 'النقد الموضوعيّ يستكشف خيال الكاتب.'),
    say('bear', 'La critique structuraliste analyse les structures du texte ?', 'Structuralist criticism analyzes the structures of the text?', 'النقد البنيويّ يحلّل بنى النصّ؟'),
    say('salma', 'La critique sociologique relie l’œuvre au contexte.', 'Sociological criticism links the work to its context.', 'النقد الاجتماعيّ يربط العمل بالسياق.'),
    say('bear', 'Et la critique psychanalytique interroge l’inconscient ?', 'And psychoanalytic criticism questions the unconscious?', 'والنقد التحليليّ النفسيّ يستجوب اللاوعي؟'),
    say('duck', 'Bravo ! La critique génétique observe les brouillons.', 'Bravo! Genetic criticism observes the drafts.', 'أحسنت! النقد التكوينيّ يرصد المسوّدات.'),
  ],
  phrases: [
    phrase('la critique thématique', '🎯', ['Thematic criticism', 'النقد الموضوعيّ'], ['Studies recurring themes and imagery.', 'يدرس المواضيع والصور المتكرّرة.'], [
      ['La critique thématique étudie les thèmes récurrents.', 'Thematic criticism studies the recurring themes.', 'النقد الموضوعيّ يدرس المواضيع المتكرّرة.'],
      ['La critique thématique explore l’imaginaire de l’auteur.', 'Thematic criticism explores the author’s imaginary.', 'النقد الموضوعيّ يستكشف خيال الكاتب.'],
    ]),
    phrase('la critique structuraliste', '🏗️', ['Structuralist criticism', 'النقد البنيويّ'], ['Decodes the structures of the text.', 'يفكّك بنى النصّ.'], [
      ['La critique structuraliste analyse les structures du texte.', 'Structuralist criticism analyzes the structures of the text.', 'النقد البنيويّ يحلّل بنى النصّ.'],
      ['La critique structuraliste démonte les codes narratifs.', 'Structuralist criticism dismantles the narrative codes.', 'النقد البنيويّ يفكّك الرموز السرديّة.'],
    ]),
    phrase('la critique sociologique', '🏛️', ['Sociological criticism', 'النقد الاجتماعيّ'], ['Links text to its social context.', 'يربط النصّ بسياقه الاجتماعيّ.'], [
      ['La critique sociologique relie l’œuvre au contexte.', 'Sociological criticism links the work to its context.', 'النقد الاجتماعيّ يربط العمل بالسياق.'],
      ['La critique sociologique situe l’écrivain dans son siècle.', 'Sociological criticism situates the writer in his century.', 'النقد الاجتماعيّ يضع الكاتب في عصره.'],
    ]),
    phrase('la critique psychanalytique', '🛋️', ['Psychoanalytic criticism', 'النقد التحليليّ النفسيّ'], ['Questions the unconscious of the text.', 'يستجوب لاوعي النصّ.'], [
      ['La critique psychanalytique interroge l’inconscient du texte.', 'Psychoanalytic criticism questions the unconscious of the text.', 'النقد التحليليّ النفسيّ يستجوب لاوعي النصّ.'],
      ['La critique psychanalytique déchiffre les symboles refoulés.', 'Psychoanalytic criticism deciphers the repressed symbols.', 'النقد التحليليّ النفسيّ يفسّر الرموز المكبوتة.'],
    ]),
    phrase('la critique génétique', '📜', ['Genetic criticism', 'النقد التكوينيّ'], ['Follows the manuscript genesis.', 'يتتبّع نشأة المخطوط.'], [
      ['La critique génétique suit les manuscrits.', 'Genetic criticism follows the manuscripts.', 'النقد التكوينيّ يتتبّع المخطوطات.'],
      ['La critique génétique observe les avant-textes.', 'Genetic criticism observes the avant-textes.', 'النقد التكوينيّ يرصد ما قبل النصّ.'],
    ]),
    phrase('la critique textuelle', '🔤', ['Textual criticism', 'النقد النصّيّ'], ['Examines the letter of the work.', 'يفحص حرف العمل.'], [
      ['La critique textuelle examine la lettre de l’œuvre.', 'Textual criticism examines the letter of the work.', 'النقد النصّيّ يفحص حرف العمل.'],
      ['La critique textuelle scrute chaque mot de près.', 'Textual scrutiny scrutinizes every word closely.', 'النقد النصّيّ يتدقّق كلّ لفظ عن كثب.'],
    ]),
    phrase('la critique comparée', '🌍', ['Comparative criticism', 'النقد المقارن'], ['Confronts several literatures.', 'يقارن عدّة آداب.'], [
      ['La critique comparée confronte plusieurs littératures.', 'Comparative criticism confronts several literatures.', 'النقد المقارن يقارن عدّة آداب.'],
      ['La critique comparée rapproche les œuvres lointaines.', 'Comparative criticism brings distant works closer.', 'النقد المقارن يقرّب الأعمال البعيدة.'],
    ]),
    phrase('la critique impressionniste', '🎨', ['Impressionist criticism', 'النقد الانطباعيّ'], ['Captures a sensation of reading.', 'يلتقط انطباع القراءة.'], [
      ['La critique impressionniste capte une sensation de lecture.', 'Impressionist criticism captures a sensation of reading.', 'النقد الانطباعيّ يلتقط انطباع القراءة.'],
      ['La critique impressionniste peint l’effet ressenti.', 'Impressionist criticism paints the felt effect.', 'النقد الانطباعيّ يصوّر الأثر المحسوس.'],
    ]),
  ],
  talk: {
    setting: ['Salma parle à Nour des approches critiques.', 'Salma talks to Nour about the critical approaches.', 'تتحدّث سلمى مع نور عن المناهج النقديّة.'],
    lines: [
      say('salma', 'Nour, la critique thématique explore l’imaginaire de l’auteur ?', 'Nour, does thematic criticism explore the author’s imaginary?', 'نور، هل النقد الموضوعيّ يستكشف خيال الكاتب؟'),
      say('nour', 'Oui ! Et la critique structuraliste analyse les structures.', 'Yes! And structuralist criticism analyzes the structures.', 'نعم! والنقد البنيويّ يحلّل البنى.'),
    ],
  },
  grammar: {
    examples: ['La critique [thématique] explore l’imaginaire. (f qualifying adjective)', 'La critique [structuraliste] analyse les structures. (f qualifying adjective)', 'La critique [sociologique] relie l’œuvre au contexte. (f qualifying adjective)'],
    question: ['Thematic criticism explores the imaginary: « La critique ___ explore l’imaginaire. »', 'النقد الموضوعيّ يستكشف الخيال: « La critique ___ explore l’imaginaire. »'],
    options: [['thématique', 'thématique'], ['structuraliste', 'structuraliste'], ['sociologique', 'sociologique']],
    correct: 0,
    explanation: [
      'Each critical approach is named by a feminine qualifying adjective agreeing with «la critique»: thématique, structuraliste, sociologique, psychanalytique, génétique, textuelle, comparée, impressionniste. The adjective specifies the method, and agreement is feminine singular because «la critique» is feminine. Note that «textuel» becomes «textuelle» and «comparé» becomes «comparée» before the feminine noun.',
      'كلّ منهج نقديّ يُسمّى بصفة تابعة مؤنّثة تطابق «la critique»: thématique، structuraliste، sociologique، psychanalytique، génétique، textuelle، comparée، impressionniste. والصفة تُعيّن المنهج، والتطابق مؤنّث مفرد لأنّ «la critique» مؤنّثة. ولاحظ أنّ «textuel» تصير «textuelle» و«comparé» تصير «comparée» أمام الاسم المؤنّث.',
    ],
  },
  transfer: {
    setting: ['Karim applique les approches critiques.', 'Karim applies the critical approaches.', 'يطبّق كريم المناهج النقديّة.'],
    lines: [
      say('karim', 'La critique sociologique relie l’œuvre au contexte !', 'Sociological criticism links the work to its context!', 'النقد الاجتماعيّ يربط العمل بالسياق!'),
      say('rana', 'Parfait ! Et la critique psychanalytique interroge l’inconscient, Karim.', 'Perfect! And psychoanalytic criticism questions the unconscious, Karim.', 'ممتاز! والنقد التحليليّ النفسيّ يستجوب اللاوعي يا كريم.'),
    ],
  },
  write: {
    prompt: ['Say "thematic criticism explores the imaginary".', 'قل «النقد الموضوعيّ يستكشف الخيال».'],
    mustInclude: ['thématique'],
    model: 'La critique thématique explore l’imaginaire de l’auteur.',
    frame: 'La critique ___ explore l’imaginaire de l’auteur.',
  },
  drills: [
    ['La critique ___ explore l’imaginaire de l’auteur.', ['thématique', 'structuraliste', 'sociologique'], ['Thematic (f).', 'موضوعيّة (مؤنّث).']],
    ['La critique ___ analyse les structures du texte.', ['structuraliste', 'thématique', 'sociologique'], ['Structuralist (f).', 'بنيويّة (مؤنّث).']],
    ['La critique ___ relie l’œuvre au contexte.', ['sociologique', 'thématique', 'structuraliste'], ['Sociological (f).', 'اجتماعيّة (مؤنّث).']],
  ],
})

const CONCEPTS = stage({
  id: 'fr4-cl-concepts',
  emoji: '🧩',
  title: ['Les concepts critiques', 'Critical concepts', 'المفاهيم النقديّة'],
  setting: ['Salma explique les concepts critiques à Nour.', 'Salma explains the critical concepts to Nour.', 'تشرح سلمى المفاهيم النقديّة لنور.'],
  scene: [
    say('bear', 'Salma étudie les concepts critiques.', 'Salma studies the critical concepts.', 'سلمى تدرس المفاهيم النقديّة.'),
    say('salma', 'L’intertextualité littéraire tisse un réseau de textes.', 'Literary intertextuality weaves a network of texts.', 'التناصّ الأدبيّ ينسج شبكة من النصوص.'),
    say('bear', 'L’herméneutique de Gadamer éclaire le sens ?', 'Gadamer’s hermeneutics illuminates meaning?', 'التأويل الجاداميري يضيء المعنى؟'),
    say('salma', 'La déconstruction derridienne défait les oppositions.', 'Derridean deconstruction undoes the oppositions.', 'التفكيك الديريديّ يحلّ التناقضات.'),
    say('bear', 'Et la théorie de la réception étudie le lecteur ?', 'And reception theory studies the reader?', 'ونظريّة التلقّي تدرس القارئ؟'),
    say('duck', 'Bravo ! La signifiance textuelle ouvre le sens.', 'Bravo! Textual significance opens the meaning.', 'أحسنت! الدلاليّة النصّيّة تفتح المعنى.'),
  ],
  phrases: [
    phrase('l’intertextualité littéraire', '🕸️', ['Literary intertextuality', 'التناصّ الأدبيّ'], ['Network of texts echoing each other.', 'شبكة من النصوص المتداولة.'], [
      ['L’intertextualité littéraire tisse un réseau de textes.', 'Literary intertextuality weaves a network of texts.', 'التناصّ الأدبيّ ينسج شبكة من النصوص.'],
      ['L’intertextualité littéraire dialogue avec les œuvres antérieures.', 'Literary intertextuality dialogues with earlier works.', 'التناصّ الأدبيّ يحاور الأعمال السابقة.'],
    ]),
    phrase('la lecture critique', '📖', ['Critical reading', 'القراءة النقديّة'], ['Active interrogation of the text.', 'استجواب فعّال للنصّ.'], [
      ['La lecture critique dévoile plusieurs sens.', 'Critical reading unveils several meanings.', 'القراءة النقديّة تكشف معانٍ عدّة.'],
      ['La lecture critique interroge les choix de l’auteur.', 'Critical reading questions the author’s choices.', 'القراءة النقديّة تستجوب خيارات الكاتب.'],
    ]),
    phrase('l’interprétation herméneutique', '🗝️', ['Hermeneutic interpretation', 'التأويل الهرمينوطيقيّ'], ['Illuminates the hidden meaning.', 'يضيء المعنى الخفيّ.'], [
      ['L’interprétation herméneutique éclaire le sens caché.', 'Hermeneutic interpretation illuminates the hidden meaning.', 'التأويل الهرمينوطيقيّ يضيء المعنى الخفيّ.'],
      ['L’interprétation herméneutique confronte les horizons.', 'Hermeneutic interpretation confronts the horizons.', 'التأويل الهرمينوطيقيّ يقارن الآفاق.'],
    ]),
    phrase('l’herméneutique de Gadamer', '🕯️', ["Gadamer’s hermeneutics", 'تأويل جادامير'], ['Hermeneutics of dialogue and horizons.', 'تأويل الحوار والآفاق.'], [
      ['L’herméneutique de Gadamer conjugue passé et présent.', 'Gadamer’s hermeneutics combines past and present.', 'تأويل جادامير يزاوج بين الماضي والحاضر.'],
      ['L’herméneutique de Gadamer privilégie le dialogue.', 'Gadamer’s hermeneutics privileges dialogue.', 'تأويل جادامير يفضّل الحوار.'],
    ]),
    phrase('la déconstruction derridienne', '🌀', ['Derridean deconstruction', 'التفكيك الديريديّ'], ['Undoes binary oppositions.', 'يحلّ المعارضات الثنائيّة.'], [
      ['La déconstruction derridienne défait les oppositions.', 'Derridean deconstruction undoes the oppositions.', 'التفكيك الديريديّ يحلّ المعارضات.'],
      ['La déconstruction derridienne interroge la métaphysique.', 'Derridean deconstruction questions metaphysics.', 'التفكيك الديريديّ يستجوب الميتافيزيقا.'],
    ]),
    phrase('la théorie de la réception', '👥', ['Reception theory', 'نظريّة التلقّي'], ['Studies the reader and the public.', 'تدرس القارئ والجمهور.'], [
      ['La théorie de la réception étudie le lecteur.', 'Reception theory studies the reader.', 'نظريّة التلقّي تدرس القارئ.'],
      ['La théorie de la réception privilégie le public.', 'Reception theory privileges the public.', 'نظريّة التلقّي تفضّل الجمهور.'],
    ]),
    phrase('la signifiance textuelle', '🌊', ['Textual significance', 'الدلاليّة النصّيّة'], ['Opens meaning beyond the sign.', 'يفتح المعنى وراء الدالّ.'], [
      ['La signifiance textuelle ouvre le sens.', 'Textual significance opens the meaning.', 'الدلاليّة النصّيّة تفتح المعنى.'],
      ['La signifiance textuelle déborde le signe.', 'Textual significance overflows the sign.', 'الدلاليّة النصّيّة تتجاوز الدالّ.'],
    ]),
    phrase('la littérarité jakobsonienne', '✨', ['Jakobsonian literariness', 'الأدبيّة الجاكبسونيّة'], ['Defines what makes a text literary.', 'تُعرّف ما يجعل النصّ أدبيًّا.'], [
      ['La littérarité jakobsonienne définit le littéraire.', 'Jakobsonian literariness defines the literary.', 'الأدبيّة الجاكبسونيّة تُعرّف الأدبيّ.'],
      ['La littérarité jakobsonienne isole la fonction poétique.', 'Jakobsonian literariness isolates the poetic function.', 'الأدبيّة الجاكبسونيّة تعزل الوظيفة الشعريّة.'],
    ]),
  ],
  talk: {
    setting: ['Salma parle à Nour des concepts critiques.', 'Salma talks to Nour about the critical concepts.', 'تتحدّث سلمى مع نور عن المفاهيم النقديّة.'],
    lines: [
      say('salma', 'Nour, l’intertextualité littéraire tisse un réseau de textes ?', 'Nour, does literary intertextuality weave a network of texts?', 'نور، هل التناصّ الأدبيّ ينسج شبكة من النصوص؟'),
      say('nour', 'Oui ! Et la théorie de la réception étudie le lecteur.', 'Yes! And reception theory studies the reader.', 'نعم! ونظريّة التلقّي تدرس القارئ.'),
    ],
  },
  grammar: {
    examples: ['L’intertextualité [littéraire] tisse un réseau. (f qualifying adjective)', 'La déconstruction [derridienne] défait les oppositions. (f adjective of school)', 'La signifiance [textuelle] ouvre le sens. (f adjective from noun)'],
    question: ['Literary intertextuality weaves a network: « L’intertextualité ___ tisse un réseau. »', 'التناصّ الأدبيّ ينسج شبكة: « L’intertextualité ___ tisse un réseau. »'],
    options: [['littéraire', 'littéraire'], ['derridienne', 'derridienne'], ['textuelle', 'textuelle']],
    correct: 0,
    explanation: [
      'Critical concepts often pair a feminine noun with a feminine adjective that names a school or a quality: l’intertextualité littéraire, la déconstruction derridienne (from Derrida), la signifiance textuelle (from le texte → textuel → textuelle), la théorie de la réception (complement noun), la littérarité jakobsonienne (from Jakobson). Possessive phrases like «l’herméneutique de Gadamer» attribute the concept to its theorist without an adjective.',
      'ترتبط المفاهيم النقديّة غالبًا باسم مؤنّث وصفة مؤنّثة تُسمّي المدرسة أو الصفة: l’intertextualité littéraire، la déconstruction derridienne (من ديريدا)، la signifiance textuelle (من le texte ← textuel ← textuelle)، la théorie de la réception (اسم مضاف)، la littérarité jakobsonienne (من جاكبسون). والعبارات الإضافيّة مثل «l’herméneutique de Gadamer» تنسب المفهوم إلى صاحبه دون صفة.',
    ],
  },
  transfer: {
    setting: ['Karim applique les concepts critiques.', 'Karim applies the critical concepts.', 'يطبّق كريم المفاهيم النقديّة.'],
    lines: [
      say('karim', 'La déconstruction derridienne défait les oppositions !', 'Derridean deconstruction undoes the oppositions!', 'التفكيك الديريديّ يحلّ المعارضات!'),
      say('rana', 'Parfait ! Et la signifiance textuelle ouvre le sens, Karim.', 'Perfect! And textual significance opens the meaning, Karim.', 'ممتاز! والدلاليّة النصّيّة تفتح المعنى يا كريم.'),
    ],
  },
  write: {
    prompt: ['Say "literary intertextuality weaves a network of texts".', 'قل «التناصّ الأدبيّ ينسج شبكة من النصوص».'],
    mustInclude: ['intertextualité'],
    model: 'L’intertextualité littéraire tisse un réseau de textes.',
    frame: 'L’intertextualité ___ tisse un réseau de textes.',
  },
  drills: [
    ['L’intertextualité ___ tisse un réseau de textes.', ['littéraire', 'derridienne', 'textuelle'], ['Literary (f).', 'أدبيّة (مؤنّث).']],
    ['La déconstruction ___ défait les oppositions.', ['derridienne', 'littéraire', 'textuelle'], ['Derridean (f).', 'ديريديانيّة (مؤنّث).']],
    ['La signifiance ___ ouvre le sens.', ['textuelle', 'littéraire', 'derridienne'], ['Textual (f).', 'نصّيّة (مؤنّث).']],
  ],
})

const CRITIQUES = stage({
  id: 'fr4-cl-critiques',
  emoji: '🪶',
  title: ['Les grands critiques', 'The great critics', 'كبار النقّاد'],
  setting: ['Salma présente les grands critiques à Nour.', 'Salma presents the great critics to Nour.', 'تقدّم سلمى كبار النقّاد لنور.'],
  scene: [
    say('bear', 'Salma présente les grands critiques.', 'Salma presents the great critics.', 'سلمى تقدّم كبار النقّاد.'),
    say('salma', 'Sainte-Beuve classe les écrivains par biographie.', 'Sainte-Beuve classifies writers by biography.', 'سانت-بوف يصنّف الكتّاب بالسيرة.'),
    say('bear', 'Hippolyte Taine applique la race, le milieu, le moment ?', 'Hippolyte Taine applies race, milieu, moment?', 'إيبوليت تين يطبّق العرق والوسط واللحظة؟'),
    say('salma', 'Gustave Lanson fonde la critique d’Université.', 'Gustave Lanson founds university criticism.', 'غوستاف لانسون يؤسّس نقد الجامعة.'),
    say('bear', 'Et Roland Barthes déclare la mort de l’auteur ?', 'And Roland Barthes declares the death of the author?', 'ورولان بارت يعلن موت المؤلّف؟'),
    say('duck', 'Bravo ! Gérard Genette théorise la narratologie.', 'Bravo! Gérard Genette theorizes narratology.', 'أحسنت! جيرار جينيت يضع نظريّة السرد.'),
  ],
  phrases: [
    phrase('Sainte-Beuve', '🖼️', ['Sainte-Beuve', 'سانت-بوف'], ['19th-century biographical critic.', 'ناقد سيريّ في القرن التاسع عشر.'], [
      ['Sainte-Beuve classe les écrivains par biographie.', 'Sainte-Beuve classifies writers by biography.', 'سانت-بوف يصنّف الكتّاب بالسيرة.'],
      ['Sainte-Beuve relie l’œuvre à la vie de l’auteur.', 'Sainte-Beuve links the work to the author’s life.', 'سانت-بوف يربط العمل بحياة الكاتب.'],
    ]),
    phrase('Hippolyte Taine', '🧬', ['Hippolyte Taine', 'إيبوليت تين'], ['Positivist critic of race, milieu, moment.', 'ناقد وضعيّ للعرق والوسط واللحظة.'], [
      ['Hippolyte Taine applique la race, le milieu, le moment.', 'Hippolyte Taine applies race, milieu, moment.', 'إيبوليت تين يطبّق العرق والوسط واللحظة.'],
      ['Hippolyte Taine cherche les causes d’une œuvre.', 'Hippolyte Taine seeks the causes of a work.', 'إيبوليت تين يبحث عن أسباب العمل.'],
    ]),
    phrase('Gustave Lanson', '🎓', ['Gustave Lanson', 'غوستاف لانسون'], ['Founder of academic literary history.', 'مؤسّس تاريخ الأدب الجامعيّ.'], [
      ['Gustave Lanson fonde la critique d’Université.', 'Gustave Lanson founds university criticism.', 'غوستاف لانسون يؤسّس نقد الجامعة.'],
      ['Gustave Lanson organise l’enseignement littéraire.', 'Gustave Lanson organizes literary teaching.', 'غوستاف لانسون ينظّم التعليم الأدبيّ.'],
    ]),
    phrase('Albert Thibaudet', '🌾', ['Albert Thibaudet', 'ألبرت تيبوديه'], ['Criticism of the creators, sensibility.', 'نقد المبدعين والحساسيّة.'], [
      ['Albert Thibaudet parle de la critique des créateurs.', 'Albert Thibaudet speaks of the criticism of creators.', 'ألبرت تيبوديه يتحدّث عن نقد المبدعين.'],
      ['Albert Thibaudet cultive la lecture sensible.', 'Albert Thibaudet cultivates sensitive reading.', 'ألبرت تيبوديه يربّي القراءة الحسّاسة.'],
    ]),
    phrase('Charles Maurras', '⚔️', ['Charles Maurras', 'شارل موراس'], ['Classical order and tradition.', 'النظام الكلاسيكيّ والتقليد.'], [
      ['Charles Maurras prône l’ordre classique.', 'Charles Maurras advocates classical order.', 'شارل موراس يدعو إلى النظام الكلاسيكيّ.'],
      ['Charles Maurras défend la tradition française.', 'Charles Maurras defends the French tradition.', 'شارل موراس يدافع عن التقليد الفرنسيّ.'],
    ]),
    phrase('Jean-Pierre Richard', '💧', ['Jean-Pierre Richard', 'جان-بيير ريشار'], ['Criticism of sensible matter.', 'نقد المادّة الحسّاسة.'], [
      ['Jean-Pierre Richard explore la matière sensible.', 'Jean-Pierre Richard explores the sensible matter.', 'جان-بيير ريشار يستكشف المادّة الحسّاسة.'],
      ['Jean-Pierre Richard décrit les micro-paysages intimes.', 'Jean-Pierre Richard describes intimate micro-landscapes.', 'جان-بيير ريشار يصف المناظر الدقيقة الحميمة.'],
    ]),
    phrase('Roland Barthes', '✂️', ['Roland Barthes', 'رولان بارت'], ['Semiology and the death of the author.', 'سيميولوجيا وموت المؤلّف.'], [
      ['Roland Barthes déclare la mort de l’auteur.', 'Roland Barthes declares the death of the author.', 'رولان بارت يعلن موت المؤلّف.'],
      ['Roland Barthes multiplie les lectures mythologiques.', 'Roland Barthes multiplies mythological readings.', 'رولان بارت يضاعف القراءات الميثولوجيّة.'],
    ]),
    phrase('Gérard Genette', '📐', ['Gérard Genette', 'جيرار جينيت'], ['Narratology and figures of discourse.', 'السرد وصور الخطاب.'], [
      ['Gérard Genette théorise la narratologie.', 'Gérard Genette theorizes narratology.', 'جيرار جينيت يضع نظريّة السرد.'],
      ['Gérard Genette classe les voix narratives.', 'Gérard Genette classifies the narrative voices.', 'جيرار جينيت يصنّف الأصوات السرديّة.'],
    ]),
  ],
  talk: {
    setting: ['Salma parle à Nour des grands critiques.', 'Salma talks to Nour about the great critics.', 'تتحدّث سلمى مع نور عن كبار النقّاد.'],
    lines: [
      say('salma', 'Nour, Sainte-Beuve classe les écrivains par biographie ?', 'Nour, does Sainte-Beuve classify writers by biography?', 'نور، هل سانت-بوف يصنّف الكتّاب بالسيرة؟'),
      say('nour', 'Oui ! Et Roland Barthes déclare la mort de l’auteur.', 'Yes! And Roland Barthes declares the death of the author.', 'نعم! ورولان بارت يعلن موت المؤلّف.'),
    ],
  },
  grammar: {
    examples: ['[Sainte-Beuve] classe les écrivains par biographie. (proper noun as subject)', 'Hippolyte [Taine] applique la race, le milieu, le moment. (surname after first name)', 'Roland [Barthes] déclare la mort de l’auteur. (surname after first name)'],
    question: ['Sainte-Beuve classifies writers by biography: « ___ classe les écrivains par biographie. »', 'سانت-بوف يصنّف الكتّاب بالسيرة: « ___ classe les écrivains par biographie. »'],
    options: [['Sainte-Beuve', 'Sainte-Beuve'], ['Taine', 'Taine'], ['Barthes', 'Barthes']],
    correct: 0,
    explanation: [
      'The great critics are proper nouns, used as subjects of the critical verb they embody: Sainte-Beuve (biographical method, «portraits littéraires»), Hippolyte Taine (positivist triad: race, milieu, moment), Gustave Lanson (university literary history), Albert Thibaudet (critique des créateurs), Charles Maurras (classical order), Jean-Pierre Richard (matière sensible), Roland Barthes (semiology, death of the author), Gérard Genette (narratology, voices and focalisations). When the surname follows a first name, only the surname is tested.',
      'كبار النقّاد أسماء علَم تُستعمل فاعلًا للفعل النقديّ الذي يجسّدونه: سانت-بوف (المنهج السيريّ، «portraits littéraires»)، إيبوليت تين (الثالوث الوضعيّ: العرق والوسط واللحظة)، غوستاف لانسون (تاريخ الأدب الجامعيّ)، ألبرت تيبوديه (نقد المبدعين)، شارل موراس (النظام الكلاسيكيّ)، جان-بيير ريشار (المادّة الحسّاسة)، رولان بارت (السيميولوجيا، موت المؤلّف)، جيرار جينيت (السرد، الأصوات والتبئير). وعندما يتبع اللقبَ اسمٌ شخصيّ، يُختبَر اللقب وحده.',
    ],
  },
  transfer: {
    setting: ['Karim présente les grands critiques.', 'Karim presents the great critics.', 'يقدّم كريم كبار النقّاد.'],
    lines: [
      say('karim', 'Gérard Genette théorise la narratologie !', 'Gérard Genette theorizes narratology!', 'جيرار جينيت يضع نظريّة السرد!'),
      say('rana', 'Parfait ! Et Jean-Pierre Richard explore la matière sensible, Karim.', 'Perfect! And Jean-Pierre Richard explores the sensible matter, Karim.', 'ممتاز! وجان-بيير ريشار يستكشف المادّة الحسّاسة يا كريم.'),
    ],
  },
  write: {
    prompt: ['Say "Sainte-Beuve classifies writers by biography".', 'قل «سانت-بوف يصنّف الكتّاب بالسيرة».'],
    mustInclude: ['Sainte-Beuve'],
    model: 'Sainte-Beuve classe les écrivains par biographie.',
    frame: '___ classe les écrivains par biographie.',
  },
  drills: [
    ['___ classe les écrivains par biographie.', ['Sainte-Beuve', 'Taine', 'Barthes'], ['Sainte-Beuve.', 'سانت-بوف.']],
    ['Hippolyte ___ applique la race, le milieu, le moment.', ['Taine', 'Lanson', 'Genette'], ['Taine.', 'تين.']],
    ['Roland ___ déclare la mort de l’auteur.', ['Barthes', 'Richard', 'Thibaudet'], ['Barthes.', 'بارت.']],
  ],
})

export const FR_C2_CRITIQUE_LITTERAIRE = [APPROCHES, CONCEPTS, CRITIQUES]
