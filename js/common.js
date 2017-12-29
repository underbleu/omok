let user = 'black';
let blackLocation = [];
let whiteLocation = [];
let blackID = [];
let whiteID = [];

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
                
                // 좌표생성
                blackLocation.push(locationXY);
                
                //좌표를 활용하여 위치별 id값 생성
                blackID.push((15 * (locationXY.y - 1) + 1 * locationXY.x));
                blackID.sort((a, b) => a - b); // 화살표함수: 함수몸체 한 줄 표현식이면 "{return }"생략. return만 생략하고 {중괄호} 냅두면 sort함수 동작안함
                
                console.log(`blackID : ${blackID}`);
                user = 'white'
            }else{
                el.classList.add('white');

                // 좌표생성
                whiteLocation.push(locationXY);

                // 좌표를 활용하여 위치별 id값 생성
                whiteID.push((15 * (locationXY.y - 1) + 1 * locationXY.x));
                whiteID.sort((a, b) => a - b); // 화살표함수: 함수몸체 한 줄 표현식이면 "{return }"생략. return만 생략하고 {중괄호} 냅두면 sort함수 동작안함

                console.log(`whiteID : ${whiteID}`);
                user = 'black';
            }
                        
            // 승패 결정
            for(let i = 0; i < blackID.length; i++){

                // 좌우
                if (blackID.includes(blackID[i] + 1) &&
                    blackID.includes(blackID[i] + 2) &&
                    blackID.includes(blackID[i] + 3) &&
                    blackID.includes(blackID[i] + 4))
                    {alert('좌우 검정 승리!'); return;}

                // 상하
                if (blackID.includes(blackID[i] + 15) &&     // col
                    blackID.includes(blackID[i] + 30) && // col * 2
                    blackID.includes(blackID[i] + 45) && // col * 3
                    blackID.includes(blackID[i] + 60))   // col * 4
                    { alert('상하 검정 승리!'); return; }

                // 왼쪽 대각선
                if (blackID.includes(blackID[i] + 16) && // (col + 1) * 1
                    blackID.includes(blackID[i] + 32) && // (col + 1) * 2
                    blackID.includes(blackID[i] + 48) && // (col + 1) * 3
                    blackID.includes(blackID[i] + 64))   // (col + 1) * 4
                    { alert('대각선 검정 승리!'); return; }

                // 오른쪽 대각선
                if (blackID.includes(blackID[i] + 14) && // (col - 1) * 1
                    blackID.includes(blackID[i] + 28) && // (col - 1) * 2
                    blackID.includes(blackID[i] + 42) && // (col - 1) * 3
                    blackID.includes(blackID[i] + 56))   // (col - 1) * 4
                    { alert('대각선 검정 승리!'); return; }
            }
            for (let i = 0; i < whiteID.length; i++) {

                // 좌우
                if (whiteID.includes(whiteID[i] + 1) &&
                    whiteID.includes(whiteID[i] + 2) &&
                    whiteID.includes(whiteID[i] + 3) &&
                    whiteID.includes(whiteID[i] + 4)) 
                    { alert('좌우 흰색 승리!'); return; }

                // 상하
                if (whiteID.includes(whiteID[i] + 15) &&     // col
                    whiteID.includes(whiteID[i] + 30) && // col * 2
                    whiteID.includes(whiteID[i] + 45) && // col * 3
                    whiteID.includes(whiteID[i] + 60))   // col * 4
                    { alert('상하 흰색 승리!'); return; }

                // 왼쪽 대각선
                if (whiteID.includes(whiteID[i] + 16) && // (col + 1) * 1
                    whiteID.includes(whiteID[i] + 32) && // (col + 1) * 2
                    whiteID.includes(whiteID[i] + 48) && // (col + 1) * 3
                    whiteID.includes(whiteID[i] + 64))    // (col + 1) * 4
                    { alert('대각선 흰색 승리!'); return; }

                // 오른쪽 대각선
                if (whiteID.includes(whiteID[i] + 14) && // (col - 1) * 1
                    whiteID.includes(whiteID[i] + 28) && // (col - 1) * 2
                    whiteID.includes(whiteID[i] + 42) && // (col - 1) * 3
                    whiteID.includes(whiteID[i] + 56))   // (col - 1) * 4
                    { alert('대각선 흰색 승리!'); return; }
            } 
        })
    })
})

