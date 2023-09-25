import ListOptions from "./ListOptions/ListOptions";
import AssetList from "./AssetList/AssetList";

import AddAsset from "./AddAsset/AddAsset";
import Total from "./Total/Total";
import NewAssetForm from "../Forms/NewAssetForm/NewAssetForm";

function UserPage() {
  return (
    <>
      <ListOptions />
      <AssetList />
      <AddAsset />
      <Total />
      <NewAssetForm />
    </>
  );
}

export default UserPage;
