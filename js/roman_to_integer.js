/**
 *  Challenge rules
  - 1 <= s.length <= 15
	- s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
  - It is guaranteed that s is a valid roman numeral in the range [1, 3999].
 * */



function romanToInteger(roman) {
	let num = 0;
	const str = roman.toUpperCase();
	const hash = {
		'I': 1,
		'V': 5,
		'X': 10,
		'L': 50,
		'C': 100,
		'D': 500,
		'M': 1000,
	}
	//validating according to the challenge rules
	if(str.length < 1 || str.length >= 15){
		return 'Error in your input'
	}

	if(!(/^[IVXLCDM]+$/).test(str)){ // regex to validate if string only has tese strings
		return 'Error in your input'
	}

	for (i = 0; i < str.length; i++) {
		switch (true) { // i know passing true directly it's weird, but i think it get's better in switch than in if/else
			case (str[i] === 'I' && str[i + 1] === 'V'): {
				num += 4
				i++
				break;
			}
			case (str[i] === 'I' && str[i + 1] === 'X'): {
				num += 9
				i++
				break;
			}
			case (str[i] === 'X' && str[i + 1] === 'L'): {
				num += 40
				i++
				break;
			}
			case (str[i] === 'X' && str[i + 1] === 'C'): {
				num += 90
				i++
				break;
			}
			case (str[i] === 'C' && str[i + 1] === 'D'): {
				num += 400
				i++
				break;
			}
			case (str[i] === 'C' && str[i + 1] === 'M'): {
				num += 900
				i++
				break;
			}
			default:
				num += hash[str[i]]
				break;
		}
	}

	return num
}

console.log(romanToInteger('III')) // output 3
console.log(romanToInteger('lviii')) // output 58
console.log(romanToInteger('MCMXCIV')) // output 1994
console.log(romanToInteger('lkdjalkjfdl')) // Error in your input