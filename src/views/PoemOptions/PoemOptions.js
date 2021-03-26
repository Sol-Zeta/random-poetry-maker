import { useState, useEffect } from 'react'
import Select from '../../components/Select/Select'
import { paragraphsOptions, versesOptions } from '../../providers/authors'
import PoetryProvider from '../../providers/PoetryProvider.class'
import './PoemOptions.css'


export default function PoemOptions({ getValues, loading }) {

    const [author, setAuthor] = useState("")
    const [allAuthors, setAllAuthors] = useState(null)
    const [authorTitles, setAuthorTitles] = useState([])
    const [book, setBook] = useState("")
    const [paragraphs, setParagraphs] = useState(0)
    const [verses, setVerses] = useState(0)



    
    const getSelectedAuthor = (value) => {
        setAuthor(Number(value))
    }
    
    useEffect( () => {
        const poetryData = new PoetryProvider()
        const getAllAuthors = () => poetryData.getAuthors().then(res => setAllAuthors(res))
        getAllAuthors()
    }, [])
    
    useEffect(() => {
        if(author){
            const poetryData = new PoetryProvider()
            const getAllBooks = (id) => poetryData.getBooksByAuthor(id).then(res => setAuthorTitles(res))
            getAllBooks(author)
        }
    }, [author])
  
    const getSelectedBook = (value) => {
        setBook(Number(value))
    }
    const getSelectedParagraphs = (value) => {
        setParagraphs(Number(value))
    }
    const getSelectedVerses = (value) => {
        setVerses(Number(value))
    }

    const handleClick = () => {
        if(author && book && paragraphs && verses){
            getValues({ author, book, paragraphs, verses })
        }
    }

    return (
        <div className="form-container">
            <div className="select-container">
                <Select type={"author"} value={author} data={allAuthors} getValue={getSelectedAuthor} field={"Elige un autor"}/>
            </div>
            <div className="select-container">
                <Select type={"titles"} data={authorTitles} getValue={getSelectedBook} field={"Elige una obra"}/>    
            </div>
            <div className="select-container">
                <Select type={"paragraphs"} data={paragraphsOptions} getValue={getSelectedParagraphs} field={"N° de estrofas"}/>
            </div>
            <div className="select-container">
                <Select type={"verses"} data={versesOptions} getValue={getSelectedVerses} field={"N° de versos"}/>
            </div>
            <div className="select-container">
                <button 
                className="button" 
                onClick={() => handleClick()}
                disabled={author && book && paragraphs && verses && !loading? false : true}
                >
                    crear poema
                </button>
            </div>
        </div>
    )
}
