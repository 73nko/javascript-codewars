const {inArray, compareArr} = require('./index.js');

describe('InArray', () => {
    
    describe('When any of the input array match the words in our array', () => {
        it('returns an empty array', () => {
            const a1 = ["tarp", "mice", "bull"];
            const result = inArray(a1, compareArr);

            expect(result).toEqual([])
        })

    })
})
