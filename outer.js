$(document).ready(function(){
    $(".hide").click(function(){
      $("#tab").hide();
    });
    $(".show").click(function(){
        $("#tab").show();
      });
    });


      function load(){
        //load() method attaches an event handler to the load event.
        console.log('window Loaded....');
        
       fetch(" https://jsonplaceholder.typicode.com/users")
       //help to starts the process of getting a resource from a server.
        //fetch("new.js")
        .then(result => result.json())
        //.then here we wait for the function to pass.
        .then(json => {
          console.log(json)
          //to display the json data.
          show(json)
        }) .catch(err=>{
          //for alert
  console.log(err);
  alert("your api is wrong")
        })

      }
      function show(employees){
        console.log('my data',employees)
        //console for ouput the data of employees
        let table=document.getElementById('tab');
        console.log(table)
        for(let i=0; i<employees.length; i++){
          let obj=employees[i];
          console.log(obj);
      

          let row=document.createElement('tr');

      
          let username=document.createElement('td');
          let name=document.createElement('td');
          let address=document.createElement('td');
          let email=document.createElement('td');
          
console.log(username);
        username.innerHTML=obj.username
        console.log(username);
        name.innerHTML=obj.name
          address.innerHTML=obj.address
          email.innerHTML=obj.email


          row.appendChild(username)
          //.appendchild  perform the same task.
          row.appendChild(name)
          row.appendChild(address)
          row.appendChild(email)
          tab.appendChild(row)
          //table.append is used to show each row in table. 


          
        }
        

      }
      window.onload=load

      