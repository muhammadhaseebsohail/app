import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'

export default class MyDatePicker extends Component {
    constructor(props){
        super(props)
        this.state = {date:"2000-05-15"}
    }

    render(){
        return (
            <DatePicker
                style={{width: '100%',
                alignSelf:'center'}}
                date={this.state.date}
                mode="date"
                placeholder={'Date of Birth'}
                format="YYYY-MM-DD"


                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                    dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                    },
                    dateInput: {
                        marginLeft: 36
                    }
                    // ... You can check the source to find the other keys.
                }}
                onDateChange={(date) => {this.setState({date: date})}}
            />
        )
    }
}