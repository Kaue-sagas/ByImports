// ============ DADOS DOS APARELHOS ============
const deviceData = {
  "iPhone 8": {
    storage: [64, 128, 256],
    basePrice: { 64: 200, 128: 200, 256: 200 },
  },
  "iPhone 8 Plus": {
    storage: [64, 128, 256],
    basePrice: { 64: 300, 128: 300, 256: 300 },
  },
  "iPhone X": { 
    storage: [64, 256], 
    basePrice: { 64: 400, 256: 400 } 
},
  "iPhone XS": { 
    storage: [64, 256], 
    basePrice: { 64: 500, 256: 500 }  
},
  "iPhone XS Max": { 
    storage: [64, 256], 
    basePrice: { 64: 600, 256: 600 } 
},
  "iPhone XR": {
    storage: [64, 128, 256],
    basePrice: { 64: 500, 128: 500, 256: 500 },
  },
  "iPhone 11": {
    storage: [64, 128, 256],
    basePrice: { 64: 600, 128: 700, 256: 700 },
  },
  "iPhone 11 Pro": {
    storage: [64, 256],
    basePrice: { 64: 1100, 256: 1200 },
  },
  "iPhone 11 Pro Max": {
    storage: [64, 256, 512],
    basePrice: { 64: 1200, 256: 1300, 512: 1300 },
  },
  "iPhone 12": {
    storage: [64, 128, 256],
    basePrice: { 64: 1200, 128: 1450, 256: 1650 },
  },
  "iPhone 12 Pro": {
    storage: [128, 256],
    basePrice: { 128: 1850, 256: 1950 },
  },
  "iPhone 12 Pro Max": {
    storage: [128, 256, 512],
    basePrice: { 128: 2000, 256: 2100, 512: 2100 },
  },
  "iPhone 13": {
    storage: [128, 256],
    basePrice: { 128: 1800, 256: 2000 },
  },
  "iPhone 13 Pro": {
    storage: [128, 256, 512],
    basePrice: { 128: 2400, 256: 2500, 512: 2500},
  },
  "iPhone 13 Pro Max": {
    storage: [128, 256, 512],
    basePrice: { 128: 2600, 256: 2800, 512: 2800 },
  },
  "iPhone 14": {
    storage: [128, 256, 512],
    basePrice: { 128: 2100, 256: 2200, 512: 2200 },
  },
  "iPhone 14 Pro": {
    storage: [128, 256, 512],
    basePrice: { 128: 2900, 256: 3000, 512: 3000 },
  },
  "iPhone 14 Pro Max": {
    storage: [128, 256, 512],
    basePrice: { 128: 3400, 256: 3500, 512: 3500 },
  },
  "iPhone 15": {
    storage: [128, 256, 512],
    basePrice: { 128: 2800, 256: 3000, 512: 3000 },
  },
  "iPhone 15 Pro": {
    storage: [128, 256, 512],
    basePrice: { 128: 3400, 256: 3600, 512: 3600 },
  },
  "iPhone 15 Pro Max": {
    storage: [256, 512, 1024],
    basePrice: { 256: 4300, 512: 4600, 1024: 4600 },
  },
  "iPhone 16": {
    storage: [128, 256, 512],
    basePrice: { 128: 3400, 256: 3600, 512: 3600 },
  },
  "iPhone 16 Pro": {
    storage: [128, 256, 512],
    basePrice: { 128: 4700, 256: 4900, 512: 4900 },
  },
  "iPhone 16 Pro Max": {
    storage: [256, 512, 1024],
    basePrice: { 256: 5500, 512: 5700, 1024: 5700 },
  },
};

