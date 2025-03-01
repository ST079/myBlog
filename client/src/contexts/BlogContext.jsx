import {useState,useEffect,useContext,createContext} from 'react'
import useBlog from '../hooks/useBlog';


export const BlogContext = createContext(null);
export const BlogContextProvider = ({children}) => {
//    const [title, setTitle] = useState("");
   const {data:blogs,loading,error,msg}=useBlog({});
    return <BlogContext.Provider value={{blogs,loading,error,msg}}>
        {children}      
    </BlogContext.Provider>
}

export const useBlogContext = () => {
    const context = useContext(BlogContext);
    if (!context) {
        throw new Error("useBlogContext must be used within a BlogContextProvider");
    }
    return context;
}