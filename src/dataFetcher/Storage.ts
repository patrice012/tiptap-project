export class Storage {
  private storeKey = "tiptap-store";
  constructor() {}

  save(data: unknown) {
    if (data) {
      const stringifyData = JSON.stringify(data);
      localStorage.setItem(this.storeKey, stringifyData);
    }
  }

  get() {
    const data = localStorage.getItem(this.storeKey);
    if (data) {
      try {
        const parseData = JSON.parse(data);
        return parseData;
      } catch (error) {
        console.error(error, "Error getting data");
      }
    }
    return null;
  }

  clear() {
    localStorage.clear();
  }
}
