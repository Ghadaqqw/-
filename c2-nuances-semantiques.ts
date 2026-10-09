// ============================================================================
// French C2 course · «Les nuances sémantiques» — three stages: (1) Les nuances
// du regard (voir, regarder, observer, contempler, scruter, apercevoir,
// entrevoir, distinguer) → (2) Les nuances de la parole (dire, affirmer,
// déclarer, soutenir, prétendre, avancer, souligner, préciser) → (3) Les
// nuances de la pensée (penser, réfléchir, méditer, songer, imaginer,
// concevoir, élaborer, ruminer). Grammar met on the way: near-synonyms carry
// subtle differences of intensity, register and connotation; the right word
// depends on context and intended nuance. Built for Arabic speakers preparing
// the DALF C2 (maîtrise de la langue).
// ============================================================================

import { phrase, say, stage } from './kit'

const REGARD = stage({
  id: 'fr5-ns-regard',
  emoji: '👁️',
  title: ['Les nuances du regard', 'The nuances of the gaze', 'فروق النظر الدقيقة'],
  setting: ['Karim et Salma comparent huit verbes du regard.', 'Karim and Salma compare eight verbs of seeing.', 'يقارن كريم وسلمى ثمانية أفعال للنظر.'],
  scene: [
    say('bear', 'Salma distingue huit verbes du regard.', 'Salma distinguishes eight verbs of seeing.', 'تميّز سلمى ثمانية أفعال للنظر.'),
    say('salma', 'Voir un paysage reste neutre et froid.', 'To see a landscape stays neutral and cold.', 'رؤية منظرٍ تبقى محايدة وباردة.'),
    say('bear', 'Regarder la scène engage-t-elle l’œil ?', 'Does watching the scene engage the eye?', 'هل تَشتبك العين في مشاهدة المشهد؟'),
    say('salma', 'Contempler le ciel ouvre-t-il l’âme ?', 'Does contemplating the sky open the soul?', 'هل يتأمّل المرءُ السماءِ فيفتح النفس؟'),
    say('bear', 'Scruter l’horizon tend-il le regard ?', 'Does scanning the horizon strain the gaze?', 'هل يُجهِد فحصُ الأفق النظر؟'),
    say('duck', 'Bravo ! On aperçoit une silhouette au loin.', 'Bravo! One glimpses a silhouette far off.', 'أحسنت! نلمح ظلًّا في البعيد.'),
  ],
  phrases: [
    phrase('voir un paysage', '🏔️', ['To see a landscape', 'رؤية منظر'], ['Neutral perception, the eye receives an image.', 'إدراك محايد، تتلقّى العين صورة.'], [
      ['Je veux voir un paysage nouveau.', 'I want to see a new landscape.', 'أريد أن أرى منظرًا جديدًا.'],
      ['Voir un paysage apaise l’œil.', 'Seeing a landscape soothes the eye.', 'رؤية منظرٍ تُهدّئ العين.'],
    ]),
    phrase('regarder la scène', '🎭', ['To watch the scene', 'مشاهدة المشهد'], ['Active, intentional gaze.', 'نظر فعّال مقصود.'], [
      ['Il aime regarder la scène avec soin.', 'He likes to watch the scene carefully.', 'يحبّ أن يشاهد المشهد بعناية.'],
      ['Regarder la scène demande du temps.', 'Watching the scene demands time.', 'مشاهدة المشهد تتطلّب وقتًا.'],
    ]),
    phrase('observer les détails', '🔍', ['To observe the details', 'ملاحظة التفاصيل'], ['Sustained, methodical attention.', 'انتباه متواصل منهجيّ.'], [
      ['Je veux observer les détails du tableau.', 'I want to observe the details of the painting.', 'أريد أن ألاحظ تفاصيل اللوحة.'],
      ['Observer les détails révèle les nuances.', 'Observing the details reveals the nuances.', 'ملاحظة التفاصيل تكشف الفروق.'],
    ]),
    phrase('contempler le ciel', '🌌', ['To contemplate the sky', 'تأمّل السماء'], ['Aesthetic or spiritual admiration.', 'تأمّل جماليّ أو روحيّ.'], [
      ['Elle aime contempler le ciel étoilé.', 'She likes to contemplate the starry sky.', 'تحبّ أن تتأمّل السماء المرصّعة بالنجوم.'],
      ['Contempler le ciel invite au calme.', 'Contemplating the sky invites calm.', 'تأمّل السماء يدعو إلى السكينة.'],
    ]),
    phrase('scruter l’horizon', '🔭', ['To scan the horizon', 'فحص الأفق'], ['Intense, anxious search.', 'بحث شديد قلِق.'], [
      ['Il faut scruter l’horizon au large.', 'One must scan the horizon offshore.', 'يجب فحص الأفق في عرض البحر.'],
      ['Scruter l’horizon exige de la patience.', 'Scanning the horizon demands patience.', 'فحص الأفق يتطلّب صبرًا.'],
    ]),
    phrase('apercevoir une silhouette', '👤', ['To catch sight of a silhouette', 'لمح ظلّ'], ['Brief, partial catch.', 'التقاط قصير جزئيّ.'], [
      ['On peut apercevoir une silhouette au loin.', 'One can catch sight of a silhouette afar.', 'يمكن لمح ظلًّا في البعيد.'],
      ['Apercevoir une silhouette brumeuse intrigue.', 'Catching sight of a misty silhouette intrigues.', 'لمح ظلٍّ ضبابيٍّ يثير الفضول.'],
    ]),
    phrase('entrevoir une solution', '💡', ['To glimpse a solution', 'استشفاف حلّ'], ['Fleeting, uncertain glimpse.', 'لمحة عابرة غير أكيدة.'], [
      ['Je crois entrevoir une solution possible.', 'I think I glimpse a possible solution.', 'أظنّني أستشفّ حلًّا ممكنًا.'],
      ['Entrevoir une solution encourage l’effort.', 'Glimpsing a solution encourages effort.', 'استشفاف حلٍّ يُشجِّع على الجهد.'],
    ]),
    phrase('distinguer une forme', '🎯', ['To distinguish a shape', 'تمييز شكل'], ['Differentiate, make out among others.', 'تمييز وفصل عمّا حوله.'], [
      ['On arrive à distinguer une forme lointaine.', 'One manages to distinguish a distant shape.', 'ننجح في تمييز شكلٍ بعيد.'],
      ['Distinguer une forme demande du soin.', 'Distinguishing a shape demands care.', 'تمييز شكلٍ يتطلّب عناية.'],
    ]),
  ],
  talk: {
    setting: ['Salma parle à Nour des nuances du regard.', 'Salma talks to Nour about the nuances of seeing.', 'تتحدّث سلمى مع نور عن فروق النظر.'],
    lines: [
      say('salma', 'Nour, on aperçoit une silhouette au loin ?', 'Nour, can one catch sight of a silhouette afar?', 'نور، هل يمكن لمح ظلٍّ في البعيد؟'),
      say('nour', 'Oui ! Et on entrevoit une solution, Salma.', 'Yes! And one glimpses a solution, Salma.', 'نعم! ونستشفّ حلًّا يا سلمى.'),
    ],
  },
  grammar: {
    examples: ['Je [vois] un paysage. (voir, je vois)', 'Elle [regarde] la scène. (regarder, elle regarde)', 'Il [observe] les détails. (observer, il observe)'],
    question: ['He sees a landscape: « Il ___ un paysage. »', 'هو يرى منظرًا: « Il ___ un paysage. »'],
    options: [['voit', 'voit'], ['vois', 'vois'], ['voient', 'voient']],
    correct: 0,
    explanation: [
      'Les nuances du regard : French has eight near-synonyms for « to see », each with a distinct nuance. Voir = neutral perception, the eye receives an image without effort. Regarder = active, intentional gaze, you direct your eyes on purpose. Observer = sustained, methodical attention, you study what you see. Contempler = aesthetic or spiritual admiration, you let the sight fill you. Scruter = intense, anxious search, you examine every detail to find something. Apercevoir = brief, partial catch, you suddenly catch sight of something. Entrevoir = fleeting, uncertain glimpse, you barely see and you are not sure. Distinguer = differentiate, you make out one form among others. Choosing the right verb depends on the intensity of the gaze, its duration, and the speaker’s intention. Conjugation: voir → je vois, il voit, ils voient; regarder → il regarde; observer → il observe.',
      'فروق النظر: في الفرنسيّة ثمانية أفعال شبه مرادفة لـ«رأى»، لكلٍّ منها فروق دقيقة. Voir = إدراك محايد، تتلقّى العين صورةً بلا جهد. Regarder = نظر فعّال مقصود، توجّه عينيك عمدًا. Observer = انتباه متواصل منهجيّ، تدرس ما ترى. Contempler = تأمّل جماليّ أو روحيّ، تدع المنظر يملؤك. Scruter = بحث شديد قلِق، تفحص كلّ تفصيل لتجد شيئًا. Apercevoir = التقاط قصير جزئيّ، يقع بصرك فجأة على شيء. Entrevoir = لمحة عابرة غير أكيدة، بالكاد ترى ولست متأكّدًا. Distinguer = تمييز، تفصل شكلًا عن غيره. واختيار الفعل المناسب يعتمد على شدّة النظر ومدّته وقصد المتكلّم. والصرف: voir ← je vois، il voit، ils voient؛ وregarder ← il regarde؛ وobserver ← il observe.',
    ],
  },
  transfer: {
    setting: ['Adam distingue les nuances du regard.', 'Adam distinguishes the nuances of seeing.', 'يميّز آدم فروق النظر.'],
    lines: [
      say('karim', 'On aperçoit une silhouette au loin !', 'One catches sight of a silhouette afar!', 'نلمح ظلًّا في البعيد!'),
      say('rana', 'Parfait ! Et on entrevoit une solution, Adam.', 'Perfect! And one glimpses a solution, Adam.', 'ممتاز! ونستشفّ حلًّا يا آدم.'),
    ],
  },
  write: {
    prompt: ['Say "one catches sight of a silhouette afar".', 'قل «نلمح ظلًّا في البعيد».'],
    mustInclude: ['silhouette'],
    model: 'On aperçoit une silhouette au loin.',
    frame: 'On ___ une silhouette au loin.',
  },
  drills: [
    ['On ___ une silhouette au loin.', ['aperçoit', 'voit', 'scrute'], ['Catches sight.', 'يلمح.']],
    ['Le marin ___ l’horizon.', ['scrute', 'observe', 'voit'], ['Scans.', 'يفحص.']],
    ['On peut ___ une solution.', ['entrevoir', 'contempler', 'dire'], ['Glimpse.', 'يستشفّ.']],
  ],
})

