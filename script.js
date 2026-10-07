// ========================================
// AVATAR GAME
// Nested customization system
// ========================================


// ========================================
// CURRENT SELECTION
// ========================================

const selected = {
    body: {
        type: 0,
        variant: 0
    },

    face: {
        type: 0,
        variant: 0
    },

    hair: {
        type: 0,
        variant: 0
    },

    eyes: {
        type: 0,
        variant: 0
    },

    mouth: {
        type: 0,
        variant: 0
    },

    tops: {
        type: 0,
        variant: 0
    },

    bottoms: {
        type: 0,
        variant: 0
    },

    shoes: {
        type: 0,
        variant: 0
    },

    accessories: {
        type: 0,
        variant: 0
    }
};


// ========================================
// CUSTOMIZATION DATA
// ========================================

const options = {

    body: [
        {
            name: "Skin Tone",
            variants: [
                { name: "Light", color: "#FFD9B8" },
                { name: "Classic", color: "#F2C6A0" },
                { name: "Warm", color: "#DFA77D" },
                { name: "Deep", color: "#A96F4F" }
            ]
        }
    ],


    face: [
        {
            name: "Face Shape",
            variants: [
                { name: "Round", shape: "round" },
                { name: "Soft", shape: "soft" },
                { name: "Wide", shape: "wide" }
            ]
        }
    ],


    hair: [
        {
            name: "Hairstyle",
            variants: [
                {
                    name: "Messy",
                    style: "messy",
                    color: "#2C211C"
                },
                {
                    name: "Short",
                    style: "short",
                    color: "#4A2F20"
                },
                {
                    name: "Fluffy",
                    style: "fluffy",
                    color: "#171717"
                },
                {
                    name: "Blonde",
                    style: "short",
                    color: "#D6A84F"
                }
            ]
        }
    ],


    eyes: [
        {
            name: "Eye Style",
            variants: [
                { name: "Normal", style: "normal" },
                { name: "Happy", style: "happy" },
                { name: "Sleepy", style: "sleepy" },
                { name: "Big", style: "big" }
            ]
        }
    ],


    mouth: [
        {
            name: "Mouth Style",
            variants: [
                { name: "Smile", style: "smile" },
                { name: "Small", style: "small" },
                { name: "Open", style: "open" },
                { name: "Neutral", style: "neutral" }
            ]
        }
    ],


    // ------------------------------------
    // TOPS
    // ------------------------------------

    tops: [

        {
            name: "Shirts",
            style: "shirt",

            variants: [
                { name: "White", color: "#F7F7F7" },
                { name: "Black", color: "#292929" },
                { name: "Red", color: "#D95B5B" },
                { name: "Blue", color: "#5278D9" },
                { name: "Green", color: "#65A86B" },
                { name: "Purple", color: "#8B63C7" }
            ]
        },

        {
            name: "Hoodies",
            style: "hoodie",

            variants: [
                { name: "White", color: "#F3F4F5" },
                { name: "Black", color: "#292B30" },
                { name: "Red", color: "#D95454" },
                { name: "Blue", color: "#5278D9" },
                { name: "Green", color: "#5E9B69" },
                { name: "Purple", color: "#8061B8" }
            ]
        },

        {
            name: "Sweaters",
            style: "sweater",

            variants: [
                { name: "Cream", color: "#E8DCC8" },
                { name: "Black", color: "#303238" },
                { name: "Red", color: "#C95050" },
                { name: "Blue", color: "#587BC2" },
                { name: "Green", color: "#63966A" }
            ]
        },

        {
            name: "Jackets",
            style: "jacket",

            variants: [
                { name: "Black", color: "#292D35" },
                { name: "Blue", color: "#476CA8" },
                { name: "Brown", color: "#8B6549" },
                { name: "Red", color: "#A94343" }
            ]
        }
    ],


    // ------------------------------------
    // BOTTOMS
    // ------------------------------------

    bottoms: [

        {
            name: "Jeans",
            style: "pants",

            variants: [
                { name: "Light Blue", color: "#6D91C5" },
                { name: "Blue", color: "#4269A8" },
                { name: "Dark Blue", color: "#283F69" },
                { name: "Black", color: "#30333A" }
            ]
        },

        {
            name: "Shorts",
            style: "shorts",

            variants: [
                { name: "Black", color: "#30333A" },
                { name: "Blue", color: "#4269A8" },
                { name: "Brown", color: "#9A7049" },
                { name: "Green", color: "#638A62" }
            ]
        }
    ],


    // ------------------------------------
    // SHOES
    // ------------------------------------

    shoes: [

        {
            name: "Sneakers",
            style: "sneakers",

            variants: [
                {
                    name: "White",
                    color: "#F4F4F4",
                    accent: "#68748A"
                },
                {
                    name: "Black",
                    color: "#292929",
                    accent: "#555555"
                },
                {
                    name: "Blue",
                    color: "#4E72D4",
                    accent: "#DCE5FF"
                },
                {
                    name: "Red",
                    color: "#C95353",
                    accent: "#FFE0E0"
                }
            ]
        },

        {
            name: "Boots",
            style: "boots",

            variants: [
                {
                    name: "Black",
                    color: "#292929",
                    accent: "#555555"
                },
                {
                    name: "Brown",
                    color: "#704B35",
                    accent: "#B88964"
                }
            ]
        }
    ],


    // ------------------------------------
    // ACCESSORIES
    // ------------------------------------

    accessories: [

        {
            name: "None",
            style: "none",
            variants: [
                { name: "None" }
            ]
        },

        {
            name: "Glasses",
            style: "glasses",
            variants: [
                { name: "Black", color: "#292929" },
                { name: "Blue", color: "#5278D9" },
                { name: "Red", color: "#C95353" }
            ]
        },

        {
            name: "Cap",
            style: "cap",
            variants: [
                { name: "Blue", color: "#4C6FD1" },
                { name: "Black", color: "#292929" },
                { name: "Red", color: "#C95353" },
                { name: "Green", color: "#5E9465" }
            ]
        },

        {
            name: "Headphones",
            style: "headphones",
            variants: [
                { name: "Black", color: "#3A3A3A" },
                { name: "Blue", color: "#526ED0" },
                { name: "Red", color: "#C95353" }
            ]
        }
    ]
};


