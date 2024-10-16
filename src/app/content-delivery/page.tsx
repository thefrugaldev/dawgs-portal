// app/content-delivery/page.tsx
import Image from 'next/image'

const getImage = async () => {
  try {
    const response = await fetch('app/lib/images');
    console.log('Fetch response:', response);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch image, status: ${response.status}`);
    }

    const data = await response.text();
    console.log('Fetched image data:', data);
    
    return data;
  } catch (error) {
    console.error('Error fetching image:', error);
  }
}

export default async function ScreenshotImage() {
  const imageUrl = await getImage();

  return (
    <div>
      {imageUrl ? (
        <Image src={imageUrl} alt="s3url" width={1200} height={1200} />
      ) : (
        <p>Loading image...</p>
      )}
    </div>
  );
}
