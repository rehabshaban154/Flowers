import b1 from '../../Assets/b1.jfif';
import b2 from '../../Assets/b2.jpeg';
import b3 from '../../Assets/b3.jfif';
import y3 from '../../Assets/y3.webp';
import f5 from '../../Assets/f5.webp';
import ff1 from '../../Assets/ff2.jfif';
import p1 from '../../Assets/p1.jfif';
import w2 from '../../Assets/w2.webp';
import w1 from '../../Assets/w1.jpg';
import g3 from '../../Assets/g4.webp';
import ff2 from '../../Assets/ff3.jfif';
import y2 from '../../Assets/y2.jpeg';
import p3 from '../../Assets/f6.png';
import ff5 from '../../Assets/ff5.jpg';
import f2 from '../../Assets/f2.jfif';
import b5 from '../../Assets/b5.jfif';
import g1 from '../../Assets/g1.webp';
import p4 from '../../Assets/p4.webp';
import p5 from '../../Assets/p5.jfif';
import w4 from '../../Assets/w4.jpg';
import y4 from '../../Assets/y4.jfif';

const Data = [
    {
        id:1,
        img: b1,
        title: "Pink Rose Bouquet",
        price: "$200.00",
        color: "Pink",
        description: "A stunning bouquet of vibrant pink roses, perfect for romantic occasions or as a beautiful centerpiece.",
        paragraph: "Our Pink Rose Bouquet is crafted with the finest fresh-cut roses, ensuring a lasting and meaningful display of affection.",
        clientRate: "4.5",
        reviews: "This bouquet was beautiful! The roses lasted for over a week, and the color was amazing. - Emily"
    },
    {
        id:2,
        img: f5,
        title: "Red Orchid Arrangement",
        price: "$220.00",
        color: "Red",
        description: "A unique and luxurious arrangement of red orchids to add an exotic touch to your décor.",
        paragraph: "The Red Orchid Arrangement is known for its elegant beauty and graceful blooms, symbolizing strength and luxury.",
        clientRate: "4.6",
        reviews: "The orchids looked amazing and lasted much longer than expected. Totally worth the price! - John"
    },
    {
        id:3,
        img: y3,
        title: "Sunflower Bouquet",
        price: "$210.00",
        color: "Yellow",
        description: "Bright and cheerful sunflowers, perfect for uplifting any mood or occasion.",
        paragraph: "This Sunflower Bouquet radiates happiness and positivity, making it a wonderful gift for any occasion.",
        clientRate: "4.7",
        reviews: "Sunflowers were bright and fresh, making the room feel so lively! - Grace"
    },
    {
        id:4,
        img: b2,
        title: "Pink Lily Arrangement",
        price: "$230.00",
        color: "Pink",
        description: "Elegant Pink lilies arranged to add grace and beauty to any setting, especially for weddings.",
        paragraph: "The Pink Lily Arrangement brings purity and sophistication to your event or living space with long-lasting blooms.",
        clientRate: "4.8",
        reviews: "Absolutely perfect for our graduation. The flowers were fresh and fragrant. - Sarah"
    },
    {
        id:5,
        img: ff1,
        title: "Green Butterfly Orchid Arrangement",
        price: "$240.00",
        color: "Green",
        description: "A beautifully arranged green orchid bouquet, perfect for an elegant touch in any space.",
        paragraph: "This arrangement features premium green orchids, representing tranquility and renewal.",
        clientRate: "4.9",
        reviews: "The color and quality of the orchids were just stunning! Loved it. - Michael"
    },
    {
        id:6,
        img: p1,
        title: "Purple Orchid Arrangement",
        price: "$250.00",
        color: "Purple",
        description: "A beautiful and delicate purple orchid arrangement that symbolizes femininity and elegance.",
        paragraph: "This Purple Orchid Arrangement is perfect for celebrating love, beauty, and grace.",
        clientRate: "4.5",
        reviews: "Such a lovely bouquet! The purple orchids added a perfect touch of elegance. - Emma"
    },
    {
        id:7,
        img: w2,
        title: "White Wedding Bouquet",
        price: "$260.00",
        color: "White",
        description: "A classic and timeless wedding bouquet, featuring a blend of white and soft pink florals.",
        paragraph: "This wedding bouquet is crafted with love and attention to detail, providing a beautiful touch to your special day.",
        clientRate: "4.8",
        reviews: "It was the perfect bouquet for our wedding ceremony! Gorgeous and fragrant. - Olivia"
    },
    {
        id:8,
        img: g3,
        title: "Green Floral Arrangement",
        price: "$200.00",
        color: "Green",
        description: "A lush green floral arrangement that brings a natural, earthy vibe to your space.",
        paragraph: "This Green Floral Arrangement is perfect for those who love the freshness and tranquility of nature.",
        clientRate: "4.4",
        reviews: "Such a refreshing arrangement, really brought life to our living room. - Daniel"
    },
    {
        id:9,
        img: p5,
        title: "Royal Purple Elegance",
        price: "$350.00",
        color: "Purple",
        description: "An exquisite combination of deep purple roses and delicate violets, ideal for special occasions.",
        paragraph: "The Royal Purple Elegance arrangement symbolizes luxury and beauty, making it a perfect centerpiece.",
        clientRate: "4.9",
        reviews: "This arrangement was breathtaking! Perfect for my anniversary dinner. - Sophia"
    },
    {
        id:10,
        img: ff2,
        title: "Blue Butterfly Orchid Arrangement",
        price: "$270.00",
        color: "Blue",
        description: "A vibrant blue orchid arrangement, perfect for adding a pop of color to any room.",
        paragraph: "This arrangement is both striking and elegant, with fresh blue orchids that last for days.",
        clientRate: "4.6",
        reviews: "I was impressed with how fresh and unique this arrangement looked. - Sophia"
    },
    {
        id:11,
        img: y2,
        title: "Yellow Floral Arrangement",
        price: "$280.00",
        color: "Yellow",
        description: "Bright and cheerful, this yellow floral arrangement is perfect for any occasion.",
        paragraph: "The Yellow Floral Arrangement brings warmth and energy, making it a wonderful addition to any setting.",
        clientRate: "4.7",
        reviews: "Loved the bright and cheerful vibe these flowers brought to my home! - James"
    },
    {
        id:12,
        img: w1,
        title: "White Orchid Arrangement",
        price: "$290.00",
        color: "White",
        description: "A luxurious arrangement of white orchids, ideal for weddings or formal events.",
        paragraph: "The White Orchid Arrangement is a symbol of elegance and purity, making it the perfect centerpiece for any formal occasion.",
        clientRate: "4.7",
        reviews: "The orchids were stunning and lasted for days. Loved the arrangement! - Laura"
    },
    {
        id:13,
        img: p3,
        title: "Purple Flower Bouquet",
        price: "$300.00",
        color: "Purple",
        description: "A vibrant purple bouquet that makes a bold and beautiful statement.",
        paragraph: "This Purple Flower Bouquet is designed for those who love to make a striking and elegant impression.",
        clientRate: "4.5",
        reviews: "The deep purple color was gorgeous, and the bouquet stayed fresh for a long time. - Lily"
    },
    {
        id:14,
        img: ff5,
        title: "Elegant Red Orchid Arrangement",
        price: "$320.00",
        color: "Red",
        description: "A striking red orchid arrangement to bring serenity and beauty to any occasion.",
        paragraph: "This Red Orchid Arrangement is both bold and graceful, perfect for any event or décor.",
        clientRate: "4.9",
        reviews: "Absolutely loved this arrangement. It was unique and lasted for over a week. - Noah"
    },
    {
        id:15,
        img: f2,
        title: "Red Floral Arrangement",
        price: "$330.00",
        color: "Red",
        description: "A vibrant red floral arrangement that adds a dramatic flair to any space.",
        paragraph: "This Red Floral Arrangement is perfect for making a bold statement, whether for a special occasion or everyday beauty.",
        clientRate: "4.6",
        reviews: "The flowers were fresh and bold, just as described. Perfect for my event. - Ava"
    },
    {
        id:16,
        img: b5,
        title: "Pink Orchid Arrangement",
        price: "$340.00",
        color: "Pink",
        description: "A delicate and beautiful orchid arrangement, perfect for adding an elegant touch to your home.",
        paragraph: "This Orchid Arrangement features long-lasting blooms that will bring serenity and beauty to any space.",
        clientRate: "4.8",
        reviews: "This orchid arrangement exceeded my expectations, it was simply beautiful. - Ethan"
    },
    {
        id:17,
        img: g1,
        title: "Elegant Green Serenity",
        price: "$350.00",
        color: "Green",
        description: "An exquisite combination of lush greenery that elevates any decor with its serene charm.",
        paragraph: "The Elegant Green Serenity arrangement brings tranquility and a touch of nature indoors.",
        clientRate: "4.7",
        reviews: "Such a refreshing and peaceful arrangement! - Mia"
    },
    {
        id:18,
        img: w4,
        title: "White & Blue Wedding Bouquet",
        price: "$360.00",
        color: "White & Blue",
        description: "A harmonious combination of white and blue flowers, perfect for a wedding bouquet.",
        paragraph: "This bouquet exudes purity and calm, making it ideal for weddings or formal events.",
        clientRate: "4.9",
        reviews: "The perfect wedding bouquet! It was fresh and elegant, loved by all. - Harper"
    }
];

export default Data;
