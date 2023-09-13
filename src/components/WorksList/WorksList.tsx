import { apiResponse } from "@/types/api";
import { WorkCard } from "../WorkCard";
import {API_URL, getData} from "@/$api/getData";

export async function WorksList () {
  const data: { data: apiResponse[] } = await getData();
  return (
    <ul className="work__list" id="projects">
    {data.data.map((i) => {
      return (
        <WorkCard
          screenshot={`${API_URL}${i.attributes.screenshot.data.attributes.formats.large.url}`}
          description={i.attributes.description}
          headline={i.attributes.headline}
          link={i.attributes.link}
          tech={i.attributes.teches.data}
          key={i.id}
        />
      );
    })}
  </ul>
  )
}