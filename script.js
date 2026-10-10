// ========================================
// AVATAR GAME
// POLISHED 2.5D AVATAR ENGINE
// ========================================


// ========================================
// CURRENT SELECTION
// ========================================

const selected = {
    body: { type: 0, variant: 0 },
    face: { type: 0, variant: 0 },
    hair: { type: 0, variant: 0 },
    eyes: { type: 0, variant: 0 },
    mouth: { type: 0, variant: 0 },
    tops: { type: 0, variant: 0 },
    bottoms: { type: 0, variant: 0 },
    shoes: { type: 0, variant: 0 },
    accessories: { type: 0, variant: 0 }
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
                { name: "Silver", color: "#9CA2A9" },
                { name: "Blue", color: "#496B91" }
            ]
        },

        {
            name: "Cap",
            style: "cap",
            variants: [
                { name: "Black", color: "#292929" },
                { name: "Blue", color: "#46658F" },
                { name: "Red", color: "#C95353" },
                { name: "Green", color: "#4D6957" }
            ]
        },

                {
            name: "Backwards Cap",
            style: "backwardsCap",
            variants: [
                { name: "Black", color: "#292929" },
                { name: "Blue", color: "#46658F" },
                { name: "Red", color: "#C95353" },
                { name: "Green", color: "#4D6957" }
            ]
        },

{
            name: "Beanie",
            style: "beanie",
            variants: [
                { name: "Black", color: "#292929" },
                { name: "Gray", color: "#70747A" },
                { name: "Blue", color: "#506887" },
                { name: "Red", color: "#A94848" }
            ]
        },

        {
            name: "Headphones",
            style: "headphones",
            variants: [
                { name: "Black", color: "#3A3A3A" },
                { name: "White", color: "#D9DCE0" },
                { name: "Blue", color: "#4B6791" },
                { name: "Red", color: "#B94A4A" }
            ]
        }
    ]
};


// ========================================
// DOM
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
// COLOR HELPERS
// ========================================

function hexToRgb(hex) {

    hex = hex.replace("#", "");

    if (hex.length === 3) {
        hex =
            hex[0] + hex[0] +
            hex[1] + hex[1] +
            hex[2] + hex[2];
    }

    return {
        r: parseInt(hex.substring(0, 2), 16),
        g: parseInt(hex.substring(2, 4), 16),
        b: parseInt(hex.substring(4, 6), 16)
    };
}


function rgbToHex(r, g, b) {

    const clamp = value =>
        Math.max(0, Math.min(255, Math.round(value)));

    return "#" +
        clamp(r).toString(16).padStart(2, "0") +
        clamp(g).toString(16).padStart(2, "0") +
        clamp(b).toString(16).padStart(2, "0");
}


function shadeColor(hex, amount) {

    const rgb = hexToRgb(hex);

    return rgbToHex(
        rgb.r + amount,
        rgb.g + amount,
        rgb.b + amount
    );
}


// ========================================
// SVG WRAPPER
// ========================================

function svgElement(content) {

    const skinColor = options.body[selected.body.type].variants[selected.body.variant].color;
    const hairColor = options.hair[selected.hair.type].variants[selected.hair.variant].color;
    const topColor = options.tops[selected.tops.type].variants[selected.tops.variant].color;
    const bottomColor = options.bottoms[selected.bottoms.type].variants[selected.bottoms.variant].color;
    const shoeColor = options.shoes[selected.shoes.type].variants[selected.shoes.variant].color;
    const accessoryColor = options.accessories[selected.accessories.type].variants[selected.accessories.variant].color || "#59616E";

    return `
        <svg
            viewBox="0 0 400 600"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Avatar"
        >

            <defs>

                <linearGradient id="skinVolume" x1="0" y1="0" x2="0.9" y2="1">
                    <stop offset="0%" stop-color="${shadeColor(skinColor, 36)}"/>
                    <stop offset="34%" stop-color="${shadeColor(skinColor, 8)}"/>
                    <stop offset="70%" stop-color="${shadeColor(skinColor, -10)}"/>
                    <stop offset="100%" stop-color="${shadeColor(skinColor, -54)}"/>
                </linearGradient>

                <linearGradient id="hairVolume" x1="0" y1="0" x2="0.8" y2="1">
                    <stop offset="0%" stop-color="${shadeColor(hairColor, 58)}"/>
                    <stop offset="32%" stop-color="${shadeColor(hairColor, 24)}"/>
                    <stop offset="68%" stop-color="${hairColor}"/>
                    <stop offset="100%" stop-color="${shadeColor(hairColor, -58)}"/>
                </linearGradient>

                <linearGradient id="clothVolume" x1="0" y1="0" x2="0.8" y2="1">
                    <stop offset="0%" stop-color="${shadeColor(topColor, 48)}"/>
                    <stop offset="34%" stop-color="${shadeColor(topColor, 16)}"/>
                    <stop offset="68%" stop-color="${shadeColor(topColor, -8)}"/>
                    <stop offset="100%" stop-color="${shadeColor(topColor, -54)}"/>
                </linearGradient>

                <linearGradient id="bottomVolume" x1="0" y1="0" x2="0.8" y2="1">
                    <stop offset="0%" stop-color="${shadeColor(bottomColor, 34)}"/>
                    <stop offset="42%" stop-color="${shadeColor(bottomColor, 6)}"/>
                    <stop offset="100%" stop-color="${shadeColor(bottomColor, -50)}"/>
                </linearGradient>

                <linearGradient id="shoeVolume" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="${shadeColor(shoeColor, 38)}"/>
                    <stop offset="58%" stop-color="${shadeColor(shoeColor, 4)}"/>
                    <stop offset="100%" stop-color="${shadeColor(shoeColor, -38)}"/>
                </linearGradient>

                <linearGradient id="accessoryVolume" x1="0" y1="0" x2="0.8" y2="1">
                    <stop offset="0%" stop-color="${shadeColor(accessoryColor, 48)}"/>
                    <stop offset="40%" stop-color="${shadeColor(accessoryColor, 8)}"/>
                    <stop offset="100%" stop-color="${shadeColor(accessoryColor, -42)}"/>
                </linearGradient>

                <linearGradient id="lensVolume" x1="0" y1="0" x2="0.7" y2="1">
                    <stop offset="0%" stop-color="#FFFFFF" stop-opacity=".68"/>
                    <stop offset="45%" stop-color="#CDEBFF" stop-opacity=".20"/>
                    <stop offset="100%" stop-color="#7DAFCB" stop-opacity=".12"/>
                </linearGradient>

                <linearGradient
                    id="skinGradient"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="1"
                >
                    <stop
                        offset="0%"
                        stop-color="#fff"
                        stop-opacity="0.32"
                    />

                    <stop
                        offset="45%"
                        stop-color="#fff"
                        stop-opacity="0"
                    />

                    <stop
                        offset="100%"
                        stop-color="#000"
                        stop-opacity="0.16"
                    />
                </linearGradient>

                <linearGradient
                    id="clothLight"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="1"
                >
                    <stop
                        offset="0%"
                        stop-color="#fff"
                        stop-opacity="0.30"
                    />

                    <stop
                        offset="48%"
                        stop-color="#fff"
                        stop-opacity="0"
                    />

                    <stop
                        offset="100%"
                        stop-color="#000"
                        stop-opacity="0.18"
                    />
                </linearGradient>

                <linearGradient
                    id="hairLight"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="1"
                >
                    <stop
                        offset="0%"
                        stop-color="#fff"
                        stop-opacity="0.18"
                    />

                    <stop
                        offset="55%"
                        stop-color="#fff"
                        stop-opacity="0"
                    />

                    <stop
                        offset="100%"
                        stop-color="#000"
                        stop-opacity="0.24"
                    />
                </linearGradient>

                <filter
                    id="softShadow"
                    x="-50%"
                    y="-50%"
                    width="200%"
                    height="200%"
                >
                    <feGaussianBlur
                        stdDeviation="7"
                    />
                </filter>

                <filter
                    id="smallShadow"
                    x="-50%"
                    y="-50%"
                    width="200%"
                    height="200%"
                >
                    <feGaussianBlur
                        stdDeviation="3"
                    />
                </filter>

                <filter id="raised" x="-35%" y="-35%" width="170%" height="180%">
                    <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#17202B" flood-opacity=".32"/>
                </filter>

            </defs>

            ${content}

        </svg>
    `;
}


