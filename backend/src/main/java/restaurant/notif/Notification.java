package restaurant.notif;

import java.time.LocalDateTime;

/**
 * @author Kasim - zjac003
 */
public class Notification {
	private String content;
	private String recipient; //user of recipient waiter
	private LocalDateTime timestamp;
	
	public Notification() {
		
	}
	
	public Notification(String content, String recipient, LocalDateTime timestamp) {
		this.content = content;
		this.recipient = recipient;
		this.timestamp = timestamp;
	}
	
	public String getContent() {
		return content;
	}
	
	public void setContent(String content) {
		this.content = content;
	}
	
	public String getRecipient() {
		return recipient;
	}
	
	public void setRecipient(String recipient) {
		this.recipient = recipient;
	}
	
	public LocalDateTime getTimeStamp() {
		return timestamp;
	}
	
	public void setTimestamp(LocalDateTime timestamp) {
		this.timestamp = timestamp;
	}
	
	@Override
    public String toString() {
        return "Notification{" +
                "content='" + content + '\'' +
                ", recipient='" + recipient + '\'' +
                ", timestamp=" + timestamp +
                '}';
    }
}
