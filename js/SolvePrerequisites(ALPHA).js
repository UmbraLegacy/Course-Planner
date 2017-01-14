function main (string) {
/* FUNCTION LEGEND
 * 1. primaryStrCleaning():     cleans commonly occuring errors in string (returns string).
 * 2. secondaryStrCleaning():   cleans unique errors in string (returns string).
 * 3. formatString():           formats string to proper syntax (returns string).
 */

string = primaryStrCleaning (string);
string = secondaryStrCleaning (string);
string = formatString (string);

return string;
}                   // String -> String.


function primaryStrCleaning (string) {
    /* FUNCTION LEGEND
     * 1. trimOuterWhiteSpaces():    trims leading & trailing whitespaces from string (returns string).
     * 2. trimTrailComma():          trims comma trailing string (returns string).
     * 3. trimSpaceLeadComma():      trims whitespaces leading commas (returns string).
     * 4. trimSpaceAdjParenth():     trims whitespaces adjacent parenthesis (returns string).

     *
     * Adds trailing whitespaces adjacent to commas.
     * Replaces all instances of ',' with '+'. Problematic outside of ALPHA data.
     * Replaces all instances of "and" with '+'. Problematic outside of ALPHA data.
     *
     */
    function trimOuterWhiteSpaces (string){
        return string.trim();
    }                            // String -> String.
    function trimTrailComma (string) {
        return string.substr (0, ((string.endsWith(',')) ? (string.length - 1) : string.length));
    }                                 // String -> String.
    function trimSpaceLeadComma (string) {
        return string.replace((/\s,/g), ',');
    }                             // String -> String.
    function trimSpaceAdjParenth (string) {
        return (string.replace(/\s\)/g, ')')).replace(/\(\s/g, '(');
    }                            // String -> String.

    string = trimOuterWhiteSpaces (string);
    console.log("string = ", string, " {"+typeof string, " ", string.length+"} -- trimOuterWhiteSpaces()");

    string = trimTrailComma (string);
    console.log("string = ", string, " {"+typeof string, " ", string.length+"} -- trimTrailComma()");

    string = trimSpaceLeadComma (string);
    console.log("string = ", string, " {"+typeof string, " ", string.length+"} -- trimSpaceLeadComma()");

    string = trimSpaceAdjParenth (string);
    console.log("string = ", string, " {"+typeof string, " ", string.length+"} -- trimSpaceAdjParenth()");

    return string;
}     // String -> String.
function secondaryStrCleaning (string) {
/* FUNCTION LEGEND
    * 1. case01():      converts "1 or" patterns to "1 of" (returns string).
    * 2. case02():      converts "+ or" patterns to "or" (returns string).
    * 3. case03():      converts either "[1-3] of or" or "[1-3]of or" patterns to "[1-3]of" (returns string).
    * 4. case04():      converts "..." patterns to "." (returns string).
*/

    function case01 (string) {
        return string.replace(/(1)\s(or)/g, "$1 of");
    }   // String -> String.
    function case02 (string) {
        return string.replace(/\+\s(or)/g, "or");
    }   // String -> String.
    function case03 (string) {
        return string.replace(/([1-3])(of|\sof)\s(or)/g, "$1$2");
    }   // String -> String.
    function case04 (string) {
        return string.replace(/\.\.+/g, '.');
    } // String -> String.

    string = case01 (string);
    console.log("string = ", string, " {"+typeof string, " ", string.length+"} -- case01()");

    string = case02 (string);
    console.log("string = ", string, " {"+typeof string, " ", string.length+"} -- case02()");

    string = case03 (string);
    console.log("string = ", string, " {"+typeof string, " ", string.length+"} -- case03()");

    string = case04 (string);
    console.log("string = ", string, " {"+typeof string, " ", string.length+"} -- case04()");

    return string;
}   // String -> String.
function formatString (string) {
    /* FUNCTION LEGEND
     * 1. alphabetize():             converts @ symbol to alphabetical symbols (returns string).
     * 2. n_of():                    converts "[1-3] of" patterns to "[1-3]of" patterns (returns string).
     * 3. parenthToBrace():          converts parentheses to braces (returns string).
     * 4. parenthEncaseStr():        encases string in parentheses (returns string).
     */

    function alphabetize (string, arr = string.split(''), char = 65) {
        const result = arr => arr.reduce((a,b) => a.concat(b === '@' ? String.fromCharCode(char++) : b),[]);
        return result(arr).join('');
    } // String -> String.
    function n_of (string) {
        return string.replace(/([1-3])\s(of)/g, "$1$2");
    }                                           // String -> String.
    function parenthToBrace (string) {
        return (string.replace(/\(/g, '[')).replace(/\)/g, ']');
    }                                 // String -> String.
    function parenthEncaseStr (string) {
        return '('+string+')';
    }                               // String -> String.

    string = alphabetize (string);
    console.log("string = ", string, " {"+typeof string, " ", string.length+"} -- alphabetize()");

    string = n_of (string);
    console.log("string = ", string, " {"+typeof string, " ", string.length+"} -- n_of()");

    string = parenthToBrace (string);
    console.log("string = ", string, " {"+typeof string, " ", string.length+"} -- parenthToBrace()");

    string = parenthEncaseStr (string);
    console.log("string = ", string, " {"+typeof string, " ", string.length+"} -- parenthEncaseStr()");

    return string;
}           // String -> String.
