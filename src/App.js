import React from 'react';
import Destination from './Components/Destination/index.js';
import './style.css';
import { Component } from 'react';

const DestinationList = [
  {
    uniqueNo: 1,
    imageUrl:
      'https://media.istockphoto.com/id/511119416/photo/indian-landmark-gadi-sagar-in-rajasthan.jpg?s=612x612&w=0&k=20&c=dO7TbXh3sd6_QmgcF_nYi6ynyIAvPI5STavwzCDyWTI=',
    name: 'India',
    description: 'Places to view in India',
    reviewImage:
      'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    ProfileName: 'Esther Howard',
    likes: 100,
  },
  {
    uniqueNo: 2,
    imageUrl:
      'https://images.unsplash.com/photo-1575986767340-5d17ae767ab0?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dG91cmlzdHxlbnwwfHwwfHx8MA%3D%3D',
    name: 'Hong Kong',
    description: 'Best places to visit in Hong Kong',
    reviewImage: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    ProfileName: 'Jacob Jones',
    likes: 27,
  },
  {
    uniqueNo: 3,
    imageUrl:
      'https://www.imf.org/-/media/Images/IMF/News/news-article-images/2020/CF-570x312-Tourism-Preto-perola-Getty-Images-iStock-1011241694.ashx',
    name: 'Spain',
    description: 'Best places to vist in Spain',
    reviewImage:
      'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    ProfileName: 'Esther Howard',
    likes: 40,
  },
  {
    uniqueNo: 4,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS307wwJ7RreoixJm3Y9an5In8n5O45YcpBnQpeikDm1w&s',
    name: 'Maldives',
    description: 'Best places to visit in Maldives',
    reviewImage: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    ProfileName: 'Floyd Miles',
    likes: 32,
  },
  {
    uniqueNo: 5,
    imageUrl:
      'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202112/photo-1571607182000-b1d278eb9b_1200x768.jpeg',
    name: 'Bulgaria',
    description: 'Best places to visit in Bulgaria',
    reviewImage: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    ProfileName: 'Devon Lane',
    likes: 74,
  },
];

class App extends Component {
  state = {
    searchInput: '',
    destinationDetailsList: DestinationList,
  };
  onChangeSearchInput = (event) => {
    this.setState({
      searchInput: event.target.value,
    });
  };
  render() {
    const { searchInput, destinationDetailsList } = this.state;
    const searchResults = destinationDetailsList.filter((eachUser) =>
      eachUser.name.includes(searchInput)
    );
    return (
      <div>
        <h1>Search Destinations</h1>
        <p>
          Search for your Favourite Destination and its reviews online and plan
          your new holiday destination based on the description and reviews of
          your favourite destinations{' '}
        </p>
        <input
          type="search"
          placeholder="Search Destination"
          value={searchInput}
          onChange={this.onChangeSearchInput}
        />
        <h3>Popular Destinations</h3>

        <div className="destinations-container">
          {searchResults.map((eachItem) => (
            <Destination
              url={eachItem.imageUrl}
              place={eachItem.name}
              describe={eachItem.description}
              reviewImg={eachItem.reviewImage}
              profileName={eachItem.ProfileName}
              likes={eachItem.likes}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default App;
