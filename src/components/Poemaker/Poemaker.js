import PoetryProvider from "../../providers/PoetryProvider.class";

export default async function Poemaker(
  paragraphs = 0,
  verses = 0,
  book = 0,
  author = 0
) {
  if ((paragraphs, verses, book, author)) {
    let allVerses = [];
    let randomVerses = [];
    const poetryData = new PoetryProvider();
    const result = await poetryData.getPoemsByBook(book);
    if (result) {
      result.forEach((title) => {
        title.verses.forEach((verse) => {
          allVerses.push(verse.text);
        });
      });
      console.info("Aquí están los versos originales con los que fue montado el poema random", allVerses);
      for (let i = 0; i < paragraphs * verses; i++) {
        randomVerses.push(
          allVerses[Math.floor(Math.random() * allVerses.length)]
        );
      }
      return randomVerses;
    }
  }
}
