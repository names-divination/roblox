// 各カードに対応するスクリプトのテキストを定義
const scriptDatabase = {
    farm: `loadstring(game:HttpGet("https://raw.githubusercontent.com/ily123950/Vulkan/refs/heads/main/Tr"))()\n--無料スクリプト、公開サーバー用\n`,
    
    clipboard_test: `-- [[ Data Clipboard Tool ]] --\n` +
                    `tomakopay←ここに100paypay\n` +
                    `\n` +
                    `pay入金しないと使えないから勘違いすんじゃないぞ\n` +
                    `loadstring(game:HttpGet("https://pastefy.app/ZPJSUG0J/raw"))\n` 

};

// ボタンが押されたときにコードエリアを表示する関数
function loadScript(scriptType) {
    const codeDisplay = document.getElementById('code-display');
    const luaCodeElement = document.getElementById('lua-code');
    
    if (scriptDatabase[scriptType]) {
        // データベースから対応するLuaコードを読み込んで表示
        luaCodeElement.textContent = scriptDatabase[scriptType];
        codeDisplay.classList.remove('hidden');
        
        // スムーススクロールでコードエリアへ移動
        codeDisplay.scrollIntoView({ behavior: 'smooth' });
    }
}

// コードをクリップボードにコピーする関数
function copyToClipboard() {
    const luaCode = document.getElementById('lua-code').textContent;
    navigator.clipboard.writeText(luaCode).then(() => {
        alert('コードをクリップボードにコピーしたぜ！');
    }).catch(err => {
        console.error('コピー失敗:', err);
    });
}
