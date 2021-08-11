import React from "react";

type FoodsList = {
  foods: any[];
};

interface SearchResultsProps {
  nutrition: FoodsList | null;
}

const SearchResults: React.FC<SearchResultsProps> = ({ nutrition }) => {
  return <div></div>;
};

export default SearchResults;
