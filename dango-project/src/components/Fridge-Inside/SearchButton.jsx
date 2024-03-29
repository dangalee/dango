import { IoMdSearch } from "react-icons/io";
import {getNameGroceryInfo} from "../../api/Api";

function SearchButton({ searchTerm }) {

  const pageInfo = {
    page: 0,
    size: 10
  };

  const handleSearch = async () => {
    try {
      const response = await getNameGroceryInfo({searchTerm, pageInfo});
      console.log('이름에 따른 검색 성공', response)
    } catch (error) {
      console.log('이름에 따른 검색 실패', error);
    }
  }

    return (
      <div className="w-[5vw] h-[4vh] items-center flex justify-center">
        <button className="text-3xl" onClick={handleSearch}><IoMdSearch /></button>
      </div>
    );
  }
  
  export default SearchButton;