import {describe, expect, it} from '@jest/globals'

import feedback from './feedback';

/* Inputs: Två ord (två textsträngar)
Ett ord som är gissningen
Ett ord som är det korrekta ordet

Funktionalitet: Kontrollera vilka bokstäver från det ena ordet som förekommer i det andra och i så fall var

Output: En array med objekt, ett för varje bokstav i samma ordning som de förekommer i det gissade ordet, med följande attribut:
letter (bokstaven)
result (ett av följande värden)
‘incorrect’: Finns inte med i det andra ordet
‘misplaced’: Finns med i det andra ordet, men på annan plats
‘correct’: Korrekt plats i det andra ordet 
Exempel:

Orden “CYKLA” (utvalt) och “HALLÅ” (gissning) skulle ge följande tillbaka:
H / incorrect
A / misplaced
L / incorrect (eftersom det redan finns ett korrekt L)
L / correct
Å / incorrect*/

describe('feedback()', () => {
  it('If guess input is empty, return empty array', () => {
    const output = feedback('', 'WORD');
    expect(output).toEqual([]);
  })

  it('If guess is a number, return empty array', () => {
    const output = feedback(1, 'WORD');
    expect(output).toEqual([]);
  })

  it('If guess is a string that contains a number, return empty array', () => {
    const output = feedback('1', 'WORD');
    expect(output).toEqual([]);
  })

  it('If guess is neither number or string, return empty array', () => {
    const output = feedback(true, 'WORD');
    expect(output).toEqual([]);
  })

  it('If guess is not capitalized. Make it capitalized.', () => {
    const output = feedback('shelf', 'SHELF');
    expect(output).toEqual([
    {letter:'S', result:'correct'},
    {letter:'H', result:'correct'},
    {letter:'E', result:'correct'},
    {letter:'L', result:'correct'},
    {letter:'F', result:'correct'}
  ])
  })

  it('If guess and answer are same return array of objects containing attributes of each letter and result as correct', () => {
    const output = feedback('WORD', 'WORD')
    expect(output).toEqual([
      {letter:'W', result:'correct'},
      {letter:'O', result:'correct'},
      {letter:'R', result:'correct'},
      {letter:'D', result:'correct'}
    ])
  })

  it('If guess has no letters correct return array of objects containing attributes of each letter and result as incorrect', () => {
    const output = feedback('DUCKS', 'ALIEN');
    expect(output).toEqual([
      {letter:'D', result:'incorrect'},
      {letter:'U', result:'incorrect'},
      {letter:'C', result:'incorrect'},
      {letter:'K', result:'incorrect'},
      {letter:'S', result:'incorrect'}
    ]);
  })

  it('If some of the letters in guess word are correct but in wrong place', () => {
    const output = feedback('ALIEN', 'MILAN');
    expect(output).toEqual([
      {letter:'A', result:'misplaced'},
      {letter:'L', result:'misplaced'},
      {letter:'I', result:'misplaced'},
      {letter:'E', result:'incorrect'},
      {letter:'N', result:'correct'}
    ]);
  });

  it('If letters has already been identified as correct and there are no more of that letter in answer but multiple in guess', () => {
    const output = feedback('HALLÅ', 'CYKLA');
    expect(output).toEqual([
      {letter:'H', result:'incorrect'},
      {letter:'A', result:'misplaced'},
      {letter:'L', result:'incorrect'},
      {letter:'L', result:'correct'},
      {letter:'Å', result:'incorrect'}
    ]);
  });

  it('if input is to many letters return object with correct info', () => {
    const output = feedback('WORDS', 'WORD');
    expect(output).toEqual([
      {INFO: 'You are using to many letters!'},
      {letter:'W', result:'correct'},
      {letter:'O', result:'correct'},
      {letter:'R', result:'correct'},
      {letter:'D', result:'correct'},
      {letter:'S', result:'incorrect'}
      
    ])
  })

  it('if input is to few letters return object with correct info', () => {
    const output = feedback('WORD', 'WORDS');
    expect(output).toEqual([
      {INFO: 'You are using to few letters!'},
      {letter:'W', result:'correct'},
      {letter:'O', result:'correct'},
      {letter:'R', result:'correct'},
      {letter:'D', result:'correct'}
      
    ])
  })
})