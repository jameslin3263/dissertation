function formater(domEle, prop, color) {
    if (prop == border) {
        count++
        sessionStorage.setItem('count', count)
                if (play == true) {
            $(domEle)[0].style.borderColor = color       
        }
    } else if (prop == bgc) {
        count++
        sessionStorage.setItem('count', count)
                if (play == true) {
            $(domEle)[0].style.backgroundColor = color
        }
    }
    
}
async function insSort() {
 
    if (play == false) play = true 
    
    if (play == true) {

        sessionStorage.setItem('count', count)

        if (!$('.num-card')[0]) {
            alert('Please generate the array first.')
        } else if ($('.num-card')[0]) {

                let unsortedArrVal = []
                let unsortedArr = []
                let arrDom = [...$('#digit')[0].children]
                
                arrDom.map(idx => unsortedArr.push(idx))
                
                for (let i = 0; i < 8; i++) {
                    let arr = [arrDom[i].textContent, i]
                    unsortedArrVal.push(arr)
                }

            for (let i = 1; i < unsortedArr.length; i++) {
                // $('#outer-loop')[0].style.backgroundColor = 'red'
                if (play == true) {
                    formater('#outer-loop', bgc, 'red')
                } else if(play == false) {
                    if (!generateArr){
                        while(play == false) {
                            await sleep(1000)
                        }
                    } else if(generateArr) {
                        console.log(1)
                        return;
                    }
                } else if (generateArr) {
                    console.log(2)
                    return;
                    
                }
                await sleep(1000);
                // $('#outer-loop')[0].style.backgroundColor = '#F0AD4E'
                if (play == true) {
                    formater('#outer-loop', bgc, '#F0AD4E')
                } else if(play == false){
                    if (!generateArr){

                        while(play == false) {
                            await sleep(1000)
                        }
                    } else if(generateArr) {
                        console.log(1)
                        return;
                    }
                } else if (generateArr) {
                    console.log(2)
                    return;
                    
                }
                // $('#create-value')[0].style.backgroundColor = 'red'
                if (play == true) {
                    formater('#create-value', bgc, 'red')
                } else if(play == false){
                    if (!generateArr){

                        while(play == false) {
                            await sleep(1000)
                        }
                    } else if(generateArr) {
                        console.log(1)
                        return;
                    }
                } else if (generateArr) {
                    console.log(2)
                    return;
                }
                // $('#create-j')[0].style.backgroundColor = 'red'
                if (play == true) {
                    formater('#create-j', bgc, 'red')
                } else if(play == false){
                    if (!generateArr){

                        while(play == false) {
                            await sleep(1000)
                        }
                    } else if(generateArr) {
                        console.log(1)
                        return;
                    }
                } else if (generateArr) {
                    console.log(2)
                    return;
                }
                
                for (let j = i; j > 0; j--) {
                    let val = unsortedArrVal[j]
                    $('#temp-val')[0].innerHTML = 'Value: ' + `${val[0]}`   
                    await sleep(1000);
                    // $('#create-value')[0].style.backgroundColor = '#F0AD4E'
                    if (play == true) {
                        formater('#create-value', bgc, '#F0AD4E')
                    } else if(play == false){
                        if (!generateArr){
    
                            while(play == false) {
                                await sleep(1000)
                            }
                        } else if(generateArr) {
                            console.log(1)
                            return;
                        }
                    } else if (generateArr) {
                        console.log(2)
                        return;
                    }
                    // $('#create-j')[0].style.backgroundColor = '#F0AD4E' 
                    if (play == true) {
                        formater('#create-j', bgc, '#F0AD4E')
                    } else if(play == false){
                        if (!generateArr){
    
                            while(play == false) {
                                await sleep(1000)
                            }
                        } else if(generateArr) {
                            console.log(1)
                            return;
                        }
                    } else if (generateArr) {
                        console.log(2)
                        return;
                    }
                    
                    await sleep(1000);
                    
                    // $('#inner-loop')[0].style.backgroundColor = 'red'
                    if (play == true) {
                        formater('#inner-loop', bgc, 'red')
                    } else if(play == false){
                        if (!generateArr){
    
                            while(play==false) {
                                await sleep(1000)
                            }
                        } else if(generateArr) {
                            console.log(1)
                            return;
                        }
                    } else if (generateArr) {
                        console.log(2)
                        return;
                    }
                    await sleep(1000);
                    // $('#inner-loop')[0].style.backgroundColor = '#F0AD4E'
                    if (play == true) {
                        formater('#inner-loop', bgc, '#F0AD4E')
                    } else if(play == false){
                        if (!generateArr){
    
                            while(play==false) {
                                await sleep(1000)
                            }
                        } else if(generateArr) {
                            console.log(1)
                            return;
                        }
                    } else if (generateArr) {
                        console.log(2)
                        return;
                    }
                    // $('#compare-value')[0].style.backgroundColor = 'red'
                    if (play == true) {
                        formater('#compare-value', bgc, 'red')
                    } else if(play == false){
                        if (!generateArr){
    
                            while(play==false) {
                                await sleep(1000)
                            }
                        } else if(generateArr) {
                            console.log(1)
                            return;
                        }
                    } else if (generateArr) {
                        console.log(2)
                        return;
                    }
                    // $(`#${unsortedArrVal[j-1][1]}`)[0].style.borderColor = 'red'
                    if (play == true) {
                        formater(`#${unsortedArrVal[j-1][1]}`, border, 'red')
                    } else if(play == false){
                        if (!generateArr){
    
                            while(play==false) {
                                await sleep(1000)
                            }
                        } else if(generateArr) {
                            console.log(1)
                            return;
                        }
                    } else if (generateArr) {
                        console.log(2)
                        return;
                    }
                    // $(`#${unsortedArrVal[j][1]}`)[0].style.borderColor = 'red'
                    if (play == true) {
                        formater(`#${unsortedArrVal[j][1]}`, border, 'red')
                    } else if(play == false){
                        if (!generateArr){
    
                            while(play==false) {
                                await sleep(1000)
                            }
                        } else if(generateArr) {
                            console.log(1)
                            return;
                        }
                    } else if (generateArr) {
                        console.log(2)
                        return;
                    }
                    
                    await sleep(1000);
                    // $('#compare-value')[0].style.backgroundColor = '#F0AD4E'
                    if (play == true) {
                        formater('#compare-value', bgc, '#F0AD4E')
                    } else if(play == false){
                        if (!generateArr){
    
                            while(play==false) {
                                await sleep(1000)
                            }
                        } else if(generateArr) {
                            console.log(1)
                            return;
                        }
                    } else if (generateArr) {
                        console.log(2)
                        return;
                    }
                    if (parseInt(unsortedArrVal[j-1][0]) < parseInt(val[0])) {
                        // $(`#${unsortedArrVal[j-1][1]}`)[0].style.borderColor = 'green'
                        if (play == true) {
                            formater(`#${unsortedArrVal[j-1][1]}`, border, 'green')
                        } else if(play == false){
                            if (!generateArr){
        
                                while(play==false) {
                                    await sleep(1000)
                                }
                            } else if(generateArr) {
                                console.log(1)
                                return;
                            }
                        } else if (generateArr) {
                            console.log(2)
                            return;
                        }
                        // $(`#${unsortedArrVal[j][1]}`)[0].style.borderColor = 'green'
                        if (play == true) {
                            formater(`#${unsortedArrVal[j][1]}`, border, 'green')
                        } else if(play == false){
                            if (!generateArr){
        
                                while(play==false) {
                                    await sleep(1000)
                                }
                            } else if(generateArr) {
                                console.log(1)
                                return;
                            }
                        } else if (generateArr) {
                            console.log(2)
                            return;
                        }
                        // $('#finish-loop')[0].style.backgroundColor = 'red'
                        if (play == true) {
                            formater('#finish-loop', bgc, 'red')
                        } else if(play == false){
                            if (!generateArr){
        
                                while(play==false) {
                                    await sleep(1000)
                                }
                            } else if(generateArr) {
                                console.log(1)
                                return;
                            }
                        } else if (generateArr) {
                            console.log(2)
                            return;
                        }
                        await sleep(1000);
                        // $('#finish-loop')[0].style.backgroundColor = '#F0AD4E'
                        if (play == true) {
                            formater('#finish-loop', bgc, '#F0AD4E')
                        } else if(play == false){
                            if (!generateArr){
        
                                while(play==false) {
                                    await sleep(1000)
                                }
                            } else if(generateArr) {
                                console.log(1)
                                return;
                            }
                        } else if (generateArr) {
                            console.log(2)
                            return;
                        }
                        
                    } else {
                        // $('#swap-index')[0].style.backgroundColor = 'red'
                        if (play == true) {
                            formater('#swap-index', bgc, 'red')
                        } else if(play == false){
                            if (!generateArr){
        
                                while(play==false) {
                                    await sleep(1000)
                                }
                            } else if(generateArr) {
                                console.log(1)
                                return;
                            }
                        } else if (generateArr) {
                            console.log(2)
                            return;
                        }
                    
                        if (play == true) {
                            count++
                            sessionStorage.setItem('count',count)
                                    // if(count == sessionStorage.getItem('count')) {

                                $(`#${unsortedArrVal[j][1]}`).animate({'top':'-=100px'}, 400)
                            // }
                        } else if(play == false){
                            if (!generateArr){
        
                                while(play==false) {
                                    await sleep(1000)
                                }
                            } else if(generateArr) {
                                console.log(1)
                                return;
                            }
                        } else if (generateArr) {
                            console.log(2)
                            return;
                        }
                        if (play == true) {
                            count++
                            sessionStorage.setItem('count',count)
                                    // if(count == sessionStorage.getItem('count')) {
                                $(`#${unsortedArrVal[j-1][1]}`).animate({'left':`+=90px`}, 400)
                            // }
                        } else if(play == false){
                            if (!generateArr){
        
                                while(play==false) {
                                    await sleep(1000)
                                }
                            } else if(generateArr) {
                                console.log(1)
                                return;
                            }
                        } else if (generateArr) {
                            console.log(2)
                            return;
                        }
                        if (play == true){
                            count++
                            sessionStorage.setItem('count',count)
                                    // if(count == sessionStorage.getItem('count')) {
                                $(`#${unsortedArrVal[j][1]}`).animate({'left':`-=90px`}, 400)
                            // }
                        } else if(play == false){
                            if (!generateArr){
        
                                while(play==false) {
                                    await sleep(1000)
                                }
                            } else if(generateArr) {
                                console.log(1)
                                return;
                            }
                        } else if (generateArr) {
                            console.log(2)
                            return;
                        }
                        if (play == true) {
                            count++
                            sessionStorage.setItem('count',count)
                                    // if(count == sessionStorage.getItem('count')) {
                                $(`#${unsortedArrVal[j][1]}`).animate({'top':'+=100px'}, 400)
                            // }    
                        } else if(play == false){
                            if (!generateArr){
        
                                while(play==false) {
                                    await sleep(1000)
                                }
                            } else if(generateArr) {
                                console.log(1)
                                return;
                            }
                        } else if (generateArr) {
                            console.log(2)
                            return;
                        }

                        await sleep(2000);
                        // $('#swap-index')[0].style.backgroundColor = '#F0AD4E'
                        if (play == true){
                            formater('#swap-index', bgc, '#F0AD4E')
                        } else if(play == false){
                            if (!generateArr){
        
                                while(play==false) {
                                    await sleep(1000)
                                }
                            } else if(generateArr) {
                                console.log(1)
                                return;
                            }
                        } else if (generateArr) {
                            console.log(2)
                            return;
                        }
                        // $('#swap-value')[0].style.backgroundColor = 'red'
                        if(play == true){
                            formater('#swap-value', bgc, 'red')
                        } else if(play == false){
                            if (!generateArr){
        
                                while(play==false) {
                                    await sleep(1000)
                                }
                            } else if(generateArr) {
                                console.log(1)
                                return;
                            }
                        } else if (generateArr) {
                            console.log(2)
                            return;
                        }
                        val = unsortedArrVal[j]
                        unsortedArrVal[j] = unsortedArrVal[j-1]                            
                        unsortedArrVal[j-1] = val
                        // $(`#${unsortedArrVal[j][1]}`)[0].style.borderColor = 'green'
                        if (play ==true) {
                            formater(`#${unsortedArrVal[j][1]}`, border, 'green')
                        } else if(play == false){
                            if (!generateArr){
        
                                while(play==false) {
                                    await sleep(1000)
                                }
                            } else if(generateArr) {
                                console.log(1)
                                return;
                            }
                        } else if (generateArr) {
                            console.log(2)
                            return;
                        }
                        // $(`#${unsortedArrVal[j-1][1]}`)[0].style.borderColor = 'green'
                        if(play == true) {
                            formater(`#${unsortedArrVal[j-1][1]}`, border, 'green')
                        } else if(play == false){
                            if (!generateArr){
        
                                while(play==false) {
                                    await sleep(1000)
                                }
                            } else if(generateArr) {
                                console.log(1)
                                return;
                            }
                        } else if (generateArr) {
                            console.log(2)
                            return;
                        }
                        await sleep(2000);
                        // $('#swap-value')[0].style.backgroundColor = '#F0AD4E'
                        if(play ==true) {
                            formater('#swap-value', bgc, '#F0AD4E')
                        } else if(play == false){
                            if (!generateArr){
        
                                while(play==false) {
                                    await sleep(1000)
                                }
                            } else if(generateArr) {
                                console.log(1)
                                return;
                            }
                        } else if (generateArr) {
                            console.log(2)
                            return;
                        }
                    }
                }
            }
            // $('#end-loop')[0].style.backgroundColor = 'red'
            formater('#end-loop', bgc, 'red')
            await sleep(2000);
            // $('#end-loop')[0].style.backgroundColor = '#F0AD4E'
            formater('#end-loop', bgc, '#F0AD4E')
        }
        play = false
        // count = 0
        // sessionStorage.setItem('count', count)
    } else if (play == false) {
        console.log(3)
        return false;
    }
}