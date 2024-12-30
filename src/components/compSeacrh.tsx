import { Box, Input, Spinner, VStack, Text } from "@chakra-ui/react";
import { BsPersonAdd } from "react-icons/bs";
import { useState } from "react";
import axios from "axios";

export default function CompSeacrh() {
  const [query, setQuery] = useState<string>(""); 
  const [searchResults, setSearchResults] = useState<any[]>([]); 
  const [isLoading, setIsLoading] = useState<boolean>(false); 

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === "") {
      setSearchResults([]);
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.get("http://localhost:3000/api/search", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, 
        },
        params: { q: value }, // Kirim query parameter
      });

      setSearchResults(response.data.results);
    } catch (error) {
      console.error("Error fetching search results:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box position="relative" width="100%" p="3">
      {/* Input Field */}
      <Input
        placeholder="Search your friends"
        paddingLeft="50px"
        color="white"
        borderRadius="20px"
        borderWidth="1px"
        borderColor="#04A51E"
        bgColor="#3F3F3F"
        value={query}
        onChange={handleSearch} 
      />
      {/* Ikon */}
      <Box position="absolute" top="50%" left="20px" transform="translateY(-50%)">
        <BsPersonAdd style={{ color: "gray", fontSize: "20px" }} />
      </Box>

      {/* Loading Indicator */}
      {isLoading && <Spinner color="white" mt="4" />}

      {/* Hasil Pencarian */}
      {searchResults.length > 0 && (
        <VStack mt="4" align="stretch" spaceX="3">
          {searchResults.map((user) => (
            <Box
              key={user.id}
              p="3"
              borderRadius="md"
              bgColor="#2d2d2d"
              borderWidth="1px"
              borderColor="#04A51E"
            >
              <Text color="white" fontWeight="bold">
                {user.username}
              </Text>
              <Text color="#909090">{user.email}</Text>
            </Box>
          ))}
        </VStack>
      )}
      {query.trim() !== "" && searchResults.length === 0 && !isLoading && (
        <Text color="white" mt="4">
          No results found.
        </Text>
      )}
    </Box>
  );
}

// import { Box, Input } from "@chakra-ui/react";
// import { BsPersonAdd } from "react-icons/bs";

// export default function CompSeacrh(){
//     return(
//         <>
//         <Box position="relative" width="100%" p="3">
//             {/* Input Field */}
//             <Input placeholder="Search your friends" paddingLeft="50px" color="white" borderRadius="20px" borderWidth="1px" borderColor="#04A51E" bgColor="#3F3F3F"/>
//             {/* Ikon */}
//             <Box position="absolute" top="50%" left="20px" transform="translateY(-50%)">
//                 <BsPersonAdd style={{ color: "gray", fontSize: "20px" }} />
//             </Box>
//         </Box>
//         </>
//     )

// }