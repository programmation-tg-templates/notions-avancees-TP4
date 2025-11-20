// Tests unitaires écrits par l'enseignant. Ne modifiez pas ce fichier.

import { getPromotionProducts, Product } from '../index';

describe('getPromotionProducts', () => {
    test('devrait retourner uniquement les produits éligibles à la promotion (en stock, en promotion, catégorie papeterie)', () => {
        const products: Product[] = [
            { name: "Stylo", price: 1.5, stock: 10, category: "papeterie", onSale: true },
            { name: "Cahier", price: 5, stock: 0, category: "papeterie", onSale: false },
            { name: "Calculatrice", price: 25, stock: 3, category: "electronique", onSale: true },
            { name: "Règle", price: 2, stock: 5, category: "papeterie", onSale: false },
            { name: "Casque", price: 50, stock: 0, category: "electronique", onSale: true },
        ];

        const result = getPromotionProducts(products);

        expect(result).toHaveLength(1);
        expect(result[0].name).toBe("Stylo");
    });

    test('devrait retourner un tableau vide quand aucun produit n\'est éligible', () => {
        const products: Product[] = [
            { name: "Cahier", price: 5, stock: 0, category: "papeterie", onSale: false },
            { name: "Calculatrice", price: 25, stock: 3, category: "electronique", onSale: true },
        ];

        const result = getPromotionProducts(products);

        expect(result).toHaveLength(0);
    });

    test('devrait exclure les produits en rupture de stock', () => {
        const products: Product[] = [
            { name: "Stylo", price: 1.5, stock: 10, category: "papeterie", onSale: true },
            { name: "Règle", price: 2, stock: 0, category: "papeterie", onSale: true },
        ];

        const result = getPromotionProducts(products);

        expect(result).toHaveLength(1);
        expect(result[0].name).toBe("Stylo");
    });

    test('devrait exclure les produits non en promotion', () => {
        const products: Product[] = [
            { name: "Stylo", price: 1.5, stock: 10, category: "papeterie", onSale: true },
            { name: "Cahier", price: 5, stock: 5, category: "papeterie", onSale: false },
        ];

        const result = getPromotionProducts(products);

        expect(result).toHaveLength(1);
        expect(result[0].name).toBe("Stylo");
    });

    test('devrait exclure les produits d\'autres catégories', () => {
        const products: Product[] = [
            { name: "Stylo", price: 1.5, stock: 10, category: "papeterie", onSale: true },
            { name: "Calculatrice", price: 25, stock: 3, category: "electronique", onSale: true },
        ];

        const result = getPromotionProducts(products);

        expect(result).toHaveLength(1);
        expect(result[0].name).toBe("Stylo");
    });

    test('devrait retourner plusieurs produits quand toutes les conditions sont satisfaites', () => {
        const products: Product[] = [
            { name: "Stylo", price: 1.5, stock: 10, category: "papeterie", onSale: true },
            { name: "Crayon", price: 1, stock: 20, category: "papeterie", onSale: true },
            { name: "Gomme", price: 0.5, stock: 15, category: "papeterie", onSale: true },
        ];

        const result = getPromotionProducts(products);

        expect(result).toHaveLength(3);
        expect(result.map(p => p.name)).toEqual(["Stylo", "Crayon", "Gomme"]);
    });

    test('devrait retourner un tableau vide pour une entrée vide', () => {
        const result = getPromotionProducts([]);

        expect(result).toHaveLength(0);
    });
});