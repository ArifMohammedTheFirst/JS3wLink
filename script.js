function initialize(){
    tb = document.getElementById("table");
    dice = document.getElementById("die");
    count = document.getElementById("rollCount");
}
// window.location.reload(); refreshes the page//

function updateRollInfo(){
    die = dice.value;
    rollCount = count.value;
    console.log(die + " " + rollCount);
}

function roll(){
    let r1=0;
    let r2=0;
    let r3=0;
    let doubles = 0;
    let triples = 0;
    let sum =0;
    console.log(die + " " + rollCount);
    for (var i = 0; i < rollCount; i++){

        if (die == 1){
            r1 = Math.floor((Math.random()*6) + 1); 
            sum = r1;
            med = r1;
        } else if (die == 2){
            r1 = Math.floor((Math.random()*6) + 1); 
            r2 = Math.floor((Math.random()*6) + 1); 
            sum = r1 + r2;
            med = sum / 2;
            if (r1 == r2){
                doubles ++;
            }
        } else {
            r1 = Math.floor((Math.random()*6) + 1); 
            r2 = Math.floor((Math.random()*6) + 1); 
            r3 = Math.floor((Math.random()*6) + 1); 
            if (r1 == r2 || r1 == r3 || r2 == r3){
                doubles++;
            }
            if (r1 == r2 && r2 == r3){
                triples ++;
            }
            sum = r1 + r2 + r3;
            med = r2;
        }
        let row = tb.insertRow();

        let cell = row.insertCell();
        cell.innerHTML = sum;
        cell = row.insertCell();
        cell.innerHTML = sum / die;
        cell = row.insertCell();
        cell.innerHTML = med;
        cell = row.insertCell();
        cell.innerHTML = r1;
        cell = row.insertCell();
        cell.innerHTML = doubles;
        cell = row.insertCell();
        cell.innerHTML = triples;
    }
    

}

function clear(){
    tb.remove();
}
