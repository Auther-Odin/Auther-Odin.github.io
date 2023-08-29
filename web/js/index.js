//实现轮播图的切换
let img=document.querySelector('.img');
let pre=document.querySelector('.pre');
let next=document.querySelector('.next');
let slide=document.querySelector('.slide');
let lis=document.querySelectorAll('.btn li');

let imgArr=['1.jpg','2.jpg','3.jpg'];
let count=0;

function cutImg(){
    img.src='./image/'+imgArr[count];
    for(let i=0;i<lis.length;i++){
        lis[i].className='';
    }
    lis[count].className='active';

}
//设置定时器每隔三秒切换图片
let timer=setInterval(function(){
    count++;

    if(count>imgArr.length-1){
        count=0;
    }

    cutImg();
},3000);

//点击下一张
next.onclick=function(){
    count++;
    if(count>imgArr.length-1){
        count=0;
    }
    cutImg();
}

//点击上一张
pre.onclick=function(){
    count--;
    if(count<0){
        count=imgArr.length-1;
    }
    cutImg();
}

//鼠标划入停止
slide.onmouseover=function(){
    clearInterval(timer);
}

//鼠标划出
slide.onmouseout=function(){
    timer=setInterval(function(){
        count++;
        if(count>imgArr.length-1){
            count=0;
        }
        cutImg();
    },3000)
}

//给li绑定点击事件
for(let i=0;i<lis.length;i++){
    lis[i].onclick=function(){
        count=i;
        cutImg();
    };
}



//吸顶灯效果
let nav=document.getElementById('nav');
let navTop=nav.offsetTop;
window.onscroll=function(){
    let st=document.documentElement.scrollTop||document.body.scrollTop;
    if(st>=navTop){
        nav.style="position:fixed;top:0;width:100%";
    }else{
        nav.style="position:static";
    }
}


//选项卡
let tabTitle=document.querySelectorAll('.world-title div');
let tabItems=document.querySelectorAll('.tab');
//拿到所有div
for(let i=0;i<tabTitle.length;i++){
    //绑定点击事件
    tabTitle[i].onclick=function(){
        for(let j=0;j<tabTitle.length;j++){
            tabTitle[j].className='';
            tabItems[j].className='tab';
        }
        tabItems[i].className='con-active';
    }
}