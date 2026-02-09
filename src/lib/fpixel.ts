export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

// Define the shape of standard Facebook Pixel parameters
interface PixelEventParams {
    [key: string]: string | number | string[] | boolean | undefined;
    content_name?: string;
    content_ids?: string[];
    content_type?: string;
    content_category?: string; // Important for Real Estate
    value?: number;
    currency?: string;
    search_string?: string;
    status?: boolean;
}

// Define the shape of the eventID option object
interface EventIDOptions {
    eventID: string;
}

// Declare the fbq function on window
declare global {
    interface Window {
        fbq: (
            action: string,
            eventName: string,
            params?: PixelEventParams,
            options?: EventIDOptions
        ) => void;
    }
}

export const pageview = () => {
    if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'PageView');
    }
};

// Log generic events
export const event = (name: string, params: PixelEventParams = {}, eventId?: string) => {
    if (typeof window !== 'undefined' && window.fbq) {
        if (eventId) {
            window.fbq('track', name, params, { eventID: eventId });
        } else {
            window.fbq('track', name, params);
        }
    }
};
