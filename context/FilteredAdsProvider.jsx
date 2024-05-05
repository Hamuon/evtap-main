import { createContext, useState } from 'react';

const FilteredAdsContext = createContext();

export const FilteredAdsProvider = ({ children }) => {
    const [filteredAds, setFilteredAds] = useState([]);


    return (
        <FilteredAdsContext.Provider value={{ filteredAds, setFilteredAds }}>
            {children}
        </FilteredAdsContext.Provider>
    );
};

export default FilteredAdsContext;