// Start at `let articles`

class Article {
  constructor(element) {
    // assign this.element to the passed in article element
    this.element = element
    // create a reference to the ".expandButton" class.
    this.expandButton = element.getElementsByClassName('expandButton')[0]
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.innerText = 'expand'

    // THIS WORKED TOO
    // this.expandButton = element.querySelectorAll('.expandButton')[0]
    // // Using your expandButton reference, update the text on your expandButton to say "expand"
    // this.expandButton.innerText = 'expand'
    //
    // Set a click handler on the expandButton reference (or article element),
    // calling the expandArticle method.
    this.expandButton.addEventListener('click', this.expandArticle);

  }

  expandArticle() {
    // Using our reference to the article element, add or remove a class to
    // expand or hide the article.
    console.log('go');
    console.log(event.target);
    console.log(event.currentTarget.parentNode);
    event.currentTarget.parentNode.classList.toggle('article-open')
  }
}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = d.getElementsByClassName('article')

// Use .map() to iterate over the articles array and create a new instance of
// Article by passing in each article element as a parameter to the constructor.
articles = Array.from(articles).map(item => new Article(item));
