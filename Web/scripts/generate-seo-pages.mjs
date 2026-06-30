import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = resolve(__dirname, '..')
const today = '2026-06-29'
const siteUrl = 'https://flowpage.tech'
const email = 'valerie@flowpage.tech'

const corePages = [
  { slug: '', priority: '1.0', changefreq: 'weekly' },
  { slug: 'services', priority: '0.9', changefreq: 'monthly' },
  { slug: 'a-propos', priority: '0.7', changefreq: 'monthly' },
  { slug: 'contact', priority: '0.8', changefreq: 'monthly' },
  { slug: 'mentions-legales', priority: '0.2', changefreq: 'yearly' },
  { slug: 'confidentialite', priority: '0.2', changefreq: 'yearly' },
  { slug: 'cgv', priority: '0.2', changefreq: 'yearly' },
]

const localPages = [
  {
    slug: 'agence-web-belgique',
    keyword: 'Agence web en Belgique',
    title: 'Agence web en Belgique | Sites clairs pour indépendants',
    description:
      'Flowpage est une agence web en Belgique pour indépendants et petites entreprises : création de sites vitrines clairs, lisibles et pensés pour le contact.',
    h1: 'Agence web en Belgique pour sites clairs et crédibles',
    area: 'Belgique',
    nearby: ['Namur', 'Bruxelles', 'Woluwe', 'Wallonie', 'Brabant wallon'],
    intent:
      'Cette page s’adresse aux professionnels belges qui cherchent une agence web capable de transformer une activité parfois difficile à expliquer en site clair, lisible et rassurant.',
    localAngle:
      'En Belgique, beaucoup d’indépendants travaillent avec une clientèle locale, régionale ou bilingue. Le site doit donc être compréhensible rapidement, inspirer confiance et donner des informations concrètes : services, zone desservie, manière de travailler, contact.',
  },
  {
    slug: 'creation-site-web-belgique',
    keyword: 'Création de site web en Belgique',
    title: 'Création de site web en Belgique | Flowpage',
    description:
      'Création de site web en Belgique pour indépendants, artisans, consultants et petites entreprises. Site vitrine clair, mobile et facile à contacter.',
    h1: 'Création de site web en Belgique pour indépendants',
    area: 'Belgique',
    nearby: ['Namur', 'Bruxelles', 'Woluwe', 'Wallonie', 'Brabant wallon'],
    intent:
      'Vous cherchez à créer un site web professionnel en Belgique, sans partir dans un projet lourd ou incompréhensible. Flowpage conçoit des sites sobres, structurés et utiles.',
    localAngle:
      'Le site est pensé pour des visiteurs belges qui veulent comprendre vite : où vous travaillez, ce que vous proposez, pour qui, à quel niveau de service, et comment prendre contact sans friction.',
  },
  {
    slug: 'agence-web-namur',
    keyword: 'Agence web Namur',
    title: 'Agence web Namur | Création de sites clairs',
    description:
      'Agence web pour Namur et la Wallonie : Flowpage crée des sites vitrines clairs pour indépendants, artisans, thérapeutes et petites entreprises.',
    h1: 'Agence web pour Namur et les indépendants wallons',
    area: 'Namur',
    nearby: ['Jambes', 'Belgrade', 'Wépion', 'Gembloux', 'Wallonie'],
    intent:
      'Un professionnel à Namur n’a pas toujours besoin d’un site complexe. Il a surtout besoin d’une présence web claire, crédible et facile à trouver.',
    localAngle:
      'À Namur, les recherches locales sont souvent très concrètes : un service, une zone, une personne fiable. Le site doit répondre à ces questions dès les premières secondes.',
  },
  {
    slug: 'creation-site-web-namur',
    keyword: 'Création site web Namur',
    title: 'Création site web Namur | Sites vitrines pour pros',
    description:
      'Création de site web à Namur pour indépendants, artisans, consultants et professions de service. Une structure claire, mobile et orientée contact.',
    h1: 'Création de site web à Namur, simple et professionnelle',
    area: 'Namur',
    nearby: ['Jambes', 'Wépion', 'Gembloux', 'Andenne', 'Wallonie'],
    intent:
      'Cette page répond aux professionnels namurois qui veulent un site vitrine clair pour présenter leur activité sans jargon technique.',
    localAngle:
      'Un site local efficace à Namur doit aider le visiteur à vérifier rapidement la pertinence : métier, zone de déplacement, type de client, services proposés et sérieux de l’approche.',
  },
  {
    slug: 'agence-web-woluwe',
    keyword: 'Agence web Woluwe',
    title: 'Agence web Woluwe | Site web clair et local',
    description:
      'Agence web pour Woluwe-Saint-Lambert et Woluwe-Saint-Pierre. Flowpage crée des sites vitrines clairs pour indépendants et petites entreprises.',
    h1: 'Agence web pour Woluwe, claire et proche du terrain',
    area: 'Woluwe',
    nearby: ['Woluwe-Saint-Lambert', 'Woluwe-Saint-Pierre', 'Auderghem', 'Etterbeek', 'Bruxelles'],
    intent:
      'À Woluwe, la concurrence locale peut être forte. Un site web doit montrer rapidement votre sérieux, votre spécialité et la façon de vous contacter.',
    localAngle:
      'Flowpage aide les professionnels de Woluwe à clarifier leur message : thérapeutes, consultants, métiers de service, artisans et petites structures qui veulent une présence en ligne propre.',
  },
  {
    slug: 'creation-site-web-woluwe',
    keyword: 'Création site web Woluwe',
    title: 'Création site web Woluwe | Flowpage',
    description:
      'Création de site web à Woluwe pour indépendants et petites entreprises. Site vitrine lisible, responsive, crédible et orienté prise de contact.',
    h1: 'Création de site web à Woluwe pour être compris vite',
    area: 'Woluwe',
    nearby: ['Woluwe-Saint-Lambert', 'Woluwe-Saint-Pierre', 'Bruxelles', 'Etterbeek', 'Auderghem'],
    intent:
      'Vous avez besoin d’un site web à Woluwe qui explique clairement votre activité, sans surcharge ni discours marketing artificiel.',
    localAngle:
      'Un site pensé pour Woluwe doit être précis et rassurant : activité, services, public cible, coordonnées, formulaire et informations utiles pour une clientèle bruxelloise locale.',
  },
  {
    slug: 'agence-web-bruxelles',
    keyword: 'Agence web Bruxelles',
    title: 'Agence web Bruxelles | Sites clairs pour indépendants',
    description:
      'Agence web pour Bruxelles : création de sites vitrines clairs, professionnels et lisibles pour indépendants, consultants, artisans et petites entreprises.',
    h1: 'Agence web à Bruxelles pour une présence claire',
    area: 'Bruxelles',
    nearby: ['Woluwe', 'Etterbeek', 'Ixelles', 'Auderghem', 'Uccle'],
    intent:
      'À Bruxelles, être visible ne suffit pas. Votre site doit expliquer votre activité avec précision et inspirer confiance dans un environnement concurrentiel.',
    localAngle:
      'Flowpage privilégie les sites sobres, mobiles et orientés compréhension : utile pour les professions de service, les indépendants et les petites entreprises bruxelloises.',
  },
  {
    slug: 'creation-site-web-bruxelles',
    keyword: 'Création site web Bruxelles',
    title: 'Création site web Bruxelles | Site vitrine clair',
    description:
      'Création de site web à Bruxelles pour indépendants et petites entreprises. Flowpage structure votre message, vos pages et votre contact.',
    h1: 'Création de site web à Bruxelles pour professionnels',
    area: 'Bruxelles',
    nearby: ['Woluwe', 'Ixelles', 'Etterbeek', 'Auderghem', 'Brabant wallon'],
    intent:
      'Cette page aide les professionnels bruxellois qui veulent un site vitrine clair, rapide à comprendre et adapté aux usages mobiles.',
    localAngle:
      'Le travail consiste à clarifier l’offre, organiser les pages, rendre le site crédible et faciliter la prise de contact pour des visiteurs souvent pressés.',
  },
]

