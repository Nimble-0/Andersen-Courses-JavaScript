var first = null; var second = null; var ravno = null; op_ce = false; other_ops = false;

hidden = false;
function btn_zhur(){
    if (hidden){
    document.getElementById("id_history").setAttribute("style", "visibility: hidden");
    hidden = false;
    }
    else{
    document.getElementById("id_history").setAttribute("style", "visibility: visible");
    hidden = true;
    }
}

function anyButton(myId){
    from_id = document.getElementById(myId).innerHTML;
    from_result = document.getElementById("result").innerHTML;
    r_length = from_result.length;
        if(from_result === "0"){
            document.getElementById("result").innerHTML = "";
        }
        if (r_length > 12){
            fail;
        }
        document.getElementById("result").innerHTML += from_id;

        newLength(r_length);
 }

 function btn_pl_mi(){
    document.getElementById("result").innerHTML = -(document.getElementById("result").innerHTML);
    length = document.getElementById("result").innerHTML.length;
    newLength(length);
 }

 function btn_ce(){
     op_ce = true;  
    document.getElementById("result").setAttribute("style", "margin-left:" + 359 + "px");
    document.getElementById("result").innerHTML = 0; 

}

 function btn_c(){
     document.getElementById("result").setAttribute("style", "margin-left:" + 359 + "px");
     document.getElementById("result").innerHTML = "0";
     document.getElementById("archive").innerHTML = "";
     var first = null; var second = null; var ravno = null; op_ce = false; other_ops = false;
 }

function btn_sqrt(){
    other_ops = true;
    num = parseFloat(document.getElementById("result").innerHTML);
    sqrt = document.getElementById("result").innerHTML = Math.sqrt(num);
    document.getElementById("result").setAttribute("style", "margin-left:" + 359 + "px");
    o_first = sqrt;
    sqrt = String(sqrt);

    document.getElementById("archive").innerHTML = "√" + String(num);
    archive = "√" + String(num) + " = " + sqrt + "\n<hr />";
    document.getElementById('hist').innerHTML += archive;
    newLength(sqrt.length);
}

function btn_square(){
    other_ops = true;
    num = parseFloat(document.getElementById("result").innerHTML);
    square = document.getElementById("result").innerHTML = Math.pow(num,2);
    document.getElementById("result").setAttribute("style", "margin-left:" + 359 + "px");
    o_first = square;
    square = String(square);

    document.getElementById("archive").innerHTML = String(num) + "²";
    archive = String(num) + "²" + " = " + square + "\n<hr />";
    document.getElementById('hist').innerHTML += archive;
    newLength(square.length);
}

function btn_one_x(){
    other_ops = true;
    num = parseFloat(document.getElementById("result").innerHTML);
    one_x = document.getElementById("result").innerHTML = parseFloat(1/num);
    document.getElementById("result").setAttribute("style", "margin-left:" + 359 + "px");
    o_first = one_x;
    one_x = String(one_x);

    document.getElementById("archive").innerHTML = "1" + "/" + String(num);
    archive = "1" + "/" + String(num) + " = " + String(one_x) + "\n<hr />";
    document.getElementById('hist').innerHTML += archive;
    newLength(one_x.length);
}

function btn_operation(what){
    ops = true;
    num = document.getElementById("result").innerHTML;
    if (op_ce == false){
    document.getElementById("archive").innerHTML = "";
    document.getElementById("archive").innerHTML += num;
    if (ops == false){
    document.getElementById("archive").innerHTML += what;
    }
    }
    document.getElementById("result").setAttribute("style", "margin-left:" + 359 + "px");
    document.getElementById("result").innerHTML = what;
    znak = what;

    if (ravno !== null){
        if(other_ops){
            first = o_first;
            other_ops = false;
        }
        else{
        first = ravno;
        }
    } 
    else{
   first = parseFloat(document.getElementById("archive").innerHTML);
    }

 }

function btn_ravno(){
    document.getElementById("archive").innerHTML = first;
    if (ops){
        second = document.getElementById("result").innerHTML;
        second = parseFloat(second.replace(/[^.0-9]/gim,''));
        ops = false;   
    }
    else{
        second = old_sec;
    }
    old_sec = second;
    if(znak === "+") { ravno = first + second; }
    if(znak === "-") { ravno = first - second; }
    if(znak === "*") { ravno = first * second; }
    if(znak === "/") { ravno = first / second; }
    if(znak === "%") { ravno = (first * second)/100; }
    
    document.getElementById("result").innerHTML = parseFloat(ravno);
    document.getElementById("archive").innerHTML += znak + second;

    archive = String(first) +" " + znak + " " + String(second) + " = " + String(ravno) + "\n<hr />";
    document.getElementById('hist').innerHTML += archive;

    first = parseFloat(ravno);
    newLength(String(ravno).length);
}

function btn_backspace(){
    del_last = document.getElementById("result").innerHTML;
    length = del_last.length;
    del_send = (del_last.substring(0, length - 1))
    
    if(del_send){
        document.getElementById("result").innerHTML = del_send;
        newLength(del_send.length);
    }
    else{
        document.getElementById("result").setAttribute("style", "margin-left:" + 359 + "px");
        document.getElementById("result").innerHTML = "0";
    }
}

function newLength(newlength){
    if (newlength > 12){
        document.getElementById("result").setAttribute("style", "margin-left: 135px; margin-top: -555px; font-size: 30px;");       
        if(newlength > 16){
            document.getElementById("result").setAttribute("style", "margin-left: 50px; margin-top: -555px; font-size: 30px;");     
            if (newlength > 20){
                document.getElementById("result").setAttribute("style", "margin-left: 15px; margin-top: -555px; font-size: 30px;");
            }    
        }
    }
    else{
        width = 359; font = 29;
        mnozhitel = newlength * font;
        if (newlength === 1){
            document.getElementById("result").setAttribute("style", "margin-left:" + width + "px");
            newlength += 1;
        }
        if (newlength > 1) {
            width = width - mnozhitel;
            document.getElementById("result").setAttribute("style", "margin-left:" + width + "px");
        } 
    }
 }