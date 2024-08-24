

let form = document.querySelector(".form")
let tbody = document.querySelector("#tbody")


let data = []
// let count = 1


function LoadData(){
    let store = JSON.parse(localStorage.getItem("todos"))
    if(store){
        data  = store  
    }
    showdata(data)
}

function saveData(){
    localStorage.setItem("todos" , JSON.stringify(data))
}


function hand(event){
    event.preventDefault()
    let EmployName = event.target[0].value
    let EmployId = parseFloat(event.target[1].value)
    let Department = event.target[2].value
    let Experience = (event.target[3].value)
    let Email = event.target[4].value
    let MobileNo = parseFloat(event.target[5].value)


  if (!(EmployName||EmployId||Department||Experience||Email||MobileNo)){
             alert('fill the valid details')
             return
  }

  if(!Email.includes("@gmail")||!Email.endsWith(".com")){
    alert("please enter a valid email address")
    return;
  }
   
    let obj = {
        id : Math.random().toString(),
        EmployName : EmployName,
        EmployId : EmployId,
        Department:Department,
        Experience : Experience,
        Email : Email,
        MobileNo : MobileNo
    }

    data.push(obj)
    
    showdata(data)
  
   event.preventDefault();
   event.target[0].value = ""
   event.target[1].value = ""
   event.target[2].value = ""
   event.target[3].value = ""
   event.target[4].value = ""
   event.target[5].value = ""
}

 function showdata(data){
    tbody.innerText = ""
     data.forEach(function(ele , i){
        
        let tr = document.createElement("tr")

        let td1 = document.createElement("td")
        td1.innerText = i+1

        let td2 = document.createElement("td")
        td2.innerText = ele.EmployName

        let td3 = document.createElement("td")
        td3.innerText = ele.EmployId

        let td4 = document.createElement("td")
        td4.innerText = ele.Department

        let td5 = document.createElement("td")
          td5.innerText = ele.Experience

        let td6 = document.createElement("td")
        td6.innerText = ele.Email

        let td7 = document.createElement("td")
        td7.innerText = ele.MobileNo

        let td8 = document.createElement("td")
        if(ele.Experience>5){
            td8.innerText = "senior"
        }
        else if(ele.Experience<=5 && ele.Experience >=2){
             td8.innerText = "Junior"
        }
        else{
            td8.innerText = "Traine"
        }
        
        let td9 = document.createElement("td")
       let  deletebtn = document.createElement("button")
       deletebtn.innerText = "Delete"
       deletebtn.style.backgroundColor = "red"
       td9.append(deletebtn)
       deletebtn.addEventListener("click" , function(){
        handdelete(ele.id)
       })


       tr.append(td1 ,td2 , td3 , td4 , td5 , td6, td7, td8 ,td9)
       tbody.append(tr)
     });
 }
 


 function handdelete(id){
    data = data.filter(function(ele){
        return ele.id !==id
    })
    saveData()
    showdata(data)
 }
LoadData()

form.addEventListener("submit" , function(event){
    hand(event)
})







