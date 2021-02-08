import {Component} from 'react';
import {CardList} from "./components/card-list/card-list.component";
import {SearchBox} from "./components/search-box/search-box.component";

class App extends Component {

    constructor() {
        super();

        this.state = {
            searchField: '',
        	monsters: []
		}
    }

    componentDidMount() {
    	fetch('http://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({monsters: users}));
	}

	render() {
        const {monsters, searchField} = this.state;
        const filteredMonsters = monsters.filter(m => {
            const matchesName = m.name.toLowerCase().includes(searchField.toLowerCase());
            const matchesEmail = m.email.toLowerCase().includes(searchField.toLowerCase());
            return matchesName || matchesEmail;
        });

        return (
            <div className="App">
                <SearchBox placeholder={'search monsters'} handleChange={e => this.setState({searchField: e.target.value})}/>
                <CardList monsters={filteredMonsters}></CardList>
            </div>
        );
    }
}

export default App;