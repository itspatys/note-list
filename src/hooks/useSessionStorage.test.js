import { renderHook } from "@testing-library/react-hooks/pure"
import useSessionStorage from "./useSessionStorage"


describe("Testing useSessionStorage hook", () => {
    test("Should save and return date in Date type", () => {
        const noteObj = {
            date: new Date(0),
            text: "Test note"
        }
        const { result } = renderHook(() => useSessionStorage("note", [noteObj]))
        const [[note]] = result.all

        expect(note[0].date).toEqual(new Date(0))
    })
})