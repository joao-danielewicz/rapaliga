const $=id=>document.getElementById(id);
const examples={
hello:`VAI CHINA {\n    EU FALA PLA ELE "Hello World!";\n}\nNÃO QUELO SABE MAIS NADA`,
idade:`VAI CHINA {\n    RAPALIGA idade = 20;\n\n    SE MALIDO MEU idade >= 18 {\n        EU FALA PLA ELE "Maior de idade";\n    }\n    TEM DOCUMENTO {\n        EU FALA PLA ELE "Menor de idade";\n    }\n}\nNÃO QUELO SABE MAIS NADA`,
loop:`VAI CHINA {\n    RAPALIGA contador = 1;\n\n    EU CHINA VAI VEM contador <= 10 {\n        EU FALA PLA ELE contador;\n\n        SE MALIDO MEU contador == 5 {\n            NÃO VOU DEIXA ELA ME MATA;\n        }\n\n        contador = contador + 1;\n    }\n}\nNÃO QUELO SABE MAIS NADA`,
soma:`VAI CHINA {\n    RAPALIGA a = 10;\n    RAPALIGA b = 32;\n    RAPALIGA total = a + b;\n\n    EU FALA PLA ELE "Resultado:";\n    EU FALA PLA ELE total;\n}\nNÃO QUELO SABE MAIS NADA`
};
function setStatus(text,error=false){const el=$('status');el.textContent=text;el.className='status'+(error?' err':'');}
function setOutput(text,error=false,label='SAÍDA DO PROGRAMA'){const out=$('output');out.textContent=text;out.className='out'+(error?' error':'');$('outputLabel').textContent=label;setStatus(error?'ERRO':'OK',error)}
$('editor').value=examples.hello;
$('examples').addEventListener('change',e=>{$('editor').value=examples[e.target.value]||examples.hello;setOutput('Clique em VAI CHINA para executar.',false,'SAÍDA DO PROGRAMA');});
$('run').addEventListener('click',()=>{try{const result=Rapaliga.run($('editor').value,$('stdin').value);setOutput(result.output||'(sem saída)',false,'SAÍDA DO PROGRAMA')}catch(e){setOutput(e.message,true,'ERRO DE EXECUÇÃO')}});
$('transpile').addEventListener('click',()=>{try{const py=Rapaliga.toPython($('editor').value);setOutput(py,false,'PYTHON GERADO')}catch(e){setOutput(e.message,true,'ERRO DE TRANSPILAÇÃO')}});
$('download').addEventListener('click',()=>{const blob=new Blob([$('editor').value],{type:'text/plain;charset=utf-8'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='programa.rapaliga';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000)});
$('editor').addEventListener('keydown',e=>{if(e.key==='Tab'){e.preventDefault();const t=e.target,s=t.selectionStart;t.setRangeText('    ',s,t.selectionEnd,'end')}if(e.ctrlKey&&e.key==='Enter'){e.preventDefault();$('run').click()}});
