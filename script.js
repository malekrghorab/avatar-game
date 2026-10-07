// ========================================
// AVATAR GAME
// ========================================

// ---------- CURRENT SELECTION ----------

const selected = {
    body: 0,
    face: 0,
    hair: 0,
    eyes: 0,
    mouth: 0,
    tops: 0,
    bottoms: 0,
    shoes: 0,
    accessories: 0
};


// ---------- AVATAR OPTIONS ----------

const options = {

    body: [
        { name: "Classic", skin: "#F2C6A0" },
        { name: "Warm", skin: "#DFA77D" },
        { name: "Deep", skin: "#A96F4F" },
        { name: "Light", skin: "#FFD9B8" }
    ],

    face: [
        { name: "Round", shape: "round" },
        { name: "Soft", shape: "soft" },
        { name: "Wide", shape: "wide" }
    ],

    hair: [
        { name: "Messy", color: "#2C211C", style: "messy" },
        { name: "Short", color: "#4A2F20", style: "short" },
        { name: "Fluffy", color: "#171717", style: "fluffy" },
        { name: "Blonde", color: "#D6A84F", style: "short" }
    ],

    eyes: [
        { name: "Normal", style: "normal" },
        { name: "Happy", style: "happy" },
        { name: "Sleepy", style: "sleepy" },
        { name: "Big", style: "big" }
    ],

    mouth: [
        { name: "Smile", style: "smile" },
        { name: "Small", style: "small" },
        { name: "Open", style: "open" },
        { name: "Neutral", style: "neutral" }
    ],

    tops: [
        { name: "Blue Hoodie", color: "#5278D9", style: "hoodie" },
        { name: "Green Shirt", color: "#65A86B", style: "shirt" },
        { name: "Red Sweater", color: "#D95B5B", style: "sweater" },
        { name: "Purple Hoodie", color: "#8B63C7", style: "hoodie" }
    ],

    bottoms: [
        { name: "Blue Jeans", color: "#4269A8", style: "pants" },
        { name: "Black Pants", color: "#30333A", style: "pants" },
        { name: "Brown Shorts", color: "#9A7049", style: "shorts" }
    ],

    shoes: [
        { name: "Sneakers", color: "#F4F4F4", accent: "#68748A" },
        { name: "Black Shoes", color: "#292929", accent: "#555555" },
        { name: "Blue Shoes", color: "#4E72D4", accent: "#DCE5FF" }
    ],

    accessories: [
        { name: "None", style: "none" },
        { name: "Glasses", style: "glasses" },
        { name: "Cap", style: "cap" },
        { name: "Headphones", style: "headphones" }
    ]
};


// ---------- DOM ELEMENTS ----------

const avatar = document.getElementById("avatar");
const itemsContainer = document.getElementById("items");
const categoryTitle = document.getElementById("category-title");
const categoryButtons = document.querySelectorAll(".category-button");

const nameInput = document.getElementById("avatar-name");
const randomizeButton = document.getElementById("randomize-button");
const saveButton = document.getElementById("save-button");

let currentCategory = "body";


// ---------- SVG HELPERS ----------

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


// ---------- DRAW AVATAR ----------

function drawAvatar() {

    const body = options.body[selected.body];
    const face = options.face[selected.face];
    const hair = options.hair[selected.hair];
    const eyes = options.eyes[selected.eyes];
    const mouth = options.mouth[selected.mouth];
    const top = options.tops[selected.tops];
    const bottom = options.bottoms[selected.bottoms];
    const shoes = options.shoes[selected.shoes];
    const accessory = options.accessories[selected.accessories];

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
                fill="${body.skin}"
            />

            <rect
                x="216"
                y="430"
                width="42"
                height="82"
                rx="20"
                fill="${body.skin}"
            />
        </g>

        <!-- SHOES -->
        ${drawShoes(shoes)}

        <!-- BOTTOMS -->
        ${drawBottoms(bottom, body.skin)}

        <!-- TORSO / TOP -->
        ${drawTop(top)}

        <!-- ARMS -->
        <g>
            <rect
                x="96"
                y="315"
                width="48"
                height="135"
                rx="24"
                fill="${body.skin}"
                transform="rotate(8 120 315)"
            />

            <rect
                x="256"
                y="315"
                width="48"
                height="135"
                rx="24"
                fill="${body.skin}"
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
            fill="${body.skin}"
        />

        <!-- FACE -->
        ${drawFace(face, body.skin)}

        <!-- EYES -->
        ${drawEyes(eyes)}

        <!-- MOUTH -->
        ${drawMouth(mouth)}

        <!-- FRONT HAIR -->
        ${drawFrontHair(hair)}

        <!-- ACCESSORY -->
        ${drawAccessory(accessory)}

    `);

    avatar.querySelector("svg").style.width = "100%";
    avatar.querySelector("svg").style.height = "100%";
}


// ---------- FACE ----------

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


// ---------- HAIR ----------

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


// ---------- EYES ----------

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
        <ellipse cx="170" cy="225" rx="12" ry="17" fill="#302B2A"/>
        <ellipse cx="230" cy="225" rx="12" ry="17" fill="#302B2A"/>

        <circle cx="166" cy="220" r="4" fill="white"/>
        <circle cx="226" cy="220" r="4" fill="white"/>
    `;
}


// ---------- MOUTH ----------

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


// ---------- TOPS ----------

