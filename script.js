// ========================================
// AVATAR GAME
// POLISHED 2.5D AVATAR ENGINE
// SLEEVES + ACCESSORY HAIR FIX
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

const options = {
    body: [
        { name: "Light", variants: ["Light"] },
        { name: "Warm", variants: ["Warm"] },
        { name: "Tan", variants: ["Tan"] },
        { name: "Deep", variants: ["Deep"] }
    ],

    face: [
        { name: "Round", variants: ["Round"] },
        { name: "Soft", variants: ["Soft"] },
        { name: "Warm", variants: ["Warm"] }
    ],

    hair: [
        { name: "Short", variants: ["Black", "Brown", "Blonde", "Blue"] },
        { name: "Fluffy", variants: ["Black", "Brown", "Blonde", "Blue"] },
        { name: "Wavy", variants: ["Black", "Brown", "Blonde", "Blue"] },
        { name: "Long", variants: ["Black", "Brown", "Blonde", "Blue"] }
    ],

    eyes: [
        { name: "Brown", variants: ["Brown"] },
        { name: "Blue", variants: ["Blue"] },
        { name: "Green", variants: ["Green"] },
        { name: "Gray", variants: ["Gray"] }
    ],

    mouth: [
        { name: "Smile", variants: ["Smile"] },
        { name: "Small", variants: ["Small"] },
        { name: "Neutral", variants: ["Neutral"] }
    ],

    tops: [
        { name: "Shirts", variants: ["Red", "Blue", "Green", "White", "Black"] },
        { name: "Hoodies", variants: ["Red", "Blue", "Green", "Purple", "Black"] },
        { name: "Sweaters", variants: ["Cream", "Blue", "Green", "Gray", "Black"] },
        { name: "Jackets", variants: ["Blue", "Black", "Brown", "Green"] }
    ],

    bottoms: [
        { name: "Jeans", variants: ["Blue", "Dark Blue", "Black"] },
        { name: "Shorts", variants: ["Black", "Blue", "Gray", "Khaki"] }
    ],

    shoes: [
        { name: "Sneakers", variants: ["White", "Black", "Red", "Blue"] },
        { name: "Boots", variants: ["Black", "Brown", "Tan"] }
    ],

    accessories: [
        { name: "None", variants: ["None"] },
        { name: "Glasses", variants: ["Black", "Blue", "Round"] },
        { name: "Cap", variants: ["Black", "Blue", "Red", "Green"] },
        { name: "Beanie", variants: ["Black", "Gray", "Blue", "Red"] },
        { name: "Headphones", variants: ["Black", "White", "Blue", "Red"] }
    ]
};

const skinColors = {
    Light: "#F7D2B5",
    Warm: "#EAB895",
    Tan: "#C98D68",
    Deep: "#8E5A3D"
};

const hairColors = {
    Black: "#17191F",
    Brown: "#4A2C22",
    Blonde: "#D9AE55",
    Blue: "#355D91"
};

const eyeColors = {
    Brown: "#493024",
    Blue: "#4E88C5",
    Green: "#4F916B",
    Gray: "#737C86"
};

const topColors = {
    Red: "#C84D55",
    Blue: "#4C76B8",
    Green: "#57906C",
    White: "#EDEDED",
    Black: "#252A32",
    Purple: "#7864A8",
    Cream: "#D9C9A7",
    Gray: "#777E88",
    Brown: "#76533F"
};

const bottomColors = {
    Blue: "#466A9E",
    "Dark Blue": "#304C78",
    Black: "#282D35",
    Gray: "#7C838C",
    Khaki: "#A99A72"
};

const shoeColors = {
    White: "#F2F3F4",
    Black: "#22252B",
    Red: "#B94A52",
    Blue: "#4B6EA8",
    Brown: "#704D3C",
    Tan: "#A87855"
};