// ========================================
// DOM ELEMENTS
// ========================================

const avatar = document.getElementById("avatar");
const itemsContainer = document.getElementById("items");
const categoryTitle = document.getElementById("category-title");

const categoryButtons =
    document.querySelectorAll(".category-button");

const nameInput =
    document.getElementById("avatar-name");

const randomizeButton =
    document.getElementById("randomize-button");

const saveButton =
    document.getElementById("save-button");

let currentCategory = "body";

let menuLevel = "types";


// ========================================
// SVG
// ========================================

function svgElement(content) {

    return `
        <svg
            viewBox="0 0 400 600"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Avatar"
        >
            ${content}
        </svg>
    `;
}


// ========================================
// DRAW AVATAR
// ========================================

function drawAvatar() {

    const bodyType =
        options.body[selected.body.type];

    const body =
        bodyType.variants[selected.body.variant];

    const faceType =
        options.face[selected.face.type];

    const face =
        faceType.variants[selected.face.variant];

    const hairType =
        options.hair[selected.hair.type];

    const hair =
        hairType.variants[selected.hair.variant];

    const eyes =
        options.eyes[selected.eyes.type]
            .variants[selected.eyes.variant];

    const mouth =
        options.mouth[selected.mouth.type]
            .variants[selected.mouth.variant];

    const topType =
        options.tops[selected.tops.type];

    const top =
        topType.variants[selected.tops.variant];

    const bottomType =
        options.bottoms[selected.bottoms.type];

    const bottom =
        bottomType.variants[selected.bottoms.variant];

    const shoeType =
        options.shoes[selected.shoes.type];

    const shoes =
        shoeType.variants[selected.shoes.variant];

    const accessoryType =
        options.accessories[selected.accessories.type];

    const accessory =
        accessoryType.variants[selected.accessories.variant];


    avatar.innerHTML = svgElement(`

        <!-- SHADOW -->
        <ellipse
            cx="200"
            cy="565"
            rx="105"
            ry="18"
            fill="rgba(80,110,130,0.16)"
        />


        <!-- BACK HAIR -->
        ${drawBackHair(hair)}


        <!-- LEGS -->
        <g>

            <rect
                x="142"
                y="430"
                width="42"
                height="82"
                rx="20"
                fill="${body.color}"
            />

            <rect
                x="216"
                y="430"
                width="42"
                height="82"
                rx="20"
                fill="${body.color}"
            />

        </g>


        <!-- SHOES -->
        ${drawShoes(shoes, shoeType.style)}


        <!-- BOTTOMS -->
        ${drawBottoms(bottom, bottomType.style)}


        <!-- TOP -->
        ${drawTop(top, topType.style)}


        <!-- ARMS -->
        <g>

            <rect
                x="96"
                y="315"
                width="48"
                height="135"
                rx="24"
                fill="${body.color}"
                transform="rotate(8 120 315)"
            />

            <rect
                x="256"
                y="315"
                width="48"
                height="135"
                rx="24"
                fill="${body.color}"
                transform="rotate(-8 280 315)"
            />

        </g>


        <!-- NECK -->
        <rect
            x="175"
            y="280"
            width="50"
            height="55"
            rx="20"
            fill="${body.color}"
        />


        <!-- FACE -->
        ${drawFace(face, body.color)}


        <!-- EYES -->
        ${drawEyes(eyes)}


        <!-- MOUTH -->
        ${drawMouth(mouth)}


        <!-- FRONT HAIR -->
        ${drawFrontHair(hair)}


        <!-- ACCESSORY -->
        ${drawAccessory(
            accessory,
            accessoryType.style
        )}

    `);

    const svg = avatar.querySelector("svg");

    svg.style.width = "100%";
    svg.style.height = "100%";
}


