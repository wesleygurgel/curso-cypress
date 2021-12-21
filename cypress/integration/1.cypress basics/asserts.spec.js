/// <reference types="cypress" />

it('Equality', () =>{
    const a = 1
    expect(a).equal(1)
    expect(a, "Deveria ser um").equal(1)
    expect(a, "Deveria ser um").to.be.equal(1)
    expect('a').not.to.be.equal('b')
})

it('Truthy', () => {
    const a = true
    const b = null
    let c

    expect(a).to.be.true
    expect(false).not.to.be.true

    expect(b).to.be.null
    expect(a).not.to.be.null
    expect(a).not.null
    expect(c).undefined
})

it('Object Equality', () => {
    const obj = {
        a: 1,
        b: 2
    }

    expect(obj).equal(obj)
    expect(obj).equals(obj)
    expect(obj).eq(obj)
    expect(obj).deep.eq({a:1, b:2}) 
    expect(obj).eql({a:1, b:2}) 
    expect(obj).include({a:1}) 
    expect(obj).property('a')
    expect(obj).property('a', 1)
    expect(obj).not.empty
    expect().empty

})

it('Arrays', () => {
    const arr = [1,2,3]

    expect(arr).members([1,2,3])
    expect(arr).include.members([1,3])
    expect(arr).not.empty
    expect([]).empty
})

it('Types' , () => {
    const num = 1
    const string = "Faculdade"

    expect(num).a('number')
    expect(string).a('string')
    expect({}).an('object')
    expect([]).an('array')
})


it('Strings', () => {
    const str = 'string de Teste'

    expect(str).equal('string de Teste')
    expect(str).length(str.length)
    expect(str).contains('string')
    expect(str).match(/teste/i)
})

it('Numeros', () => {
    const number = 4
    const fNumber = 3.50234

    expect(number).equal(4)
    expect(number).above(3)
    expect(number).below(5)

    expect(fNumber).an('number')
    expect(fNumber).eq(3.50234)
    expect(fNumber).closeTo(3.5, 0.1)

})