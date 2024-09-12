var myArray=[
    '“Be yourself; everyone else is already taken.”',' “So many books, so little time.” ',' “Two things are infinite: the universe and human stupidity; and Iam not sure about the universe.” ',' “So many books, so little time.” ',' “A room without books is like a body without a soul.” ',' “In three words I can sum up everything I have learned about life: it goes on.” ',' “If you want to know what a man is like, take a good look at how he treats his inferiors, not his equals.” ',' “If you tell the truth, you donot have to remember anything.” ',' “I have learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.” '
]
var qoute = document.getElementById('qoute')
 function array(){
    var arrayIndex = Math.floor(Math.random() * myArray.length);
    var selectedQuote = myArray[arrayIndex];
    qoute.innerHTML = selectedQuote

}