// ========================================
// FACE
// ========================================

function drawFace(face, skin) {

    let width = 150;
    let height = 150;

    if (face.shape === "soft") {
        width = 145;
        height = 155;
    }

    if (face.shape === "wide") {
        width = 165;
        height = 145;
    }

    return `
        <ellipse
            cx="200"
            cy="230"
            rx="${width / 2}"
            ry="${height / 2}"
            fill="${skin}"
            stroke="#513B32"
            stroke-width="5"
        />
    `;
}


// ========================================
// HAIR
// ========================================

function drawBackHair(hair) {

    if (hair.style === "messy") {

        return `
            <path
                d="
                    M120 230
                    Q105 135 150 105
                    Q175 70 205 92
                    Q250 65 285 110
                    Q315 145 290 235
                    L270 270
                    L125 265 Z
                "
                fill="${hair.color}"
                stroke="#241C18"
                stroke-width="5"
            />
        `;
    }


    if (hair.style === "fluffy") {

        return `
            <path
                d="
                    M115 235
                    Q95 175 125 125
                    Q145 80 190 92
                    Q225 65 260 95
                    Q305 95 300 155
                    Q320 205 285 260
                    L120 260 Z
                "
                fill="${hair.color}"
                stroke="#241C18"
                stroke-width="5"
            />
        `;
    }


    return `
        <path
            d="
                M120 225
                Q115 120 200 105
                Q285 120 280 225
                L270 260
                L130 260 Z
            "
            fill="${hair.color}"
            stroke="#241C18"
            stroke-width="5"
        />
    `;
}


function drawFrontHair(hair) {

    if (hair.style === "messy") {

        return `
            <path
                d="
                    M125 180
                    Q145 115 200 120
                    Q255 115 275 180
                    Q250 165 230 185
                    Q215 150 195 185
                    Q175 150 150 185
                    Q140 170 125 180 Z
                "
                fill="${hair.color}"
            />
        `;
    }


    if (hair.style === "fluffy") {

        return `
            <path
                d="
                    M120 175
                    Q140 110 200 120
                    Q260 105 280 175
                    Q255 150 235 170
                    Q215 135 195 170
                    Q175 135 150 170
                    Q135 150 120 175 Z
                "
                fill="${hair.color}"
            />
        `;
    }


    return `
        <path
            d="
                M125 175
                Q145 115 200 120
                Q255 115 275 175
                Q245 150 220 165
                Q200 145 180 165
                Q155 150 125 175 Z
            "
            fill="${hair.color}"
        />
    `;
}


// ========================================
// EYES
// ========================================

