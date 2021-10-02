module.exports = Phrase
// Adds `reverse` to all strings.
String.prototype.reverse = function() { 
  return Array.from(this).reverse().join("");
}
// Defines a Phrase object.
function Phrase(content) {
  this.content = content;
  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() { 
    return this.letters().toLowerCase();
  }
  this.letters = function letters() {
    return Array.from(this.content).filter((element)=> !!element.match(/[a-zA-Z@]/i)).join("");
  }
// Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  } 
}


function TranslatedPhrase(content, translation) { this.content = content;
  this.translation = translation;
  // Returns translation processed for palindrome testing.
  this.processedContent = function processedContent() { 
    return this.processor(this.translation);
  } 
}