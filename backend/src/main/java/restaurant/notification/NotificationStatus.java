package restaurant.notification;

/**
 * ENUM constant to represent status of an order object.
 * 
 * @author Philip Anaafi Asumadu - zkac229
 */
public enum NotificationStatus {
    WAITING("waiting"), DONE("done"),;

  private String textValue;

  NotificationStatus(String textValue) {
    this.textValue = textValue;
  }

  /**
   * Converts 'done'to corresponding enum value.
   * 
   * @param str String status to be converted
   * @return Returns enum constant corresponding to parameter given
   */
  public static NotificationStatus convertFromString(String str) {
    System.out.println("status in convert: " + str);
    switch (str) {
      case "done":
        return NotificationStatus.DONE;
      default:
        return NotificationStatus.WAITING;
    }
  }

  @Override
  public String toString() {
    return this.textValue;
  }
}


