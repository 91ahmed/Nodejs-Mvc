class Validator
{
    constructor()
    {
        this.req  = null;
        this.inp  = null;
        this.errors   = {};
        this.messages = {
            'required': 'filed is required',
        };
    }

    input (request, input)
    {
        this.req = request;
        this.inp = input;

        return this;
    }

    required ()
    {
        if (this.req == '') {
            this.errors[this.inp] = this.messages.required;
        }

        return this;
    }
    
    getErrors ()
    {
        return this.errors;
    }

}

module.exports = Validator;