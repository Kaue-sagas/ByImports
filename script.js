// ============ DADOS DOS APARELHOS ============
const deviceData = {
    'iPhone 8G': { storage: [64, 128, 256], basePrice: { 64: 300, 128: 350, 256: 400 }, hasBasePrice: true },
    'iPhone 8 Plus': { storage: [64, 128, 256], basePrice: { 64: 400, 128: 450, 256: 500 }, hasBasePrice: true },
    'iPhone X': { storage: [64, 256], basePrice: { 64: 500, 256: 600 }, hasBasePrice: true },
    'iPhone XS': { storage: [64, 256], basePrice: { 64: 550, 256: 650, 512: 750 }, hasBasePrice: true },
    'iPhone XS Max': { storage: [64, 256], basePrice: { 64: 650, 128: 750, 512: 850 }, hasBasePrice: true },
    'iPhone XR': { storage: [64, 128, 256], basePrice: { 64: 450, 128: 500, 256: 550 }, hasBasePrice: true },
    'iPhone 11': { storage: [64, 128, 256], basePrice: { 64: 500, 128: 550, 256: 600 }, hasBasePrice: true },
    'iPhone 11 Pro': { storage: [64, 256, 512], basePrice: { 64: 700, 256: 800, 512: 900 }, hasBasePrice: true },
    'iPhone 11 Pro Max': { storage: [64, 256, 512], basePrice: { 64: 800, 128: 900, 512: 1000 }, hasBasePrice: true },
    'iPhone 12': { storage: [64, 128, 256], basePrice: { 64: 600, 128: 650, 256: 700 }, hasBasePrice: true },
    'iPhone 12 Pro': { storage: [128, 256, 512], basePrice: { 128: 800, 256: 900, 512: 1000 }, hasBasePrice: true },
    'iPhone 12 Pro Max': { storage: [128, 256, 512], basePrice: { 128: 900, 256: 1000, 512: 1100 }, hasBasePrice: true },
    'iPhone 13': { storage: [128, 256, 512], basePrice: { 128: 650, 256: 700, 512: 800 }, hasBasePrice: true },
    'iPhone 13 Pro': { storage: [128, 256, 512, 1024], basePrice: { 128: 850, 256: 950, 512: 1050, 1024: 1150 }, hasBasePrice: true },
    'iPhone 13 Pro Max': { storage: [128, 256, 512, 1024], basePrice: { 128: 950, 256: 1050, 512: 1150, 1024: 1250 }, hasBasePrice: true },
    'iPhone 14': { storage: [128, 256, 512], basePrice: { 128: 700, 256: 750, 512: 850 }, hasBasePrice: true },
    'iPhone 14 Pro': { storage: [128, 256, 512, 1024], basePrice: { 128: 900, 256: 1000, 512: 1100, 1024: 1200 }, hasBasePrice: true },
    'iPhone 14 Pro Max': { storage: [128, 256, 512, 1024], basePrice: { 128: 1000, 256: 1100, 512: 1200, 1024: 1300 }, hasBasePrice: true },
    'iPhone 15': { storage: [128, 256, 512], basePrice: { 128: 750, 256: 800, 512: 900 }, hasBasePrice: true },
    'iPhone 15 Pro': { storage: [128, 256, 512, 1024], basePrice: { 128: 950, 256: 1050, 512: 1150, 1024: 1250 }, hasBasePrice: true },
    'iPhone 15 Pro Max': { storage: [128, 256, 512, 1024], basePrice: { 128: 1050, 256: 1150, 512: 1250, 1024: 1350 }, hasBasePrice: true },
    'iPhone 16': { storage: [128, 256, 512], basePrice: { 128: 800, 256: 850, 512: 950 }, hasBasePrice: true },
    'iPhone 16 Pro': { storage: [256, 512, 1024], basePrice: { 256: 1100, 512: 1200, 1024: 1300 }, hasBasePrice: true },
    'iPhone 16 Pro Max': { storage: [256, 512, 1024], basePrice: { 256: 1200, 512: 1300, 1024: 1400 }, hasBasePrice: true }
};