function drawEyes(eyes) {

    if (eyes.style === "happy") {

        return `
            <path
                d="M155 225 Q170 210 185 225"
                fill="none"
                stroke="#302B2A"
                stroke-width="8"
                stroke-linecap="round"
            />

            <path
                d="M215 225 Q230 210 245 225"
                fill="none"
                stroke="#302B2A"
                stroke-width="8"
                stroke-linecap="round"
            />
        `;
    }


    if (eyes.style === "sleepy") {

        return `
            <path
                d="M155 225 Q170 235 185 225"
                fill="none"
                stroke="#302B2A"
                stroke-width="8"
                stroke-linecap="round"
            />

            <path
                d="M215 225 Q230 235 245 225"
                fill="none"
                stroke="#302B2A"
                stroke-width="8"
                stroke-linecap="round"
            />
        `;
    }


    if (eyes.style === "big") {

        return `
            <circle cx="170" cy="225" r="18" fill="#302B2A"/>
            <circle cx="230" cy="225" r="18" fill="#302B2A"/>

            <circle cx="164" cy="219" r="6" fill="white"/>
            <circle cx="224" cy="219" r="6" fill="white"/>
        `;
    }


    return `
        <ellipse
            cx="170"
            cy="225"
            rx="12"
            ry="17"
            fill="#302B2A"
        />

        <ellipse
            cx="230"
            cy="225"
            rx="12"
            ry="17"
            fill="#302B2A"
        />

        <circle
            cx="166"
            cy="220"
            r="4"
            fill="white"
        />

        <circle
            cx="226"
            cy="220"
            r="4"
            fill="white"
        />
    `;
}


// ========================================
// MOUTH
// ========================================

function drawMouth(mouth) {

    if (mouth.style === "smile") {

        return `
            <path
                d="M175 260 Q200 280 225 260"
                fill="none"
                stroke="#633E3A"
                stroke-width="6"
                stroke-linecap="round"
            />
        `;
    }


    if (mouth.style === "open") {

        return `
            <ellipse
                cx="200"
                cy="263"
                rx="15"
                ry="11"
                fill="#633E3A"
            />
        `;
    }


    if (mouth.style === "neutral") {

        return `
            <line
                x1="185"
                y1="263"
                x2="215"
                y2="263"
                stroke="#633E3A"
                stroke-width="6"
                stroke-linecap="round"
            />
        `;
    }


    return `
        <path
            d="M190 263 Q200 269 210 263"
            fill="none"
            stroke="#633E3A"
            stroke-width="5"
            stroke-linecap="round"
        />
    `;
}


// ========================================
// TOPS
// ========================================

function drawTop(top, style) {

    if (style === "hoodie") {

        return `
            <path
                d="
                    M145 310
                    Q160 295 180 290
                    L200 320
                    L220 290
                    Q240 295 255 310
                    L285 335
                    L260 455
                    L140 455
                    L115 335 Z
                "
                fill="${top.color}"
                stroke="#343434"
                stroke-width="5"
                stroke-linejoin="round"
            />

            <path
                d="M165 300 Q200 335 235 300"
                fill="none"
                stroke="rgba(255,255,255,0.35)"
                stroke-width="7"
            />

            <line
                x1="185"
                y1="350"
                x2="185"
                y2="420"
                stroke="rgba(0,0,0,0.15)"
                stroke-width="4"
            />

            <line
                x1="215"
                y1="350"
                x2="215"
                y2="420"
                stroke="rgba(0,0,0,0.15)"
                stroke-width="4"
            />
        `;
    }


    if (style === "sweater") {

        return `
            <path
                d="
                    M145 310
                    L115 340
                    L135 455
                    L265 455
                    L285 340
                    L255 310
                    L225 300
                    L200 325
                    L175 300 Z
                "
                fill="${top.color}"
                stroke="#343434"
                stroke-width="5"
                stroke-linejoin="round"
            />
        `;
    }


    if (style === "jacket") {

        return `
            <path
                d="
                    M145 310
                    L115 340
                    L135 455
                    L265 455
                    L285 340
                    L255 310
                    L225 300
                    L200 325
                    L175 300 Z
                "
                fill="${top.color}"
                stroke="#343434"
                stroke-width="5"
                stroke-linejoin="round"
            />

            <line
                x1="200"
                y1="325"
                x2="200"
                y2="450"
                stroke="rgba(255,255,255,0.3)"
                stroke-width="4"
            />
        `;
    }


    return `
        <path
            d="
                M150 310
                L120 335
                L140 455
                L260 455
                L280 335
                L250 310
                L225 300
                L200 325
                L175 300 Z
            "
            fill="${top.color}"
            stroke="#343434"
            stroke-width="5"
            stroke-linejoin="round"
        />
    `;
}


