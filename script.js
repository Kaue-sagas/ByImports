// ============ DADOS DOS APARELHOS ============
const deviceData = {
    'iPhone 8': { storage: [64, 128, 256], basePrice: { 64: 300, 128: 350, 256: 400 } },
    'iPhone 8 Plus': { storage: [64, 128, 256], basePrice: { 64: 400, 128: 450, 256: 500 } },
    'iPhone X': { storage: [64, 256], basePrice: { 64: 500, 256: 600 } },
    'iPhone XS': { storage: [64, 256], basePrice: { 64: 550, 256: 650 } },
    'iPhone XS Max': { storage: [64, 256], basePrice: { 64: 650, 256: 750 } },
    'iPhone XR': { storage: [64, 128, 256], basePrice: { 64: 450, 128: 500, 256: 550 } },
    'iPhone 11': { storage: [64, 128, 256], basePrice: { 64: 500, 128: 550, 256: 600 } },
    'iPhone 11 Pro': { storage: [64, 256, 512], basePrice: { 64: 700, 256: 800, 512: 900 } },
    'iPhone 11 Pro Max': { storage: [64, 256, 512], basePrice: { 64: 800, 256: 900, 512: 1000 } },
    'iPhone 12': { storage: [64, 128, 256], basePrice: { 64: 600, 128: 650, 256: 700 } },
    'iPhone 12 Pro': { storage: [128, 256, 512], basePrice: { 128: 800, 256: 900, 512: 1000 } },
    'iPhone 12 Pro Max': { storage: [128, 256, 512], basePrice: { 128: 900, 256: 1000, 512: 1100 } },
    'iPhone 13': { storage: [128, 256, 512], basePrice: { 128: 650, 256: 700, 512: 800 } },
    'iPhone 13 Pro': { storage: [128, 256, 512, 1024], basePrice: { 128: 850, 256: 950, 512: 1050, 1024: 1150 } },
    'iPhone 13 Pro Max': { storage: [128, 256, 512, 1024], basePrice: { 128: 950, 256: 1050, 512: 1150, 1024: 1250 } },
    'iPhone 14': { storage: [128, 256, 512], basePrice: { 128: 700, 256: 750, 512: 850 } },
    'iPhone 14 Pro': { storage: [128, 256, 512, 1024], basePrice: { 128: 900, 256: 1000, 512: 1100, 1024: 1200 } },
    'iPhone 14 Pro Max': { storage: [128, 256, 512, 1024], basePrice: { 128: 1000, 256: 1100, 512: 1200, 1024: 1300 } },
    'iPhone 15': { storage: [128, 256, 512], basePrice: { 128: 750, 256: 800, 512: 900 } },
    'iPhone 15 Pro': { storage: [128, 256, 512, 1024], basePrice: { 128: 950, 256: 1050, 512: 1150, 1024: 1250 } },
    'iPhone 15 Pro Max': { storage: [256, 512, 1024], basePrice: { 256: 1150, 512: 1250, 1024: 1350 } },
    'iPhone 16': { storage: [128, 256, 512], basePrice: { 128: 800, 256: 850, 512: 950 } },
    'iPhone 16 Pro': { storage: [256, 512, 1024], basePrice: { 256: 1100, 512: 1200, 1024: 1300 } },
    'iPhone 16 Pro Max': { storage: [256, 512, 1024], basePrice: { 256: 1200, 512: 1300, 1024: 1400 } }
};

