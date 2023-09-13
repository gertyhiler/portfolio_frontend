import { WorksList } from "@/components/WorksList";
import {Hero} from "@/components/Hero/Hero";

export default function Home() {
  return (
    <>
        <section className="work">
            <Hero/>
            <WorksList/>
        </section>
    </>
  );
}
