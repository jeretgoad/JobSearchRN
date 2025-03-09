export const checkImageURL = async (url) => {
    try {
        const response = await fetch(url);
        console.log("response ok");
        return response.ok; // Returns true if status is 200-299
    } catch (error) {
        console.log("response false");
        return false; // Handles network errors or exceptions
    }
  };
