<template>
  <canvas
    ref="canvasRef"
    :width="size"
    :height="size"
    @pointerdown="startDraw"
    @pointermove="draw"
    @pointerup="endDraw"
    @pointerleave="endDraw"
    style="position: absolute; touch-action: none"
  ></canvas>
</template>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  size: { type: Number, default: 256 },
  strokeWidth: { type: Number, default: 6 },
  strokeColor: { type: String, default: "black" },
  lineCap: { type: String, default: "round" },
  lineJoin: { type: String, default: "round" },
  onFinish: Function,
});

const canvasRef = ref(null);
let ctx = null;
let isDrawing = false;
let path = [];

onMounted(() => {
  const canvas = canvasRef.value;
  ctx = canvas.getContext("2d", { willReadFrequently: true });
  ctx.lineWidth = props.strokeWidth;
  ctx.lineCap = props.lineCap;
  ctx.lineJoin = props.lineJoin;
  ctx.strokeStyle = props.strokeColor;
});

function startDraw(e) {
  e.preventDefault(); // penting untuk HP
  isDrawing = true;
  path = [getPointerPosition(e)];
  redraw();
}

function draw(e) {
  if (!isDrawing) return;
  e.preventDefault(); // mencegah scroll pada HP
  const pos = getPointerPosition(e);
  path.push(pos);
  redraw();
}

function endDraw(e) {
  if (!isDrawing) return;
  e.preventDefault();
  isDrawing = false;
  redraw();
  if (props.onFinish) props.onFinish(path);
}

function redraw() {
  ctx.clearRect(0, 0, props.size, props.size);
  ctx.beginPath();
  for (let i = 0; i < path.length; i++) {
    const pt = path[i];
    if (i === 0) ctx.moveTo(pt.x, pt.y);
    else ctx.lineTo(pt.x, pt.y);
  }
  ctx.stroke();
}

function getPointerPosition(e) {
  const rect = canvasRef.value.getBoundingClientRect();
  const clientX = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
  const clientY = e.clientY ?? e.touches?.[0]?.clientY ?? 0;
  return {
    x: clientX - rect.left,
    y: clientY - rect.top,
  };
}

function clearCanvas() {
  ctx.clearRect(0, 0, props.size, props.size);
  path = [];
}

defineExpose({ clearCanvas });
</script>
