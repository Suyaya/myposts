import React from 'react';
import {connect} from 'react-redux';



class UsersHeader extends React.Component{
   
   render(){
       const author = this.props.authors.find(author=>author.id === this.props.userId);
       if(!author){
        return null;
        }
       return(
           <div>
               {author.name}
           </div>
       )
   }
}

const mapStateToProps = (state)=>{
    return {authors: state.authors}
}

export default connect(mapStateToProps,)(UsersHeader);

