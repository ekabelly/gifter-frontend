import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Store extends Component {
    render() {
        return (
            <div>
                store
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Store)