const servicePages = [
  {
    slug: 'creation-site-vitrine',
    keyword: 'Création site vitrine',
    title: 'Création de site vitrine | Site clair et professionnel',
    description:
      'Création de site vitrine pour indépendants et petites entreprises en Belgique. Présentez vos services avec clarté, crédibilité et simplicité.',
    h1: 'Création de site vitrine clair et professionnel',
    audience: 'indépendants, artisans, consultants et petites entreprises',
    sections: [
      ['Un site vitrine doit expliquer, pas décorer', 'Un bon site vitrine présente votre activité, vos services, votre zone d’intervention et votre manière de travailler. Flowpage commence par clarifier ce que le visiteur doit comprendre avant de penser au design.'],
      ['Une structure pensée pour le contact', 'Les pages sont organisées pour guider naturellement vers une demande : accueil, services, à propos, contact, questions fréquentes ou pages locales selon le besoin.'],
      ['Un format adapté à la Belgique locale', 'Le site peut intégrer vos zones de service, vos villes clés, vos spécialités et les informations utiles pour rassurer une clientèle belge.'],
    ],
  },
  {
    slug: 'creation-site-web-independant',
    keyword: 'Création site web indépendant',
    title: 'Création site web indépendant | Flowpage Belgique',
    description:
      'Création de site web pour indépendant en Belgique : une présence claire, crédible, mobile et facile à mettre à jour selon votre activité.',
    h1: 'Création de site web pour indépendant',
    audience: 'freelances, consultants, thérapeutes, artisans et prestataires de service',
    sections: [
      ['Un site qui rend votre activité compréhensible', 'Beaucoup d’indépendants savent très bien travailler, mais peinent à expliquer leur offre en ligne. Flowpage structure votre message pour que le visiteur comprenne vite qui vous aidez et comment.'],
      ['Un budget maîtrisé et un périmètre clair', 'Le projet reste proportionné : pas de fonctionnalités inutiles, pas de promesse floue, pas de complexité qui vous enferme.'],
      ['Une base saine pour le référencement local', 'Le site peut intégrer des pages ville, des pages métier, des textes clairs et un maillage interne utile pour améliorer votre visibilité en Belgique.'],
    ],
  },
  {
    slug: 'refonte-site-web',
    keyword: 'Refonte site web',
    title: 'Refonte de site web | Clarifier un site existant',
    description:
      'Refonte de site web pour améliorer la clarté, la structure, le mobile et la crédibilité. Flowpage restructure sans tout compliquer.',
    h1: 'Refonte de site web pour redevenir clair',
    audience: 'professionnels dont le site existe déjà mais ne représente plus correctement leur activité',
    sections: [
      ['Votre site existe, mais il ne travaille pas assez pour vous', 'Une refonte n’est pas toujours une reconstruction complète. Souvent, le vrai besoin est de clarifier l’offre, revoir la hiérarchie, simplifier les pages et rendre le contact plus évident.'],
      ['Priorité au message et à la structure', 'Flowpage analyse ce qui doit rester, ce qui doit être supprimé et ce qui manque pour que le site soit compris rapidement.'],
      ['Une refonte utile pour le SEO', 'La refonte peut corriger les titres, descriptions, H1, liens internes, pages locales et contenus trop fins qui empêchent Google de comprendre votre activité.'],
    ],
  },
  {
    slug: 'site-web-artisan',
    keyword: 'Site web artisan',
    title: 'Site web artisan | Création de site clair en Belgique',
    description:
      'Création de site web pour artisan en Belgique : présentez vos services, votre zone d’intervention et facilitez les demandes de devis.',
    h1: 'Site web pour artisan local',
    audience: 'artisans, métiers du bâtiment, services locaux et petites entreprises terrain',
    sections: [
      ['Un site qui montre ce que vous faites concrètement', 'Un artisan a besoin d’un site direct : services, zone d’intervention, types de travaux, photos si disponibles, formulaire de contact et éléments de confiance.'],
      ['Pensé pour les recherches locales', 'Les visiteurs cherchent souvent un métier avec une ville ou une commune. Le site doit donc mentionner clairement les zones desservies et créer des pages adaptées quand c’est pertinent.'],
      ['Simple à gérer', 'Le site reste sobre et robuste, avec un contenu organisé pour éviter de devoir expliquer dix fois la même chose par téléphone.'],
    ],
  },
  {
    slug: 'site-web-therapeute',
    keyword: 'Site web thérapeute',
    title: 'Site web thérapeute | Présence claire et rassurante',
    description:
      'Création de site web pour thérapeute, coach ou praticien en Belgique. Un site sobre, humain, lisible et orienté confiance.',
    h1: 'Site web pour thérapeute, coach ou praticien',
    audience: 'thérapeutes, praticiens du bien-être, coachs et accompagnants',
    sections: [
      ['Un site qui rassure avant de convaincre', 'Pour un thérapeute, le ton compte autant que la structure. Le visiteur doit comprendre l’approche, le cadre, les publics accompagnés et la manière de prendre rendez-vous.'],
      ['Des mots simples pour une activité sensible', 'Flowpage évite le jargon et les promesses excessives. Le site explique clairement ce qui est proposé, pour qui, et dans quelles limites.'],
      ['Une présence locale crédible', 'Les pages peuvent préciser votre cabinet, les communes proches, les modalités de rendez-vous et les questions fréquentes utiles à vos futurs patients ou clients.'],
    ],
  },
  {
    slug: 'site-web-consultant',
    keyword: 'Site web consultant',
    title: 'Site web consultant | Site professionnel clair',
    description:
      'Création de site web pour consultant en Belgique : positionnement clair, offres lisibles, crédibilité et prise de contact simplifiée.',
    h1: 'Site web pour consultant indépendant',
    audience: 'consultants, experts, freelances B2B et indépendants de conseil',
    sections: [
      ['Clarifier une expertise parfois abstraite', 'Un consultant vend souvent une méthode, une expérience et une capacité de diagnostic. Le site doit transformer cela en messages concrets et faciles à évaluer.'],
      ['Des offres lisibles', 'Flowpage aide à distinguer vos services, vos publics, vos cas d’usage et votre manière de collaborer afin d’éviter une page trop vague.'],
      ['Une crédibilité professionnelle', 'Le site met en avant votre sérieux par la structure, le ton, les preuves disponibles et un parcours de contact sans friction.'],
    ],
  },
]