// ============ DEFEITOS POR APARELHO ============
const defaultDeviceDefects = {
    'iPhone 8G': {
        'Tela': -400,
        'Marcas de Uso': -100,
        'Tampa Traseira': -80,
        'Reparo da Placa': -150,
        'Dock de Carga': -120,
        'FaceID': -50,
        'Vidro Frontal': -40,
        'Auto Falante': -100,
        'Auricular': -30,
        'Camera Frontal': -40,
        'Camera Traseira': -50,
        'Mancha camera': -80,
        'Flash': -200,
        'Botao Power': -250
    },
    'iPhone 8 Plus': {
        'Tela': -500,
        'Marcas de Uso': -120,
        'Tampa Traseira': -100,
        'Reparo da Placa': -180,
        'Dock de Carga': -150,
        'FaceID': -60,
        'Vidro Frontal': -50,
        'Auto Falante': -120,
        'Auricular': -40,
        'Camera Frontal': -50,
        'Camera Traseira': -60,
        'Mancha camera': -100,
        'Flash': -250,
        'Botao Power': -300
    },
    'iPhone X': {
        'Tela': -800,
        'Marcas de Uso': -150,
        'Tampa Traseira': -120,
        'Reparo da Placa': -250,
        'Dock de Carga': -200,
        'FaceID': -300,
        'Vidro Frontal': -80,
        'Auto Falante': -150,
        'Auricular': -60,
        'Camera Frontal': -100,
        'Camera Traseira': -120,
        'Mancha camera': -150,
        'Flash': -400,
        'Botao Power': -400
    },
    'iPhone XS': {
        'Tela': -800,
        'Marcas de Uso': -150,
        'Tampa Traseira': -120,
        'Reparo da Placa': -250,
        'Dock de Carga': -200,
        'FaceID': -300,
        'Vidro Frontal': -80,
        'Auto Falante': -150,
        'Auricular': -60,
        'Camera Frontal': -100,
        'Camera Traseira': -120,
        'Mancha camera': -150,
        'Flash': -400,
        'Botao Power': -400
    },
    'iPhone XS Max': {
        'Tela': -900,
        'Marcas de Uso': -180,
        'Tampa Traseira': -150,
        'Reparo da Placa': -300,
        'Dock de Carga': -250,
        'FaceID': -350,
        'Vidro Frontal': -100,
        'Auto Falante': -180,
        'Auricular': -80,
        'Camera Frontal': -120,
        'Camera Traseira': -150,
        'Mancha camera': -180,
        'Flash': -500,
        'Botao Power': -500
    },
    'iPhone XR': {
        'Tela': -600,
        'Marcas de Uso': -120,
        'Tampa Traseira': -100,
        'Reparo da Placa': -200,
        'Dock de Carga': -150,
        'FaceID': -60,
        'Vidro Frontal': -50,
        'Auto Falante': -120,
        'Auricular': -40,
        'Camera Frontal': -60,
        'Camera Traseira': -80,
        'Mancha camera': -120,
        'Flash': -300,
        'Botao Power': -350
    },
    'iPhone 11': {
        'Tela': -600,
        'Marcas de Uso': -120,
        'Tampa Traseira': -100,
        'Reparo da Placa': -200,
        'Dock de Carga': -150,
        'FaceID': -60,
        'Vidro Frontal': -50,
        'Auto Falante': -120, 'Auricular': -40, 'Camera Frontal': -60, 'Camera Traseira': -80, 'Mancha camera': -120, 'Flash': -300, 'Botao Power': -350
    },
    'iPhone 11 Pro': { 'Tela': -1000, 'Marcas de Uso': -180, 'Tampa Traseira': -150, 'Reparo da Placa': -300, 'Dock de Carga': -250, 'FaceID': -200, 'Vidro Frontal': -80, 'Auto Falante': -180, 'Auricular': -80, 'Camera Frontal': -120, 'Camera Traseira': -150, 'Mancha camera': -180, 'Flash': -500, 'Botao Power': -500 },
    'iPhone 11 Pro Max': { 'Tela': -1100, 'Marcas de Uso': -200, 'Tampa Traseira': -180, 'Reparo da Placa': -350, 'Dock de Carga': -300, 'FaceID': -250, 'Vidro Frontal': -100, 'Auto Falante': -200, 'Auricular': -100, 'Camera Frontal': -150, 'Camera Traseira': -180, 'Mancha camera': -220, 'Flash': -600, 'Botao Power': -600 },
    'iPhone 12': { 'Tela': -800, 'Marcas de Uso': -150, 'Tampa Traseira': -120, 'Reparo da Placa': -250, 'Dock de Carga': -200, 'FaceID': -150, 'Vidro Frontal': -70, 'Auto Falante': -150, 'Auricular': -60, 'Camera Frontal': -100, 'Camera Traseira': -120, 'Mancha camera': -150, 'Flash': -400, 'Botao Power': -450 },
    'iPhone 12 Pro': { 'Tela': -1200, 'Marcas de Uso': -200, 'Tampa Traseira': -180, 'Reparo da Placa': -350, 'Dock de Carga': -300, 'FaceID': -250, 'Vidro Frontal': -100, 'Auto Falante': -200, 'Auricular': -100, 'Camera Frontal': -150, 'Camera Traseira': -180, 'Mancha camera': -220, 'Flash': -600, 'Botao Power': -600 },
    'iPhone 12 Pro Max': { 'Tela': -1300, 'Marcas de Uso': -220, 'Tampa Traseira': -200, 'Reparo da Placa': -400, 'Dock de Carga': -350, 'FaceID': -300, 'Vidro Frontal': -120, 'Auto Falante': -220, 'Auricular': -120, 'Camera Frontal': -180, 'Camera Traseira': -220, 'Mancha camera': -250, 'Flash': -700, 'Botao Power': -700 },
    'iPhone 13': { 'Tela': -900, 'Marcas de Uso': -150, 'Tampa Traseira': -120, 'Reparo da Placa': -250, 'Dock de Carga': -200, 'FaceID': -150, 'Vidro Frontal': -70, 'Auto Falante': -150, 'Auricular': -60, 'Camera Frontal': -100, 'Camera Traseira': -130, 'Mancha camera': -160, 'Flash': -450, 'Botao Power': -500 },
    'iPhone 13 Pro': { 'Tela': -1500, 'Marcas de Uso': -250, 'Tampa Traseira': -200, 'Reparo da Placa': -400, 'Dock de Carga': -350, 'FaceID': -300, 'Vidro Frontal': -120, 'Auto Falante': -250, 'Auricular': -120, 'Camera Frontal': -200, 'Camera Traseira': -250, 'Mancha camera': -300, 'Flash': -700, 'Botao Power': -700 },
    'iPhone 13 Pro Max': { 'Tela': -1600, 'Marcas de Uso': -280, 'Tampa Traseira': -250, 'Reparo da Placa': -450, 'Dock de Carga': -400, 'FaceID': -350, 'Vidro Frontal': -150, 'Auto Falante': -280, 'Auricular': -150, 'Camera Frontal': -250, 'Camera Traseira': -300, 'Mancha camera': -350, 'Flash': -800, 'Botao Power': -800 },
    'iPhone 14': { 'Tela': -1000, 'Marcas de Uso': -150, 'Tampa Traseira': -120, 'Reparo da Placa': -250, 'Dock de Carga': -200, 'FaceID': -150, 'Vidro Frontal': -70, 'Auto Falante': -150, 'Auricular': -70, 'Camera Frontal': -120, 'Camera Traseira': -150, 'Mancha camera': -180, 'Flash': -500, 'Botao Power': -550 },
    'iPhone 14 Pro': { 'Tela': -1600, 'Marcas de Uso': -250, 'Tampa Traseira': -200, 'Reparo da Placa': -400, 'Dock de Carga': -350, 'FaceID': -300, 'Vidro Frontal': -120, 'Auto Falante': -250, 'Auricular': -130, 'Camera Frontal': -220, 'Camera Traseira': -280, 'Mancha camera': -320, 'Flash': -750, 'Botao Power': -750 },
    'iPhone 14 Pro Max': { 'Tela': -1700, 'Marcas de Uso': -280, 'Tampa Traseira': -250, 'Reparo da Placa': -450, 'Dock de Carga': -400, 'FaceID': -350, 'Vidro Frontal': -150, 'Auto Falante': -280, 'Auricular': -150, 'Camera Frontal': -280, 'Camera Traseira': -330, 'Mancha camera': -380, 'Flash': -850, 'Botao Power': -850 },
    'iPhone 15': { 'Tela': -1100, 'Marcas de Uso': -150, 'Tampa Traseira': -120, 'Reparo da Placa': -250, 'Dock de Carga': -200, 'FaceID': -150, 'Vidro Frontal': -70, 'Auto Falante': -150, 'Auricular': -80, 'Camera Frontal': -130, 'Camera Traseira': -160, 'Mancha camera': -200, 'Flash': -550, 'Botao Power': -600 },
    'iPhone 15 Pro': { 'Tela': -1700, 'Marcas de Uso': -280, 'Tampa Traseira': -250, 'Reparo da Placa': -450, 'Dock de Carga': -400, 'FaceID': -350, 'Vidro Frontal': -150, 'Auto Falante': -280, 'Auricular': -150, 'Camera Frontal': -280, 'Camera Traseira': -330, 'Mancha camera': -380, 'Flash': -850, 'Botao Power': -850 },
    'iPhone 15 Pro Max': { 'Tela': -1800, 'Marcas de Uso': -300, 'Tampa Traseira': -280, 'Reparo da Placa': -500, 'Dock de Carga': -450, 'FaceID': -400, 'Vidro Frontal': -180, 'Auto Falante': -300, 'Auricular': -180, 'Camera Frontal': -330, 'Camera Traseira': -380, 'Mancha camera': -430, 'Flash': -900, 'Botao Power': -900 },
    'iPhone 16': { 'Tela': -2000, 'Marcas de Uso': -150, 'Tampa Traseira': -120, 'Reparo da Placa': -250, 'Dock de Carga': -200, 'FaceID': -150, 'Vidro Frontal': -70, 'Auto Falante': -150, 'Auricular': -80, 'Camera Frontal': -150, 'Camera Traseira': -180, 'Mancha camera': -220, 'Flash': -600, 'Botao Power': -650 },
    'iPhone 16 Pro': { 'Tela': -2200, 'Marcas de Uso': -300, 'Tampa Traseira': -280, 'Reparo da Placa': -500, 'Dock de Carga': -450, 'FaceID': -400, 'Vidro Frontal': -180, 'Auto Falante': -300, 'Auricular': -200, 'Camera Frontal': -330, 'Camera Traseira': -380, 'Mancha camera': -430, 'Flash': -900, 'Botao Power': -900 },
    'iPhone 16 Pro Max': { 'Tela': -2300, 'Marcas de Uso': -330, 'Tampa Traseira': -300, 'Reparo da Placa': -550, 'Dock de Carga': -500, 'FaceID': -450, 'Vidro Frontal': -200, 'Auto Falante': -330, 'Auricular': -220, 'Camera Frontal': -380, 'Camera Traseira': -430, 'Mancha camera': -480, 'Flash': -1000, 'Botao Power': -1000 }
};

