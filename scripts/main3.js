//侦测点击
/*document.querySelector('img').onclick = function()
{
    alert('别摸我的静静宝贝');
}*/
//点击更换图片
let myImage = document.querySelector('img');
myImage.onclick = function()
{
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/test1.jpg')
    {
        myImage.setAttribute('src','images/test2.jpg');
    }
    else if(mySrc === 'images/test2.jpg')
    {
        myImage.setAttribute('src','images/test3.jpg');
    }
    else if(mySrc === 'images/test3.jpg')
    {
        myImage.setAttribute('src','images/test4.jpg');
    }
    else if(mySrc === 'images/test4.jpg')
    {
        myImage.setAttribute('src','images/test5.jpg');
    }
    else
    {
        myImage.setAttribute('src','images/test1.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName()
{
    let myName = prompt('请输入你的名字。');
    if(!myName)
    {
        setUserName();
    }
    else
    {
        localStorage.setItem('name',myName);
        myHeading.textContent = '可爱宝贝：'+myName;
    }
}
if(!localStorage.getItem('name'))
    {
        setUserName();
    }
    else
    {
        let storedName = localStorage.getItem('name');
        myHeading.textContent = '可爱宝贝：'+storedName;
    }
myButton.onclick = function()
{
    setUserName();
}