const guidePages = [
  {
    slug: 'prix-site-web-belgique',
    title: 'Combien coûte un site web en Belgique ?',
    description:
      'Repères de prix pour créer un site web en Belgique : site vitrine, site structuré, CMS, domaine, hébergement et maintenance.',
    h1: 'Combien coûte un site web en Belgique ?',
    category: 'Guide belge',
    paragraphs: [
      'Le prix d’un site web en Belgique dépend surtout du niveau de clarté à construire, du nombre de pages, du contenu à organiser, du besoin de mise à jour et de l’accompagnement attendu.',
      'Pour un indépendant ou une petite entreprise, le plus important est d’éviter deux extrêmes : un site trop pauvre qui ne rassure pas, ou un projet trop lourd qui coûte cher sans améliorer la compréhension.',
      'Chez Flowpage, les formats restent volontairement lisibles : un site essentiel pour une activité simple, un site structuré pour plusieurs services, puis un site autonome avec CMS si les contenus changent régulièrement.',
      'Il faut aussi prévoir la suite : nom de domaine, hébergement, configuration DNS, petites corrections et suivi technique. Ces éléments ne sont pas visibles sur la maquette, mais ils déterminent la stabilité du site dans le temps.',
    ],
  },
  {
    slug: 'agence-web-ou-freelance-belgique',
    title: 'Agence web ou freelance en Belgique : que choisir ?',
    description:
      'Agence web ou freelance en Belgique : comment choisir selon votre budget, votre besoin, la clarté du projet et le suivi attendu.',
    h1: 'Agence web ou freelance en Belgique : que choisir ?',
    category: 'Conseil',
    paragraphs: [
      'Le bon choix dépend rarement du statut du prestataire. Il dépend surtout de votre besoin réel, de la clarté du périmètre et de la capacité à transformer votre activité en site compréhensible.',
      'Une grande agence peut être utile pour un projet complexe avec plusieurs métiers, beaucoup d’intégrations et un budget élevé. Pour un indépendant, un artisan ou une petite structure, ce niveau de dispositif est parfois disproportionné.',
      'Un freelance ou une petite agence indépendante peut offrir un accompagnement plus direct, plus simple et plus proche du terrain, à condition que la méthode soit claire.',
      'Flowpage se situe dans cette logique : un interlocuteur proche, une structure légère, une priorité donnée au message, au design utile, au mobile et à la crédibilité.',
    ],
  },
  {
    slug: 'site-web-independant-namur',
    title: 'Créer un site web pour indépendant à Namur',
    description:
      'Conseils pour créer un site web d’indépendant à Namur : structure, pages essentielles, zone locale, crédibilité et contact.',
    h1: 'Créer un site web pour indépendant à Namur',
    category: 'Namur',
    paragraphs: [
      'Un indépendant à Namur a besoin d’un site qui explique vite son activité et sa zone de travail. Le visiteur ne doit pas deviner ce qui est proposé, où le service est disponible ni comment prendre contact.',
      'Les pages essentielles sont souvent simples : accueil, services, à propos, contact, parfois une page par service ou une page locale si les recherches géographiques sont importantes.',
      'Le contenu doit mentionner naturellement Namur et les communes pertinentes autour de votre activité. L’objectif n’est pas de répéter une ville partout, mais d’aider Google et les visiteurs à comprendre votre ancrage.',
      'Le design doit rester mobile, lisible et rassurant. Beaucoup de visiteurs arrivent depuis un téléphone, comparent rapidement plusieurs prestataires, puis choisissent celui qui paraît le plus clair.',
    ],
  },
  {
    slug: 'referencement-local-belgique',
    title: 'Référencement local en Belgique pour indépendants',
    description:
      'Bases du référencement local en Belgique : site clair, pages locales, Google Business Profile, avis, annuaires et cohérence des informations.',
    h1: 'Référencement local en Belgique : les bases utiles',
    category: 'SEO local',
    paragraphs: [
      'Le référencement local repose sur trois piliers : un site qui explique clairement votre activité, une présence locale cohérente sur Google Business Profile, et des signaux externes comme les avis, annuaires et liens locaux.',
      'Sur le site, il faut des pages utiles qui parlent réellement de vos services et de vos zones. Une page locale fonctionne mieux lorsqu’elle répond à une intention précise : agence web Namur, création site web Woluwe, site web artisan Belgique.',
      'Hors du site, la cohérence est essentielle : même nom, même email, même téléphone, même URL, mêmes zones desservies. Les avis clients doivent aussi décrire le travail effectué avec des mots naturels.',
      'Le SEO local prend du temps. L’objectif n’est pas de forcer Google, mais d’accumuler des preuves claires : contenu utile, structure propre, données locales, maillage interne, citations et recommandations.',
    ],
  },
]

