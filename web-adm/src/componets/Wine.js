import React, { Component } from 'react';
import { variables } from './Variables.js';

export class Wine extends Component{

    constructor(props) {
        super(props);

        this.state = {
            wineId: 0,
            wineName: "",
            Image: "",
            price: 0,
            productionYear: 0,
            bottleSize: 0,
            alchoholPercentage: 0,
            origin: 0,
            description: "",
            //category: ""
        }
    }

    refreshList() {

        fetch(variables.API_URL + '/wines')
            .then(response => response.json())
            .then(data => {
                this.setState({ wines: data });
            });

        //TODO: fetch user list
    }

    componentDidMount() {
        this.refreshList();
    }

    editClick(emp) {
        debugger;
        this.setState({
        });
    }

    createClick() {
        fetch(variables.API_URL + '/addWine', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                //TODO: add stringify
            })
        })
            .then(res => res.json())
            .then((result) => {
                alert(result);
                this.refreshList();
            }, (error) => {
                alert('Failed');
            })
    }


    updateClick() {
        fetch(variables.API_URL + '/updateWine', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                //TODO: add stringify
            })
        })
            .then(res => res.json())
            .then((result) => {
                alert(result);
                this.refreshList();
            }, (error) => {
                alert('Failed');
            })
    }

    deleteClick(id) {
        if (window.confirm('Do you want to delete this?')) {
            fetch(variables.API_URL + 'wine/' + id, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then((result) => {
                    alert(result);
                    this.refreshList();
                }, (error) => {
                    alert('Failed');
                })
        }
    }

    imageUpload = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("file", e.target.files[0], e.target.files[0].name);

        fetch(variables.API_URL + '/saveWineImage', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                this.setState({ Image: data });
            })
    }

    render() {
        const {
            //set render values
        } = this.state;

        return (
            <div>
                <p>create html</p>
            </div>
        )
    }
}