// ========================================
// MAIN AVATAR
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
        accessoryType.variants[
            selected.accessories.variant
        ];


    const skinDark =
        shadeColor(body.color, -24);


    avatar.innerHTML = svgElement(`

        <!-- GROUND SHADOW -->

        <ellipse
            cx="200"
            cy="563"
            rx="105"
            ry="17"
            fill="#54788C"
            opacity="0.18"
            filter="url(#softShadow)"
        />

        <ellipse
            cx="200"
            cy="557"
            rx="82"
            ry="10"
            fill="#5E8090"
            opacity="0.12"
        />


        <!-- BACK HAIR -->

        ${drawBackHair(hair)}


        <!-- LEGS -->

        ${drawLegs(body.color)}


        <!-- SHOES -->

        ${drawShoes(shoes, shoeType.style)}


        <!-- BOTTOMS -->

        ${drawBottoms(bottom, bottomType.style)}


        <!-- TORSO -->

        ${drawTop(top, topType.style)}


        <!-- ARMS -->

        ${drawArms(body.color, top, topType.style)}


        <!-- HANDS -->

        ${drawHands(body.color)}


        <!-- NECK -->

        <path
            d="
                M176 276
                Q200 288 224 276
                L225 325
                Q200 340 175 325 Z
            "
            fill="url(#skinVolume)"
            stroke="${skinDark}"
            stroke-width="3"
        />

        <path
            d="
                M181 290
                Q200 300 219 290
                L219 320
                Q200 329 181 320 Z
            "
            fill="url(#skinGradient)"
        />


        <!-- EARS -->

        ${drawEars(body.color)}


        <!-- FACE -->

        ${drawFace(face, body.color)}


        <!-- FACE LIGHT -->

        <ellipse
            cx="183"
            cy="205"
            rx="48"
            ry="65"
            fill="#fff"
            opacity="0.12"
        />


        <!-- NOSE -->

        <path
            d="
                M199 224
                Q193 244 198 247
                Q204 250 209 246
            "
            fill="none"
            stroke="${shadeColor(body.color, -42)}"
            stroke-width="3"
            stroke-linecap="round"
            opacity="0.65"
        />


        <!-- CHEEKS -->

        <ellipse
            cx="151"
            cy="251"
            rx="15"
            ry="7"
            fill="#E88D87"
            opacity="0.14"
        />

        <ellipse
            cx="249"
            cy="251"
            rx="15"
            ry="7"
            fill="#E88D87"
            opacity="0.14"
        />


        <!-- EYEBROWS -->

        ${drawBrows(eyes)}


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
// LEGS
// ========================================

function drawLegs(skin) {

    const dark = shadeColor(skin, -28);

    return `
        <path
            d="
                M143 425
                Q160 417 183 427
                L183 507
                Q166 518 145 507
                Z
            "
            fill="url(#skinVolume)"
            stroke="${dark}"
            stroke-width="4"
        />

        <path
            d="
                M217 427
                Q240 417 257 425
                L255 507
                Q234 518 217 507
                Z
            "
            fill="url(#skinVolume)"
            stroke="${dark}"
            stroke-width="4"
        />

        <path
            d="
                M153 438
                Q166 430 178 437
                L178 493
                Q166 500 153 493 Z
            "
            fill="url(#skinGradient)"
            opacity="0.7"
        />

        <path
            d="
                M222 437
                Q235 430 248 438
                L247 493
                Q235 500 222 493 Z
            "
            fill="url(#skinGradient)"
            opacity="0.7"
        />
    `;
}


// ========================================
// ARMS
// ========================================

function drawArms(skin, top, style) {

    const dark = shadeColor(skin, -30);

    if (style === "hoodie" || style === "sweater" || style === "jacket") {

        return `
            <path
                d="
                    M145 315
                    Q122 318 112 345
                    L102 412
                    Q102 432 118 437
                    Q135 440 141 421
                    L154 360 Z
                "
                fill="url(#clothVolume)"
                stroke="#34363B"
                stroke-width="4"
            />

            <path
                d="
                    M255 315
                    Q278 318 288 345
                    L298 412
                    Q298 432 282 437
                    Q265 440 259 421
                    L246 360 Z
                "
                fill="url(#clothVolume)"
                stroke="#34363B"
                stroke-width="4"
            />

            <path
                d="
                    M105 408
                    Q120 420 139 414
                    L136 435
                    Q119 444 105 432 Z
                "
                fill="${shadeColor(top.color, -25)}"
            />

            <path
                d="
                    M295 408
                    Q280 420 261 414
                    L264 435
                    Q281 444 295 432 Z
                "
                fill="${shadeColor(top.color, -25)}"
            />
        `;
    }

    return `
        <path
            d="
                M148 313
                Q126 319 116 344
                L106 410
                Q104 429 119 435
                Q135 439 141 420
                L155 352 Z
            "
            fill="url(#skinVolume)"
            stroke="${dark}"
            stroke-width="4"
        />

        <path
            d="
                M252 313
                Q274 319 284 344
                L294 410
                Q296 429 281 435
                Q265 439 259 420
                L245 352 Z
            "
            fill="url(#skinVolume)"
            stroke="${dark}"
            stroke-width="4"
        />

        <path
            d="
                M113 348
                Q126 330 141 329
                L134 410
                Q129 420 116 414 Z
            "
            fill="url(#skinGradient)"
        />

        <path
            d="
                M287 348
                Q274 330 259 329
                L266 410
                Q271 420 284 414 Z
            "
            fill="url(#skinGradient)"
        />

        ${style === "shirt" ? `
            <path d="M148 313 Q126 319 116 344 L113 365 Q126 371 143 365 L155 352 Z" fill="url(#clothVolume)" stroke="${shadeColor(top.color, -25)}" stroke-width="4"/>
            <path d="M252 313 Q274 319 284 344 L287 365 Q274 371 257 365 L245 352 Z" fill="url(#clothVolume)" stroke="${shadeColor(top.color, -25)}" stroke-width="4"/>
        ` : ""}
    `;
}


// ========================================
// HANDS
// ========================================

function drawHands(skin) {

    const dark = shadeColor(skin, -25);

    return `
        <ellipse
            cx="119"
            cy="427"
            rx="16"
            ry="18"
            fill="url(#skinVolume)"
            stroke="${dark}"
            stroke-width="3"
        />

        <ellipse
            cx="281"
            cy="427"
            rx="16"
            ry="18"
            fill="url(#skinVolume)"
            stroke="${dark}"
            stroke-width="3"
        />

        <path
            d="M111 424 Q119 431 127 424"
            fill="none"
            stroke="${dark}"
            stroke-width="2"
            opacity="0.5"
        />

        <path
            d="M273 424 Q281 431 289 424"
            fill="none"
            stroke="${dark}"
            stroke-width="2"
            opacity="0.5"
        />
    `;
}


// ========================================
// EARS
// ========================================

function drawEars(skin) {

    const dark = shadeColor(skin, -30);

    return `
        <ellipse
            cx="126"
            cy="230"
            rx="16"
            ry="24"
            fill="url(#skinVolume)"
            stroke="${dark}"
            stroke-width="4"
        />

        <ellipse
            cx="274"
            cy="230"
            rx="16"
            ry="24"
            fill="url(#skinVolume)"
            stroke="${dark}"
            stroke-width="4"
        />

        <path
            d="
                M124 222
                Q115 230 125 238
            "
            fill="none"
            stroke="${dark}"
            stroke-width="3"
            opacity="0.6"
        />

        <path
            d="
                M276 222
                Q285 230 275 238
            "
            fill="none"
            stroke="${dark}"
            stroke-width="3"
            opacity="0.6"
        />
    `;
}


// ========================================
// FACE
// ========================================

function drawFace(face, skin) {

    let width = 150;
    let height = 155;

    if (face.shape === "soft") {
        width = 145;
        height = 160;
    }

    if (face.shape === "wide") {
        width = 166;
        height = 148;
    }

    const dark = shadeColor(skin, -30);

    return `
        <ellipse
            cx="200"
            cy="230"
            rx="${width / 2}"
            ry="${height / 2}"
            fill="url(#skinVolume)"
            stroke="${dark}"
            stroke-width="4"
            filter="url(#raised)"
        />

        <ellipse
            cx="200"
            cy="230"
            rx="${width / 2 - 5}"
            ry="${height / 2 - 5}"
            fill="url(#skinGradient)"
        />
    `;
}


// ========================================
// BROWS
// ========================================

function drawBrows(eyes) {

    if (eyes.style === "sleepy") {

        return `
            <path
                d="M154 201 Q170 194 185 201"
                fill="none"
                stroke="#51352C"
                stroke-width="6"
                stroke-linecap="round"
            />

            <path
                d="M215 201 Q230 194 246 201"
                fill="none"
                stroke="#51352C"
                stroke-width="6"
                stroke-linecap="round"
            />
        `;
    }

    return `
        <path
            d="M154 198 Q170 190 185 197"
            fill="none"
            stroke="#51352C"
            stroke-width="6"
            stroke-linecap="round"
        />

        <path
            d="M215 197 Q230 190 246 198"
            fill="none"
            stroke="#51352C"
            stroke-width="6"
            stroke-linecap="round"
        />
    `;
}


// ========================================
// HAIR BACK
// ========================================

function drawBackHair(hair) {

    const dark = shadeColor(hair.color, -35);

    if (hair.style === "messy") {

        return `
            <path
                d="
                    M120 235
                    Q101 178 120 137
                    Q130 103 159 91
                    Q177 69 199 91
                    Q223 65 248 91
                    Q286 91 298 130
                    Q315 177 291 235
                    L273 270
                    L127 270 Z
                "
                fill="url(#hairVolume)"
                stroke="${dark}"
                stroke-width="6"
                stroke-linejoin="round"
            />

            <path
                d="
                    M135 151
                    Q157 103 191 106
                    Q170 127 163 164
                "
                fill="url(#hairLight)"
            />

            <path
                d="
                    M238 103
                    Q276 110 286 152
                    Q268 130 249 126
                "
                fill="#fff"
                opacity="0.08"
            />
        `;
    }


    if (hair.style === "fluffy") {

        return `
            <path
                d="
                    M112 239
                    Q91 187 113 139
                    Q125 93 164 91
                    Q190 66 215 91
                    Q248 69 274 98
                    Q309 109 302 153
                    Q319 198 288 250
                    L119 263 Z
                "
                fill="url(#hairVolume)"
                stroke="${dark}"
                stroke-width="6"
            />

            <path
                d="
                    M124 150
                    Q143 105 181 103
                    Q154 128 149 168
                "
                fill="url(#hairLight)"
            />

            <path
                d="
                    M250 105
                    Q282 117 290 151
                "
                fill="#fff"
                opacity="0.08"
            />
        `;
    }


    return `
        <path
            d="
                M120 230
                Q112 143 151 112
                Q175 91 201 94
                Q238 91 265 115
                Q290 145 280 230
                L267 264
                L133 264 Z
            "
            fill="url(#hairVolume)"
            stroke="${dark}"
            stroke-width="6"
        />

        <path
            d="
                M139 155
                Q155 117 195 108
                Q169 130 163 163
            "
            fill="url(#hairLight)"
        />
    `;
}


// ========================================
// HAIR FRONT
// ========================================

function drawFrontHair(hair) {

    const dark = shadeColor(hair.color, -30);

    if (hair.style === "messy") {

        return `
            <path
                d="
                    M126 180
                    Q137 119 192 119
                    Q220 101 251 126
                    Q271 139 278 178

                    Q258 166 240 181
                    Q224 148 203 181
                    Q188 143 166 182
                    Q147 162 126 180 Z
                "
                fill="url(#hairVolume)"
                stroke="${dark}"
                stroke-width="4"
                stroke-linejoin="round"
            />

            <path
                d="
                    M145 153
                    Q165 128 190 126
                "
                fill="none"
                stroke="#fff"
                stroke-width="6"
                opacity="0.11"
                stroke-linecap="round"
            />
        `;
    }


    if (hair.style === "fluffy") {

        return `
            <path
                d="
                    M119 177
                    Q133 111 190 117
                    Q215 95 244 120
                    Q268 132 281 176

                    Q258 151 238 170
                    Q217 132 195 170
                    Q176 133 151 170
                    Q135 150 119 177 Z
                "
                fill="url(#hairVolume)"
                stroke="${dark}"
                stroke-width="4"
            />

            <path
                d="
                    M139 146
                    Q164 118 190 121
                "
                fill="none"
                stroke="#fff"
                stroke-width="7"
                opacity="0.1"
                stroke-linecap="round"
            />
        `;
    }


    return `
        <path
            d="
                M126 177
                Q139 119 194 118
                Q222 108 249 126
                Q269 139 276 177

                Q250 152 224 169
                Q204 144 182 169
                Q157 149 126 177 Z
            "
            fill="url(#hairVolume)"
            stroke="${dark}"
            stroke-width="4"
        />

        <path
            d="
                M145 150
                Q164 125 191 123
            "
            fill="none"
            stroke="#fff"
            stroke-width="6"
            opacity="0.1"
            stroke-linecap="round"
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
                d="M154 225 Q169 208 185 225"
                fill="none"
                stroke="#302B2A"
                stroke-width="8"
                stroke-linecap="round"
            />

            <path
                d="M215 225 Q231 208 246 225"
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
                d="M154 225 Q170 235 185 225"
                fill="none"
                stroke="#302B2A"
                stroke-width="8"
                stroke-linecap="round"
            />

            <path
                d="M215 225 Q230 235 246 225"
                fill="none"
                stroke="#302B2A"
                stroke-width="8"
                stroke-linecap="round"
            />
        `;
    }


    if (eyes.style === "big") {

        return `
            <ellipse
                cx="169"
                cy="225"
                rx="19"
                ry="22"
                fill="#302B2A"
            />

            <ellipse
                cx="231"
                cy="225"
                rx="19"
                ry="22"
                fill="#302B2A"
            />

            <ellipse
                cx="169"
                cy="230"
                rx="11"
                ry="14"
                fill="#111"
            />

            <ellipse
                cx="231"
                cy="230"
                rx="11"
                ry="14"
                fill="#111"
            />

            <circle
                cx="163"
                cy="217"
                r="6"
                fill="white"
            />

            <circle
                cx="225"
                cy="217"
                r="6"
                fill="white"
            />

            <circle
                cx="176"
                cy="232"
                r="3"
                fill="white"
                opacity="0.7"
            />

            <circle
                cx="238"
                cy="232"
                r="3"
                fill="white"
                opacity="0.7"
            />
        `;
    }


    return `
        <ellipse
            cx="170"
            cy="225"
            rx="13"
            ry="18"
            fill="#302B2A"
        />

        <ellipse
            cx="230"
            cy="225"
            rx="13"
            ry="18"
            fill="#302B2A"
        />

        <ellipse
            cx="170"
            cy="228"
            rx="7"
            ry="11"
            fill="#111"
        />

        <ellipse
            cx="230"
            cy="228"
            rx="7"
            ry="11"
            fill="#111"
        />

        <circle
            cx="166"
            cy="219"
            r="4.5"
            fill="white"
        />

        <circle
            cx="226"
            cy="219"
            r="4.5"
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
                d="M173 260 Q200 284 227 260"
                fill="none"
                stroke="#633E3A"
                stroke-width="6"
                stroke-linecap="round"
            />

            <path
                d="M181 267 Q200 276 219 267"
                fill="none"
                stroke="#fff"
                stroke-width="3"
                opacity="0.45"
                stroke-linecap="round"
            />
        `;
    }


    if (mouth.style === "open") {

        return `
            <ellipse
                cx="200"
                cy="263"
                rx="17"
                ry="13"
                fill="#633E3A"
            />

            <path
                d="M188 258 Q200 253 212 258"
                fill="none"
                stroke="#F5B8B4"
                stroke-width="3"
                opacity="0.7"
            />
        `;
    }


    if (mouth.style === "neutral") {

        return `
            <line
                x1="184"
                y1="263"
                x2="216"
                y2="263"
                stroke="#633E3A"
                stroke-width="5"
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

    const dark = shadeColor(top.color, -35);

    if (style === "hoodie") {

        return `
            <path
                d="
                    M145 310
                    Q160 294 180 288
                    L200 315
                    L220 288
                    Q240 294 255 310
                    L282 336
                    L263 454
                    L137 454
                    L118 336 Z
                "
                fill="url(#clothVolume)"
                stroke="${dark}"
                stroke-width="6"
                stroke-linejoin="round"
            />

            <path
                d="
                    M165 299
                    Q200 329 235 299
                    L228 333
                    Q200 347 172 333 Z
                "
                fill="${shadeColor(top.color, -20)}"
                opacity="0.9"
            />

            <path
                d="
                    M165 299 Q200 334 235 299
                "
                fill="none"
                stroke="#fff"
                stroke-width="5"
                opacity="0.18"
            />

            <path
                d="
                    M180 352
                    L180 424
                "
                stroke="#000"
                stroke-width="4"
                opacity="0.12"
                stroke-linecap="round"
            />

            <path
                d="
                    M220 352
                    L220 424
                "
                stroke="#000"
                stroke-width="4"
                opacity="0.12"
                stroke-linecap="round"
            />

            <path
                d="
                    M141 348
                    Q157 331 169 328
                    L161 442
                    L141 442 Z
                "
                fill="url(#clothLight)"
            />
        `;
    }


    if (style === "sweater") {

        return `
            <path
                d="
                    M146 308
                    L116 338
                    L137 454
                    L263 454
                    L284 338
                    L254 308
                    L225 298
                    L200 324
                    L175 298 Z
                "
                fill="url(#clothVolume)"
                stroke="${dark}"
                stroke-width="6"
                stroke-linejoin="round"
            />

            <path
                d="
                    M143 331
                    Q200 353 257 331
                "
                fill="none"
                stroke="#fff"
                stroke-width="5"
                opacity="0.14"
            />

            <path
                d="
                    M150 355
                    Q169 343 178 344
                    L170 442
                    L144 438 Z
                "
                fill="url(#clothLight)"
            />

            <path
                d="
                    M250 355
                    Q231 343 222 344
                    L230 442
                    L256 438 Z
                "
                fill="#000"
                opacity="0.08"
            />
        `;
    }


    if (style === "jacket") {

        return `
            <path
                d="
                    M146 308
                    L116 338
                    L137 454
                    L263 454
                    L284 338
                    L254 308
                    L225 298
                    L200 324
                    L175 298 Z
                "
                fill="url(#clothVolume)"
                stroke="${dark}"
                stroke-width="6"
                stroke-linejoin="round"
            />

            <path
                d="
                    M200 324
                    L200 450
                "
                stroke="#111"
                stroke-width="5"
                opacity="0.28"
            />

            <path
                d="
                    M201 325
                    L201 450
                "
                stroke="#fff"
                stroke-width="2"
                opacity="0.18"
            />

            <path
                d="
                    M145 332
                    Q163 321 177 315
                    L170 442
                    L143 438 Z
                "
                fill="url(#clothLight)"
            />
        `;
    }


    return `
        <path
            d="
                M150 309
                L120 335
                L140 454
                L260 454
                L280 335
                L250 309
                L225 299
                L200 324
                L175 299 Z
            "
            fill="url(#clothVolume)"
            stroke="${dark}"
            stroke-width="6"
            stroke-linejoin="round"
        />

        <path
            d="
                M144 338
                Q158 322 173 318
                L166 442
                L143 438 Z
            "
            fill="url(#clothLight)"
        />

        <path
            d="
                M175 337
                Q200 348 225 337
            "
            fill="none"
            stroke="#fff"
            stroke-width="4"
            opacity="0.13"
        />
    `;
}


