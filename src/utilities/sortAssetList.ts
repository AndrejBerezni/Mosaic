import { IAsset } from '../firebase-config';

const sortAssetList = (assetList: IAsset[], sortValue: string) => {
  switch (sortValue) {
    case 'A-Z':
      return assetList.sort((a: IAsset, b: IAsset) => {
        return a.name < b.name ? -1 : 1;
      });
    case 'Z-A':
      return assetList.sort((a: IAsset, b: IAsset) => {
        return a.name > b.name ? -1 : 1;
      });
    case 'Amount Asc.':
      return assetList.sort((a: IAsset, b: IAsset) => {
        return a.amount - b.amount;
      });
    case 'Amount Desc.':
      return assetList.sort((a: IAsset, b: IAsset) => {
        return b.amount - a.amount;
      });
  }
};

export default sortAssetList;
