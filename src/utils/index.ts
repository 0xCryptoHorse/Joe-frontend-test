import axios from "axios";


export const cloudflareUrl = (url: string): string => {
  if (!url) {
    return url;
  }
  if (url.substring(0, 7) === "ipfs://") {
    return `https://cloudflare-ipfs.com/ipfs/${url.substring(7)}`;
  } else {
    return url;
  }
};

export const imgUrlFromJson = async (url: string): Promise<string> => {
  if (!url) return "";
  let url_ = url;
  let extension = url.split(".").pop()?.toLowerCase();
  if (extension === "jpg" || extension === "png" || extension === "jpeg") {
    return cloudflareUrl(url_);
  }
  let json_res = await axios.get(url);
  if (json_res.headers["content-type"]?.substring(0, 5) === "image") {
    return url;
  } else {
    let json_data = json_res.data;
    let img_url = json_data["image"] ? json_data["image"] : json_data["image_uri"];
    url_ = cloudflareUrl(img_url);
  }
  return url_;
};