// ============ DEFEITOS POR APARELHO ============
const deviceDefects = {
    'iPhone 8': {
        'Tela': -400, 'Marcas de Uso': -100, 'Tampa Traseira': -80, 'Reparo da Placa': -150,
        'Dock de Carga': -120, 'Touch ID': -50, 'Vidro Frontal': -40, 'Alto Falante': -100,
        'Auricular': -30, 'Camera Frontal': -40, 'Camera Traseira': -50, 'Mancha Camera': -80,
        'Flash': -200, 'Botao Power': -250
    },
    'iPhone 8 Plus': {
        'Tela': -500, 'Marcas de Uso': -120, 'Tampa Traseira': -100, 'Reparo da Placa': -180,
        'Dock de Carga': -150, 'Touch ID': -60, 'Vidro Frontal': -50, 'Alto Falante': -120,
        'Auricular': -40, 'Camera Frontal': -50, 'Camera Traseira': -60, 'Mancha Camera': -100,
        'Flash': -250, 'Botao Power': -300
    },
    'iPhone X': {
        'Tela': -800, 'Marcas de Uso': -150, 'Tampa Traseira': -120, 'Reparo da Placa': -250,
        'Dock de Carga': -200, 'Face ID': -300, 'Vidro Frontal': -80, 'Alto Falante': -150,
        'Auricular': -60, 'Camera Frontal': -100, 'Camera Traseira': -120, 'Mancha Camera': -150,
        'Flash': -400, 'Botao Power': -400
    },
    'iPhone XS': {
        'Tela': -800, 'Marcas de Uso': -150, 'Tampa Traseira': -120, 'Reparo da Placa': -250,
        'Dock de Carga': -200, 'Face ID': -300, 'Vidro Frontal': -80, 'Alto Falante': -150,
        'Auricular': -60, 'Camera Frontal': -100, 'Camera Traseira': -120, 'Mancha Camera': -150,
        'Flash': -400, 'Botao Power': -400
    },
    'iPhone XS Max': {
        'Tela': -900, 'Marcas de Uso': -180, 'Tampa Traseira': -150, 'Reparo da Placa': -300,
        'Dock de Carga': -250, 'Face ID': -350, 'Vidro Frontal': -100, 'Alto Falante': -180,
        'Auricular': -80, 'Camera Frontal': -120, 'Camera Traseira': -150, 'Mancha Camera': -180,
        'Flash': -500, 'Botao Power': -500
    },
    'iPhone XR': {
        'Tela': -600, 'Marcas de Uso': -120, 'Tampa Traseira': -100, 'Reparo da Placa': -200,
        'Dock de Carga': -150, 'Face ID': -250, 'Vidro Frontal': -50, 'Alto Falante': -120,
        'Auricular': -40, 'Camera Frontal': -60, 'Camera Traseira': -80, 'Mancha Camera': -120,
        'Flash': -300, 'Botao Power': -350
    },
    'iPhone 11': {
        'Tela': -600, 'Marcas de Uso': -120, 'Tampa Traseira': -100, 'Reparo da Placa': -200,
        'Dock de Carga': -150, 'Face ID': -250, 'Vidro Frontal': -50, 'Alto Falante': -120,
        'Auricular': -40, 'Camera Frontal': -60, 'Camera Traseira': -80, 'Mancha Camera': -120,
        'Flash': -300, 'Botao Power': -350
    },
    'iPhone 11 Pro': {
        'Tela': -1000, 'Marcas de Uso': -180, 'Tampa Traseira': -150, 'Reparo da Placa': -300,
        'Dock de Carga': -250, 'Face ID': -350, 'Vidro Frontal': -80, 'Alto Falante': -180,
        'Auricular': -80, 'Camera Frontal': -120, 'Camera Traseira': -150, 'Mancha Camera': -180,
        'Flash': -500, 'Botao Power': -500
    },
    'iPhone 11 Pro Max': {
        'Tela': -1100, 'Marcas de Uso': -200, 'Tampa Traseira': -180, 'Reparo da Placa': -350,
        'Dock de Carga': -300, 'Face ID': -400, 'Vidro Frontal': -100, 'Alto Falante': -200,
        'Auricular': -100, 'Camera Frontal': -150, 'Camera Traseira': -180, 'Mancha Camera': -220,
        'Flash': -600, 'Botao Power': -600
    },
    'iPhone 12': {
        'Tela': -800, 'Marcas de Uso': -150, 'Tampa Traseira': -120, 'Reparo da Placa': -250,
        'Dock de Carga': -200, 'Face ID': -300, 'Vidro Frontal': -70, 'Alto Falante': -150,
        'Auricular': -60, 'Camera Frontal': -100, 'Camera Traseira': -120, 'Mancha Camera': -150,
        'Flash': -400, 'Botao Power': -450
    },
    'iPhone 12 Pro': {
        'Tela': -1200, 'Marcas de Uso': -200, 'Tampa Traseira': -180, 'Reparo da Placa': -350,
        'Dock de Carga': -300, 'Face ID': -400, 'Vidro Frontal': -100, 'Alto Falante': -200,
        'Auricular': -100, 'Camera Frontal': -150, 'Camera Traseira': -180, 'Mancha Camera': -220,
        'Flash': -600, 'Botao Power': -600
    },
    'iPhone 12 Pro Max': {
        'Tela': -1300, 'Marcas de Uso': -220, 'Tampa Traseira': -200, 'Reparo da Placa': -400,
        'Dock de Carga': -350, 'Face ID': -450, 'Vidro Frontal': -120, 'Alto Falante': -220,
        'Auricular': -120, 'Camera Frontal': -180, 'Camera Traseira': -220, 'Mancha Camera': -250,
        'Flash': -700, 'Botao Power': -700
    },
    'iPhone 13': {
        'Tela': -900, 'Marcas de Uso': -150, 'Tampa Traseira': -120, 'Reparo da Placa': -250,
        'Dock de Carga': -200, 'Face ID': -300, 'Vidro Frontal': -70, 'Alto Falante': -150,
        'Auricular': -60, 'Camera Frontal': -100, 'Camera Traseira': -130, 'Mancha Camera': -160,
        'Flash': -450, 'Botao Power': -500
    },
    'iPhone 13 Pro': {
        'Tela': -1500, 'Marcas de Uso': -250, 'Tampa Traseira': -200, 'Reparo da Placa': -400,
        'Dock de Carga': -350, 'Face ID': -450, 'Vidro Frontal': -120, 'Alto Falante': -250,
        'Auricular': -120, 'Camera Frontal': -200, 'Camera Traseira': -250, 'Mancha Camera': -300,
        'Flash': -700, 'Botao Power': -700
    },
    'iPhone 13 Pro Max': {
        'Tela': -1600, 'Marcas de Uso': -280, 'Tampa Traseira': -250, 'Reparo da Placa': -450,
        'Dock de Carga': -400, 'Face ID': -500, 'Vidro Frontal': -150, 'Alto Falante': -280,
        'Auricular': -150, 'Camera Frontal': -250, 'Camera Traseira': -300, 'Mancha Camera': -350,
        'Flash': -800, 'Botao Power': -800
    },
    'iPhone 14': {
        'Tela': -1000, 'Marcas de Uso': -150, 'Tampa Traseira': -120, 'Reparo da Placa': -250,
        'Dock de Carga': -200, 'Face ID': -300, 'Vidro Frontal': -70, 'Alto Falante': -150,
        'Auricular': -70, 'Camera Frontal': -120, 'Camera Traseira': -150, 'Mancha Camera': -180,
        'Flash': -500, 'Botao Power': -550
    },
    'iPhone 14 Pro': {
        'Tela': -1600, 'Marcas de Uso': -250, 'Tampa Traseira': -200, 'Reparo da Placa': -400,
        'Dock de Carga': -350, 'Face ID': -450, 'Vidro Frontal': -120, 'Alto Falante': -250,
        'Auricular': -130, 'Camera Frontal': -220, 'Camera Traseira': -280, 'Mancha Camera': -320,
        'Flash': -750, 'Botao Power': -750
    },
    'iPhone 14 Pro Max': {
        'Tela': -1700, 'Marcas de Uso': -280, 'Tampa Traseira': -250, 'Reparo da Placa': -450,
        'Dock de Carga': -400, 'Face ID': -500, 'Vidro Frontal': -150, 'Alto Falante': -280,
        'Auricular': -150, 'Camera Frontal': -280, 'Camera Traseira': -330, 'Mancha Camera': -380,
        'Flash': -850, 'Botao Power': -850
    },
    'iPhone 15': {
        'Tela': -1100, 'Marcas de Uso': -150, 'Tampa Traseira': -120, 'Reparo da Placa': -250,
        'Dock de Carga': -200, 'Face ID': -300, 'Vidro Frontal': -70, 'Alto Falante': -150,
        'Auricular': -80, 'Camera Frontal': -130, 'Camera Traseira': -160, 'Mancha Camera': -200,
        'Flash': -550, 'Botao Power': -600
    },
    'iPhone 15 Pro': {
        'Tela': -1700, 'Marcas de Uso': -280, 'Tampa Traseira': -250, 'Reparo da Placa': -450,
        'Dock de Carga': -400, 'Face ID': -500, 'Vidro Frontal': -150, 'Alto Falante': -280,
        'Auricular': -150, 'Camera Frontal': -280, 'Camera Traseira': -330, 'Mancha Camera': -380,
        'Flash': -850, 'Botao Power': -850
    },
    'iPhone 15 Pro Max': {
        'Tela': -1800, 'Marcas de Uso': -300, 'Tampa Traseira': -280, 'Reparo da Placa': -500,
        'Dock de Carga': -450, 'Face ID': -550, 'Vidro Frontal': -180, 'Alto Falante': -300,
        'Auricular': -180, 'Camera Frontal': -330, 'Camera Traseira': -380, 'Mancha Camera': -430,
        'Flash': -900, 'Botao Power': -900
    },
    'iPhone 16': {
        'Tela': -2000, 'Marcas de Uso': -150, 'Tampa Traseira': -120, 'Reparo da Placa': -250,
        'Dock de Carga': -200, 'Face ID': -300, 'Vidro Frontal': -70, 'Alto Falante': -150,
        'Auricular': -80, 'Camera Frontal': -150, 'Camera Traseira': -180, 'Mancha Camera': -220,
        'Flash': -600, 'Botao Power': -650
    },
    'iPhone 16 Pro': {
        'Tela': -2200, 'Marcas de Uso': -300, 'Tampa Traseira': -280, 'Reparo da Placa': -500,
        'Dock de Carga': -450, 'Face ID': -550, 'Vidro Frontal': -180, 'Alto Falante': -300,
        'Auricular': -200, 'Camera Frontal': -330, 'Camera Traseira': -380, 'Mancha Camera': -430,
        'Flash': -900, 'Botao Power': -900
    },
    'iPhone 16 Pro Max': {
        'Tela': -2300, 'Marcas de Uso': -330, 'Tampa Traseira': -300, 'Reparo da Placa': -550,
        'Dock de Carga': -500, 'Face ID': -600, 'Vidro Frontal': -200, 'Alto Falante': -330,
        'Auricular': -220, 'Camera Frontal': -380, 'Camera Traseira': -430, 'Mancha Camera': -480,
        'Flash': -1000, 'Botao Power': -1000
    }
};

