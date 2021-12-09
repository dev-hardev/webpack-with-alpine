function successComponent() {
    return {
        messages: [],
        showMessages: function (result) {
            this.messages = [`The result is ${result}`];
        },
        clear: function () {
            this.messages = [];
        },
    };
}
