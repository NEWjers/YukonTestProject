import React from "react";
import axios from "axios";

class tableBook extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            books: []
        };
    }

    componentDidMount() {
        axios.get("http://localhost:8080/book")
            .then(response => response.data)
            .then((data) => {
                this.setState({books : data})
            })
    }

    render() {
        return(
            <table align={"center"}>
                <tbody>
                <tr>
                    <th>Name</th>
                    <th>Genre</th>
                    <th>Date</th>
                    <th>Author</th>
                </tr>
                {
                    this.state.books.length === 0 ?
                        <tr>
                            <td>Books unavailable</td>
                        </tr> :
                        this.state.books.map((book) =>(
                            <tr key={book.id}>
                                <td>{book.name}</td>
                                <td>{book.genre}</td>
                                <td>{book.date}</td>
                                <td>{book.author.name}{book.author.surname}</td>
                            </tr>
                        ))
                }
                </tbody>
            </table>
        );
    }
}

export default tableBook;