// app/content-delivery/page.tsx
import Image from 'next/image'

const getImage = async () => {
  try {
    const response = await fetch('http://localhost:3000/lib/images');
    if (!response.ok) {
      throw new Error('Failed to fetch image');
    }
    const data = await response.text()
    return data
  } catch (error) {
    console.error('Error fetching image:', error);
  }
}

export default async function ScreenshotImage() {
 const imageUrl = await getImage()
 
  return (
    <div>
      {imageUrl ? (
        <Image src={imageUrl} alt="s3url" width='1200' height='1200'/>
      ) : (
        <p>Loading image...</p>
      )}
    </div>
  );
};