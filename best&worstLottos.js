

function solution(lottos, win_nums) {
    var answer = [];
    
    
    
    let bestRankLottos = [...lottos];
    let worstRankLottos = [...lottos];
    let zeroIndex = 0;
    let searchStartZeroIndex = 0;
    for ( const win_num of win_nums ){
        if(bestRankLottos.indexOf(win_num) < 0){
            if(bestRankLottos.indexOf(0, searchStartZeroIndex) > -1){

                zeroIndex = bestRankLottos.indexOf(0, searchStartZeroIndex);
                bestRankLottos[zeroIndex] = win_num;
                searchStartZeroIndex++;
            }else{
                break;   
            }
        }
    }

    let BEST_thereIsLottoNumberCount = 0;
    let WORST_thereIsLottoNumberCount = 0;
    
    for ( const win_num of win_nums){
        if(bestRankLottos.indexOf(win_num) > -1){
            BEST_thereIsLottoNumberCount++;
        }
        if(worstRankLottos.indexOf(win_num) > -1){
            WORST_thereIsLottoNumberCount++;
        }
    }
    
    function getRank(rankLottos){
        let rank = 0;
        if(rankLottos === 6 ){
            rank = 1;
        }else if(rankLottos === 5){
            rank = 2;
        }else if(rankLottos === 4){
            rank = 3;
        }else if(rankLottos === 3){
            rank = 4;
        }else if(rankLottos === 2){
            rank = 5;
        }else{
            rank = 6;
        }
        return rank;
    }
    answer = [getRank(BEST_thereIsLottoNumberCount), getRank(WORST_thereIsLottoNumberCount) ];
    
    return answer;
}

console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]))