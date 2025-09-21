import { Product, Clothing, Appliance } from '../../data/products.js';

describe('test suite: Product Class', () => {
    it('creates a new product', () => {
        const product1 = new Product({
            id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
            image: "images/products/athletic-cotton-socks-6-pairs.jpg",
            name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
            rating: {
            stars: 4.5,
            count: 87
            },
            priceCents: 1090
        });

        expect(product1.extraInfoHTML()).toBe('');
        expect(product1.id).toEqual("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
        expect(product1.image).toEqual("images/products/athletic-cotton-socks-6-pairs.jpg");
        expect(product1.name).toEqual("Black and Gray Athletic Cotton Socks - 6 Pairs");
        expect(product1.priceCents).toEqual(1090);
    });
});

describe('test suite: Clothing Class', () => {
    it('creates a new cothing product', () => {
        const product1 = new Clothing({
            id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
            image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
            name: "Adults Plain Cotton T-Shirt - 2 Pack",
            rating: {
            stars: 4.5,
            count: 56
            },
            priceCents: 799,
            keywords: [
            "tshirts",
            "apparel",
            "mens"
            ],
            type: "clothing",
            sizeChartLink: "images/clothing-size-chart.png"
        });

        expect(product1.extraInfoHTML()).toContain('Size Chart');
        expect(product1.id).toEqual("83d4ca15-0f35-48f5-b7a3-1ea210004f2e");
        expect(product1.sizeChartLink).toEqual("images/clothing-size-chart.png");
    });
});

describe('test suite: Appliance Class', () => {
    it('creates a new appliance product', () => {
        const product1 = new Appliance({
        id: "54e0eccd-8f36-462b-b68a-8182611d9add",
        image: "images/products/black-2-slot-toaster.jpg",
        name: "2 Slot Toaster - Black",
        rating: {
        stars: 5,
        count: 2197
        },
        priceCents: 1899,
        keywords: [
        "toaster",
        "kitchen",
        "appliances"
        ],
        type: "appliance",
        instructionsLink: "images/appliance-instructions.png",
        warrantyLink: "images/appliance-warranty.png" 
    });
        
        expect(product1.extraInfoHTML()).toContain('Instruction');
        expect(product1.extraInfoHTML()).toContain('Warranty');
        expect(product1.id).toEqual("54e0eccd-8f36-462b-b68a-8182611d9add");
        expect(product1.instructionsLink).toEqual("images/appliance-instructions.png");
        expect(product1.warrantyLink).toEqual("images/appliance-warranty.png");
    });
});