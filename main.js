"use strict";

const before = document.getElementById("before");
const after = document.getElementById("after");
const testLine = "《《先月引きあげられた消費税のせいで人はみな財布の紐を固く縛り》》、買い物を控えていたので売上は激減、その分を年末で穴埋めするべく《《各社員には厳しい売上ノルマが課せられており》》、皆が皆溺死寸前の水難者のごとくもがき苦しみ、職場は《《阿鼻叫喚の地獄絵図》》であった。";

const convertDot = (line) => {
    let str = line;
    let i = 0;
    while(str.search(/《《[^》]+》》/) > -1){
        const chars = str.match(/《《[^》]+》》/);
        let converted = "";
        for(let j = 2; j < chars[0].length - 2; j++){ // match() returns not String but Array
            converted += "<ruby><rb>";
            converted += chars[0].substr(j, 1);
            converted += "</rb><rp>(</rp><rt>・</rt><rp>)</rp></ruby>";
        }
        str = str.replace(/《《[^》]+》》/, converted);
    }
    return str;
}

const test = (line) => {
    before.innerText = line;
    after.innerHTML = convertDot(line);
}

test(testLine);