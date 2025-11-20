# Notions avancées - TP4 - Filtrer les produits disponibles et applicables à une promotion avec filter()

## Consignes

Vous gérez un magasin en ligne.
Chaque produit est représenté par un objet :

```js
[
  { name: "Stylo", price: 1.5, stock: 10, category: "papeterie", onSale: true },
  { name: "Cahier", price: 5, stock: 0, category: "papeterie", onSale: false },
  { name: "Calculatrice", price: 25, stock: 3, category: "electronique", onSale: true },
  { name: "Règle", price: 2, stock: 5, category: "papeterie", onSale: false },
  { name: "Casque", price: 50, stock: 0, category: "electronique", onSale: true },
];
```

Vous devez préparer une liste de produits éligibles à une promotion pour l’interface client.

**Règles d’éligibilité**

1. Le produit doit être en stock (stock > 0).
2. Le produit doit être en promotion (onSale === true).
3. Le produit doit appartenir à la catégorie "papeterie".

Écrire une fonction fléchée `getPromotionProducts` qui :

- reçoit un tableau de `Product`
- retourne un tableau de produits éligibles à la promotion
- utilise filter() avec toutes les conditions combinées

## Exemple

Avec le tableau de produits ci-dessus, l'appel de `getPromotionProducts(products)` devrait retourner :

```js
[{ name: "Stylo", price: 1.5, stock: 10, category: "papeterie", onSale: true }];
```
