import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem";

describe('GifItem tests', () => { 
    // arrange
    const title = 'Title'
    const url = 'http://url.com/'

    test('should match with the snapshot', () => { 
        // act
        const {container} = render(<GifItem title={title} url={url} />);

        // assert
        expect(container).toMatchSnapshot();
    });

    test('should show the image with the title and url', () => { 
        render(<GifItem title={title} url={url} />);
        //screen.debug();
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('should show the title in the parragraph', () => { 
        render(<GifItem title={title} url={url} />);
        //screen.debug();
        expect(screen.getByText(title)).toBeTruthy();
    })
 })