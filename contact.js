function submitData() {
    let name = document.getElementById("input-name").value;
    let email = document.getElementById("input-email").value;
    let phone = document.getElementById("input-phone").value;
    let subject = document.getElementById("input-subject").value;
    let message = document.getElementById("input-message").value;

    

    
    if (name === "") {
    return(alert('nama harus di sisi'))
    } else if (email === ""){
    return(alert('email harus di sisi'))
    } else if (phone === ""){
    return(alert('phone harus di sisi'))
    } else if (subject === ""){
    return(alert('subject harus di sisi'))
    } else if (message === ""){
    return(alert('message harus di sisi'))
    } else {
   
        let emailReceiver = "harisalfariz23@gmail.com";

        let kirim = document.createElement('a');
        kirim.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailReceiver}&su=${subject}&body=${message}`
        kirim.click()

        let data = {name, email, phone, subject, message};
        console.log(data)
    }

   
}