const hydrationAxisColor = 'rgba(62, 58, 23, 0.75)';
const hydrationGridColor = 'rgba(62, 58, 23, 0.12)';

const hydrationChartBase = {
responsive: true,
maintainAspectRatio: false,
plugins: {
legend: {
labels: {
color: hydrationAxisColor,
font: { family: "'Libertinus Sans', sans-serif", size: 11 }
}
},
tooltip: {
backgroundColor: '#3E3A17',
titleColor: '#F8EFCB',
bodyColor: '#F8EFCB'
}
},
scales: {
x: {
ticks: { color: hydrationAxisColor },
grid: { color: hydrationGridColor }
},
y: {
ticks: { color: hydrationAxisColor },
grid: { color: hydrationGridColor }
}
}
};

function chartIfExists(id, config) {
const el = document.getElementById(id);
if (el) new Chart(el, config);
}

chartIfExists('athleteElectrolytesChart', {
type: 'bar',
data: {
labels: ['Натрий', 'Калий', 'Магний'],
datasets: [{
label: 'Потери на 1 литр пота, мг',
data: [600, 150, 12],
backgroundColor: ['#FF7F00', '#A3A58C', '#C8D2D5'],
borderRadius: 8
}]
},
options: { ...hydrationChartBase, plugins: { ...hydrationChartBase.plugins, legend: { display: false } } }
});

chartIfExists('athleteRecoveryChart', {
type: 'line',
data: {
labels: ['0 мин', '30 мин', '2 часа', '4 часа', '20 часов'],
datasets: [{
label: 'Готовность к следующей нагрузке',
data: [22, 42, 66, 78, 94],
borderColor: '#FF7F00',
backgroundColor: 'rgba(255, 127, 0, 0.18)',
fill: true,
tension: 0.32
}]
},
options: hydrationChartBase
});

chartIfExists('brainHydrationChart', {
type: 'line',
data: {
labels: ['0%', '1%', '2%', '3%', '4-5%'],
datasets: [{
label: 'Когнитивная мощность, %',
data: [100, 95, 90, 80, 70],
borderColor: '#FF7F00',
backgroundColor: 'rgba(255, 127, 0, 0.18)',
fill: true,
tension: 0.3
}]
},
options: hydrationChartBase
});

chartIfExists('focusProtocolChart', {
type: 'bar',
data: {
labels: ['0-5 мин', '5-10 мин', '15-30 мин'],
datasets: [{
label: 'Вклад в восстановление фокуса',
data: [42, 26, 32],
backgroundColor: ['#FF7F00', '#A3A58C', '#3E3A17'],
borderRadius: 8
}]
},
options: { ...hydrationChartBase, plugins: { ...hydrationChartBase.plugins, legend: { display: false } } }
});

chartIfExists('morningCycleChart', {
type: 'doughnut',
data: {
labels: ['Вода натощак', 'Движение', 'Ежовик/фокус', 'Вечерний Рейши'],
datasets: [{
data: [28, 22, 26, 24],
backgroundColor: ['#FF7F00', '#A3A58C', '#C8D2D5', '#3E3A17'],
borderColor: '#fffdf6',
borderWidth: 3
}]
},
options: { responsive: true, maintainAspectRatio: false, plugins: hydrationChartBase.plugins, cutout: '58%' }
});

chartIfExists('dailyRhythmChart', {
type: 'line',
data: {
labels: ['7:00', '9:00', '12:00', '15:00', '18:00', '21:00'],
datasets: [{
label: 'Гидратация + энергия',
data: [55, 82, 74, 78, 64, 52],
borderColor: '#FF7F00',
backgroundColor: 'rgba(255, 127, 0, 0.16)',
fill: true,
tension: 0.35
}]
},
options: hydrationChartBase
});

chartIfExists('waterFormulaChart', {
type: 'bar',
data: {
labels: ['База 70 кг', '+ спорт', '+ кофе', '+ жара', '+ восстановление'],
datasets: [{
label: 'Литры в день',
data: [2.1, 2.75, 2.5, 2.6, 2.8],
backgroundColor: ['#C8D2D5', '#FF7F00', '#A3A58C', '#ffad62', '#3E3A17'],
borderRadius: 8
}]
},
options: hydrationChartBase
});

chartIfExists('waterProfilesChart', {
type: 'radar',
data: {
labels: ['Вода', 'Электролиты', 'Кофеин-компенсация', 'Нутриенты', 'Восстановление'],
datasets: [
{ label: 'Спортсмен', data: [92, 95, 50, 80, 88], borderColor: '#FF7F00', backgroundColor: 'rgba(255, 127, 0, 0.18)' },
{ label: 'Программист', data: [78, 58, 86, 76, 62], borderColor: '#3E3A17', backgroundColor: 'rgba(62, 58, 23, 0.12)' }
]
},
options: {
responsive: true,
maintainAspectRatio: false,
plugins: hydrationChartBase.plugins,
scales: { r: { angleLines: { color: hydrationGridColor }, grid: { color: hydrationGridColor }, pointLabels: { color: hydrationAxisColor }, ticks: { display: false, max: 100 } } }
}
});

chartIfExists('liquidVsPowderChart', {
type: 'bar',
data: {
labels: ['Биодоступность', 'Скорость эффекта', 'Стандартизация', 'Цена за эффект'],
datasets: [
{ label: 'Порошок', data: [30, 28, 48, 52], backgroundColor: 'rgba(163, 165, 140, 0.85)', borderRadius: 8 },
{ label: 'Жидкая форма', data: [86, 88, 92, 78], backgroundColor: 'rgba(255, 127, 0, 0.85)', borderRadius: 8 }
]
},
options: hydrationChartBase
});

chartIfExists('seoHydrationTrafficChart', {
type: 'bar',
data: {
labels: ['Спорт', 'Мозг', 'Натощак', 'Сколько воды', 'Жидкие БАД'],
datasets: [
{ label: 'Консервативно', data: [600, 550, 700, 1000, 300], backgroundColor: 'rgba(163, 165, 140, 0.85)', borderRadius: 8 },
{ label: 'Оптимистично', data: [1000, 900, 1200, 2000, 600], backgroundColor: 'rgba(255, 127, 0, 0.85)', borderRadius: 8 }
]
},
options: hydrationChartBase
});

chartIfExists('seoHydrationRevenueChart', {
type: 'doughnut',
data: {
labels: ['Контакты', 'Консультации', 'Продажи'],
datasets: [{
data: [180, 72, 36],
backgroundColor: ['#C8D2D5', '#FF7F00', '#3E3A17'],
borderColor: '#fffdf6',
borderWidth: 3
}]
},
options: { responsive: true, maintainAspectRatio: false, plugins: hydrationChartBase.plugins, cutout: '58%' }
});
