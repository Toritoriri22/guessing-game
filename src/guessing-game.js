class GuessingGame {

    constructor() {
        this.currentNumber = 0;
        this.minNumber = 0;
        this.maxNumber = 0;
    }

    setRange(min, max) {
        this.minNumber = min;
        this.maxNumber = max;
    }

    guess() {
        this.currentNumber = Math.ceil((this.minNumber + this.maxNumber) / 2);
        return this.currentNumber;
    }

    lower() {
        this.maxNumber = this.currentNumber;
    }

    greater() {
        this.minNumber = this.currentNumber;
    }
}

module.exports = GuessingGame;
