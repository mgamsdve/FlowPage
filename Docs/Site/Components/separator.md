# Section — Séparation visuelle (Separator)

## Rôle de la section

Cette section sert de **pause visuelle et mentale** entre deux blocs de contenu denses.

Elle permet de :
- aérer la lecture
- ralentir le scroll
- ancrer le message principal de Flowpage
- renforcer la cohérence globale du site

Ce n’est **pas une section de contenu**, mais un élément d’UX.

---

## Message central

> Clarté · Structure · Résultat

Trois mots qui résument la promesse Flowpage, sans discours commercial.

---

## Principes UX

- Pas de CTA
- Pas d’explication
- Pas de lien
- Lecture instantanée
- Fonctionne comme une respiration

---

## Design & Direction artistique

- Fond sombre (section de rupture)
- Texte discret, uppercase
- Tracking large pour la lisibilité
- Aucun élément décoratif supplémentaire

---

## Règles d’utilisation

- À utiliser entre deux sections longues ou denses
- Ne jamais enchaîner deux séparateurs
- Toujours rester très court
- Ne jamais transformer en section marketing

---

## Code de référence (Tailwind)

```html
<section class="bg-brand-dark py-16 md:py-20 px-6">
  <div class="max-w-6xl mx-auto text-center">
    <p class="text-sm uppercase tracking-[0.4em] text-gray-400">
      Clarté · Structure · Résultat
    </p>
  </div>
</section>
