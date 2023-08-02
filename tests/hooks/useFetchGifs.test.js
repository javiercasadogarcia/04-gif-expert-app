import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('useFetchGifs tests', () => { 
    test('should retrieve initial state', () => {         
        const {result} = renderHook( () => useFetchGifs('Dragon Ball'));
        const {images, isLoading} = result.current;
        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });

    test('should retrieve data', async() => {         
        const {result} = renderHook( () => useFetchGifs('Dragon Ball'));
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0),
            {timeout: 1000}
        );

        const {images, isLoading} = result.current;
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });
 })