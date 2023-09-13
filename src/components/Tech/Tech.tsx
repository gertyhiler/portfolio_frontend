import {API_URL} from "@/$api/getData";
import React from "react";
import {TechType} from "@/types/api";

export function Tech(tech: TechType) {
    console.log(tech)
    return (
        <li className="inline-flex w-14 h-14 gap-1.5 items-center justify-center px-1 py-1">
            <img
                className="work__technology-image"
                src={`${API_URL}${tech.attributes.logo.data.attributes.url}`}
                alt={tech.attributes.logo.data.attributes.name}
            />
        </li>
    )
}