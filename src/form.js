function formComponent(dispatch) {
    return {
        firstOperand: null,
        secondOperand: null,
        dispatch: dispatch,
        validate: function () {
            let dispatchArray = [];
            if (isNaN(this.firstOperand)) {
                dispatchArray.push("First Operand is not a number.");
            }
            if (isNaN(this.secondOperand)) {
                dispatchArray.push("Second Operand is not a number.");
            }
            if (!isNaN(this.firstOperand) && !isNaN(this.secondOperand)) {
                this.dispatch("error", []);
                return true;
            } else {
                this.dispatch("error", dispatchArray);
                return false;
            }
        },
        add: function () {
            this.dispatch("clear");
            if (this.validate()) {
                let result = parseInt(this.firstOperand) + parseInt(this.secondOperand);
                this.dispatch("success", result);
            }
        },
    };
}
