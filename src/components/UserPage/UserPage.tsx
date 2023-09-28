import ListOptions from "./ListOptions/ListOptions";
import AssetList from "./AssetList/AssetList";
import AddAsset from "./AddAsset/AddAsset";
import Total from "./Total/Total";
import NewAssetForm from "../Forms/NewAssetForm/NewAssetForm";
import EditAssetForm from "../Forms/EditAssetForm/EditAssetForm";
function UserPage() {
  return (
    <>
      <ListOptions />
      <AssetList />
      <AddAsset />
      <Total />
      <NewAssetForm />
      <EditAssetForm />
    </>
  );
}

export default UserPage;
