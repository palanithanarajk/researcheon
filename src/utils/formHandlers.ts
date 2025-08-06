export interface FormData {
  name: string;
  email: string;
  message?: string;
  formType: 'contact' | 'subscribe';
}

export interface FormResponse {
  success: boolean;
  message: string;
}

export const handleFormSubmit = async (formData: FormData): Promise<FormResponse> => {
  const scriptUrl = 'https://script.google.com/macros/s/AKfycbxMwhRE7isSdPr4mhx-FZAsB2klffZgtlnTbMONbvxjovSSWlVVQxTZJaDaNrRgy0fyqA/exec';
  
  try {
    // First try with proper CORS handling
    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });
    
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error('Error submitting form:', error);
    
    // Fallback: Try with mode: 'no-cors' to bypass CORS issues
    try {
      const fallbackResponse = await fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      // Since we're using no-cors, we can't read the response directly
      // We'll assume success if no error is thrown
      return { success: true, message: 'Form submitted successfully' };
    } catch (fallbackError) {
      console.error('Fallback submission also failed:', fallbackError);
      throw new Error('Form submission failed. Please try again later.');
    }
  }
};
