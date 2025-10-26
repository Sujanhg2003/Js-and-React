const form = document.getElementById("registrationForm");

            form.addEventListener('submit', function(e){
                e.preventDefault();

                if(!form.checkValidity()){
                    form.classList.add('was-validated');
                    return;
                }

                const name = document.getElementById('name').value.trim();
                const email = document.getElementById('email').value.trim();
                const password = document.getElementById('password').value;
                const gender = document.getElementById('gender').value;

                const user = { name, email, password, gender };

                let users = JSON.parse(localStorage.getItem('users')) || [];
                users.push(user);

                localStorage.setItem('users', JSON.stringify(users));

                alert("Registration successfull...")
                form.reset();
                form.classList.remove('was-validated');

            });