export const AddTokenForm = function() {
    let url = ''

    return {
        view: function ({ attrs }) {
            return m("section", {class: "content page"}, [
                m("h2.content__heading", "Добавить новый токен"),
                m("form.form", {
                    onsubmit: function (e) {
                        e.preventDefault()
                        attrs.onCreate(url)
                    }
                }, [
                    m(".form__container", [
                        m("input.form__text[type=url] [placeholder=Название домена]", {
                            oninput: function (e) {
                                url = e.target.value
                            },
                        }),
                        m("button.submit-btn[type=submit]", "Добавить")
                    ])
                ]),
                m(m.route.Link, {
                    class: "link",
                    href: "/tokens",
                }, "Список токенов")
            ])
        }
    }
}