// ============ LIMIARES DE BATERIA ============
const defaultBatteryThresholds = {
    'iPhone 8G': { limit: 80, discount: -100 },
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

// ============ APP STATE ============
let appState = {
    currentUser: null,
    currentDevice: null,
    selectedStorage: null,
    selectedDefects: {},
    batteryHealth: 100,
    deviceDefects: JSON.parse(localStorage.getItem('deviceDefects')) || defaultDeviceDefects,
    devicePrices: JSON.parse(localStorage.getItem('devicePrices')) || {},
    batteryThresholds: JSON.parse(localStorage.getItem('batteryThresholds')) || defaultBatteryThresholds
};

// ============ DOM ELEMENTS ============
const userSelectionPanel = document.getElementById('userSelection');
const mainPanel = document.getElementById('mainPanel');
const devPanel = document.getElementById('devPanel');
const deviceSelect = document.getElementById('deviceSelect');
const devDeviceSelect = document.getElementById('devDeviceSelect');
const storageOptions = document.getElementById('storageOptions');
const defectsContainer = document.getElementById('defectsContainer');
const currentValue = document.getElementById('currentValue');
const finalValue = document.getElementById('finalValue');
const batteryHealth = document.getElementById('batteryHealth');
const backBtn = document.getElementById('backBtn');
const backBtnDev = document.getElementById('backBtnDev');
const summaryContent = document.getElementById('summaryContent');
const pricesContainer = document.getElementById('pricesContainer');
const defectsConfigContainer = document.getElementById('defectsConfigContainer');
const savePricesBtn = document.getElementById('savePricesBtn');
const saveBatteryBtn = document.getElementById('saveBatteryBtn');
const saveDefectsBtn = document.getElementById('saveDefectsBtn');
const exportBtn = document.getElementById('exportBtn');
const importBtn = document.getElementById('importBtn');
const fileInput = document.getElementById('fileInput');

// ============ EVENT LISTENERS - USER SELECTION ============
document.querySelectorAll('.user-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const user = btn.dataset.user;
        appState.currentUser = user;
        userSelectionPanel.style.display = 'none';

        if (user === 'Yuri') {
            devPanel.style.display = 'flex';
        } else {
            mainPanel.style.display = 'flex';
        }
    });
});

