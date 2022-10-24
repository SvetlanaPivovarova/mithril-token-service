import { TokenComponent } from "./tokens.js";
import { API_URL } from "./utils/constances.js";
import { AddTokenForm } from "./AddTokenForm.js";

const model = {
    tokens: []
}

function AppComponent() {
    function getTokens() {
        m.request({
            method: "GET",
            //url: 'http://localhost:3000/tokens'
            url: `${API_URL}/tokens`,
            //withCredentials: true,
        })
            .then(function (result) {
                console.log(result)
                model.tokens = result
                //m.redraw()
            })
    }

    function createToken(url) {
        console.log("new")
        return m.request({
            method: "POST",
            url: `${API_URL}/tokens`,
            body: {
                url: url
            },
            //withCredentials: true,
        })
            .then (function() {
                console.log("Успешно")
                StatePopup.message = "Токен добавлен"
                StatePopup.openDialog()
                console.log(StatePopup)
            })
    }

    function onTokenDelete(token) {
        console.log(token)
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

    return {
        oninit: function () {
            getTokens()
        },
        view: function () {
            return m(".page", {}, [
                m(TokenComponent, { tokens: model.tokens, onTokenDelete }),
                m(AddTokenForm, { createToken }),
                m(InfoTooltip, {}),
            ])
        }
    }
}


m.mount(document.body, AppComponent)