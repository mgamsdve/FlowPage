function createFormBClientAvecSiteExistant() {
  var form = FormApp.create('FORM B — Client avec un site existant');

  form.setDescription(
    [
      'Bonjour et merci de votre intérêt.',
      "Ce formulaire me permet de comprendre votre activité avant de commencer à travailler. La plupart des questions se répondent en un seul clic — comptez environ 10 minutes au total. Plus vos réponses sont précises, plus le résultat sera adapté à ce que vous faites vraiment."
    ].join('\n\n')
  );

  form.setConfirmationMessage(
    "Merci pour vos réponses. Je reviens vers vous rapidement pour vous présenter la suite. Si vous avez des fichiers à partager, je vous enverrai un lien Drive dans mon prochain message."
  );

  form.setProgressBar(true);

  addSection(form, 'SECTION 1 — Votre activité');
  addShortTextQuestion(form, 'Q0 — Votre prénom et nom');
  addShortTextQuestion(form, "Q1 — Quel est le nom de votre activité ou entreprise ?");
  addLongTextQuestion(form, 'Q2 — En une ou deux phrases, décrivez ce que vous faites.');
  addMultipleChoiceQuestion(form, 'Q3 — Depuis combien de temps exercez-vous ?', [
    "Moins d'un an",
    'Entre 1 et 3 ans',
    'Entre 3 et 10 ans',
    'Plus de 10 ans'
  ]);
  addMultipleChoiceQuestion(
    form,
    'Q4 — Travaillez-vous seul ou en équipe ?',
    ['Seul', 'Avec des associés', 'Avec des collaborateurs ou salariés'],
    { showOtherOption: true }
  );
  addMultipleChoiceQuestion(form, 'Q5 — Avez-vous un slogan ou une accroche qui résume votre activité ?', [
    'Oui',
    'Non'
  ]);
  addShortTextQuestion(form, 'Si oui — indiquez votre slogan ou accroche');

  addSection(form, 'SECTION 2 — Votre site actuel');
  addCheckboxQuestion(form, "Q6 — Qu'est-ce qui ne vous convient plus dans votre site actuel ?", [
    'Le design est vieux ou daté',
    "Le message n'est pas clair",
    'Il est difficile à lire sur mobile',
    "Il y a trop d'informations",
    'Il ne reflète plus ce que je fais',
    'Je reçois peu ou pas de contacts via le site',
    "Je n'arrive pas à le modifier moi-même"
  ], { showOtherOption: true });
  addMultipleChoiceQuestion(form, 'Q7 — Y a-t-il des choses que vous aimez dans votre site actuel et que vous souhaitez conserver ?', [
    'Oui',
    'Non, on repart de zéro'
  ]);
  addShortTextQuestion(form, 'Si oui — indiquez ce que vous souhaitez conserver');
  addMultipleChoiceQuestion(form, 'Q8 — Qui gère votre site actuellement ?', [
    'Moi-même',
    'Une agence ou un prestataire',
    "Personne, il est à l'abandon",
    'Je ne sais pas'
  ]);

  addSection(form, 'SECTION 3 — Votre positionnement');
  addLongTextQuestion(
    form,
    "Q9 — Qu'est-ce qui vous différencie de quelqu'un qui fait la même chose que vous ?",
    'votre approche, votre parcours, votre méthode, vos valeurs'
  );
  addCheckboxQuestion(
    form,
    'Q10 — Comment décririez-vous votre façon de travailler ?',
    [
      "À l'écoute et dans la douceur",
      'Direct et efficace',
      'Pédagogue et explicatif',
      'Rigoureux et structuré',
      'Créatif et original',
      'Proche et humain'
    ],
    { showOtherOption: true }
  );
  addMultipleChoiceQuestion(form, 'Q11 — Quel ton souhaitez-vous pour votre nouveau site ?', [
    'Professionnel et sobre',
    'Chaleureux et accessible',
    'Dynamique et moderne',
    'Sérieux et expert',
    'Décontracté et proche'
  ]);

  addSection(form, "SECTION 4 — L'objectif du nouveau site");
  addMultipleChoiceQuestion(form, "Q12 — Quel est l'objectif principal de votre site ?", [
    'Être contacté par de nouveaux clients',
    'Présenter mon activité et rassurer',
    'Remplacer une carte de visite en ligne',
    'Compléter ma présence sur les réseaux sociaux'
  ], { showOtherOption: true });
  addMultipleChoiceQuestion(form, 'Q13 — Que voulez-vous que le visiteur fasse après avoir vu votre site ?', [
    'Me contacter par email',
    "M'appeler directement",
    'Remplir un formulaire de contact',
    'Prendre rendez-vous en ligne'
  ], { showOtherOption: true });
  addCheckboxQuestion(form, 'Q14 — Y a-t-il des informations que vous ne souhaitez PAS afficher ?', [
    'Mes tarifs',
    'Mon adresse exacte',
    'Mon numéro de téléphone',
    'Mon parcours personnel',
    'Rien de particulier'
  ], { showOtherOption: true });

  addSection(form, 'SECTION 5 — Votre cible');
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

  addSection(form, 'SECTION 6 — Informations pratiques');
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
    "c'est l'adresse que vos visiteurs verront et utiliseront pour vous contacter"
  );
  addMultipleChoiceQuestion(form, 'Q20 — Souhaitez-vous afficher un numéro de téléphone ?', [
    'Oui',
    'Non'
  ]);
  addShortTextQuestion(form, 'Si oui — lequel');
  addMultipleChoiceQuestion(form, 'Q21 — Souhaitez-vous afficher votre adresse physique ?', [
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
  addShortTextQuestion(form, "Si oui — indiquez vos noms d'utilisateur");

  addSection(form, 'SECTION 7 — Identité visuelle');
  addMultipleChoiceQuestion(form, 'Q23 — Avez-vous un logo ?', [
    'Oui, je souhaite le conserver',
    'Oui, mais je suis ouvert à le changer',
    "Non, je n'en ai pas",
    'Je ne suis pas satisfait du mien'
  ]);
  addMultipleChoiceQuestion(form, 'Q24 — Avez-vous des couleurs définies à respecter ?', [
    'Oui, des couleurs définies à conserver',
    "J'ai des préférences mais rien de fixé",
    'Non, je fais confiance à votre jugement'
  ]);
  addShortTextQuestion(form, 'Si oui — précisez');
  addMultipleChoiceQuestion(form, 'Q25 — Avez-vous une charte graphique existante ?', [
    'Oui, je vais vous l\'envoyer',
    'Non',
    "Je ne sais pas ce que c'est"
  ]);

  addSection(form, 'SECTION 8 — Vos contenus');
  addMultipleChoiceQuestion(form, 'Q26 — Les textes de votre site actuel peuvent-ils être réutilisés ?', [
    'Oui, ils sont bons tels quels',
    "Oui, mais ils ont besoin d'être retravaillés",
    'Non, on repart de zéro',
    'Je ne suis pas sûr'
  ]);
  addMultipleChoiceQuestion(form, 'Q27 — Les photos de votre site actuel peuvent-elles être réutilisées ?', [
    'Oui, elles sont de qualité',
    "Certaines oui, d'autres non",
    'Non, elles sont trop vieilles ou de mauvaise qualité',
    "Il n'y a pas de photos sur mon site actuel"
  ]);
  addCheckboxQuestion(form, "Q28 — Avez-vous de nouveaux contenus à ajouter que votre site actuel n'a pas ?", [
    'De nouvelles photos',
    'De nouveaux textes ou descriptions',
    'Des témoignages clients',
    'Des certifications ou formations récentes',
    'Non, rien de nouveau'
  ], { showOtherOption: true });
  addMultipleChoiceQuestion(form, 'Q29 — Pour le partage de vos fichiers, un dossier Google Drive partagé vous conviendrait-il ?', [
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
