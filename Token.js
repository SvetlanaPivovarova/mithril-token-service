import { API_URL } from "./utils/constances.js";

export const Token = {
    list: [],
    loadList: function () {
        return m.request({
            method: "GET",
            url: `${API_URL}/tokens`,
            //withCredentials: true,
        })
            .then(function (result) {
                Token.list = result
                console.log(result)
            })
    },

    new: {},
    create: function () {
        return m.request({
            method: "PUT",
            url: `${model.url}/token`,
            body: {
                url: Token.new.url,
                token: 12345,
            },
            withCredentials: true,
        })
            .then(function (res) {
                console.log(res)
            })
    },

    current: {},
    delete: function (id) {
        return m.request({
            method: "GET",
            url: "https://rem-rest-api.herokuapp.com/api/token/" + id + "/delete",
            withCredentials: true,
        })
            .then(function (res) {
                User.current = res
            })
    },

    generate: function (url) {
        return m.request({
            method: "PUT",
            url: "https://rem-rest-api.herokuapp.com/api/tokens",
            body: {
                url: url,
                token: 12345
            },
            withCredentials: true,
        })
            .then (function(data) {
                newToken = parseInt(data.token)
                newUrl=parseInt(data.url)
            })
    }
}
