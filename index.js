let upload = document.getElementById('upload');

upload.addEventListener('change', () => {

let frm = new FileReader ();

frm.readAsText(upload.files[0]);

frm.onload = function () {

let arr = frm.result.split(/\r?\n|\n/).map(e => {

return e.split(',');

});

Window.valNo = 0;

let invalNo = 0;

Window.valMail = [];

arr.forEach(e => {

let em = String(e);

let m = e.map(e =>{

return `<td>${e}</td>`;

})

let crEl = document.createElement("tr");

crEl.innerHTML = m;

if (em != "") {

if (em.charAt(em.length - 4) == '.') {

document.querySelector("table#val").appendChild(crEl);

Window.valMail.push(em);

Window.valNo = Window.valNo + 1;

return false;

}

else if (em.charAt(em.length - 3) == '.') {

document.querySelector("table#val").appendChild(crEl);

Window.valMail.push(em);

Window.valNo = Window.valNo + 1;

return false;

}

else {

document.querySelector("table#inval").appendChild(crEl);

invalNo = invalNo + 1;

return false;


}

}


});

document.querySelector('#valCount').innerHTML = Window.valNo;

document.querySelector('#invalCount').innerHTML = invalNo;

};

});


//sending emails


function emailSend() {

Email.send({

Host: "smtp.elasticemail.com",

Username: "dubeyumang1@gmail.com",

Password: "C0A8060F2D274CA9CB83F15E0CFD90674167",
To: "akhileshdubey0202@gmail.com",

From: "akhileshdubey0202@gmail.com",

Subject: document.querySelector('#subject').value,

Body: document.getElementById('mesg').value


}).then(

message => alert(Window.valNo + "mails has been sent successfully, press" + message + " to continue.")

);

console.log(document.getElementById('mesg').value);

console.log(document.getElementById('mesg').innerHTML);

console.log(document.getElementById('mesg').innerHTML);

}
