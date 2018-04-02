/**
 * this update current type with additional data, this could be useful in align...
 **/
import { Map } from "immutable";

export default (change, { data }) => {
  const { value } = change;
  const blocks = value.blocks;
  // if have blocks
  if (blocks) {
    blocks.forEach(type => {
      const mapData = Map(data);
      let originalDataAttr = type.get("data") || Map({});
      let newData;

      mapData.forEach((value, key) => {
        newData = originalDataAttr.set(key, value);
      });

      const newType = type.set("data", newData);
      // reset current type with new data
      change.setBlocks(newType);
    });
  }

  return change;
};