// ============ LIMIARES DE BATERIA ============
const batteryThresholds = {
    'iPhone 8': { limit: 80, discount: -100 },
    'iPhone 8 Plus': { limit: 80, discount: -120 },
    'iPhone X': { limit: 85, discount: -150 },
    'iPhone XS': { limit: 85, discount: -150 },
    'iPhone XS Max': { limit: 85, discount: -180 },
    'iPhone XR': { limit: 80, discount: -120 },
    'iPhone 11': { limit: 80, discount: -120 },
    'iPhone 11 Pro': { limit: 85, discount: -180 },
    'iPhone 11 Pro Max': { limit: 85, discount: -200 },
    'iPhone 12': { limit: 85, discount: -150 },
    'iPhone 12 Pro': { limit: 85, discount: -200 },
    'iPhone 12 Pro Max': { limit: 85, discount: -220 },
    'iPhone 13': { limit: 90, discount: -250 },
    'iPhone 13 Pro': { limit: 90, discount: -300 },
    'iPhone 13 Pro Max': { limit: 90, discount: -320 },
    'iPhone 14': { limit: 85, discount: -150 },
    'iPhone 14 Pro': { limit: 90, discount: -300 },
    'iPhone 14 Pro Max': { limit: 90, discount: -320 },
    'iPhone 15': { limit: 90, discount: -150 },
    'iPhone 15 Pro': { limit: 90, discount: -320 },
    'iPhone 15 Pro Max': { limit: 90, discount: -350 },
    'iPhone 16': { limit: 90, discount: -150 },
    'iPhone 16 Pro': { limit: 90, discount: -350 },
    'iPhone 16 Pro Max': { limit: 90, discount: -380 }
};

