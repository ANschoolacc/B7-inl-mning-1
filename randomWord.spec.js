import { describe, expect, it } from '@jest/globals';

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
3.Skicka in en lista med ord och en siffra för hur många bokstäver ordet får vara samt en indikator ifall alla bostäver måste vara unika. Om indikation för unika bostäver är true: Få tillbaka ett ord ur listan med rätt längd innehållande endast unika bokstäver.
4. Om det inte finns en lista att hämta eller om inget ord matchar kriterierna i input så ska output innehålla ett error meddelande.

*/
describe('randomWord()', () => {
  it('Always return type of string as output', () => {
    const output = randomWord(list, 3, true);
    expect(typeof output).toBe('string');
  });

  it('Return random word from list with three letters', () => {
    for (let i = 0; i < 4; i++) {
      const output = randomWord(list, 3, true);
      if (output != 'HUS' && output != 'NOD') {
        expect(output).toBe('BAS');
      } else if (output != 'BAS' && output != 'HUS') {
        expect(output).toBe('NOD');
      } else if (output != 'BAS' && output != 'NOD') {
        expect(output).toBe('HUS');
      }
    }
  });

  it('Test that random word can contain more than one instance of same letter', () => {
    for (let i = 0; i < 4; i++) {
      const output = randomWord(list, 5, false);
      if (output != 'AGENT' && output != 'CYKEL') {
        expect(output).toBe('HALLÅ');
      } else if (output != 'AGENT' && output != 'HALLÅ') {
        expect(output).toBe('CYKEL');
      } else if (output != 'CYKEL' && output != 'HALLÅ') {
        expect(output).toBe('AGENT');
      }
    }
  });

  it('Test that random word can only contain one instance of same letter', () => {
    for (let i = 0; i < 4; i++) {
      const output = randomWord(list, 5, true);
      if (output != 'CYKEL') {
        expect(output).toBe('AGENT');
      } else if (output != 'AGENT') {
        expect(output).toBe('CYKEL');
      }
    }
  });

  it('If there are no matching words for input parameters. Output should throw error with message', () => {
    const output = () => {
      randomWord(list, 7, true)
    }
    expect(output).toThrow(Error);
    expect(output).toThrow('No valid word matching criteria!');
  })

  it('If there are no words found on server. Output should throw error with message.', () => {
    const output = () => {
      randomWord([],7, true)
    }
    expect(output).toThrow('No words found on server!');
    expect(output).toThrow(Error);
  })

  it('If there are no words found on server. Output should throw error with message.', () => {
    const output = () => {
      randomWord(undefined, 7, true)
    }
    expect(output).toThrow('No words found on server!');
    expect(output).toThrow(Error);
  })

})

const list = ['BABBEL', 'CYKEL', 'HUS', 'HALLÅ', 'HUND', 'KATT', 'VARULV', 'BAS', 'te', 'KORRIDOR','AGGREGAT', 'ABBORRE', 'ADVOKAT', 'NOD', 'AGENT'];