const serviceLinks = servicePages.map((page) => ({ href: `/${page.slug}`, label: page.keyword }))
const localLinks = localPages.map((page) => ({ href: `/${page.slug}`, label: page.keyword }))
const guideLinks = guidePages.map((page) => ({ href: `/${page.slug}`, label: page.h1 }))

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

const urlFor = (slug) => `${siteUrl}/${slug}`.replace(/\/$/, '/')

const jsonLd = (data) =>
  `<script type="application/ld+json">${JSON.stringify(data, null, 2)}</script>`

const areaPhrase = (area) => (area === 'Belgique' ? 'en Belgique' : `à ${area}`)

const googleTag = `        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-GEZRH8CH6X"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-GEZRH8CH6X');
        </script>`

const baseBusinessSchema = {
  '@type': ['ProfessionalService', 'LocalBusiness'],
  '@id': `${siteUrl}/#service`,
  name: 'Flowpage',
  url: siteUrl,
  email,
  image: `${siteUrl}/assets/img/mockupV2.png`,
  logo: `${siteUrl}/favicon.svg`,
  description:
    'Agence web en Belgique spécialisée dans la création de sites web clairs, sites vitrines, refontes simples et présences web structurées pour indépendants et petites entreprises.',
  areaServed: [
    { '@type': 'Country', name: 'Belgique' },
    { '@type': 'AdministrativeArea', name: 'Wallonie' },
    { '@type': 'City', name: 'Namur' },
    { '@type': 'City', name: 'Bruxelles' },
    { '@type': 'Place', name: 'Woluwe-Saint-Lambert' },
    { '@type': 'Place', name: 'Woluwe-Saint-Pierre' },
    { '@type': 'AdministrativeArea', name: 'Brabant wallon' },
  ],
  serviceType: [
    'Création de site web',
    'Création de site vitrine',
    'Refonte de site web',
    'Création de landing page',
    'Référencement local',
    'Maintenance de site web',
  ],
  sameAs: ['https://www.instagram.com/flowpage.tech/'],
}

const head = ({ title, description, slug, schema }) => {
  const canonical = urlFor(slug)
  return `    <head>
${googleTag}
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${escapeHtml(description)}" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="theme-color" content="#FDFCF8" />
        <meta name="google-site-verification" content="mg-duFqkJC9FdYQIJ7vQTpP4ASnGtDrlgYe-Ix4yCwM" />
        <link rel="icon" href="/favicon.svg" sizes="any" />
        <link rel="canonical" href="${canonical}" />
        <title>${escapeHtml(title)}</title>
        <meta property="og:title" content="${escapeHtml(title)}" />
        <meta property="og:description" content="${escapeHtml(description)}" />
        <meta property="og:url" content="${canonical}" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Flowpage" />
        <meta property="og:locale" content="fr_BE" />
        <meta property="og:image" content="${siteUrl}/assets/img/mockupV2.png" />
        <meta property="og:image:alt" content="Aperçu d'un site web clair conçu par Flowpage." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="${escapeHtml(title)}" />
        <meta name="twitter:description" content="${escapeHtml(description)}" />
        <meta name="twitter:image" content="${siteUrl}/assets/img/mockupV2.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://api.fontshare.com/v2/css?f[]=clash-grotesk@600,700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        ${jsonLd(schema)}
    </head>`
}

