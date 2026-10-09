// ============================================================================
// French C2 course · «L’argot et le langage familier» — three stages:
// (1) L’argot de la rue — le fric, la vieille caisse, le boulot, la bagnole,
//     le flic, le clebs, la baraque, le bistrot;
// (2) Les expressions familières — c’est cool, c’est nul, ça déchire,
//     c’est chouette, c’est naze, c’est génial, c’est de la bombe,
//     c’est pourri;
// (3) Le verlan et l’argot moderne — meuf, keuf, chetron, relou, chelou,
//     ripou, pourri, zonard.
// Built for Arabic speakers mastering the C2 level.
// ============================================================================

import { phrase, say, stage } from './kit'

const RUE = stage({
  id: 'fr5-arg-rue',
  emoji: '🛵',
  title: ['L’argot de la rue', 'Street slang', 'عامّيّة الشارع'],
  setting: ['Karim et Salma déambulent dans un quartier populaire de Paris.', 'Karim and Salma stroll through a working-class neighbourhood of Paris.', 'كريم وسلمى يتجوّلان في حيٍّ شعبيٍّ من باريس.'],
  scene: [
    say('karim', 'J’ai pas beaucoup de fric sur moi.', 'I don’t have much cash on me.', 'لا أحمل الكثير من المال معي.'),
    say('salma', 'Moi non plus. Ta vieille caisse est garée où ?', 'Me neither. Where’s your old jalopy parked?', 'أنا أيضًا. أين ركنت سيّارتك القديمة؟'),
    say('karim', 'Au boulot, je l’ai laissée aujourd’hui.', 'At work, I left it today.', 'في العمل، تركتها اليوم.'),
    say('salma', 'La bagnole de Zaid est plus rapide, non ?', 'Zaid’s car is faster, isn’t it?', 'سيّارة زيد أسرع، أليس كذلك؟'),
    say('karim', 'Oui. Hier, un flic l’a contrôlée.', 'Yes. Yesterday, a cop pulled him over.', 'نعم. أمس، أوقفه شرطيّ.'),
    say('duck', 'Bravo ! Le clebs du voisin aboie fort.', 'Bravo! The neighbour’s mutt barks loudly.', 'أحسنت! كلب الجار ينبح بصوت عالٍ.'),
  ],
  phrases: [
    phrase('le fric', '💶', ['Money (slang)', 'المال (عامّيّة)'], ['Familiar word for l’argent.', 'كلمة عامّيّة بمعنى l’argent.'], [
      ['Le fric me manque ce mois-ci.', 'I’m short on cash this month.', 'أقصر في المال هذا الشهر.'],
      ['Le fric, ça se gagne dur.', 'Money is hard to earn.', 'المال يُكتسب بصعوبة.'],
    ]),
    phrase('la vieille caisse', '🚗', ['The old jalopy (slang)', 'السيّارة القديمة (عامّيّة)'], ['Familiar for une voiture.', 'كلمة عامّيّة بمعنى une voiture.'], [
      ['La vieille caisse est garée où ?', 'Where’s the old jalopy parked?', 'أين ركنت السيّارة القديمة؟'],
      ['La vieille caisse fume noir.', 'The old jalopy smokes black.', 'السيّارة القديمة تُدخّن أسود.'],
    ]),
    phrase('le boulot', '💼', ['Work (slang)', 'العمل (عامّيّة)'], ['Familiar for le travail.', 'كلمة عامّيّة بمعنى le travail.'], [
      ['Le boulot, c’est dur ce mois-ci.', 'Work is hard this month.', 'العمل صعب هذا الشهر.'],
      ['Le boulot commence tôt demain.', 'Work starts early tomorrow.', 'العمل يبدأ باكرًا غدًا.'],
    ]),
    phrase('la bagnole', '🚙', ['The car (slang)', 'السيّارة (عامّيّة)'], ['Familiar for une voiture.', 'كلمة عامّيّة بمعنى une voiture.'], [
      ['La bagnole de Zaid est plus rapide.', 'Zaid’s car is faster.', 'سيّارة زيد أسرع.'],
      ['La bagnole est en panne souvent.', 'The car breaks down often.', 'السيّارة تتعطّل غالبًا.'],
    ]),
    phrase('le flic', '🚓', ['The cop (slang)', 'الشرطيّ (عامّيّة)'], ['Familiar for un policier.', 'كلمة عامّيّة بمعنى un policier.'], [
      ['Le flic l’a contrôlée hier.', 'The cop pulled her over yesterday.', 'أوقفها الشرطيّ أمس.'],
      ['Le flic fait son rond de nuit.', 'The cop does his night round.', 'الشرطيّ يقوم بدوريّته الليليّة.'],
    ]),
    phrase('le clebs', '🐕', ['The mutt (slang)', 'الكلب (عامّيّة)'], ['Familiar for un chien.', 'كلمة عامّيّة بمعنى un chien.'], [
      ['Le clebs du voisin aboie fort.', 'The neighbour’s mutt barks loudly.', 'كلب الجار ينبح بصوت عالٍ.'],
      ['Le clebs est petit mais bruyant.', 'The mutt is small but noisy.', 'الكلب صغير لكنّه مزعج.'],
    ]),
    phrase('la baraque', '🏠', ['The house (slang)', 'البيت (عامّيّة)'], ['Familiar for une maison.', 'كلمة عامّيّة بمعنى une maison.'], [
      ['La baraque de Nour est belle.', 'Nour’s house is beautiful.', 'بيت نور جميل.'],
      ['La baraque sent le ragoût.', 'The house smells of stew.', 'البيت تفوح منه رائحة الحساء.'],
    ]),
    phrase('le bistrot', '☕', ['The café (slang)', 'المقهى (عامّيّة)'], ['Familiar for un café.', 'كلمة عامّيّة بمعنى un café.'], [
      ['Le bistrot du coin est sympa.', 'The corner café is nice.', 'مقهى الزاوية لطيف.'],
      ['Le bistrot ouvre très tôt.', 'The café opens very early.', 'المقهى يفتح باكرًا جدًّا.'],
    ]),
  ],
  talk: {
    setting: ['Salma parle à Karim des mots d’argot.', 'Salma talks to Karim about slang words.', 'سلمى تتحدّث مع كريم عن كلمات العامّيّة.'],
    lines: [
      say('salma', 'Karim, le fric te suffit ce mois-ci ?', 'Karim, is the cash enough for you this month?', 'كريم، هل يكفيك المال هذا الشهر؟'),
      say('nour', 'Oui ! Au boulot, ça roule, Salma.', 'Yes! At work, things roll, Salma.', 'نعم! في العمل، تسير الأمور يا سلمى.'),
    ],
  },
  grammar: {
    examples: ['J’ai pas de [fric]. (slang for argent)', 'Au [boulot], je l’ai laissée. (slang for travail)', 'Un [flic] l’a contrôlée. (slang for policier)'],
    question: ['Slang for "money": « J’ai pas de ___. »', 'العامّيّة لـ «المال»: « J’ai pas de ___. »'],
    options: [['fric', 'fric'], ['argent', 'argent'], ['monnaie', 'monnaie']],
    correct: 0,
    explanation: [
      'Argot (slang) replaces standard vocabulary with informal alternatives: le fric (l’argent), la caisse/la bagnole (une voiture), le boulot (le travail), le flic (un policier), le clebs (un chien), la baraque (une maison), le bistrot (un café). Use slang only with peers and friends, never in formal writing or with strangers/superiors. Slang evolves fast and varies by region and generation.',
      'يستبدل الـ argot (العامّيّة) المفردات المعياريّة بمفردات بديلة غير رسميّة: le fric (l’argent)، la caisse/la bagnole (une voiture)، le boulot (le travail)، le flic (un policier)، le clebs (un chien)، la baraque (une maison)، le bistrot (un café). تُستعمل العامّيّة فقط مع الأقران والأصدقاء، لا في الكتابة الرسميّة ولا مع الغرباء أو الرؤساء. تتطوّر العامّيّة بسرعة وتختلف باختلاف الإقليم والجيل.',
    ],
  },
  transfer: {
    setting: ['Adam découvre l’argot du quartier.', 'Adam discovers the neighbourhood slang.', 'آدم يكتشف عامّيّة الحيّ.'],
    lines: [
      say('karim', 'Regarde ! La bagnole de Zaid est là !', 'Look! Zaid’s car is here!', 'انظر! سيّارة زيد هنا!'),
      say('rana', 'Cool ! Et le bistrot du coin ouvre tôt, Adam.', 'Cool! And the corner café opens early, Adam.', 'رائع! ومقهى الزاوية يفتح باكرًا يا آدم.'),
    ],
  },
  write: {
    prompt: ['Say "I don’t have any money" (slang).', 'قل «لا أملك مالًا» (عامّيّة).'],
    mustInclude: ['fric'],
    model: 'J’ai pas de fric.',
    frame: 'J’ai pas de ___.',
  },
  drills: [
    ['J’ai pas de ___.', ['fric', 'argent', 'monnaie'], ['Cash (slang).', 'نقد (عامّيّة).']],
    ['Au ___, je l’ai laissée.', ['boulot', 'travail', 'métier'], ['Work (slang).', 'عمل (عامّيّة).']],
    ['Le ___ du voisin aboie fort.', ['clebs', 'chien', 'chiot'], ['Mutt (slang).', 'كلب (عامّيّة).']],
  ],
})

