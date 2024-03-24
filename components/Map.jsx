"use client"
import React, { useState } from "react";
import Mapir from "mapir-react-component";

const Map = Mapir.setToken({
    transformRequest: url => {
        return {
            url: url,
            headers: {
                "x-api-key": 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjcwYTgyN2VkOGY3YjY1YzFjYmFlYzFhYWE2NzEwNDk2ZjJlNDczOWZlZDE3OGE3MTUwZDE1OTUxNTdiNzBjZDA5Zjc0MjNjY2RiNzNmMWY5In0.eyJhdWQiOiIyNjcwNyIsImp0aSI6IjcwYTgyN2VkOGY3YjY1YzFjYmFlYzFhYWE2NzEwNDk2ZjJlNDczOWZlZDE3OGE3MTUwZDE1OTUxNTdiNzBjZDA5Zjc0MjNjY2RiNzNmMWY5IiwiaWF0IjoxNzEwNjk5OTYzLCJuYmYiOjE3MTA2OTk5NjMsImV4cCI6MTcxMzExOTE2Mywic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.CS8uYFnBTVKuccJuIxvo-F3VfYkWdAOMu2DmennPFrwPKQYDk6qcbxX97u1MTcAQw9uyeAnuQt51i4DanOeWmJoE4YIOwRLbqlPODhoIkiSGOmqSBeXEeAXNOiKQrvPzgp-w4e7yH2upcsKkZDypBvkc4L1PJ2sP6AvCYOyj_lsgB5c_0myILTfkBvwotP_mhdduXusZALzgkHL5pYh29ToNkKq2mZJV5GYrkzxVVaA6zjTuYB5Ept7RJCLRVtWCRQyL6V_OC8XLzePywd1nEwYYXVkuhmqvB8wvrhlpPHiqKX1_242lAcB2t-53ZJG9LmqYxxrMU4Oj3kkKwukOQA', //Mapir api key
                "Mapir-SDK": "reactjs"
            }
        };
    }
});

export const MapComponent = ({ setValue, setMapOpen }) => {
    const [markerArray, setMarkerArray] = useState(null);
    const [coord, setCoord] = useState([51.42, 35.72]);

    async function reverseFunction(map, e) {
        var url = `https://map.ir/reverse/no?lat=${e.lngLat.lat}&lon=${e.lngLat.lng}`;
        await fetch(url, {
            headers: {
                "Content-Type": "application/json",
                "x-api-key": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjcwYTgyN2VkOGY3YjY1YzFjYmFlYzFhYWE2NzEwNDk2ZjJlNDczOWZlZDE3OGE3MTUwZDE1OTUxNTdiNzBjZDA5Zjc0MjNjY2RiNzNmMWY5In0.eyJhdWQiOiIyNjcwNyIsImp0aSI6IjcwYTgyN2VkOGY3YjY1YzFjYmFlYzFhYWE2NzEwNDk2ZjJlNDczOWZlZDE3OGE3MTUwZDE1OTUxNTdiNzBjZDA5Zjc0MjNjY2RiNzNmMWY5IiwiaWF0IjoxNzEwNjk5OTYzLCJuYmYiOjE3MTA2OTk5NjMsImV4cCI6MTcxMzExOTE2Mywic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.CS8uYFnBTVKuccJuIxvo-F3VfYkWdAOMu2DmennPFrwPKQYDk6qcbxX97u1MTcAQw9uyeAnuQt51i4DanOeWmJoE4YIOwRLbqlPODhoIkiSGOmqSBeXEeAXNOiKQrvPzgp-w4e7yH2upcsKkZDypBvkc4L1PJ2sP6AvCYOyj_lsgB5c_0myILTfkBvwotP_mhdduXusZALzgkHL5pYh29ToNkKq2mZJV5GYrkzxVVaA6zjTuYB5Ept7RJCLRVtWCRQyL6V_OC8XLzePywd1nEwYYXVkuhmqvB8wvrhlpPHiqKX1_242lAcB2t-53ZJG9LmqYxxrMU4Oj3kkKwukOQA"
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setValue("main_street", data.primary)
                setValue("region", data.name)
                setValue("street", data.last)
                setValue("alley", data.name)
                setValue("block", data.plaque)
                setValue("address", data.address_compact)
                setMapOpen(false)
            })

        const array = [];
        array.push(
            <Mapir.Marker
                coordinates={[e.lngLat.lat, e.lngLat.lng]}
                anchor="bottom"
            />
        );
        setMarkerArray(array);
    }
    return (
        <Mapir center={coord} Map={Map} onClick={reverseFunction}>
            {markerArray}
        </Mapir>
    );
};