const header = () => `        <header id="main-nav" class="sticky top-0 z-50 border-b border-brand-soft-border bg-brand-cream/95 backdrop-blur">
            <nav class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4" aria-label="Navigation principale">
                <a class="font-heading text-2xl font-semibold tracking-tight text-brand-dark" href="/">Flowpage<span class="text-brand-orange">.</span></a>
                <div class="hidden items-center gap-8 text-sm font-semibold text-gray-600 md:flex">
                    <a class="transition-colors hover:text-brand-dark" href="/services">Services</a>
                    <a class="transition-colors hover:text-brand-dark" href="/agence-web-belgique">Agence web Belgique</a>
                    <a class="transition-colors hover:text-brand-dark" href="/creation-site-web-belgique">Création site web</a>
                    <a class="transition-colors hover:text-brand-dark" href="/referencement-local-belgique">SEO local</a>
                </div>
                <a class="hidden rounded-full bg-brand-dark px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-orange md:inline-flex" href="/contact">Contact</a>
                <button
                    id="hamburger-btn"
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                    aria-label="Ouvrir le menu"
                    class="relative z-[110] flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden focus:outline-none"
                    type="button"
                >
                    <span id="ham-line-1" class="block h-[2px] w-6 origin-center rounded-full bg-brand-dark transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"></span>
                    <span id="ham-line-2" class="block h-[2px] w-6 origin-center rounded-full bg-brand-dark transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"></span>
                    <span id="ham-line-3" class="block h-[2px] w-4 origin-center rounded-full bg-brand-dark transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"></span>
                </button>
            </nav>
        </header>
        <div id="mobile-menu" aria-hidden="true" class="fixed inset-0 z-[200] flex h-[100dvh] flex-col justify-between bg-brand-cream px-6 py-4 opacity-0 pointer-events-none transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden">
                <div class="flex items-center justify-between">
                    <a class="font-heading text-2xl font-semibold tracking-tight text-brand-dark" href="/">Flowpage<span class="text-brand-orange">.</span></a>
                    <button id="close-menu-btn" aria-label="Fermer le menu" class="flex h-10 w-10 items-center justify-center focus:outline-none" type="button">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2A2A2A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>
                <nav class="flex flex-1 flex-col justify-center gap-2">
                    <a class="mobile-nav-link border-b border-brand-soft-border py-4 font-heading text-3xl font-bold text-brand-dark transition-colors duration-200 hover:text-brand-orange" href="/services">Services</a>
                    <a class="mobile-nav-link border-b border-brand-soft-border py-4 font-heading text-3xl font-bold text-brand-dark transition-colors duration-200 hover:text-brand-orange" href="/agence-web-belgique">Agence web Belgique</a>
                    <a class="mobile-nav-link border-b border-brand-soft-border py-4 font-heading text-3xl font-bold text-brand-dark transition-colors duration-200 hover:text-brand-orange" href="/creation-site-web-belgique">Création site web</a>
                    <a class="mobile-nav-link border-b border-brand-soft-border py-4 font-heading text-3xl font-bold text-brand-dark transition-colors duration-200 hover:text-brand-orange" href="/referencement-local-belgique">SEO local</a>
                    <a class="mobile-nav-link py-4 font-heading text-3xl font-bold text-brand-orange transition-opacity duration-200 hover:opacity-80" href="/contact">Me contacter</a>
                </nav>
                <div class="pb-4">
                    <p class="mb-1 text-xs font-medium uppercase tracking-[0.2em] text-gray-400">Contact</p>
                    <a class="text-sm font-semibold text-brand-dark transition-colors hover:text-brand-orange" href="mailto:${email}">${email}</a>
                </div>
        </div>`

const footer = () => `        <footer class="border-t border-brand-soft-border bg-brand-cream px-6 py-16">
            <div class="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
                <div>
                    <a class="font-heading text-2xl font-semibold tracking-tight text-brand-dark" href="/">Flowpage<span class="text-brand-orange">.</span></a>
                    <p class="mt-4 max-w-sm text-sm leading-7 text-gray-600">Agence web en Belgique pour indépendants, artisans, consultants et petites entreprises à Namur, Bruxelles et en Wallonie.</p>
                    <a class="mt-4 inline-flex text-sm font-bold text-brand-orange" href="mailto:${email}">${email}</a>
                </div>
                <div>
                    <h2 class="text-sm font-bold uppercase tracking-wide text-brand-dark">Services</h2>
                    <ul class="mt-4 space-y-3 text-sm text-gray-600">${serviceLinks
                      .slice(0, 6)
                      .map((link) => `<li><a class="hover:text-brand-orange" href="${link.href}">${link.label}</a></li>`)
                      .join('')}</ul>
                </div>
                <div>
                    <h2 class="text-sm font-bold uppercase tracking-wide text-brand-dark">Zones</h2>
                    <ul class="mt-4 space-y-3 text-sm text-gray-600">${localLinks
                      .filter((link) => ['Agence web Namur', 'Création site web Namur', 'Agence web Woluwe', 'Création site web Woluwe', 'Agence web Bruxelles', 'Création de site web en Belgique'].includes(link.label))
                      .map((link) => `<li><a class="hover:text-brand-orange" href="${link.href}">${link.label}</a></li>`)
                      .join('')}</ul>
                </div>
                <div>
                    <h2 class="text-sm font-bold uppercase tracking-wide text-brand-dark">Ressources</h2>
                    <ul class="mt-4 space-y-3 text-sm text-gray-600">${guideLinks
                      .slice(0, 4)
                      .map((link) => `<li><a class="hover:text-brand-orange" href="${link.href}">${link.label}</a></li>`)
                      .join('')}</ul>
                </div>
            </div>
            <div class="mx-auto mt-12 flex max-w-7xl flex-col gap-4 border-t border-brand-soft-border pt-8 text-xs text-gray-400 md:flex-row md:items-center md:justify-between">
                <p>© 2026 Flowpage. Tous droits réservés.</p>
                <div class="flex flex-wrap items-center gap-6">
                    <a class="hover:text-brand-dark" href="/mentions-legales">Mentions légales</a>
                    <a class="hover:text-brand-dark" href="/confidentialite">Confidentialité</a>
                    <a class="hover:text-brand-dark" href="/cgv">CGV</a>
                    <a class="footer-social-link inline-flex items-center justify-center" href="https://www.instagram.com/flowpage.tech/" target="_blank" rel="noopener noreferrer" aria-label="Instagram Flowpage">
                        <span class="footer-instagram-icon" aria-hidden="true"></span>
                    </a>
                    <a class="footer-social-link inline-flex items-center justify-center" href="https://www.facebook.com/profile.php?id=61588993198185" target="_blank" rel="noopener noreferrer" aria-label="Facebook Flowpage">
                        <span class="footer-facebook-icon" aria-hidden="true"></span>
                    </a>
                    <a class="footer-social-link inline-flex items-center justify-center" href="https://g.page/r/CVofAMcjJG7CEBM/review" target="_blank" rel="noopener noreferrer" aria-label="Donner un avis sur Flowpage">
                        <span class="footer-review-icon" aria-hidden="true"></span>
                    </a>
                </div>
            </div>
        </footer>`