// ============ TABELA HIPERCARD DE MULTIPLICADORES ============
const installmentMultipliers = {
    1: 1.0334849111202976,
    2: 1.0488777008600796,
    3: 1.0574177857671566,
    4: 1.0659844366272252,
    5: 1.0744600838078866,
    6: 1.0830715910321672,
    7: 1.0901558922925978,
    8: 1.0987803538072738,
    9: 1.1075423634954038,
    10: 1.1161960040183056,
    11: 1.1251125112511252,
    12: 1.1339154099104208,
    13: 1.1428571428571428,
    14: 1.1518083390923752,
    15: 1.1607661056297156,
    16: 1.169864295741694,
    17: 1.1789672247111532,
    18: 1.1880717595342758
};

// ============ APP STATE ============
let appState = {
    currentDevice: null,
    selectedStorage: null,
    selectedDefects: {},
    batteryHealth: 100,
    basePrice: 0,
    finalValue: 0,
    targetValue: 0
};

// ============ DOM ELEMENTS ============
const deviceSelect = document.getElementById('deviceSelect');
const storageCard = document.getElementById('storageCard');
const storageOptions = document.getElementById('storageOptions');
const valueCard = document.getElementById('valueCard');
const currentValueEl = document.getElementById('currentValue');
const defectsCard = document.getElementById('defectsCard');
const defectsContainer = document.getElementById('defectsContainer');
const batteryCard = document.getElementById('batteryCard');
const batteryHealthInput = document.getElementById('batteryHealth');
const batterySlider = document.getElementById('batterySlider');
const finalCard = document.getElementById('finalCard');
const finalValueEl = document.getElementById('finalValue');
const summaryContent = document.getElementById('summaryContent');
const differenceCard = document.getElementById('differenceCard');
const targetValueInput = document.getElementById('targetValue');
const differenceResult = document.getElementById('differenceResult');
const differenceAmount = document.getElementById('differenceAmount');
const installmentsCard = document.getElementById('installmentsCard');
const installmentsGrid = document.getElementById('installmentsGrid');
const customInstallmentsInput = document.getElementById('customInstallments');
const customResult = document.getElementById('customResult');
const customCount = document.getElementById('customCount');
const customValue = document.getElementById('customValue');
const customTotal = document.getElementById('customTotal');

