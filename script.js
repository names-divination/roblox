// 各カードに対応するスクリプトのテキストを定義
const scriptDatabase = {
    farm: `-- [[ Auto Farm Script v1.0 ]] --\nprint("Auto Farm Initialized")\n-- ここに自動化のメイン処理を記述\n`,
    
    clipboard_test: `-- [[ Data Clipboard Tool ]] --\n` +
                    `local targetData = "テスト用ダミーデータ"\n` +
                    `\n` +
                    `-- [くり抜き部分]: 取得したデータを処理するコアロジック\n` +
                    `-- 《ここにデータ送信や特定のバックエンド処理を記述》\n` +
                    `-- 例: print("検証用データ: " .. targetData)\n` +
                    `\n` +
                    `setclipboard(targetData)\n` +
                    `print("データをクリップボードに退避させました。")\n`
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