const cta = () => `            <section class="bg-brand-dark px-6 py-20 text-center text-white">
                <div class="mx-auto max-w-3xl">
                    <h2 class="font-heading text-4xl font-bold md:text-5xl">Un site clair pour être trouvé et contacté.</h2>
                    <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">Expliquez votre activité, votre zone et vos services. Flowpage vous aide à transformer ce message en présence web lisible.</p>
                    <a class="mt-10 inline-flex rounded-full bg-brand-orange px-8 py-4 text-sm font-bold text-white transition-colors hover:bg-[#c56045]" href="/contact">Discuter de mon projet</a>
                </div>
            </section>`

const faqBlock = (items) => `            <section class="bg-white px-6 py-20">
                <div class="mx-auto max-w-4xl">
                    <h2 class="font-heading text-4xl font-bold text-brand-dark">Questions fréquentes</h2>
                    <div class="mt-10 space-y-5">${items
                      .map(
                        (item) => `<article class="rounded-xl border border-brand-soft-border bg-brand-cream p-6">
                            <h3 class="font-heading text-xl font-bold text-brand-dark">${item.q}</h3>
                            <p class="mt-3 leading-7 text-gray-600">${item.a}</p>
                        </article>`,
                      )
                      .join('')}</div>
                </div>
            </section>`

const pageShell = ({ title, description, slug, schema, main }) => `<!doctype html>
<html lang="fr-BE">
${head({ title, description, slug, schema })}
    <body class="bg-brand-cream font-sans text-brand-dark antialiased">
        <a class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[1000] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-brand-dark focus:shadow-lg" href="#main-content">Aller au contenu principal</a>
${header()}
        <main id="main-content">
${main}
        </main>
${footer()}
        <script src="https://unpkg.com/lucide@latest"></script>
        <script src="/assets/js/main.js" type="module"></script>
    </body>
</html>
`

const breadcrumbSchema = (page) => ({
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: siteUrl },
    { '@type': 'ListItem', position: 2, name: page.h1, item: urlFor(page.slug) },
  ],
})

