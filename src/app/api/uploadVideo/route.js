import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req) {
  const { title, videoBase64, thumbnailBase64 } = await req.json();

  try {
    // Upload video
    const videoResponse = await cloudinary.uploader.upload(videoBase64, {
      resource_type: 'video',
      folder: `anime-videos/${title}`,
    });

    // Upload thumbnail with the name "thumbnail.jpg"
    const thumbnailResponse = await cloudinary.uploader.upload(thumbnailBase64, {
      folder: `anime-videos/${title}`,
      public_id: 'thumbnail', // This sets the filename to "thumbnail.jpg"
    });

    // Response data
    return new Response(
      JSON.stringify({
        title,
        videoUrl: videoResponse.secure_url,
        thumbnailUrl: thumbnailResponse.secure_url,
        videoPublicId: videoResponse.public_id,
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
