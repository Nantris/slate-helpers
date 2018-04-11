import { Map } from "immutable";

export default (change, { data }) => {
  const { value } = change;
  const inlines = value.inlines;
  // if have inlines
  if (inlines) {
    inlines.forEach(type => {
      const mapData = Map(data);
      let originalDataAttr = type.get("data") || Map({});
      let newData;

      mapData.forEach((value, key) => {
        newData = originalDataAttr.set(key, value);
      });

      const newType = type.set("data", newData);
      // reset current type with new data
      change.setInlines(newType);
    });
  }

  return change;
};