// ============ DEFEITOS POR APARELHO ============
const deviceDefects = {
  "iPhone 8": {
    Tela: -100,
    "Marcas de Uso": -50,
    "Tampa Traseira": -100,
    "Reparo da Placa": -200,
    "Dock de Carga": -100,
    "Face ID": 0,
    "Vidro Frontal": 0,
    "Alto Falante": -50,
    Auricular: -50,
    "Camera Frontal": -100,
    "Camera Traseira": -150,
    "Mancha Camera": -50,
    Flash: -100,
    "Botao Power": -150,
  },
  "iPhone 8 Plus": {
    Tela: -100,
    "Marcas de Uso": -50,
    "Tampa Traseira": -100,
    "Reparo da Placa": -300,
    "Dock de Carga": -100,
    "Face ID": 0,
    "Vidro Frontal": 0,
    "Alto Falante": -50,
    Auricular: -50,
    "Camera Frontal": -100,
    "Camera Traseira": -200,
    "Mancha Camera": -50,
    Flash: -100,
    "Botao Power": -150,
  },
  "iPhone X": {
    Tela: -200,
    "Marcas de Uso": -50,
    "Tampa Traseira": -150,
    "Reparo da Placa": -400,
    "Dock de Carga": -100,
    "Face ID": -250,
    "Vidro Frontal": 0,
    "Alto Falante": -100,
    Auricular: -150,
    "Camera Frontal": -150,
    "Camera Traseira": -200,
    "Mancha Camera": -50,
    Flash: -150,
    "Botao Power": -150,
  },
  "iPhone XS": {
    Tela: -200,
    "Marcas de Uso": -50,
    "Tampa Traseira": -150,
    "Reparo da Placa": -400,
    "Dock de Carga": -100,
    "Face ID": -250,
    "Vidro Frontal": 0,
    "Alto Falante": -100,
    Auricular: -150,
    "Camera Frontal": -150,
    "Camera Traseira": -250,
    "Mancha Camera": -50,
    Flash: -150,
    "Botao Power": -150,
  },
  "iPhone XS Max": {
    Tela: -300,
    "Marcas de Uso": -50,
    "Tampa Traseira": -200,
    "Reparo da Placa": -400,
    "Dock de Carga": -100,
    "Face ID": -300,
    "Vidro Frontal": 0,
    "Alto Falante": -100,
    Auricular: -150,
    "Camera Frontal": -200,
    "Camera Traseira": -300,
    "Mancha Camera": -100,
    Flash: -150,
    "Botao Power": -150,
  },
  "iPhone XR": {
    Tela: -200,
    "Marcas de Uso": -50,
    "Tampa Traseira": -200,
    "Reparo da Placa": -400,
    "Dock de Carga": -100,
    "Face ID": -250,
    "Vidro Frontal": 0,
    "Alto Falante": -100,
    Auricular: -150,
    "Camera Frontal": -150,
    "Camera Traseira": -300,
    "Mancha Camera": -50,
    Flash: -150,
    "Botao Power": -150,
  },
  "iPhone 11": {
    Tela: -250,
    "Marcas de Uso": -100,
    "Tampa Traseira": -250,
    "Reparo da Placa": -500,
    "Dock de Carga": -150,
    "Face ID": -300,
    "Vidro Frontal": 0,
    "Alto Falante": -100,
    Auricular: -150,
    "Camera Frontal": -200,
    "Camera Traseira": -300,
    "Mancha Camera": -50,
    Flash: -170,
    "Botao Power": -150,
  },
  "iPhone 11 Pro": {
    Tela: -300,
    "Marcas de Uso": -100,
    "Tampa Traseira": -300,
    "Reparo da Placa": -600,
    "Dock de Carga": -150,
    "Face ID": -300,
    "Vidro Frontal": 0,
    "Alto Falante": -100,
    Auricular: -150,
    "Camera Frontal": -200,
    "Camera Traseira": -400,
    "Mancha Camera": -100,
    Flash: -170,
    "Botao Power": -150,
  },
  "iPhone 11 Pro Max": {
    Tela: -300,
    "Marcas de Uso": -100,
    "Tampa Traseira": -450,
    "Reparo da Placa": -700,
    "Dock de Carga": -150,
    "Face ID": -300,
    "Vidro Frontal": 0,
    "Alto Falante": -100,
    Auricular: -150,
    "Camera Frontal": -200,
    "Camera Traseira": -400,
    "Mancha Camera": -100,
    Flash: -170,
    "Botao Power": -150,
  },
  "iPhone 12": {
    Tela: -500,
    "Marcas de Uso": -100,
    "Tampa Traseira": -350,
    "Reparo da Placa": -600,
    "Dock de Carga": -200,
    "Face ID": -400,
    "Vidro Frontal": 0,
    "Alto Falante": -150,
    Auricular: -200,
    "Camera Frontal": -250,
    "Camera Traseira": -350,
    "Mancha Camera": -100,
    Flash: -200,
    "Botao Power": -150,
  },
  "iPhone 12 Pro": {
    Tela: -500,
    "Marcas de Uso": -100,
    "Tampa Traseira": -400,
    "Reparo da Placa": -800,
    "Dock de Carga": -200,
    "Face ID": -450,
    "Vidro Frontal": 0,
    "Alto Falante": -150,
    Auricular: -250,
    "Camera Frontal": -250,
    "Camera Traseira": -600,
    "Mancha Camera": -150,
    Flash: -200,
    "Botao Power": -150,
  },
  "iPhone 12 Pro Max": {
    Tela: -950,
    "Marcas de Uso": -100,
    "Tampa Traseira": -500,
    "Reparo da Placa": -900,
    "Dock de Carga": -200,
    "Face ID": -500,
    "Vidro Frontal": 0,
    "Alto Falante": -150,
    Auricular: -250,
    "Camera Frontal": -300,
    "Camera Traseira": -600,
    "Mancha Camera": -150,
    Flash: -200,
    "Botao Power": -150,
  },
  "iPhone 13": {
    Tela: -600,
    "Marcas de Uso": -100,
    "Tampa Traseira": -400,
    "Reparo da Placa": -800,
    "Dock de Carga": -300,
    "Face ID": 0,
    "Vidro Frontal": 0,
    "Alto Falante": -150,
    Auricular: -250,
    "Camera Frontal": -300,
    "Camera Traseira": -500,
    "Mancha Camera": -150,
    Flash: -200,
    "Botao Power": -150,
  },
  "iPhone 13 Pro": {
    Tela: -1400,
    "Marcas de Uso": -100,
    "Tampa Traseira": -500,
    "Reparo da Placa": -900,
    "Dock de Carga": -300,
    "Face ID": 0,
    "Vidro Frontal": 0,
    "Alto Falante": -150,
    Auricular: -300,
    "Camera Frontal": -350,
    "Camera Traseira": -700,
    "Mancha Camera": -200,
    Flash: -250,
    "Botao Power": -150,
  },
  "iPhone 13 Pro Max": {
    Tela: -1700,
    "Marcas de Uso": -100,
    "Tampa Traseira": -600,
    "Reparo da Placa": -1000,
    "Dock de Carga": -300,
    "Face ID": 0,
    "Vidro Frontal": 0,
    "Alto Falante": -150,
    Auricular: -300,
    "Camera Frontal": -350,
    "Camera Traseira": -700,
    "Mancha Camera": -200,
    Flash: -250,
    "Botao Power": -150,
  },
  "iPhone 14": {
    Tela: -700,
    "Marcas de Uso": -100,
    "Tampa Traseira": -400,
    "Reparo da Placa": -1200,
    "Dock de Carga": -300,
    "Face ID": 0,
    "Vidro Frontal": 0,
    "Alto Falante": -150,
    Auricular: -250,
    "Camera Frontal": -300,
    "Camera Traseira": -500,
    "Mancha Camera": -200,
    Flash: -250,
    "Botao Power": -150,
  },
  "iPhone 14 Pro": {
    Tela: -1500,
    "Marcas de Uso": -100,
    "Tampa Traseira": -500,
    "Reparo da Placa": -1500,
    "Dock de Carga": -400,
    "Face ID": 0,
    "Vidro Frontal": 0,
    "Alto Falante": -200,
    Auricular: -300,
    "Camera Frontal": -400,
    "Camera Traseira": -800,
    "Mancha Camera": -200,
    Flash: -250,
    "Botao Power": -150,
  },
  "iPhone 14 Pro Max": {
    Tela: -2000,
    "Marcas de Uso": -100,
    "Tampa Traseira": -600,
    "Reparo da Placa": -1500,
    "Dock de Carga": -400,
    "Face ID": 0,
    "Vidro Frontal": 0,
    "Alto Falante": -200,
    Auricular: -300,
    "Camera Frontal": -450,
    "Camera Traseira": -800,
    "Mancha Camera": -200,
    Flash: -250,
    "Botao Power": -150,
  },
  "iPhone 15": {
    Tela: -1000,
    "Marcas de Uso": -100,
    "Tampa Traseira": -500,
    "Reparo da Placa": -1200,
    "Dock de Carga": -400,
    "Face ID": 0,
    "Vidro Frontal": 0,
    "Alto Falante": -200,
    Auricular: -250,
    "Camera Frontal": -400,
    "Camera Traseira": -600,
    "Mancha Camera": -200,
    Flash: -250,
    "Botao Power": -200,
  },
  "iPhone 15 Pro": {
    Tela: -1800,
    "Marcas de Uso": -200,
    "Tampa Traseira": -600,
    "Reparo da Placa": -1600,
    "Dock de Carga": -400,
    "Face ID": 0,
    "Vidro Frontal": 0,
    "Alto Falante": -200,
    Auricular: -300,
    "Camera Frontal": -500,
    "Camera Traseira": -800,
    "Mancha Camera": -200,
    Flash: -250,
    "Botao Power": -200,
  },
  "iPhone 15 Pro Max": {
    Tela: -2300,
    "Marcas de Uso": -200,
    "Tampa Traseira": -700,
    "Reparo da Placa": -1800,
    "Dock de Carga": -400,
    "Face ID": 0,
    "Vidro Frontal": 0,
    "Alto Falante": -300,
    Auricular: -300,
    "Camera Frontal": -600,
    "Camera Traseira": -800,
    "Mancha Camera": -200,
    Flash: -250,
    "Botao Power": -200,
  },
  "iPhone 16": {
    Tela: -1600,
    "Marcas de Uso": -100,
    "Tampa Traseira": -600,
    "Reparo da Placa": -1400,
    "Dock de Carga": -400,
    "Face ID": 0,
    "Vidro Frontal": 0,
    "Alto Falante": -300,
    Auricular: -300,
    "Camera Frontal": -500,
    "Camera Traseira": -800,
    "Mancha Camera": -200,
    Flash: -300,
    "Botao Power": -200,
  },
  "iPhone 16 Pro": {
    Tela: -1900,
    "Marcas de Uso": -200,
    "Tampa Traseira": -1000,
    "Reparo da Placa": -1800,
    "Dock de Carga": -400,
    "Face ID": 0,
    "Vidro Frontal": 0,
    "Alto Falante": -300,
    Auricular: -400,
    "Camera Frontal": -700,
    "Camera Traseira": -1300,
    "Mancha Camera": -300,
    Flash: -300,
    "Botao Power": -200,
  },
  "iPhone 16 Pro Max": {
    Tela: -2600,
    "Marcas de Uso": -200,
    "Tampa Traseira": -1300,
    "Reparo da Placa": -2000,
    "Dock de Carga": -500,
    "Face ID": 0,
    "Vidro Frontal": 0,
    "Alto Falante": -300,
    Auricular: -400,
    "Camera Frontal": -800,
    "Camera Traseira": -1400,
    "Mancha Camera": -300,
    Flash: -300,
    "Botao Power": -200,
  },
};

