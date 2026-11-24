import BpmnModeler from 'bpmn-js/lib/Modeler';

// Подключаем стили
import 'bpmn-js/dist/assets/diagram-js.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css';

// Инициализация BPMN Modeler
const bpmnModeler = new BpmnModeler({
    container: '#bpmn-container'
});

// Делаем доступным из консоли браузера
window.bpmnModeler = bpmnModeler;

// Создаём начальную диаграмму
async function initializeBpmn() {
    try {
        await bpmnModeler.createDiagram();

        console.log('BPMN диаграмма успешно создана!');

    } catch (error) {
        console.error('Ошибка создания BPMN диаграммы:', error);
    }
}

// Запускаем инициализацию
initializeBpmn();