backBtn.addEventListener('click', () => {
    mainPanel.style.display = 'none';
    userSelectionPanel.style.display = 'flex';
    backToUserSelection();
});

backBtnDev.addEventListener('click', () => {
    devPanel.style.display = 'none';
    userSelectionPanel.style.display = 'flex';
    pricesContainer.innerHTML = '';
    defectsConfigContainer.innerHTML = '';
    const batteryConfigContainer = document.getElementById('batteryConfigContainer');
    if (batteryConfigContainer) batteryConfigContainer.innerHTML = '';
});

// ============ POPULATE DEVICE SELECTS ============
function populateDeviceSelects() {
    const devices = Object.keys(defaultDeviceDefects);

    deviceSelect.innerHTML = '<option value="">Selecione um aparelho</option>';
    devDeviceSelect.innerHTML = '<option value="">Selecione um aparelho</option>';

    devices.forEach(device => {
        deviceSelect.innerHTML += `<option value="${device}">${device}</option>`;
        devDeviceSelect.innerHTML += `<option value="${device}">${device}</option>`;
    });
}

// ============ USER PANEL - DEVICE SELECTION ============
deviceSelect.addEventListener('change', (e) => {
    const device = e.target.value;
    if (device) {
        appState.currentDevice = device;
        populateStorage(device);
        populateDefects(device);
        calculateValue();
    } else {
        storageOptions.innerHTML = '';
        defectsContainer.innerHTML = '';
        appState.selectedDefects = {};
    }
});

