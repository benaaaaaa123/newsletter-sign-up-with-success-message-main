let txt = "Wprowadziłeś złego maila";
let txt1 = "Wprowadziłeś poprawnego maila";
let val1 = document.getElementById("val");
let mail = document.getElementById("mailx");
let butt = document.getElementById("buttonx");

let kont1 = document.getElementById("testx")
let kont2 = document.getElementById("testx2")

let koniec2 = document.getElementById("testowe");

let butt2 = document.getElementById("buttonx2");

function sprawdzEmail(email) {
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

butt.addEventListener("click", function () {
    let wprowadzonyEmail = mail.value;

    if (sprawdzEmail(wprowadzonyEmail)) {
        kont1.style.display = "none";
        kont2.style.display = "flex";;
        koniec2.innerHTML = wprowadzonyEmail;
    } else { //zle
        val1.style.display = "block";
        mail.classList.remove("inp");
        mail.classList.add("inp1");
    }
})

butt2.addEventListener("click", function () {
    kont1.style.display = "flex";
    kont2.style.display = "none";
    mail.value = null;

    val1.style.display = "none";
    mail.classList.remove("inp1");
    mail.classList.add("inp");
})