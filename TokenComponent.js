export const TokenComponent = function () {

    return {
        view: function ({ attrs }) {
            const tokens = attrs.tokens ? attrs.tokens : []

            return m("section.content", [
                m("h1.content__heading", "Cервис хранения токенов"),
                m("ul.token-list__container", [
                    tokens.map((item) => {
                        return m("li.token-list__item", [
                            m("p.token-list__item-url", item.url),
                            m("p.token-list__item-token",
                                { onclick: () => attrs.onTokenDelete(item) },
                                item.token
                            ),
                            m("button.submit-btn", {onclick: function () {console.log("Delete?", item.url)}}, "Удалить"),
                        ])
                    })
                ]),
            ])
        }
    }
}