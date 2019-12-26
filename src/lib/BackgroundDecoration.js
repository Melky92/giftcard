import React from 'react';
import Particles from 'react-particles-js';

function BackgroundDecoration() {
  return (
      
      <Particles
        style={{
            "width": "100%",
            "height": "100%",
            "position": "absolute",
            "top": "0",
            "left": "0",
            "zIndex": "-100",
        }}
        params={{
          "particles": {
              "number": {
                  "value": 160,
                  "density": {
                      "enable": false
                  }
              },
              "size": {
                  "value": 10,
                  "random": true
              },
              "move": {
                  "direction": "bottom",
                  "out_mode": "out"
              },
              "line_linked": {
                  "enable": false
              }
          },
          "interactivity": {
              "events": {
                  "onclick": {
                      "enable": true,
                      "mode": "remove"
                  }
              }
          }
      }} />
      
  );
}

export default BackgroundDecoration;
