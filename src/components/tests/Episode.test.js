// import React from 'react';
// import '@testing-library/jest-dom/extend-expect';
// import { render, screen } from '@testing-library/react';
// import Episode from './../Episode';


// const testEpisode = {
//     id: 1,
//     name: '',
//     image: 'http://static.tvmaze.com/uploads/images/medius_landscape/67/168918.jpg',
//     season: 3,
//     number: 7,
//     summary: 'summary test',
//     runtime: 69
// }

// const testImage = {
//     id: 2,
//     name: '',
//     image: null,
//     season: 3,
//     number: 7,
//     summary: 'image test',
//     runtime: 69
// }


// test('renders without error', () => {
//     render(<Episode episode={testEpisode}/> );
// });

// test('renders the summary test passed as prop', ()=>{
//     render(<Episode episode={testEpisode} />);
//     const summary = screen.queryByText(/summary test/i);
//     console.log(summary);
//     expect(summary).toBeInTheDocument();
//     expect(summary).toBeTruthy();
//     expect(summary).toHaveTextContent('summary test');
// });

// test('renders default image when image is not defined', ()=>{
//     render(<Episode episode={testImage}/>)
//     const img = screen.queryByAltText('https://i.ibb.co/2FsfXqM/stranger-things.png');
//     expect(img).toBeInTheDocument();
// });
