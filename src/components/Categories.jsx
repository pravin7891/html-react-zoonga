import React, { Component } from 'react';

import Category from './category/Category';
import Axios from 'axios';

class Categories extends Component {
    state = { 
        categories:[
            {id:1,name:'Concerts',slug:'category/concerts',img:'https://static2.kyazoonga.com/Images/kzconsumer/top-categories/concerts-cat1.jpg'},
            {id:2,name:'Cricket',slug:'category/cricket',img:'https://static2.kyazoonga.com/Images/kzconsumer/top-categories/cricket-cat1.jpg'},
            {id:3,name:'Theater & Arts',slug:'category/theater-and-arts',img:'https://static2.kyazoonga.com/Images/kzconsumer/top-categories/theatre-cat.jpg'},
            {id:4,name:'Amusement Parks',slug:'category/amusement-parks',img:'https://static2.kyazoonga.com/Images/kzconsumer/top-categories/amusementparks-cat.jpg'},
            {id:5,name:'Sports',slug:'category/sports',img:'https://static2.kyazoonga.com/Images/kzconsumer/top-categories/sports-cat.jpg'},
            {id:6,name:'Restaurants',slug:'category/restaurants',img:'https://static2.kyazoonga.com/Images/kzconsumer/top-categories/restaurants-cat.jpg'}
        ],
     cats: null   
     }
     componentWillMount(){
         Axios.get('data/categories.json').then(res => {
            let cats =  res.data.categories.map((category) =>  
            <Category key={category.id} category={category} /> 
           
            );
            //console.log(res.data);
          this.setState({cats}) 
         }
         );
         
        /* let cats =  this.state.categories.map((category) =>  
         <Category key={category.id} name={category.name} slug={category.slug} img={category.img} /> 
        
         );*/
        
     }
    render() { 
        let {cats} = this.state;
        return ( 
            <React.Fragment>
               <section className="home-cat-sec text-center">
    <div className="container">
      <h2 className="site-title">Browse by top categories</h2>
      <div className="row">
     {cats}
      </div>
    </div>
  </section>
   </React.Fragment>
         );
    }
}
 
export default Categories;