function esc(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function current(category) {
    return options[category][selected[category].type];
}

function currentVariant(category) {
    return current(category).variants[selected[category].variant];
}

function createSVG(content) {
    return `
    <svg
        viewBox="0 0 360 560"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Avatar"
    >
        <defs>

            <linearGradient id="skinGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="${skinColors[currentVariant("body")]}"/>
                <stop offset="65%" stop-color="${skinColors[currentVariant("body")]}"/>
                <stop offset="100%" stop-color="#B77B5C"/>
            </linearGradient>

            <linearGradient id="hairGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="${hairColors[currentVariant("hair")]}"/>
                <stop offset="100%" stop-color="#101217"/>
            </linearGradient>

            <linearGradient id="topGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="${topColors[currentVariant("tops")]}"/>
                <stop offset="100%" stop-color="#30343C"/>
            </linearGradient>

            <linearGradient id="bottomGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="${bottomColors[currentVariant("bottoms")]}"/>
                <stop offset="100%" stop-color="#252A32"/>
            </linearGradient>

            <filter id="softShadow" x="-30%" y="-30%" width="160%" height="180%">
                <feDropShadow
                    dx="0"
                    dy="7"
                    stdDeviation="7"
                    flood-color="#253746"
                    flood-opacity="0.18"
                />
            </filter>

            <filter id="smallShadow" x="-30%" y="-30%" width="160%" height="180%">
                <feDropShadow
                    dx="0"
                    dy="3"
                    stdDeviation="3"
                    flood-color="#202B35"
                    flood-opacity="0.18"
                />
            </filter>

            <clipPath id="headClip">
                <path d="
                    M180 104
                    C145 104 123 128 122 166
                    L125 214
                    C127 251 148 274 180 274
                    C212 274 233 251 235 214
                    L238 166
                    C237 128 215 104 180 104
                    Z
                "/>
            </clipPath>

        </defs>

        <!-- Ground shadow -->
        <ellipse
            cx="180"
            cy="529"
            rx="91"
            ry="15"
            fill="#667987"
            opacity="0.18"
        />

        ${content}
    </svg>`;
}

/* ========================================
   LEGS
======================================== */

function drawLegs() {
    const bottom = current("bottoms").name;

    if (bottom === "Shorts") {
        return `
            <path
                d="M139 399 L177 399 L174 468 L137 468 Z"
                fill="url(#bottomGradient)"
            />

            <path
                d="M183 399 L221 399 L223 468 L186 468 Z"
                fill="url(#bottomGradient)"
            />

            <path
                d="M139 399 L177 399 L174 412 L140 412 Z"
                fill="#252B34"
                opacity=".25"
            />

            <path
                d="M183 399 L221 399 L221 412 L186 412 Z"
                fill="#252B34"
                opacity=".25"
            />

            <path
                d="M145 414 C153 419 164 419 173 414"
                fill="none"
                stroke="#FFFFFF"
                stroke-width="3"
                opacity=".12"
            />

            <path
                d="M187 414 C196 419 207 419 218 414"
                fill="none"
                stroke="#FFFFFF"
                stroke-width="3"
                opacity=".12"
            />
        `;
    }

    return `
        <path
            d="M141 394
               C151 390 168 391 177 396
               L176 476
               C167 484 150 484 140 477
               Z"
            fill="url(#bottomGradient)"
        />

        <path
            d="M183 396
               C192 391 209 390 219 394
               L220 477
               C210 484 193 484 184 476
               Z"
            fill="url(#bottomGradient)"
        />

        <path
            d="M146 407 C155 412 166 413 174 408"
            fill="none"
            stroke="#FFFFFF"
            stroke-width="3"
            opacity=".10"
        />

        <path
            d="M186 408 C194 413 206 412 215 407"
            fill="none"
            stroke="#FFFFFF"
            stroke-width="3"
            opacity=".10"
        />
    `;
}

/* ========================================
   SHOES
======================================== */

function drawShoes() {
    const type = current("shoes").name;
    const color = shoeColors[currentVariant("shoes")];

    if (type === "Boots") {
        return `
            <path
                d="M137 466
                   C147 470 163 470 176 466
                   L177 497
                   C170 507 151 508 137 502
                   Z"
                fill="${color}"
                filter="url(#smallShadow)"
            />

            <path
                d="M183 466
                   C196 470 212 470 222 466
                   L223 502
                   C209 508 190 507 183 497
                   Z"
                fill="${color}"
                filter="url(#smallShadow)"
            />

            <path
                d="M136 498
                   C148 503 164 503 177 497
                   L177 508
                   L133 508
                   C131 504 132 501 136 498 Z"
                fill="#202329"
            />

            <path
                d="M183 497
                   C196 503 212 503 224 498
                   C228 501 229 504 227 508
                   L183 508 Z"
                fill="#202329"
            />
        `;
    }

    return `
        <path
            d="M137 468
               C148 464 164 465 176 471
               L178 491
               C169 500 147 502 133 495
               C131 487 133 477 137 468 Z"
            fill="${color}"
            filter="url(#smallShadow)"
        />

        <path
            d="M183 471
               C195 465 212 464 223 468
               C227 477 229 487 227 495
               C213 502 191 500 182 491 Z"
            fill="${color}"
            filter="url(#smallShadow)"
        />

        <path
            d="M135 489
               C147 493 164 493 177 487
               L178 497
               C164 504 143 503 133 496 Z"
            fill="#F6F6F4"
            opacity=".95"
        />

        <path
            d="M182 487
               C196 493 213 493 225 489
               L227 496
               C217 503 196 504 182 497 Z"
            fill="#F6F6F4"
            opacity=".95"
        />

        <path
            d="M145 477 L166 478"
            stroke="#FFFFFF"
            stroke-width="3"
            opacity=".35"
            stroke-linecap="round"
        />

        <path
            d="M194 478 L215 477"
            stroke="#FFFFFF"
            stroke-width="3"
            opacity=".35"
            stroke-linecap="round"
        />
    `;
}

/* ========================================
   BACK HAIR
======================================== */

function drawBackHair() {
    const style = current("hair").name;
    const color = hairColors[currentVariant("hair")];

    if (style === "Long") {
        return `
            <path
                d="M120 170
                   C109 119 132 83 180 82
                   C228 83 251 119 240 170
                   L237 263
                   C229 285 218 294 205 296
                   L155 296
                   C141 294 130 285 123 263
                   Z"
                fill="${color}"
                filter="url(#smallShadow)"
            />
        `;
    }

    if (style === "Wavy") {
        return `
            <path
                d="M119 175
                   C109 118 136 82 180 82
                   C224 82 251 118 241 175
                   L238 251
                   C229 264 218 269 207 267
                   L153 267
                   C139 268 128 261 122 249
                   Z"
                fill="${color}"
                filter="url(#smallShadow)"
            />
        `;
    }

    return `
        <path
            d="M120 169
               C113 116 136 82 180 82
               C224 82 247 116 240 169
               L234 222
               C224 237 211 242 201 241
               L159 241
               C145 241 134 234 126 220
               Z"
            fill="${color}"
            filter="url(#smallShadow)"
        />
    `;
}

/* ========================================
   ARMS
   Skin is deliberately behind clothing.
   Sleeves cover the upper arms.
======================================== */

function drawArms() {
    const skin = "url(#skinGradient)";

    return `
        <!-- left arm skin underneath sleeve -->
        <path
            d="M101 322
               C91 334 88 354 89 374
               L91 401
               C92 412 99 418 107 416
               C115 414 118 407 116 397
               L114 361
               C114 348 119 337 124 331
               Z"
            fill="${skin}"
        />

        <!-- right arm skin underneath sleeve -->
        <path
            d="M236 331
               C241 337 246 348 246 361
               L244 397
               C242 407 245 414 253 416
               C261 418 268 412 269 401
               L271 374
               C272 354 269 334 259 322
               Z"
            fill="${skin}"
        />
    `;
}

/* ========================================
   TOPS + SLEEVES
======================================== */

function drawTop() {
    const type = current("tops").name;
    const color = topColors[currentVariant("tops")];

    if (type === "Shirts") {
        return `
            <!-- torso -->
            <path
                d="M124 306
                   C137 296 151 291 163 289
                   L197 289
                   C209 291 223 296 236 306
                   L252 400
                   C231 410 129 410 108 400
                   Z"
                fill="url(#topGradient)"
                filter="url(#smallShadow)"
            />

            <!-- short sleeves -->
            <path
                d="M124 306
                   C113 310 103 317 97 326
                   L94 353
                   C101 360 112 362 122 358
                   L130 326
                   Z"
                fill="${color}"
            />

            <path
                d="M236 306
                   C247 310 257 317 263 326
                   L266 353
                   C259 360 248 362 238 358
                   L230 326
                   Z"
                fill="${color}"
            />

            <!-- sleeve cuffs -->
            <path
                d="M95 348 C103 353 113 354 122 350 L120 361 C111 365 101 363 94 357 Z"
                fill="#30343C"
                opacity=".5"
            />

            <path
                d="M238 350 C247 354 257 353 265 348 L266 357 C259 363 249 365 240 361 Z"
                fill="#30343C"
                opacity=".5"
            />

            <!-- collar -->
            <path
                d="M158 291
                   C163 305 171 311 180 311
                   C189 311 197 305 202 291"
                fill="none"
                stroke="#242932"
                stroke-width="8"
                opacity=".6"
            />

            <path
                d="M139 335 C155 340 170 342 180 342"
                fill="none"
                stroke="#FFFFFF"
                stroke-width="4"
                opacity=".10"
                stroke-linecap="round"
            />
        `;
    }

    if (type === "Hoodies") {
        return `
            <!-- torso -->
            <path
                d="M123 305
                   C136 295 151 289 163 288
                   L197 288
                   C209 289 224 295 237 305
                   L253 404
                   C229 414 131 414 107 404
                   Z"
                fill="url(#topGradient)"
                filter="url(#smallShadow)"
            />

            <!-- long left sleeve -->
            <path
                d="M124 304
                   C112 309 102 318 97 329
                   L91 390
                   C96 400 106 405 117 401
                   L128 340
                   L137 317
                   Z"
                fill="${color}"
            />

            <!-- long right sleeve -->
            <path
                d="M236 304
                   C248 309 258 318 263 329
                   L269 390
                   C264 400 254 405 243 401
                   L232 340
                   L223 317
                   Z"
                fill="${color}"
            />

            <!-- cuffs -->
            <path
                d="M91 386
                   C99 391 108 393 118 389
                   L117 402
                   C107 407 97 403 91 397 Z"
                fill="#262B33"
                opacity=".65"
            />

            <path
                d="M242 389
                   C252 393 261 391 269 386
                   L269 397
                   C263 403 253 407 243 402 Z"
                fill="#262B33"
                opacity=".65"
            />

            <!-- hood -->
            <path
                d="M151 293
                   C154 277 166 269 180 269
                   C194 269 206 277 209 293
                   L198 311
                   C192 318 168 318 162 311 Z"
                fill="${color}"
                opacity=".9"
            />

            <!-- hood opening -->
            <path
                d="M161 291
                   C168 299 192 299 199 291"
                fill="none"
                stroke="#252A31"
                stroke-width="6"
                opacity=".7"
            />

            <!-- pocket -->
            <path
                d="M147 369
                   C158 376 202 376 213 369
                   L207 397
                   C194 402 166 402 153 397 Z"
                fill="#22272F"
                opacity=".32"
            />

            <!-- drawstrings -->
            <path
                d="M166 296 L165 320"
                stroke="#E9E9E9"
                stroke-width="3"
                opacity=".6"
            />

            <path
                d="M194 296 L195 320"
                stroke="#E9E9E9"
                stroke-width="3"
                opacity=".6"
            />
        `;
    }

    if (type === "Sweaters") {
        return `
            <path
                d="M123 304
                   C136 295 151 289 163 288
                   L197 288
                   C209 289 224 295 237 304
                   L253 403
                   C229 413 131 413 107 403
                   Z"
                fill="url(#topGradient)"
                filter="url(#smallShadow)"
            />

            <!-- sweater sleeves -->
            <path
                d="M124 303
                   C111 310 101 319 96 331
                   L91 391
                   C97 401 108 404 118 400
                   L130 338
                   L138 315 Z"
                fill="${color}"
            />

            <path
                d="M236 303
                   C249 310 259 319 264 331
                   L269 391
                   C263 401 252 404 242 400
                   L230 338
                   L222 315 Z"
                fill="${color}"
            />

            <!-- ribbed cuffs -->
            <path
                d="M91 387 C100 393 109 394 118 389 L117 402 C107 407 97 403 91 397 Z"
                fill="#565C65"
                opacity=".65"
            />

            <path
                d="M242 389 C251 394 260 393 269 387 L269 397 C263 403 253 407 243 402 Z"
                fill="#565C65"
                opacity=".65"
            />

            <!-- collar -->
            <path
                d="M155 291
                   C159 305 168 311 180 311
                   C192 311 201 305 205 291"
                fill="none"
                stroke="#555B63"
                stroke-width="8"
                opacity=".75"
            />

            <!-- fabric folds -->
            <path
                d="M138 328 C151 335 163 337 174 338"
                fill="none"
                stroke="#FFFFFF"
                stroke-width="3"
                opacity=".10"
                stroke-linecap="round"
            />

            <path
                d="M222 328 C209 335 197 337 186 338"
                fill="none"
                stroke="#FFFFFF"
                stroke-width="3"
                opacity=".10"
                stroke-linecap="round"
            />
        `;
    }

    // Jackets
    return `
        <!-- jacket torso -->
        <path
            d="M123 304
               C136 294 151 289 163 288
               L197 288
               C209 289 224 294 237 304
               L253 403
               C229 413 131 413 107 403
               Z"
            fill="url(#topGradient)"
            filter="url(#smallShadow)"
        />

        <!-- structured sleeves -->
        <path
            d="M124 304
               C112 309 101 318 96 331
               L91 391
               C97 401 108 404 118 400
               L130 337
               L139 313 Z"
            fill="${color}"
        />

        <path
            d="M236 304
               C248 309 259 318 264 331
               L269 391
               C263 401 252 404 242 400
               L230 337
               L221 313 Z"
            fill="${color}"
        />

        <!-- cuffs -->
        <path
            d="M91 386 C100 392 109 393 118 389 L117 402 C107 407 97 403 91 397 Z"
            fill="#20242A"
        />

        <path
            d="M242 389 C251 393 260 392 269 386 L269 397 C263 403 253 407 243 402 Z"
            fill="#20242A"
        />

        <!-- zipper -->
        <path
            d="M180 301 L180 404"
            stroke="#D9DDE0"
            stroke-width="4"
            opacity=".75"
        />

        <!-- jacket panels -->
        <path
            d="M148 306 C155 331 157 369 154 399"
            fill="none"
            stroke="#FFFFFF"
            stroke-width="3"
            opacity=".08"
        />

        <path
            d="M212 306 C205 331 203 369 206 399"
            fill="none"
            stroke="#FFFFFF"
            stroke-width="3"
            opacity=".08"
        />

        <!-- collar -->
        <path
            d="M159 289 L180 310 L201 289"
            fill="none"
            stroke="#252A31"
            stroke-width="8"
            stroke-linejoin="round"
        />
    `;
}

/* ========================================
   NECK
======================================== */

function drawNeck() {
    return `
        <path
            d="M160 260
               L200 260
               L202 303
               C191 311 169 311 158 303
               Z"
            fill="url(#skinGradient)"
        />
    `;
}

/* ========================================
   HEAD
======================================== */

function drawHead() {
    const faceType = current("face").name;

    let path;

    if (faceType === "Soft") {
        path = `
            M180 104
            C145 104 123 128 122 166
            L126 217
            C130 252 150 273 180 275
            C210 273 230 252 234 217
            L238 166
            C237 128 215 104 180 104 Z
        `;
    } else if (faceType === "Warm") {
        path = `
            M180 105
            C147 105 124 130 123 166
            L126 218
            C129 250 149 272 180 273
            C211 272 231 250 234 218
            L237 166
            C236 130 213 105 180 105 Z
        `;
    } else {
        path = `
            M180 104
            C145 104 123 128 122 166
            L125 214
            C127 251 148 274 180 274
            C212 274 233 251 235 214
            L238 166
            C237 128 215 104 180 104 Z
        `;
    }

    return `
        <path
            d="${path}"
            fill="url(#skinGradient)"
            filter="url(#smallShadow)"
        />

        <!-- subtle cheek shading -->
        <ellipse
            cx="145"
            cy="214"
            rx="19"
            ry="12"
            fill="#C97869"
            opacity=".10"
        />

        <ellipse
            cx="215"
            cy="214"
            rx="19"
            ry="12"
            fill="#C97869"
            opacity=".10"
        />
    `;
}

/* ========================================
   EARS
======================================== */

function drawEars() {
    return `
        <ellipse
            cx="124"
            cy="192"
            rx="10"
            ry="18"
            fill="url(#skinGradient)"
        />

        <ellipse
            cx="236"
            cy="192"
            rx="10"
            ry="18"
            fill="url(#skinGradient)"
        />

        <path
            d="M124 186 C118 190 120 199 125 201"
            fill="none"
            stroke="#B7795B"
            stroke-width="3"
            opacity=".55"
        />

        <path
            d="M236 186 C242 190 240 199 235 201"
            fill="none"
            stroke="#B7795B"
            stroke-width="3"
            opacity=".55"
        />
    `;
}

/* ========================================
   FACE
======================================== */

function drawBrows() {
    return `
        <path
            d="M143 169 C151 164 160 164 167 168"
            fill="none"
            stroke="#4B3029"
            stroke-width="4"
            stroke-linecap="round"
        />

        <path
            d="M193 168 C200 164 209 164 217 169"
            fill="none"
            stroke="#4B3029"
            stroke-width="4"
            stroke-linecap="round"
        />
    `;
}

function drawEyes() {
    const color = eyeColors[currentVariant("eyes")];

    return `
        <ellipse
            cx="156"
            cy="188"
            rx="10"
            ry="7"
            fill="#FFFFFF"
        />

        <ellipse
            cx="204"
            cy="188"
            rx="10"
            ry="7"
            fill="#FFFFFF"
        />

        <ellipse
            cx="157"
            cy="188"
            rx="5"
            ry="6"
            fill="${color}"
        />

        <ellipse
            cx="203"
            cy="188"
            rx="5"
            ry="6"
            fill="${color}"
        />

        <circle cx="158" cy="186" r="2" fill="#FFFFFF"/>
        <circle cx="204" cy="186" r="2" fill="#FFFFFF"/>
    `;
}

function drawNose() {
    return `
        <path
            d="M180 190
               C177 201 176 208 180 211
               C184 211 187 209 188 206"
            fill="none"
            stroke="#A66F55"
            stroke-width="3"
            stroke-linecap="round"
            opacity=".7"
        />
    `;
}

function drawMouth() {
    const type = current("mouth").name;

    if (type === "Smile") {
        return `
            <path
                d="M166 225
                   C173 233 187 233 194 225"
                fill="none"
                stroke="#7D3E45"
                stroke-width="4"
                stroke-linecap="round"
            />
        `;
    }

    if (type === "Small") {
        return `
            <path
                d="M174 227
                   C178 229 182 229 186 227"
                fill="none"
                stroke="#7D3E45"
                stroke-width="4"
                stroke-linecap="round"
            />
        `;
    }

    return `
        <path
            d="M173 227 L187 227"
            stroke="#7D3E45"
            stroke-width="3"
            stroke-linecap="round"
        />
    `;
}

function drawFace() {
    return `
        ${drawBrows()}
        ${drawEyes()}
        ${drawNose()}
        ${drawMouth()}
    `;
}

/* ========================================
   HAIR
   IMPORTANT:
   Accessories change the visible hair.
======================================== */

function drawFrontHair() {
    const style = current("hair").name;
    const color = hairColors[currentVariant("hair")];
    const accessory = current("accessories").name;

    // No headwear: full hairstyle.
    if (accessory === "None" || accessory === "Glasses") {
        if (style === "Short") {
            return `
                <path
                    d="M123 169
                       C119 128 139 94 180 91
                       C221 94 241 128 237 169
                       C225 154 217 145 206 138
                       C197 150 188 155 180 157
                       C170 155 161 149 154 138
                       C145 145 135 154 123 169 Z"
                    fill="url(#hairGradient)"
                />

                <path
                    d="M136 126 C150 108 168 101 180 101"
                    fill="none"
                    stroke="#FFFFFF"
                    stroke-width="5"
                    opacity=".10"
                    stroke-linecap="round"
                />
            `;
        }

        if (style === "Fluffy") {
            return `
                <path
                    d="M120 170
                       C111 148 116 119 132 105
                       C143 88 159 83 177 87
                       C194 80 215 91 224 105
                       C243 118 248 146 238 170
                       C226 158 217 150 207 139
                       C198 151 188 157 180 159
                       C169 157 160 150 153 139
                       C143 151 133 159 120 170 Z"
                    fill="url(#hairGradient)"
                />

                <path
                    d="M130 121
                       C145 102 164 96 181 97
                       C199 96 215 103 229 121"
                    fill="none"
                    stroke="#FFFFFF"
                    stroke-width="5"
                    opacity=".10"
                    stroke-linecap="round"
                />
            `;
        }

        if (style === "Wavy") {
            return `
                <path
                    d="M119 171
                       C113 144 118 117 137 101
                       C151 88 168 85 180 90
                       C196 84 216 92 226 106
                       C243 123 247 149 239 173
                       C228 158 218 151 207 141
                       C202 157 193 164 182 164
                       C171 164 160 156 153 141
                       C143 153 133 162 119 171 Z"
                    fill="url(#hairGradient)"
                />

                <path
                    d="M129 118 C145 99 161 96 177 98"
                    fill="none"
                    stroke="#FFFFFF"
                    stroke-width="5"
                    opacity=".09"
                    stroke-linecap="round"
                />
            `;
        }

        return `
            <path
                d="M120 174
                   C112 132 127 99 157 91
                   C182 83 214 91 230 113
                   C242 131 242 153 238 177
                   L235 253
                   C227 266 218 270 209 266
                   L209 185
                   C201 173 193 166 181 163
                   C168 166 158 174 151 186
                   L151 267
                   C140 270 130 264 124 252
                   Z"
                fill="url(#hairGradient)"
            />

            <path
                d="M133 119 C149 100 169 95 188 96"
                fill="none"
                stroke="#FFFFFF"
                stroke-width="5"
                opacity=".09"
                stroke-linecap="round"
            />
        `;
    }

    // ====================================
    // CAP / BEANIE
    // Only lower hair remains visible.
    // ====================================

    if (accessory === "Cap" || accessory === "Beanie") {
        if (style === "Long") {
            return `
                <!-- side locks only -->
                <path
                    d="M126 174
                       C126 158 130 146 138 139
                       C135 169 136 205 139 251
                       C136 268 131 277 126 281
                       C120 264 120 220 126 174 Z"
                    fill="url(#hairGradient)"
                />

                <path
                    d="M234 174
                       C234 158 230 146 222 139
                       C225 169 224 205 221 251
                       C224 268 229 277 234 281
                       C240 264 240 220 234 174 Z"
                    fill="url(#hairGradient)"
                />
            `;
        }

        return `
            <path
                d="M126 170
                   C125 157 130 145 139 138
                   C136 161 137 190 141 216
                   C137 227 132 232 126 231
                   C122 214 122 190 126 170 Z"
                fill="url(#hairGradient)"
            />

            <path
                d="M234 170
                   C235 157 230 145 221 138
                   C224 161 223 190 219 216
                   C223 227 228 232 234 231
                   C238 214 238 190 234 170 Z"
                fill="url(#hairGradient)"
            />
        `;
    }

    // ====================================
    // HEADPHONES
    // Hair stops below band.
    // ====================================

    if (accessory === "Headphones") {
        if (style === "Long") {
            return `
                <path
                    d="M127 178
                       C126 158 131 145 138 137
                       L141 245
                       C138 263 132 275 126 280
                       C121 254 121 210 127 178 Z"
                    fill="url(#hairGradient)"
                />

                <path
                    d="M233 178
                       C234 158 229 145 222 137
                       L219 245
                       C222 263 228 275 234 280
                       C239 254 239 210 233 178 Z"
                    fill="url(#hairGradient)"
                />

                <path
                    d="M145 130
                       C151 118 163 112 180 112
                       C197 112 209 118 215 130
                       L212 148
                       C202 137 191 133 180 133
                       C169 133 158 137 148 148 Z"
                    fill="url(#hairGradient)"
                />
            `;
        }

        return `
            <!-- controlled top hair, below headphone band -->
            <path
                d="M127 170
                   C125 148 133 128 147 119
                   C157 112 169 109 180 110
                   C191 109 203 112 213 119
                   C227 128 235 148 233 170
                   C223 159 214 153 205 148
                   C198 157 189 162 180 163
                   C171 162 162 157 155 148
                   C146 153 137 159 127 170 Z"
                fill="url(#hairGradient)"
            />
        `;
    }

    return "";
}

/* ========================================
   ACCESSORIES
======================================== */

function drawAccessory() {
    const type = current("accessories").name;
    const variant = currentVariant("accessories");

    if (type === "None") return "";

    if (type === "Glasses") {
        let frame = "#20242A";

        if (variant === "Blue") frame = "#426A9F";
        if (variant === "Round") frame = "#30343A";

        if (variant === "Round") {
            return `
                <circle
                    cx="155"
                    cy="188"
                    r="16"
                    fill="none"
                    stroke="${frame}"
                    stroke-width="4"
                />

                <circle
                    cx="205"
                    cy="188"
                    r="16"
                    fill="none"
                    stroke="${frame}"
                    stroke-width="4"
                />

                <path
                    d="M171 188 L189 188"
                    stroke="${frame}"
                    stroke-width="4"
                />

                <path
                    d="M139 186 L130 183"
                    stroke="${frame}"
                    stroke-width="4"
                    stroke-linecap="round"
                />

                <path
                    d="M221 186 L230 183"
                    stroke="${frame}"
                    stroke-width="4"
                    stroke-linecap="round"
                />
            `;
        }

        return `
            <rect
                x="139"
                y="177"
                width="34"
                height="22"
                rx="8"
                fill="none"
                stroke="${frame}"
                stroke-width="4"
            />

            <rect
                x="187"
                y="177"
                width="34"
                height="22"
                rx="8"
                fill="none"
                stroke="${frame}"
                stroke-width="4"
            />

            <path
                d="M173 187 L187 187"
                stroke="${frame}"
                stroke-width="4"
            />

            <path
                d="M139 184 L130 181"
                stroke="${frame}"
                stroke-width="4"
                stroke-linecap="round"
            />

            <path
                d="M221 184 L230 181"
                stroke="${frame}"
                stroke-width="4"
                stroke-linecap="round"
            />
        `;
    }

    if (type === "Cap") {
        const color = topColors[variant] || "#252A32";

        return `
            <!-- cap crown -->
            <path
                d="M126 151
                   C126 116 147 94 180 94
                   C213 94 234 116 234 151
                   C220 144 204 140 180 140
                   C156 140 140 144 126 151 Z"
                fill="${color}"
                filter="url(#smallShadow)"
            />

            <!-- cap seam -->
            <path
                d="M180 95 C180 113 180 128 180 140"
                fill="none"
                stroke="#FFFFFF"
                stroke-width="3"
                opacity=".10"
            />

            <!-- brim -->
            <path
                d="M125 143
                   C146 137 166 137 186 140
                   C202 142 216 146 231 153
                   C216 162 190 164 164 160
                   C147 158 133 153 125 148 Z"
                fill="${color}"
                filter="url(#smallShadow)"
            />

            <path
                d="M130 148 C150 153 172 154 192 153"
                fill="none"
                stroke="#FFFFFF"
                stroke-width="3"
                opacity=".10"
                stroke-linecap="round"
            />
        `;
    }

    if (type === "Beanie") {
        const color = topColors[variant] || "#555D68";

        return `
            <!-- beanie -->
            <path
                d="M123 157
                   C124 117 145 91 180 91
                   C215 91 236 117 237 157
                   C216 149 198 147 180 147
                   C162 147 144 149 123 157 Z"
                fill="${color}"
                filter="url(#smallShadow)"
            />

            <!-- folded rim -->
            <path
                d="M122 146
                   C150 139 209 139 238 146
                   L236 163
                   C206 155 153 155 124 163 Z"
                fill="#252A31"
                opacity=".55"
            />

            <!-- beanie highlight -->
            <path
                d="M145 111
                   C156 100 168 97 180 97"
                fill="none"
                stroke="#FFFFFF"
                stroke-width="5"
                opacity=".10"
                stroke-linecap="round"
            />
        `;
    }

    // Headphones
    const headphoneColor =
        variant === "White"
            ? "#E9ECEF"
            : variant === "Blue"
                ? "#4C76B8"
                : variant === "Red"
                    ? "#B94D57"
                    : "#252A31";

    const cupDark =
        variant === "White"
            ? "#B9C0C7"
            : "#171A20";

    return `
        <!-- headphone band -->
        <path
            d="M127 177
               C127 121 147 92 180 92
               C213 92 233 121 233 177"
            fill="none"
            stroke="${headphoneColor}"
            stroke-width="14"
            stroke-linecap="round"
            filter="url(#smallShadow)"
        />

        <!-- band highlight -->
        <path
            d="M136 145
               C142 113 157 99 180 99
               C203 99 218 113 224 145"
            fill="none"
            stroke="#FFFFFF"
            stroke-width="4"
            opacity=".12"
            stroke-linecap="round"
        />

        <!-- left cup -->
        <rect
            x="113"
            y="169"
            width="25"
            height="57"
            rx="12"
            fill="${cupDark}"
            filter="url(#smallShadow)"
        />

        <rect
            x="118"
            y="174"
            width="17"
            height="47"
            rx="8"
            fill="${headphoneColor}"
        />

        <!-- right cup -->
        <rect
            x="222"
            y="169"
            width="25"
            height="57"
            rx="12"
            fill="${cupDark}"
            filter="url(#smallShadow)"
        />

        <rect
            x="225"
            y="174"
            width="17"
            height="47"
            rx="8"
            fill="${headphoneColor}"
        />

        <path
            d="M122 184 L122 211"
            stroke="#FFFFFF"
            stroke-width="3"
            opacity=".15"
            stroke-linecap="round"
        />

        <path
            d="M238 184 L238 211"
            stroke="#FFFFFF"
            stroke-width="3"
            opacity=".15"
            stroke-linecap="round"
        />
    `;
}

/* ========================================
   AVATAR
======================================== */

function drawAvatar() {
    const content = `
        ${drawLegs()}
        ${drawShoes()}

        <!-- hair behind body -->
        ${drawBackHair()}

        <!-- skin arms first so sleeves cover them -->
        ${drawArms()}

        <!-- clothing owns the shoulders + sleeves -->
        ${drawTop()}

        ${drawNeck()}
        ${drawHead()}
        ${drawEars()}

        <!-- face -->
        ${drawFace()}

        <!-- accessory-aware hairstyle -->
        ${drawFrontHair()}

        <!-- accessories -->
        ${drawAccessory()}
    `;

    document.getElementById("avatar").innerHTML = createSVG(content);
}

/* ========================================
   MINI PREVIEWS
======================================== */

function miniPreview(category, typeIndex, variantIndex) {
    const item = options[category][typeIndex];
    const variant = item.variants[variantIndex];

    let visual = "";

    if (category === "body") {
        visual = `
            <circle
                cx="40"
                cy="32"
                r="15"
                fill="${skinColors[variant]}"
            />
        `;
    }

    else if (category === "face") {
        visual = `
            <circle
                cx="40"
                cy="32"
                r="17"
                fill="${skinColors[currentVariant("body")]}"
            />
            <circle cx="34" cy="30" r="2" fill="#333"/>
            <circle cx="46" cy="30" r="2" fill="#333"/>
        `;
    }

    else if (category === "hair") {
        visual = `
            <circle
                cx="40"
                cy="36"
                r="15"
                fill="#F0C4A5"
            />
            <path
                d="M25 35 C23 18 31 12 40 12 C49 12 57 18 55 35 C50 29 45 26 40 26 C35 26 30 29 25 35Z"
                fill="${hairColors[variant]}"
            />
        `;
    }

    else if (category === "eyes") {
        visual = `
            <ellipse cx="33" cy="32" rx="5" ry="4" fill="#fff"/>
            <ellipse cx="47" cy="32" rx="5" ry="4" fill="#fff"/>
            <circle cx="34" cy="32" r="2.5" fill="${eyeColors[variant]}"/>
            <circle cx="46" cy="32" r="2.5" fill="${eyeColors[variant]}"/>
        `;
    }

    else if (category === "mouth") {
        visual = `
            <path
                d="${variant === "Smile"
                    ? "M33 40 C37 44 43 44 47 40"
                    : "M36 41 L44 41"}"
                fill="none"
                stroke="#7D3E45"
                stroke-width="2"
                stroke-linecap="round"
            />
        `;
    }

    else if (category === "tops") {
        visual = `
            <path
                d="M23 25 C28 21 34 20 40 20 C46 20 52 21 57 25 L53 52 L27 52 Z"
                fill="${topColors[variant]}"
            />
            <path
                d="M27 25 L20 31 L18 43 L25 45"
                fill="${topColors[variant]}"
            />
            <path
                d="M53 25 L60 31 L62 43 L55 45"
                fill="${topColors[variant]}"
            />
        `;
    }

    else if (category === "bottoms") {
        visual = `
            <path
                d="M27 29 L39 29 L38 53 L27 53 Z"
                fill="${bottomColors[variant]}"
            />
            <path
                d="M41 29 L53 29 L53 53 L42 53 Z"
                fill="${bottomColors[variant]}"
            />
        `;
    }

    else if (category === "shoes") {
        visual = `
            <path
                d="M25 46 C30 44 36 45 39 48 L39 53 L23 53 C22 50 23 48 25 46Z"
                fill="${shoeColors[variant]}"
            />
            <path
                d="M41 48 C44 45 50 44 55 46 C57 48 58 50 57 53 L41 53Z"
                fill="${shoeColors[variant]}"
            />
        `;
    }

    else if (category === "accessories") {
        if (item.name === "Glasses") {
            visual = `
                <circle cx="32" cy="32" r="7" fill="none" stroke="#252A31" stroke-width="2"/>
                <circle cx="48" cy="32" r="7" fill="none" stroke="#252A31" stroke-width="2"/>
                <path d="M39 32 L41 32" stroke="#252A31" stroke-width="2"/>
            `;
        }

        else if (item.name === "Cap") {
            visual = `
                <path
                    d="M24 31 C25 18 31 13 40 13 C49 13 55 18 56 31 C46 27 34 27 24 31Z"
                    fill="${topColors[variant] || "#252A31"}"
                />
                <path
                    d="M23 29 C34 27 47 28 58 33 C49 37 34 36 24 33Z"
                    fill="${topColors[variant] || "#252A31"}"
                />
            `;
        }

        else if (item.name === "Beanie") {
            visual = `
                <path
                    d="M24 31 C25 18 31 13 40 13 C49 13 55 18 56 31 C46 28 34 28 24 31Z"
                    fill="${topColors[variant] || "#555D68"}"
                />
                <path
                    d="M23 29 C33 27 47 27 57 30 L56 36 C46 33 34 33 24 36Z"
                    fill="#252A31"
                    opacity=".6"
                />
            `;
        }

        else if (item.name === "Headphones") {
            const c =
                variant === "White"
                    ? "#E9ECEF"
                    : variant === "Blue"
                        ? "#4C76B8"
                        : variant === "Red"
                            ? "#B94D57"
                            : "#252A31";

            visual = `
                <path
                    d="M25 34 C25 17 31 11 40 11 C49 11 55 17 55 34"
                    fill="none"
                    stroke="${c}"
                    stroke-width="4"
                />
                <rect x="22" y="29" width="6" height="15" rx="3" fill="${c}"/>
                <rect x="52" y="29" width="6" height="15" rx="3" fill="${c}"/>
            `;
        }

        else {
            visual = `
                <circle cx="40" cy="34" r="15" fill="#E9EDF1"/>
                <path d="M31 34 L49 34" stroke="#AEB7C0" stroke-width="3"/>
            `;
        }
    }

    return `
        <svg
            viewBox="0 0 80 65"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <rect
                x="1"
                y="1"
                width="78"
                height="63"
                rx="12"
                fill="#F5FAFD"
            />
            ${visual}
        </svg>
    `;
}

/* ========================================
   CATEGORY MENU
======================================== */

let activeCategory = "body";

function renderTypeMenu(category) {
    activeCategory = category;

    const title = document.getElementById("category-title");
    const items = document.getElementById("items");

    title.textContent =
        category.charAt(0).toUpperCase() + category.slice(1);

    items.innerHTML = "";

    options[category].forEach((item, typeIndex) => {
        const button = document.createElement("button");

        button.className = "item-button";

        if (selected[category].type === typeIndex) {
            button.classList.add("selected");
        }

        button.innerHTML = `
            <div class="preview">
                ${miniPreview(category, typeIndex, 0)}
            </div>
            <span>${esc(item.name)}</span>
        `;

        button.addEventListener("click", () => {
            selected[category].type = typeIndex;
            selected[category].variant = 0;

            renderVariantMenu(category);
            drawAvatar();
        });

        items.appendChild(button);
    });
}

/* ========================================
   VARIANT MENU
======================================== */

function renderVariantMenu(category) {
    const title = document.getElementById("category-title");
    const items = document.getElementById("items");

    const item = current(category);

    title.textContent =
        `${category.charAt(0).toUpperCase() + category.slice(1)} → ${item.name}`;

    items.innerHTML = "";

    item.variants.forEach((variant, variantIndex) => {
        const button = document.createElement("button");

        button.className = "item-button";

        if (selected[category].variant === variantIndex) {
            button.classList.add("selected");
        }

        button.innerHTML = `
            <div class="preview">
                ${miniPreview(
                    category,
                    selected[category].type,
                    variantIndex
                )}
            </div>
            <span>${esc(variant)}</span>
        `;

        button.addEventListener("click", () => {
            selected[category].variant = variantIndex;

            renderVariantMenu(category);
            drawAvatar();
        });

        items.appendChild(button);
    });

    const backButton = document.createElement("button");

    backButton.className = "back-button";
    backButton.textContent = "← Back";

    backButton.addEventListener("click", () => {
        renderTypeMenu(category);
    });

    items.appendChild(backButton);
}

/* ========================================
   CATEGORY BUTTONS
======================================== */

document.querySelectorAll(".category-button").forEach(button => {
    button.addEventListener("click", () => {
        document
            .querySelectorAll(".category-button")
            .forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        renderTypeMenu(button.dataset.category);
    });
});

/* ========================================
   RANDOMIZE
======================================== */

document
    .getElementById("randomize-button")
    .addEventListener("click", () => {

        Object.keys(options).forEach(category => {
            selected[category].type =
                Math.floor(Math.random() * options[category].length);

            selected[category].variant =
                Math.floor(
                    Math.random() *
                    options[category][selected[category].type].variants.length
                );
        });

        renderTypeMenu(activeCategory);
        drawAvatar();
    });

/* ========================================
   SAVE AVATAR
======================================== */

document
    .getElementById("save-button")
    .addEventListener("click", () => {

        const svg = document.querySelector("#avatar svg");

        if (!svg) return;

        const nameInput = document.getElementById("avatar-name");
        const name = nameInput.value.trim() || "My Avatar";

        localStorage.setItem(
            "avatarName",
            name
        );

        localStorage.setItem(
            "avatarSettings",
            JSON.stringify(selected)
        );

        const serializer = new XMLSerializer();
        const source = serializer.serializeToString(svg);

        const blob = new Blob(
            [source],
            {
                type: "image/svg+xml;charset=utf-8"
            }
        );

        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.download = `${name.replace(/[^a-z0-9]/gi, "_")}.svg`;

        document.body.appendChild(link);
        link.click();
        link.remove();

        setTimeout(() => {
            URL.revokeObjectURL(url);
        }, 1000);
    });

/* ========================================
   LOAD SAVED DATA
======================================== */

function loadSavedAvatar() {
    const savedName = localStorage.getItem("avatarName");
    const savedSettings = localStorage.getItem("avatarSettings");

    if (savedName) {
        document.getElementById("avatar-name").value = savedName;
    }

    if (savedSettings) {
        try {
            const parsed = JSON.parse(savedSettings);

            Object.keys(selected).forEach(category => {
                if (
                    parsed[category] &&
                    typeof parsed[category].type === "number" &&
                    typeof parsed[category].variant === "number"
                ) {
                    const maxType =
                        options[category].length - 1;

                    selected[category].type =
                        Math.max(
                            0,
                            Math.min(
                                parsed[category].type,
                                maxType
                            )
                        );

                    const maxVariant =
                        options[category][selected[category].type]
                            .variants.length - 1;

                    selected[category].variant =
                        Math.max(
                            0,
                            Math.min(
                                parsed[category].variant,
                                maxVariant
                            )
                        );
                }
            });
        } catch (error) {
            console.warn("Could not load saved avatar.", error);
        }
    }
}

/* ========================================
   NAME AUTOSAVE
======================================== */

document
    .getElementById("avatar-name")
    .addEventListener("input", event => {
        localStorage.setItem(
            "avatarName",
            event.target.value
        );
    });

/* ========================================
   START
======================================== */

loadSavedAvatar();
renderTypeMenu("body");
drawAvatar();
