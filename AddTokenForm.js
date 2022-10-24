export const AddTokenForm = function({ attrs }) {
    let url = ''

    return {
        view: function () {
            return m("section.content", [
                m("h2.content__heading", "Добавить новый токен"),
                m("form.form", {
                    onsubmit: function (e) {
                        e.preventDefault()
                        attrs.createToken(url)
                    }
                }, [
                    m(".form__container", [
                        m("input.form__text[type=url] [placeholder=Название домена]", {
                            oninput: function (e) {
                                url = e.target.value
                                console.log('url', url)
                            },
                            //value: {}
                        }),
                        m("button.submit-btn[type=submit]", "Добавить")
                    ])
                ])
            ])
        }
    }
}