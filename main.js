let r = document.getElementById("r");
let p = document.getElementById("p");
let s = document.getElementById("s");
let user = document.getElementById("result-user-stat");
let bot = document.getElementById("result-comp-stat");
let win = document.getElementById("result-final-stat");
let score_u = document.getElementById("userScoreVal");
let score_c = document.getElementById("compScoreVal");
let user_num = 0;
let comp_num = 0;

r.addEventListener('click',()=>{
    user.innerHTML = 'User: ';
    let node = document.createElement("img");
    node.src = "Images/rock.png";
    user.appendChild(node);
    let ans = comp();
    result('r',ans);
});
p.addEventListener('click',()=>{
    user.innerHTML = 'User: ';
    let node = document.createElement("img");
    node.src = "Images/paper.png";
    user.appendChild(node);
    let ans = comp();
    result('p',ans);
});
s.addEventListener('click',()=>{
    user.innerHTML = 'User: ';
    let node = document.createElement("img");
    node.src = "Images/scissors.png";
    user.appendChild(node);
    let ans = comp();
    result('s',ans);
});

function comp(){
    let arr = ['r', 'p', 's'];
    let ran = arr[Math.floor(Math.random() * arr.length)];
    if(ran === 'r'){
        bot.innerHTML = 'Computer: ';
        let node = document.createElement("img");
        node.src = "Images/rock.png";
        bot.appendChild(node);
        return 'r';
    }else if(ran === 'p'){
        bot.innerHTML = 'Computer: ';
        let node = document.createElement("img");
        node.src = "Images/paper.png";
        bot.appendChild(node);
        return 'p';
    }else{
        bot.innerHTML = 'Computer: ';
        let node = document.createElement("img");
        node.src = "Images/scissors.png";
        bot.appendChild(node);
        return 's';
    }
}


function result(u, c){
    if (u === c){
        win.innerText = "Winner: Draw";
    }else if( u==='r' && c === 's'){
        win.innerText = "Winner: You";
        user_num += 1;
        score_u.innerText = user_num;
    }else if( u==='r' && c === 'p'){
        win.innerText = "Winner: Computer";
        comp_num += 1;
        score_c.innerText = comp_num;
    }else if( u==='s' && c === 'p'){
        win.innerText = "Winner: You";
        user_num += 1;
        score_u.innerText = user_num;
    }else if( u==='p' && c === 's'){
        win.innerText = "Winner: Computer";
        comp_num += 1;
        score_c.innerText = comp_num;
    }else if( u==='s' && c === 'r'){
        win.innerText = "Winner: Computer";
        comp_num += 1;
        score_c.innerText = comp_num;
    }else if( u==='p' && c === 'r'){
        win.innerText = "Winner: You";
        user_num += 1;
        score_u.innerText = user_num;
    }
}