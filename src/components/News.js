import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";




export class News extends Component {
  static defaultProps = {
  country:'in',
  pageSize:8,
  category:'general'

  }
  static propTypes = {
  country: PropTypes.string ,
  pageSize: PropTypes.number,
  category: PropTypes.string

  }
   capitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
    constructor(props){
        super(props);
        
        this.state={
            articles:[],
            loading: false,
            page:1,
            totalResults:0
        }
        document.title=`NewsMonkey - ${this.capitalizeFirstLetter(this.props.category)}`
         }
         async update(){
          this.props.setProgress(0);
          const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}`;
          this.setState({loading : true })
          let data=await fetch(url);
          this.props.setProgress(40);
          let parsedData=await data.json();
          this.props.setProgress(70);
          
          this.setState({articles : parsedData.articles,totalResults: parsedData.totalResults, loading : false})
          this.props.setProgress(100);
         }
         async componentDidMount(){
           this.setState({page: this.state.page })
           this.update()
       
         }
         fetchMoreData =async () => {
          this.setState({page: this.state.page + 1})
         const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}`;
         this.setState({loading : true })
         let data=await fetch(url);
         let parsedData=await data.json();
         this.setState({articles : this.state.articles.concat(parsedData.articles),totalResults: parsedData.totalResults, loading : false})
         
        };
     
    
  render() {
   
    return (
      <>

      
        <h1 className="text-center my-4">NewsMonkey - Top  {this.capitalizeFirstLetter(this.props.category)} headlines</h1>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={this.state.loading && <Spinner/>}
        >
         <div className="container">
         <div className="row ">
        {this.state.articles.map((element)=>{
         return <div className="col-md-4 " key={element.url}>
          <NewsItem   title={!element.title?"":element.title} description={!element.description?"":element.description}  ImageUrl={element.urlToImage?element.urlToImage:"https://media.istockphoto.com/id/1128119311/photo/cubes-with-the-word-news-on-a-newspaper.jpg?b=1&s=612x612&w=0&k=20&c=AUpepbnMhzMFfCpJTKqoC4fKn48prR39X5AqYNdaHk0="} newsUrl={element.url} author={element.author} time={element.publishedAt} source={element.source.name}/>
        </div>
        })}
        </div>
        </div>
        </InfiniteScroll>
      
       
     
      </>
    );
  }
}

export default News;