const localPage = (page) => {
  const faq = [
    {
      q: `Flowpage travaille-t-il avec des clients ${areaPhrase(page.area)} ?`,
      a: `Oui. Flowpage accompagne les indépendants et petites entreprises ${areaPhrase(page.area)}, avec une méthode adaptée aux projets simples, aux sites vitrines et aux refontes claires.`,
    },
    {
      q: 'Est-ce que le référencement local est inclus ?',
      a: 'Les bases sont intégrées : structure propre, titres, contenus locaux, maillage interne, sitemap et données structurées. Les avis, annuaires et backlinks restent des actions externes à construire ensuite.',
    },
    {
      q: 'Quel type de site est le plus adapté ?',
      a: 'Cela dépend du nombre de services, de la quantité d’informations et du besoin d’autonomie. Le format peut aller d’un site essentiel à un site structuré avec pages locales et CMS.',
    },
  ]
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebSite', '@id': `${siteUrl}/#website`, url: siteUrl, name: 'Flowpage', inLanguage: 'fr-BE' },
      baseBusinessSchema,
      breadcrumbSchema(page),
      {
        '@type': 'WebPage',
        '@id': `${urlFor(page.slug)}#webpage`,
        url: urlFor(page.slug),
        name: page.title,
        description: page.description,
        isPartOf: { '@id': `${siteUrl}/#website` },
        about: { '@id': `${siteUrl}/#service` },
        inLanguage: 'fr-BE',
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      },
    ],
  }

  const relatedLocal = localLinks
    .filter((link) => link.href !== `/${page.slug}`)
    .slice(0, 5)
    .map((link) => `<a class="rounded-full border border-brand-soft-border px-4 py-2 text-sm font-semibold text-brand-dark transition-colors hover:border-brand-orange hover:text-brand-orange" href="${link.href}">${link.label}</a>`)
    .join('')

  return pageShell({
    title: page.title,
    description: page.description,
    slug: page.slug,
    schema,
    main: `            <section class="px-6 py-20 md:py-28">
                <div class="mx-auto max-w-5xl">
                    <p class="text-sm font-bold uppercase tracking-[0.18em] text-brand-orange">${page.keyword}</p>
                    <h1 class="mt-5 max-w-4xl font-heading text-5xl font-extrabold leading-tight text-brand-dark md:text-7xl">${page.h1}</h1>
                    <p class="mt-8 max-w-3xl text-xl leading-9 text-gray-600">${page.intent}</p>
                    <div class="mt-10 flex flex-wrap gap-3">${page.nearby
                      .map((place) => `<span class="rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-600 ring-1 ring-brand-soft-border">${place}</span>`)
                      .join('')}</div>
                    <div class="mt-10 flex flex-col gap-4 sm:flex-row">
                        <a class="inline-flex justify-center rounded-full bg-brand-orange px-8 py-4 text-sm font-bold text-white transition-colors hover:bg-[#c56045]" href="/contact">Parler de mon site</a>
                        <a class="inline-flex justify-center rounded-full border border-brand-soft-border px-8 py-4 text-sm font-bold text-brand-dark transition-colors hover:border-brand-orange hover:text-brand-orange" href="/services">Voir les services</a>
                    </div>
                </div>
            </section>
            <section class="bg-white px-6 py-20">
                <div class="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
                    <div>
                        <p class="text-sm font-bold uppercase tracking-[0.18em] text-brand-orange">Ancrage local</p>
                        <h2 class="mt-4 font-heading text-4xl font-bold leading-tight text-brand-dark">${page.area} : un site web qui parle à vos futurs clients</h2>
                    </div>
                    <div class="space-y-6 text-lg leading-8 text-gray-600">
                        <p>${page.localAngle}</p>
                        <p>Flowpage ne vend pas seulement une page jolie. Le travail commence par le message : ce que vous faites, pour qui, dans quelle zone, avec quelle valeur concrète. Ensuite seulement viennent l’architecture, le design, le mobile et la mise en ligne.</p>
                        <p>Cette approche aide autant les visiteurs que Google. Une page claire, un titre aligné, des services nommés, des zones mentionnées naturellement et des liens internes cohérents donnent de meilleurs signaux qu’un site vague centré uniquement sur le nom de marque.</p>
                    </div>
                </div>
            </section>
            <section class="px-6 py-20">
                <div class="mx-auto max-w-6xl">
                    <h2 class="font-heading text-4xl font-bold text-brand-dark">Ce que Flowpage peut créer pour vous</h2>
                    <div class="mt-10 grid gap-6 md:grid-cols-3">
                        <article class="rounded-xl bg-white p-7 shadow-sm ring-1 ring-brand-soft-border">
                            <h3 class="font-heading text-2xl font-bold">Site vitrine clair</h3>
                            <p class="mt-4 leading-7 text-gray-600">Une présence web simple pour présenter votre activité, vos services et votre zone de travail.</p>
                        </article>
                        <article class="rounded-xl bg-white p-7 shadow-sm ring-1 ring-brand-soft-border">
                            <h3 class="font-heading text-2xl font-bold">Pages locales</h3>
                            <p class="mt-4 leading-7 text-gray-600">Des pages pensées pour les recherches comme ${page.keyword}, création site web, site vitrine et services locaux.</p>
                        </article>
                        <article class="rounded-xl bg-white p-7 shadow-sm ring-1 ring-brand-soft-border">
                            <h3 class="font-heading text-2xl font-bold">Refonte structurée</h3>
                            <p class="mt-4 leading-7 text-gray-600">Une amélioration d’un site existant lorsque le message, les pages ou le référencement sont devenus flous.</p>
                        </article>
                    </div>
                </div>
            </section>
            <section class="bg-brand-lightdark px-6 py-20">
                <div class="mx-auto max-w-6xl">
                    <h2 class="font-heading text-4xl font-bold text-brand-dark">Professionnels concernés ${areaPhrase(page.area)}</h2>
                    <div class="mt-8 grid gap-5 md:grid-cols-2">
                        ${['Indépendants qui veulent une présence crédible', 'Artisans qui ont besoin de demandes locales', 'Thérapeutes et accompagnants qui doivent rassurer', 'Consultants dont l’offre doit être mieux structurée'].map((item) => `<div class="rounded-xl bg-white p-6 text-lg font-semibold text-brand-dark ring-1 ring-brand-soft-border">${item}</div>`).join('')}
                    </div>
                    <div class="mt-10 flex flex-wrap gap-3">${relatedLocal}</div>
                </div>
            </section>
${faqBlock(faq)}
${cta()}`,
  })
}

