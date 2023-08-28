var clutter = ""
function encryption(){
    document.querySelector("#encrypt-btn").addEventListener("click", function(){
        var input = document.getElementById("txtmsg").value
        console.log(input)
        var pass = document.getElementById("pass").value
        console.log(pass)


        const str = input.split("")
        console.log(str)


        str.forEach(element => {
            clutter += `&#128${element.charCodeAt()}`
        })
        console.log(clutter)
        document.querySelector("#result").innerHTML = clutter

        var dataarr = []
        if(JSON.parse(localStorage.getItem('data1'))){
            dataarr = JSON.parse(localStorage.getItem('data1'))
            dataarr.push({"pass": pass, "input": input, "clutter": clutter})
        } 
        else{
            dataarr = [{"pass": pass, "input": input, "clutter": clutter}]
        }
        
        localStorage.setItem("data1", JSON.stringify(dataarr))

        
    })
}

encryption()

function decryption(){
    document.querySelector("#decrypt-btn").addEventListener("click", function(){
        var clutter2 = ""
        var input2 = document.querySelector("#emojimsg").value

        var finalpassword = document.querySelector("#finalpassword").value

        var user = JSON.parse(localStorage.getItem('data1'))

        var str2 = input2.split(" ")
        str2.forEach(element =>{
            clutter2 += `&#${(element.codePointAt(0))}`
        })
        var found;
        for(let i of user){
            if(i.clutter === clutter2 && i.pass === finalpassword){
                found = i;
                break;
            }
        }
        if(found){
            document.querySelector("#result").style.display = "block"
            document.querySelector("#result").style.color = "#eee"
            document.querySelector("#result").innerHTML = found.input;
        }else{
            document.querySelector("#result").style.display = "block"
            document.querySelector("#result").style.color = "red"
            document.querySelector("#result").innerHTML = "wrong password"
        }
        
    })
}

decryption()

function btnClick(){
    document.querySelector("#dec-btn").addEventListener("click",function(){
        document.querySelector("#decryption").style.display = "block"
        document.querySelector("#encryption").style.display = "none"
        document.querySelector("#dec-btn").style.backgroundColor = "#333"
        document.querySelector("#enc-btn").style.backgroundColor = "#222"
        document.querySelector("#main> h1 span img").style.rotate ="270deg"
        document.querySelector("#result").style.display = "none"
    })
    document.querySelector("#enc-btn").addEventListener("click",function(){
        document.querySelector("#encryption").style.display = "block"
        document.querySelector("#decryption").style.display = "none"
        document.querySelector("#enc-btn").style.backgroundColor = "#333"
        document.querySelector("#dec-btn").style.backgroundColor = "#222"
        document.querySelector("#main> h1 span img").style.rotate ="90deg"
        document.querySelector("#result").style.display = "none"
    })
    document.querySelector("#encrypt-btn").addEventListener("click", function(){
        document.querySelector("#result").style.display = "block"
    })

    document.querySelector("#decrypt-btn").addEventListener("click", function(){
        document.querySelector("#result").style.display = "block"
    })
}



btnClick()

