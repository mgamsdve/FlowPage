function createFormBClientAvecSiteExistant() {
  var form = FormApp.create('FORM B — Client avec un site existant');

  form.setDescription(
    [
      'Bonjour et merci de votre intérêt.',
      "Ce formulaire me permet de comprendre votre activité et votre site actuel avant de commencer à travailler. Comptez environ 15 minutes — la majorité des questions se répondent en un clic. Plus vos réponses sont précises, plus le résultat sera adapté à ce que vous faites vraiment."
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

  addSection(form, 'SECTION 2 — Votre site actuel');
  addMultipleChoiceQuestion(form, 'Q8 — Êtes-vous propriétaire de votre nom de domaine ?', [
    "Oui, je le possède et j'ai mes accès",
    "Oui, mais je ne sais plus où sont les accès",
    "Non, c'est une agence ou un prestataire qui le gère",
    'Je ne sais pas'
  ]);
  addMultipleChoiceQuestion(form, 'Q9 — Souhaitez-vous garder le même nom de domaine pour le nouveau site ?', [
    'Oui',
    'Non, je veux en changer',
    'Je ne sais pas encore'
  ]);
  addMultipleChoiceQuestion(form, 'Q10 — Savez-vous où est hébergé votre site actuel ?', [
    "Oui, je connais l'hébergeur et j'ai mes accès",
    "Oui, je connais l'hébergeur mais pas mes accès",
    'Non, je ne sais pas',
    "C'est une agence ou un prestataire qui gère ça"
  ]);
  addShortTextQuestion(form, "Si vous le connaissez — précisez l'hébergeur");
  addCheckboxQuestion(form, "Q11 — Qu'est-ce qui ne vous convient plus dans votre site actuel ?", [
    'Le design est vieux ou daté',
    "Le message n'est pas clair",
    'Il est difficile à lire sur mobile',
    "Il y a trop d'informations",
    'Il ne reflète plus ce que je fais',
    'Je reçois peu ou pas de contacts via le site',
    "Je n'arrive pas à le modifier moi-même"
  ], { showOtherOption: true });
  addMultipleChoiceQuestion(form, 'Q12 — Y a-t-il des choses que vous aimez dans votre site actuel et que vous souhaitez conserver ?', [
    'Oui',
    'Non, on repart de zéro'
  ]);
  addShortTextQuestion(form, 'Si oui — indiquez ce que vous souhaitez conserver');
  addMultipleChoiceQuestion(form, 'Q13 — Qui gère votre site actuellement ?', [
    'Moi-même',
    'Une agence ou un prestataire',
    "Personne, il est à l'abandon",
    'Je ne sais pas'
  ]);

  addSection(form, 'SECTION 3 — Votre positionnement');
  addLongTextQuestion(
    form,
    "Q14 — Qu'est-ce qui vous différencie de quelqu'un qui fait la même chose que vous ?",
    'votre approche, votre parcours, votre méthode, vos valeurs'
  );
  addCheckboxQuestion(
    form,
    'Q15 — Comment décririez-vous votre façon de travailler ?',
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
  addMultipleChoiceQuestion(form, 'Q16 — Quel ton souhaitez-vous pour votre nouveau site ?', [
    'Professionnel et sobre',
    'Chaleureux et accessible',
    'Dynamique et moderne',
    'Sérieux et expert',
    'Décontracté et proche'
  ]);

  addSection(form, 'SECTION 4 — L\'objectif du nouveau site');
  addMultipleChoiceQuestion(form, 'Q17 — Quel est l\'objectif principal de votre nouveau site ?', [
    'Être contacté par de nouveaux clients',
    'Présenter mon activité et rassurer',
    'Remplacer une carte de visite en ligne',
    'Compléter ma présence sur les réseaux sociaux'
  ], { showOtherOption: true });
  addMultipleChoiceQuestion(form, 'Q18 — Que voulez-vous que le visiteur fasse après avoir vu votre site ?', [
    'Me contacter par email',
    "M'appeler directement",
    'Remplir un formulaire de contact',
    'Prendre rendez-vous en ligne'
  ], { showOtherOption: true });
  addMultipleChoiceQuestion(
    form,
    'Q19 — Souhaitez-vous pouvoir modifier vous-même les contenus de votre site une fois en ligne ?',
    [
      "Oui, c'est important pour moi",
      "Non, je préfère vous demander quand j'ai besoin d'un changement",
      'Je ne sais pas encore'
    ],
    { helpText: 'textes, actualités, photos, agenda...' }
  );
  addCheckboxQuestion(form, 'Q20 — Y a-t-il des informations que vous ne souhaitez PAS afficher sur votre site ?', [
    'Mes tarifs',
    'Mon adresse exacte',
    'Mon numéro de téléphone',
    'Mon parcours personnel',
    'Rien de particulier'
  ], { showOtherOption: true });
  addMultipleChoiceQuestion(form, 'Q21 — Avez-vous un délai en tête pour la mise en ligne du nouveau site ?', [
    "Pas d'urgence particulière",
    'Dans le mois',
    'Dans les deux mois',
    'Plus tard'
  ], { showOtherOption: true });

  addSection(form, 'SECTION 5 — Votre cible');
  addMultipleChoiceQuestion(form, 'Q22 — À qui vous adressez-vous principalement ?', [
    'Des particuliers uniquement',
    'Des professionnels et entreprises uniquement',
    'Les deux'
  ]);
  addLongTextQuestion(
    form,
    'Q23 — Décrivez votre client idéal en quelques mots.',
    "qui est-il, quel problème cherche-t-il à résoudre, qu'est-ce qui le pousse à vous contacter"
  );

  addSection(form, 'SECTION 6 — Informations pratiques');
  addMultipleChoiceQuestion(form, 'Q24 — Souhaitez-vous afficher vos tarifs sur votre site ?', [
    'Oui, avec les prix exacts',
    'Oui, avec des fourchettes indicatives',
    'Non, je préfère que les gens me contactent pour ça',
    "Je ne suis pas encore décidé"
  ]);
  addLongTextQuestion(form, 'Si oui — entrez vos tarifs ou fourchettes');
  addMultipleChoiceQuestion(form, 'Q25 — Avez-vous des horaires ou disponibilités à afficher ?', [
    'Oui',
    'Non'
  ]);
  addShortTextQuestion(form, 'Si oui — précisez');
  addShortTextQuestion(
    form,
    'Q26 — Quelle adresse email souhaitez-vous afficher sur votre site ?',
    "c'est l'adresse que vos visiteurs verront pour vous contacter"
  );
  addMultipleChoiceQuestion(form, 'Q27 — Souhaitez-vous afficher un numéro de téléphone ?', [
    'Oui',
    'Non'
  ]);
  addShortTextQuestion(form, 'Si oui — lequel');
  addMultipleChoiceQuestion(form, 'Q28 — Souhaitez-vous afficher une adresse physique (cabinet, atelier...) ?', [
    'Oui',
    'Non'
  ]);
  addShortTextQuestion(form, 'Si oui — laquelle');
  addCheckboxQuestion(form, 'Q29 — Avez-vous des réseaux sociaux actifs à relier au site ?', [
    'Instagram',
    'Facebook',
    'LinkedIn',
    'TikTok',
    'YouTube',
    'Aucun'
  ], { showOtherOption: true });
  addShortTextQuestion(form, "Si applicable — indiquez vos noms d'utilisateur ou liens");

  addSection(form, 'SECTION 7 — Identité visuelle');
  addMultipleChoiceQuestion(form, 'Q30 — Avez-vous un logo ?', [
    'Oui, je souhaite le conserver',
    'Oui, mais je suis ouvert à le changer',
    "Non, je n'en ai pas",
    "J'en ai un mais je n'en suis pas satisfait"
  ]);
  addMultipleChoiceQuestion(form, 'Q31 — Avez-vous des couleurs définies à respecter ?', [
    'Oui, des couleurs définies à conserver',
    "J'ai des préférences mais rien de fixé",
    'Non, je fais confiance à votre jugement'
  ]);
  addShortTextQuestion(form, 'Si oui — précisez');
  addMultipleChoiceQuestion(form, 'Q32 — Avez-vous une charte graphique existante ?', [
    'Oui, je vais vous l\'envoyer',
    'Non',
    "Je ne sais pas ce que c'est"
  ]);

  addSection(form, 'SECTION 8 — Vos contenus');
  addMultipleChoiceQuestion(form, 'Q33 — Les textes de votre site actuel peuvent-ils être réutilisés ?', [
    'Oui, ils sont bons tels quels',
    "Oui, mais ils ont besoin d'être retravaillés",
    'Non, on repart de zéro',
    'Je ne suis pas sûr'
  ]);
  addMultipleChoiceQuestion(form, 'Q34 — Les photos de votre site actuel peuvent-elles être réutilisées ?', [
    'Oui, elles sont de qualité',
    "Certaines oui, d'autres non",
    'Non, elles sont trop vieilles ou de mauvaise qualité',
    "Il n'y a pas de photos sur mon site actuel"
  ]);
  addCheckboxQuestion(form, "Q35 — Avez-vous de nouveaux contenus à ajouter que votre site actuel n'a pas ?", [
    'De nouvelles photos',
    'De nouveaux textes ou descriptions',
    'Des témoignages clients',
    'Des certifications ou formations récentes',
    'Non, rien de nouveau'
  ], { showOtherOption: true });
  addMultipleChoiceQuestion(form, 'Q36 — Pour le partage de vos fichiers (logo, photos, documents), un dossier Google Drive partagé vous conviendrait-il ?', [
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
