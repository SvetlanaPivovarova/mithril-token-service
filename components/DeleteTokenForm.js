export const DeleteTokenForm = function() {

    return {
        view: function ({ attrs }) {
            console.log(attrs)
            return m("section", {class: "content page"}, [
                m("h2.content__heading", "Вы точно хотите удалить данный токен для организации " + attrs.current.url + "?"),
                m("form.form", {
                    onsubmit: function (e) {
                        e.preventDefault()
                        attrs.onDelete(attrs.current._id)
                    }
                }, [
                    m(".form__buttons-container", [
                        m("button.submit-btn[type=submit]", "Да"),
                        m("button.submit-btn[type=button]", { onclick: function () {m.route.set("/tokens")}}, "Отмена")
                    ])
                ])
            ])
        }
    }
}