// ============ INITIALIZE ============
function init() {
    populateDeviceSelect();
    setupEventListeners();
}

// ============ POPULATE DEVICE SELECT ============
function populateDeviceSelect() {
    const devices = Object.keys(deviceData);
    devices.forEach(device => {
        const option = document.createElement('option');
        option.value = device;
        option.textContent = device;
        deviceSelect.appendChild(option);
    });
}

// ============ EVENT LISTENERS ============
function setupEventListeners() {
    // Device selection
    deviceSelect.addEventListener('change', handleDeviceChange);
    
    // Battery inputs
    batteryHealthInput.addEventListener('input', handleBatteryInput);
    batterySlider.addEventListener('input', handleBatterySlider);
    
    // Target value for difference
    targetValueInput.addEventListener('input', handleTargetValueChange);
    
    // Custom installments
    customInstallmentsInput.addEventListener('input', handleCustomInstallments);
}

// ============ HANDLERS ============
function handleDeviceChange(e) {
    const device = e.target.value;
    
    if (!device) {
        hideAllCards();
        resetState();
        return;
    }
    
    appState.currentDevice = device;
    appState.selectedStorage = null;
    appState.selectedDefects = {};
    appState.batteryHealth = 100;
    
    populateStorage(device);
    populateDefects(device);
    
    showCard(storageCard);
    showCard(defectsCard);
    showCard(batteryCard);
    
    batteryHealthInput.value = 100;
    batterySlider.value = 100;
    
    calculateValue();
}

function handleBatteryInput(e) {
    let value = parseInt(e.target.value) || 0;
    value = Math.max(0, Math.min(100, value));
    appState.batteryHealth = value;
    batterySlider.value = value;
    calculateValue();
}