// ============ LIMIARES DE BATERIA ============
const batteryThresholds = {
  "iPhone 8": { limit: 80, discount: -100 },
  "iPhone 8 Plus": { limit: 80, discount: -100 },
  "iPhone X": { limit: 80, discount: -100 },
  "iPhone XS": { limit: 80, discount: -100 },
  "iPhone XS Max": { limit: 80, discount: -100 },
  "iPhone XR": { limit: 80, discount: -100 },
  "iPhone 11": { limit: 80, discount: -100 },
  "iPhone 11 Pro": { limit: 80, discount: -100 },
  "iPhone 11 Pro Max": { limit: 80, discount: -150 },
  "iPhone 12": { limit: 84, discount: -150 },
  "iPhone 12 Pro": { limit: 84, discount: -150 },
  "iPhone 12 Pro Max": { limit: 84, discount: -150 },
  "iPhone 13": { limit: 84, discount: -150 },
  "iPhone 13 Pro": { limit: 84, discount: -150 },
  "iPhone 13 Pro Max": { limit: 84, discount: -150 },
  "iPhone 14": { limit: 84, discount: -150 },
  "iPhone 14 Pro": { limit: 84, discount: -150 },
  "iPhone 14 Pro Max": { limit: 84, discount: -150 },
  "iPhone 15": { limit: 85, discount: -250 },
  "iPhone 15 Pro": { limit: 85, discount: -250 },
  "iPhone 15 Pro Max": { limit: 85, discount: -250 },
  "iPhone 16": { limit: 90, discount: -300 },
  "iPhone 16 Pro": { limit: 90, discount: -300 },
  "iPhone 16 Pro Max": { limit: 90, discount: -300 },
};

