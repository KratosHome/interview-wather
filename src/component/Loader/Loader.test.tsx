import {render, screen} from "@testing-library/react";
import {Loader} from "./Loader";

describe("Loader test", () => {
    test("loader have",() => {
        render (<Loader/>)
        expect(screen.getByTestId("Loader-test")).toBeInTheDocument()
    })
})