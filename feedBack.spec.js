import {describe, expect, it} from '@jest/globals'

import feedback from './feedback';

/*När jag gjort denna uppgift har jag försökt göra den enligt TDD.
Jag skrev ett test i taget och därefter skrev logiken till det tills testet gick igenom.
Jag försökte även följa fyrstegsmetoden under mitt arbete med de enskilda stegen.

Min stratergi var följande:
1.Validering. Så man inte kan mata in något annat än datatypen string med bokstäverna A-Ö.

2.Se till att få tillbaks "correct" och "incorrect" som result-attribut ifall svaret och gissningens bokstäver stämmer eller inte.Obs! På denna punkt såg jag även till att gissning och svar alltid blir till versaler.

3.Se till att bokstäver får result attributet "misplaced" ifall de finns i ordet men är på fel plats. 

4. Se till att logiken fungerar med inputs som: svar:"CYKEL" och gissning:"HALLÅ", där det L som inte är på rätt plats ska ha result-attribut som "incorrect" då "correct" redan är hittats och det inte finns fler av den bokstaven.

Utifrån vad jag kan komma på är mina test heltäckande efter att ha följt dessa steg.
*/

describe('feedback()', () => {
 
  it('If guess input is empty: return empty array', () => {
    const output = feedback('', 'WORD');
    expect(output).toEqual([]);
  })

  it('If guess is a number: return empty array', () => {
    const output = feedback(1, 'WORD');
    expect(output).toEqual([]);
  })

  it('If guess is a string that contains a number: return empty array', () => {
    const output = feedback('1', 'WORD');
    expect(output).toEqual([]);
  })

  it('If guess is neither number or string: return empty array', () => {
    const output = feedback(true, 'WORD');
    expect(output).toEqual([]);
  })

  it('If guess or answer are not capitalized: Make them capitalized.', () => {
    const output = feedback('sHelf', 'SHeLF');
    expect(output).toEqual([
    {letter:'S', result:'correct'},
    {letter:'H', result:'correct'},
    {letter:'E', result:'correct'},
    {letter:'L', result:'correct'},
    {letter:'F', result:'correct'}
  ])
  })

  it('If guess and answer are same: return array of objects containing attributes of each letter and result as correct', () => {
    const output = feedback('WORD', 'WORD')
    expect(output).toEqual([
      {letter:'W', result:'correct'},
      {letter:'O', result:'correct'},
      {letter:'R', result:'correct'},
      {letter:'D', result:'correct'}
    ])
  })

  it('If guess has no letters correct: return array of objects containing attributes of each letter and result as incorrect', () => {
    const output = feedback('DUCKS', 'ALIEN');
    expect(output).toEqual([
      {letter:'D', result:'incorrect'},
      {letter:'U', result:'incorrect'},
      {letter:'C', result:'incorrect'},
      {letter:'K', result:'incorrect'},
      {letter:'S', result:'incorrect'}
    ]);
  })

  it('If some of the letters in guess word are correct but in wrong place: return that letters result as misplaced', () => {
    const output = feedback('ALIEN', 'MILAN');
    expect(output).toEqual([
      {letter:'A', result:'misplaced'},
      {letter:'L', result:'misplaced'},
      {letter:'I', result:'misplaced'},
      {letter:'E', result:'incorrect'},
      {letter:'N', result:'correct'}
    ]);
  });

  it('If letter has already been identified as correct and there are no more of that letter in answer but multiple in guess: make that letters result incorrect', () => {
    const output = feedback('HALLÅ', 'CYKLA');
    expect(output).toEqual([
      {letter:'H', result:'incorrect'},
      {letter:'A', result:'misplaced'},
      {letter:'L', result:'incorrect'},
      {letter:'L', result:'correct'},
      {letter:'Å', result:'incorrect'}
    ]);
  });
})