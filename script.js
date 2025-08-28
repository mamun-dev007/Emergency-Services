
// like button
let likeCount = 0;
const mainLikeCount =  document.getElementById('mainLikeCount');
const likeCounterButtons = document.querySelectorAll('.likeCounterButton');
for( const btn of likeCounterButtons){
    btn.addEventListener("click", function(){
        likeCount++;
        mainLikeCount.innerText= likeCount;
        btn.style.color ="red"
    })
}
//coin count
let coin = 100;
const mainCoin =  document.getElementById('mainCoin');
const callButtons = document.querySelectorAll('.callButton');
for (const btn of callButtons){
    btn.addEventListener('click',function(){
        if(coin >=20){
            coin = coin-20;
            mainCoin.innerText = coin;
        }else{
            alert('Coin Balance is Finished')
        }
    })
}
//copy button
let copyCount = 0;
const copyCountNumber =  document.getElementById('copyCountNumber');
const copyButtons = document.querySelectorAll('.copyButton');
for (const btn of copyButtons){
    btn.addEventListener('click',function(){
        const number = btn.parentNode.parentNode.childNodes[7].innerText;
        navigator.clipboard.writeText(number).then(function(){
            copyCount++;

     copyCountNumber.innerText = copyCount;
        })
        
    })
}



