go_to=(d,t) =>{
    if (t=='new') {
        window.open(`https://${d}`,'_blank');
    } else {
        window.location.href = `https://${d}`;
    }
}