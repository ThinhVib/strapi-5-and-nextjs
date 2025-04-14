import { cookies } from "next/headers";

export async function getHeaderData() {
  const cookieStore = cookies();
  const lang = cookieStore.get("lang")?.value || "vi";
  const url = `http://localhost:1337/api/headers?locale=${lang}&populate[logo]=true&populate[navigations]=true&populate[rightIcons][populate]=icon`;
  console.log("url calling", url);
  const res = await fetch(url);
  if (!res.ok) {
    console.log("Failed to fetch data", res.status);
  }
  const json = await res.json();

  const raw = json.data[0];

  return {
    logo: raw.logo,
    navigations: raw.navigations,
    rightIcons: raw.rightIcons,
  };
}


export async function getSideBarData() {
  const cookieStore = cookies();
  const lang = cookieStore.get("lang")?.value || "vi";
  const url = `http://localhost:1337/api/sidebars?locale=${lang}&populate=*`;
  console.log("url calling", url);
  const res = await fetch(url);
  if (!res.ok) {
    console.log("Failed to fetch data", res.status);
  }
  const json = await res.json();

  console.log("json", json);

  return {
    data: json.data?.[0],
  };
}



export async function getHomePage() {
  const cookieStore = cookies();
  const lang = cookieStore.get("lang")?.value || "vi";
  const url = `http://localhost:1337/api/page-vay-mua-nha?locale=${lang}&populate[benifit_vay_mua_nha][populate]=*&populate[banner_img][populate]=*`;
  console.log("url calling", url);
  const res = await fetch(url);
  if (!res.ok) {
    console.log("Failed to fetch data", res.status);
  }
  const json = await res.json();

  console.log("json", json);

  return {
    data: json.data,
  };
}
