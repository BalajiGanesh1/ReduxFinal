import React,  {Component} from 'react';
import { PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CourseList from './CourseList';
import * as courseActions from '../../actions/courseActions';
import {browserHistory} from 'react-router';

export class CoursesPage extends Component {
  constructor(props, context){
   super(props,context);
   this.redirectToAddCoursePage=   this.redirectToAddCoursePage.bind(this);

  }

  redirectToAddCoursePage(){
   browserHistory.push('/course');

  }
  render() {
    
    const {courses}= this.props;
    return (
      <div>
        <h1>Courses Page</h1>
        {/*Button to add new course*/}
        
        <input type="submit"
        value="Add Course"
        className="btn btn-primary"
        onClick={this.redirectToAddCoursePage}/>

       <CourseList courses={courses} />
        
      </div>
    );
  }
}
CoursesPage.propTypes = {
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions:bindActionCreators(courseActions,dispatch)
  };
}
 
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);