const EXPRESSIONS = stage({
  id: 'fr5-arg-expressions',
  emoji: '🤘',
  title: ['Les expressions familières', 'Familiar expressions', 'التعابير العامّيّة'],
  setting: ['Salma et Zaid commentent une soirée entre amis.', 'Salma and Zaid comment on a friends’ evening out.', 'سلمى وزيد يعلّقان على سهرة بين أصدقاء.'],
  scene: [
    say('salma', 'C’est cool cette musique, non ?', 'This music is cool, isn’t it?', 'هذه الموسيقى رائعة، أليس كذلك؟'),
    say('zaid', 'Franchement, c’est nul ce DJ.', 'Honestly, this DJ is lame.', 'بصراحة، هذا الدي جي سيّئ.'),
    say('salma', 'Mais ça déchire, le rythme là !', 'But the rhythm rocks!', 'لكنّ الإيقاع مذهل!'),
    say('zaid', 'C’est chouette quand même un peu.', 'It’s still kinda nice though.', 'إنّه لطيف رغم ذلك قليلًا.'),
    say('salma', 'Pas trop. C’est naze ce son.', 'Not really. This sound is lame.', 'ليس كثيرًا. هذا الصوت سيّئ.'),
    say('duck', 'Bravo ! C’est génial de danser ici.', 'Bravo! It’s great to dance here.', 'أحسنت! من الرائع أن نرقص هنا.'),
  ],
  phrases: [
    phrase('c’est cool', '😎', ['It’s cool', 'هذا رائع'], ['Familiar positive judgement.', 'حكم إيجابيّ عامّيّ.'], [
      ['C’est cool cette musique, non ?', 'This music is cool, isn’t it?', 'هذه الموسيقى رائعة، أليس كذلك؟'],
      ['C’est cool de te voir ici.', 'It’s cool to see you here.', 'من الرائع أن أراك هنا.'],
    ]),
    phrase('c’est nul', '🙅', ['It’s lame', 'هذا سيّئ'], ['Familiar negative judgement.', 'حكم سلبيّ عامّيّ.'], [
      ['Franchement, c’est nul ce DJ.', 'Honestly, this DJ is lame.', 'بصراحة، هذا الدي جي سيّئ.'],
      ['C’est nul de partir si tôt.', 'It’s lame to leave so early.', 'من السيّئ أن نغادر بهذه السرعة.'],
    ]),
    phrase('ça déchire', '🔥', ['It rocks', 'هذا مذهل'], ['Familiar strong positive.', 'إيجابيّ قويّ عامّيّ.'], [
      ['Mais ça déchire, le rythme là !', 'But the rhythm rocks!', 'لكنّ الإيقاع مذهل!'],
      ['Cette guitare, ça déchire !', 'This guitar rocks!', 'هذه الغيتار مذهلة!'],
    ]),
    phrase('c’est chouette', '🦉', ['It’s nice', 'هذا لطيف'], ['Familiar mild positive.', 'إيجابيّ لطيف عامّيّ.'], [
      ['C’est chouette quand même un peu.', 'It’s still kinda nice though.', 'إنّه لطيف رغم ذلك قليلًا.'],
      ['C’est chouette ici, je trouve.', 'It’s nice here, I think.', 'إنّه لطيف هنا، في رأيي.'],
    ]),
    phrase('c’est naze', '😑', ['It’s lame', 'هذا تافه'], ['Familiar negative, milder.', 'سلبيّ عامّيّ أخفّ.'], [
      ['Pas trop. C’est naze ce son.', 'Not really. This sound is lame.', 'ليس كثيرًا. هذا الصوت سيّئ.'],
      ['C’est naze comme réponse.', 'It’s a lame answer.', 'هذه إجابة سيّئة.'],
    ]),
    phrase('c’est génial', '🎉', ['It’s great', 'هذا رائع'], ['Familiar strong positive.', 'إيجابيّ قويّ عامّيّ.'], [
      ['Bravo ! C’est génial de danser ici.', 'Bravo! It’s great to dance here.', 'أحسنت! من الرائع أن نرقص هنا.'],
      ['C’est génial, cette soirée.', 'It’s great, this evening.', 'هذا رائع، هذه السهرة.'],
    ]),
    phrase('c’est de la bombe', '💣', ['It’s the bomb', 'هذا قنّابة'], ['Familiar superlative positive.', 'إيجابيّ مبالغ عامّيّ.'], [
      ['Ce morceau, c’est de la bombe.', 'This track is the bomb.', 'هذا المقطع قنّابة.'],
      ['C’est de la bombe, ce cocktail !', 'This cocktail is the bomb!', 'هذا الكوكتيل قنّابة!'],
    ]),
    phrase('c’est pourri', '🤮', ['It’s rotten', 'هذا فاسد'], ['Familiar strong negative.', 'سلبيّ قويّ عامّيّ.'], [
      ['Ce repas, c’est pourri.', 'This meal is rotten.', 'هذه الوجبة فاسدة.'],
      ['C’est pourri, ce service.', 'This service is rotten.', 'هذه الخدمة سيّئة جدًّا.'],
    ]),
  ],
  talk: {
    setting: ['Salma parle à Zaid des expressions familières.', 'Salma talks to Zaid about familiar expressions.', 'سلمى تتحدّث مع زيد عن التعابير العامّيّة.'],
    lines: [
      say('salma', 'Zaid, ça déchire ce morceau ?', 'Zaid, does this track rock?', 'زيد، هل هذا المقطع مذهل؟'),
      say('nour', 'Oui ! C’est de la bombe, Salma.', 'Yes! It’s the bomb, Salma.', 'نعم! إنّه قنّابة يا سلمى.'),
    ],
  },
  grammar: {
    examples: ['C’est [cool] cette musique. (familiar positive)', 'Franchement, c’est [nul]. (familiar negative)', 'Ça [déchire] ! (familiar strong positive)'],
    question: ['Familiar strong positive: « Ça ___ ! »', 'إيجابيّ قويّ عامّيّ: « Ça ___ ! »'],
    options: [['déchire', 'déchire'], ['nul', 'nul'], ['naze', 'naze']],
    correct: 0,
    explanation: [
      'Familiar expressions express judgement with colourful adjectives: positives (c’est cool, c’est chouette, c’est génial, ça déchire, c’est de la bombe) and negatives (c’est nul, c’est naze, c’est pourri). "C’est" + adjective gives a quick judgement on a thing or situation; "ça" + verb (ça déchire, ça envoie du lourd) is more dynamic. Reserve these for informal speech with friends; in writing or with strangers, prefer standard equivalents: c’est agréable, c’est décevant, c’est excellent.',
      'تعبّر التعابير العامّيّة عن الحكم باستعمال صفات ملوّنة: إيجابيّة (c’est cool، c’est chouette، c’est génial، ça déchire، c’est de la bombe) وسلبيّة (c’est nul، c’est naze، c’est pourri). صيغة "c’est" + صفة تعطي حكمًا سريعًا على شيء أو موقف؛ و"ça" + فعل (ça déchire، ça envoie du lourd) أكثر ديناميكيّة. احتفظ بهذه للمواقف غير الرسميّة مع الأصدقاء؛ وفي الكتابة أو مع الغرباء، فضّل المُقابلات المعياريّة: c’est agréable، c’est décevant، c’est excellent.',
    ],
  },
  transfer: {
    setting: ['Adam écoute une chanson avec ses amis.', 'Adam listens to a song with his friends.', 'آدم يستمع إلى أغنية مع أصدقائه.'],
    lines: [
      say('karim', 'Écoute ! C’est cool cette chanson !', 'Listen! This song is cool!', 'استمع! هذه الأغنية رائعة!'),
      say('rana', 'Génial ! C’est chouette de danser, Adam.', 'Great! It’s nice to dance, Adam.', 'رائع! من اللطيف أن نرقص يا آدم.'),
    ],
  },
  write: {
    prompt: ['Say "this music rocks" (familiar).', 'قل «هذه الموسيقى مذهلة» (عامّيّة).'],
    mustInclude: ['déchire'],
    model: 'Cette musique, ça déchire !',
    frame: 'Cette musique, ça ___ !',
  },
  drills: [
    ['Cette musique, ça ___ !', ['déchire', 'nul', 'naze'], ['Rocks.', 'مذهل.']],
    ['Franchement, c’est ___ ce DJ.', ['nul', 'déchire', 'cool'], ['Lame.', 'سيّئ.']],
    ['Ce cocktail, c’est de la ___ !', ['bombe', 'nul', 'naze'], ['The bomb.', 'قنّابة.']],
  ],
})

