;var ProgModule = (function() {
    var public = {};

class Workers{
    constructor(name){
        this.name = name;
        this.zarplata = 0;   
    };
};

class Manager extends Workers{
    constructor(name, exp){
        super(name);
        this.zarplata = exp*100;
        this.exp = exp;

    }
}
public.Manager = Manager;


class Junior extends Workers{
    constructor(name){
        super(name);
        this.level = this.constructor.name;
        this.lines = 100;
        this.zarplata = 10;   
    };
    getLevel(){
        return this.constructor.name;
    }   
};
public.Junior = Junior;


class Middle extends Junior{
    constructor(name){
        super(name);
        this.level = super.getLevel();
        this.lines = 300;
        this.zarplata = 30;
    };
};
public.Middle = Middle;


class Senior extends Junior{
    constructor(name){
        super(name);
        this.level = super.getLevel();
        this.lines = 500;
        this.zarplata = 50;
    };
};
public.Senior = Senior;

return public;
}
)();


;var ProjModule = (function() {
    return {
    Project: function(name, cost, lines) {
        this.name = name;
        this.cost = cost;
        this.lines = lines;
    }
   }
}
)();

//------------------------------------------------------------------------------------------
;var MainModule = (function() {
    var publicMain = {};

    var dev1; var input; var publicId; var publicPole; var timerId; var onStart = false; onStop = true;
    var people = {};
    var count = 0;
    var sumDevStrok = 0; var sumDevZar = 0;
    var sumManExp = 1; var sumManZar = 0;
    var projectLines = 0; cacheLines = 0; var projectOn = false; publicProjCost = 0;

    function addBtnDel(obj, pole){
        publicPole = pole;
        people[count] = obj;
        count++;

        var elem = document.getElementById(pole);
            input = document.createElement("input");
            input.id = ([count-1]);
            publicId = parseFloat(input.id);
            input.type = "button";
            input.value = "Remove";    

            human = document.createElement("div");
            human.id = String(publicId);
            if(publicPole === "free_devs"){
                human.innerHTML = ("("+obj.level + ") " + obj.name + " ");
            }
            if(publicPole === "free_managers"){
                human.innerHTML = (obj.name + " (x"+obj.exp +")");
            }
        
            input.setAttribute('onclick', "MainModule.delPeople("+ publicId+", "+ human.id +");");

        elem.appendChild(human);
        elem.appendChild(input);
    }
    publicMain.people = people;


    function delPeople(newId, hId){
        var myDiv = document.getElementById(newId);
        myDiv.parentNode.removeChild(myDiv);
        var myDiv2 = document.getElementById(hId);
        myDiv2.parentNode.removeChild(myDiv2);
    
        if(publicPole === "free_devs"){
            sumDevZar -= people[newId].zarplata;
            sumDevStrok -= people[newId].lines;
        }
        if(publicPole === "free_managers"){
            sumManExp -= people[newId].exp;
            sumManZar -= people[newId].zarplata;
        }
    
    }
    publicMain.delPeople = delPeople;


    function addDev(){ 
        var devName = document.getElementById("developer-name").value;
        var devLevel = document.querySelector('input[name = "dev-level"]:checked').value;
        if(devLevel == "Junior"){
            dev1 = new ProgModule.Junior(devName); 
        }
        else if(devLevel == "Middle"){
            dev1 = new ProgModule.Middle(devName);
        }
        else if(devLevel == "Senior"){
            dev1 = new ProgModule.Senior(devName);
        }
        sumDevStrok += dev1.lines;
        sumDevZar += dev1.zarplata;

        addBtnDel(dev1, "free_devs");

    }
    btn_add_dev.addEventListener("click", addDev);


    function addManager(){
        var man1;  
        var manName = document.getElementById("manager-name").value;
        var manExp = document.getElementById("manager-exp").value;
        
        man1 = new ProgModule.Manager(manName, manExp);
        addBtnDel(man1, "free_managers");

        sumManExp += parseFloat(manExp);
        sumManZar += man1.zarplata;
    }
    
        btn_add_manager.addEventListener("click", addManager);


    function addProject(){
        if(projectOn == false){
            var proj1;  
            var projName = document.getElementById("project-name").value;
            var projCost = document.getElementById("project-cost").value;
            var projLines = document.getElementById("project-lines").value;
            
            proj1 = new ProjModule.Project(projName, projCost, projLines);
            document.getElementById("projects_list").innerHTML = (proj1.name + " ("+proj1.cost + "$) " + " [" + projLines + " строк]");
            projectLines = parseFloat(proj1.lines);
            publicProjCost = parseFloat(proj1.cost);
        }
        projectOn = true;
    }
        btn_add_project.addEventListener("click", addProject);


        function doForInterval() {
            document.getElementById("timer").innerHTML++;
            if (cacheLines < projectLines && projectOn){
            cacheLines += (parseFloat(sumDevStrok)*parseFloat(sumManExp));
            document.getElementById("projects_list").innerHTML = ("Готов на: " + cacheLines + "");
            document.getElementById("budget_value").innerHTML -= (sumDevZar + sumManZar); 
            }
            if(cacheLines >= projectLines && projectOn){
                document.getElementById("projects_list").innerHTML = ("Проект завершен. <hr/>");
                cacheLines = 0;
                document.getElementById("budget_value").innerHTML = parseFloat(document.getElementById("budget_value").innerHTML) + parseFloat(publicProjCost);
                projectOn = false;
            }
            if(parseFloat(document.getElementById("budget_value").innerHTML) <= 0){
                clearInterval(timerId);  
                document.getElementById("budget_value").innerHTML += " - вы проиграли.";
            }
        }

        
        function startGame(){
           if(onStart === false && onStop === true){
                document.getElementById("timer").innerHTML = 1;
                document.getElementById("budget_value").innerHTML = parseFloat(document.getElementById("company-budget").value);
                timerId = setInterval(doForInterval, 1000);
                onStart = true;
                onStop = false;
           }

        }
        btn_start.addEventListener("click", startGame)


        function stopGame(){
                clearInterval(timerId);
                onStop = true;
                onStart = false;
            }
        btn_stop.addEventListener("click", stopGame)

        return publicMain;
}
)();