// ========================================
// BOTTOMS
// ========================================

function drawBottoms(bottom, style) {

    const dark = shadeColor(bottom.color, -35);

    if (style === "shorts") {

        return `
            <path
                d="
                    M140 423
                    L260 423
                    L256 460
                    L215 460
                    L200 451
                    L185 460
                    L144 460 Z
                "
                fill="url(#bottomVolume)"
                stroke="${dark}"
                stroke-width="6"
            />

            <path
                d="
                    M146 431
                    Q165 440 184 436
                    L178 452
                    L150 452 Z
                "
                fill="url(#clothLight)"
            />

            <path
                d="
                    M214 436
                    Q235 440 253 431
                    L250 452
                    L221 452 Z
                "
                fill="#000"
                opacity="0.09"
            />

            <line
                x1="200"
                y1="432"
                x2="200"
                y2="448"
                stroke="#000"
                stroke-width="3"
                opacity="0.2"
            />
        `;
    }


    return `
        <path
            d="
                M140 419
                L260 419
                L258 505
                L215 505
                L200 450
                L185 505
                L142 505 Z
            "
            fill="url(#bottomVolume)"
            stroke="${dark}"
            stroke-width="6"
        />

        <path
            d="
                M147 429
                Q166 438 184 433
                L178 496
                L150 496 Z
            "
            fill="url(#clothLight)"
        />

        <path
            d="
                M215 433
                Q235 438 253 429
                L249 496
                L220 496 Z
            "
            fill="#000"
            opacity="0.1"
        />

        <line
            x1="200"
            y1="425"
            x2="200"
            y2="449"
            stroke="#000"
            stroke-width="3"
            opacity="0.2"
        />
    `;
}


