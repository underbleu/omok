let user = 'black';
let blackLocation = [];
let whiteLocation = [];
let cntB = 0;
let cntW = 0;

// 오목판 그려주기



// 오목돌 놓기
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.col').forEach(el => { // el(=element) -> 선택한 요소
        el.addEventListener('click', e => { // e (=event) -> MouseEvent가 들어왔을 때
            console.log(Array.from(el.classList));
            console.log(Array.from(el.closest('.row').classList));
            
            // 중복돌 금지
            if (el.classList.contains('black') || el.classList.contains('white')){
                alert('꺼저');
                return; //여기서 return하여 함수를 종료해줘야지 뒤에 코드 실행안되서, 돌 중복을 막을 수 있다.
            }
            
            // 좌표 저장
            let locationXY = {x : '', y : ''}; //event함수 내부에 있어야함
            locationXY.x = el.classList[0].split('-')[1];
            locationXY.y = el.closest('.row').classList[0].split('-')[1];
            console.log(locationXY);
                  
            // 흰 검정돌 번갈아 놓기
            if(user === 'black'){
                el.classList.add('black');
                blackLocation.push(locationXY);
                console.log(blackLocation);
                user = 'white'
            }else{
                el.classList.add('white');
                whiteLocation.push(locationXY);
                console.log(whiteLocation);
                user = 'black';
            }


            //좌표를 활용하여 돌 위치별 id값 생성
            let blackID = [];
            let whiteID = [];
            
            for (let item of blackLocation) {
                blackID.push((15 * (item.y - 1) + 1 * item.x));
            }
            blackID.sort((a, b) => {a - b}); // 화살표함수: 함수몸체 한 줄 표현식이면 "{}, return"생략 가능
            console.log(blackID);

            for (let item of whiteLocation) {
                whiteID.push((15 * (item.y - 1) + 1 * item.x));
            }
            whiteID.sort((a, b) => {a - b}); 
            console.log(whiteID);
                     
            // 승패 결정

        })
    })
})