const servicePage = (page) => {
  const faq = [
    {
      q: `À qui s’adresse ce service de ${page.keyword.toLowerCase()} ?`,
      a: `Il s’adresse surtout aux ${page.audience}, avec un besoin de site clair, crédible et facile à comprendre.`,
    },
    {
      q: 'Le contenu est-il aussi travaillé ?',
      a: 'Oui. Flowpage travaille la structure, les textes, les titres et la hiérarchie pour que le site ne soit pas seulement visuel, mais réellement compréhensible.',
    },
    {
      q: 'Peut-on ajouter des pages locales ?',
      a: 'Oui. Des pages locales peuvent être ajoutées pour cibler Namur, Bruxelles, Woluwe, la Wallonie ou d’autres zones pertinentes en Belgique.',
    },
  ]
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebSite', '@id': `${siteUrl}/#website`, url: siteUrl, name: 'Flowpage', inLanguage: 'fr-BE' },
      baseBusinessSchema,
      breadcrumbSchema(page),
      {
        '@type': 'Service',
        name: page.keyword,
        provider: { '@id': `${siteUrl}/#service` },
        areaServed: baseBusinessSchema.areaServed,
        serviceType: page.keyword,
        url: urlFor(page.slug),
        description: page.description,
      },
      {
        '@type': 'WebPage',
        '@id': `${urlFor(page.slug)}#webpage`,
        url: urlFor(page.slug),
        name: page.title,
        description: page.description,
        inLanguage: 'fr-BE',
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      },
    ],
  }

  return pageShell({
    title: page.title,
    description: page.description,
    slug: page.slug,
    schema,
    main: `            <section class="px-6 py-20 md:py-28">
                <div class="mx-auto max-w-5xl">
                    <p class="text-sm font-bold uppercase tracking-[0.18em] text-brand-orange">${page.keyword}</p>
                    <h1 class="mt-5 max-w-4xl font-heading text-5xl font-extrabold leading-tight text-brand-dark md:text-7xl">${page.h1}</h1>
                    <p class="mt-8 max-w-3xl text-xl leading-9 text-gray-600">Flowpage accompagne les ${page.audience} en Belgique avec une approche centrée sur la clarté, la lisibilité mobile, le message et la prise de contact.</p>
                    <div class="mt-10 flex flex-col gap-4 sm:flex-row">
                        <a class="inline-flex justify-center rounded-full bg-brand-orange px-8 py-4 text-sm font-bold text-white transition-colors hover:bg-[#c56045]" href="/contact">Demander un échange</a>
                        <a class="inline-flex justify-center rounded-full border border-brand-soft-border px-8 py-4 text-sm font-bold text-brand-dark transition-colors hover:border-brand-orange hover:text-brand-orange" href="/prix-site-web-belgique">Voir les repères de prix</a>
                    </div>
                </div>
            </section>
            <section class="bg-white px-6 py-20">
                <div class="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">${page.sections
                  .map(
                    ([heading, body]) => `<article class="rounded-xl bg-brand-cream p-7 ring-1 ring-brand-soft-border">
                        <h2 class="font-heading text-2xl font-bold text-brand-dark">${heading}</h2>
                        <p class="mt-4 leading-7 text-gray-600">${body}</p>
                    </article>`,
                  )
                  .join('')}</div>
            </section>
            <section class="px-6 py-20">
                <div class="mx-auto max-w-6xl">
                    <h2 class="font-heading text-4xl font-bold text-brand-dark">Services et zones liés</h2>
                    <div class="mt-8 grid gap-6 md:grid-cols-2">
                        <div class="rounded-xl bg-white p-7 ring-1 ring-brand-soft-border">
                            <h3 class="font-heading text-2xl font-bold">Pages services</h3>
                            <div class="mt-5 flex flex-wrap gap-3">${serviceLinks
                              .filter((link) => link.href !== `/${page.slug}`)
                              .slice(0, 5)
                              .map((link) => `<a class="rounded-full bg-brand-cream px-4 py-2 text-sm font-semibold text-gray-700 hover:text-brand-orange" href="${link.href}">${link.label}</a>`)
                              .join('')}</div>
                        </div>
                        <div class="rounded-xl bg-white p-7 ring-1 ring-brand-soft-border">
                            <h3 class="font-heading text-2xl font-bold">Zones belges</h3>
                            <div class="mt-5 flex flex-wrap gap-3">${localLinks
                              .slice(0, 6)
                              .map((link) => `<a class="rounded-full bg-brand-cream px-4 py-2 text-sm font-semibold text-gray-700 hover:text-brand-orange" href="${link.href}">${link.label}</a>`)
                              .join('')}</div>
                        </div>
                    </div>
                </div>
            </section>
${faqBlock(faq)}
${cta()}`,
  })
}

const guidePage = (page) => {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebSite', '@id': `${siteUrl}/#website`, url: siteUrl, name: 'Flowpage', inLanguage: 'fr-BE' },
      baseBusinessSchema,
      breadcrumbSchema(page),
      {
        '@type': 'Article',
        headline: page.title,
        description: page.description,
        author: { '@type': 'Organization', name: 'Flowpage' },
        publisher: { '@type': 'Organization', name: 'Flowpage', logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.svg` } },
        datePublished: today,
        dateModified: today,
        mainEntityOfPage: urlFor(page.slug),
        inLanguage: 'fr-BE',
      },
    ],
  }
  return pageShell({
    title: page.title,
    description: page.description,
    slug: page.slug,
    schema,
    main: `            <article class="px-6 py-20 md:py-28">
                <div class="mx-auto max-w-3xl">
                    <p class="text-sm font-bold uppercase tracking-[0.18em] text-brand-orange">${page.category}</p>
                    <h1 class="mt-5 font-heading text-5xl font-extrabold leading-tight text-brand-dark md:text-7xl">${page.h1}</h1>
                    <div class="mt-10 space-y-7 text-lg leading-8 text-gray-600">${page.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join('')}</div>
                    <div class="mt-12 rounded-xl bg-white p-7 ring-1 ring-brand-soft-border">
                        <h2 class="font-heading text-2xl font-bold text-brand-dark">À retenir</h2>
                        <ul class="mt-5 space-y-3 text-gray-600">
                            <li>Le site doit d’abord clarifier l’activité.</li>
                            <li>Le référencement local dépend aussi des avis, citations et liens externes.</li>
                            <li>Les pages locales doivent être utiles, distinctes et reliées entre elles.</li>
                        </ul>
                    </div>
                    <div class="mt-10 flex flex-wrap gap-3">${[...serviceLinks.slice(0, 3), ...localLinks.slice(2, 5)]
                      .map((link) => `<a class="rounded-full border border-brand-soft-border px-4 py-2 text-sm font-semibold text-brand-dark transition-colors hover:border-brand-orange hover:text-brand-orange" href="${link.href}">${link.label}</a>`)
                      .join('')}</div>
                </div>
            </article>
${cta()}`,
  })
}

mkdirSync(rootDir, { recursive: true })

const generated = [
  ...localPages.map((page) => ({ ...page, html: localPage(page), priority: '0.85', changefreq: 'monthly' })),
  ...servicePages.map((page) => ({ ...page, html: servicePage(page), priority: '0.8', changefreq: 'monthly' })),
  ...guidePages.map((page) => ({ ...page, html: guidePage(page), priority: '0.65', changefreq: 'monthly' })),
]

for (const page of generated) {
  writeFileSync(resolve(rootDir, `${page.slug}.html`), page.html)
}

const sitemapPages = [...corePages, ...generated.map(({ slug, priority, changefreq }) => ({ slug, priority, changefreq }))]
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapPages
  .map(
    (page) => `  <url>
    <loc>${page.slug ? `${siteUrl}/${page.slug}` : `${siteUrl}/`}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`

writeFileSync(resolve(rootDir, 'public/sitemap.xml'), sitemap)

console.log(`Generated ${generated.length} SEO pages and sitemap.xml`)
