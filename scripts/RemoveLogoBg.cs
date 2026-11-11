using System;
using System.Drawing;
using System.Drawing.Imaging;
using System.Runtime.InteropServices;

class Program
{
    static void Main(string[] args)
    {
        string src = args[0];
        string dest = args[1];
        int dark = 38;
        int keepRadius = 16;

        using (var bmp = new Bitmap(src))
        {
            int w = bmp.Width, h = bmp.Height;
            var rect = new Rectangle(0, 0, w, h);
            var data = bmp.LockBits(rect, ImageLockMode.ReadWrite, PixelFormat.Format32bppArgb);
            int stride = data.Stride;
            byte[] pixels = new byte[Math.Abs(stride) * h];
            Marshal.Copy(data.Scan0, pixels, 0, pixels.Length);

            bool[] chromatic = new bool[w * h];
            for (int y = 0; y < h; y++)
            {
                int row = y * stride;
                for (int x = 0; x < w; x++)
                {
                    int i = row + x * 4;
                    byte b = pixels[i], g = pixels[i + 1], r = pixels[i + 2];
                    int mx = Math.Max(r, Math.Max(g, b));
                    int mn = Math.Min(r, Math.Min(g, b));
                    if (mx - mn > 18 || mx > 70) chromatic[y * w + x] = true;
                }
            }

            bool[] keep = new bool[w * h];
            for (int y = 0; y < h; y++)
            {
                for (int x = 0; x < w; x++)
                {
                    if (!chromatic[y * w + x]) continue;
                    int x0 = Math.Max(0, x - keepRadius), x1 = Math.Min(w - 1, x + keepRadius);
                    int y0 = Math.Max(0, y - keepRadius), y1 = Math.Min(h - 1, y + keepRadius);
                    for (int yy = y0; yy <= y1; yy++)
                        for (int xx = x0; xx <= x1; xx++)
                            keep[yy * w + xx] = true;
                }
            }

            int minX = w, minY = h, maxX = 0, maxY = 0;
            for (int y = 0; y < h; y++)
            {
                int row = y * stride;
                for (int x = 0; x < w; x++)
                {
                    int i = row + x * 4;
                    byte b = pixels[i], g = pixels[i + 1], r = pixels[i + 2];
                    if (r <= dark && g <= dark && b <= dark && !keep[y * w + x])
                    {
                        pixels[i + 3] = 0;
                    }
                    else if (pixels[i + 3] > 0)
                    {
                        if (x < minX) minX = x;
                        if (y < minY) minY = y;
                        if (x > maxX) maxX = x;
                        if (y > maxY) maxY = y;
                    }
                }
            }

            Marshal.Copy(pixels, 0, data.Scan0, pixels.Length);
            bmp.UnlockBits(data);

            int pad = 8;
            minX = Math.Max(0, minX - pad);
            minY = Math.Max(0, minY - pad);
            maxX = Math.Min(w - 1, maxX + pad);
            maxY = Math.Min(h - 1, maxY + pad);
            int cw = maxX - minX + 1, ch = maxY - minY + 1;

            using (var cropped = new Bitmap(cw, ch, PixelFormat.Format32bppArgb))
            {
                using (var g = Graphics.FromImage(cropped))
                {
                    g.DrawImage(bmp, new Rectangle(0, 0, cw, ch), new Rectangle(minX, minY, cw, ch), GraphicsUnit.Pixel);
                }
                cropped.Save(dest, ImageFormat.Png);
                Console.WriteLine("Saved " + dest + " (" + cw + "x" + ch + ")");
            }
        }
    }
}