const PAROLE = stage({
  id: 'fr5-ns-parole',
  emoji: '🗣️',
  title: ['Les nuances de la parole', 'The nuances of speech', 'فروق القول الدقيقة'],
  setting: ['Karim et Salma comparent huit verbes du dire.', 'Karim and Salma compare eight verbs of saying.', 'يقارن كريم وسلمى ثمانية أفعال للقول.'],
  scene: [
    say('bear', 'Salma classe huit verbes du dire.', 'Salma classifies eight verbs of saying.', 'تصنّف سلمى ثمانية أفعال للقول.'),
    say('salma', 'Dire la vérité reste neutre et sobre.', 'To tell the truth stays neutral and sober.', 'قول الحقيقة يبقى محايدًا رزينًا.'),
    say('bear', 'Affirmer avec force marque-t-il la certitude ?', 'Does affirming forcefully mark certainty?', 'هل التأكيد بقوّة يدلّ على اليقين؟'),
    say('salma', 'Déclarer publiquement engage-t-il le locuteur ?', 'Does declaring publicly commit the speaker?', 'هل الإعلان علنًا يُلزم المتكلّم؟'),
    say('bear', 'Prétendre savoir trahit-il le doute ?', 'Does claiming to know betray doubt?', 'هل الادّعاء بالمعرفة يفضح الشكّ؟'),
    say('duck', 'Bravo ! Il faut souligner un point crucial.', 'Bravo! One must underline a crucial point.', 'أحسنت! يجب إبراز نقطةٍ حاسمة.'),
  ],
  phrases: [
    phrase('dire la vérité', '⚖️', ['To tell the truth', 'قول الحقيقة'], ['Neutral act of stating.', 'فعل محايد للإخبار.'], [
      ['Je préfère dire la vérité toujours.', 'I prefer to always tell the truth.', 'أُفضّل قول الحقيقة دائمًا.'],
      ['Dire la vérité libère la conscience.', 'Telling the truth frees the conscience.', 'قول الحقيقة يحرّر الضمير.'],
    ]),
    phrase('affirmer avec force', '📢', ['To affirm forcefully', 'التأكيد بقوّة'], ['State with conviction.', 'إثبات بيقين.'], [
      ['On peut affirmer avec force cette idée.', 'One can forcefully affirm this idea.', 'يمكن التأكيد بقوّة على هذه الفكرة.'],
      ['Affirmer avec force renforce l’argument.', 'Affirming forcefully strengthens the argument.', 'التأكيد بقوّة يعزّز الحجّة.'],
    ]),
    phrase('déclarer publiquement', '📣', ['To declare publicly', 'الإعلان علنًا'], ['Solemn, formal statement.', 'إعلان رسميّ مهيب.'], [
      ['Il faut déclarer publiquement son choix.', 'One must publicly declare one’s choice.', 'يجب الإعلان علنًا عن خيارك.'],
      ['Déclarer publiquement engage le locuteur.', 'Declaring publicly commits the speaker.', 'الإعلان علنًا يُلزم المتكلّم.'],
    ]),
    phrase('soutenir une thèse', '🛡️', ['To defend a thesis', 'الدفاع عن أطروحة'], ['Defend against opposition.', 'الدفاع ضدّ المعارضة.'], [
      ['On peut soutenir une thèse avec rigueur.', 'One can defend a thesis rigorously.', 'يمكن الدفاع عن أطروحة بصرامة.'],
      ['Soutenir une thèse exige des preuves.', 'Defending a thesis demands proof.', 'الدفاع عن أطروحة يتطلّب بيّنات.'],
    ]),
    phrase('prétendre savoir', '🎭', ['To claim to know', 'الادّعاء بالمعرفة'], ['Claim without proof, often skeptical.', 'ادّعاء بلا بيّنة، غالبًا بتحفّظ.'], [
      ['On peut prétendre savoir sans preuve.', 'One can claim to know without proof.', 'يمكن الادّعاء بالمعرفة بلا بيّنة.'],
      ['Prétendre savoir cache parfois l’ignorance.', 'Claiming to know sometimes hides ignorance.', 'الادّعاء بالمعرفة يُخفي أحيانًا الجهل.'],
    ]),
    phrase('avancer une idée', '💡', ['To put forward an idea', 'طرح فكرة'], ['Propose tentatively.', 'اقتراح متحفّظ.'], [
      ['Je veux avancer une idée nouvelle.', 'I want to put forward a new idea.', 'أريد طرح فكرةٍ جديدة.'],
      ['Avancer une idée lance le débat.', 'Putting forward an idea launches the debate.', 'طرح فكرةٍ يفتح النقاش.'],
    ]),
    phrase('souligner un point', '🖊️', ['To underline a point', 'إبراز نقطة'], ['Emphasize, draw attention.', 'تأكيد ولفت الانتباه.'], [
      ['Il faut souligner un point crucial.', 'One must underline a crucial point.', 'يجب إبراز نقطةٍ حاسمة.'],
      ['Souligner un point clarifie le propos.', 'Underlining a point clarifies the topic.', 'إبراز نقطةٍ يُوضّح الموضوع.'],
    ]),
    phrase('préciser un détail', '🎯', ['To specify a detail', 'تدقيق تفصيل'], ['Make precise, clarify.', 'تدقيق وتوضيح.'], [
      ['On doit préciser un détail important.', 'One must specify an important detail.', 'يجب تدقيق تفصيلٍ مهمّ.'],
      ['Préciser un détail évite les malentendus.', 'Specifying a detail avoids misunderstandings.', 'تدقيق تفصيلٍ يجنّب سوء الفهم.'],
    ]),
  ],
  talk: {
    setting: ['Salma parle à Nour des nuances de la parole.', 'Salma talks to Nour about the nuances of speech.', 'تتحدّث سلمى مع نور عن فروق القول.'],
    lines: [
      say('salma', 'Nour, il faut souligner un point crucial ?', 'Nour, must one underline a crucial point?', 'نور، هل يجب إبراز نقطةٍ حاسمة؟'),
      say('nour', 'Oui ! Et préciser un détail, Salma.', 'Yes! And specify a detail, Salma.', 'نعم! وتدقيق تفصيلٍ يا سلمى.'),
    ],
  },
  grammar: {
    examples: ['Il [affirme] avec force cette idée. (affirmer, il affirme)', 'Elle [déclare] publiquement son choix. (déclarer, elle déclare)', 'On [souligne] un point crucial. (souligner, on souligne)'],
    question: ['He affirms forcefully this idea: « Il ___ avec force cette idée. »', 'هو يؤكّد بقوّة هذه الفكرة: « Il ___ avec force cette idée. »'],
    options: [['affirme', 'affirme'], ['affirmes', 'affirmes'], ['affirment', 'affirment']],
    correct: 0,
    explanation: [
      'Les nuances de la parole : eight verbs of saying, each with its own force. Dire = neutral act of stating (just saying something). Affirmer = state with conviction and certainty, you stand behind the words. Déclarer = solemn, formal statement, often public and committing. Soutenir = defend a thesis against opposition, with arguments. Prétendre = claim without proof, sometimes with skepticism implied by the listener. Avancer = propose tentatively, put an idea forward without committing fully. Souligner = emphasize, draw the listener’s attention to one element. Préciser = make precise, add a clarifying detail that removes ambiguity. The right verb depends on the speaker’s certainty, the formality of the context, and the rhetorical aim. Conjugation: dire → je dis, il dit, ils disent; affirmer → il affirme; déclarer → il déclare; prétendre → il prétend; souligner → il souligne; préciser → il précise.',
      'فروق القول: ثمانية أفعال للقول، لكلٍّ قوّته. Dire = فعل محايد للإخبار (مجرّد قول). Affirmer = إثبات بيقين، تقف خلف كلماتك. Déclarer = إعلان رسميّ مهيب، غالبًا علنيّ ومُلزم. Soutenir = الدفاع عن أطروحة ضدّ المعارضة بالحجج. Prétendre = ادّعاء بلا بيّنة، وقد يُفهم المستمع بتحفّظ. Avancer = اقتراح متحفّظ، طرح فكرةٍ دون التزام كامل. Souligner = تأكيد ولفت انتباه المستمع إلى عنصر. Préciser = تدقيق وتوضيح، إضافة تفصيل يُزيل اللبس. واختيار الفعل المناسب يعتمد على يقين المتكلّم ورسميّة السياق والهدف البلاغيّ. والصرف: dire ← je dis، il dit، ils disent؛ وaffirmer ← il affirme؛ وdéclarer ← il déclare؛ وprétendre ← il prétend؛ وsouligner ← il souligne؛ وpréciser ← il précise.',
    ],
  },
  transfer: {
    setting: ['Adam applique les nuances de la parole.', 'Adam applies the nuances of speech.', 'يطبّق آدم فروق القول.'],
    lines: [
      say('karim', 'Il faut souligner un point crucial !', 'One must underline a crucial point!', 'يجب إبراز نقطةٍ حاسمة!'),
      say('rana', 'Parfait ! Et préciser un détail, Adam.', 'Perfect! And specify a detail, Adam.', 'ممتاز! وتدقيق تفصيلٍ يا آدم.'),
    ],
  },
  write: {
    prompt: ['Say "one must underline a crucial point".', 'قل «يجب إبراز نقطةٍ حاسمة».'],
    mustInclude: ['souligner'],
    model: 'Il faut souligner un point crucial.',
    frame: 'Il faut ___ un point crucial.',
  },
  drills: [
    ['Il ___ avec force cette idée.', ['affirme', 'dit', 'avance'], ['Affirms.', 'يؤكّد.']],
    ['On doit ___ un détail important.', ['préciser', 'souligner', 'voir'], ['Specify.', 'يدقّق.']],
    ['Je veux ___ une idée nouvelle.', ['avancer', 'déclarer', 'regarder'], ['Put forward.', 'يطرح.']],
  ],
})

