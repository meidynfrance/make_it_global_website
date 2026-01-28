import { describe, it, expect } from 'vitest';
import { getWhatsAppLink } from './whatsapp';

describe('getWhatsAppLink', () => {
  it('should generate correct WhatsApp link with encoded message', () => {
    const phoneNumber = '33612345678';
    const message = 'Bonjour, je souhaite en savoir plus';
    const result = getWhatsAppLink(phoneNumber, message);

    expect(result).toBe('https://wa.me/33612345678?text=Bonjour%2C%20je%20souhaite%20en%20savoir%20plus');
  });

  it('should handle French accents correctly', () => {
    const phoneNumber = '33612345678';
    const message = 'Vidéo avec lip-sync français';
    const result = getWhatsAppLink(phoneNumber, message);

    expect(result).toContain('Vid%C3%A9o');
    expect(result).toContain('fran%C3%A7ais');
  });

  it('should encode special characters that need encoding', () => {
    const phoneNumber = '33612345678';
    const message = 'Test: question? & symbol!';
    const result = getWhatsAppLink(phoneNumber, message);

    expect(result).toContain('%3A'); // : (encoded)
    expect(result).toContain('%3F'); // ? (encoded)
    expect(result).toContain('%26'); // & (encoded)
    // Note: ! is not encoded by encodeURIComponent (it's an unreserved character)
    expect(result).toContain('symbol!');
  });

  it('should handle line breaks', () => {
    const phoneNumber = '33612345678';
    const message = 'Ligne 1\nLigne 2';
    const result = getWhatsAppLink(phoneNumber, message);

    expect(result).toContain('%0A');
  });

  it('should work with different phone number formats', () => {
    const phoneNumber1 = '33612345678';
    const phoneNumber2 = '14155552671';
    const message = 'Hello';

    const result1 = getWhatsAppLink(phoneNumber1, message);
    const result2 = getWhatsAppLink(phoneNumber2, message);

    expect(result1).toBe('https://wa.me/33612345678?text=Hello');
    expect(result2).toBe('https://wa.me/14155552671?text=Hello');
  });
});
