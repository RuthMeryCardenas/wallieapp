// import Data from '../utils/GetData'

const FilterByMaterial = (key) => {
    const data = Data.wallie;

    return data.wallie.filter((item) => {
        return item.tipos.toLowerCase() == key;
    });
}