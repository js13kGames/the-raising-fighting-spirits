const gameW = window.innerWidth;
const gameH = window.innerHeight;

let pixelSize;

let gameWdAsPixels;
let gameHgAsPixels;

const calcPixelSize = () => {
    let hgPixelSize = Math.round((gameH - 270) * ((3 - 1) / (1100 - 270)) + 1);
    let wdPixelSize = Math.round((gameW - 480) * ((3 - 1) / (1000 - 480)) + 1);

    GameVars.pixelSize = hgPixelSize < wdPixelSize ? hgPixelSize : wdPixelSize;
    GameVars.gameWdAsPixels = GameVars.gameW / GameVars.pixelSize;
    GameVars.gameHgAsPixels = GameVars.gameH / GameVars.pixelSize;
};

const reaperW = 200;
const reaperH = 300;

const soulW = 200;
const soulH = 200;

const cardW = 53;
const cardH = 85;

let cardContX;
let cardContY;
let cardContW;
let cardContH;

const statsBarH = 18;

let reaper;

let soulsConts;
let souls;
let soulsInGame;

let prevSoul;
let soulInUse;
let nextSoul;

let playerCards;

let maxPlayCards;
let cardsPlayed;
let drawCardNumb;

let isPlayerTurn;
let turnCount;
let reaperNextEventTurn;
let soulNextEventTurn;

let soulLife;
let soulLifeBuff;

let cardDmg;
let cardDmgBuff;
let cardShield;
let cardShieldBuff;

let isGameOver;
let isEventRunning;
let isEventFinished;

const resetGameVars = () => {
    GameVars.cardContX = 0;
    GameVars.cardContY = 0;
    GameVars.cardContW = 0;
    GameVars.cardContH = cardH + 4;

    GameVars.reaper = null;

    GameVars.soulsConts = [];
    GameVars.souls = [];
    GameVars.soulsInGame = 0;

    GameVars.prevSoul = null;
    GameVars.soulInUse = null;
    GameVars.nextSoul = null;

    GameVars.playerCards = [];

    GameVars.maxPlayCards = 2;
    GameVars.cardsPlayed = 0;
    GameVars.drawCardNumb = 5;

    GameVars.isPlayerTurn = true;
    GameVars.turnCount = 0;
    GameVars.reaperNextEventTurn = 6;
    GameVars.soulNextEventTurn = 3;

    GameVars.soulLife = 10;
    GameVars.soulLifeBuff = 5;

    GameVars.cardDmg = 2;
    GameVars.cardDmgBuff = 4;
    GameVars.cardShield = 2;
    GameVars.cardShieldBuff = 4;

    GameVars.isGameOver = false;
    GameVars.isEventRunning = false;
    GameVars.isEventFinished = false;
}

export const GameVars = {
    gameW,
    gameH,

    pixelSize,
    gameWdAsPixels,
    gameHgAsPixels,
    calcPixelSize,

    reaperW,
    reaperH,

    soulW,
    soulH,

    cardW,
    cardH,

    cardContX,
    cardContY,
    cardContW,
    cardContH,

    reaper,

    soulsConts,
    souls,
    soulsInGame,

    prevSoul,
    soulInUse,
    nextSoul,

    playerCards,

    maxPlayCards,
    cardsPlayed,
    drawCardNumb,

    statsBarH,

    isPlayerTurn,
    turnCount,
    reaperNextEventTurn,
    soulNextEventTurn,

    soulLife,
    soulLifeBuff,

    cardDmg,
    cardDmgBuff,
    cardShield,
    cardShieldBuff,

    isGameOver,
    isEventRunning,
    isEventFinished,

    resetGameVars
}