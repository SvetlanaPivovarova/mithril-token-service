export const TokenComponent = function () {

    return {
        view: function ({ attrs }) {
            const tokens = attrs.tokens ? attrs.tokens : []
            const error = attrs.error ? attrs.error : ""

            return m("section.content", [
                m("h1.content__heading", "Cервис хранения токенов"),
                m("ul.token-list__container", [
                    error?
                        m("p.token-list__message", error)
                        :
                    tokens.map((item) => {
                        return m("li.token-list__item", [
                            m("p.token-list__item-url", item.url),
                            m("p.token-list__item-token", item.token),
                            m("button.submit-btn", {onclick: () => {
                                attrs.confirmDeletion(item)
                                attrs.current = item
                            }}, "Удалить"),
                        ])
                    })


                ]),
            m(m.route.Link, {
                class: "link",
                href: "/add-token",
            }, "Добавить новый токен")
            ])
        },

        current: {},
        load: function (id) {
            return m.request({
                method: "GET",
                url: "" + id,
            })
                .then(function (res) {
                    User.current = res
                })
                .catch((error) => {
                    console.log(error)
                })
        },
    }
}