// ============ TABELA HIPERCARD DE MULTIPLICADORES ============
const installmentMultipliers = {
  1: 1.033485,
  2: 1.04888,
  3: 1.05742,
  4: 1.065985,
  5: 1.07446,
  6: 1.08307,
  7: 1.090155,
  8: 1.09878,
  9: 1.10754,
  10: 1.116195,
  11: 1.125115,
  12: 1.133915,
  13: 1.142855,
  14: 1.15181,
  15: 1.160765,
  16: 1.169865,
  17: 1.178965,
  18: 1.18807,
};

// ============ APP STATE ============
let appState = {
  currentDevice: null,
  selectedStorage: null,
  selectedDefects: {},
  batteryHealth: 100,
  basePrice: 0,
  finalValue: 0,
  targetValue: 0,
};

// ============ DOM ELEMENTS ============
const deviceSelect = document.getElementById("deviceSelect");
const storageCard = document.getElementById("storageCard");
const storageOptions = document.getElementById("storageOptions");
const valueCard = document.getElementById("valueCard");
const currentValueEl = document.getElementById("currentValue");
const defectsCard = document.getElementById("defectsCard");
const defectsContainer = document.getElementById("defectsContainer");
const batteryCard = document.getElementById("batteryCard");
const batteryHealthInput = document.getElementById("batteryHealth");
const batterySlider = document.getElementById("batterySlider");
const finalCard = document.getElementById("finalCard");
const finalValueEl = document.getElementById("finalValue");
const summaryContent = document.getElementById("summaryContent");
const differenceCard = document.getElementById("differenceCard");
const targetValueInput = document.getElementById("targetValue");
const differenceResult = document.getElementById("differenceResult");
const differenceAmount = document.getElementById("differenceAmount");
const installmentsCard = document.getElementById("installmentsCard");
const installmentsGrid = document.getElementById("installmentsGrid");
const customInstallmentsInput = document.getElementById("customInstallments");
const customResult = document.getElementById("customResult");
const customCount = document.getElementById("customCount");
const customValue = document.getElementById("customValue");
const customTotal = document.getElementById("customTotal");