const VERLAN = stage({
  id: 'fr5-arg-verlan',
  emoji: '🔀',
  title: ['Le verlan et l’argot moderne', 'Verlan and modern slang', 'الكلام المقلوب والعامّيّة الحديثة'],
  setting: ['Rana et Nour discutent sur un banc de banlieue parisienne.', 'Rana and Nour chat on a bench in a Parisian suburb.', 'رنا ونور تتحدّثان على مقعد في ضاحية باريسيّة.'],
  scene: [
    say('rana', 'C’est une meuf sympa, cette serveuse.', 'She’s a nice chick, this waitress.', 'إنّها فتاة لطيفة، هذه النادلة.'),
    say('nour', 'Oui. Un keuf l’a contrôlée hier.', 'Yes. A cop checked her yesterday.', 'نعم. أوقفها شرطيّ أمس.'),
    say('rana', 'C’est un chetron, ce mec là.', 'He’s a dumb guy, that dude.', 'إنّه غبيّ، هذا الرجل.'),
    say('nour', 'C’est relou, ce type, franchement.', 'He’s annoying, this guy, honestly.', 'إنّه مزعج، هذا الرجل، بصراحة.'),
    say('rana', 'C’est chelou, son excuse, non ?', 'Her excuse is weird, isn’t it?', 'عذرها غريب، أليس كذلك؟'),
    say('duck', 'Bravo ! C’est un ripou, ce flic.', 'Bravo! He’s a corrupt cop, this cop.', 'أحسنت! إنّه شرطيّ فاسد، هذا الشرطيّ.'),
  ],
  phrases: [
    phrase('meuf', '👩', ['Chick (slang)', 'فتاة (عامّيّة)'], ['Verlan of une femme.', 'كلمة معكوسة من une femme.'], [
      ['C’est une meuf sympa.', 'She’s a nice chick.', 'إنّها فتاة لطيفة.'],
      ['La meuf du bistrot est là.', 'The café chick is here.', 'فتاة المقهى هنا.'],
    ]),
    phrase('keuf', '👮', ['Cop (slang)', 'شرطيّ (عامّيّة)'], ['Verlan of un flic.', 'كلمة معكوسة من un flic.'], [
      ['Le keuf l’a contrôlée.', 'The cop checked her.', 'أوقفها الشرطيّ.'],
      ['Le keuf fait sa ronde.', 'The cop does his round.', 'الشرطيّ يقوم بدوريّته.'],
    ]),
    phrase('chetron', '🤪', ['Dumb guy (slang)', 'غبيّ (عامّيّة)'], ['Verlan of un con.', 'كلمة معكوسة من un con.'], [
      ['C’est un chetron, ce mec.', 'He’s a dumb guy, this dude.', 'إنّه غبيّ، هذا الرجل.'],
      ['Le chetron a encore raté.', 'The dumb guy failed again.', 'الغبيّ أخفق من جديد.'],
    ]),
    phrase('relou', '😣', ['Annoying (slang)', 'مزعج (عامّيّة)'], ['Verlan of lourd.', 'كلمة معكوسة من lourd.'], [
      ['C’est relou, ce type.', 'He’s annoying, this guy.', 'إنّه مزعج، هذا الرجل.'],
      ['Cette soirée, c’est relou.', 'This evening is annoying.', 'هذه السهرة مزعجة.'],
    ]),
    phrase('chelou', '👀', ['Weird (slang)', 'غريب (عامّيّة)'], ['Verlan of louche.', 'كلمة معكوسة من louche.'], [
      ['C’est chelou, son excuse.', 'Her excuse is weird.', 'عذرها غريب.'],
      ['Un truc chelou, ce soir.', 'Something weird, tonight.', 'أمر غريب، الليلة.'],
    ]),
    phrase('ripou', '🚷', ['Corrupt cop (slang)', 'شرطيّ فاسد (عامّيّة)'], ['Verlan of un pourri.', 'كلمة معكوسة من un pourri.'], [
      ['C’est un ripou, ce flic.', 'He’s a corrupt cop, this cop.', 'إنّه شرطيّ فاسد، هذا الشرطيّ.'],
      ['Le ripou a été viré.', 'The corrupt cop was fired.', 'طُرد الشرطيّ الفاسد.'],
    ]),
    phrase('pourri', '🤢', ['Corrupt (slang)', 'فاسد (عامّيّة)'], ['Familiar adjective for corrupt.', 'صفة عامّيّة بمعنى فاسد.'], [
      ['Ce flic est pourri.', 'This cop is corrupt.', 'هذا الشرطيّ فاسد.'],
      ['Le système est pourri.', 'The system is corrupt.', 'النظام فاسد.'],
    ]),
    phrase('zonard', '🏚️', ['Hood kid (slang)', 'فتى الحيّ (عامّيّة)'], ['Familiar for banlieusard.', 'كلمة عامّيّة بمعنى banlieusard.'], [
      ['Le zonard traîne au coin.', 'The hood kid hangs at the corner.', 'فتى الحيّ يلهو في الزاوية.'],
      ['Le zonard fume au mur.', 'The hood kid smokes by the wall.', 'فتى الحيّ يدخّن عند الجدار.'],
    ]),
  ],
  talk: {
    setting: ['Salma parle à Karim du verlan moderne.', 'Salma talks to Karim about modern verlan.', 'سلمى تتحدّث مع كريم عن الكلام المقلوب الحديث.'],
    lines: [
      say('salma', 'Karim, c’est relou ce mec ?', 'Karim, is this guy annoying?', 'كريم، هل هذا الرجل مزعج؟'),
      say('nour', 'Oui ! C’est un vrai zonard, Karim.', 'Yes! He’s a real hood kid, Karim.', 'نعم! إنّه فتى حيٍّ حقيقيّ يا كريم.'),
    ],
  },
  grammar: {
    examples: ['C’est une [meuf] sympa. (verlan of femme)', 'Un [keuf] l’a contrôlée. (verlan of flic)', 'C’est [relou], ce type. (verlan of lourd)'],
    question: ['Verlan of "femme": « C’est une ___. »', 'لفظ femme معكوس: « C’est une ___. »'],
    options: [['meuf', 'meuf'], ['femme', 'femme'], ['flic', 'flic']],
    correct: 0,
    explanation: [
      'Verlan is a slang built by inverting the syllables of a word: femme → meuf, flic → keuf, lourd → relou, louche → chelou, pourri → ripou, con → chetron (with -tron suffix). The name itself comes from à l’envers (inverse) → ver-lan. Verlan belongs to the family register and youth slang of the banlieues; it spreads fast through rap and social media. Use it only in informal speech among peers; never in writing, formal speech, or with strangers and superiors. Many verlan words evolve again (e.g. meuf → meufs, arabe → beur → rebeu).',
      'الـ verlan عامّيّة تُبنى بعكس مقاطع الكلمة: femme ← meuf، flic ← keuf، lourd ← relou، louche ← chelou، pourri ← ripou، con ← chetron (مع لاحقة -tron). الاسم نفسه ناتج من à l’envers (معكوس) ← ver-lan. ينتمي الـ verlan إلى عامّيّة العائلة والشباب في الضواحي؛ وينتشر بسرعة عبر الراب ووسائل التواصل. لا يُستعمل إلا في الكلام غير الرسميّ بين الأقران؛ ولا في الكتابة أو الخطاب الرسميّ أو مع الغرباء والرؤساء. تتطوّر كلمات الـ verlan كثيرًا (مثلًا meuf ← meufs، arabe ← beur ← rebeu).',
    ],
  },
  transfer: {
    setting: ['Adam apprend le verlan avec ses amis de banlieue.', 'Adam learns verlan with his suburb friends.', 'آدم يتعلّم الكلام المقلوب مع أصدقائه من الضاحية.'],
    lines: [
      say('karim', 'Regarde ! La meuf du bistrot sourit !', 'Look! The café chick is smiling!', 'انظر! فتاة المقهى تبتسم!'),
      say('rana', 'Bizarre ! C’est chelou, Adam.', 'Weird! It’s strange, Adam.', 'غريب! هذا مريب يا آدم.'),
    ],
  },
  write: {
    prompt: ['Say "she is a chick" (verlan).', 'قل «إنّها فتاة» (معكوس).'],
    mustInclude: ['meuf'],
    model: 'C’est une meuf.',
    frame: 'C’est une ___.',
  },
  drills: [
    ['C’est une ___ sympa.', ['meuf', 'femme', 'flic'], ['Chick (verlan).', 'فتاة (معكوس).']],
    ['Un ___ l’a contrôlée.', ['keuf', 'flic', 'policier'], ['Cop (verlan).', 'شرطيّ (معكوس).']],
    ['C’est ___, ce type.', ['relou', 'lourd', 'flic'], ['Annoying (verlan).', 'مزعج (معكوس).']],
  ],
})

export const FR_ARGOT_FAMILIER = [RUE, EXPRESSIONS, VERLAN]