// ============ POPULATE STORAGE ============
function populateStorage(device) {
    const deviceInfo = deviceData[device];
    if (!deviceInfo) return;

    storageOptions.innerHTML = '';

    deviceInfo.storage.forEach(storage => {
        const price = appState.devicePrices[device]?.[storage] || deviceInfo.basePrice[storage] || 0;

        const label = document.createElement('label');
        label.className = 'radio-label';
        label.innerHTML = `
            <input type="radio" name="storage" value="${storage}">
            <span>${storage}GB - R$ ${price}</span>
        `;
        label.addEventListener('change', () => {
            appState.selectedStorage = storage;
            calculateValue();
        });
        storageOptions.appendChild(label);
    });
}

// ============ POPULATE DEFECTS - USER PANEL ============
function populateDefects(device) {
    const defects = appState.deviceDefects[device];
    if (!defects) return;

    defectsContainer.innerHTML = '';

    Object.entries(defects).forEach(([defectName, defectValue]) => {
        const label = document.createElement('label');
        label.className = 'defect-label';
        label.innerHTML = `
            <input type="checkbox" value="${defectName}" data-value="${defectValue}">
            <span>${defectName}</span>
            <span class="defect-value">${defectValue}</span>
        `;
        label.addEventListener('change', (e) => {
            if (e.target.checked) {
                appState.selectedDefects[defectName] = defectValue;
            } else {
                delete appState.selectedDefects[defectName];
            }
            calculateValue();
        });
        defectsContainer.appendChild(label);
    });
}