const PENSEE = stage({
  id: 'fr5-ns-pensee',
  emoji: '💭',
  title: ['Les nuances de la pensée', 'The nuances of thought', 'فروق التفكير الدقيقة'],
  setting: ['Karim et Salma comparent huit verbes de l’esprit.', 'Karim and Salma compare eight verbs of the mind.', 'يقارن كريم وسلمى ثمانية أفعال للعقل.'],
  scene: [
    say('bear', 'Salma classe huit verbes de la pensée.', 'Salma classifies eight verbs of thought.', 'تُصنّف سلمى ثمانية أفعال للتفكير.'),
    say('salma', 'Penser à demain reste neutre et libre.', 'To think of tomorrow stays neutral and free.', 'التفكير في الغد يبقى محايدًا حرًّا.'),
    say('bear', 'Réfléchir posément ouvre-t-il la voie ?', 'Does reflecting calmly open the way?', 'هل التفكير الهادئ يفتح الطريق؟'),
    say('salma', 'Méditer en silence apaise-t-il l’âme ?', 'Does meditating in silence soothe the soul?', 'هل التأمّل صامتًا يُهدّئ النفس؟'),
    say('bear', 'Songer à l’avenir nourrit-il l’espoir ?', 'Does musing on the future feed hope?', 'هل التفكير الحالم في المستقبل يُغذّي الرجاء؟'),
    say('duck', 'Bravo ! Il faut cesser de ruminer un échec.', 'Bravo! One must stop ruminating a failure.', 'أحسنت! يجب الكفّ عن اجترار إخفاق.'),
  ],
  phrases: [
    phrase('penser à demain', '🌅', ['To think of tomorrow', 'التفكير في الغد'], ['Neutral, general thought.', 'تفكير محايد عامّ.'], [
      ['Je veux penser à demain sereinement.', 'I want to think of tomorrow serenely.', 'أريد التفكير في الغد بهدوء.'],
      ['Penser à demain aide à préparer.', 'Thinking of tomorrow helps preparation.', 'التفكير في الغد يُعين على الاستعداد.'],
    ]),
    phrase('réfléchir posément', '🧠', ['To reflect calmly', 'التفكير الهادئ'], ['Methodical, organized reflection.', 'تفكير منهجيّ منظّم.'], [
      ['Il faut réfléchir posément avant d’agir.', 'One must reflect calmly before acting.', 'يجب التفكير الهادئ قبل التصرّف.'],
      ['Réfléchir posément ouvre la voie.', 'Reflecting calmly opens the way.', 'التفكير الهادئ يفتح الطريق.'],
    ]),
    phrase('méditer en silence', '🧘', ['To meditate in silence', 'تأمّل صامت'], ['Deep, silent contemplation.', 'تأمّل عميق صامت.'], [
      ['On peut méditer en silence longtemps.', 'One can meditate in silence a long time.', 'يمكن التأمّل صامتًا طويلًا.'],
      ['Méditer en silence apaise l’esprit.', 'Meditating in silence soothes the mind.', 'التأمّل صامتًا يُهدّئ الذهن.'],
    ]),
    phrase('songer à l’avenir', '🌙', ['To muse on the future', 'تأمّل المستقبل'], ['Gentle, dreamy evocation.', 'استحلام لطيف للذكرى.'], [
      ['On peut songer à l’avenir avec espoir.', 'One can muse on the future with hope.', 'يمكن تأمّل المستقبل برجاء.'],
      ['Songer à l’avenir nourrit l’espérance.', 'Musing on the future feeds hope.', 'تأمّل المستقبل يُغذّي الرجاء.'],
    ]),
    phrase('imaginer un monde', '✨', ['To imagine a world', 'تخيّل عالم'], ['Create mental images, invent.', 'خلق صور ذهنيّة وابتكار.'], [
      ['Je veux imaginer un monde meilleur.', 'I want to imagine a better world.', 'أريد تخيّل عالمٍ أفضل.'],
      ['Imaginer un monde meilleur donne de l’espoir.', 'Imagining a better world gives hope.', 'تخيّل عالمٍ أفضل يبعث الرجاء.'],
    ]),
    phrase('concevoir un plan', '📐', ['To devise a plan', 'تصميم خطة'], ['Design, form a coherent idea.', 'تصميم وتكوين فكرةٍ منسجمة.'], [
      ['On doit concevoir un plan clair.', 'One must devise a clear plan.', 'يجب تصميم خطةٍ واضحة.'],
      ['Concevoir un plan structuré aide l’action.', 'Devising a structured plan helps action.', 'تصميم خطةٍ منظّمة يُعين الفعل.'],
    ]),
    phrase('élaborer une théorie', '🏗️', ['To develop a theory', 'بناء نظريّة'], ['Develop systematically, step by step.', 'تطوير منهجيّ خطوةً خطوة.'], [
      ['Je veux élaborer une théorie nouvelle.', 'I want to develop a new theory.', 'أريد بناء نظريّةٍ جديدة.'],
      ['Élaborer une théorie demande du temps.', 'Developing a theory takes time.', 'بناء نظريّةٍ يتطلّب وقتًا.'],
    ]),
    phrase('ruminer un échec', '🔄', ['To ruminate a failure', 'اجترار إخفاق'], ['Obsessively revisit, often a grievance.', 'استرجاع قسريّ غالبًا لخيبة.'], [
      ['Il faut cesser de ruminer un échec.', 'One must stop ruminating a failure.', 'يجب الكفّ عن اجترار إخفاق.'],
      ['Ruminer un échec ancien épuise l’esprit.', 'Ruminating an old failure exhausts the mind.', 'اجترار إخفاقٍ قديم يُنهك الذهن.'],
    ]),
  ],
  talk: {
    setting: ['Salma parle à Nour des nuances de la pensée.', 'Salma talks to Nour about the nuances of thought.', 'تتحدّث سلمى مع نور عن فروق التفكير.'],
    lines: [
      say('salma', 'Nour, il faut réfléchir posément avant d’agir ?', 'Nour, must one reflect calmly before acting?', 'نور، هل يجب التفكير الهادئ قبل التصرّف؟'),
      say('nour', 'Oui ! Et méditer en silence apaise l’esprit, Salma.', 'Yes! And meditating in silence soothes the mind, Salma.', 'نعم! والتأمّل صامتًا يُهدّئ الذهن يا سلمى.'),
    ],
  },
  grammar: {
    examples: ['Je [pense] à demain sereinement. (penser, je pense)', 'Elle [réfléchit] posément. (réfléchir, elle réfléchit)', 'On [médite] en silence. (méditer, on médite)'],
    question: ['She reflects calmly: « Elle ___ posément. »', 'هي تفكّر بهدوء: « Elle ___ posément. »'],
    options: [['réfléchit', 'réfléchit'], ['réfléchis', 'réfléchis'], ['réfléchissent', 'réfléchissent']],
    correct: 0,
    explanation: [
      'Les nuances de la pensée : eight verbs of thinking, graded by intensity and tone. Penser = neutral, general thought, the mind entertains an idea. Réfléchir = methodical, organized reflection, you weigh causes and consequences. Méditer = deep, often silent contemplation, you let an idea mature inside you. Songer = gentle, dreamy evocation, the thought comes softly, often colored by feeling. Imaginer = create mental images, you invent what does not yet exist. Concevoir = design, form a coherent idea, you give shape to a project. Élaborer = develop systematically, build up step by step, a theory, a strategy, an argument. Ruminer = obsessively revisit, often a grievance or failure, the thought turns in circles without progress. The right verb depends on the depth of thought, its emotional tone, and whether it is productive or circular. Conjugation: penser → je pense, il pense; réfléchir → il réfléchit (irregular -ir, like finir); méditer → il médite; songer → il songe; imaginer → il imagine; concevoir → il conçoit (irregular); élaborer → il élabore; ruminer → il rumine.',
      'فروق التفكير: ثمانية أفعال للتفكير، متدرّجة في الشدّة والنبرة. Penser = تفكير محايد عامّ، يحمل الذهن فكرةً. Réfléchir = تفكير منهجيّ منظّم، تُوازن الأسباب والنتائج. Méditer = تأمّل عميق غالبًا صامت، تدع الفكرة تنضج فيك. Songer = استحلام لطيف، يأتي الفكر بنعومة، مُلوَّنًا غالبًا بالشعور. Imaginer = خلق صور ذهنيّة، تبتكر ما لم يوجد. Concevoir = تصميم وتكوين فكرةٍ منسجمة، تُعطي المشروع شكلًا. Élaborer = تطوير منهجيّ خطوةً خطوة، لنظريّةٍ أو استراتيجيّةٍ أو حجّة. Ruminer = استرجاع قسريّ، غالبًا لخيبةٍ أو إخفاق، يدور الفكر دون تقدّم. واختيار الفعل المناسب يعتمد على عمق الفكرة ونبرتها العاطفيّة، وهل هي منتجة أم دائريّة. والصرف: penser ← je pense، il pense؛ وréfléchir ← il réfléchit (مُلحق بـfinir)؛ ومéditer ← il médite؛ وsonger ← il songe؛ وimaginer ← il imagine؛ وconcevoir ← il conçoit (غير منتظم)؛ وélaborer ← il élabore؛ وruminer ← il rumine.',
    ],
  },
  transfer: {
    setting: ['Adam applique les nuances de la pensée.', 'Adam applies the nuances of thought.', 'يطبّق آدم فروق التفكير.'],
    lines: [
      say('karim', 'Il faut réfléchir posément avant d’agir !', 'One must reflect calmly before acting!', 'يجب التفكير الهادئ قبل التصرّف!'),
      say('rana', 'Parfait ! Et méditer en silence apaise l’esprit, Adam.', 'Perfect! And meditating in silence soothes the mind, Adam.', 'ممتاز! والتأمّل صامتًا يُهدّئ الذهن يا آدم.'),
    ],
  },
  write: {
    prompt: ['Say "one must reflect calmly before acting".', 'قل «يجب التفكير الهادئ قبل التصرّف».'],
    mustInclude: ['réfléchir'],
    model: 'Il faut réfléchir posément avant d’agir.',
    frame: 'Il faut ___ posément avant d’agir.',
  },
  drills: [
    ['Il ___ posément avant d’agir.', ['réfléchit', 'pense', 'ruminé'], ['Reflects.', 'يفكّر.']],
    ['Je veux ___ un monde meilleur.', ['imaginer', 'ruminer', 'dire'], ['Imagine.', 'يخيّل.']],
    ['On peut ___ en silence longtemps.', ['méditer', 'songer', 'affirmer'], ['Meditate.', 'يتأمّل.']],
  ],
})

export const FR_NUANCES_SEMANTIQUES = [REGARD, PAROLE, PENSEE]