// ========================================
// BOTTOMS
// ========================================

function drawBottoms(bottom, style) {

    if (style === "shorts") {

        return `
            <path
                d="
                    M140 425
                    L260 425
                    L255 485
                    L215 485
                    L200 450
                    L185 485
                    L145 485 Z
                "
                fill="${bottom.color}"
                stroke="#343434"
                stroke-width="5"
            />
        `;
    }


    return `
        <path
            d="
                M140 420
                L260 420
                L258 505
                L215 505
                L200 450
                L185 505
                L142 505 Z
            "
            fill="${bottom.color}"
            stroke="#343434"
            stroke-width="5"
        />
    `;
}


// ========================================
// SHOES
// ========================================

function drawShoes(shoes, style) {

    if (style === "boots") {

        return `
            <path
                d="
                    M135 485
                    L185 485
                    L185 525
                    L120 525
                    Q115 500 135 485 Z
                "
                fill="${shoes.color}"
                stroke="#343434"
                stroke-width="5"
            />

            <path
                d="
                    M215 485
                    L265 485
                    Q285 500 280 525
                    L215 525 Z
                "
                fill="${shoes.color}"
                stroke="#343434"
                stroke-width="5"
            />

            <line
                x1="125"
                y1="510"
                x2="180"
                y2="510"
                stroke="${shoes.accent}"
                stroke-width="6"
            />

            <line
                x1="220"
                y1="510"
                x2="275"
                y2="510"
                stroke="${shoes.accent}"
                stroke-width="6"
            />
        `;
    }


    return `
        <path
            d="
                M132 495
                Q155 485 185 500
                L185 530
                L120 530
                Q115 510 132 495 Z
            "
            fill="${shoes.color}"
            stroke="#343434"
            stroke-width="5"
        />

        <path
            d="
                M215 500
                Q245 485 268 495
                Q285 510 280 530
                L215 530 Z
            "
            fill="${shoes.color}"
            stroke="#343434"
            stroke-width="5"
        />

        <path
            d="M130 515 L178 515"
            stroke="${shoes.accent}"
            stroke-width="7"
            stroke-linecap="round"
        />

        <path
            d="M222 515 L270 515"
            stroke="${shoes.accent}"
            stroke-width="7"
            stroke-linecap="round"
        />
    `;
}


// ========================================
// ACCESSORIES
// ========================================

function drawAccessory(accessory, style) {

    if (style === "glasses") {

        return `
            <g
                fill="rgba(255,255,255,0.25)"
                stroke="${accessory.color || "#343434"}"
                stroke-width="5"
            >
                <circle cx="170" cy="225" r="27"/>
                <circle cx="230" cy="225" r="27"/>
                <line x1="197" y1="225" x2="203" y2="225"/>
            </g>
        `;
    }


    if (style === "cap") {

        return `
            <path
                d="
                    M130 170
                    Q140 105 200 105
                    Q260 105 270 170
                    Q235 150 200 155
                    Q165 150 130 170 Z
                "
                fill="${accessory.color}"
                stroke="#343434"
                stroke-width="5"
            />

            <path
                d="
                    M200 155
                    Q250 150 285 170
                    Q245 185 200 170 Z
                "
                fill="${accessory.color}"
                stroke="#343434"
                stroke-width="5"
            />
        `;
    }


    if (style === "headphones") {

        return `
            <path
                d="
                    M125 220
                    Q125 115 200 115
                    Q275 115 275 220
                "
                fill="none"
                stroke="${accessory.color}"
                stroke-width="14"
                stroke-linecap="round"
            />

            <rect
                x="112"
                y="205"
                width="28"
                height="55"
                rx="12"
                fill="${accessory.color}"
            />

            <rect
                x="260"
                y="205"
                width="28"
                height="55"
                rx="12"
                fill="${accessory.color}"
            />
        `;
    }


    return "";
}


