

function tekshir1() {
            let m = document.getElementById('manzil').value.trim();
            let t = document.getElementById('telefon').value.trim();
            if (m === 'Andijon' && t === '777') {
                document.body.style.backgroundColor = 'blue'; // ko'k rang
            } else {
                document.body.style.backgroundColor = 'orangered'; // olov rang
            }
        }

        function tekshir2() {
            let l = document.getElementById('login2').value;
            let p = document.getElementById('parol2').value;
            if (l === p && l !== "") {
                document.body.style.backgroundColor = 'green'; // yashil
            } else {
                document.body.style.backgroundColor = 'red'; // qizarsin
            }
        }

      
        function tekshir3() {
            let lInput = document.getElementById('login3');
            let pInput = document.getElementById('parol3');
            
            if (lInput.value === 'admin' && pInput.value === '123') {
                lInput.classList.add('success-border');
                lInput.classList.remove('error-border');
                pInput.classList.add('success-border');
                pInput.classList.remove('error-border');
            } else {
                lInput.classList.add('error-border');
                lInput.classList.remove('success-border');
                pInput.classList.add('error-border');
                pInput.classList.remove('success-border');
            }
        }




