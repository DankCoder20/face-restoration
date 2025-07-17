import Replicate from "replicate";


const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

export async function restoreImage(imageUrl) {
  
  const output = await replicate.run(
    "tencentarc/gfpgan:0fbacf7afc6c144e5be9767cff80f25aff23e52b0708f17e20f9879b2f21516c",
    {
      input: {
        img: imageUrl,      // 👈 From Bytescale upload
        scale: 2,           // 1 = no upscaling, 2 = upscale 2x
        version: "v1.4",    // Specify GFPGAN version
      },
    }
  );
 

  // The output is usually a single image URL (string)
  return output;
}