// ========================================
// MINI PREVIEW SVG
// ========================================

function miniPreview(category, type, variant) {

    const color =
        variant.color || "#777";

    let artwork = "";


    if (
        category === "tops" ||
        category === "bottoms"
    ) {

        artwork = `
            <path
                d="
                    M18 8
                    L10 15
                    L13 38
                    L35 38
                    L38 15
                    L30 8
                    L24 14
                    L18 8 Z
                "
                fill="${color}"
                stroke="#454545"
                stroke-width="2"
            />
        `;
    }


    else if (category === "shoes") {

        artwork = `
            <path
                d="
                    M7 28
                    Q15 23 22 28
                    L22 35
                    L6 35
                    Q4 31 7 28 Z
                "
                fill="${color}"
                stroke="#454545"
                stroke-width="2"
            />

            <path
                d="
                    M28 28
                    Q35 23 42 28
                    Q45 31 44 35
                    L28 35 Z
                "
                fill="${color}"
                stroke="#454545"
                stroke-width="2"
            />
        `;
    }


    else if (category === "hair") {

        artwork = `
            <path
                d="
                    M7 31
                    Q5 9 25 7
                    Q45 9 43 31
                    Q34 24 25 26
                    Q16 24 7 31 Z
                "
                fill="${variant.color}"
                stroke="#454545"
                stroke-width="2"
            />
        `;
    }


    else if (category === "body") {

        artwork = `
            <circle
                cx="25"
                cy="25"
                r="16"
                fill="${color}"
                stroke="#454545"
                stroke-width="2"
            />
        `;
    }


    else if (category === "face") {

        artwork = `
            <ellipse
                cx="25"
                cy="25"
                rx="16"
                ry="17"
                fill="#F2C6A0"
                stroke="#454545"
                stroke-width="2"
            />
        `;
    }


    else if (category === "eyes") {

        artwork = `
            <circle cx="18" cy="25" r="4" fill="#292929"/>
            <circle cx="32" cy="25" r="4" fill="#292929"/>
        `;
    }


    else if (category === "mouth") {

        artwork = `
            <path
                d="M18 27 Q25 34 32 27"
                fill="none"
                stroke="#633E3A"
                stroke-width="3"
                stroke-linecap="round"
            />
        `;
    }


    else if (category === "accessories") {

        if (type.style === "glasses") {

            artwork = `
                <circle
                    cx="18"
                    cy="25"
                    r="7"
                    fill="none"
                    stroke="${color}"
                    stroke-width="3"
                />

                <circle
                    cx="32"
                    cy="25"
                    r="7"
                    fill="none"
                    stroke="${color}"
                    stroke-width="3"
                />

                <line
                    x1="25"
                    y1="25"
                    x2="25"
                    y2="25"
                    stroke="${color}"
                    stroke-width="3"
                />
            `;
        }

        else if (type.style === "cap") {

            artwork = `
                <path
                    d="
                        M8 23
                        Q12 8 25 8
                        Q38 8 42 23
                        Q25 17 8 23 Z
                    "
                    fill="${color}"
                    stroke="#454545"
                    stroke-width="2"
                />
            `;
        }

        else if (type.style === "headphones") {

            artwork = `
                <path
                    d="M10 27 Q10 8 25 8 Q40 8 40 27"
                    fill="none"
                    stroke="${color}"
                    stroke-width="5"
                />

                <rect
                    x="7"
                    y="23"
                    width="6"
                    height="11"
                    rx="3"
                    fill="${color}"
                />

                <rect
                    x="37"
                    y="23"
                    width="6"
                    height="11"
                    rx="3"
                    fill="${color}"
                />
            `;
        }

        else {

            artwork = `
                <text
                    x="25"
                    y="31"
                    text-anchor="middle"
                    font-size="22"
                    fill="#777"
                >—</text>
            `;
        }
    }


    return `
        <svg
            viewBox="0 0 50 50"
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
        >
            ${artwork}
        </svg>
    `;
}


