import { WorkCard } from "../WorkCard";
import { API_URL, getData } from "@/$api/getData";
import { FC } from "react";

const WorksList: FC = async () => {
  const data = await getData();
  return (
    <ul className="work__list" id="projects">
      {data.map((i) => {
        return (
          <WorkCard
            variant="work"
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
  );
};

export default WorksList;