// ========================================
// SHOES
// ========================================

function drawShoes(shoes, style) {

    const dark = shadeColor(shoes.color, -40);

    if (style === "boots") {

        return `
            <path
                d="
                    M145 483
                    Q164 480 180 487
                    L178 507 Q176 515 167 517
                    L128 517
                    Q120 515 122 507 Q129 491 145 483 Z
                "
                fill="url(#shoeVolume)"
                stroke="${dark}"
                stroke-width="6"
            />

            <path
                d="
                    M220 487
                    Q236 480 255 483
                    Q271 491 278 507 Q280 515 272 517
                    L233 517 Z
                "
                fill="url(#shoeVolume)"
                stroke="${dark}"
                stroke-width="6"
            />

            <path
                d="
                    M130 493
                    L178 493
                    L173 503
                    L130 503 Z
                "
                fill="url(#clothLight)"
                opacity="0.8"
            />

            <path
                d="
                    M222 493
                    L270 493
                    L268 503
                    L227 503 Z
                "
                fill="url(#clothLight)"
                opacity="0.8"
            />

            <line
                x1="125"
                y1="514"
                x2="180"
                y2="514"
                stroke="${shoes.accent}"
                stroke-width="6"
                stroke-linecap="round"
            />

            <line
                x1="220"
                y1="514"
                x2="275"
                y2="514"
                stroke="${shoes.accent}"
                stroke-width="6"
                stroke-linecap="round"
            />
        `;
    }


    return `
        <path
            d="
                M132 494
                Q154 483 185 499
                L185 530
                L120 530
                Q113 510 132 494 Z
            "
            fill="url(#shoeVolume)"
            stroke="${dark}"
            stroke-width="6"
        />

        <path
            d="
                M215 499
                Q246 483 268 494
                Q287 510 280 530
                L215 530 Z
            "
            fill="url(#shoeVolume)"
            stroke="${dark}"
            stroke-width="6"
        />

        <path
            d="
                M128 501
                Q151 491 179 505
                L179 515
                L128 515 Z
            "
            fill="#fff"
            opacity="0.18"
        />

        <path
            d="
                M221 505
                Q249 491 272 501
                L272 515
                L221 515 Z
            "
            fill="#000"
            opacity="0.08"
        />

        <path
            d="M130 517 L178 517"
            stroke="${shoes.accent}"
            stroke-width="7"
            stroke-linecap="round"
        />

        <path
            d="M222 517 L270 517"
            stroke="${shoes.accent}"
            stroke-width="7"
            stroke-linecap="round"
        />

        <path
            d="M122 528 L182 528"
            stroke="#fff"
            stroke-width="4"
            opacity="0.65"
            stroke-linecap="round"
        />

        <path
            d="M218 528 L278 528"
            stroke="#fff"
            stroke-width="4"
            opacity="0.65"
            stroke-linecap="round"
        />
    `;
}


