const fs = require('fs');
const path = require('path');
const CONFIG_PATH = path.join(__dirname, './configs/bot-config.json');

function salvar_config(chave, valor) {
    let data = {};
    if (fs.existsSync(CONFIG_PATH)) {
        try {
            data = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf8'));
        } catch (e) {
            data = {};
        }
    }
    data[chave] = valor;
    fs.writeFileSync(CONFIG_PATH, JSON.stringify(data, null, 2), 'utf8');
}

function get_config() {
    if (fs.existsSync(CONFIG_PATH)) {
        try {
            return JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf8'));
        } catch (e) {
            return {};
        }
    }
    return {};
}

module.exports = { salvar_config, get_config };