function drawTop(top) {

    if (top.style === "hoodie") {
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
        `;
    }

    if (top.style === "sweater") {
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


// ---------- BOTTOMS ----------

function drawBottoms(bottom, skin) {

    if (bottom.style === "shorts") {
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


// ---------- SHOES ----------

function drawShoes(shoes) {

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


// ---------- ACCESSORIES ----------

function drawAccessory(accessory) {

    if (accessory.style === "glasses") {
        return `
            <g
                fill="rgba(255,255,255,0.25)"
                stroke="#343434"
                stroke-width="5"
            >
                <circle cx="170" cy="225" r="27"/>
                <circle cx="230" cy="225" r="27"/>
                <line x1="197" y1="225" x2="203" y2="225"/>
            </g>
        `;
    }

    if (accessory.style === "cap") {
        return `
            <path
                d="
                    M130 170
                    Q140 105 200 105
                    Q260 105 270 170
                    Q235 150 200 155
                    Q165 150 130 170 Z
                "
                fill="#4C6FD1"
                stroke="#343434"
                stroke-width="5"
            />

            <path
                d="
                    M200 155
                    Q250 150 285 170
                    Q245 185 200 170 Z
                "
                fill="#405DB2"
                stroke="#343434"
                stroke-width="5"
            />
        `;
    }

    if (accessory.style === "headphones") {
        return `
            <path
                d="
                    M125 220
                    Q125 115 200 115
                    Q275 115 275 220
                "
                fill="none"
                stroke="#444444"
                stroke-width="14"
                stroke-linecap="round"
            />

            <rect x="112" y="205" width="28" height="55" rx="12" fill="#444444"/>
            <rect x="260" y="205" width="28" height="55" rx="12" fill="#444444"/>
        `;
    }

    return "";
}


// ---------- ITEM GRID ----------

function renderItems(category) {

    currentCategory = category;

    const categoryData = options[category];

    categoryTitle.textContent =
        category.charAt(0).toUpperCase() + category.slice(1);

    itemsContainer.innerHTML = "";

    categoryData.forEach((item, index) => {

        const button = document.createElement("button");

        button.className = "item-button";

        if (selected[category] === index) {
            button.classList.add("selected");
        }

        button.innerHTML = `
            <div class="item-preview">
                ${getItemPreview(category, item)}
            </div>

            <span>${item.name}</span>
        `;

        button.addEventListener("click", () => {

            selected[category] = index;

            drawAvatar();
            renderItems(category);
        });

        itemsContainer.appendChild(button);
    });
}


// ---------- ITEM PREVIEWS ----------

function getItemPreview(category, item) {

    if (category === "body") {
        return `
            <span
                style="
                    width:28px;
                    height:28px;
                    display:block;
                    border-radius:50%;
                    background:${item.skin};
                    border:2px solid #777;
                "
            ></span>
        `;
    }

    if (category === "hair") {
        return `
            <span
                style="
                    width:30px;
                    height:22px;
                    display:block;
                    border-radius:50% 50% 35% 35%;
                    background:${item.color};
                "
            ></span>
        `;
    }

    if (category === "tops") {
        return `
            <span
                style="
                    width:30px;
                    height:28px;
                    display:block;
                    border-radius:8px;
                    background:${item.color};
                "
            ></span>
        `;
    }

    if (category === "bottoms") {
        return `
            <span
                style="
                    width:28px;
                    height:28px;
                    display:block;
                    border-radius:5px;
                    background:${item.color};
                "
            ></span>
        `;
    }

    if (category === "shoes") {
        return `
            <span
                style="
                    width:32px;
                    height:16px;
                    display:block;
                    border-radius:8px;
                    background:${item.color};
                    border:2px solid #555;
                "
            ></span>
        `;
    }

    if (category === "accessories") {

        if (item.style === "glasses") {
            return "👓";
        }

        if (item.style === "cap") {
            return "🧢";
        }

        if (item.style === "headphones") {
            return "🎧";
        }

        return "—";
    }

    if (category === "eyes") {
        return "👁";
    }

    if (category === "mouth") {
        return "☺";
    }

    if (category === "face") {
        return "●";
    }

    return "?";
}


// ---------- CATEGORY BUTTONS ----------

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        categoryButtons.forEach(otherButton => {
            otherButton.classList.remove("active");
        });

        button.classList.add("active");

        renderItems(button.dataset.category);
    });
});


// ---------- RANDOMIZE ----------

randomizeButton.addEventListener("click", () => {

    Object.keys(options).forEach(category => {

        selected[category] =
            Math.floor(Math.random() * options[category].length);
    });

    drawAvatar();
    renderItems(currentCategory);
});


// ---------- SAVE AVATAR ----------

saveButton.addEventListener("click", () => {

    const svg = avatar.querySelector("svg");

    if (!svg) {
        return;
    }

    const serializer = new XMLSerializer();

    const svgString = serializer.serializeToString(svg);

    const blob = new Blob(
        [svgString],
        { type: "image/svg+xml;charset=utf-8" }
    );

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    const avatarName =
        nameInput.value.trim() || "my-avatar";

    link.href = url;
    link.download = `${avatarName}.svg`;

    link.click();

    URL.revokeObjectURL(url);
});


// ---------- NAME MEMORY ----------

nameInput.value =
    localStorage.getItem("avatarName") || "";

nameInput.addEventListener("input", () => {

    localStorage.setItem(
        "avatarName",
        nameInput.value
    );
});


// ---------- START ----------

drawAvatar();
renderItems("body");