// ========================================
// ACCESSORIES
// ========================================

function drawAccessory(accessory, style) {

    const color = accessory.color || "#4A5360";
    const dark = shadeColor(color, -34);
    const light = shadeColor(color, 30);

    if (style === "glasses") {
        return `
            <g filter="url(#raised)">
                <path d="M151 216 Q140 211 130 218 L126 222" fill="none" stroke="${dark}" stroke-width="5" stroke-linecap="round"/>
                <path d="M249 216 Q260 211 270 218 L274 222" fill="none" stroke="${dark}" stroke-width="5" stroke-linecap="round"/>
                <path d="M151 211 Q151 205 158 205 L181 205 Q189 205 189 213 L186 231 Q185 239 177 240 L164 240 Q155 239 154 231 Z" fill="url(#lensVolume)" stroke="${dark}" stroke-width="5" stroke-linejoin="round"/>
                <path d="M211 205 L234 205 Q241 205 241 211 L238 231 Q237 239 229 240 L216 240 Q207 239 206 231 L203 213 Q203 205 211 205 Z" fill="url(#lensVolume)" stroke="${dark}" stroke-width="5" stroke-linejoin="round"/>
                <path d="M189 215 Q199 209 203 215" fill="none" stroke="${dark}" stroke-width="5" stroke-linecap="round"/>
                <path d="M157 211 Q169 207 180 211 M210 211 Q222 207 234 211" fill="none" stroke="${light}" stroke-width="2.5" stroke-linecap="round" opacity=".72"/>
                <path d="M159 219 Q158 226 161 230 M212 219 Q211 226 214 230" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" opacity=".55"/>
                <circle cx="158" cy="213" r="2" fill="${light}"/><circle cx="234" cy="213" r="2" fill="${light}"/>
            </g>
        `;
    }

        if (style === "backwardsCap") {
        return `
            <g filter="url(#raised)">
                <path d="M130 166 C128 146 134 124 148 108 C161 93 180 86 201 86 C224 86 244 98 258 117 C268 132 273 149 270 166 C249 159 226 155 202 155 C176 155 151 159 130 166 Z" fill="url(#accessoryVolume)" stroke="${dark}" stroke-width="4" stroke-linejoin="round"/>
                <path d="M200 90 C200 112 201 132 201 154 M153 107 C165 122 174 138 178 156 M248 111 C235 126 227 140 223 156" fill="none" stroke="${dark}" stroke-width="2" opacity=".58"/>
                <path d="M145 139 C152 119 167 103 186 97" fill="none" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" opacity=".14"/>
                <path d="M132 161 C165 155 198 154 230 157 C247 159 260 162 270 165 L268 170 C245 166 222 165 200 165 C176 165 153 167 134 171 Z" fill="${dark}" stroke="${dark}" stroke-width="2"/>
                <path d="M166 158 C188 155 213 155 236 158 L236 166 C213 163 189 163 166 166 Z" fill="${color}" stroke="${dark}" stroke-width="2" stroke-linejoin="round"/>
                <path d="M190 157 L210 157 L210 165 L190 165 Z" fill="${dark}" stroke="${light}" stroke-width="1.5"/>
                <path d="M194 159 L206 159 L206 163 L194 163 Z" fill="none" stroke="${light}" stroke-width="1" opacity=".8"/>
                <circle cx="201" cy="85" r="4" fill="${light}" stroke="${dark}" stroke-width="1.5"/>
            </g>
        `;
    }


if (style === "cap") {
        return `
            <g filter="url(#raised)">
                <path d="M130 166 C128 146 134 124 148 108 C161 93 180 86 201 86 C224 86 244 98 258 117 C268 132 273 149 270 166 C249 159 226 155 202 155 C176 155 151 159 130 166 Z" fill="url(#accessoryVolume)" stroke="${dark}" stroke-width="5" stroke-linejoin="round"/>
                <path d="M132 157 C162 147 196 144 230 149 C249 151 266 157 276 165 C272 173 259 178 241 178 C209 172 174 171 139 179 C130 176 126 166 132 157 Z" fill="${dark}"/>
                <path d="M132 161 C165 155 198 154 230 157 C247 159 260 162 270 165 L268 170 C245 166 222 165 200 165 C176 165 153 167 134 171 Z" fill="url(#accessoryVolume)" stroke="${dark}" stroke-width="3"/>
                <path d="M200 90 C200 112 201 132 201 154 M153 107 C165 122 174 138 178 156 M248 111 C235 126 227 140 223 156" fill="none" stroke="${dark}" stroke-width="2.5" opacity=".72"/>
                <path d="M145 139 C152 119 167 103 186 97" fill="none" stroke="#FFFFFF" stroke-width="8" stroke-linecap="round" opacity=".18"/>
                <path d="M139 166 C167 158 190 157 211 159" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" opacity=".24"/>
                <circle cx="201" cy="85" r="4" fill="${light}" stroke="${dark}" stroke-width="1.5"/>
            </g>
        `;
    }

    if (style === "beanie") {
        return `
            <g filter="url(#raised)">
                <path d="M130 169 C128 149 132 128 143 111 C156 91 176 80 199 80 C221 80 241 91 255 108 C267 124 273 146 270 167 C249 160 225 156 200 156 C174 156 151 160 130 169 Z" fill="url(#accessoryVolume)" stroke="${dark}" stroke-width="5" stroke-linejoin="round"/>
                <path d="M130 153 C151 149 176 147 200 147 C224 147 248 149 270 153 L271 174 C249 169 225 166 200 166 C175 166 151 169 129 174 Z" fill="${dark}" stroke="${dark}" stroke-width="3"/>
                <path d="M133 155 C155 152 178 150 200 150 C223 150 246 152 267 155" fill="none" stroke="${light}" stroke-width="4" stroke-linecap="round" opacity=".8"/>
                <path d="M146 157 L146 171 M160 154 L160 169 M176 152 L176 167 M200 151 L200 166 M224 152 L224 167 M240 154 L240 169 M254 157 L254 171" fill="none" stroke="${shadeColor(color, -12)}" stroke-width="2" stroke-linecap="round" opacity=".72"/>
                <path d="M149 119 C159 99 177 87 197 86" fill="none" stroke="#FFFFFF" stroke-width="8" stroke-linecap="round" opacity=".19"/>
                <path d="M200 84 C201 105 201 126 200 145" fill="none" stroke="${light}" stroke-width="2" opacity=".42"/>
            </g>
        `;
    }

    if (style === "headphones") {
        return `
            <g filter="url(#raised)">
                <path d="M137 220 C136 151 159 115 200 115 C241 115 264 151 263 220" fill="none" stroke="#17191D" stroke-width="13" stroke-linecap="round"/>
                <path d="M138 219 C138 153 160 120 200 120 C240 120 262 153 262 219" fill="none" stroke="url(#accessoryVolume)" stroke-width="8" stroke-linecap="round"/>
                <path d="M133 220 C136 166 151 131 173 117" fill="none" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" opacity=".42"/>
                <path d="M138 210 C131 205 122 207 116 214 C110 222 109 238 115 247 C120 254 131 255 139 249 C144 240 144 220 138 210 Z" fill="${dark}" stroke="#17191D" stroke-width="3"/>
                <path d="M262 210 C269 205 278 207 284 214 C290 222 291 238 285 247 C280 254 269 255 261 249 C256 240 256 220 262 210 Z" fill="${dark}" stroke="#17191D" stroke-width="3"/>
                <path d="M136 217 C131 213 125 214 121 219 C117 226 117 237 121 242 C125 247 132 248 137 243 C141 236 141 223 136 217 Z" fill="url(#accessoryVolume)"/>
                <path d="M264 217 C269 213 275 214 279 219 C283 226 283 237 279 242 C275 247 268 248 263 243 C259 236 259 223 264 217 Z" fill="url(#accessoryVolume)"/>
                <path d="M120 218 Q127 214 133 220 M267 220 Q273 214 280 218" fill="none" stroke="${light}" stroke-width="2.5" stroke-linecap="round" opacity=".72"/>
                <circle cx="127" cy="231" r="4" fill="${light}" opacity=".8"/><circle cx="273" cy="231" r="4" fill="${light}" opacity=".8"/>
            </g>
        `;
    }

    return "";
}