// ============ PRICE CALCULATION ============
function calculateValue() {
    if (!appState.currentDevice || !appState.selectedStorage) return;

    const deviceInfo = deviceData[appState.currentDevice];
    const basePrice = appState.devicePrices[appState.currentDevice]?.[appState.selectedStorage] ||
        deviceInfo.basePrice[appState.selectedStorage] || 0;

    let defectDiscount = 0;
    Object.values(appState.selectedDefects).forEach(value => {
        defectDiscount += value;
    });

    let batteryDiscount = 0;
    const threshold = appState.batteryThresholds[appState.currentDevice];
    if (threshold && appState.batteryHealth < threshold.limit) {
        batteryDiscount = threshold.discount;
    }

    const finalPrice = basePrice + defectDiscount + batteryDiscount;

    currentValue.textContent = basePrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    finalValue.textContent = Math.max(0, finalPrice).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    updateSummary(basePrice, defectDiscount, batteryDiscount, finalPrice);
}

function updateSummary(base, defects, battery, final) {
    summaryContent.innerHTML = `
        <div class="summary-row">
            <span>Valor Base:</span>
            <span>${base.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
        </div>
        <div class="summary-row">
            <span>Defeitos:</span>
            <span>${defects.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
        </div>
        <div class="summary-row">
            <span>Bateria (${appState.batteryHealth}%):</span>
            <span>${battery.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
        </div>
        <div class="summary-row summary-total">
            <span>TOTAL:</span>
            <span>${Math.max(0, final).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
        </div>
    `;
}

batteryHealth.addEventListener('input', () => {
    appState.batteryHealth = parseInt(batteryHealth.value) || 100;
    calculateValue();
});

// ============ DEV PANEL - PRICES ============
function populateDevPrices(device) {
    pricesContainer.innerHTML = '<div class="price-header">Configurar Preços por Armazenamento</div>';

    const deviceInfo = deviceData[device];
    const prices = appState.devicePrices[device] || {};

    deviceInfo.storage.forEach(storage => {
        const item = document.createElement('div');
        item.className = 'price-item';

        const label = document.createElement('label');
        label.textContent = `${storage}GB`;

        const input = document.createElement('input');
        input.type = 'number';
        input.id = `price-${storage}`;
        input.className = 'glass-input';
        input.value = prices[storage] || deviceInfo.basePrice[storage] || 0;
        input.placeholder = `Preço ${storage}GB`;

        // Sincronização em tempo real
        input.addEventListener('input', () => {
            if (!appState.devicePrices[device]) {
                appState.devicePrices[device] = {};
            }
            appState.devicePrices[device][storage] = parseInt(input.value) || 0;
            localStorage.setItem('devicePrices', JSON.stringify(appState.devicePrices));
            console.log("[v0] Preço atualizado:", device, storage, appState.devicePrices[device][storage]);
        });

        item.appendChild(label);
        item.appendChild(input);
        pricesContainer.appendChild(item);
    });
}

savePricesBtn.addEventListener('click', () => {
    const device = devDeviceSelect.value;
    if (!device) return;
    showNotification('Preços salvos com sucesso!');
});