// ========================================
// MAIN MENU
// ========================================

function renderTypeMenu(category) {

    menuLevel = "types";

    currentCategory = category;

    categoryTitle.textContent =
        category.charAt(0).toUpperCase() +
        category.slice(1);

    itemsContainer.innerHTML = "";


    options[category].forEach((type, index) => {

        const button =
            document.createElement("button");

        button.className = "item-button";


        if (
            selected[category].type === index
        ) {
            button.classList.add("selected");
        }


        const previewVariant =
            type.variants[selected[category].variant]
            || type.variants[0];


        button.innerHTML = `

            <div class="item-preview">

                ${miniPreview(
                    category,
                    type,
                    previewVariant
                )}

            </div>

            <span>${type.name}</span>

        `;


        button.addEventListener("click", () => {

            selected[category].type = index;

            selected[category].variant = 0;

            drawAvatar();

            renderVariantMenu(category);
        });


        itemsContainer.appendChild(button);
    });
}


// ========================================
// VARIANT / COLOR MENU
// ========================================

function renderVariantMenu(category) {

    menuLevel = "variants";

    const type =
        options[category][selected[category].type];


    categoryTitle.textContent =
        `${type.name}`;


    itemsContainer.innerHTML = "";


    // BACK BUTTON

    const backButton =
        document.createElement("button");

    backButton.className =
        "item-button";

    backButton.innerHTML = `

        <div class="item-preview">
            ←
        </div>

        <span>Back</span>

    `;


    backButton.addEventListener(
        "click",
        () => renderTypeMenu(category)
    );


    itemsContainer.appendChild(backButton);


    // VARIANTS

    type.variants.forEach(
        (variant, index) => {

            const button =
                document.createElement("button");

            button.className =
                "item-button";


            if (
                selected[category].variant === index
            ) {
                button.classList.add("selected");
            }


            button.innerHTML = `

                <div class="item-preview">

                    ${miniPreview(
                        category,
                        type,
                        variant
                    )}

                </div>

                <span>${variant.name}</span>

            `;


            button.addEventListener(
                "click",
                () => {

                    selected[category].variant =
                        index;

                    drawAvatar();

                    renderVariantMenu(category);
                }
            );


            itemsContainer.appendChild(button);
        }
    );
}


// ========================================
// CATEGORY BUTTONS
// ========================================

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        categoryButtons.forEach(
            otherButton => {
                otherButton.classList.remove(
                    "active"
                );
            }
        );


        button.classList.add("active");


        currentCategory =
            button.dataset.category;


        renderTypeMenu(currentCategory);
    });
});


// ========================================
// RANDOMIZE
// ========================================

randomizeButton.addEventListener(
    "click",
    () => {

        Object.keys(options).forEach(
            category => {

                selected[category].type =
                    Math.floor(
                        Math.random() *
                        options[category].length
                    );


                const type =
                    options[category][
                        selected[category].type
                    ];


                selected[category].variant =
                    Math.floor(
                        Math.random() *
                        type.variants.length
                    );
            }
        );


        drawAvatar();

        renderTypeMenu(currentCategory);
    }
);


// ========================================
// SAVE AVATAR
// ========================================

saveButton.addEventListener(
    "click",
    () => {

        const svg =
            avatar.querySelector("svg");


        if (!svg) {
            return;
        }


        const serializer =
            new XMLSerializer();


        const svgString =
            serializer.serializeToString(svg);


        const blob =
            new Blob(
                [svgString],
                {
                    type:
                        "image/svg+xml;charset=utf-8"
                }
            );


        const url =
            URL.createObjectURL(blob);


        const link =
            document.createElement("a");


        const avatarName =
            nameInput.value.trim() ||
            "my-avatar";


        link.href = url;

        link.download =
            `${avatarName}.svg`;


        link.click();


        URL.revokeObjectURL(url);
    }
);


// ========================================
// NAME MEMORY
// ========================================

nameInput.value =
    localStorage.getItem(
        "avatarName"
    ) || "";


nameInput.addEventListener(
    "input",
    () => {

        localStorage.setItem(
            "avatarName",
            nameInput.value
        );
    }
);


// ========================================
// START GAME
// ========================================

drawAvatar();

renderTypeMenu("body");
