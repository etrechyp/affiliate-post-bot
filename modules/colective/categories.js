const cat = [
'womens-clothes',
'athletic-pants',
'athletic-shorts',
'women',
'athletic-skirts',
'sports-bras-and-underwear',
'athletic-tops',
'bridal',
'womens-athletic-clothes',
'athletic-jackets',
'bride',
'bridal-gowns',
'bridal-veils',
'bridal-bags',
'bridal-lingerie',
'bridal-shoes',
'bridesmaid',
'bridal-bridesmaid-dresses',
'bridesmaid-bags',
'bridal-mother',
'bridal-mother-dresses',
'bridal-mother-bags',
'coats',
'womens-outerwear',
'leather-and-suede-coats',
'puffer-coats',
'womens-long-coats',
'fur-and-shearling-coats',
'raincoats-and-trenchcoats',
'womens-parka-coats',
'dresses',
'womens-short-coats',
'wool-coats',
'mini-dresses',
'day-dresses',
'midi-dresses',
'party-dresses',
'cocktail-dresses',
'maxi-dresses',
'evening-dresses',
'formal-dresses',
'printed-dresses',
'floral-dresses',
'knee-length-dresses',
'casual-dresses',
'day-to-night-dresses',
'long-sleeve-dresses',
'bridal-dresses',
'bridesmaid-dresses',
'mother-bride-dresses',
'wedding-dresses',
'womens-intimates',
'camisoles',
'chemises',
'gowns',
'hosiery',
'panties',
'pajamas',
'robes',
'shapewear',
'bras',
'slippers',
'thongs',
'jackets',
'blazers',
'casual-jackets',
'socks',
'leather-jackets',
'denim-jackets',
'womens-bomber-jackets',
'vests',
'jeans',
'womens-capes',
'womens-ankle-fit-jeans',
'classic-jeans',
'bootcut-jeans',
'cropped-jeans',
'distressed-jeans',
'flare-jeans',
'womens-jeans-legging',
'womens-boyfriend-jeans',
'skinny-jeans',
'women-slim-fit-jean',
'stretch-jeans',
'womens-overalls',
'straight-leg-jeans',
'womens-wide-leg-jeans',
'jumpsuits-and-rompers',
'womens-matching-sets',
'maternity-clothes',
'relaxed-jeans',
'maternity-intimates',
'maternity-dresses',
'maternity-jackets',
'maternity-outerwear',
'maternity-shorts',
'maternity-pants',
'maternity-skirts',
'maternity-sweaters',
'maternity-swimsuits',
'maternity-tops',
'maternity-jeans',
'womens-joggers-sweats',
'casual-pants',
'cropped-pants',
'womens-high-rise-pants',
'dress-pants',
'womens-leather-pants',
'womens-pants',
'skinny-pants',
'womens-straight-pants',
'womens-tapered-pants',
'wide-leg-pants',
'petites',
'petite-jeans',
'petite-dresses',
'petite-intimates',
'petite-outerwear',
'leggings',
'petite-pants',
'petite-jackets',
'petite-skirts',
'petite-sweatshirts',
'petite-sweaters',
'petite-swimsuits',
'petite-tops',
'plus-sizes',
'plus-size-jeans',
'plus-size-dresses',
'plus-size-intimates',
'plus-size-jackets',
'plus-size-outerwear',
'plus-size-pants',
'plus-size-shorts',
'plus-size-skirts',
'plus-size-sweatshirts',
'plus-size-sweaters',
'plus-size-swimsuits',
'plus-size-tops',
'shorts',
'women-shorts-belted',
'women-shorts-bermuda',
'womens-shorts-bike',
'petite-shorts',
'women-shorts-chino',
'womens-shorts-jean',
'womens-drawstring-shorts',
'womens-skorts',
'skirts',
'long-skirts',
'women-shorts-cargo',
'womens-sleepwear',
'mid-length-skirts',
'womens-sleepwear-bottoms',
'womens-nightgowns',
'womens-sleepwear-pajama-sets',
'womens-sleepwear-tops',
'cardigan-sweaters',
'mini-skirts',
'cashmere-sweaters',
'sweaters',
'crewneck-sweaters',
'v-neck-sweaters',
'swimsuits',
'sweatshirts',
'turleneck-sweaters',
'one-piece-swimsuits',
'womens-suits',
'two-piece-swimsuits',
'teen-girls-jeans',
'swimsuit-coverups',
'teen-girls-dresses',
'teen-girls-intimates',
'teen-girls-jackets',
'teen-girls-outerwear',
'teen-girls-clothes',
'teen-girls-skirts',
'teen-girls-shorts',
'teen-girls-sweaters',
'teen-girls-sweatshirts',
'teen-girls-swimsuits',
'teen-girls-tops',
'womens-tops',
'teen-girls-pants',
'crop-tops',
'bodysuits',
'shirts',
'tees-and-tshirts',
'womens-bag-accessories',
'backpacks',
'blouses',
'womens-bucket-bags',
'handbags',
'womens-beach-and-straw-bags',
'clutches',
'womens-belt-bags',
'womens-cross-body-bags',
'womens-camera-bags',
'evening-handbags',
'womens-duffle-bags',
'womens-mini-bags',
'hobo-bags',
'shoulder-bags',
'tote-bags',
'wallets',
'womens-shoes',
'satchels',
'womens-boots-ankle',
'womens-boots-chelsea',
'boots',
'womens-boots-cold-weather',
'womens-boots-combat',
'womens-boots-rain-boots',
'womens-boots-knee-high',
'womens-boots-over-the-knee',
'womens-boots-hiking',
'womens-shoes-booties',
'womens-booties-lace-up',
'womens-espadrilles-closed-toe',
'womens-booties-chelsea',
'womens-espadrilles-open-toe',
'womens-espadrilles-wedges',
'evening-shoes',
'womens-espadrilles',
'womens-flats-loafers',
'womens-flats-ballet',
'womens-mules',
'mules-and-clogs',
'womens-clogs',
'platforms',
'womens-platform-boots',
'womens-platform-sneakers',
'womens-platform-sandals',
'womens-platform-espadrilles',
'pumps',
'womens-flats-oxfords',
'womens-pump-open-toe',
'womens-pump-stiletto',
'flats',
'womens-pump-closed-toe',
'womens-flip-flops',
'womens-slides',
'sandals',
'womens-shoes-accessories',
'womens-slingback',
'womens-pump-wedges',
'womens-sneaker-high-top',
'womens-shoe-inserts',
'womens-sneaker-low-top',
'womens-sneakers',
'shoes-athletic',
'wedges',
'womens-accessories',
'womens-eyewear',
'womens-sneaker-slip-on',
'sunglasses',
'womens-eyeglasses',
'womens-face-masks',
'gifts',
'gift-cards',
'hats',
'gloves',
'jewelry',
'belts',
'fine-bracelets',
'fine-earrings',
'fine-jewelry',
'fine-rings',
'bracelets',
'charms',
'earrings',
'necklaces',
'brooches-and-pins',
'key-chains',
'rings',
'scarves',
'womens-tech-accessories',
'watches',
'fine-necklaces',
'bath-body',
'womens-beauty',
'womens-umbrellas',
'body-cleansers',
'bubble-bath-bath-oil',
'deodorant',
'body-cleansers-soap',
'shave-cream',
'body-scrubs-exfoliants',
'cellulite-treatments',
'neck-decollete',
'hand-treatments',
'foot-leg-treatments',
'body-moisturizers',
'body-lotions-creams',
'body-oils',
'tooth-care',
'tooth-whiteners',
'toothpaste',
'bath-body-gift-sets',
'beauty-tools',
'beauty-tools-bags-cases',
'makeup-travel-bags',
'bags-cases-train-cases',
'beauty-tools-brushes-applicators',
'brushes-applicators-face',
'brushes-applicators-eyes',
'brushes-applicators-lips',
'brushes-applicators-sets',
'brushes-applicators-cleaners',
'beauty-tools-eyelash-curler',
'beauty-tools-foot-tools',
'beauty-tools-hair-removal',
'beauty-tools-nail-tools',
'beauty-tools-mirrors',
'beauty-tools-scissors-shears',
'beauty-tools-sharpeners',
'beauty-tools-skincare-tools',
'beauty-tools-tweezers-brow',
'perfume',
'body-treatments',
'hair-conditioner',
'hair-care',
'hair-styling-tools',
'blow-dryers-irons',
'hair-styling-tools-styling-accessories',
'bath-shower-gel',
'hair-shampoo',
'hair-scalp-treatments',
'hair-styling-tools-brushes-combs',
'hair-wax',
'hair-styling-products',
'hair-mousse',
'hair-accessories',
'makeup',
'beauty-body-makeup',
'body-makeup',
'eye-makeup',
'eye-shadow',
'eyes-shimmer-glitter',
'eyeliner',
'mascara',
'false-eyelashes',
'eyes-concealer-shadow-base',
'eye-makeup-remover',
'face-makeup',
'eyebrow-enhancers',
'hair-gel',
'hair-spray',
'blush',
'face-primer',
'face-concealer',
'face-foundation',
'face-shine-control-blotting-papers',
'face-bronzer',
'face-luminizer',
'face-shimmer-glitter',
'lip-products',
'lip-gloss',
'lip-plumpers',
'lipstick',
'lip-stain',
'lip-pencils',
'lip-treatments',
'nail-products',
'nail-treatments',
'nail-polish',
'skin-care',
'eye-care',
'eye-treatments',
'face-care',
'face-makeup-removers',
'face-cleansers',
'face-toners',
'face-moisturizers',
'face-tinted-moisturizers',
'lip-balm-treatments',
'face-scrubs-exfoliants',
'face-masks',
'sun-care',
'after-sun',
'sun-bronzers-self-tanners',
'men',
'mens-clothes',
'mens-athletic',
'mens-athletic-jackets',
'mens-athletic-pants',
'mens-athletic-shirts',
'mens-athletic-shorts',
'mens-big-and-tall',
'mens-big-and-tall-coats-and-jackets',
'mens-big-and-tall-jeans',
'mens-big-and-tall-pants',
'mens-big-and-tall-shirts',
'mens-big-and-tall-shorts',
'mens-big-and-tall-blazers',
'mens-big-and-tall-suits',
'mens-big-and-tall-sweaters',
'mens-jeans',
'mens-ankle-jeans',
'mens-bootcut-jeans',
'mens-distressed-jeans',
'mens-loose-jeans',
'mens-low-rise-jeans',
'mens-relaxed-jeans',
'mens-jeans-selvedge',
'mens-skinny-jeans',
'mens-slim-jeans',
'mens-straight-leg-jeans',
'mens-tapered-jeans',
'mens-outerwear',
'mens-denim-jackets',
'mens-puffer-coats',
'mens-fur-coats',
'mens-leather-and-suede-coats',
'mens-long-coats',
'mens-overcoats-and-trenchcoats',
'mens-parka-coats',
'mens-light-jackets',
'mens-short-coats',
'mens-wool-coats',
'mens-bomber-jackets',
'mens-casual-jackets',
'mens-jackets-denim',
'mens-leather-jackets',
'mens-long-jackets',
'mens-short-jackets',
'mens-jackets-vests',
'mens-pants',
'mens-casual-pants',
'mens-cropped-pants',
'mens-dress-pants',
'mens-chinos-and-khakis',
'mens-joggers-sweatpants',
'mens-straight-pants',
'mens-skinny-slim-pants',
'mens-tapered-pants',
'mens-wide-pants',
'mens-shirts',
'mens-dress-shirts',
'mens-longsleeve-shirts',
'mens-polo-shirts',
'mens-shortsleeve-shirts',
'mens-tees-and-tshirts',
'mens-shorts',
'mens-sleepwear',
'mens-sleepwear-bottoms',
'mens-pajamas',
'mens-robes',
'mens-slippers',
'mens-sleepwear-tops',
'mens-blazers-and-sport-coats',
'mens-suits',
'mens-sweaters',
'mens-cashmere-sweaters',
'mens-cardigan-sweaters',
'mens-crewneck-sweaters',
'mens-half-zip-sweaters',
'mens-v-neck-sweaters',
'mens-vests',
'mens-turtleneck-sweaters',
'mens-sweatshirts',
'mens-swimsuits',
'mens-ties',
'teen-guys-clothes',
'teen-guys-jeans',
'teen-guys-outerwear',
'teen-guys-pants',
'teen-guys-shirts',
'teen-guys-shorts',
'teen-guys-blazers',
'teen-guys-suits',
'teen-guys-sweaters',
'teen-guys-swimsuits',
'teen-guys-underwear-and-socks',
'mens-underwear-and-socks',
'mens-boxers',
'mens-briefs',
'mens-socks',
'mens-tee-shirts',
'mens-bags',
'mens-bag-accessories',
'mens-backpacks',
'mens-business-bags',
'mens-belt-bags',
'mens-cross-body-bags',
'mens-sports-bags',
'mens-tote-bags',
'mens-messenger-bags',
'mens-shoes',
'mens-chelsea-boots',
'mens-hiking-boots',
'mens-lace-up-and-chukka-boots',
'mens-lace-up-shoes',
'mens-lace-up-boots',
'mens-captoe-shoes',
'mens-wingtip-shoes',
'mens-boots',
'mens-sandals-and-slides',
'mens-travel-bags',
'mens-flip-flops',
'mens-sandals',
'mens-slides',
'mens-slip-ons-shoes',
'mens-boat-shoes',
'mens-loafers',
'mens-sneakers',
'mens-low-top-sneakers',
'mens-high-top-sneakers',
'mens-slip-on-sneakers',
'mens-shoes-athletic',
'mens-belts',
'mens-accessories',
'mens-cuff-links',
'mens-eyewear',
'mens-eyeglasses',
'mens-sunglasses',
'mens-face-masks',
'mens-gloves',
'mens-hats',
'mens-jewelry',
'mens-scarves',
'mens-tech-accessories',
'mens-umbrellas',
'mens-wallets',
'mens-watches',
'mens-grooming',
'mens-bath-body',
'mens-bath-shower-gel',
'mens-body-moisturizers',
'mens-cleansing-bars',
'mens-deodorants',
'mens-hands-feet-care',
'mens-tooth-care',
'mens-fragrances',
'mens-hair-care',
'mens-hair-conditioners',
'mens-hair-treatments',
'mens-hair-styling-tools',
'mens-hair-shampoos',
'mens-hair-styling-products',
'mens-shaving',
'mens-shaving-products',
'mens-post-shave',
'mens-shaving-tools',
'mens-skin-care',
'kids-and-baby',
'baby-gear',
'baby-activity-gyms-swings',
'activity-centers-jumpers',
'baby-bouncers',
'baby-gyms-and-playmats',
'baby-playards',
'baby-swings',
'baby-travel-accessories',
'baby-walkers',
'baby-carriers',
'backpack-frame-baby-carriers',
'front-baby-carriers',
'organic-baby-carriers',
'baby-slings-and-wraps',
'baby-car-seats',
'booster-baby-car-seats',
'convertible-baby-car-seats',
'infant-car-seats',
'baby-car-seat-accessories',
'baby-diapering',
'baby-diapers',
'baby-diaper-cakes',
'baby-diaper-pails-and-refills',
'baby-diaper-bags',
'baby-diaper-backpacks',
'baby-diaper-messenger-bags',
'baby-diaper-tote-bags',
'baby-diaper-bags-for-dad',
'baby-changing-pads',
'baby-wipes-and-accessories',
'baby-feeding',
'bibs-and-burp-cloths',
'bottle-feeding',
'feeding-bottles-and-nipples',
'feeding-bottles-accessories',
'breastfeeding',
'feeding-chairs-and-seats',
'baby-feeding-tableware',
'baby-health-and-safety',
'baby-humidifiers',
'baby-gates',
'baby-household-safety',
'baby-monitors',
'baby-pacifiers-and-soothers',
'baby-strollers',
'baby-single-strollers',
'baby-double-triple-strollers',
'baby-jogging-strollers',
'baby-travel-systems',
'baby-stroller-accessories',
'kids-and-baby-bath',
'kids-bath-and-body',
'kids-bath-accessories',
'kids-baby-robes',
'kids-baby-towels',
'kids-bath-toys',
'kids-bedroom',
'kids-and-baby-bedding',
'kids-boy-bedding',
'kids-girl-bedding',
'kids-bedding-mattresses-pads-and-covers',
'kids-decor-clocks',
'kids-decor-desk-accessories',
'kids-decor-curtains',
'kids-decor-hanging-decor',
'kids-decor-lighting',
'kids-decor-mirrors',
'kids-decor-picture-frames',
'kids-decor-rugs',
'kids-bedroom-furniture',
'kids-beds-and-mattresses',
'kids-bookcases',
'kids-desks-charis',
'kids-dressers-and-armoires',
'kids-nightstands',
'kids-storage-and-shelving',
'toy-boxes-and-benches',
'nursery-kids-and-baby',
'bassinets-and-cradles',
'kids-bedding-blankets-and-quilts',
'cribs',
'kids-rockers',
'kids-and-baby-clothing',
'boys',
'boys-accessories',
'kids-decor',
'boys-bags',
'boys-watches',
'boys-face-masks',
'boys-bodysuits',
'boys-jeans',
'boys-matching-sets',
'boys-one-piece',
'boys-outerwear',
'boys-pants',
'boys-shoes',
'boys-shorts',
'boys-sleepwear',
'boys-nightgowns',
'boys-pajamas',
'boys-sleep-sacks',
'boys-sweaters',
'boys-sweatshirts',
'boys-swimsuits',
'boys-tops',
'boys-polos',
'boys-shirts',
'boys-tees-and-tshirts',
'boys-underwear',
'girls',
'kids-bedding-pillows',
'girls-accessories',
'girls-bags',
'girls-watches',
'girls-jewelry',
'girls-face-masks',
'girls-bodysuits',
'girls-dresses',
'girls-jeans',
'girls-matching-sets',
'girls-one-piece',
'girls-outerwear',
'girls-pants',
'girls-shoes',
'girls-shorts',
'girls-skirts',
'girls-sleepwear',
'girls-nightgowns',
'girls-pajamas',
'girls-sleep-sacks',
'girls-sweaters',
'girls-sweatshirts',
'girls-swimsuits',
'girls-tops',
'girls-shirts',
'girls-polos',
'girls-tees-and-tshirts',
'girls-underwear',
'kids-toys',
'kids-action-figures-and-vehicles',
'kids-miniature-vehicles',
'kids-action-figures',
'kids-models-and-kits',
'baby-infant-toys',
'kids-playmats',
'baby-blocks-stackers-and-sorters',
'crib-toys',
'baby-learning-toys',
'kids-rattles-and-teethers',
'soft-and-plush-toys',
'walkers-and-ride-ons',
'kids-books-music-and-dvds',
'baby-and-toddler-books',
'books-for-mom-and-dad',
'childrens-dvds',
'childrens-music',
'dolls-and-stuffed-animals',
'baby-and-toddler-dolls',
'dollhouses-and-accessories',
'childrens-dolls',
'kids-stuffed-animals',
'kids-games-and-puzzles',
'kids-board-games',
'kids-puzzles',
'kids-travel-games',
'kids-card-games',
'learning-and-activity',
'kids-arts-craft-toys',
'kids-bricks-blocks',
'kids-educational-toys',
'kids-outdoor-sports-and-games',
'kids-backyard-and-garden-play',
'kids-beach-and-pool-play',
'kids-bikes-and-ride-ons',
'kids-safety-gears',
'kids-sports-and-activities',
'kids-pretend-plays-and-costumes',
'kids-play-food-and-cooking-toys',
'kids-costumes',
'kids-tools-toys',
'kids-tents-and-tunnels',
'kids-puppets',
'living',
'furniture',
'console-tables',
'entryway-furniture',
'benches',
'storage-benches',
'umbrella-stands',
'shoe-storage',
'gameroom-furniture',
'pool-tables',
'poker-and-card-tables',
'shuffleboards',
'classic-game-tables',
'foosball-tables',
'air-hockey-tables',
'table-tennis-tables',
'bean-bags',
'kids-and-baby-furniture',
'kids-and-baby-furniture-cribs',
'kids-and-baby-furniture-beds',
'kids-and-baby-furniture-bunk-beds-and-lofts',
'kids-and-baby-furniture-trundles-and-accessories',
'kids-and-baby-furniture-bassinets',
'kids-and-baby-furniture-toddler-bed-rails',
'kids-and-baby-furniture-changing-tables',
'kids-and-baby-furniture-gliders-and-rocking-chairs',
'kids-and-baby-furniture-changing-table-toppers',
'kids-and-baby-furniture-crib-mattress',
'kids-and-baby-furniture-nursery-furniture-sets',
'kids-and-baby-furniture-activity-tables',
'living-room-furniture',
'sofas-loveseats',
'sectionals',
'livingroom-sleeper-sofas',
'livingroom-chairs',
'side-end-tables',
'coffee-tables',
'livingroom-console-tables',
'livingroom-ottomans-benches',
'livingroom-tv-stands-media',
'bookcases-cabinets',
'livingroom-game-tables',
'living-wall-units-storage',
'livingroom-leather-furniture',
'livingroom-collections',
'livingroom-futons-and-day-beds',
'livingroom-chaise-and-lounges',
'livingroom-fireplaces',
'livingroom-slipcovers',
'bedroom-furniture',
'bedroom-dressers-armoires',
'nightstands',
'bedroom-ottomans-benches',
'beds-headboards',
'bedroom-closet-storage',
'mattresses-foundations',
'bedroom-collections',
'bedroom-bed-frames',
'bedroom-chests',
'bedroom-daybeds',
'dining-kitchen-furniture',
'bar-counter-stools',
'dining-tables',
'dining-chairs',
'dining-benches-banquettes',
'bar-carts-bar-furniture',
'kitchen-islands-carts',
'buffets-sideboards',
'dining-furniture-collections',
'dining-pantry-cabinets',
'dining-display-cabinets',
'home-office-furniture',
'home-office-collections',
'desks',
'office-chairs',
'file-cabinets',
'home-office-accessories',
'home-office-drafting-tables',
'home-office-guest-chairs',
'home-office-storage-cabinets',
'home-office-room-dividers',
'home-office-laptop-carts-and-stands',
'storage-modular',
'storage-cabinets',
'storage-bookcases-shelves',
'storage-entryway',
'outdoor',
'storage-kitchen',
'outdoor-furniture',
'outdoor-sofas-sectionals',
'outdoor-chaises-daybeds',
'outdoor-lounge-chairs-ottomans',
'outdoor-tables',
'outdoor-chairs',
'outdoor-dining-furniture-collections',
'outdoor-barstools-bars-buffets',
'outdoor-coffee-accent-tables',
'outdoor-furniture-covers-care',
'outdoor-furniture-adirondack-chairs',
'outdoor-furniture-garden-stools',
'outdoor-kitchen-dining',
'outdoor-drinkware',
'outdoor-dinnerware',
'outdoor-flatware',
'outdoor-hammocks-swings',
'outdoor-pillows-cushions',
'outdoor-umbrellas',
'outdoor-pool-accessories',
'outdoor-lighting',
'outdoor-wall-lighting',
'outdoor-ceiling-lighting',
'outdoor-lanterns-lamps',
'outdoor-string-lights',
'outdoor-landscape-lighting',
'outdoor-fire-pits',
'bath',
'bath-linens',
'bath-towel',
'towel-bundle',
'hand-towel',
'bath-mats',
'shower-curtains',
'pool-beach-towels',
'bath-accessories',
'bath-mirrors',
'bath-makeup-mirrors-beauty-tools',
'bath-wastebaskets-hampers',
'cosmetic-toiletry-bags',
'bath-soaps-lotions',
'soaps-gift-sets',
'countertop-bath-accessories',
'bath-hardware',
'bathroom-furniture',
'bathroom-cabinets',
'bathroom-shelves',
'sinks-washstands',
'tubs',
'comforters-duvets',
'bedding',
'comforters',
'duvet-cover',
'quilts-coverlets',
'bedding-sets',
'blankets',
'weighted-blankets',
'sheets',
'pillow-pillowcases-shams',
'bedding-pillows',
'pillowcases',
'standard-sham',
'euro-sham',
'pillow-insert',
'duvet-insert',
'bed-skirts',
'mattress-pads',
'mattress-and-pillow-covers',
'mattresses-and-bed-frames',
'memory-foam',
'gel-memory-foam',
'hybrid',
'futon',
'bed-in-a-box',
'adjustable-bed',
'inner-spring',
'euro-top',
'pillow-top',
'tight-top',
'foundations',
'kitchen-tabletop',
'dining-serving',
'serving-cake-pie-dessert',
'cheese-boards',
'salt-pepper',
'serving-bowls',
'serving-dishes',
'trays-platters',
'lazy-susan',
'butter-dishes',
'dipping-and-condiment-bowls',
'chafing-dishes-buffet-accessories',
'cookware',
'braisers-roasters',
'casseroles-dutch-ovens',
'chefs-pans',
'cookware-sets',
'fry-saute-pans',
'griddles-grill-pans',
'saucepans',
'stockpots-steamers',
'strainers-colanders',
'cookware-woks',
'cooking-tools',
'bakeware',
'bakeware-sets',
'mixing-bowls',
'cake-pans',
'muffin-pans-sheets',
'pie-tart-pans',
'kitchen-pastry-baking-tools',
'bakeware-ramekins-cocottes',
'drinkware',
'carafes-decanters',
'cups-mugs',
'drinkware-flutes',
'jugs-pitchers',
'tumblers-water-glasses',
'wine-glasses',
'bar-glasses',
'drinking-glasses',
'wine-buckets-coolers',
'coasters',
'bar-and-wine-tools',
'dinnerware',
'casual-dining',
'fine-china',
'dinnerware-sets',
'dinnerware-bowls',
'charger-plates',
'salad-and-appetizer-plates',
'kitchen-appliances',
'blenders-juicers',
'indoor-grills',
'food-processors',
'slow-rice-pressure-cookers',
'mixers-accessories',
'toasters-ovens',
'Kitchen-tabletop-kitchen-small-appliances-air-fryers',
'waffle-maker',
'sous-vide',
'flatware',
'flatware-chests',
'flatware-sets',
'kitchen-knives',
'steak-knives',
'knife-sets',
'sharpeners',
'serving-utensils',
'coffee-tea',
'coffee-makers',
'coffee-tea-accessories',
'espresso-machines',
'coffee-grinders',
'tea-kettles',
'Kitchen-tabletop-kitchen-coffee-tea-milk-frothers',
'french-press-and-pour-over',
'kitchen-storage',
'storage-containers',
'kitchen-organizers',
'spice-racks',
'wine-storage',
'countertop-storage',
'paper-towel-and-napkin-holders',
'spoon-rests-and-trivets',
'kitchen-tools-gadgets',
'cutting-boards',
'can-openers',
'grilling-tools',
'kitchen-tools-and-gadgets-measuring',
'timers',
'kitchen-linens',
'napkin-rings-holders',
'napkins',
'placemats',
'runners',
'tablecloths',
'aprons',
'dish-towels',
'pot-holders',
'kitchen-cleaning',
'cleaning-supplies',
'cookbooks',
'trash-cans',
'food-beverage',
'pillows-decor',
'decorative-pillows',
'indoor-pillows',
'outdoor-pillows',
'seasonal-pillows',
'pillows-inserts',
'accents',
'accent-bowls',
'clocks',
'figurines',
'vases',
'garden',
'accents-throws-blankets',
'poufs',
'poufs-solid',
'poufs-patterned',
'candles-candleholders',
'home-fragrance',
'accents-baskets-boxes',
'drapery',
'drapery-hardware',
'panels',
'shades',
'sheers',
'frames',
'accents-seasonal',
'fall-decor',
'fall-decorations',
'fall-wall-art',
'fall-dining-entertaining',
'fall-outdoor-decorations',
'winter-decor',
'fall-pillows',
'holiday-trees',
'tree-lights',
'tree-ornaments',
'holiday-decorations',
'hanukkah-decorations',
'holiday-wall-art',
'holiday-outdoor',
'holiday-dining-entertaining',
'holiday-pillows',
'valentines-day-decor',
'seasonal-holiday-decor',
'st-patricks-day-decor',
'easter-decor',
'july-4th-decor',
'wrapping-paper-ribbons',
'wrapping-paper',
'ribbons',
'seasonal-cards',
'event-invitations',
'thank-you-cards',
'announcement-cards',
'mirrors-artwork',
'mirrors-wall',
'mirrors',
'mirrors-floor',
'artwork',
'artwork-paintings',
'artwork-photography',
'artwork-drawings',
'artwork-typography',
'accent-lighting',
'ceiling-lighting',
'pendant-lights',
'chandeliers',
'flush-mount-lighting',
'wall-lighting',
'table-lamps',
'sconces',
'floor-lamps',
'bathroom-lighting',
'desk-lamps',
'indoor-ceiling-fans',
'ceiling-fans',
'fan-accessories',
'outdoor-ceiling-fans',
'lamp-shades',
'lighting-accessories',
'night-light',
'rugs',
'rugs-area',
'rugs-round',
'rugs-hallway',
'rugs-outdoor',
'doormat',
'rug-pads',
'mats-kitchen',
'rugs-stair-tread',
'luggage',
'carry-on-luggage',
'travel-duffels-and-totes',
'garment-bags',
'laptop-cases',
'luggage-sets',
'rolling-luggage',
'pets',
'dog-toys',
'cat-toys-scratchers-trees',
'leashes-harnesses-and-collars',
'pet-bowls-and-feeders',
'pet-beds',
'pet-carriers-and-travel',
'pet-crates-and-gates',
'pet-clothing',
'pet-health-and-grooming',
'exercise-fitness',
'workout-equipment',
'treadmill-elliptical',
'exercise-bikes',
'weight-machines',
'workout-accessories',
'rowing-machines',
'changing-tables'
]

module.exports = cat