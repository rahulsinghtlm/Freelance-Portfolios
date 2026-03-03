"use client";

import { useEffect, useRef } from "react";

const vertexShaderSource = `
attribute vec2 a_position;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

const fragmentShaderSource = `
precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;

  float burn = smoothstep(
    0.3 + sin(u_time * 0.7) * 0.25,
    0.31 + sin(u_time * 0.7) * 0.25,
    uv.x
  );

  // Black → deep red glow
  vec3 base = vec3(0.0, 0.0, 0.0);
  vec3 glow = vec3(0.93, 0.27, 0.27); // #ef4444-ish
  vec3 color = mix(base, glow, burn);

  gl_FragColor = vec4(color, 0.9);
}
`;

export default function MagicBurnCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const glContext = canvas.getContext("webgl");
    if (!glContext) return;

    const gl = glContext; // Type narrowing for nested functions

    // Initialize canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();

    let vertexShader: WebGLShader | null = null;
    let fragmentShader: WebGLShader | null = null;

    function createShader(
      type: number,
      source: string
    ): WebGLShader | null {
      const shader = gl.createShader(type);
      if (!shader) return null;

      gl.shaderSource(shader, source);
      gl.compileShader(shader);

      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }

      return shader;
    }

    function createProgram(): WebGLProgram | null {
      vertexShader = createShader(gl.VERTEX_SHADER, vertexShaderSource);
      fragmentShader = createShader(gl.FRAGMENT_SHADER, fragmentShaderSource);

      if (!vertexShader || !fragmentShader) return null;

      const program = gl.createProgram();
      if (!program) return null;

      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragmentShader);
      gl.linkProgram(program);

      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error(gl.getProgramInfoLog(program));
        return null;
      }

      return program;
    }

    const program = createProgram();
    if (!program) return;

    gl.useProgram(program);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([
        -1, -1,
         1, -1,
        -1,  1,
         1,  1,
      ]),
      gl.STATIC_DRAW
    );

    const positionLocation = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const timeLocation = gl.getUniformLocation(program, "u_time");
    const resolutionLocation = gl.getUniformLocation(program, "u_resolution");
    
    let canvasWidth = canvas.width;
    let canvasHeight = canvas.height;

    let rafId: number | null = null;

    function render(time: number) {
      gl.viewport(0, 0, canvasWidth, canvasHeight);
      gl.clear(gl.COLOR_BUFFER_BIT);

      gl.uniform1f(timeLocation, time * 0.001);
      gl.uniform2f(resolutionLocation, canvasWidth, canvasHeight);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      rafId = requestAnimationFrame(render);
    }

    rafId = requestAnimationFrame(render);

    // Handle window resize
    const handleResize = () => {
      setCanvasSize();
      canvasWidth = canvas.width;
      canvasHeight = canvas.height;
      // The render function will use the updated dimensions on the next frame
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      gl.disableVertexAttribArray(positionLocation);
      if (positionBuffer) gl.deleteBuffer(positionBuffer);
      if (vertexShader) gl.deleteShader(vertexShader);
      if (fragmentShader) gl.deleteShader(fragmentShader);
      if (program) gl.deleteProgram(program);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="magic-burn-bg"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100vh",
        display: "block",
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
}