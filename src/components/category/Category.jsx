import React, { Component } from 'react';

class Category extends Component {
    
    constructor(props){

        super(props);
    }   
    render() { 
        var {name, slug, img} = this.props.category;
        return ( 
            <React.Fragment>
                <div className="col-sm-4 cat-box">
          <a href={slug} className="block-link">
            <div className="cat-txt">
              <h3>{name}</h3>
            </div>
            <img src={img} alt={name} className="img-full-width"/>
          </a>
        </div>
    </React.Fragment>
         );
    }
}
 
export default Category;