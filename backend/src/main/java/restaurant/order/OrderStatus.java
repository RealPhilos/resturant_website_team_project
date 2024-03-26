package restaurant.order;

/**
 * ENUM constant to represent status of an order object.
 * 
 * @author Luque van der Merwe - ZLAC180
 */
public enum OrderStatus {
  ORDERED("ordered"), COOKING("cooking"), DONE("done"), DELIVERED("delivered"), WAITING_FOR_WAITER(
      "waiting");

  private String textValue;

  OrderStatus(String textValue) {
    this.textValue = textValue;
  }

  /**
   * Converts 'ordered', 'cooking', 'done', 'delivered' to corresponding enum value.
   * 
   * @param str String status to be converted
   * @return Returns enum constant corresponding to parameter given
   */
  public static OrderStatus convertFromString(String str) {
    System.out.println("status in convert: " + str);
    switch (str) {
      case "delivered":
        return OrderStatus.DELIVERED;
      case "cooking":
        return OrderStatus.COOKING;
      case "done":
        return OrderStatus.DONE;
      default:
        return OrderStatus.ORDERED;
    }
  }

  @Override
  public String toString() {
    return this.textValue;
  }
}


