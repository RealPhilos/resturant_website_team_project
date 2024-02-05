package restaurant.order;

/**
 * ENUM constant to represent status of an order object.
 * 
 * @author Luque van der Merwe - ZLAC180
 */
public enum Status {
  ORDERED("ordered"), COOKING("cooking"), DONE("done"), DELIVERED("delivered");

  private String textValue;

  Status(String textValue) {
    this.textValue = textValue;
  }

  /**
   * Converts 'ordered', 'cooking', 'done', 'delivered' to corresponding enum value.
   * 
   * @param str String status to be converted
   * @return Returns enum constant corresponding to parameter given
   */
  public static Status convertFromString(String str) {
    switch (str) {
      case "delivered":
        return Status.DELIVERED;
      case "cooking":
        return Status.COOKING;
      case "done":
        return Status.DONE;
      default:
        return Status.ORDERED;
    }
  }

  @Override
  public String toString() {
    return this.textValue;
  }
}


