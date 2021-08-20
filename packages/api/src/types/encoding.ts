export class Serializable {
  /**
   * Returns a JSON serialization of the object
   */
  toJSON(): string {
    return JSON.stringify(this);
  }

  /**
   * Deserializes the object from a JSON string
   */
  fromJSON(json: string): this {
    return JSON.parse(json);
  }
}
