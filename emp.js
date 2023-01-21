function addemployee() {
    //access value of employee from inputs.
    ename = ename.value
    eid = eid.value
    edesig = edesig.value
    esal = esal.value
    exp = exp.value

    //store in local storage
    if (eid in localStorage){
        alert("Employee already present")
    }
    else {
        //store one employees data in a single storage
        employee = {"ename":ename, "eid":eid, "edesig":edesig, "esal":esal, "exp":exp}
        localStorage.setItem(eid,JSON.stringify(employee))
                                        // converts js object into JSON.
        alert ("employee added succesfully")
    }
    window.location = 'home.html'
}

function display_data() {
    emp_id = s1.value
    if (emp_id in localStorage){
        emp = JSON.parse(localStorage.getItem(emp_id))
        console.log(emp);
        result.innerHTML = `<p>employee name : <strong>${emp.ename}</strong></p>
        <p>employee id : <strong>${emp.eid}</strong></p>
        <p>employee designation : <strong>${emp.edesig}</strong></p>
        <p>employee salary : <strong>${emp.esal}</strong></p>
        <p>employee experience : <strong>${emp.exp}</strong></p>`
    }
    else{
        alert("Employee not present")
        result.innerHTML = ""
    }
}

//bank sign up

//acct no
//username
//pass

//login

//acct no
//pass

// homepage