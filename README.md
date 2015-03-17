# About the project
This is an npm module for accessing the moby parts-of-speech package. Moby is an open source project with many linguistic databases (all public domain). You can access more about their project by visiting the following URL: http://icon.shef.ac.uk/Moby/

# Using moby-pos

This npm module aims to be pretty simple to use. It has a single method which you can call to look up the parts of speech information for a given word.
```javascript
var pos = require('moby-pos');
console.log(pos.search("skeleton"));
```

# Reading the output

The output of the above code should be **N**. That stands for Noun. The complete list of meanings can be found below.

Meaning | Letter
------- | -------
Noun | N
Plural | P
Noun Phrase | h
Verb (usu participle) | V
Verb (transitive) | t
Verb (intransitive) | i
Adjective | A
Adverb | v
Conjunction | C
Preposition | P
Interjection | !
Pronoun | r
Definite Article | D
Indefinite Article | I
Nominative | o
