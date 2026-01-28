/**
 * Generate WhatsApp Click-to-Chat link with pre-filled message
 * @param phoneNumber - International phone number without + (e.g., "33612345678")
 * @param message - Pre-filled message text
 * @returns WhatsApp click-to-chat URL
 */
export function getWhatsAppLink(phoneNumber: string, message: string): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}
