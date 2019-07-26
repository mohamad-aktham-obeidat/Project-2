{
    /* Sign Up Instance Variables*/
    var nameSignInput = $("#name-in");
    var emailSignInput = $("#email-signup-in");
    var passwordSignInput = $("#pass-signup-in");
    var phoneSignInput = $("#phone-in");
    var signUpBtn = $("#sign-up");


    /* Log In Instance Variables*/
    var emailInput = $("#email-in");
    var passwordInput = $("#pass-in");
    var loginBtn = $("#login-btn");
    var signUpBtn = $("#sign-up");


    /* Users Data */
    var users = [{
        name: "Mohamad",
        email: "mohamadaktham7@gmail.com",
        password: "123",
        pgone: 0777753111
    }]


    $(document).ready(function () {

        /* Sign Up Part*/

        nameSignInput.focus(function () {
            nameSignInput.animate({
                width: '100%'
            })
        })

        nameSignInput.focusout(function () {
            nameSignInput.animate({
                width: '80%'
            })
        })

        emailSignInput.focus(function () {
            emailSignInput.animate({
                width: '100%'
            })
        })

        emailSignInput.focusout(function () {
            emailSignInput.animate({
                width: '80%'
            })
        })

        passwordSignInput.focus(function () {
            passwordSignInput.animate({
                width: '100%'
            })
        })

        passwordSignInput.focusout(function () {
            passwordSignInput.animate({
                width: '80%'
            })
        })

        phoneSignInput.focus(function () {
            phoneSignInput.animate({
                width: '100%'
            })
        })
        
        phoneSignInput.focusout(function () {
            phoneSignInput.animate({
                width: '80%'
            })
        })






        /* Log In Part*/
        //Animate Email Input Width
        emailInput.focus(function () {
            emailInput.animate({
                width: '100%'
            })

        })

        emailInput.focusout(function () {
            emailInput.animate({
                width: '80%'
            })
        })

        //Animate Password Input Width
        passwordInput.focus(function () {
            passwordInput.animate({
                width: '100%'
            })
        })

        passwordInput.focusout(function () {
            passwordInput.animate({
                width: '80%'
            })
        })

        loginBtn.click(function (e) {
            e.preventDefault();

            users.forEach(element => {

                if (emailInput.val() === element.email && passwordInput.val() === element.password) {
                    window.location.href = 'profile.html' + emailInput.val() + passwordInput.val();
                }

                if (emailInput.val() !== element.email) {
                    emailInput.css('border', '2px red solid')
                    $('.email-field').addClass('error')
                    $('.wrong-email').attr('hidden', false);
                }

                if (passwordInput.val() !== element.password) {
                    passwordInput.css('border', '2px red solid')
                    $('.password-field').addClass('error')
                    $('.wrong-password').attr('hidden', false);
                }
            })

            if (emailInput.val() === '') {
                emailInput.css('border', '2px red solid')
                $('.email-field').addClass('error')
                $('.wrong-email').attr('hidden', false);
            }

            if (passwordInput.val() === '') {
                passwordInput.css('border', '2px red solid')
                $('.password-field').addClass('error')
                $('.wrong-password').attr('hidden', false);
            }
        })


        emailInput.keyup(function () {
            emailInput.css('border', '2px solid rgba(37, 46, 170, 0.787)');
            $('.email-field').removeClass('error');
            $('.wrong-email').attr('hidden', true);
        })

        passwordInput.keyup(function () {
            passwordInput.css('border', '2px solid rgba(37, 46, 170, 0.787)');
            $('.password-field').removeClass('error');
            $('.wrong-password').attr('hidden', true);
        })

    })
}