import React, { Component } from 'react'
import NesItem from './NesItem'

export class News extends Component {

    

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=83c0a0589a964225bf14761da7b7c57e"
        let data = await fetch(url)
        let parsedData = await data.json();
        this.setState({articles:parsedData.articles})
    }

    render() {
        return (
            <div className="container my-3">
                <h1 className="heading">NewsMonkey - Top Headlines</h1>

                <div className="row">
                    {this.state.articles.map((element) => {
                       return <div className="col-md-4" key={element.url}>
                            <NesItem  title={element.title?element.title:""} description={element.description?element.description:""} ImageUrl={element.urlToImage} NewsUrl={element.url} />
                        </div> 
                    })}
                </div>

            </div>
        )
    }
}

export default News
