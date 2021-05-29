const validateFields = (form, fieldsArray) => {
    fieldsArray.forEach(field => {
        if (field.val().trim() === "") {
            field.addClass("input--error");
        }
    });

    const errorFields = form.find(".input--error");

    return errorFields.length === 0;
}

$('.form').submit(e => {
    e.preventDefault();

    const form = $(e.currentTarget);
    const name = form.find("[name='name']");
    const phone = form.find("[name='phone']");
    const comment = form.find("[name='comment']");
    const to = form.find("[name='to']");

    const modal = $("#modal");
    const content = modal.find(".modal__content");

    const isValid = validateFields(form, [name, phone, comment, to]);

    if (isValid) {
        $.ajax({
            url: "https://webdev-api.loftschool.com/sendmail",
            method: "post",
            data: {
                name: name.val(),
                phone: phone.val(),
                comment: comment.val(),
                to: to.val(),
            },

            success: data => {
                content.text(data.message)
                $.fancybox.open({
                    src: "#modal",
                    type: "inline"
                });
                form.trigger("reset");
            },
            error: data => {
                const message = data.responseJSON.message;
                content.text(message);
                $.fancybox.open({
                    src: "#modal",
                    type: "inline"
                });
                
            }
        });
    }
});

$(".app-submit-btn").click(e => {
    e.preventDefault();
    $.fancybox.close();
});