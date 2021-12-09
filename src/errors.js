function errorsComponent() {
    return {
        errors: [],
        showErrors: function (details) {
            this.errors = details;
        },
    };
}
