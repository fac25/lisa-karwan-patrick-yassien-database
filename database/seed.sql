BEGIN;

INSERT INTO restaurants VALUES
(1, 'E-Mono Kebabs', 'Legendary kebabs and wraps. Nice lunch deal: £5 for any wrap and a drink', '13 Stroud Green Rd', 5),
(2, 'The Happening Bagel Bakery', 'Fresh bread, pastries and great bagles', '284a Seven Sisters Road', 5),
(3, 'Junction', 'Cool mini food market of pop-up stalls, including Japanese, Malaysian, Thai, Nepalese and vegan food.', '95, Seven Sisters Road', 10)
ON CONFLICT DO NOTHING;

COMMIT;