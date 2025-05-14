// 主要功能實現

// 隨機抽取塔羅牌
function getRandomCard(excludeCards = []) {
    let availableCards = tarotCards.filter(card => !excludeCards.includes(card.id));
    const randomIndex = Math.floor(Math.random() * availableCards.length);
    return availableCards[randomIndex];
}

// 翻轉卡片動畫
function flipCard(cardElement) {
    cardElement.classList.add('flipped');
}

// 今日指引功能
function drawDailyCard() {
    const card = getRandomCard();
    const cardElement = document.getElementById('daily-card');
    const cardBack = cardElement.querySelector('.card-back');
    const cardTitle = document.getElementById('card-title');
    const cardDescription = document.getElementById('card-description');
    
    // 設置卡片背面圖片
    cardBack.innerHTML = `<img src="images/cards/${card.image}" alt="${card.name}">`;
    
    // 翻轉卡片
    flipCard(cardElement);
    
    // 顯示卡片含義
    cardTitle.textContent = card.name;
    cardDescription.textContent = card.meaning;
}

// 單牌占卜功能
function drawSingleCard() {
    const card = getRandomCard();
    const cardElement = document.getElementById('single-card');
    const cardBack = cardElement.querySelector('.card-back');
    const cardTitle = document.getElementById('card-title');
    const cardDescription = document.getElementById('card-description');
    
    // 重置卡片狀態
    cardElement.classList.remove('flipped');
    
    // 設置卡片背面圖片
    cardBack.innerHTML = `<img src="images/cards/${card.image}" alt="${card.name}">`;
    
    // 延遲翻轉卡片，製造抽牌效果
    setTimeout(() => {
        flipCard(cardElement);
        
        // 顯示卡片含義
        cardTitle.textContent = card.name;
        cardDescription.textContent = card.meaning;
    }, 500);
}