function handleBatterySlider(e) {
    const value = parseInt(e.target.value);
    appState.batteryHealth = value;
    batteryHealthInput.value = value;
    calculateValue();
}

function handleTargetValueChange(e) {
    const value = parseFloat(e.target.value) || 0;
    appState.targetValue = value;
    calculateDifference();
}

function handleCustomInstallments(e) {
    let value = parseInt(e.target.value) || 0;
    value = Math.max(1, Math.min(18, value));
    
    if (value >= 1 && value <= 18 && appState.targetValue > appState.finalValue) {
        const difference = appState.targetValue - appState.finalValue;
        const installment = calculateInstallment(difference, value);
        
        customCount.textContent = `${value}x`;
        customValue.textContent = formatCurrency(installment.parcelaValor);
        customTotal.textContent = `Total: ${formatCurrency(installment.totalFinal)}`;
        customResult.style.display = 'block';
    } else {
        customResult.style.display = 'none';
    }
}

// ============ POPULATE STORAGE ============
function populateStorage(device) {
    const deviceInfo = deviceData[device];
    storageOptions.innerHTML = '';
    
    deviceInfo.storage.forEach(storage => {
        const price = deviceInfo.basePrice[storage];
        const btn = document.createElement('button');
        btn.className = 'storage-btn';
        btn.innerHTML = `
            <span class="storage-size">${storage}GB</span>
            <span class="storage-price">${formatCurrency(price)}</span>
        `;
        btn.addEventListener('click', () => selectStorage(storage, btn));
        storageOptions.appendChild(btn);
    });
}

