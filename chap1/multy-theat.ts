function a() {b()}
function b(){c()}
function c(){console.log('Terminando abc')}

function x(){y()}
function y(){z()}
function z(){console.log('Terminando xyz')}

setTimeout(x,0)
a()