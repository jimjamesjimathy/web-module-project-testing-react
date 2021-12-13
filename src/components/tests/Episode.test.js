import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Episode from './../Episode';


test("renders without error", () => {
    render(<Episode episode={[]}/> )
});

test("renders the summary test passed as prop", ()=>{});

test("renders default image when image is not defined", ()=>{});
