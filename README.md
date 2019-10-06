## Virtual-Tour-React-360

Master's project of an application built on the basis of the React 360 framework, which enables a virtual tour of the AEI faculty of the Silesian University of Technology.

**Running App**

1.  npm install
2.  npm start
3.  open "http://localhost:8081/index.html"

**Add new scenes**

1.  Prepare pictures 
    - the default naming is: 
        >p<floor_number>_<scene_number>

        (i.e. *p1_1*)
2.  Complete the dependency map (`/etc/map.json`) for the source addresses of the added photos and parameters of the active elements:
``` {
        "id": <scene_id>,
        "image": <photo_src>,
        "hotspots": [
            {
              "sceneId": <next_scene>,
              "position": {
                "left": <positionX_hotspot>,
                "top": <positionY_hotspot>
              },
              "rotation": {
                "x": <rotateX_next_scene>,
                "y": <rotateY_next_scene>,
                "z": <rotateZ_next_scene>
              }
            }
        ]
    }```
