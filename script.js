// ========================================
// AVATAR GAME
// POLISHED 2.5D AVATAR ENGINE
// HEAD + HAIR + ACCESSORY OVERHAUL
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
// OPTIONS
// ========================================

const options = {

    body: [
        {
            name: "Body",
            variants: [
                { name: "Light", color: "#F3C9A9" },
                { name: "Warm", color: "#DFA982" },
                { name: "Tan", color: "#BE805B" },
                { name: "Deep", color: "#87563F" }
            ]
        }
    ],

    face: [
        {
            name: "Face",
            variants: [
                { name: "Round", color: "#F3C9A9" },
                { name: "Soft", color: "#E9B992" },
                { name: "Warm", color: "#D49A72" }
            ]
        }
    ],

    hair: [
        {
            name: "Short",
            variants: [
                { name: "Black", color: "#17191E" },
                { name: "Brown", color: "#4A3026" },
                { name: "Dark Brown", color: "#30211C" },
                { name: "Blonde", color: "#C99B52" },
                { name: "White", color: "#E7E8EA" }
            ]
        },
        {
            name: "Fluffy",
            variants: [
                { name: "Black", color: "#17191E" },
                { name: "Brown", color: "#4A3026" },
                { name: "Blonde", color: "#C99B52" },
                { name: "White", color: "#E7E8EA" }
            ]
        },
        {
            name: "Wavy",
            variants: [
                { name: "Black", color: "#17191E" },
                { name: "Brown", color: "#4A3026" },
                { name: "Blonde", color: "#C99B52" },
                { name: "White", color: "#E7E8EA" }
            ]
        },
        {
            name: "Long",
            variants: [
                { name: "Black", color: "#17191E" },
                { name: "Brown", color: "#4A3026" },
                { name: "Blonde", color: "#C99B52" },
                { name: "White", color: "#E7E8EA" }
            ]
        }
    ],

    eyes: [
        {
            name: "Eyes",
            variants: [
                { name: "Brown", color: "#543629" },
                { name: "Blue", color: "#4E83C4" },
                { name: "Green", color: "#5E9564" },
                { name: "Gray", color: "#737C86" }
            ]
        }
    ],

    mouth: [
        {
            name: "Mouth",
            variants: [
                { name: "Smile", color: "#A95F62" },
                { name: "Small", color: "#8D5557" },
                { name: "Neutral", color: "#744A4B" }
            ]
        }
    ],

    tops: [
        {
            name: "Shirts",
            variants: [
                { name: "Red", color: "#D94A4A" },
                { name: "Blue", color: "#4F79C7" },
                { name: "Green", color: "#4E9364" },
                { name: "Black", color: "#25272C" },
                { name: "White", color: "#E8E8E8" }
            ]
        },
        {
            name: "Hoodies",
            variants: [
                { name: "Red", color: "#C74747" },
                { name: "Blue", color: "#526FAE" },
                { name: "Green", color: "#4F805F" },
                { name: "Black", color: "#25272C" },
                { name: "Purple", color: "#7759A8" }
            ]
        },
        {
            name: "Sweaters",
            variants: [
                { name: "Red", color: "#B94C4C" },
                { name: "Blue", color: "#526E9C" },
                { name: "Green", color: "#56806A" },
                { name: "Cream", color: "#D8C7A7" }
            ]
        },
        {
            name: "Jackets",
            variants: [
                { name: "Black", color: "#262A30" },
                { name: "Blue", color: "#405E86" },
                { name: "Brown", color: "#725541" },
                { name: "Green", color: "#4E6657" }
            ]
        }
    ],

    bottoms: [
        {
            name: "Jeans",
            variants: [
                { name: "Blue", color: "#4D6E9D" },
                { name: "Dark", color: "#303D52" },
                { name: "Black", color: "#26282C" },
                { name: "Light", color: "#7593B8" }
            ]
        },
        {
            name: "Shorts",
            variants: [
                { name: "Black", color: "#292B30" },
                { name: "Blue", color: "#4F719D" },
                { name: "Green", color: "#536E5B" },
                { name: "Brown", color: "#765A45" }
            ]
        }
    ],

    shoes: [
        {
            name: "Sneakers",
            variants: [
                { name: "White", color: "#E9EAEC" },
                { name: "Black", color: "#25272C" },
                { name: "Red", color: "#C94C4C" },
                { name: "Blue", color: "#4D6FA9" }
            ]
        },
        {
            name: "Boots",
            variants: [
                { name: "Brown", color: "#76533D" },
                { name: "Black", color: "#292A2D" },
                { name: "Tan", color: "#A4754F" }
            ]
        }
    ],

    accessories: [
        {
            name: "None",
            variants: [
                { name: "None", color: "#FFFFFF" }
            ]
        },
        {
            name: "Glasses",
            variants: [
                { name: "Black", color: "#202226" },
                { name: "Silver", color: "#9CA2A9" },
                { name: "Blue", color: "#496B91" }
            ]
        },
        {
            name: "Cap",
            variants: [
                { name: "Black", color: "#25272B" },
                { name: "Blue", color: "#46658F" },
                { name: "Red", color: "#B84949" },
                { name: "Green", color: "#4D6957" }
            ]
        },
        {
            name: "Beanie",
            variants: [
                { name: "Black", color: "#292A2E" },
                { name: "Gray", color: "#70747A" },
                { name: "Blue", color: "#506887" },
                { name: "Red", color: "#A94848" }
            ]
        },
        {
            name: "Headphones",
            variants: [
                { name: "Black", color: "#202226" },
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
const categoryButtons = document.querySelectorAll(".category-button");
const randomizeButton = document.getElementById("randomize-button");
const saveButton = document.getElementById("save-button");
const nameInput = document.getElementById("avatar-name");

let currentCategory = "body";


// ========================================
// SVG HELPERS
// ========================================

function esc(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/"/g, "&quot;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}

function hexToRgb(hex) {
    hex = hex.replace("#", "");

    if (hex.length === 3) {
        hex = hex.split("").map(x => x + x).join("");
    }

    return {
        r: parseInt(hex.substring(0, 2), 16),
        g: parseInt(hex.substring(2, 4), 16),
        b: parseInt(hex.substring(4, 6), 16)
    };
}

function rgbToHex(r, g, b) {
    return "#" + [r, g, b]
        .map(v => Math.max(0, Math.min(255, Math.round(v)))
        .toString(16).padStart(2, "0"))
        .join("");
}

function shadeColor(hex, amount) {
    const rgb = hexToRgb(hex);

    return rgbToHex(
        rgb.r + amount,
        rgb.g + amount,
        rgb.b + amount
    );
}

function getColor(category) {
    const type = options[category][selected[category].type];
    return type.variants[selected[category].variant].color;
}


// ========================================
// MAIN SVG
// ========================================

function createSVG() {
    return `
    <svg
        id="avatar-svg"
        viewBox="0 0 360 600"
        xmlns="http://www.w3.org/2000/svg"
        width="340"
        height="560"
        aria-label="Avatar"
    >

        <defs>

            <linearGradient id="skinGradient"
                x1="0"
                y1="0"
                x2="1"
                y2="1">
                <stop offset="0%" stop-color="#FFF0E1"/>
                <stop offset="48%" stop-color="${getColor("body")}"/>
                <stop offset="100%" stop-color="${shadeColor(getColor("body"), -22)}"/>
            </linearGradient>

            <linearGradient id="skinShadow"
                x1="0"
                y1="0"
                x2="0"
                y2="1">
                <stop offset="0%" stop-color="#FFFFFF" stop-opacity=".20"/>
                <stop offset="100%" stop-color="#000000" stop-opacity=".12"/>
            </linearGradient>

            <linearGradient id="hairGradient"
                x1="0"
                y1="0"
                x2="1"
                y2="1">
                <stop offset="0%" stop-color="${shadeColor(getColor("hair"), 20)}"/>
                <stop offset="45%" stop-color="${getColor("hair")}"/>
                <stop offset="100%" stop-color="${shadeColor(getColor("hair"), -25)}"/>
            </linearGradient>

            <linearGradient id="clothGradient"
                x1="0"
                y1="0"
                x2="1"
                y2="1">
                <stop offset="0%" stop-color="${shadeColor(getColor("tops"), 20)}"/>
                <stop offset="50%" stop-color="${getColor("tops")}"/>
                <stop offset="100%" stop-color="${shadeColor(getColor("tops"), -22)}"/>
            </linearGradient>

            <linearGradient id="bottomGradient"
                x1="0"
                y1="0"
                x2="1"
                y2="1">
                <stop offset="0%" stop-color="${shadeColor(getColor("bottoms"), 18)}"/>
                <stop offset="50%" stop-color="${getColor("bottoms")}"/>
                <stop offset="100%" stop-color="${shadeColor(getColor("bottoms"), -22)}"/>
            </linearGradient>

            <linearGradient id="shoeGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1">
                <stop offset="0%" stop-color="${shadeColor(getColor("shoes"), 15)}"/>
                <stop offset="100%" stop-color="${shadeColor(getColor("shoes"), -18)}"/>
            </linearGradient>

            <filter id="avatarShadow"
                x="-30%"
                y="-30%"
                width="160%"
                height="170%">
                <feDropShadow
                    dx="0"
                    dy="7"
                    stdDeviation="7"
                    flood-color="#23384A"
                    flood-opacity=".16"/>
            </filter>

            <filter id="softShadow"
                x="-30%"
                y="-30%"
                width="160%"
                height="170%">
                <feDropShadow
                    dx="0"
                    dy="3"
                    stdDeviation="3"
                    flood-color="#000000"
                    flood-opacity=".16"/>
            </filter>

        </defs>

        <!-- Ground shadow -->
        <ellipse
            cx="180"
            cy="565"
            rx="92"
            ry="14"
            fill="#526B7A"
            opacity=".13"
        />

        <!-- BODY / LEGS -->
        ${drawLegs()}

        <!-- SHOES -->
        ${drawShoes()}

        <!-- BACK HAIR -->
        ${drawBackHair()}

        <!-- TORSO -->
        ${drawTop()}

        <!-- ARMS -->
        ${drawArms()}

        <!-- NECK -->
        ${drawNeck()}

        <!-- HEAD -->
        ${drawHead()}

        <!-- EARS -->
        ${drawEars()}

        <!-- FACE -->
        ${drawFace()}

        <!-- FRONT HAIR -->
        ${drawFrontHair()}

        <!-- ACCESSORIES -->
        ${drawAccessory()}

    </svg>
    `;
}


// ========================================
// LEGS
// ========================================

function drawLegs() {
    const bottom = getColor("bottoms");

    return `
        <g filter="url(#softShadow)">

            <path
                d="M126 418
                   C126 458 127 501 128 533
                   L161 533
                   C164 492 166 452 165 420
                   Z"
                fill="url(#bottomGradient)"
            />

            <path
                d="M195 420
                   C194 455 196 495 198 533
                   L231 533
                   C232 493 234 453 232 418
                   Z"
                fill="url(#bottomGradient)"
            />

            <path
                d="M130 437
                   C140 444 151 446 162 442"
                fill="none"
                stroke="${shadeColor(bottom, -30)}"
                stroke-width="3"
                opacity=".45"
            />

            <path
                d="M198 440
                   C208 446 220 446 230 441"
                fill="none"
                stroke="${shadeColor(bottom, -30)}"
                stroke-width="3"
                opacity=".45"
            />

        </g>
    `;
}


// ========================================
// SHOES
// ========================================

function drawShoes() {
    const shoe = getColor("shoes");
    const type = options.shoes[selected.shoes.type].name;

    if (type === "Boots") {
        return `
            <g filter="url(#avatarShadow)">

                <path
                    d="M123 525
                       C123 518 129 514 137 515
                       L161 517
                       C166 521 167 535 164 545
                       L164 552
                       L116 552
                       C114 542 116 531 123 525 Z"
                    fill="url(#shoeGradient)"
                />

                <path
                    d="M195 517
                       C201 514 222 514 230 518
                       C236 525 239 539 237 552
                       L190 552
                       L190 544
                       C190 533 191 523 195 517 Z"
                    fill="url(#shoeGradient)"
                />

                <path
                    d="M119 541 L164 541"
                    stroke="${shadeColor(shoe, -30)}"
                    stroke-width="3"
                    opacity=".55"
                />

                <path
                    d="M192 541 L237 541"
                    stroke="${shadeColor(shoe, -30)}"
                    stroke-width="3"
                    opacity=".55"
                />

            </g>
        `;
    }

    return `
        <g filter="url(#avatarShadow)">

            <path
                d="M119 523
                   C126 518 145 517 160 522
                   C166 527 168 537 166 547
                   C152 553 132 553 116 548
                   C114 538 115 529 119 523 Z"
                fill="url(#shoeGradient)"
            />

            <path
                d="M194 522
                   C207 517 227 518 235 524
                   C239 531 241 541 239 548
                   C224 553 204 553 190 547
                   C189 537 190 528 194 522 Z"
                fill="url(#shoeGradient)"
            />

            <path
                d="M119 539
                   C132 544 151 544 165 539"
                fill="none"
                stroke="#FFFFFF"
                stroke-width="5"
                opacity=".65"
            />

            <path
                d="M193 539
                   C206 544 225 544 238 539"
                fill="none"
                stroke="#FFFFFF"
                stroke-width="5"
                opacity=".65"
            />

        </g>
    `;
}


// ========================================
// BACK HAIR
// ========================================

function drawBackHair() {
    const hair = getColor("hair");
    const type = options.hair[selected.hair.type].name;

    // Long hair gets a controlled silhouette behind the head.
    if (type === "Long") {
        return `
            <g filter="url(#softShadow)">

                <path
                    d="M103 176
                       C95 132 112 94 145 79
                       C171 67 204 70 226 89
                       C252 111 260 146 253 184
                       L249 334
                       C247 356 232 372 216 372
                       L213 294
                       L147 294
                       L144 372
                       C126 369 111 355 108 334
                       Z"
                    fill="url(#hairGradient)"
                />

                <path
                    d="M117 149
                       C111 115 132 91 159 83"
                    fill="none"
                    stroke="#FFFFFF"
                    stroke-width="9"
                    stroke-linecap="round"
                    opacity=".10"
                />

                <path
                    d="M236 129
                       C247 165 244 224 239 290"
                    fill="none"
                    stroke="#000000"
                    stroke-width="10"
                    stroke-linecap="round"
                    opacity=".13"
                />

            </g>
        `;
    }

    return `
        <g>
            <path
                d="M104 174
                   C98 128 118 94 150 80
                   C178 67 211 76 231 99
                   C248 119 254 147 249 181
                   L241 242
                   L119 242
                   Z"
                fill="url(#hairGradient)"
            />
        </g>
    `;
}


// ========================================
// TOP
// ========================================

function drawTop() {
    const type = options.tops[selected.tops.type].name;

    if (type === "Hoodies") {
        return `
            <g filter="url(#avatarShadow)">

                <path
                    d="M119 297
                       C126 281 140 273 156 270
                       L204 270
                       C220 273 234 281 241 297
                       L259 405
                       C240 423 214 430 180 430
                       C146 430 120 423 101 405
                       Z"
                    fill="url(#clothGradient)"
                />

                <!-- hood -->
                <path
                    d="M147 275
                       C147 258 160 249 180 249
                       C200 249 213 258 213 275
                       C204 288 193 294 180 294
                       C167 294 156 288 147 275 Z"
                    fill="${shadeColor(getColor("tops"), -18)}"
                />

                <!-- hoodie pocket -->
                <path
                    d="M145 365
                       C159 359 201 359 215 365
                       L210 395
                       C194 401 166 401 150 395 Z"
                    fill="${shadeColor(getColor("tops"), -12)}"
                    opacity=".75"
                />

                <!-- folds -->
                <path
                    d="M131 312 C142 326 144 343 143 360"
                    fill="none"
                    stroke="#FFFFFF"
                    stroke-width="5"
                    opacity=".13"
                    stroke-linecap="round"
                />

                <path
                    d="M229 312 C218 326 216 343 217 360"
                    fill="none"
                    stroke="#000000"
                    stroke-width="5"
                    opacity=".12"
                    stroke-linecap="round"
                />

            </g>
        `;
    }

    if (type === "Jackets") {
        return `
            <g filter="url(#avatarShadow)">

                <path
                    d="M120 295
                       C130 280 143 273 158 270
                       L202 270
                       C217 273 230 280 240 295
                       L256 405
                       C238 423 211 430 180 430
                       C149 430 122 423 104 405
                       Z"
                    fill="url(#clothGradient)"
                />

                <path
                    d="M180 287 L180 423"
                    stroke="${shadeColor(getColor("tops"), -35)}"
                    stroke-width="3"
                    opacity=".65"
                />

                <path
                    d="M143 287 L161 304 L154 351"
                    fill="none"
                    stroke="#FFFFFF"
                    stroke-width="5"
                    opacity=".13"
                />

                <path
                    d="M217 287 L199 304 L206 351"
                    fill="none"
                    stroke="#000000"
                    stroke-width="5"
                    opacity=".13"
                />

            </g>
        `;
    }

    if (type === "Sweaters") {
        return `
            <g filter="url(#avatarShadow)">

                <path
                    d="M120 296
                       C132 279 145 272 158 270
                       L202 270
                       C215 272 228 279 240 296
                       L253 405
                       C233 422 210 429 180 429
                       C150 429 127 422 107 405
                       Z"
                    fill="url(#clothGradient)"
                />

                <path
                    d="M153 274
                       C157 288 168 294 180 294
                       C192 294 203 288 207 274"
                    fill="none"
                    stroke="${shadeColor(getColor("tops"), -28)}"
                    stroke-width="9"
                    opacity=".65"
                />

                <path
                    d="M130 320 C145 328 151 347 150 370"
                    fill="none"
                    stroke="#FFFFFF"
                    stroke-width="4"
                    opacity=".12"
                />

                <path
                    d="M230 320 C215 328 209 347 210 370"
                    fill="none"
                    stroke="#000000"
                    stroke-width="4"
                    opacity=".10"
                />

            </g>
        `;
    }

    // Shirts
    return `
        <g filter="url(#avatarShadow)">

            <path
                d="M121 297
                   C132 280 144 273 158 270
                   L202 270
                   C216 273 228 280 239 297
                   L253 405
                   C233 422 209 429 180 429
                   C151 429 127 422 107 405
                   Z"
                fill="url(#clothGradient)"
            />

            <path
                d="M153 272
                   C158 286 168 292 180 292
                   C192 292 202 286 207 272"
                fill="none"
                stroke="${shadeColor(getColor("tops"), -25)}"
                stroke-width="8"
                opacity=".55"
            />

            <path
                d="M129 312
                   C141 320 146 337 145 353"
                fill="none"
                stroke="#FFFFFF"
                stroke-width="5"
                opacity=".12"
                stroke-linecap="round"
            />

            <path
                d="M231 312
                   C219 320 214 337 215 353"
                fill="none"
                stroke="#000000"
                stroke-width="5"
                opacity=".10"
                stroke-linecap="round"
            />

        </g>
    `;
}


// ========================================
// ARMS
// ========================================

function drawArms() {
    const skin = getColor("body");

    return `
        <g filter="url(#softShadow)">

            <path
                d="M116 299
                   C104 305 96 318 95 334
                   L88 391
                   C87 405 94 414 104 415
                   C114 416 120 408 121 397
                   L130 337
                   C132 321 127 307 116 299 Z"
                fill="url(#skinGradient)"
            />

            <path
                d="M244 299
                   C256 305 264 318 265 334
                   L272 391
                   C273 405 266 414 256 415
                   C246 416 240 408 239 397
                   L230 337
                   C228 321 233 307 244 299 Z"
                fill="url(#skinGradient)"
            />

            <path
                d="M100 348 C108 351 116 351 124 347"
                fill="none"
                stroke="#000000"
                stroke-width="4"
                opacity=".10"
            />

            <path
                d="M260 348 C252 351 244 351 236 347"
                fill="none"
                stroke="#000000"
                stroke-width="4"
                opacity=".10"
            />

        </g>
    `;
}


// ========================================
// NECK
// ========================================

function drawNeck() {
    return `
        <path
            d="M157 254
               L203 254
               L207 288
               C199 297 190 301 180 301
               C170 301 161 297 153 288
               Z"
            fill="url(#skinGradient)"
        />
    `;
}


// ========================================
// HEAD
// ========================================

function drawHead() {
    /*
       IMPORTANT:
       The head is deliberately smaller than the previous version.
       This gives hairstyles an actual skull to wrap around and gives
       caps/beanies/headphones room to cover the hair naturally.
    */

    return `
        <g filter="url(#softShadow)">

            <path
                d="M180 104

                   C143 104 121 129 121 169

                   L124 215

                   C126 253 148 274 180 274

                   C212 274 234 253 236 215

                   L239 169

                   C239 129 217 104 180 104 Z"

                fill="url(#skinGradient)"
            />

            <!-- subtle face volume -->
            <path
                d="M132 182
                   C128 220 143 256 177 266"
                fill="none"
                stroke="#FFFFFF"
                stroke-width="7"
                stroke-linecap="round"
                opacity=".13"
            />

            <path
                d="M229 182
                   C233 220 218 256 184 266"
                fill="none"
                stroke="#000000"
                stroke-width="7"
                stroke-linecap="round"
                opacity=".08"
            />

        </g>
    `;
}


// ========================================
// EARS
// ========================================

function drawEars() {
    return `
        <ellipse
            cx="123"
            cy="194"
            rx="10"
            ry="20"
            fill="url(#skinGradient)"
        />

        <ellipse
            cx="237"
            cy="194"
            rx="10"
            ry="20"
            fill="url(#skinGradient)"
        />
    `;
}


// ========================================
// FACE
// ========================================

function drawFace() {
    return `
        ${drawBrows()}
        ${drawEyes()}
        ${drawNose()}
        ${drawMouth()}
    `;
}

function drawBrows() {
    return `
        <path
            d="M143 170
               C151 165 159 165 166 169"
            fill="none"
            stroke="#4C3430"
            stroke-width="5"
            stroke-linecap="round"
        />

        <path
            d="M194 169
               C201 165 209 165 217 170"
            fill="none"
            stroke="#4C3430"
            stroke-width="5"
            stroke-linecap="round"
        />
    `;
}

function drawEyes() {
    const eye = getColor("eyes");

    return `
        <g>

            <ellipse
                cx="155"
                cy="185"
                rx="11"
                ry="8"
                fill="#FFFFFF"
            />

            <ellipse
                cx="205"
                cy="185"
                rx="11"
                ry="8"
                fill="#FFFFFF"
            />

            <ellipse
                cx="156"
                cy="185"
                rx="5"
                ry="6"
                fill="${eye}"
            />

            <ellipse
                cx="204"
                cy="185"
                rx="5"
                ry="6"
                fill="${eye}"
            />

            <circle
                cx="157"
                cy="183"
                r="2"
                fill="#FFFFFF"
            />

            <circle
                cx="205"
                cy="183"
                r="2"
                fill="#FFFFFF"
            />

        </g>
    `;
}

function drawNose() {
    return `
        <path
            d="M180 187
               C176 202 175 208 180 211
               C184 211 187 209 188 207"
            fill="none"
            stroke="${shadeColor(getColor("body"), -35)}"
            stroke-width="3"
            stroke-linecap="round"
            opacity=".45"
        />
    `;
}

function drawMouth() {
    const mouthType = options.mouth[selected.mouth.type].name;
    const color = getColor("mouth");

    if (mouthType === "Smile") {
        return `
            <path
                d="M166 226
                   C174 234 186 234 194 226"
                fill="none"
                stroke="${color}"
                stroke-width="4"
                stroke-linecap="round"
            />
        `;
    }

    if (mouthType === "Small") {
        return `
            <path
                d="M173 228
                   C177 230 183 230 187 228"
                fill="none"
                stroke="${color}"
                stroke-width="4"
                stroke-linecap="round"
            />
        `;
    }

    return `
        <path
            d="M171 228 L189 228"
            stroke="${color}"
            stroke-width="4"
            stroke-linecap="round"
        />
    `;
}


// ========================================
// FRONT HAIR
// ========================================

function drawFrontHair() {
    const hair = getColor("hair");
    const type = options.hair[selected.hair.type].name;

    if (type === "Long") {
        return `
            <g>

                <!-- clean top mass -->
                <path
                    d="M105 158
                       C103 117 126 85 163 76
                       C196 68 228 83 246 113
                       C254 127 257 145 253 164
                       C240 151 228 142 214 139
                       C197 135 190 144 180 151
                       C167 139 153 134 137 140
                       C124 145 115 152 105 158 Z"
                    fill="url(#hairGradient)"
                />

                <!-- intentional front locks -->
                <path
                    d="M125 135
                       C119 153 120 171 126 188
                       C135 179 141 166 141 146
                       C137 140 132 137 125 135 Z"
                    fill="${hair}"
                />

                <path
                    d="M215 137
                       C220 155 219 171 213 187
                       C204 178 199 165 199 146
                       C203 141 209 138 215 137 Z"
                    fill="${hair}"
                />

                <path
                    d="M147 105
                       C164 91 192 90 211 104"
                    fill="none"
                    stroke="#FFFFFF"
                    stroke-width="8"
                    stroke-linecap="round"
                    opacity=".10"
                />

            </g>
        `;
    }

    if (type === "Fluffy") {
        return `
            <g>

                <path
                    d="M105 158
                       C99 142 105 121 116 108
                       C112 91 129 80 144 84
                       C155 70 177 72 187 82
                       C201 72 221 80 224 94
                       C242 96 251 112 246 128
                       C257 141 253 158 244 169
                       C232 158 222 150 210 146
                       C197 142 188 148 180 155
                       C169 144 157 139 144 143
                       C128 147 118 154 105 158 Z"
                    fill="url(#hairGradient)"
                />

                <!-- controlled locks -->
                <path
                    d="M116 132 C113 148 117 164 126 175"
                    fill="none"
                    stroke="${shadeColor(hair, -15)}"
                    stroke-width="10"
                    stroke-linecap="round"
                />

                <path
                    d="M244 130 C247 146 243 161 235 173"
                    fill="none"
                    stroke="${shadeColor(hair, -18)}"
                    stroke-width="10"
                    stroke-linecap="round"
                />

                <path
                    d="M137 101
                       C154 87 178 87 194 96"
                    fill="none"
                    stroke="#FFFFFF"
                    stroke-width="9"
                    stroke-linecap="round"
                    opacity=".11"
                />

            </g>
        `;
    }

    if (type === "Wavy") {
        return `
            <g>

                <path
                    d="M106 159
                       C101 137 108 111 127 96
                       C143 82 161 79 180 82
                       C199 79 217 85 232 99
                       C249 115 256 138 249 160
                       C238 149 226 142 214 141
                       C200 140 190 147 180 155
                       C169 146 158 141 145 141
                       C131 142 118 150 106 159 Z"
                    fill="url(#hairGradient)"
                />

                <path
                    d="M121 113
                       C130 105 139 103 147 107
                       C153 111 153 119 147 124
                       C141 129 133 128 127 124"
                    fill="none"
                    stroke="${shadeColor(hair, -18)}"
                    stroke-width="10"
                    stroke-linecap="round"
                />

                <path
                    d="M153 98
                       C163 91 174 92 180 99
                       C186 106 184 114 177 119
                       C169 124 160 120 157 114"
                    fill="none"
                    stroke="${shadeColor(hair, -14)}"
                    stroke-width="10"
                    stroke-linecap="round"
                />

                <path
                    d="M190 100
                       C200 94 211 98 216 106
                       C221 114 218 122 211 126"
                    fill="none"
                    stroke="${shadeColor(hair, -18)}"
                    stroke-width="10"
                    stroke-linecap="round"
                />

                <path
                    d="M132 103
                       C153 89 182 87 205 101"
                    fill="none"
                    stroke="#FFFFFF"
                    stroke-width="7"
                    stroke-linecap="round"
                    opacity=".10"
                />

            </g>
        `;
    }

    // Short hair
    return `
        <g>

            <path
                d="M106 160
                   C101 137 108 111 126 96
                   C143 81 161 77 180 81
                   C199 77 217 83 233 98
                   C249 113 256 137 250 160
                   C238 149 226 141 214 141
                   C200 141 190 147 180 155
                   C169 146 158 141 145 141
                   C131 141 118 149 106 160 Z"
                fill="url(#hairGradient)"
            />

            <!-- deliberate side locks -->
            <path
                d="M108 151
                   C106 165 111 177 120 187
                   C127 177 130 164 127 149 Z"
                fill="${shadeColor(hair, -12)}"
            />

            <path
                d="M252 151
                   C254 165 249 177 240 187
                   C233 177 230 164 233 149 Z"
                fill="${shadeColor(hair, -15)}"
            />

            <!-- top highlight -->
            <path
                d="M131 105
                   C150 89 179 87 204 99"
                fill="none"
                stroke="#FFFFFF"
                stroke-width="8"
                stroke-linecap="round"
                opacity=".11"
            />

        </g>
    `;
}


// ========================================
// ACCESSORIES
// ========================================

function drawAccessory() {
    const type = options.accessories[selected.accessories.type].name;
    const color = getColor("accessories");

    if (type === "None") {
        return "";
    }

    if (type === "Glasses") {
        return `
            <g>

                <rect
                    x="136"
                    y="173"
                    width="35"
                    height="24"
                    rx="9"
                    fill="none"
                    stroke="${color}"
                    stroke-width="5"
                />

                <rect
                    x="189"
                    y="173"
                    width="35"
                    height="24"
                    rx="9"
                    fill="none"
                    stroke="${color}"
                    stroke-width="5"
                />

                <path
                    d="M171 180 C177 177 183 177 189 180"
                    fill="none"
                    stroke="${color}"
                    stroke-width="4"
                />

            </g>
        `;
    }

    // ====================================
    // CAP
    // ====================================
    if (type === "Cap") {
        return `
            <g filter="url(#softShadow)">

                <!-- cap covers the top of the hair -->
                <path
                    d="M109 134
                       C108 101 134 76 178 75
                       C219 75 245 97 250 129
                       C232 119 214 115 194 115
                       C166 115 139 122 109 134 Z"
                    fill="url(#hairGradient)"
                    opacity="0"
                />

                <path
                    d="M108 133
                       C108 99 136 76 178 75
                       C217 75 243 96 249 126
                       C231 117 212 113 192 114
                       C164 114 137 122 108 133 Z"
                    fill="${color}"
                />

                <!-- cap brim -->
                <path
                    d="M108 128
                       C132 117 159 113 189 113
                       C213 113 235 117 251 126
                       C258 130 256 137 248 138
                       C226 132 207 130 188 130
                       C157 130 132 135 109 142
                       C102 141 101 134 108 128 Z"
                    fill="${shadeColor(color, -18)}"
                />

                <!-- tiny amount of hair visible -->
                <path
                    d="M120 145
                       C124 140 130 137 137 136"
                    fill="none"
                    stroke="${getColor("hair")}"
                    stroke-width="7"
                    stroke-linecap="round"
                />

                <path
                    d="M222 137
                       C229 138 235 141 240 145"
                    fill="none"
                    stroke="${getColor("hair")}"
                    stroke-width="7"
                    stroke-linecap="round"
                />

            </g>
        `;
    }

    // ====================================
    // BEANIE
    // ====================================
    if (type === "Beanie") {
        return `
            <g filter="url(#softShadow)">

                <!-- large beanie mass -->
                <path
                    d="M108 141
                       C107 105 130 76 165 69
                       C178 66 193 67 205 71
                       C235 81 250 108 250 141
                       L250 154
                       C225 148 204 146 180 146
                       C156 146 133 148 108 154 Z"
                    fill="${color}"
                />

                <!-- folded lower rim -->
                <path
                    d="M108 140
                       C135 134 157 132 180 132
                       C203 132 226 134 250 140
                       L250 157
                       C226 151 203 149 180 149
                       C157 149 133 151 108 157 Z"
                    fill="${shadeColor(color, -18)}"
                />

                <!-- tiny hair peeking below -->
                <path
                    d="M120 158
                       C123 153 128 150 135 149"
                    fill="none"
                    stroke="${getColor("hair")}"
                    stroke-width="6"
                    stroke-linecap="round"
                />

                <path
                    d="M225 149
                       C232 150 237 153 240 158"
                    fill="none"
                    stroke="${getColor("hair")}"
                    stroke-width="6"
                    stroke-linecap="round"
                />

                <path
                    d="M139 92
                       C157 77 186 74 208 86"
                    fill="none"
                    stroke="#FFFFFF"
                    stroke-width="8"
                    stroke-linecap="round"
                    opacity=".10"
                />

            </g>
        `;
    }

    // ====================================
    // HEADPHONES
    // ====================================
    if (type === "Headphones") {
        return `
            <g filter="url(#softShadow)">

                <!-- ear cups behind head -->
                <circle
                    cx="116"
                    cy="194"
                    r="22"
                    fill="${shadeColor(color, -20)}"
                />

                <circle
                    cx="244"
                    cy="194"
                    r="22"
                    fill="${shadeColor(color, -20)}"
                />

                <circle
                    cx="116"
                    cy="194"
                    r="14"
                    fill="${color}"
                />

                <circle
                    cx="244"
                    cy="194"
                    r="14"
                    fill="${color}"
                />

                <!-- band -->
                <path
                    d="M112 177
                       C113 111 139 82 180 82
                       C221 82 247 111 248 177"
                    fill="none"
                    stroke="${color}"
                    stroke-width="15"
                    stroke-linecap="round"
                />

                <!-- inner band highlight -->
                <path
                    d="M125 173
                       C127 120 147 98 180 98
                       C213 98 233 120 235 173"
                    fill="none"
                    stroke="${shadeColor(color, 25)}"
                    stroke-width="5"
                    stroke-linecap="round"
                    opacity=".55"
                />

                <!-- visible hair is intentionally tucked BELOW the band -->
                <path
                    d="M122 174
                       C125 164 129 158 136 153"
                    fill="none"
                    stroke="${getColor("hair")}"
                    stroke-width="7"
                    stroke-linecap="round"
                />

                <path
                    d="M238 174
                       C235 164 231 158 224 153"
                    fill="none"
                    stroke="${getColor("hair")}"
                    stroke-width="7"
                    stroke-linecap="round"
                />

            </g>
        `;
    }

    return "";
}


// ========================================
// DRAW AVATAR
// ========================================

function drawAvatar() {
    avatar.innerHTML = createSVG();
}


// ========================================
// MINI PREVIEW
// ========================================

function miniPreview(category, typeIndex, variantIndex) {

    const item = options[category][typeIndex];
    const variant = item.variants[variantIndex];

    const color = variant.color;

    if (category === "hair") {
        return `
            <svg viewBox="0 0 60 60">

                <circle
                    cx="30"
                    cy="33"
                    r="19"
                    fill="#EFC5A4"
                />

                <path
                    d="M12 33
                       C10 16 18 8 30 8
                       C43 8 50 17 48 33
                       C43 27 37 24 30 27
                       C23 24 17 27 12 33 Z"
                    fill="${color}"
                />

                <path
                    d="M18 17 C25 11 35 11 42 16"
                    fill="none"
                    stroke="#FFFFFF"
                    stroke-width="3"
                    opacity=".15"
                    stroke-linecap="round"
                />

            </svg>
        `;
    }

    if (category === "tops") {
        return `
            <svg viewBox="0 0 60 60">

                <path
                    d="M14 20
                       C19 15 23 14 30 14
                       C37 14 41 15 46 20
                       L51 51
                       C40 56 20 56 9 51
                       Z"
                    fill="${color}"
                />

                <path
                    d="M23 15
                       C24 21 27 23 30 23
                       C33 23 36 21 37 15"
                    fill="none"
                    stroke="#000000"
                    stroke-width="3"
                    opacity=".15"
                />

            </svg>
        `;
    }

    if (category === "bottoms") {
        return `
            <svg viewBox="0 0 60 60">

                <path
                    d="M12 14
                       L48 14
                       L45 53
                       L32 53
                       L30 31
                       L28 53
                       L15 53
                       Z"
                    fill="${color}"
                />

            </svg>
        `;
    }

    if (category === "shoes") {
        return `
            <svg viewBox="0 0 60 60">

                <path
                    d="M9 37
                       C18 33 25 34 30 39
                       C34 43 43 42 50 45
                       L52 52
                       L9 52
                       Z"
                    fill="${color}"
                />

            </svg>
        `;
    }

    if (category === "accessories") {

        if (item.name === "Glasses") {
            return `
                <svg viewBox="0 0 60 60">

                    <circle
                        cx="21"
                        cy="30"
                        r="10"
                        fill="none"
                        stroke="${color}"
                        stroke-width="4"
                    />

                    <circle
                        cx="39"
                        cy="30"
                        r="10"
                        fill="none"
                        stroke="${color}"
                        stroke-width="4"
                    />

                    <path
                        d="M31 30 L29 30"
                        stroke="${color}"
                        stroke-width="4"
                    />

                </svg>
            `;
        }

        if (item.name === "Cap") {
            return `
                <svg viewBox="0 0 60 60">

                    <circle
                        cx="30"
                        cy="35"
                        r="18"
                        fill="#EFC5A4"
                    />

                    <path
                        d="M12 31
                           C13 14 23 8 35 9
                           C45 10 51 18 51 28
                           C42 24 27 24 12 31 Z"
                        fill="${color}"
                    />

                    <path
                        d="M11 29 C27 25 42 25 52 29"
                        stroke="${shadeColor(color, -20)}"
                        stroke-width="6"
                        fill="none"
                    />

                </svg>
            `;
        }

        if (item.name === "Beanie") {
            return `
                <svg viewBox="0 0 60 60">

                    <circle
                        cx="30"
                        cy="35"
                        r="18"
                        fill="#EFC5A4"
                    />

                    <path
                        d="M12 34
                           C12 16 21 8 30 8
                           C40 8 49 17 48 34
                           Z"
                        fill="${color}"
                    />

                    <path
                        d="M12 32 C25 29 38 29 48 32 L48 39 C36 36 24 36 12 39 Z"
                        fill="${shadeColor(color, -18)}"
                    />

                </svg>
            `;
        }

        if (item.name === "Headphones") {
            return `
                <svg viewBox="0 0 60 60">

                    <path
                        d="M13 35
                           C13 15 21 8 30 8
                           C39 8 47 15 47 35"
                        fill="none"
                        stroke="${color}"
                        stroke-width="7"
                        stroke-linecap="round"
                    />

                    <circle
                        cx="13"
                        cy="37"
                        r="8"
                        fill="${color}"
                    />

                    <circle
                        cx="47"
                        cy="37"
                        r="8"
                        fill="${color}"
                    />

                </svg>
            `;
        }

        return `
            <svg viewBox="0 0 60 60"></svg>
        `;
    }

    if (category === "body" || category === "face") {
        return `
            <svg viewBox="0 0 60 60">

                <circle
                    cx="30"
                    cy="30"
                    r="22"
                    fill="${color}"
                />

                <path
                    d="M17 21 C23 15 37 15 43 21"
                    fill="none"
                    stroke="#FFFFFF"
                    stroke-width="4"
                    opacity=".15"
                />

            </svg>
        `;
    }

    if (category === "eyes") {
        return `
            <svg viewBox="0 0 60 60">

                <ellipse
                    cx="21"
                    cy="30"
                    rx="9"
                    ry="6"
                    fill="#FFFFFF"
                />

                <ellipse
                    cx="39"
                    cy="30"
                    rx="9"
                    ry="6"
                    fill="#FFFFFF"
                />

                <circle
                    cx="22"
                    cy="30"
                    r="4"
                    fill="${color}"
                />

                <circle
                    cx="38"
                    cy="30"
                    r="4"
                    fill="${color}"
                />

            </svg>
        `;
    }

    if (category === "mouth") {
        return `
            <svg viewBox="0 0 60 60">

                <path
                    d="M20 34 C27 42 33 42 40 34"
                    fill="none"
                    stroke="${color}"
                    stroke-width="4"
                    stroke-linecap="round"
                />

            </svg>
        `;
    }

    return `
        <svg viewBox="0 0 60 60"></svg>
    `;
}


// ========================================
// TYPE MENU
// ========================================

function renderTypeMenu(category) {

    categoryTitle.textContent =
        category.charAt(0).toUpperCase() + category.slice(1);

    itemsContainer.innerHTML = "";

    options[category].forEach((type, typeIndex) => {

        const button = document.createElement("button");

        button.className = "item-button";

        if (selected[category].type === typeIndex) {
            button.classList.add("selected");
        }

        button.innerHTML = `
            <div class="mini-preview">
                ${miniPreview(category, typeIndex, 0)}
            </div>

            <span>${esc(type.name)}</span>
        `;

        button.addEventListener("click", () => {

            selected[category].type = typeIndex;
            selected[category].variant = 0;

            renderVariantMenu(category);
            drawAvatar();

        });

        itemsContainer.appendChild(button);
    });
}


// ========================================
// VARIANT MENU
// ========================================

function renderVariantMenu(category) {

    const typeIndex = selected[category].type;
    const type = options[category][typeIndex];

    categoryTitle.textContent =
        `${category.charAt(0).toUpperCase() + category.slice(1)} — ${type.name}`;

    itemsContainer.innerHTML = "";

    const backButton = document.createElement("button");

    backButton.className = "item-button";

    backButton.innerHTML = `
        <div class="mini-preview">←</div>
        <span>Back</span>
    `;

    backButton.addEventListener("click", () => {
        renderTypeMenu(category);
    });

    itemsContainer.appendChild(backButton);


    type.variants.forEach((variant, variantIndex) => {

        const button = document.createElement("button");

        button.className = "item-button";

        if (selected[category].variant === variantIndex) {
            button.classList.add("selected");
        }

        button.innerHTML = `
            <div class="mini-preview">
                ${miniPreview(category, typeIndex, variantIndex)}
            </div>

            <span>${esc(variant.name)}</span>
        `;

        button.addEventListener("click", () => {

            selected[category].variant = variantIndex;

            renderVariantMenu(category);
            drawAvatar();

        });

        itemsContainer.appendChild(button);
    });
}


// ========================================
// CATEGORY BUTTONS
// ========================================

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        categoryButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        currentCategory = button.dataset.category;

        renderTypeMenu(currentCategory);

    });

});