function selectStorage(storage, btn) {
    // Remove active class from all buttons
    document.querySelectorAll('.storage-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    appState.selectedStorage = storage;
    appState.basePrice = deviceData[appState.currentDevice].basePrice[storage];
    
    showCard(valueCard);
    calculateValue();
}

// ============ POPULATE DEFECTS ============
function populateDefects(device) {
    const defects = deviceDefects[device];
    defectsContainer.innerHTML = '';
    
    Object.entries(defects).forEach(([defectName, defectValue]) => {
        const item = document.createElement('div');
        item.className = 'defect-item';
        item.innerHTML = `
            <div class="defect-checkbox">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
            </div>
            <div class="defect-info">
                <span class="defect-name">${defectName}</span>
                <span class="defect-value">${formatCurrency(defectValue)}</span>
            </div>
        `;
        
        item.addEventListener('click', () => toggleDefect(defectName, defectValue, item));
        defectsContainer.appendChild(item);
    });
}

function toggleDefect(defectName, defectValue, item) {
    if (appState.selectedDefects[defectName] !== undefined) {
        delete appState.selectedDefects[defectName];
        item.classList.remove('selected');
    } else {
        appState.selectedDefects[defectName] = defectValue;
        item.classList.add('selected');
    }
    calculateValue();
}

// ============ CALCULATE VALUE ============
function calculateValue() {
    if (!appState.currentDevice || !appState.selectedStorage) {
        currentValueEl.textContent = formatCurrency(0);
        finalValueEl.textContent = formatCurrency(0);
        return;
    }
    
    const basePrice = appState.basePrice;
    
    // Calculate defects discount
    let defectDiscount = 0;
    Object.values(appState.selectedDefects).forEach(value => {
        defectDiscount += value;
    });
    
    // Calculate battery discount
    let batteryDiscount = 0;
    const threshold = batteryThresholds[appState.currentDevice];
    if (threshold && appState.batteryHealth < threshold.limit) {
        batteryDiscount = threshold.discount;
    }
    
    const finalPrice = Math.max(0, basePrice + defectDiscount + batteryDiscount);
    appState.finalValue = finalPrice;
    
    // Update displays
    currentValueEl.textContent = formatCurrency(basePrice);
    finalValueEl.textContent = formatCurrency(finalPrice);
    
    // Update summary
    updateSummary(basePrice, defectDiscount, batteryDiscount, finalPrice);
    
    // Show cards
    showCard(finalCard);
    showCard(differenceCard);
    
    // Recalculate difference if target value is set
    if (appState.targetValue > 0) {
        calculateDifference();
    }
}

// ============ UPDATE SUMMARY ============
function updateSummary(basePrice, defectDiscount, batteryDiscount, finalPrice) {
    const selectedDefectsList = Object.keys(appState.selectedDefects);
    
    let defectsText = 'Nenhum';
    if (selectedDefectsList.length > 0) {
        defectsText = selectedDefectsList.length > 2 
            ? `${selectedDefectsList.slice(0, 2).join(', ')} +${selectedDefectsList.length - 2}`
            : selectedDefectsList.join(', ');
    }
    
    summaryContent.innerHTML = `
        <div class="summary-row">
            <span>Valor Base</span>
            <span>${formatCurrency(basePrice)}</span>
        </div>
        <div class="summary-row discount">
            <span>Defeitos (${defectsText})</span>
            <span>${formatCurrency(defectDiscount)}</span>
        </div>
        <div class="summary-row discount">
            <span>Bateria (${appState.batteryHealth}%)</span>
            <span>${formatCurrency(batteryDiscount)}</span>
        </div>
        <div class="summary-row total">
            <span>Valor Final</span>
            <span>${formatCurrency(finalPrice)}</span>
        </div>
    `;
}

// ============ CALCULATE DIFFERENCE ============
function calculateDifference() {
    if (appState.targetValue <= 0) {
        differenceResult.style.display = 'none';
        installmentsCard.style.display = 'none';
        return;
    }
    
    const difference = appState.targetValue - appState.finalValue;
    
    differenceAmount.textContent = formatCurrency(Math.max(0, difference));
    differenceResult.style.display = 'block';
    
    if (difference > 0) {
        calculateAndShowInstallments(difference);
        showCard(installmentsCard);
    } else {
        installmentsCard.style.display = 'none';
    }
}

// ============ CALCULATE INSTALLMENT ============
function calculateInstallment(value, parcelas) {
    const multiplier = installmentMultipliers[parcelas];
    const totalComJuros = value * multiplier;
    const parcelaCalculada = totalComJuros / parcelas;
    
    // Arredondar para cima para inteiro
    const parcelaValor = Math.ceil(parcelaCalculada);
    
    // Recalcular total final
    const totalFinal = parcelaValor * parcelas;
    
    return {
        parcelas,
        parcelaValor,
        totalFinal,
        multiplier
    };
}

// ============ CALCULATE AND SHOW INSTALLMENTS ============
function calculateAndShowInstallments(difference) {
    const fixedInstallments = [10, 12, 18];
    installmentsGrid.innerHTML = '';
    
    fixedInstallments.forEach(parcelas => {
        const result = calculateInstallment(difference, parcelas);
        
        const card = document.createElement('div');
        card.className = 'installment-card';
        card.innerHTML = `
            <div class="installment-detail">
                <span class="installment-count">${result.parcelas}x</span>
                <span class="installment-value">${formatCurrency(result.parcelaValor)}</span>
            </div>
            <span class="installment-total">Total: ${formatCurrency(result.totalFinal)}</span>
        `;
        installmentsGrid.appendChild(card);
    });
    
    // Reset custom installment
    customInstallmentsInput.value = '';
    customResult.style.display = 'none';
}

// ============ UTILITY FUNCTIONS ============
function formatCurrency(value) {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function showCard(card) {
    card.style.display = 'block';
    card.classList.add('show');
}

function hideAllCards() {
    [storageCard, valueCard, defectsCard, batteryCard, finalCard, differenceCard, installmentsCard].forEach(card => {
        card.style.display = 'none';
        card.classList.remove('show');
    });
}

function resetState() {
    appState = {
        currentDevice: null,
        selectedStorage: null,
        selectedDefects: {},
        batteryHealth: 100,
        basePrice: 0,
        finalValue: 0,
        targetValue: 0
    };
    
    storageOptions.innerHTML = '';
    defectsContainer.innerHTML = '';
    batteryHealthInput.value = 100;
    batterySlider.value = 100;
    targetValueInput.value = '';
    customInstallmentsInput.value = '';
    differenceResult.style.display = 'none';
    customResult.style.display = 'none';
}

// ============ INITIALIZE ON DOM READY ============
document.addEventListener('DOMContentLoaded', init);