// ============ DEV PANEL - DEFECTS ============
function populateDevDefects(device) {
    const defects = appState.deviceDefects[device];
    defectsConfigContainer.innerHTML = '<div class="defects-header">Configurar Valores de Defeitos</div>';

    Object.entries(defects).forEach(([defectName, defectValue]) => {
        const item = document.createElement('div');
        item.className = 'defect-config-item';

        const label = document.createElement('label');
        label.className = 'defect-config-label';
        label.textContent = defectName;

        const input = document.createElement('input');
        input.type = 'number';
        input.id = `defect-${defectName}`;
        input.className = 'glass-input';
        input.value = defectValue;
        input.placeholder = 'Valor do defeito';

        // Sincronização em tempo real
        input.addEventListener('input', () => {
            appState.deviceDefects[device][defectName] = parseInt(input.value) || 0;
            localStorage.setItem('deviceDefects', JSON.stringify(appState.deviceDefects));
            console.log("[v0] Defeito atualizado:", device, defectName, appState.deviceDefects[device][defectName]);
        });

        item.appendChild(label);
        item.appendChild(input);
        defectsConfigContainer.appendChild(item);
    });
}

saveDefectsBtn.addEventListener('click', () => {
    const device = devDeviceSelect.value;
    if (!device) return;
    showNotification('Defeitos salvos com sucesso!');
});

// ============ DEV PANEL - BATTERY THRESHOLDS ============
function populateBatteryThresholdConfig(device) {
    const container = document.getElementById('batteryConfigContainer');
    if (!container) return;

    const threshold = appState.batteryThresholds[device] || { limit: 80, discount: -100 };

    container.innerHTML = `
        <div class="battery-config-item">
            <label>Limite de Bateria (%)</label>
            <input type="number" id="battery-limit" class="glass-input" value="${threshold.limit}" min="0" max="100">
        </div>
        <div class="battery-config-item">
            <label>Desconto (valor negativo)</label>
            <input type="number" id="battery-discount" class="glass-input" value="${threshold.discount}">
        </div>
    `;

    // Sincronização em tempo real
    const limitInput = document.getElementById('battery-limit');
    const discountInput = document.getElementById('battery-discount');

    limitInput.addEventListener('input', () => {
        appState.batteryThresholds[device].limit = parseInt(limitInput.value) || 80;
        localStorage.setItem('batteryThresholds', JSON.stringify(appState.batteryThresholds));
        console.log("[v0] Limite de bateria atualizado:", device, appState.batteryThresholds[device].limit);
    });

    discountInput.addEventListener('input', () => {
        appState.batteryThresholds[device].discount = parseInt(discountInput.value) || -100;
        localStorage.setItem('batteryThresholds', JSON.stringify(appState.batteryThresholds));
        console.log("[v0] Desconto de bateria atualizado:", device, appState.batteryThresholds[device].discount);
    });
}

saveBatteryBtn.addEventListener('click', () => {
    const device = devDeviceSelect.value;
    if (!device) return;
    showNotification('Limiar de bateria salvo com sucesso!');
});

// ============ DEV PANEL - DEVICE SELECT ============
devDeviceSelect.addEventListener('change', (e) => {
    const device = e.target.value;
    if (device) {
        populateDevPrices(device);
        populateDevDefects(device);
        populateBatteryThresholdConfig(device);
    } else {
        pricesContainer.innerHTML = '';
        defectsConfigContainer.innerHTML = '';
        const batteryConfigContainer = document.getElementById('batteryConfigContainer');
        if (batteryConfigContainer) batteryConfigContainer.innerHTML = '';
    }
});

