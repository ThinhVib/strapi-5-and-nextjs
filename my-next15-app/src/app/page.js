import HomeLanding from "../../components/HomeLanding/HomeLanding";
import { getHomePage } from "../../lib/api-server";

export default async function HomePage() {

    const data = await getHomePage();

    console.log("data", data);

  return <HomeLanding data={data.data}/>;
}
