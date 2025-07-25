// @modifiedBy: QueenofSpain

console.log("✅ QueenofSpain Tanki script loaded.");

// ------------------ ESP BOX ------------------
function createESPBox(player) {
    const box = document.createElement("div");
    box.className = "esp-box";
    Object.assign(box.style, {
        position: "absolute",
        border: "1px solid red",
        pointerEvents: "none",
        zIndex: "999999",
    });
    document.body.appendChild(box);
    return box;
}

// ------------------ AIMBOT ------------------
function aimbotLogic(players, myTank) {
    const target = players.find(p => p.isEnemy && p.visible);
    if (target) {
        console.log("🔫 Aiming at:", target.name);
        // Example logic: rotate my turret toward target.position
    }
}

// ------------------ MENU ------------------
function createMenu() {
    const menu = document.createElement("div");
    menu.innerHTML = "<b>QueenofSpain Menu</b><br>Press 8 to toggle ESP / Aimbot";
    Object.assign(menu.style, {
        position: "fixed",
        top: "20px",
        right: "20px",
        padding: "10px",
        background: "#111",
        color: "#0f0",
        fontSize: "14px",
        zIndex: "999999"
    });
    document.body.appendChild(menu);
}

// ------------------ TOGGLE ------------------
let cheatsEnabled = false;
document.addEventListener("keydown", (e) => {
    if (e.key === "8") {
        cheatsEnabled = !cheatsEnabled;
        console.log(cheatsEnabled ? "✅ Cheats ON" : "❌ Cheats OFF");

        if (cheatsEnabled) {
            createMenu();
            // simulate loop
            setInterval(() => {
                const dummyPlayers = [{ name: "Enemy", isEnemy: true, visible: true }];
                const dummyMe = {};
                aimbotLogic(dummyPlayers, dummyMe);
            }, 2000);
        }
    }
});
