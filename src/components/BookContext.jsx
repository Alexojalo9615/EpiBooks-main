import { createContext, useState } from "react";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
    const [selectedBook, setSelectedBook] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    const contextValue = {
        selectedBook,
        setSelectedBook,
        searchQuery,
        setSearchQuery
    }

    return (
        <BookContext.Provider value={contextValue}>
        {children}
        </BookContext.Provider>
    );
}

export default BookProvider;