// ============ INITIALIZE ============
function init() {
  populateDeviceSelect();
  setupEventListeners();
}

// ============ POPULATE DEVICE SELECT ============
function populateDeviceSelect() {
  const devices = Object.keys(deviceData);
  devices.forEach((device) => {
    const option = document.createElement("option");
    option.value = device;
    option.textContent = device;
    deviceSelect.appendChild(option);
  });
}

// ============ EVENT LISTENERS ============
function setupEventListeners() {
  // Device selection
  deviceSelect.addEventListener("change", handleDeviceChange);

  // Battery inputs
  batteryHealthInput.addEventListener("input", handleBatteryInput);
  batterySlider.addEventListener("input", handleBatterySlider);

  // Target value for difference
  targetValueInput.addEventListener("input", handleTargetValueChange);

  // Custom installments
  customInstallmentsInput.addEventListener("input", handleCustomInstallments);
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
    customTotal.textContent = `Total: ${formatCurrency(
      installment.totalFinal
    )}`;
    customResult.style.display = "block";
  } else {
    customResult.style.display = "none";
  }
}

// ============ POPULATE STORAGE ============
function populateStorage(device) {
  const deviceInfo = deviceData[device];
  storageOptions.innerHTML = "";

  deviceInfo.storage.forEach((storage) => {
    const price = deviceInfo.basePrice[storage];
    const btn = document.createElement("button");
    btn.className = "storage-btn";
    btn.innerHTML = `
            <span class="storage-size">${storage}GB</span>
            <span class="storage-price">${formatCurrency(price)}</span>
        `;
    btn.addEventListener("click", () => selectStorage(storage, btn));
    storageOptions.appendChild(btn);
  });
}

