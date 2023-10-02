import { useEffect, useState } from "react";
import "./AssetList.css";
import { Container, Col, Row } from "react-bootstrap";
import { getAssetsForUser } from "../../../firebase-config";
import { IAsset } from "../../../firebase-config";
import AssetBar from "../AssetBar/AssetBar";
import { useSelector } from "react-redux";
import { RootState } from "../../../reducers/combineReducers";
import { useDispatch } from "react-redux";
import { removeFromTotalValue } from "../../../actions/totalValueActions";
import sortAssetList from "../../../utilities/helpers/sortAssetList";

function AssetList() {
  const dispatch = useDispatch();
  const [assetList, setAssetList] = useState<IAsset[]>([]);
  const refreshList = useSelector(
    (state: RootState) => state.refreshAssetList.refresh
  );
  const filter = useSelector((state: RootState) => state.filter);
  const sort = useSelector((state: RootState) => state.sort);

  useEffect(() => {
    const getAssets = async () => {
      try {
        const newAssetList = await getAssetsForUser();
        sortAssetList(newAssetList, sort);
        filter === "All"
          ? setAssetList(newAssetList)
          : setAssetList(
              newAssetList.filter((asset) => {
                if (asset.type === filter) {
                  return asset;
                } else {
                  dispatch(removeFromTotalValue({ name: asset.name }));
                }
              })
            );
      } catch (error) {
        console.error(error);
      }
    };
    getAssets();
  }, [refreshList]);

  return (
    <Container
      fluid
      className="justify-content-center"
      style={{ marginBottom: "132px" }}
    >
      <Row className="justify-content-center mt-0 p-2 asset-legend">
        <Col xs={3} lg={2}>
          <p className="asset-legend-text">Name</p>
        </Col>
        <Col xs={3} lg={2}>
          <p className="asset-legend-text">Type</p>
        </Col>
        <Col xs={3} lg={2}>
          <p className="asset-legend-text">Amount</p>
        </Col>
        <Col xs={3} lg={2}>
          <p className="asset-legend-text">Value</p>
        </Col>
      </Row>
      <Row className="justify-content-center assets-container">
        <Col lg={8}>
          {assetList.length === 0 && (
            <p className="mt-5 no-assets-message">
              No assets yet. Click on the button below to start adding your
              assets.
            </p>
          )}
          {assetList.map((asset) => (
            <AssetBar
              key={asset.symbol}
              assetName={asset.name}
              assetType={asset.type}
              units={asset.amount}
              assetCode={asset.symbol}
            />
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default AssetList;

// recalculate total value
// create reducer that contains all assets in assetlist
// when you change something about asset, run recalculate
// state {
//   assets: [btc ,rsd...]
// } state.reduce( total, asset => total + asset.value)
