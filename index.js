import { TokenComponent } from "./components/TokenComponent.js";
import { API_URL } from "./utils/constances.js";
import { AddTokenForm } from "./components/AddTokenForm.js";
import { DeleteTokenForm } from "./components/DeleteTokenForm.js";

const model = {
    tokens: [],
    error: "",
    currentToken: {}
}

const StatePopup = {
    isOpen: false,
    message: 'Hello',
    openDialog: function(){
        StatePopup.isOpen = true;
    },
    closeDialog: function(){
        StatePopup.isOpen = false;
        StatePopup.message = ""
    }
}

const InfoTooltip = {
    oncreate : function(vnode){
        window.onclick = function(event) {
            if (event.target === vnode.dom) {
                StatePopup.closeDialog();
                m.redraw();
            }
        }
    },

    view: function(vnode) {
        return m("div", {
                class: StatePopup.isOpen? "popup popup_opened" : "popup"
            }, m(".popup__container", {}, [
                m("button.popup__close-btn", {onclick: StatePopup.closeDialog}),
                m("p.popup__message", {}, StatePopup.message)
            ])
        );
    }
}

function createToken(url) {
    return m.request({
        method: "POST",
        url: `${API_URL}/tokens`,
        body: {
            url: url
        },
    })
        .then (function() {
            StatePopup.message = "Токен добавлен"
            StatePopup.openDialog()
            model.error = ""
            m.route.set("/tokens")
        })
        .catch((error) => {
            console.log(error)
        })
}

function onTokenDelete(id) {
    return m.request({
        method: "DELETE",
        url: `${API_URL}/tokens/${id}/delete`,
    })
        .then (function() {
            StatePopup.message = "Токен удален"
            StatePopup.openDialog()
            m.route.set("/tokens")
        })
        .catch((error) => {
            console.log(error)
        })
}

function AppComponent() {
    function getTokens() {
        m.request({
            method: "GET",
            url: `${API_URL}/tokens`,
        })
            .then(function (result) {
                if (result) {
                    model.tokens = result
                }
                if (!result) {
                    model.error = "Ничего не найдено"
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    function confirmDeletion(item) {
        model.currentToken = item
        m(DeleteTokenForm, {
            current: model.currentToken,
            onDelete: DeleteTokenForm
        })
        m.route.set(`/token/${item._id}"/delete`)
    }

    return {
        oninit: function () {
            getTokens()
        },
        view: function () {
            return m(".page", {}, [
                m(TokenComponent, {
                    tokens: model.tokens,
                    confirmDeletion,
                    current: model.currentToken,
                    error: model.error
                }),
                m(InfoTooltip, {}),
            ])
        }
    }
}

m.route(document.body, "/tokens", {
    "/tokens": AppComponent,
    "/add-token": {
        view: function() {
            return [
                m(AddTokenForm, { onCreate: createToken }),
                m(InfoTooltip, {})
            ]
        }
    },
    "/token/:id/delete": {
        view: function (vnode) {
            return m(DeleteTokenForm, { current: model.currentToken, onDelete: onTokenDelete })
        }
    },
})