function selectStorage(storage, btn) {
  // Remove active class from all buttons
  document
    .querySelectorAll(".storage-btn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");

  appState.selectedStorage = storage;
  appState.basePrice = deviceData[appState.currentDevice].basePrice[storage];

  showCard(valueCard);
  calculateValue();
}

// ============ POPULATE DEFECTS ============
function populateDefects(device) {
  const defects = deviceDefects[device];
  defectsContainer.innerHTML = "";

  Object.entries(defects).forEach(([defectName, defectValue]) => {
    const item = document.createElement("div");
    item.className = "defect-item";
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

    item.addEventListener("click", () =>
      toggleDefect(defectName, defectValue, item)
    );
    defectsContainer.appendChild(item);
  });
}

function toggleDefect(defectName, defectValue, item) {
  if (appState.selectedDefects[defectName] !== undefined) {
    delete appState.selectedDefects[defectName];
    item.classList.remove("selected");
  } else {
    appState.selectedDefects[defectName] = defectValue;
    item.classList.add("selected");
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
  Object.values(appState.selectedDefects).forEach((value) => {
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

  let defectsText = "Nenhum";
  if (selectedDefectsList.length > 0) {
    defectsText =
      selectedDefectsList.length > 2
        ? `${selectedDefectsList.slice(0, 2).join(", ")} +${
            selectedDefectsList.length - 2
          }`
        : selectedDefectsList.join(", ");
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
    differenceResult.style.display = "none";
    installmentsCard.style.display = "none";
    return;
  }

  const difference = appState.targetValue - appState.finalValue;

  differenceAmount.textContent = formatCurrency(Math.max(0, difference));
  differenceResult.style.display = "block";

  if (difference > 0) {
    calculateAndShowInstallments(difference);
    showCard(installmentsCard);
  } else {
    installmentsCard.style.display = "none";
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
    multiplier,
  };
}

// ============ CALCULATE AND SHOW INSTALLMENTS ============
function calculateAndShowInstallments(difference) {
  const fixedInstallments = [10, 12, 18];
  installmentsGrid.innerHTML = "";

  fixedInstallments.forEach((parcelas) => {
    const result = calculateInstallment(difference, parcelas);

    const card = document.createElement("div");
    card.className = "installment-card";
    card.innerHTML = `
            <div class="installment-detail">
                <span class="installment-count">${result.parcelas}x</span>
                <span class="installment-value">${formatCurrency(
                  result.parcelaValor
                )}</span>
            </div>
            <span class="installment-total">Total: ${formatCurrency(
              result.totalFinal
            )}</span>
        `;
    installmentsGrid.appendChild(card);
  });

  // Reset custom installment
  customInstallmentsInput.value = "";
  customResult.style.display = "none";
}

// ============ UTILITY FUNCTIONS ============
function formatCurrency(value) {
  return Math.round(value).toLocaleString("pt-BR");
}

function showCard(card) {
  card.style.display = "block";
  card.classList.add("show");
}

function hideAllCards() {
  [
    storageCard,
    valueCard,
    defectsCard,
    batteryCard,
    finalCard,
    differenceCard,
    installmentsCard,
  ].forEach((card) => {
    card.style.display = "none";
    card.classList.remove("show");
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
    targetValue: 0,
  };

  storageOptions.innerHTML = "";
  defectsContainer.innerHTML = "";
  batteryHealthInput.value = 100;
  batterySlider.value = 100;
  targetValueInput.value = "";
  customInstallmentsInput.value = "";
  differenceResult.style.display = "none";
  customResult.style.display = "none";
}

// ============ INITIALIZE ON DOM READY ============
document.addEventListener("DOMContentLoaded", init);
