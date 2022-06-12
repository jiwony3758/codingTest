function solution(id_list, report, k) {
    var answer = [];

    const reportList = {}
    for(const [index, id] of id_list.entries()){
        answer[index] = 0
        reportList[id] = []
    }
    console.log(reportList)
    for(const reportContent of report){
        const [reportId, reportedId] = reportContent.split(" ")
        if(!reportList[reportedId].includes(reportId)){
            reportList[reportedId].push(reportId)
        }
    }

    for(const reportedId in reportList){
        if(reportList[reportedId].length >= k){
            for(const reportId of reportList[reportedId]){
                answer[id_list.indexOf(reportId)]++
            }
        }
    }

    return answer;
}

console.log(solution(
    ["muzi", "frodo", "apeach", "neo"], ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"], 2
))