import {describe, expect, it} from '@jest/globals';

import randomWord from './randomWord';

/*Inputs:
En lista med ord
En siffra som anger önskad längd
En indikation på huruvida samma bokstav får förekomma mer än en gång i ordet, eller om alla bokstäver måste vara unika
Funktionalitet:
Välj slumpmässigt ut ett ord ur listan som uppfyller kriterierna i de övriga parametrarna
Hantera på något väldefinierat sätt situationen som uppstår när inget passande ord finns
Output: Det slumpmässigt utvalda ordet

1.Få tillbaks en sträng
2.Skicka in en lista med ord och en siffra för hur många bokstäver ordet får vara. Få tillbaka ett ord med rätt längd ur listan.
3.
4.
*/
describe('randomWord()',() => {
  it('Always return type of string as output', () => {
    const output = randomWord(list, 3, true);
    expect(typeof output).toBe('string');
  });

  it('Return random word from list with three letters', () => {
    const output = randomWord(list, 3, true);
    expect(output).toBe('HUS');
  });
})

const list = ['BABBEL', 'CYKEL', 'HUS', 'HALLÅ', 'HUND', 'KATT', 'VARULV','BAS' ,'TE', 'KORRIDOR', 'ABBORRE','ADVOKAT']