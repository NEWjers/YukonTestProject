import React from "react";
import axios from "axios";

class tableAuthor extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            authors: []
        };
    }

    componentDidMount() {
        axios.get("http://localhost:8080/author")
            .then(response => response.data)
            .then((data) => {
                this.setState({authors : data})
            })
    }

    render() {
        return(
            <table align={"center"} className="tableAuthor">
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Books</th>
                    </tr>
                        {
                            this.state.authors.length === 0 ?
                                <tr>
                                    <td>Authors unavailable</td>
                                </tr> :
                                this.state.authors.map((author) =>(
                                    <tr key={author.id}>
                                        <td>{author.name}</td>
                                        <td>{author.surname}</td>
                                        <td><a href={"http://localhost:3000/book"}>Book list</a></td>
                                    </tr>
                                ))
                        }
                </tbody>
            </table>
        );
    }
}

export default tableAuthor;