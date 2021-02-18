class Grader {
    /**
     * Compares the student's respose with the correct answer.
     * 
     * @param {string} studentResponse - Must be castable to number.
     * @param {number} correctAnswer 
     */
    grade(studentResponse, correctAnswer) {
        const studentResponseNumber = Math.round(Number(studentResponse));
        if (!studentResponseNumber) {
            return 'Invalid';
        } else if (studentResponseNumber == Math.round(correctAnswer)){
            return 'Correct';
        } else {
            return 'Incorrect';
        }
    }
    /**
     * Checks if the input is valid.
     * 
     * @param {number} input 
     */
    inputIsValid(input) {
        if(!input) { throw `Invalid or missing input temperatures.`}
        return input;
    }

    /**
     * Converts the input temperature to the target unit.
     * 
     * @param {number} inputTemp 
     * @param {string} inputUnits 
     * @param {string} targetUnits 
     */
    convertTemperature (inputTemp, inputUnits, targetUnits) {
        switch (inputUnits) {
            case 'Celsius':
                if (targetUnits == 'Kelvin') {
                    return this.cToK(inputTemp);
                } else if (targetUnits == 'Fahrenheit') {
                    return this.cToF(inputTemp);
                } else if (targetUnits == 'Rankine') {
                    return this.cToR(inputTemp);
                } else {
                    throw `Invalid or missing target unit.`;
                }
                break;
            case 'Kelvin':
                if (targetUnits == 'Celsius') {
                    return this.kToC(inputTemp);
                } else if (targetUnits == 'Fahrenheit') {
                    return this.kToF(inputTemp);
                } else if (targetUnits == 'Rankine') {
                    return this.kToR(inputTemp);
                } else {
                    throw `Invalid or missing target unit.`;
                }
                break;
            case 'Fahrenheit':
                if (targetUnits == 'Kelvin') {
                    return this.fToK(inputTemp);
                } else if (targetUnits == 'Celsius') {
                    return this.fToC(inputTemp);
                } else if (targetUnits == 'Rankine') {
                    return this.fToR(inputTemp);
                } else {
                    throw `Invalid or missing target unit.`;
                }
                break;
            case 'Rankine': 
                if (targetUnits == 'Kelvin') {
                    return this.rToK(inputTemp);
                } else if (targetUnits == 'Celsius') {
                    return this.rToC(inputTemp);
                } else if (targetUnits == 'Fahrenheit') {
                    return this.cToF(inputTemp);
                } else {
                    throw `Invalid or missing target unit.`;
                }
                break;
            default:
                throw `Invalid or missing input unit.`;
        }
    }

    /** Temperature conversion formulas. */

    cToF(inputTemp) { 
        return this.inputIsValid(Math.round(Number(inputTemp) * 9 / 5 + 32)); 
    }
    cToK (inputTemp) { 
        return this.inputIsValid(Math.round(Number(inputTemp) + 273.15)); 
    }
    cToR (inputTemp) { 
        return this.inputIsValid(Math.round(Number(inputTemp) * 9 / 5 + 491.67)); 
    }
    
    fToC (inputTemp) { 
        return this.inputIsValid(Math.round((Number(inputTemp) - 32) * 5 / 9)); 
    }
    fToK (inputTemp) { 
        return this.inputIsValid(Math.round((Number(inputTemp) - 32) * 5 / 9 + 273.15)); 
    }
    fToR (inputTemp) { 
        return this.inputIsValid(Math.round(Number(inputTemp) + 459.67)); 
    }
    
    kToF (inputTemp) { 
        return this.inputIsValid(Math.round((Number(inputTemp) - 273.15) * 9 / 5 + 32)); 
    }
    kToC(inputTemp) { 
        return this.inputIsValid(Math.round(Number(inputTemp) - 273.15)); 
    }
    kToR(inputTemp) { 
        return this.inputIsValid(Math.round(Number(inputTemp) * 1.8)); 
    }
    
    rToC (inputTemp) { 
        return this.inputIsValid(Math.round((Number(inputTemp) - 491.67) * 5 / 9)); 
    }
    rToK (inputTemp) { 
        return this.inputIsValid(Math.round(Number(inputTemp) / 1.8)); 
    }
    rToF (inputTemp) { 
        return this.inputIsValid(Math.round(Number(inputTemp) - 459.67)); 
    }
}

module.exports = Grader;