function logar(){

    const user = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    }

    $.post("/auth/authenticate", user, (data) => {
        const error = data.error

        $("#FeedbackError").show()

        if (error === undefined) {
            setCookie("userId", data.user._id, 1)
            setCookie("token", "Bearer " + data.token, 1)
            $("#FeedbackLogado").show()

            window.location.replace("../index.html");
        }
    })


}

(function (){

    $("#FeedbackError").hide()
    $("#FeedbackLogado").hide()

}())