function createFormClientSansSiteExistantV2() {
  var form = FormApp.create('FORM A — Client sans site existant');

  form.setDescription(
    [
      'Bonjour et merci de votre intérêt.',
      "Ce formulaire me permet de comprendre votre activité avant de commencer à travailler. Comptez environ 15 minutes — la majorité des questions se répondent en un clic. Plus vos réponses sont précises, plus le résultat sera adapté à ce que vous faites vraiment."
    ].join(' ')
  );

  form.setConfirmationMessage(
    "Merci pour vos réponses. Je reviens vers vous rapidement avec une proposition adaptée à votre situation. Si vous avez des fichiers à partager, je vous enverrai un lien Drive dans mon prochain message."
  );

  form.setProgressBar(true);

  addSection(form, 'SECTION 1 — Votre activité');
  addShortTextQuestion(form, 'Q1 — Votre prénom et nom');
  addShortTextQuestion(
    form,
    'Q2 — Sous quel nom exercez-vous ?',
    'nom de votre cabinet, atelier, activité ou entreprise'
  );
  addLongTextQuestion(form, 'Q3 — En une ou deux phrases, décrivez ce que vous faites.');
  addMultipleChoiceQuestion(form, 'Q4 — Depuis combien de temps exercez-vous ?', [
    "Moins d'un an",
    'Entre 1 et 3 ans',
    'Entre 3 et 10 ans',
    'Plus de 10 ans'
  ]);
  addMultipleChoiceQuestion(
    form,
    'Q5 — Travaillez-vous seul ou en équipe ?',
    ['Seul', 'Avec un ou plusieurs associés', 'Avec des collaborateurs ou salariés'],
    { showOtherOption: true }
  );
  addMultipleChoiceQuestion(form, 'Q6 — Avez-vous un slogan ou une accroche qui résume votre activité ?', [
    'Oui',
    'Non'
  ]);
  addShortTextQuestion(form, 'Si oui — indiquez votre slogan ou accroche');

  addSection(form, 'SECTION 2 — Votre positionnement');
  addLongTextQuestion(
    form,
    "Q7 — Qu'est-ce qui vous différencie de quelqu'un qui fait la même chose que vous ?",
    'votre approche, votre parcours, votre méthode, vos valeurs'
  );
  addCheckboxQuestion(
    form,
    'Q8 — Comment décririez-vous votre façon de travailler ?',
    [
      "À l'écoute et bienveillant",
      'Direct et efficace',
      'Pédagogue et explicatif',
      'Rigoureux et structuré',
      'Créatif et original',
      'Proche et humain'
    ],
    { showOtherOption: true }
  );
  addMultipleChoiceQuestion(form, 'Q9 — Quel ton souhaitez-vous pour votre site ?', [
    'Professionnel et sobre',
    'Chaleureux et accessible',
    'Dynamique et moderne',
    'Sérieux et expert',
    'Décontracté et proche'
  ]);

  addSection(form, "SECTION 3 — L'objectif du site");
  addMultipleChoiceQuestion(form, "Q10 — Quel est l'objectif principal de votre site ?", [
    'Être contacté par de nouveaux clients',
    'Présenter mon activité et rassurer',
    'Remplacer une carte de visite en ligne',
    'Compléter ma présence sur les réseaux sociaux'
  ], { showOtherOption: true });
  addMultipleChoiceQuestion(form, 'Q11 — Que voulez-vous que le visiteur fasse après avoir vu votre site ?', [
    'Me contacter par email',
    "M'appeler directement",
    'Remplir un formulaire de contact',
    'Prendre rendez-vous en ligne'
  ], { showOtherOption: true });
  addMultipleChoiceQuestion(
    form,
    'Q12 — Souhaitez-vous pouvoir modifier vous-même les contenus de votre site une fois en ligne ?',
    [
      "Oui, c'est important pour moi",
      "Non, je préfère vous demander quand j'ai besoin d'un changement",
      'Je ne sais pas encore'
    ],
    { helpText: 'textes, actualités, photos, agenda...' }
  );
  addCheckboxQuestion(form, 'Q13 — Y a-t-il des informations que vous ne souhaitez PAS afficher sur votre site ?', [
    'Mes tarifs',
    'Mon adresse exacte',
    'Mon numéro de téléphone',
    'Mon parcours personnel',
    'Rien de particulier'
  ], { showOtherOption: true });
  addMultipleChoiceQuestion(form, 'Q14 — Avez-vous un délai en tête pour la mise en ligne du site ?', [
    "Pas d'urgence particulière",
    'Dans le mois',
    'Dans les deux mois',
    'Plus tard'
  ], { showOtherOption: true });

  addSection(form, 'SECTION 4 — Votre cible');
  addMultipleChoiceQuestion(form, 'Q15 — À qui vous adressez-vous principalement ?', [
    'Des particuliers uniquement',
    'Des professionnels et entreprises uniquement',
    'Les deux'
  ]);
  addLongTextQuestion(
    form,
    'Q16 — Décrivez votre client idéal en quelques mots.',
    "qui est-il, quel problème cherche-t-il à résoudre, qu'est-ce qui le pousse à vous contacter"
  );

  addSection(form, 'SECTION 5 — Informations pratiques');
  addMultipleChoiceQuestion(form, 'Q17 — Souhaitez-vous afficher vos tarifs sur votre site ?', [
    'Oui, avec les prix exacts',
    'Oui, avec des fourchettes indicatives',
    'Non, je préfère que les gens me contactent pour ça',
    "Je ne suis pas encore décidé"
  ]);
  addLongTextQuestion(form, 'Si oui — entrez vos tarifs ou fourchettes');
  addMultipleChoiceQuestion(form, 'Q18 — Avez-vous des horaires ou disponibilités à afficher ?', [
    'Oui',
    'Non'
  ]);
  addShortTextQuestion(form, 'Si oui — précisez');
  addShortTextQuestion(
    form,
    'Q19 — Quelle adresse email souhaitez-vous afficher sur votre site ?',
    "c'est l'adresse que vos visiteurs verront pour vous contacter"
  );
  addMultipleChoiceQuestion(form, 'Q20 — Souhaitez-vous afficher un numéro de téléphone ?', [
    'Oui',
    'Non'
  ]);
  addShortTextQuestion(form, 'Si oui — lequel');
  addMultipleChoiceQuestion(form, 'Q21 — Souhaitez-vous afficher une adresse physique (cabinet, atelier...) ?', [
    'Oui',
    'Non'
  ]);
  addShortTextQuestion(form, 'Si oui — laquelle');
  addCheckboxQuestion(form, 'Q22 — Avez-vous des réseaux sociaux actifs à relier au site ?', [
    'Instagram',
    'Facebook',
    'LinkedIn',
    'TikTok',
    'YouTube',
    'Aucun'
  ], { showOtherOption: true });
  addShortTextQuestion(form, "Si applicable — indiquez vos noms d'utilisateur ou liens");

  addSection(form, 'SECTION 6 — Identité visuelle');
  addMultipleChoiceQuestion(form, 'Q23 — Avez-vous un logo ?', [
    'Oui, je souhaite le conserver',
    'Oui, mais je suis ouvert à le changer',
    "Non, je n'en ai pas",
    "J'en ai un mais je n'en suis pas satisfait"
  ]);
  addMultipleChoiceQuestion(form, 'Q24 — Avez-vous des couleurs associées à votre activité ?', [
    'Oui, des couleurs définies',
    "J'ai des préférences mais rien de fixé",
    'Non, je fais confiance à votre jugement'
  ]);
  addShortTextQuestion(form, 'Si oui — précisez');
  addMultipleChoiceQuestion(form, 'Q25 — Avez-vous une charte graphique ou des polices déjà définies ?', [
    'Oui, je vais vous l\'envoyer',
    'Non',
    "Je ne sais pas ce que c'est"
  ]);

  addSection(form, 'SECTION 7 — Vos contenus');
  addMultipleChoiceQuestion(form, 'Q26 — Avez-vous des photos professionnelles de vous ou de votre activité ?', [
    'Oui, plusieurs photos de qualité',
    'Oui, quelques-unes seulement',
    "J'ai des photos mais leur qualité est moyenne",
    'Non, pas de photos professionnelles'
  ]);
  addMultipleChoiceQuestion(form, 'Q27 — Avez-vous des textes existants qui décrivent votre activité ?', [
    'Oui, des textes rédigés et prêts',
    "J'ai des ébauches ou des notes",
    'Non, je pars de zéro'
  ]);
  addCheckboxQuestion(form, "Q28 — Avez-vous d'autres éléments utiles à partager ?", [
    'Des témoignages clients',
    'Des certifications ou formations à mentionner',
    'Des documents de présentation existants',
    'Non, rien de particulier'
  ]);
  addMultipleChoiceQuestion(form, 'Q29 — Pour le partage de vos fichiers (logo, photos, documents), un dossier Google Drive partagé vous conviendrait-il ?', [
    'Oui, sans problème',
    'Je préfère envoyer par email',
    "Je n'ai pas de fichiers à partager"
  ]);

  Logger.log('Form ID: ' + form.getId());
  Logger.log('Edit URL: ' + form.getEditUrl());
  Logger.log('Published URL: ' + form.getPublishedUrl());

  return {
    formId: form.getId(),
    editUrl: form.getEditUrl(),
    publishedUrl: form.getPublishedUrl()
  };
}

function addSection(form, title) {
  form.addSectionHeaderItem().setTitle(title);
}

function addShortTextQuestion(form, title, helpText) {
  var item = form.addTextItem().setTitle(title);

  if (helpText) {
    item.setHelpText(helpText);
  }

  return item;
}

function addLongTextQuestion(form, title, helpText) {
  var item = form.addParagraphTextItem().setTitle(title);

  if (helpText) {
    item.setHelpText(helpText);
  }

  return item;
}

function addMultipleChoiceQuestion(form, title, options, config) {
  var item = form.addMultipleChoiceItem().setTitle(title);
  var settings = config || {};

  item.setChoiceValues(options);

  if (settings.helpText) {
    item.setHelpText(settings.helpText);
  }

  if (settings.showOtherOption) {
    item.showOtherOption(true);
  }

  return item;
}

function addCheckboxQuestion(form, title, options, config) {
  var item = form.addCheckboxItem().setTitle(title);
  var settings = config || {};

  item.setChoiceValues(options);

  if (settings.helpText) {
    item.setHelpText(settings.helpText);
  }

  if (settings.showOtherOption) {
    item.showOtherOption(true);
  }

  return item;
}