// ========================================
// MINI PREVIEWS
// ========================================

function miniPreview(category, type, variant) {

    const color =
        variant.color || "#777";

    const accent =
        variant.accent || shadeColor(color, 35);

    let artwork = "";


    if (category === "body") {

        artwork = `
            <circle
                cx="25"
                cy="25"
                r="17"
                fill="${color}"
                stroke="${shadeColor(color, -30)}"
                stroke-width="2"
            />

            <ellipse
                cx="20"
                cy="18"
                rx="7"
                ry="9"
                fill="#fff"
                opacity="0.14"
            />
        `;
    }


    else if (category === "face") {

        let rx = 16;
        let ry = 17;

        if (variant.shape === "wide") {
            rx = 18;
            ry = 15;
        }

        if (variant.shape === "soft") {
            rx = 15;
            ry = 18;
        }

        artwork = `
            <ellipse
                cx="25"
                cy="25"
                rx="${rx}"
                ry="${ry}"
                fill="#F2C6A0"
                stroke="#9E715C"
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
                    Q35 25 25 27
                    Q15 25 7 31 Z
                "
                fill="${variant.color}"
                stroke="${shadeColor(
                    variant.color,
                    -30
                )}"
                stroke-width="2"
            />

            <path
                d="M13 17 Q20 10 27 10"
                fill="none"
                stroke="#fff"
                stroke-width="3"
                opacity="0.12"
                stroke-linecap="round"
            />
        `;
    }


    else if (category === "eyes") {

        if (variant.style === "happy") {

            artwork = `
                <path
                    d="M12 26 Q17 19 22 26"
                    fill="none"
                    stroke="#292929"
                    stroke-width="3"
                    stroke-linecap="round"
                />

                <path
                    d="M28 26 Q33 19 38 26"
                    fill="none"
                    stroke="#292929"
                    stroke-width="3"
                    stroke-linecap="round"
                />
            `;
        }

        else if (variant.style === "sleepy") {

            artwork = `
                <path
                    d="M12 25 Q17 29 22 25"
                    fill="none"
                    stroke="#292929"
                    stroke-width="3"
                    stroke-linecap="round"
                />

                <path
                    d="M28 25 Q33 29 38 25"
                    fill="none"
                    stroke="#292929"
                    stroke-width="3"
                    stroke-linecap="round"
                />
            `;
        }

        else {

            const size =
                variant.style === "big" ? 6 : 4;

            artwork = `
                <circle
                    cx="18"
                    cy="25"
                    r="${size}"
                    fill="#292929"
                />

                <circle
                    cx="32"
                    cy="25"
                    r="${size}"
                    fill="#292929"
                />

                <circle
                    cx="17"
                    cy="23"
                    r="1.5"
                    fill="white"
                />

                <circle
                    cx="31"
                    cy="23"
                    r="1.5"
                    fill="white"
                />
            `;
        }
    }


    else if (category === "mouth") {

        if (variant.style === "open") {

            artwork = `
                <ellipse
                    cx="25"
                    cy="27"
                    rx="7"
                    ry="5"
                    fill="#633E3A"
                />
            `;
        }

        else if (variant.style === "neutral") {

            artwork = `
                <line
                    x1="18"
                    y1="27"
                    x2="32"
                    y2="27"
                    stroke="#633E3A"
                    stroke-width="3"
                    stroke-linecap="round"
                />
            `;
        }

        else {

            artwork = `
                <path
                    d="M17 26 Q25 34 33 26"
                    fill="none"
                    stroke="#633E3A"
                    stroke-width="3"
                    stroke-linecap="round"
                />
            `;
        }
    }


    else if (category === "tops") {

        artwork = `
            <path
                d="
                    M17 9
                    L11 14
                    L14 40
                    L36 40
                    L39 14
                    L33 9
                    L25 16
                    Z
                "
                fill="${color}"
                stroke="${shadeColor(color, -35)}"
                stroke-width="2"
            />

            <path
                d="M14 18 Q25 23 36 18"
                fill="none"
                stroke="#fff"
                stroke-width="2"
                opacity="0.16"
            />
        `;
    }


    else if (category === "bottoms") {

        artwork = `
            <path
                d="
                    M11 11
                    L39 11
                    L37 40
                    L28 40
                    L25 24
                    L22 40
                    L13 40 Z
                "
                fill="${color}"
                stroke="${shadeColor(color, -35)}"
                stroke-width="2"
            />
        `;
    }


    else if (category === "shoes") {

        artwork = `
            <path
                d="
                    M6 28
                    Q14 23 22 28
                    L22 37
                    L5 37
                    Q3 32 6 28 Z
                "
                fill="${color}"
                stroke="${shadeColor(color, -35)}"
                stroke-width="2"
            />

            <path
                d="
                    M28 28
                    Q36 23 44 28
                    Q47 32 45 37
                    L28 37 Z
                "
                fill="${color}"
                stroke="${shadeColor(color, -35)}"
                stroke-width="2"
            />

            <line
                x1="8"
                y1="33"
                x2="20"
                y2="33"
                stroke="${accent}"
                stroke-width="2"
                stroke-linecap="round"
            />

            <line
                x1="30"
                y1="33"
                x2="42"
                y2="33"
                stroke="${accent}"
                stroke-width="2"
                stroke-linecap="round"
            />
        `;
    }


    else if (category === "accessories") {

        if (type.style === "glasses") {

            artwork = `
                <rect
                    x="8"
                    y="18"
                    width="15"
                    height="11"
                    rx="4"
                    fill="none"
                    stroke="${color}"
                    stroke-width="2.5"
                />

                <rect
                    x="27"
                    y="18"
                    width="15"
                    height="11"
                    rx="4"
                    fill="none"
                    stroke="${color}"
                    stroke-width="2.5"
                />

                <line
                    x1="23"
                    y1="23"
                    x2="27"
                    y2="23"
                    stroke="${color}"
                    stroke-width="2.5"
                />
            `;
        }

        else if (type.style === "cap") {

            artwork = `
                <path
                    d="
                        M8 22
                        Q11 8 25 8
                        Q39 8 42 22
                        Q25 17 8 22 Z
                    "
                    fill="${color}"
                    stroke="${shadeColor(color, -30)}"
                    stroke-width="2"
                />

                <path
                    d="M25 18 Q37 17 44 23"
                    fill="none"
                    stroke="${shadeColor(color, -30)}"
                    stroke-width="2"
                />
            `;
        }

                else if (type.style === "backwardsCap") {

            artwork = `
                <path d="M8 22 Q11 8 25 8 Q39 8 42 22 Q25 18 8 22 Z" fill="${color}" stroke="${shadeColor(color, -30)}" stroke-width="2"/>
                <path d="M9 20 Q25 16 41 20 L41 25 Q25 21 9 25 Z" fill="${accent}" stroke="${shadeColor(color, -30)}" stroke-width="1.5"/>
                <rect x="22" y="19" width="6" height="4" rx="1" fill="${shadeColor(color, -30)}" stroke="${accent}" stroke-width="1"/>
            `;
        }


else if (type.style === "beanie") {

            artwork = `
                <path
                    d="M8 26 Q8 8 25 7 Q42 8 42 26 L39 29 Q25 25 11 29 Z"
                    fill="${color}"
                    stroke="${shadeColor(color, -30)}"
                    stroke-width="2"
                />
                <path
                    d="M8 24 Q25 21 42 24 L42 30 Q25 27 8 30 Z"
                    fill="${shadeColor(color, -20)}"
                />
            `;
        }

        else if (type.style === "headphones") {

            artwork = `
                <path
                    d="
                        M9 28
                        Q9 8 25 8
                        Q41 8 41 28
                    "
                    fill="none"
                    stroke="${color}"
                    stroke-width="5"
                />

                <rect
                    x="6"
                    y="23"
                    width="7"
                    height="11"
                    rx="3"
                    fill="${color}"
                />

                <rect
                    x="37"
                    y="23"
                    width="7"
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
                    y="32"
                    text-anchor="middle"
                    font-size="23"
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
// TYPE MENU
// ========================================

function renderTypeMenu(category) {

    menuLevel = "types";
    currentCategory = category;

    categoryTitle.textContent =
        category.charAt(0).toUpperCase() +
        category.slice(1);

    itemsContainer.innerHTML = "";


    options[category].forEach((type, index) => { if (category === "accessories" && type.style === "backwardsCap") return;

        const button =
            document.createElement("button");

        button.className = "item-button";


        if (
            selected[category].type === index
        ) {
            button.classList.add("selected");
        }


        const previewVariant =
            type.variants[
                selected[category].variant
            ] || type.variants[0];


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

            selected[category].type = index; selected[category].variant = 0; drawAvatar(); if (category === "accessories" && type.style === "cap") { renderCapStyleMenu(category, index); return; } renderVariantMenu(category);
        });


        itemsContainer.appendChild(button);
    });
}


// ========================================
// VARIANT MENU
// ========================================

function renderCapStyleMenu(category, capIndex) { menuLevel = "capStyles"; categoryTitle.textContent = "Cap"; itemsContainer.innerHTML = ""; const back = document.createElement("button"); back.className = "item-button"; back.innerHTML = `<div class="item-preview">←</div><span>Back</span>`; back.addEventListener("click", () => renderTypeMenu(category)); itemsContainer.appendChild(back); [capIndex, options[category].findIndex(item => item.style === "backwardsCap")].forEach(index => { const type = options[category][index]; const button = document.createElement("button"); button.className = "item-button"; button.innerHTML = `<div class="item-preview">${miniPreview(category, type, type.variants[0])}</div><span>${type.name}</span>`; button.addEventListener("click", () => { selected[category].type = index; selected[category].variant = 0; drawAvatar(); renderVariantMenu(category); }); itemsContainer.appendChild(button); }); } function renderVariantMenu(category) {

    menuLevel = "variants";

    const type =
        options[category][
            selected[category].type
        ];


    categoryTitle.textContent =
        type.name;


    itemsContainer.innerHTML = "";


    const backButton =
        document.createElement("button");

    backButton.className =
        "item-button";

    backButton.innerHTML = `
        <div class="item-preview">←</div>
        <span>Back</span>
    `;


    backButton.addEventListener(
        "click",
        () => renderTypeMenu(category)
    );


    itemsContainer.appendChild(backButton);


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
