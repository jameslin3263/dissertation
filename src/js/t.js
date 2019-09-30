function insertionSort() {
    let unsortedArrVal = []
    let unsortedArr = []
    let arrDom = [...$('#digit')[0].children]
    
    arrDom.map(idx => unsortedArr.push(idx))
    
    for (let i = 0; i < 8; i++) {
        let arr = [arrDom[i].textContent, i]
        unsortedArrVal.push(arr)
    }
    var stepObj = { 
        count: 0, 
        arr: [],
        current: 0,
        last: 0,
        complete: 0
    }
    stepObj.count = count
    stepObj.arr = Object.assign({}, unsortedArrVal)
    stepObj.current = unsortedArrVal[1]
    stepObj.last = unsortedArrVal[0]
    stepObj.complete = 1
    stepObj.j = 1
    
    stepArr.push(stepObj)
    count++

    for (let i = 1; i < unsortedArr.length; i++) {
        
        for (let j = i; j > 0; j--) {  
            let val = unsortedArrVal[j]
            let tempVal = unsortedArr[j]
            var stepObj = { 
                    count: 0, 
                    arr: [],
                    current: 0,
                    last: 0,
                    complete: 0,
                    last:'',
                    now: ''
                }
            if (parseInt(unsortedArrVal[j-1][0]) < parseInt(val[0])) {
                stepObj.count = count
                stepObj.arr = Object.assign({}, unsortedArrVal)
                stepObj.current = unsortedArrVal[j]
                stepObj.last = unsortedArrVal[j-1]
                stepObj.complete = i
                stepObj.j = j
                stepObj.last = 'green'
                stepObj.now = 'green'

                stepArr.push(stepObj)

                count++
                break;
            } else {

                val = unsortedArrVal[j]
                unsortedArrVal[j] = unsortedArrVal[j-1]                            
                unsortedArrVal[j-1] = val
                
                stepObj.count = count
                stepObj.arr = Object.assign({}, unsortedArrVal)
                stepObj.current = unsortedArrVal[j]
                stepObj.last = unsortedArrVal[j-1]
                stepObj.complete = i
                stepObj.j = j
                stepObj.last = 'green'
                stepObj.now = 'green'
                
                stepArr.push(stepObj)
                count++   
            }
        }
    }
    return stepArr
}