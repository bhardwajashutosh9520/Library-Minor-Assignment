import React from 'react';
import PropTypes from 'prop-types';
class Management extends React.Component{
   constructor(props){

     super(props);
     this.state = {
    
     }

  }
    componentWillMount(){
      this.props.getData()

    }
    componentDidMount(){
      this.setState({
        users : this.props.users
    })


  }
   render(){
    const issueData = this.props.users;
    const bookIssue = issueData.map(item => {
      if(item.s_name != null) {
        return (     
              <tr>
                <td>{item.s_name}</td>
                <td>{item.field}</td>
                <td>{item.book_name}</td>                
              </tr>
       )
      }
    })

    const bookStore = issueData.map(item => {
      if(item.author_name != null) {
        return (     
              <tr>
                <td>{item.book_name}</td>
                <td>{item.field}</td>
                <td>{item.qnt}</td>
              </tr>
       )
      }
    })
    return (
        <div>
          <table className = "table table-dark" key ="item.id">
            <tbody>
            <tr>
              <th colSpan="3" align="center">Book Issue Management</th>
            </tr>
              <tr>
                <td>Student</td>
                <td>Branch</td>
                <td>Book</td>    
              </tr>
              {bookIssue}
            </tbody>
          </table>
        
          <table className = "table table-dark">
            <tbody>
            <tr>
              <th colSpan="3" align="center">Book Store Management</th>
            </tr>
              <tr>
                <td>Book</td>
                <td>Branch</td>
                <td>Available</td>
              </tr>
              {bookStore}
            </tbody>
          </table>
    </div>

     )
  }
}

export default Management;