// ============ EXPORT/IMPORT ============
function exportData() {
    const data = {
        devicePrices: appState.devicePrices,
        deviceDefects: appState.deviceDefects,
        batteryThresholds: appState.batteryThresholds,
        exportedAt: new Date().toISOString()
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `dados_iphone_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
}

exportBtn.addEventListener('click', exportData);

importBtn.addEventListener('click', () => fileInput.click());

fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
        try {
            const data = JSON.parse(event.target.result);

            if (data.devicePrices && data.deviceDefects && data.batteryThresholds) {
                appState.devicePrices = data.devicePrices;
                appState.deviceDefects = data.deviceDefects;
                appState.batteryThresholds = data.batteryThresholds;

                localStorage.setItem('devicePrices', JSON.stringify(appState.devicePrices));
                localStorage.setItem('deviceDefects', JSON.stringify(appState.deviceDefects));
                localStorage.setItem('batteryThresholds', JSON.stringify(appState.batteryThresholds));

                showNotification('Dados importados com sucesso! Recarregue a página.');
            } else {
                showNotification('Arquivo inválido!');
            }
        } catch (error) {
            showNotification('Erro ao importar arquivo!');
        }
    };
    reader.readAsText(file);
});

// ============ EXPORT CODE WITH UPDATED DEFAULTS ============
function exportCodeAsJavaScript() {
    // Gera o conteúdo do defaultDeviceDefects atualizado
    let defectsCode = 'const defaultDeviceDefects = {\n';
    
    Object.entries(appState.deviceDefects).forEach(([device, defects], index) => {
        defectsCode += `    '${device}': {\n`;
        Object.entries(defects).forEach(([defectName, value], defectIndex) => {
            const comma = defectIndex < Object.entries(defects).length - 1 ? ',' : '';
            defectsCode += `        '${defectName}': ${value}${comma}\n`;
        });
        const comma = index < Object.entries(appState.deviceDefects).length - 1 ? ',' : '';
        defectsCode += `    }${comma}\n`;
    });
    defectsCode += '};\n\n';

    // Gera o conteúdo do defaultBatteryThresholds atualizado
    let batteryCode = 'const defaultBatteryThresholds = {\n';
    Object.entries(appState.batteryThresholds).forEach(([device, threshold], index) => {
        const comma = index < Object.entries(appState.batteryThresholds).length - 1 ? ',' : '';
        batteryCode += `    '${device}': { limit: ${threshold.limit}, discount: ${threshold.discount} }${comma}\n`;
    });
    batteryCode += '};\n\n';

    // Gera o conteúdo dos preços
    let pricesCode = 'const defaultDevicePrices = {\n';
    Object.entries(appState.devicePrices).forEach(([device, prices], index) => {
        const comma = index < Object.entries(appState.devicePrices).length - 1 ? ',' : '';
        pricesCode += `    '${device}': {\n`;
        Object.entries(prices).forEach(([storage, price], priceIndex) => {
            const priceComma = priceIndex < Object.entries(prices).length - 1 ? ',' : '';
            pricesCode += `        ${storage}: ${price}${priceComma}\n`;
        });
        pricesCode += `    }${comma}\n`;
    });
    pricesCode += '};\n\n';

    // Cria mensagem com instruções
    const message = `Código atualizado gerado!\n\nSubstituir no seu script.js:\n\n1. Encontre: const defaultDeviceDefects = { ... };\n2. Encontre: const defaultBatteryThresholds = { ... };\n3. Encontre: const defaultDevicePrices = { ... };\n\nE copie o código abaixo:\n\n---\n\n${defectsCode}${batteryCode}${pricesCode}---\n\nArquivo completo será baixado como 'script-atualizado.js'`;
    
    // Copia para o clipboard
    const fullContent = `// ============ DEFEITOS POR APARELHO ============\n${defectsCode}// ============ BATERIA THRESHOLDS ============\n${batteryCode}// ============ PREÇOS PADRÃO ============\n${pricesCode}`;
    
    const blob = new Blob([fullContent], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'script-atualizado.js';
    a.click();
    URL.revokeObjectURL(url);
    
    showNotification('Script atualizado exportado como "script-atualizado.js"!');
}

// Event listener para o botão de exportação
const exportCodeBtn = document.getElementById('exportCodeBtn');
if (exportCodeBtn) {
    exportCodeBtn.addEventListener('click', exportCodeAsJavaScript);
}

// ============ UTILITIES ============
function backToUserSelection() {
    appState.currentUser = null;
    appState.currentDevice = null;
    appState.selectedStorage = null;
    appState.selectedDefects = {};
    appState.batteryHealth = 100;

    deviceSelect.value = '';
    storageOptions.innerHTML = '';
    defectsContainer.innerHTML = '';
    batteryHealth.value = 100;
}

function showNotification(message) {
    alert(message);
}

// ============ INITIALIZE ============
document.addEventListener('DOMContentLoaded', () => {
    populateDeviceSelects();
});
