import { useQuery } from "@tanstack/react-query";
import React from "react";


export default function BoardList({companies, fields}) {
    return(
        <div>
            <ul>
               {
                companies?.map((company, index) => 
                    <li key={index}>
                        {
                            fields.map((field, index) => 
                                <h3 key={index}>{company[field]}</h3>
                            )
                        }
                    </li>
                )
               } 
            </ul>
        </div>
    )
}