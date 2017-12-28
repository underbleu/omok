let blackUser = true;
let blackLocation = [];
let whiteLocation = [];

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.col').forEach(el => {
        el.addEventListener('click', e => {
            console.log(Array.from(el.classList));
            console.log(Array.from(el.closest('.row').classList));
            if(el.classList.contains('white') || el.classList.contains('black')){
                alert('꺼져!');
                return; //반환해서 함수를 종료해줘야지 뒤에 코드 실행안되고, 돌 중복을 막을 수 있다.
            }
            if(blackUser){
                el.classList.add('black');
                blackLocation.push();
                blackUser = false;
            }else{
                el.classList.add('white');
                whiteLocation.push();
                blackUser = true;
            }
        })
    })
})
// el(=element), e(=event)