// ========================================
// RANDOMIZE
// ========================================

randomizeButton.addEventListener("click", () => {

    Object.keys(options).forEach(category => {

        const types = options[category];

        const randomType =
            Math.floor(Math.random() * types.length);

        const randomVariant =
            Math.floor(
                Math.random() *
                types[randomType].variants.length
            );

        selected[category].type = randomType;
        selected[category].variant = randomVariant;

    });

    renderTypeMenu(currentCategory);
    drawAvatar();

});


// ========================================
// SAVE AVATAR
// ========================================

saveButton.addEventListener("click", () => {

    const svg = document.getElementById("avatar-svg");

    if (!svg) return;

    const serializer = new XMLSerializer();

    const source = serializer.serializeToString(svg);

    const blob = new Blob(
        [source],
        { type: "image/svg+xml;charset=utf-8" }
    );

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    const avatarName =
        nameInput.value.trim() || "my-avatar";

    link.href = url;
    link.download =
        avatarName.replace(/[^a-z0-9-_]/gi, "_") +
        ".svg";

    document.body.appendChild(link);

    link.click();

    link.remove();

    URL.revokeObjectURL(url);

});


// ========================================
// NAME MEMORY
// ========================================

const savedName =
    localStorage.getItem("avatarName");

if (savedName) {
    nameInput.value = savedName;
}

nameInput.addEventListener("input", () => {

    localStorage.setItem(
        "avatarName",
        nameInput.value
    );

});


// ========================================
// START
// ========================================

drawAvatar();
renderTypeMenu("body");
