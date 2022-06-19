// function solution(progresses, speeds) {
//     var answer = [];
//     let durationDevelopmentArray = []
//     for( const [index, progress] of progresses.entries()){
//         let recentProgress = progress
//         let howManyDay = 0
//         while( recentProgress < 100){
//             recentProgress = recentProgress + speeds[index]
//             howManyDay = howManyDay + 1
//         }
//         durationDevelopmentArray.push(howManyDay);
//     }
//     let index = 0;
//     while(true){
//         let i = 0;
//         let j = 1;
//         while(durationDevelopmentArray[index] >= durationDevelopmentArray[index+j]){
//             console.log(durationDevelopmentArray[index], durationDevelopmentArray[index+j])
//             i++;
//             j++;
//         }
//         answer.push(j)
//         index = index + i;
//         index++;
//         if(index > durationDevelopmentArray.length-1){
//             break;
//         }
//     }
    
    
//     return answer;
// }


function solution(progresses, speeds) {
    var answer = [];
    while(progresses.length > 0){
        for( let i in speeds){
            progresses[i] += speeds[i];
        }
        let i = 0;
        while(progresses[0] >= 100){
            progresses.shift()
            speeds.shift()
            i++;
        }
        if(i > 0){
            answer.push(i);
        }
        
    }
    
    return answer;
}

console.log(solution(	[95, 90, 99, 90, 80, 99], [1, 1, 1, 1, 1, 1]))