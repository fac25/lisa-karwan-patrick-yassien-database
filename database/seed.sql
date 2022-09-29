BEGIN;

INSERT INTO restaurants VALUES
(1, 'E-Mono Kebabs', 'Legendary kebabs and wraps. Nice lunch deal: £5 for any wrap and a drink', '13 Stroud Green Rd', 5),
(2, 'The Happening Bagel Bakery', 'Fresh bread, pastries and great bagles', '284a Seven Sisters Road', 5),
(3, 'Junction', 'Cool mini food market of pop-up stalls, including Japanese, Malaysian, Thai, Nepalese and vegan food.', '95, Seven Sisters Road', 10),
(4, 'Gradz Cafe', 'Nice Lebanese food, also lots of cakes and pastries, etc.', '44 Clifton Terrace', 5),
(5, 'Terrace Cafe', 'Tasty cafe food, and a bit more. Suprisingly tasty.', 'Opposite Corbyn Cafe', 5),
(6, 'Roti Joupa', 'Hidden Gem! SPicy Trinadadian food and good veg options.', '20 Stroud Green Rd', 15)
ON CONFLICT DO NOTHING;

COMMIT;